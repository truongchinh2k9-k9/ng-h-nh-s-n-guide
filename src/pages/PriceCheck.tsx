import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Search, AlertCircle } from "lucide-react";

const PriceCheck = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const priceData = {
    "Đá mỹ nghệ": [
      { item: "Tượng Phật Di Lặc nhỏ (20cm)", priceRange: "150.000 - 300.000đ", avgPrice: "200.000đ" },
      { item: "Tượng Phật Quan Âm trung (50cm)", priceRange: "1.500.000 - 3.000.000đ", avgPrice: "2.000.000đ" },
      { item: "Tượng rồng phượng cặp", priceRange: "500.000 - 2.000.000đ", avgPrice: "1.000.000đ" },
      { item: "Đồ trang trí bàn nhỏ", priceRange: "50.000 - 200.000đ", avgPrice: "100.000đ" },
      { item: "Lư hương đá cẩm thạch", priceRange: "200.000 - 800.000đ", avgPrice: "400.000đ" }
    ],
    "Quà lưu niệm": [
      { item: "Móc khóa đá nhỏ", priceRange: "20.000 - 50.000đ", avgPrice: "30.000đ" },
      { item: "Nam châm tủ lạnh", priceRange: "10.000 - 30.000đ", avgPrice: "20.000đ" },
      { item: "Tranh đá mini", priceRange: "100.000 - 300.000đ", avgPrice: "150.000đ" },
      { item: "Bộ ấm chén sứ Bát Tràng", priceRange: "200.000 - 500.000đ", avgPrice: "300.000đ" }
    ],
    "Hải sản": [
      { item: "Tôm hùm (1kg)", priceRange: "600.000 - 1.200.000đ", avgPrice: "800.000đ" },
      { item: "Cua biển (1kg)", priceRange: "200.000 - 400.000đ", avgPrice: "300.000đ" },
      { item: "Mực tươi (1kg)", priceRange: "150.000 - 250.000đ", avgPrice: "180.000đ" },
      { item: "Sò điệp (1kg)", priceRange: "100.000 - 200.000đ", avgPrice: "150.000đ" },
      { item: "Cá song (1kg)", priceRange: "300.000 - 600.000đ", avgPrice: "400.000đ" }
    ],
    "Dịch vụ du lịch": [
      { item: "Vé tham quan Ngũ Hành Sơn", priceRange: "40.000đ (người lớn)", avgPrice: "40.000đ" },
      { item: "Thang máy lên núi", priceRange: "40.000đ (1 chiều)", avgPrice: "70.000đ (cả đi và về)" },
      { item: "Hướng dẫn viên (nửa ngày)", priceRange: "300.000 - 500.000đ", avgPrice: "400.000đ" },
      { item: "Thuê xe máy (1 ngày)", priceRange: "100.000 - 150.000đ", avgPrice: "120.000đ" }
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
      <section className="bg-gradient-hero text-primary-foreground py-20">
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
      <section className="py-16 bg-background">
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
                      <SelectItem value="Đá mỹ nghệ">Đá mỹ nghệ</SelectItem>
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
                        <p className="font-semibold mb-2">{item.item}</p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">Khoảng giá:</span>
                          <span className="font-medium">{item.priceRange}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm mt-1">
                          <span className="text-muted-foreground">Giá trung bình:</span>
                          <span className="font-bold text-primary">{item.avgPrice}</span>
                        </div>
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
