import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/c5b18a32-7484-4de4-9a5b-0ad013c2ce72.png";
const BG_DESKTOP = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/1c955390-c949-4cbd-ad38-7465164f61fc.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/261521-port-mirage-x-progressia-eichenbaum-argentina";

const SUPPORT = ["K LOVESKI", "JOMOSS", "SAZONOVA", "AKIN K", "CHELAKHOV", "AGWA", "ROMAN LISOV"];

export default function HeroSection() {
  useParallax();

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Фон мобильный */}
      <div
        className="absolute inset-0 bg-no-repeat will-change-transform md:hidden"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center top",
          backgroundSize: "auto 110%",
          top: 0,
          bottom: 0,
        }}
      />
      {/* Фон десктоп */}
      <div
        className="absolute inset-0 hidden md:block will-change-transform"
        style={{
          backgroundImage: `url(${BG_DESKTOP})`,
          backgroundPosition: "center top",
          backgroundSize: "cover",
          top: 0,
          bottom: 0,
        }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#141414]" />

      <PolygonBackground
        className="absolute inset-0 z-[1]"
        nodeCount={22}
        opacity={0.08}
        parallaxFactor={0.03}
      />

      {/* Основной контент — на мобильных сверху над фото, на десктопе снизу над лого */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center px-4 pt-20 sm:justify-end sm:pt-0 sm:pb-[110px] pb-0">
        <span className="font-rajdhani text-white/50 text-[11px] sm:text-sm tracking-[0.3em] uppercase mb-2">
          Headliner
        </span>
        <h1 className="font-orbitron font-black text-white leading-none tracking-wide mb-1 drop-shadow-lg">
          <span className="text-4xl sm:text-6xl md:text-7xl leading-tight">Eichenbaum</span>
        </h1>
        <span className="font-rajdhani text-white/70 text-sm sm:text-lg tracking-[0.3em] uppercase mb-4">
          [ Argentina ]
        </span>

        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase mb-1">
          10 октября, суббота
        </p>
        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase mb-4">
          23:00–06:00
        </p>

        <span className="font-rajdhani text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1">
          Port Mirage × Progressia
        </span>

        <div className="mb-5 flex flex-col items-center gap-1">
          <span className="font-orbitron text-[10px] sm:text-xs font-bold text-white/40 tracking-widest uppercase mb-1">
            Support
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 max-w-xs sm:max-w-md">
            {SUPPORT.map((artist, i) => (
              <span
                key={artist}
                className="font-rajdhani font-semibold text-white/80 text-xs sm:text-sm tracking-widest uppercase"
              >
                {artist}{i < SUPPORT.length - 1 && <span className="text-white/30 mx-1">/</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Кнопки — скрыты на мобильных (дублируются в нижней панели Navbar) */}
        <div className="hidden sm:flex flex-row gap-3">
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
      </div>

      {/* Лого Ритмы + адрес — у нижнего края */}
      <div className="absolute left-0 right-0 z-10 flex flex-col items-center gap-1 bottom-[64px] sm:bottom-[30px]">
        <img
          src={LOGO_RITMI}
          alt="Ритмы"
          className="w-auto object-contain opacity-55 hover:opacity-85 transition-opacity"
          style={{ height: "clamp(40px, 7vw, 72px)" }}
        />
        <span className="font-rajdhani text-white/35 text-[11px] sm:text-xs tracking-widest uppercase">
          Ул. Кожевенная, 34
        </span>
      </div>
    </section>
  );
}