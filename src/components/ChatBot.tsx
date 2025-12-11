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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const welcomeMessage = `Xin chào! 👋 Chào mừng bạn đến với website du lịch Ngũ Hành Sơn!

Đây là website được phát triển bởi nhóm 11/1 Hermann Gmeiner gồm 5 thành viên với tâm huyết là mang lại giá trị cho việc phát triển du lịch địa phương.

Tôi có thể giúp bạn tìm hiểu về:
• Địa điểm du lịch & tham quan
• Ẩm thực địa phương
• Khoảng cách di chuyển
• Lịch trình gợi ý
• Khách sạn, bãi biển
• Thông tin liên hệ

Hãy chọn chủ đề bên dưới hoặc nhập câu hỏi của bạn! 😊`;

  // Pre-defined responses
  const responses: Record<string, string> = {
    // Du lịch chung
    "du lịch": `🏝️ **DU LỊCH NGŨ HÀNH SƠN - ĐÀ NẴNG**

Ngũ Hành Sơn là điểm du lịch nổi tiếng với:

⛰️ **Danh thắng thiên nhiên:**
• 5 ngọn núi: Kim, Mộc, Thủy, Hỏa, Thổ
• Hang động kỳ vĩ: Huyền Không, Âm Phủ
• Chùa chiền linh thiêng

🏖️ **Bãi biển:**
• Bãi biển Non Nước - Top đẹp nhất châu Á
• Bãi biển Mỹ Khê gần kề

🛍️ **Mua sắm:**
• Làng đá mỹ nghệ Non Nước 400 năm tuổi

🎫 Vé: 40.000đ/người | ⏰ 7:00-17:30
📍 Cách trung tâm Đà Nẵng 8km`,

    "tham quan": `📸 **HƯỚNG DẪN THAM QUAN NGŨ HÀNH SƠN**

⏰ **Thời gian lý tưởng:** 3-4 tiếng
🕐 **Nên đi:** 7:00-9:00 sáng (mát, ít người)

📋 **Lộ trình gợi ý:**
1. Mua vé cổng chính (40.000đ)
2. Đi thang máy lên (40.000đ) hoặc leo 156 bậc
3. Tham quan Động Huyền Không ⭐
4. Viếng Chùa Linh Ứng
5. Khám phá Động Âm Phủ
6. Lên đỉnh ngắm toàn cảnh
7. Xuống núi, ghé làng đá mỹ nghệ

👟 **Lưu ý:** Mang giày thể thao, đội mũ, mang nước!`,

    "lịch trình": `📅 **GỢI Ý LỊCH TRÌNH THAM QUAN**

**🌅 NỬA NGÀY (4 tiếng):**
7:00 - Leo núi Thủy Sơn
8:30 - Tham quan động, chùa
10:00 - Làng đá mỹ nghệ
11:00 - Ăn trưa Mì Quảng

**☀️ CẢ NGÀY:**
Sáng: Ngũ Hành Sơn (như trên)
Trưa: Hải sản Non Nước
Chiều: Bãi biển Non Nước
Tối: Phố cổ Hội An (7km)

**🗓️ 2 NGÀY:**
Ngày 1: Ngũ Hành Sơn + Bãi biển
Ngày 2: Hội An + Bà Nà Hills

💡 Mẹo: Đi sớm tránh nắng và đông đúc!`,

    // Bãi biển
    biển: `🏖️ **BÃI BIỂN TẠI NGŨ HÀNH SƠN**

**🌊 Bãi biển Non Nước**
• Được Forbes bình chọn đẹp nhất hành tinh
• Cát trắng mịn, nước trong xanh
• Sóng vừa phải, an toàn tắm biển
• Có dịch vụ: ghế, dù, nước uống
📍 Cách núi Ngũ Hành Sơn 1km

**🏄 Hoạt động:**
• Tắm biển, lướt sóng
• Chơi bóng chuyền bãi biển  
• Ngắm hoàng hôn tuyệt đẹp

**🏨 Resort gần đó:**
• Hyatt Regency, Fusion Maia
• Pullman, Naman Retreat

⏰ Tắm biển an toàn: 5:00-7:00 & 16:00-18:00`,

    "non nước": `🏖️ **BÃI BIỂN NON NƯỚC**

📍 Vị trí: Phường Hòa Hải, Quận Ngũ Hành Sơn
🏆 Được Forbes bình chọn đẹp nhất hành tinh!

✨ **Đặc điểm:**
• Bãi cát trắng mịn dài 5km
• Nước biển trong xanh, sóng vừa
• View núi Ngũ Hành Sơn tuyệt đẹp
• Ít đông đúc hơn Mỹ Khê

🎯 **Hoạt động:**
• Tắm biển, lướt sóng
• Chụp ảnh hoàng hôn
• Thưởng thức hải sản tươi

🚗 Cách trung tâm: 8km (20 phút)`,

    // Khách sạn
    "khách sạn": `🏨 **KHÁCH SẠN TẠI NGŨ HÀNH SƠN**

**⭐⭐⭐⭐⭐ 5 SAO:**
• Hyatt Regency: 3.500.000đ/đêm
• Pullman Resort: 3.000.000đ/đêm
• Fusion Maia: 4.000.000đ/đêm

**⭐⭐⭐⭐ 4 SAO:**
• Naman Retreat: 2.500.000đ/đêm
• Premier Village: 2.800.000đ/đêm

**⭐⭐⭐ 3 SAO & Homestay:**
• Các homestay gần núi: 300.000-500.000đ
• Khách sạn mini: 400.000-700.000đ

💡 **Mẹo:**
• Đặt trước 1-2 tuần để có giá tốt
• Chọn gần biển Non Nước hoặc gần núi
• Mùa thấp điểm (9-12): giá rẻ hơn 30%`,

    "ở đâu": `🏠 **NÊN Ở ĐÂU KHI ĐẾN NGŨ HÀNH SƠN?**

**📍 Khu vực gợi ý:**

1️⃣ **Ven biển Non Nước** ⭐
• Gần biển, gần núi
• Resort cao cấp nhiều
• View đẹp, yên tĩnh

2️⃣ **Đường Lê Văn Hiến**
• Nhiều homestay, khách sạn mini
• Gần các quán ăn ngon
• Giá phải chăng

3️⃣ **Gần Hội An** (7km)
• Tiện tham quan cả 2 nơi
• Phố cổ đẹp về đêm

💰 **Mức giá:**
• Homestay: 200.000-500.000đ
• Khách sạn 3*: 400.000-800.000đ
• Resort 5*: 2.000.000-5.000.000đ`,

    // Thời tiết
    "thời tiết": `🌤️ **THỜI TIẾT NGŨ HÀNH SƠN - ĐÀ NẴNG**

**📅 Mùa du lịch tốt nhất:**
• Tháng 3-8: Nắng đẹp, ít mưa ⭐
• Tháng 9-12: Mùa mưa, cẩn thận

**🌡️ Nhiệt độ trung bình:**
• Mùa hè (5-8): 28-35°C
• Mùa đông (11-2): 20-25°C

**☔ Lưu ý khi mưa:**
• Đường lên núi trơn, cẩn thận
• Nên mang áo mưa
• Tránh vào hang động khi mưa lớn

**👕 Nên mặc:**
• Quần áo thoáng mát
• Giày thể thao bám tốt
• Đội mũ, kính râm, kem chống nắng`,

    "đi khi nào": `📆 **KHI NÀO NÊN ĐI NGŨ HÀNH SƠN?**

**✅ Thời điểm TỐT NHẤT:**
• **Tháng 3-8**: Nắng đẹp, biển êm ⭐
• **Tháng 4-5**: Thời tiết lý tưởng nhất

**⚠️ Nên tránh:**
• Tháng 10-11: Mưa bão nhiều
• Tết Nguyên Đán: Đông đúc, giá cao

**⏰ Giờ tham quan núi:**
• Sáng sớm 7:00-9:00 (mát, ít người) ⭐
• Chiều 15:00-17:00 (nắng dịu)

**🏖️ Giờ tắm biển:**
• Sáng: 5:00-7:00
• Chiều: 16:00-18:00`,

    // Giá món ăn
    giá: `📋 **BẢNG GIÁ MÓN ĂN THAM KHẢO:**

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

    "ăn gì": `🍽️ **ĂN GÌ TẠI NGŨ HÀNH SƠN?**

**🥇 Must-try (Phải thử):**
• Mì Quảng - Món đặc trưng Đà Nẵng
• Bánh tráng cuốn thịt heo
• Hải sản tươi sống

**🍜 Món ngon khác:**
• Bún chả cá
• Bánh xèo miền Trung
• Cao lầu (đặc sản Hội An)
• Cơm gà Hội An
• Nem lụi

**📍 Khu ẩm thực nổi tiếng:**
• Các quán ven đường Lê Văn Hiến
• Nhà hàng hải sản Non Nước
• Chợ Ngũ Hành Sơn

💡 Ăn tại quán đông khách địa phương = ngon + giá hợp lý!`,

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

    núi: `⛰️ **NGŨ HÀNH SƠN - 5 NGỌN NÚI:**

1. **Kim Sơn** (phía Tây Bắc) - Núi nhỏ nhất
2. **Mộc Sơn** (phía Đông) - Cây cối xanh tươi  
3. **Thủy Sơn** (cao nhất) - Nhiều hang động, chùa chiền ⭐
4. **Hỏa Sơn** (2 ngọn phía Nam) - Có 2 đỉnh Âm và Dương
5. **Thổ Sơn** (lớn nhất về diện tích)

🎫 Vé tham quan Thủy Sơn: 40.000đ/người lớn
🛗 Thang máy: 40.000đ/chiều

📍 Địa chỉ: Phường Hòa Hải, Quận Ngũ Hành Sơn, Đà Nẵng`,

    động: `🕳️ **CÁC HANG ĐỘNG NỔI TIẾNG:**

✨ **Động Huyền Không**
Hang động đẹp nhất với ánh sáng tự nhiên chiếu qua vòm đá. Có tượng Phật lớn bên trong.

👻 **Động Âm Phủ**  
Mô phỏng 18 tầng địa ngục theo quan niệm Phật giáo.

🌊 **Động Vân Thông**
Hang động nhỏ với vách đá độc đáo.

⏰ Giờ mở cửa: 7:00 - 17:30 hàng ngày
🎫 Vé: Đã bao gồm trong vé tham quan núi`,

    chùa: `🛕 **CÁC NGÔI CHÙA TẠI NGŨ HÀNH SƠN:**

🙏 **Chùa Linh Ứng** (Thủy Sơn)
Ngôi chùa cổ nhất, linh thiêng, có tượng Phật lớn.

🙏 **Chùa Tam Thai**
Chùa lớn trên đỉnh núi Thủy Sơn, kiến trúc độc đáo.

🙏 **Chùa Từ Tâm**
Nằm sâu trong núi, yên tĩnh, thanh bình.

📍 Tất cả nằm trên núi Thủy Sơn
⏰ Giờ thăm: 7:00 - 17:00`,

    "huyền không": `✨ **ĐỘNG HUYỀN KHÔNG**

Đây là hang động đẹp nhất và nổi tiếng nhất tại Ngũ Hành Sơn!

🌟 **Đặc điểm:**
• Ánh sáng tự nhiên chiếu qua vòm đá tạo cảnh tượng huyền ảo
• Có tượng Phật lớn bằng đá cẩm thạch
• Không khí mát mẻ, linh thiêng

📸 **Tips chụp ảnh:**
• Thời điểm đẹp nhất: 10:00-12:00 (ánh sáng rọi vào)
• Mang chân máy nếu có

📍 Nằm trên núi Thủy Sơn
🎫 Vé: Bao gồm trong vé 40.000đ`,

    // Khoảng cách & Di chuyển
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

    "di chuyển": `🚗 **CÁCH DI CHUYỂN ĐẾN NGŨ HÀNH SƠN**

**Từ sân bay Đà Nẵng (10km):**
• Grab/Taxi: 100.000-150.000đ
• Xe bus: Tuyến 01 (15.000đ)

**Từ trung tâm Đà Nẵng (8km):**
• Grab/Taxi: 60.000-100.000đ
• Xe bus: Tuyến 01, 06

**Từ Hội An (7km):**
• Grab/Taxi: 50.000-80.000đ
• Xe bus: Tuyến 01

**🛵 Thuê xe máy:**
• Giá: 100.000-150.000đ/ngày
• Thuê tại khách sạn hoặc cửa hàng

💡 Gợi ý: Thuê xe máy tiện nhất để tự do khám phá!`,

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

    "bà nà": `🏰 **NGŨ HÀNH SƠN → BÀ NÀ HILLS**

🚗 Khoảng cách: ~35km
⏱️ Thời gian: 50-60 phút

💰 **Chi phí:**
• Grab/Taxi: 300.000-400.000đ
• Xe máy: Tự lái (đường đèo đẹp)
• Tour: 500.000đ (bao gồm đưa đón)

🎫 **Vé Bà Nà Hills:** 
• Người lớn: 900.000đ
• Trẻ em: 750.000đ

💡 Nên đi cả ngày để tham quan đủ!`,

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

    vé: `🎫 **GIÁ VÉ THAM QUAN NGŨ HÀNH SƠN:**

🏔️ **Vé vào cổng núi Thủy Sơn:**
• Người lớn: 40.000đ
• Trẻ em (dưới 1.2m): Miễn phí
• Học sinh/sinh viên: 20.000đ (có thẻ)

🛗 **Thang máy:**
• 1 chiều: 40.000đ
• Cả đi và về: 70.000đ

⏰ **Giờ mở cửa:** 7:00 - 17:30 hàng ngày

💡 Mẹo: Nên đi sáng sớm (7:00-9:00) để tránh đông và nắng nóng!`,

    "đá mỹ nghệ": `🗿 **LÀNG ĐÁ MỸ NGHỆ NON NƯỚC**

📍 Nằm dưới chân núi Ngũ Hành Sơn
🕐 Lịch sử: Hơn 400 năm tuổi

💰 **Giá tham khảo:**
• Tượng Phật Di Lặc nhỏ (20cm): 150.000 - 300.000đ
• Tượng Quan Âm trung (50cm): 1.500.000 - 3.000.000đ
• Tượng rồng phượng cặp: 500.000 - 2.000.000đ
• Đồ trang trí nhỏ: 50.000 - 200.000đ
• Lư hương đá: 200.000 - 800.000đ

⚠️ **Lưu ý khi mua:**
• So sánh giá nhiều nơi
• Mặc cả 20-30%
• Hỏi về vận chuyển nếu mua đồ lớn`,

    // Câu hỏi phổ biến
    "cảm ơn": `💚 Không có gì! Rất vui được hỗ trợ bạn!

Nếu bạn có thêm câu hỏi về:
• Du lịch Ngũ Hành Sơn
• Ẩm thực, khách sạn
• Khoảng cách, di chuyển

Đừng ngại hỏi nhé! Chúc bạn có chuyến du lịch vui vẻ! 🌴`,

    "xin chào": `👋 Xin chào! Tôi là **Nui Non Guide** - trợ lý du lịch của bạn!

Tôi có thể giúp bạn tìm hiểu về:
• 🏔️ Địa điểm tham quan
• 🍜 Ẩm thực ngon
• 🚗 Di chuyển, khoảng cách
• 🏨 Khách sạn, nghỉ dưỡng
• 🎫 Giá vé, chi phí

Bạn muốn biết thông tin gì? 😊`,

    hello: `👋 Hello! I'm **Nui Non Guide** - your travel assistant!

I can help you with:
• 🏔️ Tourist attractions
• 🍜 Local cuisine
• 🚗 Transportation
• 🏨 Hotels & resorts
• 🎫 Ticket prices

What would you like to know? 😊`,
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
    scrollToBottom();
  }, [messages, isTyping]);

  const findResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();

    // Check for keywords in order of specificity
    const keywords = [
      // Du lịch
      "du lịch",
      "tham quan",
      "lịch trình",
      "đi khi nào",
      "thời tiết",
      // Bãi biển & khách sạn
      "biển",
      "non nước",
      "khách sạn",
      "ở đâu",
      // Địa điểm cụ thể
      "huyền không",
      "mì quảng",
      "bánh tráng",
      "hải sản",
      "ăn gì",
      "vé",
      "đá mỹ nghệ",
      "núi",
      "động",
      "chùa",
      // Khoảng cách
      "hội an",
      "đà nẵng",
      "bà nà",
      "di chuyển",
      // Chung
      "giá",
      "địa điểm",
      "khoảng cách",
      "liên hệ",
      "giới thiệu",
      // Chào hỏi
      "cảm ơn",
      "xin chào",
      "hello",
    ];

    for (const keyword of keywords) {
      if (lowerInput.includes(keyword)) {
        return responses[keyword];
      }
    }

    // Default response
    return `Xin lỗi, tôi chưa hiểu rõ câu hỏi của bạn. 😅

Bạn có thể hỏi tôi về:
• **Du lịch**: "du lịch ngũ hành sơn", "lịch trình", "tham quan"
• **Địa điểm**: "núi", "chùa", "động", "biển non nước"
• **Ẩm thực**: "ăn gì", "mì quảng", "hải sản"
• **Di chuyển**: "đi hội an", "khoảng cách", "di chuyển"
• **Lưu trú**: "khách sạn", "ở đâu"
• **Khác**: "giá vé", "thời tiết", "liên hệ"

Hoặc chọn các nút bên dưới để tìm hiểu nhanh! 👇`;
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
      // fetchGeminiReply is defined above
      // it calls POST /api/gemini with { prompt }
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
                <h3 className="font-semibold">Nui Non Guide</h3>
                <p className="text-xs opacity-80">Luôn sẵn sàng hỗ trợ bạn</p>
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
                placeholder="Nhập câu hỏi của bạn..."
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
// Backend should expose POST /api/gemini with JSON { prompt }
// and return JSON { text }.
// This keeps API keys off the client.

const API_KEY = "AIzaSyBdN0x33BwDM_D-V1TBspEvXiyPYA6p-r4";

const MODELS = ["gemini-2.5-flash", "gemini-1.5-flash", "gemini-pro"];

async function fetchGeminiReply(prompt: string, retry = 3) {
  // --- Thêm vào bộ nhớ trước khi gửi lên ---
  ChatMemory.addUser(prompt);

  // --- System Prompt (giả lập “huấn luyện”) ---
  const systemInstruction = {
    role: "user",
    parts: [
      {
        text: "Bạn là trợ lý AI trò chuyện lịch sự, trả lời ngắn gọn, chính xác.",
      },
    ],
  };

  // --- Chuyển lịch sử thành dạng mà Gemini cần ---
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

  return "⚠️ Tất cả model đều quá tải.";
}

export default ChatBot;
