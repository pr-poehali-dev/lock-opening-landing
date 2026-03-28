import Icon from "@/components/ui/icon";
import { IMG_SHIP, SLIDES, STATS } from "./Shared";

interface HeroSectionProps {
  slide: number;
  setSlide: (i: number) => void;
  scrollTo: (href: string) => void;
}

export default function HeroSection({ slide, setSlide, scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_SHIP} alt="ship" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(100deg, rgba(6,20,38,0.97) 0%, rgba(11,31,58,0.82) 55%, rgba(11,31,58,0.45) 100%)" }} />
          <div className="absolute inset-0 sea-texture" />
        </div>

        {/* Bottom sea gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(0deg, var(--navy-deep) 0%, transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-24 pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="section-label mb-5 animate-fade-in">{SLIDES[slide].badge}</div>
              <h1 key={`title-${slide}`}
                className="font-cormorant text-white font-semibold leading-[1.05] mb-5 animate-fade-up"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", whiteSpace: "pre-line" }}>
                {SLIDES[slide].title}
              </h1>
              <p key={`sub-${slide}`}
                className="font-ibm leading-relaxed mb-10 max-w-lg animate-fade-up"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", animationDelay: "0.1s" }}>
                {SLIDES[slide].sub}
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo("#contacts")} className="btn-gold px-8 py-3.5 rounded text-xs">
                  Запросить агента
                </button>
                <button onClick={() => scrollTo("#how")} className="btn-outline-white px-8 py-3.5 rounded text-xs">
                  Как мы работаем
                </button>
              </div>

              <div className="flex gap-2 mt-10">
                {SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === slide ? "2rem" : "0.75rem",
                      height: "0.375rem",
                      backgroundColor: i === slide ? "var(--gold)" : "rgba(255,255,255,0.25)"
                    }} />
                ))}
              </div>
            </div>

            {/* Stats (desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 text-center animate-scale-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <div className="font-cormorant font-bold leading-none mb-2"
                    style={{ fontSize: "3.2rem", color: "var(--gold-light)" }}>
                    {s.value}
                  </div>
                  <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* Mobile stats */}
      <div style={{ backgroundColor: "var(--navy)" }} className="lg:hidden">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center">
                <div className="font-cormorant font-bold text-3xl" style={{ color: "var(--gold-light)" }}>{s.value}</div>
                <div className="font-ibm text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
