import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "catalog", label: "Каталог" },
  { id: "delivery", label: "Доставка" },
  { id: "contacts", label: "Контакты" },
];

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/5 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 neon-bg rounded-sm flex items-center justify-center animate-pulse-neon">
            <span className="font-display font-700 text-background text-sm">Р</span>
          </div>
          <span className="font-display text-2xl font-700 tracking-widest text-foreground group-hover:neon-text transition-colors uppercase">
            Релакс
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-body text-sm font-500 tracking-wider uppercase transition-all duration-300 relative ${
                activeSection === item.id
                  ? "neon-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1 left-0 right-0 h-px neon-bg" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
            <Icon name="Phone" size={16} />
            <span>+7 (906) 980-14-80</span>
          </button>
          <button className="neon-bg text-background font-display font-600 text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-all hover:scale-105 uppercase tracking-wider">
            Консультация
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 mt-2">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left font-body text-base uppercase tracking-wider transition-colors ${
                  activeSection === item.id ? "neon-text" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="neon-bg text-background font-display font-600 text-sm px-5 py-3 rounded-sm uppercase tracking-wider mt-2">
              Консультация
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}