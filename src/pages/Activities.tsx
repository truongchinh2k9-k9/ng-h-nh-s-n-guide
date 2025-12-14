import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Compass, 
  Mountain, 
  Waves, 
  Hammer, 
  Clock, 
  Users, 
  Star, 
  ChevronRight,
  MapPin,
  Camera
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";

// Import images
import nuinhs from "@/assets/nuinhs.jpg";
import donghuyenkhong from "@/assets/donghuyenkhong.jpg";
import casong from "@/assets/casong.jpg";
import langda from "@/assets/langda.jpg";

const activityImages = [nuinhs, donghuyenkhong, casong, langda];
const activityIcons = [
  <Mountain className="h-8 w-8" />,
  <Compass className="h-8 w-8" />,
  <Waves className="h-8 w-8" />,
  <Hammer className="h-8 w-8" />
];

const Activities = () => {
  const { t } = useLanguage();

  const activityDetails = [
    {
      duration: "2-4 giờ",
      difficulty: "Trung bình",
      bestTime: "Sáng sớm hoặc chiều muộn",
      tips: ["Mang giày thể thao", "Mang nước uống", "Đến sớm tránh đông"],
      rating: 4.8,
      reviews: 1250
    },
    {
      duration: "2-3 giờ",
      difficulty: "Dễ",
      bestTime: "Cả ngày",
      tips: ["Trang phục lịch sự", "Giữ yên lặng", "Tôn trọng không gian"],
      rating: 4.9,
      reviews: 980
    },
    {
      duration: "Cả ngày",
      difficulty: "Dễ",
      bestTime: "Buổi chiều",
      tips: ["Mang kem chống nắng", "Đồ bơi", "Dù che nắng"],
      rating: 4.7,
      reviews: 2100
    },
    {
      duration: "1-2 giờ",
      difficulty: "Dễ",
      bestTime: "Buổi sáng",
      tips: ["Đặt trước với nghệ nhân", "Mang theo túi đựng sản phẩm"],
      rating: 4.6,
      reviews: 450
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
            <span className="text-foreground font-medium">{t.about.activitiesTitle}</span>
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
            <Compass className="h-20 w-20 mx-auto mb-6 animate-float" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t.about.activitiesTitle}
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Trải nghiệm những hoạt động thú vị và đáng nhớ tại Ngũ Hành Sơn
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {t.about.activities.map((activity, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <Card className="overflow-hidden shadow-card hover-lift h-full group">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={activityImages[index]} 
                      alt={activity.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-sm">{activityDetails[index].rating}</span>
                      <span className="text-xs text-muted-foreground">({activityDetails[index].reviews})</span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                      <div className="w-12 h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                        {activityIcons[index]}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{activity.title}</h3>
                        <p className="text-sm opacity-80">{activityDetails[index].difficulty}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Info Grid */}
                    <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
                      <div className="text-center">
                        <Clock className="h-5 w-5 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Thời gian</p>
                        <p className="font-medium text-sm">{activityDetails[index].duration}</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-5 w-5 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Độ khó</p>
                        <p className="font-medium text-sm">{activityDetails[index].difficulty}</p>
                      </div>
                      <div className="text-center">
                        <Camera className="h-5 w-5 mx-auto text-primary mb-1" />
                        <p className="text-xs text-muted-foreground">Thời điểm</p>
                        <p className="font-medium text-sm">{activityDetails[index].bestTime}</p>
                      </div>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">💡 Mẹo hữu ích</h4>
                      <div className="flex flex-wrap gap-2">
                        {activityDetails[index].tips.map((tip, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                          >
                            {tip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Itinerary */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold">Lịch trình gợi ý</h2>
            <p className="text-muted-foreground mt-2">Trải nghiệm trọn vẹn Ngũ Hành Sơn trong 1 ngày</p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {[
                    { time: "6:00 - 8:00", activity: "Leo núi Thủy Sơn, khám phá động Huyền Không", icon: <Mountain className="h-5 w-5" /> },
                    { time: "8:00 - 9:30", activity: "Thăm chùa Linh Ứng & chùa Tam Thai", icon: <Compass className="h-5 w-5" /> },
                    { time: "9:30 - 11:00", activity: "Tham quan làng nghề đá Non Nước", icon: <Hammer className="h-5 w-5" /> },
                    { time: "11:00 - 12:30", activity: "Ăn trưa với đặc sản địa phương", icon: <Star className="h-5 w-5" /> },
                    { time: "13:00 - 17:00", activity: "Tắm biển Non Nước & nghỉ ngơi", icon: <Waves className="h-5 w-5" /> }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-primary font-semibold">{item.time}</p>
                        <p className="text-foreground">{item.activity}</p>
                      </div>
                      {index < 4 && (
                        <div className="absolute left-5 h-full w-px bg-border" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h2 className="text-3xl font-bold mb-4">Bắt đầu chuyến phiêu lưu!</h2>
            <p className="text-lg mb-8 opacity-90">Xem bản đồ chi tiết và tra giá tham khảo</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/map" 
                className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                <MapPin className="h-5 w-5" />
                Xem bản đồ
              </Link>
              <Link 
                to="/price-check" 
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all"
              >
                Tra giá tham khảo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;