import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mountain } from "lucide-react";
import vietnameseFood from "@/assets/nuinhs.jpg";

const About = () => {
  const mountains = [
    {
      name: "Kim Sơn (Núi Kim)",
      element: "Kim (Vàng)",
      description: "Núi cao nhất trong quần thể, nơi có động Huyền Không và chùa Tam Thai. Từ đỉnh Kim Sơn có thể ngắm toàn cảnh Đà Nẵng và biển Đông tuyệt đẹp."
    },
    {
      name: "Mộc Sơn (Núi Mộc)",
      element: "Mộc (Gỗ)",
      description: "Núi nhỏ nhất nhưng đầy thơ mộng với thảm thực vật xanh tươi. Nơi đây có nhiều hang động nhỏ và cây cối um tùm."
    },
    {
      name: "Thủy Sơn (Núi Thủy)",
      element: "Thủy (Nước)",
      description: "Núi lớn và đẹp nhất, nổi tiếng với động Huyền Không có ánh sáng tự nhiên chiếu xuống tạo khung cảnh huyền ảo. Có nhiều chùa và điểm tham quan nhất."
    },
    {
      name: "Hỏa Sơn (Núi Hỏa)",
      element: "Hỏa (Lửa)",
      description: "Núi có hình dạng đặc biệt, gắn liền với nhiều truyền thuyết về ngọn lửa thiêng. Là điểm dừng chân yên tĩnh ít khách du lịch."
    },
    {
      name: "Thổ Sơn (Núi Thổ)",
      element: "Thổ (Đất)",
      description: "Núi cuối cùng, gần biển nhất trong 5 ngọn núi. Nơi đây có không gian thoáng đãng và bãi đá đẹp mắt."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${vietnameseFood})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Mountain className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Giới thiệu Ngũ Hành Sơn
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Khám phá vẻ đẹp thiên nhiên, lịch sử và văn hóa của quần thể 5 ngọn núi linh thiêng
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Lịch sử hình thành</h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Ngũ Hành Sơn là quần thể 5 ngọn núi đá vôi hình thành từ hàng triệu năm trước, 
                nằm cách trung tâm thành phố Đà Nẵng khoảng 8km về phía đông nam. Tên gọi Ngũ Hành Sơn 
                xuất phát từ quan niệm ngũ hành trong triết học phương Đông: Kim, Mộc, Thủy, Hỏa, Thổ.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Theo sử sách, vào thời vua Minh Mạng, vùng đất này được phong là danh thắng và mang tên 
                "Ngũ Hành Sơn". Từ đó, nơi đây trở thành điểm hành hương linh thiêng và thu hút du khách 
                từ khắp nơi. Các ngọn núi không chỉ có vẻ đẹp tự nhiên hùng vĩ mà còn chứa đựng nhiều 
                hang động kỳ thú và công trình kiến trúc tôn giáo cổ kính.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Five Mountains */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Năm ngọn núi linh thiêng</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mountains.map((mountain, index) => (
              <Card key={index} className="shadow-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <div className="flex items-center gap-2">
                      <Mountain className="h-6 w-6 text-primary" />
                      {mountain.name}
                    </div>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground font-semibold">
                    {mountain.element}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{mountain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Religion */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Văn hóa & Tôn giáo</h2>
            
            <Card className="mb-8 shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Chùa chiền & Danh thắng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">Chùa Linh Ứng</h3>
                  <p className="text-muted-foreground">
                    Chùa cổ nổi tiếng nhất tại Ngũ Hành Sơn, có tượng Phật Quan Âm cao và nhiều tác phẩm điêu khắc tinh xảo.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Động Huyền Không</h3>
                  <p className="text-muted-foreground">
                    Hang động tự nhiên nổi tiếng với ánh sáng chiếu qua khe núi tạo cảnh tượng huyền ảo, được mệnh danh là "ánh sáng thiên đường".
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-bold text-lg mb-2">Chùa Tam Thai</h3>
                  <p className="text-muted-foreground">
                    Ngôi chùa cổ kính nằm trên đỉnh núi, nơi có không gian yên tĩnh lý tưởng cho thiền định và ngắm cảnh.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Non Nuoc Village */}
      <section className="py-16 bg-ocean text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Làng nghề đá mỹ nghệ Non Nước</h2>
            <p className="text-lg leading-relaxed mb-6">
              Làng nghề Non Nước có lịch sử hơn 400 năm, nổi tiếng với nghề chạm khắc đá cẩm thạch. 
              Các nghệ nhân tại đây tạo ra những tác phẩm điêu khắc tinh xảo từ tượng Phật, rồng phượng 
              đến các đồ trang trí nghệ thuật.
            </p>
            <p className="text-lg leading-relaxed">
              Làng nghề không chỉ là nơi sản xuất mà còn là bảo tàng sống của nghệ thuật điêu khắc đá 
              Việt Nam, thu hút hàng nghìn du khách mỗi năm.
            </p>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Hoạt động du lịch nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Leo núi & Khám phá hang động</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Trải nghiệm leo núi với hệ thống bậc thang đá, khám phá các hang động tự nhiên kỳ vĩ 
                    như Huyền Không, Linh Nham, Vân Thông.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Thăm quan chùa chiền</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tham quan các ngôi chùa cổ, chiêm bái tượng Phật, tìm hiểu văn hóa tôn giáo Phật giáo tại Việt Nam.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Tắm biển Non Nước</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Thư giãn tại bãi biển Non Nước đẹp như tranh vẽ, nước trong xanh và cát trắng mịn, 
                    cách chân núi chỉ vài phút đi bộ.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Trải nghiệm làm đá mỹ nghệ</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tham gia các lớp học ngắn hạn, được hướng dẫn bởi nghệ nhân tạo ra sản phẩm đá nhỏ 
                    của riêng bạn.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
