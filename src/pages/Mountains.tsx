import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, MapPin, Camera, Clock, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

// Import images
import nuinhs from "@/assets/nuinhs.jpg";
import donghuyenkhong from "@/assets/donghuyenkhong.jpg";
import phat from "@/assets/phat.jpg";
import langda from "@/assets/langda.jpg";
import casong from "@/assets/casong.jpg";

const mountainImages = [nuinhs, donghuyenkhong, phat, langda, casong];

const Mountains = () => {
  const { t } = useLanguage();

  const mountainDetails = [
    {
      highlights: ["Động Huyền Không", "Chùa Tam Thai", "Đỉnh cao nhất"],
      visitTime: "2-3 giờ",
      tips: "Mang giày thoải mái, đến sớm để tránh đông"
    },
    {
      highlights: ["Thảm thực vật xanh", "Hang động nhỏ", "Không gian yên tĩnh"],
      visitTime: "1-2 giờ",
      tips: "Lý tưởng cho những ai thích sự yên bình"
    },
    {
      highlights: ["Động Huyền Không", "Ánh sáng thiên đường", "Chùa Linh Ứng"],
      visitTime: "3-4 giờ",
      tips: "Núi lớn nhất, nên dành nhiều thời gian"
    },
    {
      highlights: ["Truyền thuyết ngọn lửa", "Ít khách du lịch", "Không gian thiền định"],
      visitTime: "1-2 giờ",
      tips: "Phù hợp cho những ai muốn tránh đám đông"
    },
    {
      highlights: ["Gần biển nhất", "Bãi đá đẹp", "Không gian thoáng đãng"],
      visitTime: "1-2 giờ",
      tips: "Kết hợp với tắm biển Non Nước"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="bg-muted py-3">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/about" className="hover:text-primary transition-colors">Giới thiệu</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{t.about.fiveMountainsTitle}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section
        className="text-primary-foreground py-24 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.6), rgba(2,6,23,0.4)), url(${nuinhs})`,
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-in-up">
            <Mountain className="h-20 w-20 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.about.fiveMountainsTitle}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Khám phá vẻ đẹp huyền bí của năm ngọn núi đá vôi mang tên ngũ hành: Kim, Mộc, Thủy, Hỏa, Thổ
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mountains Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {t.about.mountains.map((mountain, index) => (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} 
                delay={index * 100}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Image */}
                  <div className="lg:w-1/2 w-full">
                    <div className="relative overflow-hidden rounded-2xl shadow-card group">
                      <img 
                        src={mountainImages[index]} 
                        alt={mountain.name}
                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">{mountain.element}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 w-full">
                    <Card className="shadow-card hover-lift h-full border-l-4 border-l-primary">
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Mountain className="h-8 w-8 text-primary" />
                          {mountain.name}
                        </CardTitle>
                        <p className="text-primary font-semibold">{mountain.element}</p>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {mountain.description}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Camera className="h-5 w-5 text-primary" />
                            Điểm nổi bật
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {mountainDetails[index].highlights.map((highlight, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Visit Info */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-5 w-5 text-primary" />
                            <span>Thời gian: {mountainDetails[index].visitTime}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>Ngũ Hành Sơn, Đà Nẵng</span>
                          </div>
                        </div>

                        {/* Tips */}
                        <div className="bg-muted p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            💡 <strong>Mẹo:</strong> {mountainDetails[index].tips}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng khám phá?</h2>
            <p className="text-lg mb-8 opacity-90">Xem bản đồ chi tiết để lên kế hoạch chuyến đi</p>
            <Link 
              to="/map" 
              className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              <MapPin className="h-5 w-5" />
              Xem bản đồ
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mountains;