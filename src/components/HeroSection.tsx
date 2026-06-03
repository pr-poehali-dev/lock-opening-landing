import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/480ec7a6-967d-4eff-a96d-08fc7db080a8.png";
const LOGO_PM = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/16d25f4b-b740-4b2a-80a7-7e0ea62bca8c.png";
const LOGO_TD = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/84db42a4-3789-46cf-8cd1-7d1547066b2d.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/234738-port-mirage-x-tripi-disko";

// Карта через OpenStreetMap embed (без ключа, Кожевенная линия 34, СПб с заливом)
const MAP_URL =
  "https://www.openstreetmap.org/export/embed.html?bbox=30.19,59.91,30.30,59.96&layer=mapnik&marker=59.9275,30.2419";

export default function HeroSection() {
  const scrollY = useParallax();
  const bgParallax = scrollY * 0.3;

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${BG})`,
          transform: `translateY(${bgParallax}px)`,
          top: "-8%",
          height: "116%",
        }}
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#141414]" />

      <PolygonBackground
        className="absolute inset-0 z-[1]"
        nodeCount={22}
        opacity={0.1}
        parallaxFactor={0.03}
      />

      {/* Полупрозрачная карта — оверлей */}
      <div
        className="absolute z-[2] overflow-hidden rounded-xl"
        style={{
          bottom: "96px",
          right: "clamp(16px, 6vw, 80px)",
          width: "clamp(180px, 28vw, 320px)",
          height: "clamp(120px, 18vw, 210px)",
          opacity: 0.28,
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 4px 32px rgba(0,0,0,0.5)",
          filter: "grayscale(0.6) contrast(0.9)",
          pointerEvents: "none",
        }}
      >
        <iframe
          src={MAP_URL}
          width="100%"
          height="100%"
          style={{ border: "none", display: "block" }}
          title="Карта"
        />
      </div>

      {/* Маркер-маяк поверх карты */}
      <div
        className="absolute z-[3] pointer-events-none"
        style={{
          bottom: "calc(96px + clamp(120px, 18vw, 210px) / 2 + 4px)",
          right: "calc(clamp(16px, 6vw, 80px) + clamp(180px, 28vw, 320px) / 2 - 8px)",
          opacity: 0.55,
        }}
      >
        <svg width="18" height="26" viewBox="0 0 18 26" fill="none">
          <path d="M9 0C4.03 0 0 4.03 0 9c0 6.75 9 17 9 17s9-10.25 9-17c0-4.97-4.03-9-9-9z" fill="#cc3333"/>
          <circle cx="9" cy="9" r="3.5" fill="#ff6666"/>
        </svg>
      </div>

      {/* Основной контент */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full text-center px-4"
        style={{ height: "100%", paddingTop: "72px", paddingBottom: "80px" }}
      >
        {/* Текст мероприятия */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <h1 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-normal">
            Port Mirage x Трипи Диско
          </h1>
          <p className="font-rajdhani text-sm sm:text-base text-gray-300 tracking-widest uppercase font-medium mt-1">
            Открытие летнего сезона в клубе Ритмы
          </p>
          <p className="font-inter text-white/45 text-xs tracking-widest uppercase mt-1">
            06.06.2026
          </p>
          <p className="font-inter text-white/30 text-[11px] tracking-wider mt-0.5">
            Санкт-Петербург, Кожевенная линия, 34
          </p>
        </div>

        {/* Два лого */}
        <div className="flex items-center justify-center gap-4 sm:gap-10 md:gap-14 mb-5">
          <img
            src={LOGO_PM}
            alt="Port Mirage"
            className="h-20 sm:h-32 md:h-44 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)", maxWidth: "40vw" }}
          />
          <div className="w-px bg-white/20" style={{ height: "clamp(50px, 10vw, 120px)" }} />
          <img
            src={LOGO_TD}
            alt="Трипи Диско"
            className="h-20 sm:h-32 md:h-44 w-auto object-contain"
            style={{ maxWidth: "40vw" }}
          />
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={REG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 btn-primary rounded animate-pulse-white text-sm"
          >
            Регистрация
          </a>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 btn-outline rounded text-sm"
          >
            О нас
          </button>
        </div>
      </div>

      {/* Лого Ритмы — фиксировано у низа */}
      <div className="absolute left-0 right-0 z-10 flex justify-center" style={{ bottom: "30px" }}>
        <img
          src={LOGO_RITMI}
          alt="Ритмы"
          className="w-auto object-contain opacity-55 hover:opacity-85 transition-opacity"
          style={{ height: "clamp(32px, 6vw, 64px)" }}
        />
      </div>

      {/* Стрелка вниз */}
      <div className="absolute z-10 flex justify-center" style={{ bottom: "8px", left: 0, right: 0 }}>
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/20 hover:text-white/50 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
