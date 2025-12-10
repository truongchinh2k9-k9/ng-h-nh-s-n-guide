import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Search, AlertCircle } from "lucide-react";
import priceHero from "@/assets/5ngonnuii.jpg";

const PriceCheck = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const priceData = {
    "Quà lưu niệm": [
      { item: "Móc khóa đá nhỏ", image: "/src/assets/mockhoadanhoo.jpg" },
      { item: "Tranh đá mini", image: "/src/assets/tranhda1.jpg" },
      { item: "Bộ ấm chén sứ ", image: "/src/assets/amtra.jpg" },
      { item: "Tượng Phật đá", image: "/src/assets/phat.jpg" },
      { item: "Đèn đá phong thủy", image: "/src/assets/den.jpg" }
    ],
    "Hải sản": [
      { item: "Tôm hùm (1kg)", image: "/src/assets/tomhum.jpg" },
      { item: "Cua biển (1kg)", image: "/src/assets/cua.jpg" },
      { item: "Mực tươi (1kg)", image: "/src/assets/anhmuc.jpg" },
      { item: "Sò điệp (1kg)", image: "/src/assets/sodiep.jpg" },
      { item: "Cá song (1kg)", image: "/src/assets/casong.jpg" }
    ],
    "Dịch vụ du lịch": [
      { item: "Vé tham quan Ngũ Hành Sơn", image: "/src/assets/ve.jpg" },
      { item: "Thang máy lên núi", image: "/src/assets/thangmay.jpg" },
      { item: "Hướng dẫn viên (nửa ngày)", image: "/src/assets/anh1.jpg" },
      { item: "Thuê xe máy (1 ngày)", image: "/src/assets/giuxe.jpg" }
    ]
  };

  const trustedShops = [
    {
      name: "Làng đá mỹ nghệ Non Nước",
      category: "Đá mỹ nghệ",
      address: "Làng Non Nước, Ngũ Hành Sơn, Đà Nẵng",
      rating: "4.5/5"
    },
    {
      name: "Nhà hàng Bé Mặn",
      category: "Hải sản",
      address: "Đường Huỳnh Ngọc Huệ, Ngũ Hành Sơn",
      rating: "4.6/5"
    },
    {
      name: "Cửa hàng lưu niệm Ngọc Sơn",
      category: "Quà lưu niệm",
      address: "Gần cổng chính Ngũ Hành Sơn",
      rating: "4.3/5"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${priceHero})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <DollarSign className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Công cụ tra giá
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kiểm tra giá chuẩn trước khi mua - Tránh bị chém giá
          </p>
        </div>
      </section>

      {/* Search Tool */}
      <section id="price-search" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Tra cứu giá sản phẩm</CardTitle>
              <CardDescription>
                Chọn danh mục và tìm kiếm sản phẩm bạn quan tâm
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Danh mục</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Quà lưu niệm">Quà lưu niệm</SelectItem>
                      <SelectItem value="Hải sản">Hải sản</SelectItem>
                      <SelectItem value="Dịch vụ du lịch">Dịch vụ du lịch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Tìm kiếm sản phẩm</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Nhập tên sản phẩm..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Search className="mr-2 h-5 w-5" />
                Tìm kiếm giá
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Bảng giá tham khảo</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(priceData).map(([category, items]) => (
              <Card key={category} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">{category}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="pb-4 border-b last:border-b-0">
                        <p className="font-semibold mb-3">{item.item}</p>
                        <img 
                          src={item.image} 
                          alt={item.item}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Shops */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Địa điểm uy tín</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustedShops.map((shop, index) => (
              <Card key={index} className="shadow-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{shop.category}</Badge>
                  <CardTitle className="text-lg">{shop.name}</CardTitle>
                  <CardDescription>{shop.address}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="text-sm font-medium">{shop.rating}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-16 bg-destructive/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto border-destructive">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-destructive" />
                <CardTitle className="text-destructive">Lưu ý quan trọng</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>• Luôn hỏi giá trước khi mua, đặc biệt với đá mỹ nghệ và hải sản</p>
              <p>• Tham khảo giá ở nhiều cửa hàng khác nhau để so sánh</p>
              <p>• Báo cáo cho chúng tôi nếu phát hiện nơi có dấu hiệu chém giá</p>
              <p>• Giá có thể dao động theo mùa vụ và chất lượng sản phẩm</p>
              <p>• Mua tại các cửa hàng có niêm yết giá rõ ràng</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriceCheck;
