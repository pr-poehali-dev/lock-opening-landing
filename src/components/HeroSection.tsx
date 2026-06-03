import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/480ec7a6-967d-4eff-a96d-08fc7db080a8.png";
const MAP = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/b193ce1f-bc6b-4cb5-bdf5-7ef4aa859f38.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/234738-port-mirage-x-tripi-disko";

export default function HeroSection() {
  const scrollY = useParallax();
  const bgParallax = scrollY * 0.3;

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* SVG-маска для растушёвки краёв карты */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <radialGradient id="mapFade" cx="50%" cy="50%" r="50%">
            <stop offset="40%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="mapMask">
            <rect width="100%" height="100%" fill="url(#mapFade)" />
          </mask>
        </defs>
      </svg>

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

      {/* Основной контент */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4"
        style={{ paddingTop: "64px", paddingBottom: "80px" }}
      >
        <h1 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-normal mb-2">
          Port Mirage x Трипи Диско
        </h1>
        <p className="font-rajdhani text-sm sm:text-base text-gray-300 tracking-wide uppercase font-medium mb-1">
          Открытие летнего сезона в клубе Ритмы
        </p>
        <p className="font-inter text-white/45 text-xs tracking-wider uppercase mb-1">
          06.06.2026
        </p>
        <p className="font-inter text-white/30 text-[11px] tracking-wide mb-7">
          Санкт-Петербург, Кожевенная линия, 34
        </p>

        <div className="flex flex-row gap-3 mb-6">
          <a
            href={REG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 btn-primary rounded animate-pulse-white"
          >
            Регистрация
          </a>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 btn-outline rounded"
          >
            О нас
          </button>
        </div>

        {/* Карта — вписана под кнопки, растушёвка через маску */}
        <div
          className="relative"
          style={{
            width: "clamp(280px, 55vw, 680px)",
            height: "clamp(130px, 22vw, 260px)",
          }}
        >
          <img
            src={MAP}
            alt="Карта"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 40%",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
              filter: "sepia(0.3) brightness(0.45) contrast(0.85) saturate(0.6)",
              mixBlendMode: "screen",
              opacity: 0.75,
            }}
          />
        </div>
      </div>

      {/* Лого Ритмы — у нижнего края */}
      <div className="absolute left-0 right-0 z-10 flex justify-center" style={{ bottom: "30px" }}>
        <img
          src={LOGO_RITMI}
          alt="Ритмы"
          className="w-auto object-contain opacity-55 hover:opacity-85 transition-opacity"
          style={{ height: "clamp(40px, 7vw, 72px)" }}
        />
      </div>
    </section>
  );
}
