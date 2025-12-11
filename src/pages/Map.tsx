import { useState, useRef } from "react";
import mapHero from "@/assets/bando.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Map = () => {
  const { t, language } = useLanguage();
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);

  const locations = [
    { 
      name: { vi: "Chùa Linh Ứng", en: "Linh Ung Pagoda", ko: "린웅 사원" }, 
      type: { vi: "Điểm tham quan", en: "Attraction", ko: "관광지" }, 
      lat: 16.0018, 
      lng: 108.2655 
    },
    { 
      name: { vi: "Động Huyền Không", en: "Huyen Khong Cave", ko: "휀콩 동굴" }, 
      type: { vi: "Điểm tham quan", en: "Attraction", ko: "관광지" }, 
      lat: 16.0025, 
      lng: 108.2662 
    },
    { 
      name: { vi: "Làng đá Non Nước", en: "Non Nuoc Stone Village", ko: "논누억 돌 마을" }, 
      type: { vi: "Mua sắm", en: "Shopping", ko: "쇼핑" }, 
      lat: 15.9965, 
      lng: 108.2685 
    },
    { 
      name: { vi: "Bãi biển Non Nước", en: "Non Nuoc Beach", ko: "논누억 해변" }, 
      type: { vi: "Vui chơi", en: "Entertainment", ko: "오락" }, 
      lat: 15.9980, 
      lng: 108.2700 
    },
    { 
      name: { vi: "Mì Quảng Bà Mua", en: "Mi Quang Ba Mua", ko: "미꽝 바무아" }, 
      type: { vi: "Ăn uống", en: "Food & Dining", ko: "음식" }, 
      lat: 16.0010, 
      lng: 108.2640 
    },
  ];

  // Function to generate Google Maps embed URL centered on a location
  const generateMapUrl = (lat: number, lng: number) => {
    const mapParams = new URLSearchParams();
    mapParams.set("pb", `!1m18!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s${lat},${lng}!5e0!3m2!1sen!2s!4v1234567890123`);
    return `https://www.google.com/maps/embed?${mapParams.toString()}`;
  };

  const handleLocationClick = (location: { lat: number; lng: number }) => {
    setSelectedLocation(location);
  };

  const currentMapUrl = selectedLocation
    ? generateMapUrl(selectedLocation.lat, selectedLocation.lng)
    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8563803935565!2d108.26283731533468!3d16.002131888893904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c2f81fa52f%3A0x923a34c135b65a00!2sMarble%20Mountains!5e0!3m2!1sen!2s!4v1234567890123";

  const detailedLocations = {
    attractions: {
      vi: ["Chùa Linh Ứng", "Động Huyền Không", "Chùa Tam Thai", "Động Vân Thông", "Vọng Hải Đài (Điểm ngắm cảnh)"],
      en: ["Linh Ung Pagoda", "Huyen Khong Cave", "Tam Thai Pagoda", "Van Thong Cave", "Vong Hai Dai (Viewpoint)"],
      ko: ["린웅 사원", "휀콩 동굴", "탐타이 사원", "반통 동굴", "봉하이다이 (전망대)"]
    },
    restaurants: {
      vi: ["Mì Quảng Bà Mua", "Hải sản Bé Mặn", "Bánh tráng cuốn Mỹ Sơn", "Bún chả cá 69", "Quán ăn ven biển Non Nước"],
      en: ["Mi Quang Ba Mua", "Be Man Seafood", "My Son Rice Paper Rolls", "Fish Cake Noodles 69", "Non Nuoc Beach Restaurants"],
      ko: ["미꽝 바무아", "베만 해산물", "미선 라이스페이퍼 롤", "분짜까 69", "논누억 해변 레스토랑"]
    },
    shopping: {
      vi: ["Làng đá mỹ nghệ Non Nước", "Chợ Ngũ Hành Sơn", "Các cửa hàng đá mỹ nghệ ven đường", "Cửa hàng lưu niệm gần lối vào núi"],
      en: ["Non Nuoc Stone Craft Village", "Ngu Hanh Son Market", "Roadside marble shops", "Souvenir shops near entrance"],
      ko: ["논누억 석공예 마을", "응우하인선 시장", "길가 대리석 상점", "입구 근처 기념품 가게"]
    },
    parking: {
      vi: ["Bãi đỗ xe chính (chân núi Thủy Sơn)", "Bãi đỗ xe phụ (gần làng Non Nước)", "Các bãi gửi xe tư nhân ven đường"],
      en: ["Main parking lot (Thuy Son base)", "Secondary parking (near Non Nuoc village)", "Private roadside parking"],
      ko: ["메인 주차장 (투이선 기슭)", "보조 주차장 (논누억 마을 근처)", "길가 사설 주차장"]
    },
    parkingNote: {
      vi: "* Giá gửi xe: 10.000 - 20.000đ",
      en: "* Parking fee: 10,000 - 20,000 VND",
      ko: "* 주차비: 10,000 - 20,000 VND"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${mapHero})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <MapPin className="h-16 w-16 mx-auto mb-6 animate-float" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.map.headerTitle}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            {t.map.headerSubtitle}
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-locations" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <Card className="shadow-card overflow-hidden">
                <CardContent className="p-0">
                  <div ref={mapRef} className="w-full h-[600px]">
                    <iframe
                      key={selectedLocation ? `${selectedLocation.lat}-${selectedLocation.lng}` : "default"}
                      src={currentMapUrl}
                      width="100%"
                      height="600"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={t.map.headerTitle}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Location List */}
            <div className="space-y-4">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>{t.map.locations}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {locations.map((location, index) => (
                    <div 
                      key={index}
                      onClick={() => handleLocationClick(location)}
                      className={`p-3 rounded-lg transition-colors cursor-pointer ${
                        selectedLocation?.lat === location.lat && selectedLocation?.lng === location.lng
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold">{location.name[language]}</p>
                          <p className="text-sm opacity-80">{location.type[language]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>{t.map.legend}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary" />
                    <span className="text-sm">{t.map.legendItems.attraction}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-secondary" />
                    <span className="text-sm">{t.map.legendItems.food}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                    <span className="text-sm">{t.map.legendItems.shopping}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-nature" />
                    <span className="text-sm">{t.map.legendItems.parking}</span>
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
          <h2 className="text-3xl font-bold mb-8 text-center">{t.map.detailedList}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t.map.attractions}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {detailedLocations.attractions[language].map((item, index) => (
                  <p key={index} className="font-medium">• {item}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" />
                  {t.map.restaurants}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {detailedLocations.restaurants[language].map((item, index) => (
                  <p key={index} className="font-medium">• {item}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  {t.map.shopping}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {detailedLocations.shopping[language].map((item, index) => (
                  <p key={index} className="font-medium">• {item}</p>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-nature" />
                  {t.map.parking}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {detailedLocations.parking[language].map((item, index) => (
                  <p key={index} className="font-medium">• {item}</p>
                ))}
                <p className="text-sm text-muted-foreground mt-3">
                  {detailedLocations.parkingNote[language]}
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
