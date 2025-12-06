import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle, CheckCircle } from "lucide-react";

type Props = {
  latitude?: number;
  longitude?: number;
  timezone?: string;
};

interface WeatherData {
  current_weather: { temperature: number; windspeed: number; weathercode: number };
  daily: { time: string[]; temperature_2m_max: number[]; precipitation_sum: number[] };
}

const TTL = 1000 * 60 * 15; // 15 minutes

export default function ItineraryCard({ latitude = 16.0021, longitude = 108.2658, timezone = "Asia/Ho_Chi_Minh" }: Props) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cacheKey = `weather_${latitude}_${longitude}`;

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.ts < TTL) {
          setWeather(parsed.data);
          setLoading(false);
          return;
        }
      } catch {
        // ignore
      }
    }

    setLoading(true);
    setError(null);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&current_weather=true&timezone=${encodeURIComponent(timezone)}&forecast_days=7`;

    let cancelled = false;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error("Network response was not ok");
        return r.json();
      })
      .then((json) => {
        if (cancelled) return;
        setWeather(json);
        localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: json }));
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || "Lỗi khi tải dữ liệu thời tiết");
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude, timezone]);

  function generateItineraries() {
    if (!weather) return [];

    const itineraries = [];

    // Analyze first 3 days
    for (let i = 0; i < Math.min(3, weather.daily.time.length); i++) {
      const day = weather.daily.time[i];
      const tempMax = weather.daily.temperature_2m_max[i];
      const rain = weather.daily.precipitation_sum[i];
      const date = new Date(day).toLocaleDateString("vi-VN", { weekday: "short", day: "numeric", month: "short" });

      let activities: string[] = [];
      let warning = "";

      // Suggest based on weather conditions
      if (rain > 10) {
        // Rainy day - indoor activities
        warning = "Mưa nhiều, tránh hoạt động ngoài trời";
        activities = ["Viếng chùa Linh Ứng", "Ngắm hang động Huyền Không", "Mua sắm tại làng đá mỹ nghệ"];
      } else if (rain > 2) {
        // Light rain - moderate activities
        warning = "Có mưa, mang ô khi đi";
        activities = ["Tham quan Chùa Tam Thai", "Khám phá Động Huyền Không", "Ăn uống tại quán địa phương"];
      } else if (tempMax > 35) {
        // Very hot - early morning or evening
        warning = "Thời tiết nóng, hoạt động sớm hoặc chiều tối";
        activities = ["Leo núi sớm (5h-8h)", "Tắm biển Non Nước buổi chiều", "Ăn hải sản tươi sống"];
      } else if (tempMax > 30) {
        // Hot - normal activities
        warning = "";
        activities = ["Leo núi Kim Sơn", "Tham quan Bãi biển Non Nước", "Mua quà lưu niệm"];
      } else {
        // Ideal weather
        warning = "";
        activities = ["Leo núi toàn bộ 5 ngọn", "Tham quan hang động", "Chụp ảnh cảnh đẹp"];
      }

      itineraries.push({
        date,
        tempMax: Math.round(tempMax),
        rain,
        activities,
        warning,
      });
    }

    return itineraries;
  }

  const itineraries = generateItineraries();

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Calendar className="h-8 w-8 text-secondary" />
          <CardTitle>Gợi ý lịch trình</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {loading && <div className="text-muted-foreground">Đang tải dữ liệu thời tiết…</div>}
        {error && <div className="text-destructive">{error}</div>}

        {itineraries.length > 0 && (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Lịch trình tham quan được tối ưu hóa dựa trên dự báo thời tiết 3 ngày tới
            </p>

            {itineraries.map((item, idx) => (
              <div key={idx} className="p-3 bg-muted rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-sm">{item.date}</div>
                  <div className="text-sm font-bold">{item.tempMax}°C</div>
                </div>

                {item.warning && (
                  <div className="flex items-start gap-2 p-2 bg-amber-100 text-amber-900 rounded text-xs">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                    <span>{item.warning}</span>
                  </div>
                )}

                {item.rain > 0 && (
                  <div className="text-xs text-muted-foreground">
                    Dự báo mưa: {item.rain} mm
                  </div>
                )}

                <div className="space-y-1">
                  {item.activities.map((activity, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full text-xs" onClick={() => window.open("https://www.travelandleisure.com/travel-guides/danang-marble-mountains", "_blank")}>
              Xem thêm gợi ý chi tiết
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
