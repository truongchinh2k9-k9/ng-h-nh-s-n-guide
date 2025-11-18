import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Google Maps will be loaded here
    // For now, we'll use an iframe embed as a simple solution
  }, []);

  const locations = [
    { name: "Chùa Linh Ứng", type: "Điểm tham quan", lat: 16.0018, lng: 108.2655 },
    { name: "Động Huyền Không", type: "Điểm tham quan", lat: 16.0025, lng: 108.2662 },
    { name: "Làng đá Non Nước", type: "Mua sắm", lat: 15.9965, lng: 108.2685 },
    { name: "Bãi biển Non Nước", type: "Vui chơi", lat: 15.9980, lng: 108.2700 },
    { name: "Mì Quảng Bà Mua", type: "Ăn uống", lat: 16.0010, lng: 108.2640 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bản đồ Ngũ Hành Sơn
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Khám phá các điểm tham quan, quán ăn, và địa điểm mua sắm
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div ref={mapRef} className="w-full h-[600px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8563803935565!2d108.26283731533468!3d16.002131888893904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c2f81fa52f%3A0x923a34c135b65a00!2sMarble%20Mountains!5e0!3m2!1sen!2s!4v1234567890123"
                      width="100%"
                      height="600"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bản đồ Ngũ Hành Sơn"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location List */}
            <div className="space-y-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Các địa điểm nổi bật</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {locations.map((location, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">{location.name}</p>
                          <p className="text-sm text-muted-foreground">{location.type}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Chú thích</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span className="text-sm">Điểm tham quan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-secondary" />
                    <span className="text-sm">Ăn uống</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    <span className="text-sm">Mua sắm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-nature" />
                    <span className="text-sm">Bãi đỗ xe</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Locations */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Danh sách chi tiết</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Điểm tham quan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">• Chùa Linh Ứng</p>
                <p className="font-medium">• Động Huyền Không</p>
                <p className="font-medium">• Chùa Tam Thai</p>
                <p className="font-medium">• Động Vân Thông</p>
                <p className="font-medium">• Vọng Hải Đài (Điểm ngắm cảnh)</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  Quán ăn đề xuất
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">• Mì Quảng Bà Mua</p>
                <p className="font-medium">• Hải sản Bé Mặn</p>
                <p className="font-medium">• Bánh tráng cuốn Mỹ Sơn</p>
                <p className="font-medium">• Bún chả cá 69</p>
                <p className="font-medium">• Quán ăn ven biển Non Nước</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Khu mua sắm
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">• Làng đá mỹ nghệ Non Nước</p>
                <p className="font-medium">• Chợ Ngũ Hành Sơn</p>
                <p className="font-medium">• Các cửa hàng đá mỹ nghệ ven đường</p>
                <p className="font-medium">• Cửa hàng lưu niệm gần lối vào núi</p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-nature" />
                  Bãi đỗ xe
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-medium">• Bãi đỗ xe chính (chân núi Thủy Sơn)</p>
                <p className="font-medium">• Bãi đỗ xe phụ (gần làng Non Nước)</p>
                <p className="font-medium">• Các bãi gửi xe tư nhân ven đường</p>
                <p className="text-sm text-muted-foreground mt-3">
                  * Giá gửi xe: 10.000 - 20.000đ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Map;
