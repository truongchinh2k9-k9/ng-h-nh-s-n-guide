import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Search, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import priceHero from "@/assets/5ngonnuii.jpg";

const PriceCheck = () => {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const priceData = {
    souvenirs: {
      label: t.priceCheck.categories.souvenirs,
      items: [
        { item: { vi: "Móc khóa đá nhỏ", en: "Small stone keychain", ko: "작은 돌 열쇠고리" }, image: "/src/assets/mockhoadanhoo.jpg" },
        { item: { vi: "Tranh đá mini", en: "Mini stone painting", ko: "미니 돌 그림" }, image: "/src/assets/tranhda1.jpg" },
        { item: { vi: "Bộ ấm chén sứ", en: "Ceramic tea set", ko: "도자기 찻잔 세트" }, image: "/src/assets/amtra.jpg" },
        { item: { vi: "Tượng Phật đá", en: "Stone Buddha statue", ko: "석조 부처상" }, image: "/src/assets/phat.jpg" },
        { item: { vi: "Đèn đá phong thủy", en: "Feng shui stone lamp", ko: "풍수 돌 램프" }, image: "/src/assets/den.jpg" }
      ]
    },
    seafood: {
      label: t.priceCheck.categories.seafood,
      items: [
        { item: { vi: "Tôm hùm (1kg)", en: "Lobster (1kg)", ko: "바닷가재 (1kg)" }, image: "/src/assets/tomhum.jpg" },
        { item: { vi: "Cua biển (1kg)", en: "Sea crab (1kg)", ko: "꽃게 (1kg)" }, image: "/src/assets/cua.jpg" },
        { item: { vi: "Mực tươi (1kg)", en: "Fresh squid (1kg)", ko: "신선한 오징어 (1kg)" }, image: "/src/assets/anhmuc.jpg" },
        { item: { vi: "Sò điệp (1kg)", en: "Scallops (1kg)", ko: "가리비 (1kg)" }, image: "/src/assets/sodiep.jpg" },
        { item: { vi: "Cá song (1kg)", en: "Grouper fish (1kg)", ko: "능성어 (1kg)" }, image: "/src/assets/casong.jpg" }
      ]
    },
    tourServices: {
      label: t.priceCheck.categories.tourServices,
      items: [
        { item: { vi: "Vé tham quan Ngũ Hành Sơn", en: "Ngu Hanh Son entrance ticket", ko: "응우하인선 입장권" }, image: "/src/assets/ve.jpg" },
        { item: { vi: "Thang máy lên núi", en: "Mountain elevator", ko: "산 엘리베이터" }, image: "/src/assets/thangmay.jpg" },
        { item: { vi: "Hướng dẫn viên (nửa ngày)", en: "Tour guide (half day)", ko: "가이드 (반나절)" }, image: "/src/assets/anh1.jpg" },
        { item: { vi: "Thuê xe máy (1 ngày)", en: "Motorbike rental (1 day)", ko: "오토바이 대여 (1일)" }, image: "/src/assets/giuxe.jpg" }
      ]
    }
  };

  const trustedShops = [
    {
      name: { vi: "Làng đá mỹ nghệ Non Nước", en: "Non Nuoc Stone Craft Village", ko: "논누억 석공예 마을" },
      category: { vi: "Đá mỹ nghệ", en: "Stone craft", ko: "석공예" },
      address: { vi: "Làng Non Nước, Ngũ Hành Sơn, Đà Nẵng", en: "Non Nuoc Village, Ngu Hanh Son, Da Nang", ko: "논누억 마을, 응우하인선, 다낭" },
      rating: "4.5/5"
    },
    {
      name: { vi: "Nhà hàng Bé Mặn", en: "Be Man Restaurant", ko: "베만 레스토랑" },
      category: { vi: "Hải sản", en: "Seafood", ko: "해산물" },
      address: { vi: "Đường Huỳnh Ngọc Huệ, Ngũ Hành Sơn", en: "Huynh Ngoc Hue Street, Ngu Hanh Son", ko: "휀응옥후에 거리, 응우하인선" },
      rating: "4.6/5"
    },
    {
      name: { vi: "Cửa hàng lưu niệm Ngọc Sơn", en: "Ngoc Son Souvenir Shop", ko: "응옥선 기념품 가게" },
      category: { vi: "Quà lưu niệm", en: "Souvenirs", ko: "기념품" },
      address: { vi: "Gần cổng chính Ngũ Hành Sơn", en: "Near main entrance of Ngu Hanh Son", ko: "응우하인선 정문 근처" },
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
            {t.priceCheck.headerTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t.priceCheck.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Search Tool */}
      <section id="price-search" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">{t.priceCheck.searchTitle}</CardTitle>
              <CardDescription>
                {t.priceCheck.searchDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.priceCheck.categoryLabel}</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder={t.priceCheck.selectCategory} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="souvenirs">{t.priceCheck.categories.souvenirs}</SelectItem>
                      <SelectItem value="seafood">{t.priceCheck.categories.seafood}</SelectItem>
                      <SelectItem value="tourServices">{t.priceCheck.categories.tourServices}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.priceCheck.searchProduct}</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder={t.priceCheck.searchPlaceholder}
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full" size="lg">
                <Search className="mr-2 h-5 w-5" />
                {t.priceCheck.searchButton}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.priceCheck.referencePrice}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(priceData).map(([key, category]) => (
              <Card key={key} className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="secondary">{category.label}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="pb-4 border-b last:border-b-0">
                        <p className="font-semibold mb-3">{item.item[language]}</p>
                        <img 
                          src={item.image} 
                          alt={item.item[language]}
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
          <h2 className="text-3xl font-bold mb-8 text-center">{t.priceCheck.trustedShops}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trustedShops.map((shop, index) => (
              <Card key={index} className="shadow-card hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge className="w-fit mb-2">{shop.category[language]}</Badge>
                  <CardTitle className="text-lg">{shop.name[language]}</CardTitle>
                  <CardDescription>{shop.address[language]}</CardDescription>
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
                <CardTitle className="text-destructive">{t.priceCheck.warningTitle}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {t.priceCheck.warnings.map((warning, index) => (
                <p key={index}>• {warning}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PriceCheck;
