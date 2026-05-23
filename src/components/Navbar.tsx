import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/adf46996-1089-4362-9bff-322bd11b9a47.png";
const PHONE = "+79881546389";
const TG_LINK = "https://t.me/+79064925692";
const WA_LINK = "https://wa.me/79064925692";
const MAX_LINK = "https://max.ru/u/f9LHodD0cOJMD9-lbnglPbDpKx7VE5dGdC-nxKEeo-oDu1DgncZYC6casKg";
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

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  );
}

function MaxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.406l-1.758-1.758-1.055 1.055c-.586.586-1.367.879-2.148.879s-1.563-.293-2.148-.879l-2.813-2.813c-1.172-1.172-1.172-3.07 0-4.242l1.055-1.055-1.758-1.758L5.88 7.852C4.414 9.316 3.75 11.25 3.984 13.184c.234 1.875 1.172 3.574 2.637 4.746l.234.176c1.406 1.055 3.105 1.621 4.863 1.621 2.168 0 4.219-.84 5.742-2.344l1.055-1.055-1.055-1.055.102.133zm-1.055-8.812l-1.055 1.055 1.758 1.758 1.055-1.055c.938-.938.938-2.461 0-3.398-.938-.938-2.461-.938-3.398 0l-1.055 1.055 1.758 1.758 1.055-1.055c.352-.352.938-.352 1.289 0 .352.352.352.938 0 1.289l-.407-.407z"/>
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

            {/* Лого + слоган */}
            <div className="flex items-center gap-3">
              <img
                src={LOGO}
                alt="Port Mirage"
                className="h-14 w-auto object-contain"
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
                href={`tel:${PHONE}`}
                className="hidden lg:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={15} />
                <span className="font-rajdhani text-sm font-semibold">{PHONE}</span>
              </a>
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

      {/* Мобильная нижняя панель */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden nav-blur border-t border-white/10">
        <div className="flex items-center justify-around px-2 py-2">
          <a
            href={`tel:${PHONE}`}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl bg-white/10 text-white active:bg-white/20 transition-colors"
          >
            <Icon name="Phone" size={20} />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">Звонок</span>
          </a>
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[#29a8eb] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <TelegramIcon />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">Telegram</span>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[#25d366] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <WhatsAppIcon />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">WhatsApp</span>
          </a>
          <a
            href={MAX_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[#ff6b35] hover:bg-white/5 active:bg-white/10 transition-colors"
          >
            <MaxIcon />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">Max</span>
          </a>
          <button
            onClick={() => handleNav("#contacts")}
            className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-gray-400 hover:text-white active:bg-white/10 transition-colors"
          >
            <Icon name="MessageSquare" size={20} />
            <span className="font-rajdhani text-[10px] font-semibold tracking-wide uppercase">Написать</span>
          </button>
        </div>
      </div>

      <div className="md:hidden h-[62px]" />
    </>
  );
}