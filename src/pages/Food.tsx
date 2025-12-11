import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import foodHero from "@/assets/banhmi.jpg";

const Food = () => {
  const { t, language } = useLanguage();

  const dishes = [
    {
      name: { vi: "Mì Quảng", en: "Mi Quang Noodles", ko: "미꽝 국수" },
      description: { 
        vi: "Món mì đặc trưng của Quảng Nam - Đà Nẵng với nước dùng đậm đà, thịt heo, tôm, trứng và rau thơm",
        en: "Signature noodle dish of Quang Nam - Da Nang with rich broth, pork, shrimp, eggs and herbs",
        ko: "꽝남-다낭의 대표 국수 요리, 진한 육수와 돼지고기, 새우, 계란, 허브가 함께"
      },
      rating: 4.8,
      reviewCount: 256,
      location: { vi: "Mì Quảng Bà Minh - 05 Hải Triều", en: "Mi Quang Ba Minh - 05 Hai Trieu", ko: "미꽝 바민 - 05 하이찌에우" },
      category: { vi: "Món chính", en: "Main Dish", ko: "메인 요리" }
    },
    {
      name: { vi: "Hải sản tươi sống", en: "Fresh Seafood", ko: "신선한 해산물" },
      description: { 
        vi: "Tôm hùm, cua, ghẹ, sò điệp tươi sống chế biến theo nhiều kiểu: nướng, hấp, rang me",
        en: "Live lobster, crab, scallops prepared in various styles: grilled, steamed, tamarind fried",
        ko: "바닷가재, 게, 가리비를 구이, 찜, 타마린드 볶음 등 다양한 방식으로 조리"
      },
      rating: 4.6,
      reviewCount: 189,
      location: { vi: "Các nhà hàng ven biển Non Nước", en: "Non Nuoc Beach Restaurants", ko: "논누억 해변 레스토랑" },
      category: { vi: "Hải sản", en: "Seafood", ko: "해산물" }
    },
    {
      name: { vi: "Bánh tráng cuốn thịt heo", en: "Rice Paper Rolls with Pork", ko: "돼지고기 라이스페이퍼 롤" },
      description: { 
        vi: "Đặc sản Đà Nẵng với thịt heo luộc, rau sống, cuốn bánh tráng chấm mắm nêm đậm đà",
        en: "Da Nang specialty with boiled pork, fresh vegetables, wrapped in rice paper with fermented fish sauce",
        ko: "삶은 돼지고기, 신선한 채소를 라이스페이퍼에 싸서 발효 생선 소스와 함께"
      },
      rating: 4.9,
      reviewCount: 312,
      location: { vi: "Bánh tráng thịt heo Bà Thu - 103 Đỗ Bá", en: "Ba Thu Rice Paper - 103 Do Ba", ko: "바투 라이스페이퍼 - 103 도바" },
      category: { vi: "Ăn vặt", en: "Snacks", ko: "간식" }
    },
    {
      name: { vi: "Bún chả cá", en: "Fish Cake Noodle Soup", ko: "생선 어묵 국수" },
      description: { 
        vi: "Bún với chả cá thơm ngon, ăn kèm rau sống, dứa, cà chua và nước mắm đặc biệt",
        en: "Rice noodles with fragrant fish cakes, served with fresh vegetables, pineapple, tomato and special fish sauce",
        ko: "향긋한 생선 어묵과 쌀국수, 신선한 채소, 파인애플, 토마토와 특제 생선 소스"
      },
      rating: 4.7,
      reviewCount: 178,
      location: { vi: "Bún chả cá 69 - 69 Ngũ Hành Sơn", en: "Fish Cake Noodles 69 - 69 Ngu Hanh Son", ko: "분짜까 69 - 69 응우하인선" },
      category: { vi: "Món chính", en: "Main Dish", ko: "메인 요리" }
    },
    {
      name: { vi: "Bánh xèo", en: "Vietnamese Crispy Pancake", ko: "반쎄오 (베트남 크리스피 팬케이크)" },
      description: { 
        vi: "Bánh xèo giòn rụm với nhân tôm, thịt, giá đỗ, ăn kèm rau sống và nước chấm chua ngọt",
        en: "Crispy pancake with shrimp, pork, bean sprouts, served with fresh herbs and sweet-sour dipping sauce",
        ko: "새우, 돼지고기, 콩나물이 들어간 바삭한 팬케이크, 신선한 허브와 새콤달콤한 소스"
      },
      rating: 4.5,
      reviewCount: 145,
      location: { vi: "Bánh xèo 76 - 85A Lê Văn Hưu", en: "Banh Xeo 76 - 85A Le Van Huu", ko: "반쎄오 76 - 85A 레반흐우" },
      category: { vi: "Món chính", en: "Main Dish", ko: "메인 요리" }
    },
    {
      name: { vi: "Nem lụi", en: "Grilled Pork Skewers", ko: "넴루이 (숯불 돼지고기 꼬치)" },
      description: { 
        vi: "Nem nướng trên than hồng thơm phức, ăn kèm bánh tráng, rau sống và nước chấm",
        en: "Fragrant grilled meat skewers over charcoal, served with rice paper, fresh vegetables and dipping sauce",
        ko: "숯불에 구운 향긋한 고기 꼬치, 라이스페이퍼, 신선한 채소, 디핑 소스와 함께"
      },
      rating: 4.4,
      reviewCount: 98,
      location: { vi: "Các quán ăn vặt gần chợ Ngũ Hành Sơn", en: "Street food stalls near Ngu Hanh Son Market", ko: "응우하인선 시장 근처 포장마차" },
      category: { vi: "Ăn vặt", en: "Snacks", ko: "간식" }
    },
    {
      name: { vi: "Cơm gà Hội An", en: "Hoi An Chicken Rice", ko: "호이안 치킨 라이스" },
      description: { 
        vi: "Cơm vàng ươm thơm ngon, gà xé phay mềm, ăn kèm rau sống và nước chấm đặc trưng",
        en: "Fragrant yellow rice with tender shredded chicken, served with fresh vegetables and signature dipping sauce",
        ko: "향긋한 노란 밥과 부드러운 닭고기, 신선한 채소와 특제 소스"
      },
      rating: 4.7,
      reviewCount: 203,
      location: { vi: "Cơm gia đình - 11 Phan Tôn", en: "Family Rice - 11 Phan Ton", ko: "패밀리 라이스 - 11 판톤" },
      category: { vi: "Món chính", en: "Main Dish", ko: "메인 요리" }
    },
    {
      name: { vi: "Cao lầu", en: "Cao Lau Noodles", ko: "까오러우 국수" },
      description: { 
        vi: "Món mì đặc sản Hội An với sợi mì dày dai, thịt heo xá xíu, giá đỗ và nước dùng đậm đà",
        en: "Hoi An specialty noodles with thick chewy noodles, char siu pork, bean sprouts and rich broth",
        ko: "호이안 특산 국수, 쫄깃한 면, 차슈 돼지고기, 콩나물, 진한 육수"
      },
      rating: 4.6,
      reviewCount: 167,
      location: { vi: "Các quán ven đường Ngũ Hành Sơn", en: "Roadside restaurants along Ngu Hanh Son", ko: "응우하인선 길가 식당" },
      category: { vi: "Món chính", en: "Main Dish", ko: "메인 요리" }
    }
  ];

  const categories = [
    { vi: "Tất cả", en: "All", ko: "전체" },
    { vi: "Món chính", en: "Main Dish", ko: "메인 요리" },
    { vi: "Hải sản", en: "Seafood", ko: "해산물" },
    { vi: "Ăn vặt", en: "Snacks", ko: "간식" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${foodHero})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Utensils className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.food.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t.food.subtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section id="food-intro" className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.food.intro}
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
                key={category.vi} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2 text-sm"
              >
                {category[language]}
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
                    <CardTitle className="text-xl">{dish.name[language]}</CardTitle>
                    <Badge variant="secondary">{dish.category[language]}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    {dish.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.common.rating}:</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-primary">{dish.rating}</span>
                      <span className="text-sm text-muted-foreground">({dish.reviewCount} {t.common.reviews})</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.common.suggestedLocation}:</span>
                    <p className="text-sm font-medium mt-1">{dish.location[language]}</p>
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
            <h2 className="text-3xl font-bold mb-6 text-center">{t.food.tips}</h2>
            <ul className="space-y-4 text-lg">
              {t.food.tipsList.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="font-bold">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Food;
