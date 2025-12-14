import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Utensils, Map as MapIcon, DollarSign } from "lucide-react";
import WeatherCard from "@/components/WeatherCard";
import ItineraryCard from "@/components/ItineraryCard";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import heroImage from "@/assets/hero-ngu-hanh-son.jpg";
import marbleCraft from "@/assets/langda.jpg";
import foodImage from "@/assets/doan.jpg";
import aboutBg from "@/assets/nuinhs.jpg";
import foodBg from "@/assets/vietnamese-food.jpg";
import mapBg from "@/assets/bando.jpg";
import priceBg from "@/assets/tranhda.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  const quickActions = [
    {
      to: "/about#five-mountain",
      icon: Mountain,
      iconColor: "text-white",
      title: t.index.quickActions.aboutTitle,
      desc: t.index.quickActions.aboutDesc,
      bgImage: aboutBg,
    },
    {
      to: "/food#food-intro",
      icon: Utensils,
      iconColor: "text-white",
      title: t.index.quickActions.foodTitle,
      desc: t.index.quickActions.foodDesc,
      bgImage: foodBg,
    },
    {
      to: "/map",
      icon: MapIcon,
      iconColor: "text-white",
      title: t.index.quickActions.mapTitle,
      desc: t.index.quickActions.mapDesc,
      bgImage: mapBg,
    },
    {
      to: "/price-check#price-search",
      icon: DollarSign,
      iconColor: "text-white",
      title: t.index.quickActions.priceTitle,
      desc: t.index.quickActions.priceDesc,
      bgImage: priceBg,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up stagger-2">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up stagger-3">
            <Link to="/about">
              <Button size="lg" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {t.common.explore}
              </Button>
            </Link>
            <Link to="/map">
              <Button size="lg" variant="secondary" className="text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                {t.common.viewMap}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t.index.introTitle}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.index.introText}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <AnimatedSection key={action.to} animation="fade-in-up" delay={index * 100}>
                <Link to={action.to}>
                  <Card className="hover-lift cursor-pointer h-full group relative overflow-hidden min-h-[200px]">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${action.bgImage})` }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                      <action.icon className={`h-10 w-10 ${action.iconColor} mb-3 transition-transform duration-300 group-hover:scale-110 drop-shadow-lg`} />
                      <CardTitle className="text-white transition-colors duration-200 drop-shadow-lg">{action.title}</CardTitle>
                      <CardDescription className="text-white/90 drop-shadow-md">{action.desc}</CardDescription>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Schedule */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-in-left">
              <WeatherCard />
            </AnimatedSection>
            <AnimatedSection animation="fade-in-right">
              <ItineraryCard />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.index.highlights}
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="fade-in-left">
              <Card className="overflow-hidden shadow-card hover-lift group">
                <div className="h-64 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center img-zoom" 
                    style={{ backgroundImage: `url(${marbleCraft})` }} 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl transition-colors duration-200 group-hover:text-primary">
                    {t.index.marbleVillageTitle}
                  </CardTitle>
                  <CardDescription className="text-base">{t.index.marbleVillageDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/about#non-nuoc">
                    <Button className="transition-all duration-300 hover:scale-105">{t.common.learnMore}</Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right">
              <Card className="overflow-hidden shadow-card hover-lift group">
                <div className="h-64 overflow-hidden">
                  <div 
                    className="h-full w-full bg-cover bg-center img-zoom" 
                    style={{ backgroundImage: `url(${foodImage})` }} 
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl transition-colors duration-200 group-hover:text-primary">
                    {t.index.localCuisineTitle}
                  </CardTitle>
                  <CardDescription className="text-base">{t.index.localCuisineDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/food#food-intro">
                    <Button className="transition-all duration-300 hover:scale-105">{t.index.exploreFood}</Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
