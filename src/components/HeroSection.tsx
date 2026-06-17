import PolygonBackground from "./PolygonBackground";
import { useParallax } from "@/hooks/useParallax";

const BG = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/99e50c8d-ba8b-48ec-b64d-ea4ed8c66ec2.jpg";
const LOGO_RITMI = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/6609fec4-37d9-463e-a1d4-dc7286af4c39.png";
const REG_LINK = "https://spb.qtickets.events/241213-port-mirage-jomoss-b-day";

export default function HeroSection() {
  const scrollY = useParallax();
  const bgParallax = scrollY * 0.3;

  return (
    <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundPosition: "center top",
          transform: `translateY(${bgParallax}px)`,
          top: "-8%",
          height: "116%",
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end text-center px-4" style={{ paddingBottom: "110px" }}>
        <h1 className="font-orbitron text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-wide mb-4 drop-shadow-lg">
          Port Mirage • Jomoss B-Day
        </h1>

        <div className="flex flex-row gap-3">
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
