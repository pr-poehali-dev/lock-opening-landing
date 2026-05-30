import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/480ec7a6-967d-4eff-a96d-08fc7db080a8.png";
const LOGO_PM = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/16d25f4b-b740-4b2a-80a7-7e0ea62bca8c.png";
const LOGO_TD = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/84db42a4-3789-46cf-8cd1-7d1547066b2d.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/234738-port-mirage-x-tripi-disko";

export default function HeroSection() {
  const scrollY = useParallax();
  const bgParallax = scrollY * 0.3;

  return (
    <section className="relative h-screen flex flex-col overflow-hidden">
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
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#141414]" />

      <PolygonBackground
        className="absolute inset-0 z-[1]"
        nodeCount={22}
        opacity={0.1}
        parallaxFactor={0.03}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 gap-4 sm:gap-6" style={{ paddingTop: "72px", paddingBottom: "80px" }}>

        {/* Текст мероприятия */}
        <div className="flex flex-col items-center gap-1.5">
          <h1 className="font-orbitron text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-wide drop-shadow-lg">
            Port Mirage × Трипи Диско
          </h1>
          <p className="font-rajdhani text-xs sm:text-base md:text-lg text-gray-300 tracking-[0.18em] uppercase font-semibold">
            Открытие летнего сезона!
          </p>
          <p className="font-orbitron text-white/50 text-[10px] sm:text-sm tracking-[0.3em] uppercase">
            06.06.2026
          </p>
        </div>

        {/* Два лого */}
        <div className="flex items-center justify-center gap-4 sm:gap-10 md:gap-14">
          <img
            src={LOGO_PM}
            alt="Port Mirage"
            className="h-20 sm:h-36 md:h-48 w-auto object-contain max-w-[38vw]"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div className="w-px bg-white/20 self-stretch" style={{ minHeight: "60px" }} />
          <img
            src={LOGO_TD}
            alt="Трипи Диско"
            className="h-20 sm:h-36 md:h-48 w-auto object-contain max-w-[38vw]"
          />
        </div>

        {/* Лого Ritmi */}
        <img
          src={LOGO_RITMI}
          alt="Ритми"
          className="h-8 sm:h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity"
        />

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={REG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 btn-primary rounded shadow-lg animate-pulse-white font-rajdhani font-bold tracking-widest uppercase text-sm"
          >
            Регистрация
          </a>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3 btn-outline rounded font-rajdhani font-bold tracking-widest uppercase text-sm"
          >
            О нас
          </button>
        </div>
      </div>

      {/* Стрелка вниз */}
      <div className="absolute bottom-24 sm:bottom-4 left-0 right-0 z-10 flex justify-center animate-float">
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/25 hover:text-white/60 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
