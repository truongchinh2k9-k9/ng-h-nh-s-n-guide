import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, MapPin, UtensilsCrossed, Phone, Info, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const welcomeMessage = `Xin chào! 👋 Chào mừng bạn đến với website du lịch Ngũ Hành Sơn!

Đây là website được phát triển bởi nhóm 11/1 Hermann Gmeiner gồm 5 thành viên với tâm huyết là mang lại giá trị cho việc phát triển du lịch địa phương.

Tôi có thể giúp bạn tìm hiểu về:
• Giá cả món ăn & sản phẩm
• Địa điểm tham quan
• Khoảng cách di chuyển
• Thông tin liên hệ

Hãy chọn chủ đề bên dưới hoặc nhập câu hỏi của bạn! 😊`;

  // Pre-defined responses
  const responses: Record<string, string> = {
    // Giá món ăn
    "giá": `📋 **BẢNG GIÁ MÓN ĂN THAM KHẢO:**

🍜 **Mì Quảng**: 35.000 - 50.000đ
📍 Quán Bà Mua, Quán 1A

🥢 **Bánh tráng cuốn thịt heo**: 80.000 - 120.000đ/suất
📍 Nhà hàng Trần, Quán Bé Mặn

🦐 **Hải sản tươi sống**:
• Tôm hùm: 600.000 - 1.200.000đ/kg
• Cua biển: 200.000 - 400.000đ/kg
• Mực tươi: 150.000 - 250.000đ/kg

🍲 **Bún chả cá**: 30.000 - 45.000đ
🥗 **Bánh xèo**: 40.000 - 60.000đ/phần

💡 Mẹo: Hỏi giá trước khi gọi món, đặc biệt với hải sản!`,

    "mì quảng": `🍜 **MÌ QUẢNG NGŨ HÀNH SƠN**

💰 Giá: 35.000 - 50.000đ/tô

📍 Địa điểm gợi ý:
• Quán Bà Mua - Đường Lê Văn Hiến
• Quán Mì Quảng 1A - Gần khu Marble Mountains

⭐ Đặc điểm: Sợi mì vàng dai, nước dùng đậm đà, thịt heo, tôm, trứng cút, rau sống tươi ngon.`,

    "bánh tráng": `🥢 **BÁNH TRÁNG CUỐN THỊT HEO**

💰 Giá: 80.000 - 120.000đ/suất (2-3 người)

📍 Địa điểm gợi ý:
• Nhà hàng Trần - 4 Lê Đăng Dương
• Quán Bé Mặn - Huỳnh Ngọc Huệ

⭐ Gồm: Bánh tráng mỏng, thịt heo luộc, rau sống, mắm nêm đặc trưng Đà Nẵng.`,

    "hải sản": `🦐 **GIÁ HẢI SẢN TƯƠI SỐNG**

• Tôm hùm: 600.000 - 1.200.000đ/kg
• Cua biển: 200.000 - 400.000đ/kg  
• Mực tươi: 150.000 - 250.000đ/kg
• Sò điệp: 100.000 - 200.000đ/kg
• Cá song: 300.000 - 600.000đ/kg

📍 Địa điểm uy tín:
• Nhà hàng Bé Mặn - Huỳnh Ngọc Huệ
• Chợ hải sản Non Nước

⚠️ Lưu ý: Luôn hỏi giá và yêu cầu cân trước mặt!`,

    // Địa điểm
    "địa điểm": `📍 **CÁC ĐỊA ĐIỂM NỔI BẬT TẠI NGŨ HÀNH SƠN:**

⛰️ **Danh thắng:**
• Núi Thủy Sơn (chính) - Nhiều hang động, chùa chiền
• Động Huyền Không - Hang động đẹp nhất
• Động Âm Phủ - Mô phỏng địa ngục
• Chùa Linh Ứng - Ngôi chùa cổ linh thiêng

🏖️ **Bãi biển:**
• Bãi biển Non Nước - Bãi biển đẹp, sóng vừa
• Bãi biển Mỹ Khê - Gần kề, sạch đẹp

🛍️ **Mua sắm:**
• Làng đá mỹ nghệ Non Nước
• Các shop lưu niệm quanh núi

🍴 **Ẩm thực:**
• Quán Bà Mua, Nhà hàng Trần, Quán Bé Mặn`,

    "núi": `⛰️ **NGŨ HÀNH SƠN - 5 NGỌN NÚI:**

1. **Kim Sơn** (phía Tây Bắc) - Núi nhỏ nhất
2. **Mộc Sơn** (phía Đông) - Cây cối xanh tươi  
3. **Thủy Sơn** (cao nhất) - Nhiều hang động, chùa chiền ⭐
4. **Hỏa Sơn** (2 ngọn phía Nam) - Có 2 đỉnh Âm và Dương
5. **Thổ Sơn** (lớn nhất về diện tích)

🎫 Vé tham quan Thủy Sơn: 40.000đ/người lớn
🛗 Thang máy: 40.000đ/chiều

📍 Địa chỉ: Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng`,

    "động": `🕳️ **CÁC HANG ĐỘNG NỔI TIẾNG:**

✨ **Động Huyền Không**
Hang động đẹp nhất với ánh sáng tự nhiên chiếu qua vòm đá. Có tượng Phật lớn bên trong.

👻 **Động Âm Phủ**  
Mô phỏng 18 tầng địa ngục theo quan niệm Phật giáo.

🌊 **Động Vân Thông**
Hang động nhỏ với vách đá độc đáo.

⏰ Giờ mở cửa: 7:00 - 17:30 hàng ngày
🎫 Vé: Đã bao gồm trong vé tham quan núi`,

    "chùa": `🛕 **CÁC NGÔI CHÙA TẠI NGŨ HÀNH SƠN:**

🙏 **Chùa Linh Ứng** (Thủy Sơn)
Ngôi chùa cổ nhất, linh thiêng, có tượng Phật lớn.

🙏 **Chùa Tam Thai**
Chùa lớn trên đỉnh núi Thủy Sơn, kiến trúc độc đáo.

🙏 **Chùa Từ Tâm**
Nằm sâu trong núi, yên tĩnh, thanh bình.

📍 Tất cả nằm trên núi Thủy Sơn
⏰ Giờ thăm: 7:00 - 17:00`,

    // Khoảng cách
    "khoảng cách": `🚗 **KHOẢNG CÁCH TỪ NGŨ HÀNH SƠN:**

📍 Đến **Trung tâm Đà Nẵng**: ~8km (20 phút)
📍 Đến **Sân bay Đà Nẵng**: ~10km (25 phút)
📍 Đến **Phố cổ Hội An**: ~7km (15 phút)
📍 Đến **Bà Nà Hills**: ~35km (1 tiếng)
📍 Đến **Bãi biển Mỹ Khê**: ~3km (10 phút)
📍 Đến **Cầu Rồng**: ~7km (20 phút)
📍 Đến **Huế**: ~100km (2.5 tiếng)

🛵 Thuê xe máy: 100.000 - 150.000đ/ngày
🚕 Grab/Taxi: Có sẵn, giá hợp lý`,

    "hội an": `📍 **NGŨ HÀNH SƠN → HỘI AN**

🚗 Khoảng cách: ~7km
⏱️ Thời gian: 15-20 phút

🛵 **Di chuyển:**
• Xe máy: Đi theo đường ven biển Trường Sa
• Grab/Taxi: ~50.000 - 80.000đ
• Xe bus: Tuyến 01 (15.000đ)

💡 Gợi ý: Nên đi buổi chiều, ghé Hội An xem phố đèn lồng về đêm!`,

    "đà nẵng": `📍 **NGŨ HÀNH SƠN → TRUNG TÂM ĐÀ NẴNG**

🚗 Khoảng cách: ~8km
⏱️ Thời gian: 20-25 phút

🛵 **Di chuyển:**
• Xe máy: Đường Lê Văn Hiến hoặc Nguyễn Văn Thoại
• Grab/Taxi: ~60.000 - 100.000đ
• Xe bus: Tuyến 01, 06

📍 Các điểm nổi bật ở trung tâm: Cầu Rồng, Bảo tàng Chăm, Chợ Hàn`,

    // Liên hệ
    "liên hệ": `📞 **THÔNG TIN LIÊN HỆ:**

📍 **Địa chỉ:** Phường Hòa Hải, Quận Ngũ Hành Sơn, TP. Đà Nẵng

📞 **Hotline hỗ trợ:** 0236 3961 114
📧 **Email:** info@nguhanhson.danang.gov.vn

🌐 **Website chính thức:** nguhanhson.danang.gov.vn

⏰ **Giờ làm việc:**
• Thứ 2 - Thứ 6: 7:30 - 17:00
• Thứ 7: 7:30 - 11:30

🚨 **Khẩn cấp:**
• Công an: 113
• Cứu thương: 115`,

    // Giới thiệu web
    "giới thiệu": `ℹ️ **GIỚI THIỆU WEBSITE**

Đây là website du lịch Ngũ Hành Sơn được phát triển bởi **nhóm 11/1 trường Hermann Gmeiner** gồm 5 thành viên.

🎯 **Mục tiêu:**
• Cung cấp thông tin du lịch chính xác
• Hỗ trợ du khách tránh bị "chém giá"
• Quảng bá vẻ đẹp Ngũ Hành Sơn
• Phát triển du lịch địa phương

📱 **Tính năng:**
• Tra cứu giá sản phẩm, dịch vụ
• Bản đồ địa điểm chi tiết
• Gợi ý ẩm thực địa phương
• Thông tin lịch sử, văn hóa

💚 Cảm ơn bạn đã sử dụng website của chúng tôi!`,

    "vé": `🎫 **GIÁ VÉ THAM QUAN NGŨ HÀNH SƠN:**

🏔️ **Vé vào cổng núi Thủy Sơn:**
• Người lớn: 40.000đ
• Trẻ em (dưới 1.2m): Miễn phí
• Học sinh/sinh viên: 20.000đ (có thẻ)

🛗 **Thang máy:**
• 1 chiều: 40.000đ
• Cả đi và về: 70.000đ

⏰ **Giờ mở cửa:** 7:00 - 17:30 hàng ngày

💡 Mẹo: Nên đi sáng sớm (7:00-9:00) để tránh đông và nắng nóng!`,

    "đá mỹ nghệ": `🗿 **GIÁ ĐÁ MỸ NGHỆ NON NƯỚC:**

• Tượng Phật Di Lặc nhỏ (20cm): 150.000 - 300.000đ
• Tượng Quan Âm trung (50cm): 1.500.000 - 3.000.000đ
• Tượng rồng phượng cặp: 500.000 - 2.000.000đ
• Đồ trang trí nhỏ: 50.000 - 200.000đ
• Lư hương đá: 200.000 - 800.000đ

📍 **Địa điểm mua uy tín:**
Làng đá mỹ nghệ Non Nước - Ngũ Hành Sơn

⚠️ Lưu ý: So sánh giá nhiều nơi, mặc cả 20-30%!`,
  };

  // Quick action buttons
  const quickActions = [
    { icon: UtensilsCrossed, label: "Giá món ăn", keyword: "giá" },
    { icon: MapPin, label: "Địa điểm", keyword: "địa điểm" },
    { icon: Navigation, label: "Khoảng cách", keyword: "khoảng cách" },
    { icon: Phone, label: "Liên hệ", keyword: "liên hệ" },
    { icon: Info, label: "Giới thiệu", keyword: "giới thiệu" },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat opens
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: welcomeMessage,
            isBot: true,
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when new messages arrive
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const findResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    // Check for keywords in order of specificity
    const keywords = [
      "mì quảng", "bánh tráng", "hải sản", "vé", "đá mỹ nghệ",
      "núi", "động", "chùa", "hội an", "đà nẵng",
      "giá", "địa điểm", "khoảng cách", "liên hệ", "giới thiệu"
    ];

    for (const keyword of keywords) {
      if (lowerInput.includes(keyword)) {
        return responses[keyword];
      }
    }

    // Default response
    return `Xin lỗi, tôi chưa hiểu câu hỏi của bạn. 😅

Bạn có thể hỏi tôi về:
• **Giá cả**: "giá món ăn", "giá hải sản", "giá vé"
• **Địa điểm**: "địa điểm tham quan", "núi", "chùa", "động"
• **Di chuyển**: "khoảng cách đến Hội An", "đi Đà Nẵng"
• **Liên hệ**: "thông tin liên hệ", "hotline"
• **Về website**: "giới thiệu website"

Hoặc chọn các nút bên dưới để tìm hiểu nhanh! 👇`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickAction = (keyword: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: quickActions.find((a) => a.keyword === keyword)?.label || keyword,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: responses[keyword],
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-primary text-primary-foreground",
          isOpen && "rotate-90"
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Nui Non Guide</h3>
                <p className="text-xs opacity-80">Luôn sẵn sàng hỗ trợ bạn</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[350px] p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap",
                      message.isBot
                        ? "bg-muted text-foreground rounded-tl-sm"
                        : "bg-primary text-primary-foreground rounded-tr-sm"
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.1s]" />
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="px-4 py-2 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {quickActions.map((action) => (
                <Button
                  key={action.keyword}
                  variant="outline"
                  size="sm"
                  className="text-xs h-8 rounded-full"
                  onClick={() => handleQuickAction(action.keyword)}
                >
                  <action.icon className="h-3 w-3 mr-1" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 rounded-full"
              />
              <Button type="submit" size="icon" className="rounded-full shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
