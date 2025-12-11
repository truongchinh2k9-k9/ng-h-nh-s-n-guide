import { Mountain, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

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
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">{t.footer.links}</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/about#non-nuoc" className="hover:text-primary-foreground transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/food" className="hover:text-primary-foreground transition-colors">{t.nav.food}</Link></li>
              <li><Link to="/map" className="hover:text-primary-foreground transition-colors">{t.nav.map}</Link></li>
              <li><Link to="/price-check" className="hover:text-primary-foreground transition-colors">{t.nav.priceCheck}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">{t.footer.contact}</h3>
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
                <span>Ngũ Hành Sơn, Đà Nẵng</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">{t.footer.openingHours}</h3>
            <p className="text-primary-foreground/80">
              {t.footer.openingHoursText}
            </p>
            <p className="text-primary-foreground/80 mt-2">
              {t.footer.caveNote}
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
