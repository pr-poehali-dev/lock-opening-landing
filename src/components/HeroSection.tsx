import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/74c52e6b-e2b2-4830-8ec4-bd93485127ce.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/241213-port-mirage-jomoss-b-day";

const ARTISTS = [
  "JOMOSS (BIRTHDAY SET)",
  "K LOVESKI",
  "MELANIYA",
  "VANCOO",
];

export default function HeroSection() {
  useParallax();

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Фон */}
      <div
        className="absolute inset-0 bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center top",
          backgroundSize: "auto 110%",
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
        <h1 className="font-orbitron text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-wide mb-2 drop-shadow-lg">
          Port Mirage • Jomoss B-Day
        </h1>

        <p className="font-rajdhani text-white/60 text-sm sm:text-base tracking-widest uppercase mb-4">
          4 июля&nbsp;&nbsp;|&nbsp;&nbsp;22:00–3:00
        </p>

        <ul className="mb-5 flex flex-col items-center gap-1">
          {ARTISTS.map((artist) => (
            <li
              key={artist}
              className="font-rajdhani font-semibold text-white/80 text-xs sm:text-sm tracking-widest uppercase"
            >
              {artist}
            </li>
          ))}
        </ul>

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