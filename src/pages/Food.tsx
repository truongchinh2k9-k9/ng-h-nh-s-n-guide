import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils } from "lucide-react";

const Food = () => {
  const dishes = [
    {
      name: "Mì Quảng",
      description: "Món mì đặc trưng của Quảng Nam - Đà Nẵng với nước dùng đậm đà, thịt heo, tôm, trứng và rau thơm",
      price: "30.000 - 50.000đ",
      location: "Mì Quảng Bà Mua - 01 Trần Quốc Toản",
      category: "Món chính"
    },
    {
      name: "Hải sản tươi sống",
      description: "Tôm hùm, cua, ghẹ, sò điệp tươi sống chế biến theo nhiều kiểu: nướng, hấp, rang me",
      price: "200.000 - 800.000đ/kg",
      location: "Các nhà hàng ven biển Non Nước",
      category: "Hải sản"
    },
    {
      name: "Bánh tráng cuốn thịt heo",
      description: "Đặc sản Đà Nẵng với thịt heo luộc, rau sống, cuốn bánh tráng chấm mắm nêm đậm đà",
      price: "5.000 - 10.000đ/cuốn",
      location: "Bánh tráng Mỹ Sơn - Đường Huỳnh Ngọc Huệ",
      category: "Ăn vặt"
    },
    {
      name: "Bún chả cá",
      description: "Bún với chả cá thơm ngon, ăn kèm rau sống, dứa, cà chua và nước mắm đặc biệt",
      price: "25.000 - 40.000đ",
      location: "Bún chả cá 69 - 69 Ngũ Hành Sơn",
      category: "Món chính"
    },
    {
      name: "Bánh xèo",
      description: "Bánh xèo giòn rụm với nhân tôm, thịt, giá đỗ, ăn kèm rau sống và nước chấm chua ngọt",
      price: "15.000 - 30.000đ",
      location: "Bánh xèo Bà Dưỡng",
      category: "Món chính"
    },
    {
      name: "Nem lụi",
      description: "Nem nướng trên than hồng thơm phức, ăn kèm bánh tráng, rau sống và nước chấm",
      price: "5.000 - 8.000đ/que",
      location: "Các quán ăn vặt gần chợ Ngũ Hành Sơn",
      category: "Ăn vặt"
    },
    {
      name: "Cơm gà Hội An",
      description: "Cơm vàng ươm thơm ngon, gà xé phay mềm, ăn kèm rau sống và nước chấm đặc trưng",
      price: "30.000 - 50.000đ",
      location: "Cơm gà Bà Nga",
      category: "Món chính"
    },
    {
      name: "Cao lầu",
      description: "Món mì đặc sản Hội An với sợi mì dày dai, thịt heo xá xíu, giá đỗ và nước dùng đậm đà",
      price: "30.000 - 45.000đ",
      location: "Các quán ven đường Ngũ Hành Sơn",
      category: "Món chính"
    }
  ];

  const categories = ["Tất cả", "Món chính", "Hải sản", "Ăn vặt"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <Utensils className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ẩm thực Ngũ Hành Sơn
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Khám phá hương vị đặc trưng của ẩm thực miền Trung và Đà Nẵng
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ẩm thực tại Ngũ Hành Sơn không chỉ phong phú về hải sản tươi ngon mà còn mang đậm 
              hương vị đặc trưng của miền Trung với các món ăn truyền thống như mì Quảng, bánh tráng, 
              bún chả cá... Hãy để vị giác của bạn được trải nghiệm thiên đường ẩm thực này!
            </p>
          </div>
        </div>
      </section>

      {/* Filter by category */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 justify-center flex-wrap">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Dishes Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishes.map((dish, index) => (
              <Card key={index} className="shadow-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{dish.name}</CardTitle>
                    <Badge variant="secondary">{dish.category}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {dish.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Giá tham khảo:</span>
                    <span className="font-bold text-primary">{dish.price}</span>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Địa chỉ gợi ý:</span>
                    <p className="text-sm font-medium mt-1">{dish.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-nature text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Mẹo khi ăn uống</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Ăn tại các quán có đông khách địa phương để đảm bảo chất lượng và giá cả hợp lý</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Hỏi giá trước khi gọi món, đặc biệt với hải sản</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Thời điểm tốt nhất để ăn hải sản là buổi sáng sớm khi đánh bắt mới về</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>Sử dụng trang Tra giá của chúng tôi để biết mức giá chuẩn trước khi mua</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Food;
