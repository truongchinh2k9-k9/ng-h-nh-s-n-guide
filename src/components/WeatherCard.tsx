import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Sun, CloudRain, CloudSnow, Zap, Wind, Thermometer, Droplets } from "lucide-react";
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

function weatherCodeToColor(code: number) {
  if (code === 0) return "text-yellow-500";
  if ([1, 2, 3, 45, 48].includes(code)) return "text-gray-500";
  if ([51, 53, 55, 61, 63, 65].includes(code)) return "text-blue-500";
  if ([71, 73, 75].includes(code)) return "text-sky-300";
  if ([95].includes(code)) return "text-purple-500";
  return "text-gray-500";
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
    <Card className="shadow-card overflow-hidden animate-fade-in">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/20 rounded-full animate-pulse-soft">
            <Cloud className="h-7 w-7 text-primary" />
          </div>
          <CardTitle className="text-lg">{t.weather.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {loading && (
          <div className="space-y-3">
            <div className="h-16 bg-muted rounded-lg skeleton-shimmer" />
            <div className="h-10 bg-muted rounded-lg skeleton-shimmer" />
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-muted rounded-lg skeleton-shimmer" style={{ animationDelay: `${i * 100}ms` }} />
              ))}
            </div>
          </div>
        )}
        {error && <div className="text-destructive p-4 bg-destructive/10 rounded-lg">{error}</div>}

        {data && (
          <div className="space-y-5">
            {/* Current Weather - Hero Style */}
            <div className="relative p-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-border/50 animate-scale-in">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{t.weather.location}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {unit === "C" ? Math.round(data.current_weather.temperature) : cToF(data.current_weather.temperature)}°{unit}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Wind className="h-4 w-4" />
                    <span>{data.current_weather.windspeed} km/h</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="mb-2">
                    {(() => {
                      const Icon = weatherCodeToIcon(data.current_weather.weathercode);
                      const colorClass = weatherCodeToColor(data.current_weather.weathercode);
                      return (
                        <div className={`p-3 rounded-full bg-background/80 shadow-lg inline-block animate-bounce-subtle ${colorClass}`}>
                          <Icon className="h-10 w-10" />
                        </div>
                      );
                    })()}
                  </div>
                  <div className="text-sm font-medium">{weatherCodeToText(data.current_weather.weathercode)}</div>
                </div>
              </div>
            </div>

            {/* Unit Toggle */}
            <div className="flex gap-2 justify-center">
              <Button 
                variant={unit === "C" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setUnit("C")}
                className="transition-all duration-300 hover:scale-105"
              >
                °C
              </Button>
              <Button 
                variant={unit === "F" ? "default" : "outline"} 
                size="sm" 
                onClick={() => setUnit("F")}
                className="transition-all duration-300 hover:scale-105"
              >
                °F
              </Button>
            </div>

            {/* Forecast */}
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                {t.weather.forecast}
              </div>
              <div className="grid grid-cols-1 gap-2">
                {data.daily.time.map((d: string, i: number) => (
                  <div 
                    key={d} 
                    className="flex items-center justify-between p-3 bg-muted/50 hover:bg-muted rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-md group"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      {(() => {
                        const Icon = weatherCodeToIcon(data.daily.weathercode[i]);
                        const colorClass = weatherCodeToColor(data.daily.weathercode[i]);
                        return (
                          <div className={`p-1.5 rounded-full bg-background shadow-sm group-hover:scale-110 transition-transform ${colorClass}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                        );
                      })()}
                      <div>
                        <div className="text-sm font-medium">
                          {new Date(d).toLocaleDateString(dateLocale, { weekday: "short", day: "numeric" })}
                        </div>
                        <div className="text-xs text-muted-foreground">{weatherCodeToText(data.daily.weathercode[i])}</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-bold">
                        <span className="text-orange-500">{unit === "C" ? Math.round(data.daily.temperature_2m_max[i]) : cToF(data.daily.temperature_2m_max[i])}°</span>
                        <span className="text-muted-foreground mx-1">/</span>
                        <span className="text-blue-500">{unit === "C" ? Math.round(data.daily.temperature_2m_min[i]) : cToF(data.daily.temperature_2m_min[i])}°</span>
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                        <Droplets className="h-3 w-3 text-blue-400" />
                        {data.daily.precipitation_sum[i]} mm
                      </div>
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
