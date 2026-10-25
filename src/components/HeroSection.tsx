import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function HeroSection() {
  useParallax();
  const { hero } = useSiteContent();
  const REG_LINK = hero.ticketLink;
  const SUPPORT = hero.support;
  const BG = hero.bgMobile;
  const BG_DESKTOP = hero.bgDesktop;

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

      {/* Хедлайнер — вверху, над лицом артиста */}
      <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center px-4 pt-20 sm:pt-24">
        <span className="font-rajdhani text-white/50 text-[11px] sm:text-sm tracking-[0.3em] uppercase mb-2">
          Headliner
        </span>
        <h1 className="font-orbitron font-black text-white leading-none tracking-wide mb-1 drop-shadow-lg">
          <span className="text-4xl sm:text-6xl md:text-7xl leading-tight">{hero.headliner}</span>
        </h1>
        <span className="font-rajdhani text-white/70 text-sm sm:text-lg tracking-[0.3em] uppercase mb-4">
          [ {hero.country} ]
        </span>

        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase mb-1">
          {hero.date}
        </p>
        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase">
          {hero.time}
        </p>
      </div>

      {/* Партнёры + Support + кнопки — внизу, над лого Ритмы */}
      <div className="absolute inset-x-0 bottom-[150px] sm:bottom-[110px] z-10 flex flex-col items-center text-center px-4">
        <span className="font-rajdhani text-white/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1">
          {hero.partners}
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
            Купить билет
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