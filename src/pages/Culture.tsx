import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Church, Star, Camera, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

// Import images
import donghuyenkhong from "@/assets/donghuyenkhong.jpg";
import phat from "@/assets/phat.jpg";
import nuinhs from "@/assets/nuinhs.jpg";

const templeImages = [phat, donghuyenkhong, nuinhs];

const Culture = () => {
  const { t } = useLanguage();

  const templeDetails = [
    {
      highlights: ["Tượng Quan Âm cao", "Kiến trúc cổ kính", "Điêu khắc tinh xảo"],
      history: "Được xây dựng từ thế kỷ 19, là ngôi chùa linh thiêng nhất tại Ngũ Hành Sơn",
      openTime: "6:00 - 18:00 hàng ngày",
      entryFee: "Miễn phí"
    },
    {
      highlights: ["Ánh sáng thiên đường", "Hang động tự nhiên", "Bàn thờ Phật"],
      history: "Hang động được hình thành tự nhiên, nổi tiếng với ánh sáng chiếu qua khe núi",
      openTime: "7:00 - 17:30 hàng ngày",
      entryFee: "40.000 VNĐ (vé leo núi)"
    },
    {
      highlights: ["Vị trí đỉnh núi", "Không gian thiền định", "Cảnh quan toàn cảnh"],
      history: "Ngôi chùa cổ nằm trên đỉnh Kim Sơn, được trùng tu nhiều lần qua các thời kỳ",
      openTime: "6:30 - 17:30 hàng ngày",
      entryFee: "40.000 VNĐ (vé leo núi)"
    }
  ];

  const culturalFacts = [
    {
      icon: <Church className="h-8 w-8" />,
      title: "Di sản Phật giáo",
      description: "Ngũ Hành Sơn là trung tâm Phật giáo quan trọng với lịch sử hơn 400 năm"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Tâm linh & Thiền định",
      description: "Nơi lý tưởng cho những ai tìm kiếm sự bình yên và kết nối tâm linh"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Nghệ thuật điêu khắc",
      description: "Hàng trăm tác phẩm điêu khắc đá quý giá được bảo tồn tại các chùa"
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
            <span className="text-foreground font-medium">{t.about.cultureTitle}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section
        className="text-primary-foreground py-24 bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.6), rgba(2,6,23,0.4)), url(${phat})`,
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fade-in-up">
            <Church className="h-20 w-20 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.about.cultureTitle}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Khám phá di sản văn hóa Phật giáo và những ngôi chùa linh thiêng tại Ngũ Hành Sơn
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Cultural Facts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold">Giá trị văn hóa</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {culturalFacts.map((fact, index) => (
              <AnimatedSection key={index} animation="scale-in" delay={index * 100}>
                <Card className="text-center shadow-card hover-lift h-full">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                      {fact.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{fact.title}</h3>
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Temples List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold">{t.about.templesTitle}</h2>
            <p className="text-muted-foreground mt-2">Những điểm đến tâm linh không thể bỏ qua</p>
          </AnimatedSection>

          <div className="space-y-12 max-w-5xl mx-auto">
            {t.about.temples.map((temple, index) => (
              <AnimatedSection 
                key={index} 
                animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} 
                delay={index * 100}
              >
                <Card className="overflow-hidden shadow-card hover-lift">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Image */}
                    <div className="md:w-2/5 relative overflow-hidden">
                      <img 
                        src={templeImages[index]} 
                        alt={temple.name}
                        className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                          #{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-3/5 p-6 md:p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Church className="h-7 w-7 text-primary" />
                          {temple.name}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="p-0 space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {temple.description}
                        </p>

                        <p className="text-sm text-foreground">
                          <strong>Lịch sử:</strong> {templeDetails[index].history}
                        </p>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm">
                            <Camera className="h-4 w-4 text-primary" />
                            Điểm nổi bật
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {templeDetails[index].highlights.map((highlight, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                          <div>
                            <p className="text-xs text-muted-foreground">Giờ mở cửa</p>
                            <p className="font-medium text-sm">{templeDetails[index].openTime}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Phí tham quan</p>
                            <p className="font-medium text-sm">{templeDetails[index].entryFee}</p>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="blur-in" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Lưu ý khi tham quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold mb-2">👔 Trang phục</p>
                <p className="text-sm opacity-90">Mặc trang phục kín đáo, lịch sự khi vào chùa</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold mb-2">📸 Chụp ảnh</p>
                <p className="text-sm opacity-90">Không chụp ảnh tại những nơi có biển cấm</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold mb-2">🤫 Giữ yên lặng</p>
                <p className="text-sm opacity-90">Giữ không gian yên tĩnh cho người cầu nguyện</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold mb-2">👟 Giày dép</p>
                <p className="text-sm opacity-90">Bỏ giày trước khi vào điện thờ</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h2 className="text-3xl font-bold mb-4">Khám phá thêm</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/mountains" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Năm ngọn núi
              </Link>
              <Link 
                to="/activities" 
                className="inline-flex items-center gap-2 bg-muted text-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Hoạt động du lịch
              </Link>
              <Link 
                to="/map" 
                className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MapPin className="h-5 w-5" />
                Xem bản đồ
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;