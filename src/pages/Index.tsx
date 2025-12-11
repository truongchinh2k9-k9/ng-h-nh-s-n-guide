import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Utensils, Map as MapIcon, DollarSign } from "lucide-react";
import WeatherCard from "@/components/WeatherCard";
import ItineraryCard from "@/components/ItineraryCard";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ngu-hanh-son.jpg";
import marbleCraft from "@/assets/langda.jpg";
import foodImage from "@/assets/doan.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <Button size="lg" className="text-lg">
                {t.common.explore}
              </Button>
            </Link>
            <Link to="/map">
              <Button size="lg" variant="secondary" className="text-lg">
                {t.common.viewMap}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.index.introTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.index.introText}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/about#five-mountain">
                <CardHeader>
                  <Mountain className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>{t.index.quickActions.aboutTitle}</CardTitle>
                  <CardDescription>{t.index.quickActions.aboutDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/food#food-intro">
                <CardHeader>
                  <Utensils className="h-12 w-12 text-secondary mb-2" />
                  <CardTitle>{t.index.quickActions.foodTitle}</CardTitle>
                  <CardDescription>{t.index.quickActions.foodDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/map">
                <CardHeader>
                  <MapIcon className="h-12 w-12 text-nature mb-2" />
                  <CardTitle>{t.index.quickActions.mapTitle}</CardTitle>
                  <CardDescription>{t.index.quickActions.mapDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/price-check#price-search">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-accent mb-2" />
                  <CardTitle>{t.index.quickActions.priceTitle}</CardTitle>
                  <CardDescription>{t.index.quickActions.priceDesc}</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather & Schedule */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <WeatherCard />
            <ItineraryCard />
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.index.highlights}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-card hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${marbleCraft})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">{t.index.marbleVillageTitle}</CardTitle>
                <CardDescription className="text-base">{t.index.marbleVillageDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/about#non-nuoc">
                  <Button>{t.common.learnMore}</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${foodImage})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">{t.index.localCuisineTitle}</CardTitle>
                <CardDescription className="text-base">{t.index.localCuisineDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/food#food-intro">
                  <Button>{t.index.exploreFood}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
