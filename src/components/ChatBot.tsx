import { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  MapPin,
  UtensilsCrossed,
  Phone,
  Info,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ChatMemory } from "@/hooks/chatContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Pre-defined responses based on language
  const getResponses = () => {
    if (language === "vi") {
      return {
        giá: `📋 **BẢNG GIÁ MÓN ĂN THAM KHẢO:**

🍜 **Mì Quảng**: 35.000 - 50.000đ
📍 Quán Bà Mua, Quán 1A

🥢 **Bánh tráng cuốn thịt heo**: 80.000 - 120.000đ/suất

🦐 **Hải sản tươi sống**:
• Tôm hùm: 600.000 - 1.200.000đ/kg
• Cua biển: 200.000 - 400.000đ/kg

💡 Mẹo: Hỏi giá trước khi gọi món!`,
        "địa điểm": `📍 **CÁC ĐỊA ĐIỂM NỔI BẬT:**

⛰️ **Danh thắng:**
• Núi Thủy Sơn - Nhiều hang động, chùa chiền
• Động Huyền Không - Hang động đẹp nhất
• Chùa Linh Ứng - Ngôi chùa cổ linh thiêng

🏖️ **Bãi biển:**
• Bãi biển Non Nước

🛍️ **Mua sắm:**
• Làng đá mỹ nghệ Non Nước`,
        "khoảng cách": `🚗 **KHOẢNG CÁCH TỪ NGŨ HÀNH SƠN:**

📍 Đến **Trung tâm Đà Nẵng**: ~8km (20 phút)
📍 Đến **Phố cổ Hội An**: ~7km (15 phút)
📍 Đến **Bà Nà Hills**: ~35km (1 tiếng)
📍 Đến **Bãi biển Mỹ Khê**: ~3km (10 phút)`,
        "liên hệ": `📞 **THÔNG TIN LIÊN HỆ:**

📍 **Địa chỉ:** Phường Hòa Hải, Quận Ngũ Hành Sơn, TP. Đà Nẵng
📞 **Hotline:** 0236 3961 114
📧 **Email:** info@nguhanhson.danang.gov.vn

⏰ **Giờ làm việc:** 7:30 - 17:00`,
        "giới thiệu": `ℹ️ **GIỚI THIỆU WEBSITE**

Website du lịch Ngũ Hành Sơn được phát triển bởi **nhóm 11/1 trường Hermann Gmeiner**.

🎯 **Mục tiêu:**
• Cung cấp thông tin du lịch chính xác
• Hỗ trợ du khách tránh bị "chém giá"
• Quảng bá vẻ đẹp Ngũ Hành Sơn`,
      };
    } else if (language === "en") {
      return {
        giá: `📋 **REFERENCE FOOD PRICES:**

🍜 **Mi Quang**: 35,000 - 50,000 VND
📍 Ba Mua Restaurant, 1A Restaurant

🥢 **Rice Paper Rolls with Pork**: 80,000 - 120,000 VND/serving

🦐 **Fresh Seafood**:
• Lobster: 600,000 - 1,200,000 VND/kg
• Sea crab: 200,000 - 400,000 VND/kg

💡 Tip: Always ask for prices before ordering!`,
        "địa điểm": `📍 **FEATURED LOCATIONS:**

⛰️ **Attractions:**
• Thuy Son Mountain - Many caves, pagodas
• Huyen Khong Cave - Most beautiful cave
• Linh Ung Pagoda - Ancient sacred pagoda

🏖️ **Beaches:**
• Non Nuoc Beach

🛍️ **Shopping:**
• Non Nuoc Stone Craft Village`,
        "khoảng cách": `🚗 **DISTANCES FROM NGU HANH SON:**

📍 To **Da Nang Center**: ~8km (20 min)
📍 To **Hoi An Old Town**: ~7km (15 min)
📍 To **Ba Na Hills**: ~35km (1 hour)
📍 To **My Khe Beach**: ~3km (10 min)`,
        "liên hệ": `📞 **CONTACT INFORMATION:**

📍 **Address:** Hoa Hai Ward, Ngu Hanh Son District, Da Nang City
📞 **Hotline:** 0236 3961 114
📧 **Email:** info@nguhanhson.danang.gov.vn

⏰ **Working hours:** 7:30 AM - 5:00 PM`,
        "giới thiệu": `ℹ️ **ABOUT THIS WEBSITE**

This Ngu Hanh Son tourism website was developed by **Group 11/1 of Hermann Gmeiner School**.

🎯 **Goals:**
• Provide accurate tourism information
• Help visitors avoid overpricing
• Promote the beauty of Ngu Hanh Son`,
      };
    } else {
      return {
        giá: `📋 **음식 가격 참고:**

🍜 **미꽝**: 35,000 - 50,000 VND
📍 바무아 식당, 1A 식당

🥢 **돼지고기 라이스페이퍼 롤**: 80,000 - 120,000 VND/인분

🦐 **신선한 해산물**:
• 바닷가재: 600,000 - 1,200,000 VND/kg
• 꽃게: 200,000 - 400,000 VND/kg

💡 팁: 주문 전에 항상 가격을 확인하세요!`,
        "địa điểm": `📍 **주요 장소:**

⛰️ **관광지:**
• 투이선 산 - 많은 동굴, 사원
• 휀콩 동굴 - 가장 아름다운 동굴
• 린웅 사원 - 고대 신성한 사원

🏖️ **해변:**
• 논누억 해변

🛍️ **쇼핑:**
• 논누억 석공예 마을`,
        "khoảng cách": `🚗 **응우하인선에서의 거리:**

📍 **다낭 중심**까지: ~8km (20분)
📍 **호이안 구시가지**까지: ~7km (15분)
📍 **바나힐**까지: ~35km (1시간)
📍 **미케 해변**까지: ~3km (10분)`,
        "liên hệ": `📞 **연락처 정보:**

📍 **주소:** 다낭시 응우하인선구 호아하이동
📞 **핫라인:** 0236 3961 114
📧 **이메일:** info@nguhanhson.danang.gov.vn

⏰ **운영 시간:** 오전 7:30 - 오후 5:00`,
        "giới thiệu": `ℹ️ **웹사이트 소개**

이 응우하인선 관광 웹사이트는 **헤르만 그마이너 학교 11/1반**이 개발했습니다.

🎯 **목표:**
• 정확한 관광 정보 제공
• 방문객이 바가지를 피할 수 있도록 지원
• 응우하인선의 아름다움 홍보`,
      };
    }
  };

  // Quick action buttons
  const quickActions = [
    { icon: UtensilsCrossed, label: t.chatbot.priceBtn, keyword: "giá" },
    { icon: MapPin, label: t.chatbot.locationBtn, keyword: "địa điểm" },
    { icon: Navigation, label: t.chatbot.distanceBtn, keyword: "khoảng cách" },
    { icon: Phone, label: t.chatbot.contactBtn, keyword: "liên hệ" },
    { icon: Info, label: t.chatbot.aboutBtn, keyword: "giới thiệu" },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: t.chatbot.welcome,
            isBot: true,
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen, t.chatbot.welcome]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const findResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    const responses = getResponses();
    const keywords = ["giá", "địa điểm", "khoảng cách", "liên hệ", "giới thiệu"];

    for (const keyword of keywords) {
      if (lowerInput.includes(keyword)) {
        return responses[keyword as keyof typeof responses];
      }
    }

    // Default response
    if (language === "vi") {
      return `Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. 😅

Bạn có thể hỏi tôi về:
• **Giá cả**: "giá món ăn", "giá hải sản"
• **Địa điểm**: "địa điểm tham quan", "chùa", "động"
• **Khoảng cách**: "khoảng cách đến Hội An"
• **Liên hệ**: "thông tin liên hệ"

Hoặc chọn các nút bên dưới! 👇`;
    } else if (language === "en") {
      return `Sorry, I didn't understand your question. 😅

You can ask me about:
• **Prices**: "food prices", "seafood prices"
• **Locations**: "tourist attractions", "pagodas", "caves"
• **Distances**: "distance to Hoi An"
• **Contact**: "contact information"

Or choose the buttons below! 👇`;
    } else {
      return `죄송합니다, 질문을 이해하지 못했습니다. 😅

다음에 대해 물어볼 수 있습니다:
• **가격**: "음식 가격", "해산물 가격"
• **장소**: "관광지", "사원", "동굴"
• **거리**: "호이안까지 거리"
• **연락처**: "연락처 정보"

또는 아래 버튼을 선택하세요! 👇`;
    }
  };

  const handleSend = async () => {
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

    // Try to get a dynamic reply from the Gemini backend proxy
    let replyText: string | null = null;
    try {
      replyText = await fetchGeminiReply(userMessage.text);
    } catch (err) {
      console.error("Error fetching Gemini reply:", err);
      replyText = null;
    }

    // Fallback to local static responses if backend fails or returns nothing
    if (!replyText) {
      replyText = findResponse(userMessage.text);
    }

    const botResponse: Message = {
      id: messages.length + 2,
      text: replyText,
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
    setIsTyping(false);
    scrollToBottom();
  };

  const handleQuickAction = (keyword: string) => {
    const responses = getResponses();
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
        text: responses[keyword as keyof typeof responses],
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
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
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
                <h3 className="font-semibold">{t.chatbot.name}</h3>
                <p className="text-xs opacity-80">{t.chatbot.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4">
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
              <div ref={messagesEndRef} />
            </div>
          </div>

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
                placeholder={t.chatbot.placeholder}
                className="flex-1 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                className="rounded-full shrink-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

// Call backend proxy that connects to Gemini (or other LLM).
const API_KEY = "AIzaSyBdN0x33BwDM_D-V1TBspEvXiyPYA6p-r4";
const MODELS = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-pro"];

async function fetchGeminiReply(prompt: string, retry = 3) {
  ChatMemory.addUser(prompt);

  const systemInstruction = {
    role: "user",
    parts: [
      {
        text: "Bạn là trợ lý AI trò chuyện lịch sự, trả lời ngắn gọn, chính xác.",
      },
    ],
  };

  const conversationParts = ChatMemory.history.map((item) => ({
    role: item.role,
    parts: [{ text: item.text }],
  }));

  const fullContent = [systemInstruction, ...conversationParts];

  for (const model of MODELS) {
    for (let i = 0; i < retry; i++) {
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: fullContent,
            }),
          }
        );

        if (res.status === 503) {
          await new Promise((r) => setTimeout(r, 1500));
          continue;
        }

        if (!res.ok) throw new Error("HTTP " + res.status);

        const data = await res.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;

        if (text) {
          ChatMemory.addModel(text);
          return text;
        }

        throw new Error("Empty response");
      } catch (err) {
        await new Promise((r) => setTimeout(r, 1500));
      }
    }
  }

  return null;
}

export default ChatBot;
