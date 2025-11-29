import { createContext, useContext, useState, ReactNode } from "react";

type Language = "vi" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    food: string;
    map: string;
    priceCheck: string;
    contact: string;
  };
  common: {
    explore: string;
    viewMap: string;
    learnMore: string;
    weather: string;
    schedule: string;
    rating: string;
    reviews: string;
    suggestedLocation: string;
    category: string;
    all: string;
    mainDish: string;
    seafood: string;
    snacks: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  food: {
    title: string;
    subtitle: string;
    intro: string;
    tips: string;
    tipsList: string[];
  };
  chatbot: {
    name: string;
    subtitle: string;
    welcome: string;
    placeholder: string;
    priceBtn: string;
    locationBtn: string;
    distanceBtn: string;
    contactBtn: string;
    aboutBtn: string;
  };
}

const translations: Record<Language, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Giới thiệu",
      food: "Ẩm thực",
      map: "Bản đồ",
      priceCheck: "Tra giá",
      contact: "Liên hệ",
    },
    common: {
      explore: "Khám phá ngay",
      viewMap: "Xem bản đồ",
      learnMore: "Tìm hiểu thêm",
      weather: "Thời tiết",
      schedule: "Gợi ý lịch trình",
      rating: "Đánh giá",
      reviews: "lượt đánh giá",
      suggestedLocation: "Địa chỉ gợi ý",
      category: "Danh mục",
      all: "Tất cả",
      mainDish: "Món chính",
      seafood: "Hải sản",
      snacks: "Ăn vặt",
    },
    hero: {
      title: "Khám phá Ngũ Hành Sơn",
      subtitle: "Thiên nhiên hùng vĩ - Văn hóa độc đáo - Nghề đá truyền thống",
    },
    food: {
      title: "Ẩm thực Ngũ Hành Sơn",
      subtitle: "Khám phá hương vị đặc trưng của ẩm thực miền Trung và Đà Nẵng",
      intro: "Ẩm thực tại Ngũ Hành Sơn không chỉ phong phú về hải sản tươi ngon mà còn mang đậm hương vị đặc trưng của miền Trung với các món ăn truyền thống như mì Quảng, bánh tráng, bún chả cá... Hãy để vị giác của bạn được trải nghiệm thiên đường ẩm thực này!",
      tips: "Mẹo khi ăn uống",
      tipsList: [
        "Ăn tại các quán có đông khách địa phương để đảm bảo chất lượng và giá cả hợp lý",
        "Hỏi giá trước khi gọi món, đặc biệt với hải sản",
        "Thời điểm tốt nhất để ăn hải sản là buổi sáng sớm khi đánh bắt mới về",
        "Sử dụng trang Tra giá của chúng tôi để biết mức giá chuẩn trước khi mua",
      ],
    },
    chatbot: {
      name: "Nui Non Guide",
      subtitle: "Luôn sẵn sàng hỗ trợ bạn",
      welcome: `Xin chào! 👋 Chào mừng bạn đến với website du lịch Ngũ Hành Sơn!

Đây là website được phát triển bởi nhóm 11/1 Hermann Gmeiner gồm 5 thành viên với tâm huyết là mang lại giá trị cho việc phát triển du lịch địa phương.

Tôi có thể giúp bạn tìm hiểu về:
• Giá cả món ăn & sản phẩm
• Địa điểm tham quan
• Khoảng cách di chuyển
• Thông tin liên hệ

Hãy chọn chủ đề bên dưới hoặc nhập câu hỏi của bạn! 😊`,
      placeholder: "Nhập câu hỏi của bạn...",
      priceBtn: "Giá món ăn",
      locationBtn: "Địa điểm",
      distanceBtn: "Khoảng cách",
      contactBtn: "Liên hệ",
      aboutBtn: "Giới thiệu",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      food: "Cuisine",
      map: "Map",
      priceCheck: "Price Check",
      contact: "Contact",
    },
    common: {
      explore: "Explore Now",
      viewMap: "View Map",
      learnMore: "Learn More",
      weather: "Weather",
      schedule: "Suggested Itinerary",
      rating: "Rating",
      reviews: "reviews",
      suggestedLocation: "Suggested Location",
      category: "Category",
      all: "All",
      mainDish: "Main Dish",
      seafood: "Seafood",
      snacks: "Snacks",
    },
    hero: {
      title: "Discover Ngu Hanh Son",
      subtitle: "Majestic Nature - Unique Culture - Traditional Stone Crafts",
    },
    food: {
      title: "Ngu Hanh Son Cuisine",
      subtitle: "Explore the distinctive flavors of Central Vietnam and Da Nang",
      intro: "The cuisine of Ngu Hanh Son is not only rich in fresh seafood but also carries the distinctive flavors of Central Vietnam with traditional dishes like Mi Quang, rice paper rolls, fish cake noodles... Let your taste buds experience this culinary paradise!",
      tips: "Dining Tips",
      tipsList: [
        "Eat at restaurants frequented by locals to ensure quality and reasonable prices",
        "Ask for prices before ordering, especially for seafood",
        "The best time to eat seafood is early morning when the catch is fresh",
        "Use our Price Check page to know standard prices before buying",
      ],
    },
    chatbot: {
      name: "Nui Non Guide",
      subtitle: "Always ready to help you",
      welcome: `Hello! 👋 Welcome to Ngu Hanh Son tourism website!

This website was developed by Group 11/1 of Hermann Gmeiner School with 5 members, dedicated to bringing value to local tourism development.

I can help you learn about:
• Food & product prices
• Tourist attractions
• Travel distances
• Contact information

Choose a topic below or type your question! 😊`,
      placeholder: "Type your question...",
      priceBtn: "Food Prices",
      locationBtn: "Locations",
      distanceBtn: "Distances",
      contactBtn: "Contact",
      aboutBtn: "About",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("vi");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
