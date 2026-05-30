import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/16d25f4b-b740-4b2a-80a7-7e0ea62bca8c.png";
const TG_LINK = "https://t.me/portmirage";
const REG_LINK = "https://spb.qtickets.events/234738-port-mirage-x-tripi-disko";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Галерея", href: "#gallery" },
  { label: "Артисты", href: "#artists" },
  { label: "Контакты", href: "#contacts" },
];

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "nav-blur shadow-lg shadow-black/60" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Лого */}
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Port Mirage"
                className="h-28 md:h-32 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <div className="hidden sm:flex flex-col justify-center">
                <span className="font-rajdhani text-[10px] tracking-[0.25em] uppercase text-gray-400 leading-tight">
                  Atmosphere. Sincerity. Freedom.
                </span>
              </div>
            </div>

            {/* Десктоп навигация */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="font-rajdhani text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={REG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 btn-primary rounded text-sm animate-pulse-white"
              >
                Регистрация
              </a>
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
                  className="text-left py-3 px-4 font-rajdhani font-semibold text-base tracking-widest uppercase text-gray-400 hover:text-white hover:bg-white/5 rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={REG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 px-4 btn-primary rounded text-center text-sm"
              >
                Регистрация
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Мобильная нижняя панель — только Telegram */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden nav-blur border-t border-white/10">
        <div className="flex items-center justify-around px-4 py-2">
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 px-6 py-1.5 rounded-xl text-[#29a8eb] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <TelegramIcon />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">Telegram</span>
          </a>
          <a
            href={REG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 mx-4 py-2 btn-primary rounded text-center text-sm font-rajdhani font-bold tracking-widest uppercase animate-pulse-white"
          >
            Регистрация
          </a>
        </div>
      </div>
    </>
  );
}