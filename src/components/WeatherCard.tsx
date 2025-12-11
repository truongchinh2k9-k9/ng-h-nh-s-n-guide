import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, CloudRain, CloudSnow, Zap, Wind } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  latitude?: number;
  longitude?: number;
  timezone?: string;
};

const TTL = 1000 * 60 * 15; // 15 minutes

function weatherCodeToIcon(code: number) {
  if (code === 0) return Sun;
  if ([1, 2, 3, 45, 48].includes(code)) return Cloud;
  if ([51, 53, 55, 61, 63, 65].includes(code)) return CloudRain;
  if ([71, 73, 75].includes(code)) return CloudSnow;
  if ([95].includes(code)) return Zap;
  return Cloud;
}

export default function WeatherCard({ latitude = 16.0021, longitude = 108.2658, timezone = "Asia/Ho_Chi_Minh" }: Props) {
  const { t, language } = useLanguage();
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<"C" | "F">("C");

  const cacheKey = `weather_${latitude}_${longitude}`;

  const weatherCodeToText = (code: number) => {
    return t.weather.conditions[code] ?? (language === "vi" ? "Thời tiết thay đổi" : language === "en" ? "Changing weather" : "날씨 변화");
  };

  useEffect(() => {
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        if (Date.now() - parsed.ts < TTL) {
          setData(parsed.data);
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
        setData(json);
        localStorage.setItem(cacheKey, JSON.stringify({ ts: Date.now(), data: json }));
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || t.common.error);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude, timezone]);

  function cToF(c: number) {
    return Math.round((c * 9) / 5 + 32);
  }

  const dateLocale = language === "vi" ? "vi-VN" : language === "ko" ? "ko-KR" : "en-US";

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Cloud className="h-8 w-8 text-primary" />
          <CardTitle>{t.weather.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {loading && <div className="text-muted-foreground">{t.weather.loading}</div>}
        {error && <div className="text-destructive">{error}</div>}

        {data && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">{t.weather.location}</div>
                <div className="text-3xl font-bold">
                  {unit === "C" ? Math.round(data.current_weather.temperature) : cToF(data.current_weather.temperature)}°{unit}
                </div>
                <div className="text-sm text-muted-foreground">{t.weather.wind}: {data.current_weather.windspeed} km/h</div>
              </div>

              <div className="text-right">
                <div className="text-sm text-muted-foreground">{t.weather.status}</div>
                <div className="font-medium flex items-center gap-2 justify-end">
                  {(() => {
                    const Icon = weatherCodeToIcon(data.current_weather.weathercode);
                    return <Icon className="h-6 w-6" />;
                  })()}
                  <span>{weatherCodeToText(data.current_weather.weathercode)}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant={unit === "C" ? undefined : "outline"} size="sm" onClick={() => setUnit("C")}>°C</Button>
              <Button variant={unit === "F" ? undefined : "outline"} size="sm" onClick={() => setUnit("F")}>°F</Button>
            </div>

            <div>
              <div className="text-sm text-muted-foreground mb-2">{t.weather.forecast}</div>
              <div className="grid grid-cols-1 gap-2">
                {data.daily.time.map((d: string, i: number) => (
                  <div key={d} className="flex items-center justify-between p-2 bg-muted rounded">
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = weatherCodeToIcon(data.daily.weathercode[i]);
                        return <Icon className="h-5 w-5" />;
                      })()}
                      <div className="text-sm">
                        {new Date(d).toLocaleDateString(dateLocale, { weekday: "short", day: "numeric" })}
                        <div className="text-xs text-muted-foreground">{weatherCodeToText(data.daily.weathercode[i])}</div>
                      </div>
                    </div>

                    <div className="text-sm font-medium text-right">
                      {unit === "C" ? Math.round(data.daily.temperature_2m_max[i]) : cToF(data.daily.temperature_2m_max[i])}° / {unit === "C" ? Math.round(data.daily.temperature_2m_min[i]) : cToF(data.daily.temperature_2m_min[i])}°
                      <div className="text-xs text-muted-foreground">{t.weather.rain}: {data.daily.precipitation_sum[i]} mm</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
