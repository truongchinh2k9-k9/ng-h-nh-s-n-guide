import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mountain, Church, Compass, ChevronRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import vietnameseFood from "@/assets/nuinhs.jpg";
import donghuyenkhong from "@/assets/donghuyenkhong.jpg";
import phat from "@/assets/phat.jpg";

const About = () => {
  const { t } = useLanguage();

  const subPages = [
    {
      title: t.about.fiveMountainsTitle,
      description: "Khám phá vẻ đẹp huyền bí của Kim, Mộc, Thủy, Hỏa, Thổ",
      icon: <Mountain className="h-8 w-8" />,
      image: vietnameseFood,
      link: "/mountains",
      items: t.about.mountains.slice(0, 3).map(m => m.name)
    },
    {
      title: t.about.cultureTitle,
      description: "Di sản Phật giáo và những ngôi chùa linh thiêng",
      icon: <Church className="h-8 w-8" />,
      image: phat,
      link: "/culture",
      items: t.about.temples.map(t => t.name)
    },
    {
      title: t.about.activitiesTitle,
      description: "Trải nghiệm những hoạt động thú vị tại Ngũ Hành Sơn",
      icon: <Compass className="h-8 w-8" />,
      image: donghuyenkhong,
      link: "/activities",
      items: t.about.activities.slice(0, 3).map(a => a.title)
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${vietnameseFood})`,
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <Mountain className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {t.about.headerTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up stagger-2">
            {t.about.headerSubtitle}
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">{t.about.historyTitle}</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                {t.about.historyText1}
              </p>
              <p className="text-lg leading-relaxed mb-6">
                {t.about.historyText2}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sub-pages Navigation Cards */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold">Khám phá chi tiết</h2>
            <p className="text-muted-foreground mt-2">Chọn chủ đề bạn muốn tìm hiểu</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subPages.map((page, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Link to={page.link} className="block h-full group">
                  <Card className="overflow-hidden shadow-card hover-lift h-full transition-all duration-300 group-hover:border-primary">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={page.image} 
                        alt={page.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground">
                            {page.icon}
                          </div>
                          <h3 className="font-bold text-xl">{page.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-5">
                      <p className="text-muted-foreground mb-4">{page.description}</p>
                      
                      {/* Preview Items */}
                      <div className="space-y-2 mb-4">
                        {page.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 text-primary" />
                            <span className="text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Xem chi tiết</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Non Nuoc Village */}
      <section id="non-nuoc" className="py-16 bg-ocean text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="blur-in" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t.about.nonNuocTitle}</h2>
            <p className="text-lg leading-relaxed mb-6">
              {t.about.nonNuocText1}
            </p>
            <p className="text-lg leading-relaxed">
              {t.about.nonNuocText2}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
