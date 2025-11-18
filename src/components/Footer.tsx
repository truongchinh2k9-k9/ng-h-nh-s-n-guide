import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ocean text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-8 w-8" />
              <span className="text-xl font-bold">Ngũ Hành Sơn</span>
            </div>
            <p className="text-primary-foreground/80">
              Khám phá vẻ đẹp thiên nhiên và văn hóa độc đáo của Ngũ Hành Sơn, Đà Nẵng
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Liên kết</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Giới thiệu</Link></li>
              <li><Link to="/food" className="hover:text-primary-foreground transition-colors">Ẩm thực</Link></li>
              <li><Link to="/map" className="hover:text-primary-foreground transition-colors">Bản đồ</Link></li>
              <li><Link to="/price-check" className="hover:text-primary-foreground transition-colors">Tra giá</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Liên hệ</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>0236.3961.114</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@nguhanh-son.vn</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Phường Ngũ Hành Sơn, Đà Nẵng</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Giờ mở cửa</h3>
            <p className="text-primary-foreground/80">
              Thứ 2 - Chủ nhật: 6:00 - 18:00
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Các động và chùa có thể có giờ riêng
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Du lịch Ngũ Hành Sơn. Website phi lợi nhuận phục vụ cộng đồng.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
