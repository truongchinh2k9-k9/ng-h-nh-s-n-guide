import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, AlertCircle, CheckCircle, MapPin, Clock, Sun, CloudRain, Thermometer, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t, language } = useLanguage();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState(0);

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
        setError(err.message || t.common.error);
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [latitude, longitude, timezone]);

  const dateLocale = language === "vi" ? "vi-VN" : language === "ko" ? "ko-KR" : "en-US";

  function generateItineraries() {
    if (!weather) return [];

    const itineraries = [];

    // Analyze first 3 days
    for (let i = 0; i < Math.min(3, weather.daily.time.length); i++) {
      const day = weather.daily.time[i];
      const tempMax = weather.daily.temperature_2m_max[i];
      const rain = weather.daily.precipitation_sum[i];
      const date = new Date(day);
      const dateStr = date.toLocaleDateString(dateLocale, { weekday: "long", day: "numeric", month: "short" });
      const dayName = date.toLocaleDateString(dateLocale, { weekday: "short" });

      let activities: string[] = [];
      let warning = "";
      let weatherType: "sunny" | "rainy" | "hot" | "ideal" = "ideal";
      let icon = Sun;

      // Suggest based on weather conditions
      if (rain > 10) {
        weatherType = "rainy";
        icon = CloudRain;
        warning = t.itinerary.warnings.heavyRain;
        activities = t.itinerary.activities.heavyRain;
      } else if (rain > 2) {
        weatherType = "rainy";
        icon = CloudRain;
        warning = t.itinerary.warnings.lightRain;
        activities = t.itinerary.activities.lightRain;
      } else if (tempMax > 35) {
        weatherType = "hot";
        icon = Thermometer;
        warning = t.itinerary.warnings.veryHot;
        activities = t.itinerary.activities.veryHot;
      } else if (tempMax > 30) {
        weatherType = "sunny";
        icon = Sun;
        warning = "";
        activities = t.itinerary.activities.hot;
      } else {
        weatherType = "ideal";
        icon = Sparkles;
        warning = "";
        activities = t.itinerary.activities.ideal;
      }

      itineraries.push({
        date: dateStr,
        dayName,
        dayNumber: date.getDate(),
        tempMax: Math.round(tempMax),
        rain,
        activities,
        warning,
        weatherType,
        icon,
      });
    }

    return itineraries;
  }

  const itineraries = generateItineraries();

  const weatherTypeColors = {
    sunny: "from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    rainy: "from-blue-500/20 to-sky-500/20 border-blue-500/30",
    hot: "from-red-500/20 to-orange-500/20 border-red-500/30",
    ideal: "from-green-500/20 to-emerald-500/20 border-green-500/30",
  };

  const weatherTypeIconColors = {
    sunny: "text-yellow-500 bg-yellow-500/20",
    rainy: "text-blue-500 bg-blue-500/20",
    hot: "text-red-500 bg-red-500/20",
    ideal: "text-green-500 bg-green-500/20",
  };

  return (
    <Card className="shadow-card overflow-hidden animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-secondary/10 to-accent/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-secondary/20 rounded-full animate-pulse-soft">
            <Calendar className="h-7 w-7 text-secondary" />
          </div>
          <div>
            <CardTitle className="text-lg">{t.itinerary.title}</CardTitle>
            <p className="text-xs text-muted-foreground mt-0.5">{t.itinerary.description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {loading && (
          <div className="space-y-3">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 w-16 bg-muted rounded-xl skeleton-shimmer" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
            <div className="h-40 bg-muted rounded-xl skeleton-shimmer" />
          </div>
        )}
        {error && <div className="text-destructive p-4 bg-destructive/10 rounded-lg">{error}</div>}

        {itineraries.length > 0 && (
          <div className="space-y-4">
            {/* Day Selector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {itineraries.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`flex-shrink-0 flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    activeDay === idx
                      ? `bg-gradient-to-br ${weatherTypeColors[item.weatherType]} border-primary shadow-lg`
                      : "bg-muted/50 border-transparent hover:border-border"
                  }`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <span className="text-xs text-muted-foreground">{item.dayName}</span>
                  <span className={`text-xl font-bold ${activeDay === idx ? "text-primary" : ""}`}>{item.dayNumber}</span>
                  <item.icon className={`h-4 w-4 mt-1 ${weatherTypeIconColors[item.weatherType].split(" ")[0]}`} />
                </button>
              ))}
            </div>

            {/* Active Day Details */}
            {itineraries[activeDay] && (
              <div 
                key={activeDay}
                className={`p-4 rounded-xl bg-gradient-to-br ${weatherTypeColors[itineraries[activeDay].weatherType]} border animate-scale-in`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-full ${weatherTypeIconColors[itineraries[activeDay].weatherType]}`}>
                      {React.createElement(itineraries[activeDay].icon, { className: "h-6 w-6" })}
                    </div>
                    <div>
                      <div className="font-semibold">{itineraries[activeDay].date}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <Thermometer className="h-3.5 w-3.5" />
                        {itineraries[activeDay].tempMax}°C
                        {itineraries[activeDay].rain > 0 && (
                          <>
                            <span className="mx-1">•</span>
                            <CloudRain className="h-3.5 w-3.5 text-blue-500" />
                            {itineraries[activeDay].rain}mm
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                {itineraries[activeDay].warning && (
                  <div className="flex items-start gap-2 p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-200 rounded-lg text-sm mb-4 animate-fade-in">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>{itineraries[activeDay].warning}</span>
                  </div>
                )}

                {/* Activities */}
                <div className="space-y-2">
                  <div className="text-sm font-medium flex items-center gap-2 mb-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    {language === "vi" ? "Gợi ý hoạt động" : language === "en" ? "Suggested Activities" : "추천 활동"}
                  </div>
                  <div className="grid gap-2">
                    {itineraries[activeDay].activities.map((activity, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3 p-3 bg-background/60 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-background/80 hover:translate-x-1 group"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <div className="p-1.5 rounded-full bg-green-500/20 text-green-600 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm">{activity}</span>
                        </div>
                        <Clock className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA Button */}
            <Button 
              variant="outline" 
              className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => window.open("https://www.travelandleisure.com/travel-guides/danang-marble-mountains", "_blank")}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                {t.itinerary.moreDetails}
                <Sparkles className="h-4 w-4" />
              </span>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
