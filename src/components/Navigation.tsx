import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", label: t.nav.home },
    { path: "/about", label: t.nav.about },
    { path: "/food", label: t.nav.food },
    { path: "/map", label: t.nav.map },
    { path: "/price-check", label: t.nav.priceCheck },
    { path: "/contact", label: t.nav.contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Mountain className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Ngũ Hành Sơn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            
            {/* Language Selector */}
            <Button
              variant="outline"
              size="sm"
              className="ml-2 gap-1"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
            >
              <Globe className="h-4 w-4" />
              {language === "vi" ? "EN" : "VI"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    className="w-full justify-start font-medium"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              
              {/* Mobile Language Selector */}
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              >
                <Globe className="h-4 w-4" />
                {language === "vi" ? "English" : "Tiếng Việt"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
