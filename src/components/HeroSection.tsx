import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e49d5503-80e4-4e69-a43d-c3ad2e21f86b.png";
const BG_DESKTOP = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/550db09e-15ef-434f-87d0-d76247d36fe0.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/249544-port-mirage-b-day-x-groove-kitchen";

const LINEUP = {
  terrace: ["K LOVESKI", "NASTYA MAMITA", "MELANIYA", "JOMOSS", "SAZONOVA", "EIDOFEY × NICKEL (DRUMS)"],
  main: ["KAYA", "MORRICONE", "A.D.E.N.A", "KIRILL KARNELL"],
};

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

      {/* Основной контент — снизу над лого */}
      <div
        className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-4"
        style={{ paddingBottom: "110px" }}
      >
        <h1 className="font-orbitron font-black text-white leading-tight tracking-wide mb-2 drop-shadow-lg flex flex-col items-center">
          <span className="text-2xl sm:text-4xl md:text-5xl">Port Mirage B-Day × Groove Kitchen</span>
        </h1>

        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase mb-4">
          15 августа&nbsp;&nbsp;|&nbsp;&nbsp;23:00–5:00
        </p>

        <div className="mb-5 flex flex-row gap-8 sm:gap-14">
          <div className="flex flex-col items-center gap-1">
            <span className="font-orbitron text-[10px] sm:text-xs font-bold text-white/40 tracking-widest uppercase mb-1">
              Terrace
            </span>
            {LINEUP.terrace.map((artist) => (
              <span
                key={artist}
                className="font-rajdhani font-semibold text-white/80 text-xs sm:text-sm tracking-widest uppercase"
              >
                {artist}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="font-orbitron text-[10px] sm:text-xs font-bold text-white/40 tracking-widest uppercase mb-1">
              Main
            </span>
            {LINEUP.main.map((artist) => (
              <span
                key={artist}
                className="font-rajdhani font-semibold text-white/80 text-xs sm:text-sm tracking-widest uppercase"
              >
                {artist}
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