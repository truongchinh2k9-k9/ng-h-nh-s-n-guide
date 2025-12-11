export type Language = "vi" | "en" | "ko";

export interface Translations {
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
    loading: string;
    error: string;
    search: string;
    wind: string;
    status: string;
    forecast7days: string;
    rain: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  index: {
    introTitle: string;
    introText: string;
    quickActions: {
      aboutTitle: string;
      aboutDesc: string;
      foodTitle: string;
      foodDesc: string;
      mapTitle: string;
      mapDesc: string;
      priceTitle: string;
      priceDesc: string;
    };
    highlights: string;
    marbleVillageTitle: string;
    marbleVillageDesc: string;
    localCuisineTitle: string;
    localCuisineDesc: string;
    exploreFood: string;
  };
  about: {
    headerTitle: string;
    headerSubtitle: string;
    historyTitle: string;
    historyText1: string;
    historyText2: string;
    fiveMountainsTitle: string;
    mountains: {
      name: string;
      element: string;
      description: string;
    }[];
    cultureTitle: string;
    templesTitle: string;
    temples: {
      name: string;
      description: string;
    }[];
    nonNuocTitle: string;
    nonNuocText1: string;
    nonNuocText2: string;
    activitiesTitle: string;
    activities: {
      title: string;
      description: string;
    }[];
  };
  food: {
    title: string;
    subtitle: string;
    intro: string;
    tips: string;
    tipsList: string[];
  };
  map: {
    headerTitle: string;
    headerSubtitle: string;
    locations: string;
    legend: string;
    legendItems: {
      attraction: string;
      food: string;
      shopping: string;
      parking: string;
    };
    detailedList: string;
    attractions: string;
    restaurants: string;
    shopping: string;
    parking: string;
    locationTypes: {
      attraction: string;
      food: string;
      shopping: string;
      entertainment: string;
    };
    locationNames: {
      linhUng: string;
      huyenKhong: string;
      nonNuocVillage: string;
      nonNuocBeach: string;
      miQuangBaMua: string;
    };
  };
  priceCheck: {
    headerTitle: string;
    headerSubtitle: string;
    searchTitle: string;
    searchDesc: string;
    categoryLabel: string;
    selectCategory: string;
    searchProduct: string;
    searchPlaceholder: string;
    searchButton: string;
    referencePrice: string;
    trustedShops: string;
    warningTitle: string;
    warnings: string[];
    categories: {
      souvenirs: string;
      seafood: string;
      tourServices: string;
    };
  };
  contact: {
    headerTitle: string;
    headerSubtitle: string;
    infoTitle: string;
    hotline: string;
    email: string;
    address: string;
    workingHours: string;
    workingHoursText: string;
    onlineSupport: string;
    formTitle: string;
    fullName: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    successMessage: string;
    mapTitle: string;
    addressText: string;
  };
  footer: {
    description: string;
    links: string;
    contact: string;
    openingHours: string;
    openingHoursText: string;
    caveNote: string;
    copyright: string;
  };
  weather: {
    title: string;
    loading: string;
    location: string;
    wind: string;
    status: string;
    forecast: string;
    rain: string;
    conditions: Record<number, string>;
  };
  itinerary: {
    title: string;
    loading: string;
    description: string;
    warnings: {
      heavyRain: string;
      lightRain: string;
      veryHot: string;
    };
    activities: {
      heavyRain: string[];
      lightRain: string[];
      veryHot: string[];
      hot: string[];
      ideal: string[];
    };
    rainForecast: string;
    moreDetails: string;
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

export const translations: Record<Language, Translations> = {
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
      loading: "Đang tải...",
      error: "Lỗi",
      search: "Tìm kiếm",
      wind: "Gió",
      status: "Trạng thái",
      forecast7days: "Dự báo 7 ngày",
      rain: "Mưa",
    },
    hero: {
      title: "Khám phá Ngũ Hành Sơn",
      subtitle: "Thiên nhiên hùng vĩ - Văn hóa độc đáo - Nghề đá truyền thống",
    },
    index: {
      introTitle: "Ngũ Hành Sơn - Danh thắng của Đà Nẵng",
      introText: "Ngũ Hành Sơn là quần thể 5 ngọn núi đá vôi mang tên 5 yếu tố Kim, Mộc, Thủy, Hỏa, Thổ. Nơi đây là điểm đến hấp dẫn với hệ thống hang động thiên nhiên, chùa chiền linh thiêng, và làng nghề đá mỹ nghệ Non Nước nổi tiếng. Hãy để chúng tôi đồng hành cùng bạn khám phá vẻ đẹp kỳ vĩ này!",
      quickActions: {
        aboutTitle: "Giới thiệu",
        aboutDesc: "Tìm hiểu về 5 ngọn núi, lịch sử và văn hóa",
        foodTitle: "Ẩm thực",
        foodDesc: "Khám phá món ăn đặc sản địa phương",
        mapTitle: "Bản đồ",
        mapDesc: "Tìm điểm tham quan, ăn uống, mua sắm",
        priceTitle: "Đánh giá",
        priceDesc: "Kiểm tra giá đá mỹ nghệ và sản phẩm",
      },
      highlights: "Điểm nổi bật",
      marbleVillageTitle: "Làng nghề đá mỹ nghệ Non Nước",
      marbleVillageDesc: "Khám phá nghề truyền thống hơn 400 năm tuổi, nơi tạo ra những tác phẩm điêu khắc tinh xảo từ đá cẩm thạch",
      localCuisineTitle: "Ẩm thực địa phương",
      localCuisineDesc: "Thưởng thức hải sản tươi sống, mì Quảng, bánh tráng cuốn thịt heo và nhiều món đặc sản Đà Nẵng",
      exploreFood: "Khám phá món ăn",
    },
    about: {
      headerTitle: "Giới thiệu Ngũ Hành Sơn",
      headerSubtitle: "Khám phá vẻ đẹp thiên nhiên, lịch sử và văn hóa của quần thể 5 ngọn núi linh thiêng",
      historyTitle: "Lịch sử hình thành",
      historyText1: "Ngũ Hành Sơn là quần thể 5 ngọn núi đá vôi hình thành từ hàng triệu năm trước, nằm cách trung tâm thành phố Đà Nẵng khoảng 8km về phía đông nam. Tên gọi Ngũ Hành Sơn xuất phát từ quan niệm ngũ hành trong triết học phương Đông: Kim, Mộc, Thủy, Hỏa, Thổ.",
      historyText2: "Theo sử sách, vào thời vua Minh Mạng, vùng đất này được phong là danh thắng và mang tên \"Ngũ Hành Sơn\". Từ đó, nơi đây trở thành điểm hành hương linh thiêng và thu hút du khách từ khắp nơi. Các ngọn núi không chỉ có vẻ đẹp tự nhiên hùng vĩ mà còn chứa đựng nhiều hang động kỳ thú và công trình kiến trúc tôn giáo cổ kính.",
      fiveMountainsTitle: "Năm ngọn núi linh thiêng",
      mountains: [
        { name: "Kim Sơn (Núi Kim)", element: "Kim (Vàng)", description: "Núi cao nhất trong quần thể, nơi có động Huyền Không và chùa Tam Thai. Từ đỉnh Kim Sơn có thể ngắm toàn cảnh Đà Nẵng và biển Đông tuyệt đẹp." },
        { name: "Mộc Sơn (Núi Mộc)", element: "Mộc (Gỗ)", description: "Núi nhỏ nhất nhưng đầy thơ mộng với thảm thực vật xanh tươi. Nơi đây có nhiều hang động nhỏ và cây cối um tùm." },
        { name: "Thủy Sơn (Núi Thủy)", element: "Thủy (Nước)", description: "Núi lớn và đẹp nhất, nổi tiếng với động Huyền Không có ánh sáng tự nhiên chiếu xuống tạo khung cảnh huyền ảo. Có nhiều chùa và điểm tham quan nhất." },
        { name: "Hỏa Sơn (Núi Hỏa)", element: "Hỏa (Lửa)", description: "Núi có hình dạng đặc biệt, gắn liền với nhiều truyền thuyết về ngọn lửa thiêng. Là điểm dừng chân yên tĩnh ít khách du lịch." },
        { name: "Thổ Sơn (Núi Thổ)", element: "Thổ (Đất)", description: "Núi cuối cùng, gần biển nhất trong 5 ngọn núi. Nơi đây có không gian thoáng đãng và bãi đá đẹp mắt." }
      ],
      cultureTitle: "Văn hóa & Tôn giáo",
      templesTitle: "Chùa chiền & Danh thắng",
      temples: [
        { name: "Chùa Linh Ứng", description: "Chùa cổ nổi tiếng nhất tại Ngũ Hành Sơn, có tượng Phật Quan Âm cao và nhiều tác phẩm điêu khắc tinh xảo." },
        { name: "Động Huyền Không", description: "Hang động tự nhiên nổi tiếng với ánh sáng chiếu qua khe núi tạo cảnh tượng huyền ảo, được mệnh danh là \"ánh sáng thiên đường\"." },
        { name: "Chùa Tam Thai", description: "Ngôi chùa cổ kính nằm trên đỉnh núi, nơi có không gian yên tĩnh lý tưởng cho thiền định và ngắm cảnh." }
      ],
      nonNuocTitle: "Làng nghề đá mỹ nghệ Non Nước",
      nonNuocText1: "Làng nghề Non Nước có lịch sử hơn 400 năm, nổi tiếng với nghề chạm khắc đá cẩm thạch. Các nghệ nhân tại đây tạo ra những tác phẩm điêu khắc tinh xảo từ tượng Phật, rồng phượng đến các đồ trang trí nghệ thuật.",
      nonNuocText2: "Làng nghề không chỉ là nơi sản xuất mà còn là bảo tàng sống của nghệ thuật điêu khắc đá Việt Nam, thu hút hàng nghìn du khách mỗi năm.",
      activitiesTitle: "Hoạt động du lịch nổi bật",
      activities: [
        { title: "Leo núi & Khám phá hang động", description: "Trải nghiệm leo núi với hệ thống bậc thang đá, khám phá các hang động tự nhiên kỳ vĩ như Huyền Không, Linh Nham, Vân Thông." },
        { title: "Thăm quan chùa chiền", description: "Tham quan các ngôi chùa cổ, chiêm bái tượng Phật, tìm hiểu văn hóa tôn giáo Phật giáo tại Việt Nam." },
        { title: "Tắm biển Non Nước", description: "Thư giãn tại bãi biển Non Nước đẹp như tranh vẽ, nước trong xanh và cát trắng mịn, cách chân núi chỉ vài phút đi bộ." },
        { title: "Trải nghiệm làm đá mỹ nghệ", description: "Tham gia các lớp học ngắn hạn, được hướng dẫn bởi nghệ nhân tạo ra sản phẩm đá nhỏ của riêng bạn." }
      ],
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
    map: {
      headerTitle: "Bản đồ Ngũ Hành Sơn",
      headerSubtitle: "Khám phá các điểm tham quan, quán ăn, và địa điểm mua sắm",
      locations: "Các địa điểm nổi bật",
      legend: "Chú thích",
      legendItems: {
        attraction: "Điểm tham quan",
        food: "Ăn uống",
        shopping: "Mua sắm",
        parking: "Bãi đỗ xe",
      },
      detailedList: "Danh sách chi tiết",
      attractions: "Điểm tham quan",
      restaurants: "Quán ăn đề xuất",
      shopping: "Khu mua sắm",
      parking: "Bãi đỗ xe",
      locationTypes: {
        attraction: "Điểm tham quan",
        food: "Ăn uống",
        shopping: "Mua sắm",
        entertainment: "Vui chơi",
      },
      locationNames: {
        linhUng: "Chùa Linh Ứng",
        huyenKhong: "Động Huyền Không",
        nonNuocVillage: "Làng đá Non Nước",
        nonNuocBeach: "Bãi biển Non Nước",
        miQuangBaMua: "Mì Quảng Bà Mua",
      },
    },
    priceCheck: {
      headerTitle: "Công cụ tra giá",
      headerSubtitle: "Kiểm tra giá chuẩn trước khi mua - Tránh bị chém giá",
      searchTitle: "Tra cứu giá sản phẩm",
      searchDesc: "Chọn danh mục và tìm kiếm sản phẩm bạn quan tâm",
      categoryLabel: "Danh mục",
      selectCategory: "Chọn danh mục",
      searchProduct: "Tìm kiếm sản phẩm",
      searchPlaceholder: "Nhập tên sản phẩm...",
      searchButton: "Tìm kiếm giá",
      referencePrice: "Bảng giá tham khảo",
      trustedShops: "Địa điểm uy tín",
      warningTitle: "Lưu ý quan trọng",
      warnings: [
        "Luôn hỏi giá trước khi mua, đặc biệt với đá mỹ nghệ và hải sản",
        "Tham khảo giá ở nhiều cửa hàng khác nhau để so sánh",
        "Báo cáo cho chúng tôi nếu phát hiện nơi có dấu hiệu chém giá",
        "Giá có thể dao động theo mùa vụ và chất lượng sản phẩm",
        "Mua tại các cửa hàng có niêm yết giá rõ ràng",
      ],
      categories: {
        souvenirs: "Quà lưu niệm",
        seafood: "Hải sản",
        tourServices: "Dịch vụ du lịch",
      },
    },
    contact: {
      headerTitle: "Liên hệ với chúng tôi",
      headerSubtitle: "Chúng tôi luôn sẵn sàng hỗ trợ bạn trong chuyến khám phá Ngũ Hành Sơn",
      infoTitle: "Thông tin liên hệ",
      hotline: "Hotline hỗ trợ",
      email: "Email",
      address: "Địa chỉ",
      workingHours: "Giờ làm việc",
      workingHoursText: "Thứ 2 - Chủ nhật: 6:00 - 18:00",
      onlineSupport: "Hỗ trợ trực tuyến 24/7",
      formTitle: "Gửi tin nhắn cho chúng tôi",
      fullName: "Họ và tên",
      phone: "Số điện thoại",
      subject: "Tiêu đề",
      message: "Nội dung",
      send: "Gửi tin nhắn",
      successMessage: "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.",
      mapTitle: "Vị trí trên bản đồ",
      addressText: "Phường Ngũ Hành Sơn, Quận Ngũ Hành Sơn, Thành phố Đà Nẵng",
    },
    footer: {
      description: "Khám phá vẻ đẹp thiên nhiên và văn hóa độc đáo của Ngũ Hành Sơn, Đà Nẵng",
      links: "Liên kết",
      contact: "Liên hệ",
      openingHours: "Giờ mở cửa",
      openingHoursText: "Thứ 2 - Chủ nhật: 6:00 - 18:00",
      caveNote: "Các động và chùa có thể có giờ riêng",
      copyright: "Du lịch Ngũ Hành Sơn. Website phi lợi nhuận phục vụ cộng đồng.",
    },
    weather: {
      title: "Thời tiết",
      loading: "Đang tải dữ liệu thời tiết…",
      location: "Ngũ Hành Sơn",
      wind: "Gió",
      status: "Trạng thái",
      forecast: "Dự báo 7 ngày",
      rain: "Mưa",
      conditions: {
        0: "Trời quang đãng",
        1: "Ít mây",
        2: "Có mây",
        3: "Trời nhiều mây",
        45: "Sương mù",
        48: "Sương đóng băng",
        51: "Mưa phùn nhẹ",
        53: "Mưa phùn",
        55: "Mưa phùn dày",
        61: "Mưa nhẹ",
        63: "Mưa vừa",
        65: "Mưa to",
        71: "Tuyết nhẹ",
        73: "Tuyết vừa",
        75: "Tuyết to",
        95: "Dông",
      },
    },
    itinerary: {
      title: "Gợi ý lịch trình",
      loading: "Đang tải dữ liệu thời tiết…",
      description: "Lịch trình tham quan được tối ưu hóa dựa trên dự báo thời tiết 3 ngày tới",
      warnings: {
        heavyRain: "Mưa nhiều, tránh hoạt động ngoài trời",
        lightRain: "Có mưa, mang ô khi đi",
        veryHot: "Thời tiết nóng, hoạt động sớm hoặc chiều tối",
      },
      activities: {
        heavyRain: ["Viếng chùa Linh Ứng", "Ngắm hang động Huyền Không", "Mua sắm tại làng đá mỹ nghệ"],
        lightRain: ["Tham quan Chùa Tam Thai", "Khám phá Động Huyền Không", "Ăn uống tại quán địa phương"],
        veryHot: ["Leo núi sớm (5h-8h)", "Tắm biển Non Nước buổi chiều", "Ăn hải sản tươi sống"],
        hot: ["Leo núi Kim Sơn", "Tham quan Bãi biển Non Nước", "Mua quà lưu niệm"],
        ideal: ["Leo núi toàn bộ 5 ngọn", "Tham quan hang động", "Chụp ảnh cảnh đẹp"],
      },
      rainForecast: "Dự báo mưa",
      moreDetails: "Xem thêm gợi ý chi tiết",
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
      loading: "Loading...",
      error: "Error",
      search: "Search",
      wind: "Wind",
      status: "Status",
      forecast7days: "7-Day Forecast",
      rain: "Rain",
    },
    hero: {
      title: "Discover Ngu Hanh Son",
      subtitle: "Majestic Nature - Unique Culture - Traditional Stone Crafts",
    },
    index: {
      introTitle: "Ngu Hanh Son - Da Nang's Famous Landmark",
      introText: "Ngu Hanh Son is a cluster of 5 limestone mountains named after the 5 elements: Metal, Wood, Water, Fire, and Earth. This is an attractive destination with natural cave systems, sacred pagodas, and the famous Non Nuoc stone craft village. Let us accompany you in exploring this magnificent beauty!",
      quickActions: {
        aboutTitle: "About",
        aboutDesc: "Learn about 5 mountains, history and culture",
        foodTitle: "Cuisine",
        foodDesc: "Discover local specialty dishes",
        mapTitle: "Map",
        mapDesc: "Find attractions, restaurants, shopping",
        priceTitle: "Reviews",
        priceDesc: "Check marble craft and product prices",
      },
      highlights: "Highlights",
      marbleVillageTitle: "Non Nuoc Stone Craft Village",
      marbleVillageDesc: "Explore the over 400-year-old traditional craft, where exquisite marble sculptures are created",
      localCuisineTitle: "Local Cuisine",
      localCuisineDesc: "Enjoy fresh seafood, Mi Quang noodles, rice paper rolls with pork and many Da Nang specialties",
      exploreFood: "Explore Food",
    },
    about: {
      headerTitle: "About Ngu Hanh Son",
      headerSubtitle: "Discover the natural beauty, history and culture of the 5 sacred mountains",
      historyTitle: "Formation History",
      historyText1: "Ngu Hanh Son is a cluster of 5 limestone mountains formed millions of years ago, located about 8km southeast of Da Nang city center. The name Ngu Hanh Son comes from the concept of five elements in Eastern philosophy: Metal, Wood, Water, Fire, Earth.",
      historyText2: "According to historical records, during the reign of King Minh Mang, this area was designated as a scenic landmark and named \"Ngu Hanh Son\". Since then, it has become a sacred pilgrimage site attracting visitors from everywhere. The mountains not only have magnificent natural beauty but also contain many wonderful caves and ancient religious architectural works.",
      fiveMountainsTitle: "Five Sacred Mountains",
      mountains: [
        { name: "Kim Son (Metal Mountain)", element: "Metal (Gold)", description: "The highest mountain in the complex, home to Huyen Khong Cave and Tam Thai Pagoda. From the peak of Kim Son, you can enjoy a panoramic view of Da Nang and the beautiful East Sea." },
        { name: "Moc Son (Wood Mountain)", element: "Wood", description: "The smallest but most romantic mountain with lush vegetation. There are many small caves and dense trees here." },
        { name: "Thuy Son (Water Mountain)", element: "Water", description: "The largest and most beautiful mountain, famous for Huyen Khong Cave with natural light shining through creating a mystical scene. Has the most pagodas and attractions." },
        { name: "Hoa Son (Fire Mountain)", element: "Fire", description: "A mountain with unique shape, associated with many legends about sacred fire. A quiet stop with few tourists." },
        { name: "Tho Son (Earth Mountain)", element: "Earth", description: "The last mountain, closest to the sea among the 5 mountains. Features an airy space and beautiful rock formations." }
      ],
      cultureTitle: "Culture & Religion",
      templesTitle: "Pagodas & Landmarks",
      temples: [
        { name: "Linh Ung Pagoda", description: "The most famous ancient pagoda at Ngu Hanh Son, with a tall Quan Am Buddha statue and many exquisite sculptures." },
        { name: "Huyen Khong Cave", description: "A natural cave famous for light shining through rock crevices creating a mystical scene, dubbed the \"heavenly light\"." },
        { name: "Tam Thai Pagoda", description: "An ancient pagoda located on the mountain top, an ideal quiet space for meditation and sightseeing." }
      ],
      nonNuocTitle: "Non Nuoc Stone Craft Village",
      nonNuocText1: "Non Nuoc craft village has over 400 years of history, famous for marble carving. The artisans here create exquisite sculptures from Buddha statues, dragons and phoenixes to artistic decorations.",
      nonNuocText2: "The craft village is not only a production place but also a living museum of Vietnamese stone sculpture art, attracting thousands of visitors every year.",
      activitiesTitle: "Featured Tourism Activities",
      activities: [
        { title: "Mountain Climbing & Cave Exploration", description: "Experience climbing with stone stairways, explore magnificent natural caves like Huyen Khong, Linh Nham, Van Thong." },
        { title: "Temple Visits", description: "Visit ancient pagodas, worship Buddha statues, learn about Buddhist religious culture in Vietnam." },
        { title: "Non Nuoc Beach Swimming", description: "Relax at the picturesque Non Nuoc beach with crystal clear water and fine white sand, just minutes walk from the mountain." },
        { title: "Stone Craft Experience", description: "Join short-term classes, guided by artisans to create your own small stone products." }
      ],
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
    map: {
      headerTitle: "Ngu Hanh Son Map",
      headerSubtitle: "Explore attractions, restaurants, and shopping spots",
      locations: "Featured Locations",
      legend: "Legend",
      legendItems: {
        attraction: "Attraction",
        food: "Food & Dining",
        shopping: "Shopping",
        parking: "Parking",
      },
      detailedList: "Detailed List",
      attractions: "Attractions",
      restaurants: "Recommended Restaurants",
      shopping: "Shopping Areas",
      parking: "Parking Lots",
      locationTypes: {
        attraction: "Attraction",
        food: "Food & Dining",
        shopping: "Shopping",
        entertainment: "Entertainment",
      },
      locationNames: {
        linhUng: "Linh Ung Pagoda",
        huyenKhong: "Huyen Khong Cave",
        nonNuocVillage: "Non Nuoc Stone Village",
        nonNuocBeach: "Non Nuoc Beach",
        miQuangBaMua: "Mi Quang Ba Mua",
      },
    },
    priceCheck: {
      headerTitle: "Price Check Tool",
      headerSubtitle: "Check standard prices before buying - Avoid overcharging",
      searchTitle: "Product Price Search",
      searchDesc: "Select category and search for products you're interested in",
      categoryLabel: "Category",
      selectCategory: "Select category",
      searchProduct: "Search product",
      searchPlaceholder: "Enter product name...",
      searchButton: "Search Price",
      referencePrice: "Reference Price List",
      trustedShops: "Trusted Shops",
      warningTitle: "Important Notes",
      warnings: [
        "Always ask for prices before buying, especially for marble crafts and seafood",
        "Compare prices at different stores",
        "Report to us if you find overpricing",
        "Prices may vary by season and product quality",
        "Buy at shops with clear price displays",
      ],
      categories: {
        souvenirs: "Souvenirs",
        seafood: "Seafood",
        tourServices: "Tour Services",
      },
    },
    contact: {
      headerTitle: "Contact Us",
      headerSubtitle: "We are always ready to support you in exploring Ngu Hanh Son",
      infoTitle: "Contact Information",
      hotline: "Support Hotline",
      email: "Email",
      address: "Address",
      workingHours: "Working Hours",
      workingHoursText: "Monday - Sunday: 6:00 AM - 6:00 PM",
      onlineSupport: "24/7 Online Support",
      formTitle: "Send us a message",
      fullName: "Full Name",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      successMessage: "Thank you for contacting us! We will respond as soon as possible.",
      mapTitle: "Location on Map",
      addressText: "Ngu Hanh Son Ward, Ngu Hanh Son District, Da Nang City",
    },
    footer: {
      description: "Discover the natural beauty and unique culture of Ngu Hanh Son, Da Nang",
      links: "Links",
      contact: "Contact",
      openingHours: "Opening Hours",
      openingHoursText: "Monday - Sunday: 6:00 AM - 6:00 PM",
      caveNote: "Caves and pagodas may have separate hours",
      copyright: "Ngu Hanh Son Tourism. Non-profit community website.",
    },
    weather: {
      title: "Weather",
      loading: "Loading weather data…",
      location: "Ngu Hanh Son",
      wind: "Wind",
      status: "Status",
      forecast: "7-Day Forecast",
      rain: "Rain",
      conditions: {
        0: "Clear sky",
        1: "Few clouds",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Freezing fog",
        51: "Light drizzle",
        53: "Drizzle",
        55: "Heavy drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        71: "Light snow",
        73: "Moderate snow",
        75: "Heavy snow",
        95: "Thunderstorm",
      },
    },
    itinerary: {
      title: "Suggested Itinerary",
      loading: "Loading weather data…",
      description: "Itinerary optimized based on 3-day weather forecast",
      warnings: {
        heavyRain: "Heavy rain, avoid outdoor activities",
        lightRain: "Rainy, bring an umbrella",
        veryHot: "Hot weather, go early or late afternoon",
      },
      activities: {
        heavyRain: ["Visit Linh Ung Pagoda", "Explore Huyen Khong Cave", "Shop at marble craft village"],
        lightRain: ["Visit Tam Thai Pagoda", "Explore Huyen Khong Cave", "Dine at local restaurants"],
        veryHot: ["Climb early (5-8 AM)", "Swim at Non Nuoc Beach afternoon", "Enjoy fresh seafood"],
        hot: ["Climb Kim Son Mountain", "Visit Non Nuoc Beach", "Buy souvenirs"],
        ideal: ["Climb all 5 mountains", "Explore caves", "Take scenic photos"],
      },
      rainForecast: "Rain forecast",
      moreDetails: "See more detailed suggestions",
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
  ko: {
    nav: {
      home: "홈",
      about: "소개",
      food: "음식",
      map: "지도",
      priceCheck: "가격 확인",
      contact: "연락처",
    },
    common: {
      explore: "지금 탐험하기",
      viewMap: "지도 보기",
      learnMore: "더 알아보기",
      weather: "날씨",
      schedule: "추천 일정",
      rating: "평점",
      reviews: "리뷰",
      suggestedLocation: "추천 장소",
      category: "카테고리",
      all: "전체",
      mainDish: "메인 요리",
      seafood: "해산물",
      snacks: "간식",
      loading: "로딩 중...",
      error: "오류",
      search: "검색",
      wind: "바람",
      status: "상태",
      forecast7days: "7일 예보",
      rain: "비",
    },
    hero: {
      title: "응우하인선 탐험",
      subtitle: "장엄한 자연 - 독특한 문화 - 전통 석공예",
    },
    index: {
      introTitle: "응우하인선 - 다낭의 명소",
      introText: "응우하인선은 금(金), 목(木), 수(水), 화(火), 토(土) 다섯 가지 원소의 이름을 딴 5개의 석회암 산입니다. 자연 동굴 시스템, 신성한 사원, 유명한 논누억 석공예 마을이 있는 매력적인 관광지입니다. 이 장엄한 아름다움을 함께 탐험해 보세요!",
      quickActions: {
        aboutTitle: "소개",
        aboutDesc: "5개의 산, 역사, 문화에 대해 알아보기",
        foodTitle: "음식",
        foodDesc: "지역 특산 요리 발견",
        mapTitle: "지도",
        mapDesc: "관광지, 맛집, 쇼핑 찾기",
        priceTitle: "리뷰",
        priceDesc: "대리석 공예품 및 제품 가격 확인",
      },
      highlights: "하이라이트",
      marbleVillageTitle: "논누억 석공예 마을",
      marbleVillageDesc: "400년 이상의 역사를 가진 전통 공예를 탐험하고, 정교한 대리석 조각품을 만나보세요",
      localCuisineTitle: "지역 음식",
      localCuisineDesc: "신선한 해산물, 미꽝 국수, 돼지고기 라이스페이퍼 롤 등 다낭 특산물을 즐기세요",
      exploreFood: "음식 탐험",
    },
    about: {
      headerTitle: "응우하인선 소개",
      headerSubtitle: "5개의 신성한 산의 자연미, 역사, 문화를 발견하세요",
      historyTitle: "형성 역사",
      historyText1: "응우하인선은 수백만 년 전에 형성된 5개의 석회암 산으로, 다낭 시내에서 남동쪽으로 약 8km 떨어져 있습니다. 응우하인선이라는 이름은 동양 철학의 오행 개념에서 유래했습니다: 금, 목, 수, 화, 토.",
      historyText2: "역사 기록에 따르면, 민망왕 시대에 이 지역은 명승지로 지정되어 \"응우하인선\"이라는 이름을 받았습니다. 그 이후로 이곳은 전국에서 방문객을 끌어들이는 신성한 순례지가 되었습니다. 산들은 웅장한 자연미뿐만 아니라 많은 신비로운 동굴과 고대 종교 건축물을 품고 있습니다.",
      fiveMountainsTitle: "다섯 개의 신성한 산",
      mountains: [
        { name: "김선 (금산)", element: "금 (Gold)", description: "군락에서 가장 높은 산으로, 휀콩 동굴과 탐타이 사원이 있습니다. 김선 정상에서 다낭과 아름다운 동해의 파노라마 전망을 즐길 수 있습니다." },
        { name: "목선 (목산)", element: "목 (Wood)", description: "가장 작지만 울창한 식물로 가장 낭만적인 산입니다. 여기에는 많은 작은 동굴과 빽빽한 나무가 있습니다." },
        { name: "투이선 (수산)", element: "수 (Water)", description: "가장 크고 아름다운 산으로, 자연광이 비추어 신비로운 장면을 만드는 휀콩 동굴로 유명합니다. 가장 많은 사원과 관광지가 있습니다." },
        { name: "화선 (화산)", element: "화 (Fire)", description: "독특한 모양의 산으로, 신성한 불에 관한 많은 전설과 연관되어 있습니다. 관광객이 적은 조용한 정류장입니다." },
        { name: "토선 (토산)", element: "토 (Earth)", description: "5개의 산 중 바다에 가장 가까운 마지막 산입니다. 탁 트인 공간과 아름다운 바위 형성이 특징입니다." }
      ],
      cultureTitle: "문화 & 종교",
      templesTitle: "사원 & 명소",
      temples: [
        { name: "린웅 사원", description: "응우하인선에서 가장 유명한 고대 사원으로, 높은 관음불상과 많은 정교한 조각품이 있습니다." },
        { name: "휀콩 동굴", description: "바위 틈으로 비치는 빛이 신비로운 장면을 만들어내는 \"천국의 빛\"이라 불리는 유명한 자연 동굴입니다." },
        { name: "탐타이 사원", description: "산 정상에 위치한 고대 사원으로, 명상과 관광을 위한 이상적인 조용한 공간입니다." }
      ],
      nonNuocTitle: "논누억 석공예 마을",
      nonNuocText1: "논누억 공예 마을은 400년 이상의 역사를 가지고 있으며, 대리석 조각으로 유명합니다. 이곳의 장인들은 불상, 용과 봉황부터 예술적인 장식품까지 정교한 조각품을 만들어냅니다.",
      nonNuocText2: "공예 마을은 생산지일 뿐만 아니라 베트남 석조 조각 예술의 살아있는 박물관으로, 매년 수천 명의 방문객을 끌어들입니다.",
      activitiesTitle: "주요 관광 활동",
      activities: [
        { title: "등산 & 동굴 탐험", description: "돌계단으로 등산을 경험하고, 휀콩, 린냠, 반통 같은 장엄한 자연 동굴을 탐험하세요." },
        { title: "사원 방문", description: "고대 사원을 방문하고, 불상에 참배하며, 베트남의 불교 종교 문화에 대해 알아보세요." },
        { title: "논누억 해변 수영", description: "산에서 몇 분 거리에 있는 맑은 물과 고운 백사장이 있는 그림 같은 논누억 해변에서 휴식을 취하세요." },
        { title: "석공예 체험", description: "단기 수업에 참여하여 장인의 지도 아래 자신만의 작은 석제품을 만들어보세요." }
      ],
    },
    food: {
      title: "응우하인선 음식",
      subtitle: "중부 베트남과 다낭의 독특한 맛을 탐험하세요",
      intro: "응우하인선의 음식은 신선한 해산물뿐만 아니라 미꽝, 라이스페이퍼 롤, 생선케이크 국수와 같은 전통 요리로 중부 베트남의 독특한 맛을 담고 있습니다... 이 요리 천국에서 미각을 경험해보세요!",
      tips: "식사 팁",
      tipsList: [
        "현지인이 자주 찾는 식당에서 식사하여 품질과 합리적인 가격을 보장받으세요",
        "특히 해산물은 주문 전에 가격을 물어보세요",
        "해산물을 먹기 가장 좋은 시간은 어획물이 신선한 이른 아침입니다",
        "구매 전 표준 가격을 알기 위해 가격 확인 페이지를 이용하세요",
      ],
    },
    map: {
      headerTitle: "응우하인선 지도",
      headerSubtitle: "관광지, 맛집, 쇼핑 장소를 탐험하세요",
      locations: "주요 위치",
      legend: "범례",
      legendItems: {
        attraction: "관광지",
        food: "음식 & 식당",
        shopping: "쇼핑",
        parking: "주차장",
      },
      detailedList: "상세 목록",
      attractions: "관광지",
      restaurants: "추천 식당",
      shopping: "쇼핑 지역",
      parking: "주차장",
      locationTypes: {
        attraction: "관광지",
        food: "음식 & 식당",
        shopping: "쇼핑",
        entertainment: "엔터테인먼트",
      },
      locationNames: {
        linhUng: "린웅 사원",
        huyenKhong: "휀콩 동굴",
        nonNuocVillage: "논누억 석재 마을",
        nonNuocBeach: "논누억 해변",
        miQuangBaMua: "미꽝 바무아",
      },
    },
    priceCheck: {
      headerTitle: "가격 확인 도구",
      headerSubtitle: "구매 전 표준 가격 확인 - 바가지 방지",
      searchTitle: "제품 가격 검색",
      searchDesc: "카테고리를 선택하고 관심 있는 제품을 검색하세요",
      categoryLabel: "카테고리",
      selectCategory: "카테고리 선택",
      searchProduct: "제품 검색",
      searchPlaceholder: "제품명 입력...",
      searchButton: "가격 검색",
      referencePrice: "참고 가격표",
      trustedShops: "신뢰할 수 있는 상점",
      warningTitle: "중요 사항",
      warnings: [
        "특히 대리석 공예품과 해산물은 구매 전에 항상 가격을 물어보세요",
        "여러 상점에서 가격을 비교하세요",
        "바가지를 발견하면 저희에게 신고해주세요",
        "가격은 시즌과 제품 품질에 따라 달라질 수 있습니다",
        "가격이 명확하게 표시된 상점에서 구매하세요",
      ],
      categories: {
        souvenirs: "기념품",
        seafood: "해산물",
        tourServices: "투어 서비스",
      },
    },
    contact: {
      headerTitle: "문의하기",
      headerSubtitle: "응우하인선 탐험을 지원할 준비가 되어 있습니다",
      infoTitle: "연락처 정보",
      hotline: "지원 핫라인",
      email: "이메일",
      address: "주소",
      workingHours: "영업 시간",
      workingHoursText: "월요일 - 일요일: 오전 6:00 - 오후 6:00",
      onlineSupport: "24/7 온라인 지원",
      formTitle: "메시지 보내기",
      fullName: "성명",
      phone: "전화번호",
      subject: "제목",
      message: "메시지",
      send: "메시지 보내기",
      successMessage: "문의해 주셔서 감사합니다! 최대한 빨리 답변드리겠습니다.",
      mapTitle: "지도상 위치",
      addressText: "응우하인선구, 응우하인선동, 다낭시",
    },
    footer: {
      description: "다낭 응우하인선의 자연미와 독특한 문화를 발견하세요",
      links: "링크",
      contact: "연락처",
      openingHours: "영업 시간",
      openingHoursText: "월요일 - 일요일: 오전 6:00 - 오후 6:00",
      caveNote: "동굴과 사원은 별도의 시간이 있을 수 있습니다",
      copyright: "응우하인선 관광. 비영리 커뮤니티 웹사이트.",
    },
    weather: {
      title: "날씨",
      loading: "날씨 데이터 로딩 중…",
      location: "응우하인선",
      wind: "바람",
      status: "상태",
      forecast: "7일 예보",
      rain: "비",
      conditions: {
        0: "맑음",
        1: "구름 조금",
        2: "구름 많음",
        3: "흐림",
        45: "안개",
        48: "결빙 안개",
        51: "이슬비",
        53: "보슬비",
        55: "강한 이슬비",
        61: "약한 비",
        63: "보통 비",
        65: "강한 비",
        71: "약한 눈",
        73: "보통 눈",
        75: "강한 눈",
        95: "뇌우",
      },
    },
    itinerary: {
      title: "추천 일정",
      loading: "날씨 데이터 로딩 중…",
      description: "3일 날씨 예보에 기반한 최적화된 일정",
      warnings: {
        heavyRain: "폭우, 야외 활동 피하기",
        lightRain: "비 예상, 우산 지참",
        veryHot: "더운 날씨, 이른 아침이나 오후 늦게 활동",
      },
      activities: {
        heavyRain: ["린웅 사원 방문", "휀콩 동굴 탐험", "대리석 공예 마을에서 쇼핑"],
        lightRain: ["탐타이 사원 방문", "휀콩 동굴 탐험", "현지 식당에서 식사"],
        veryHot: ["이른 등산 (오전 5-8시)", "오후에 논누억 해변 수영", "신선한 해산물 즐기기"],
        hot: ["김선 등산", "논누억 해변 방문", "기념품 구매"],
        ideal: ["5개 산 모두 등산", "동굴 탐험", "경치 사진 촬영"],
      },
      rainForecast: "강수 예보",
      moreDetails: "자세한 제안 보기",
    },
    chatbot: {
      name: "Nui Non Guide",
      subtitle: "항상 도움드릴 준비가 되어 있습니다",
      welcome: `안녕하세요! 👋 응우하인선 관광 웹사이트에 오신 것을 환영합니다!

이 웹사이트는 지역 관광 발전에 가치를 제공하기 위해 헤르만 그마이너 학교 11/1반 5명의 학생들이 개발했습니다.

다음에 대해 도움드릴 수 있습니다:
• 음식 & 제품 가격
• 관광 명소
• 이동 거리
• 연락처 정보

아래에서 주제를 선택하거나 질문을 입력하세요! 😊`,
      placeholder: "질문을 입력하세요...",
      priceBtn: "음식 가격",
      locationBtn: "위치",
      distanceBtn: "거리",
      contactBtn: "연락처",
      aboutBtn: "소개",
    },
  },
};
