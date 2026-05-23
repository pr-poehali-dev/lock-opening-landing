import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/480ec7a6-967d-4eff-a96d-08fc7db080a8.png";
const LOGO_PM = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/497a9e72-0689-4279-b494-4dc15c95b0f6.png";
const LOGO_TD = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/84db42a4-3789-46cf-8cd1-7d1547066b2d.png";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/234738-port-mirage-x-tripi-disko";

export default function HeroSection() {
  const scrollY = useParallax();
  const bgParallax = scrollY * 0.35;

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Фон с параллаксом */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${BG})`,
          transform: `translateY(${bgParallax}px)`,
          top: "-10%",
          height: "120%",
        }}
      />
      {/* Тёмный оверлей ~65% */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Градиент снизу */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#141414]" />

      <PolygonBackground
        className="absolute inset-0 z-[1]"
        nodeCount={28}
        opacity={0.12}
        parallaxFactor={0.04}
      />

      {/* Основной контент */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-8">

        {/* Название вечеринки */}
        <h1 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight tracking-wide drop-shadow-lg">
          Port Mirage × Трипи Диско
        </h1>
        <p className="font-rajdhani text-base sm:text-xl md:text-2xl text-gray-300 mb-10 tracking-[0.18em] uppercase font-semibold">
          Открытие летнего сезона!
        </p>

        {/* Коллаборация двух промо-групп */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-16 mb-12">
          <div className="flex flex-col items-center">
            <img
              src={LOGO_PM}
              alt="Port Mirage"
              className="h-14 sm:h-20 md:h-24 w-auto object-contain brightness-0 invert drop-shadow-xl"
            />
          </div>

          <div className="w-px h-14 sm:h-20 bg-white/25 mx-2" />

          <div className="flex flex-col items-center">
            <img
              src={LOGO_TD}
              alt="Трипи Диско"
              className="h-14 sm:h-20 md:h-24 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={REG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 btn-primary rounded shadow-lg animate-pulse-white font-rajdhani font-bold tracking-widest uppercase text-sm"
          >
            Регистрация
          </a>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 btn-outline rounded font-rajdhani font-bold tracking-widest uppercase text-sm"
          >
            О нас
          </button>
        </div>
      </div>

      {/* Логотип площадки внизу */}
      <div className="relative z-10 flex flex-col items-center pb-8 gap-2">
        <span className="font-rajdhani text-[10px] tracking-[0.35em] uppercase text-gray-600 font-semibold">
          Площадка
        </span>
        <img
          src={LOGO_RITMI}
          alt="Ритми"
          className="h-10 sm:h-12 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity"
        />
      </div>

      {/* Стрелка вниз */}
      <div className="relative z-10 flex justify-center pb-6 animate-float">
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/30 hover:text-white/70 transition-colors"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
