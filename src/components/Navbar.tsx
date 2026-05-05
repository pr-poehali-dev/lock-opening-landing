import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Артисты", href: "#artists" },
  { label: "Билеты", href: "#tickets" },
  { label: "Контакты", href: "#contacts" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/40">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <span className="font-orbitron text-white font-bold text-lg tracking-widest uppercase">
              Prog<span className="text-brand-red">House</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="font-rajdhani text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-white hover:text-brand-red transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#tickets")}
              className="ml-2 px-5 py-2 bg-brand-red text-white font-rajdhani font-bold text-sm tracking-widest uppercase rounded hover:bg-brand-red-dark transition-colors duration-200 animate-pulse-red"
            >
              Купить билет
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={26} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden nav-blur border-t border-white/10 animate-slide-down">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left py-3 px-4 font-rajdhani font-semibold text-base tracking-widest uppercase text-gray-300 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#tickets")}
              className="mt-2 py-3 px-4 bg-brand-red text-white font-rajdhani font-bold text-base tracking-widest uppercase rounded text-center"
            >
              Купить билет
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
