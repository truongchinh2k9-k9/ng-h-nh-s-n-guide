import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mountain, Utensils, Map as MapIcon, DollarSign, Cloud, Calendar } from "lucide-react";
import WeatherCard from "@/components/WeatherCard";
import ItineraryCard from "@/components/ItineraryCard";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ngu-hanh-son.jpg";
import marbleCraft from "@/assets/langda.jpg";
import foodImage from "@/assets/doan.jpg";

const Index = () => {
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
            Khám phá Ngũ Hành Sơn
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Thiên nhiên hùng vĩ - Văn hóa độc đáo - Nghề đá truyền thống
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/about">
              <Button size="lg" className="text-lg">
                Khám phá ngay
              </Button>
            </Link>
            <Link to="/map">
              <Button size="lg" variant="secondary" className="text-lg">
                Xem bản đồ
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
              Ngũ Hành Sơn - Danh thắng của Đà Nẵng
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ngũ Hành Sơn là quần thể 5 ngọn núi đá vôi mang tên 5 yếu tố Kim, Mộc, Thủy, Hỏa, Thổ. 
              Nơi đây là điểm đến hấp dẫn với hệ thống hang động thiên nhiên, chùa chiền linh thiêng, 
              và làng nghề đá mỹ nghệ Non Nước nổi tiếng. Hãy để chúng tôi đồng hành cùng bạn 
              khám phá vẻ đẹp kỳ vĩ này!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/about">
                <CardHeader>
                  <Mountain className="h-12 w-12 text-primary mb-2" />
                  <CardTitle>Giới thiệu</CardTitle>
                  <CardDescription>
                    Tìm hiểu về 5 ngọn núi, lịch sử và văn hóa
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/food">
                <CardHeader>
                  <Utensils className="h-12 w-12 text-secondary mb-2" />
                  <CardTitle>Ẩm thực</CardTitle>
                  <CardDescription>
                    Khám phá món ăn đặc sản địa phương
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/map">
                <CardHeader>
                  <MapIcon className="h-12 w-12 text-nature mb-2" />
                  <CardTitle>Bản đồ</CardTitle>
                  <CardDescription>
                    Tìm điểm tham quan, ăn uống, mua sắm
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="hover:shadow-card transition-shadow cursor-pointer">
              <Link to="/price-check">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-accent mb-2" />
                  <CardTitle>Tra giá</CardTitle>
                  <CardDescription>
                    Kiểm tra giá đá mỹ nghệ và sản phẩm
                  </CardDescription>
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
            Điểm nổi bật
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden shadow-card hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${marbleCraft})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">Làng nghề đá mỹ nghệ Non Nước</CardTitle>
                <CardDescription className="text-base">
                  Khám phá nghề truyền thống hơn 400 năm tuổi, nơi tạo ra những tác phẩm điêu khắc tinh xảo từ đá cẩm thạch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/about">
                  <Button>Tìm hiểu thêm</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-card hover:shadow-xl transition-shadow">
              <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${foodImage})` }} />
              <CardHeader>
                <CardTitle className="text-2xl">Ẩm thực địa phương</CardTitle>
                <CardDescription className="text-base">
                  Thưởng thức hải sản tươi sống, mì Quảng, bánh tráng cuốn thịt heo và nhiều món đặc sản Đà Nẵng
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/food">
                  <Button>Khám phá món ăn</Button>
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
