import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const languageOptions: { code: Language; label: string; flag: string }[] = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

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

  const currentLang = languageOptions.find((l) => l.code === language);

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
            
            {/* Language Selector Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-2 gap-2">
                  <Globe className="h-4 w-4" />
                  <span>{currentLang?.flag}</span>
                  <span className="hidden lg:inline">{currentLang?.label}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languageOptions.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-accent" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              <div className="border-t border-border pt-2 mt-2">
                <p className="text-sm text-muted-foreground px-4 py-2">
                  <Globe className="h-4 w-4 inline mr-2" />
                  {language === "vi" ? "Ngôn ngữ" : language === "en" ? "Language" : "언어"}
                </p>
                {languageOptions.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={language === lang.code ? "secondary" : "ghost"}
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsOpen(false);
                    }}
                  >
                    <span>{lang.flag}</span>
                    {lang.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
