import PolygonBackground from "./PolygonBackground";
import Reveal from "./Reveal";
import { useParallax } from "@/hooks/useParallax";
import { useRef } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";

export default function AboutSection() {
  const { about } = useSiteContent();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollY = useParallax();
  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const relativeScroll = Math.max(0, scrollY - sectionTop + window.innerHeight);
  const imgParallax1 = relativeScroll * 0.06;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 bg-[#141414] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <PolygonBackground
        className="absolute inset-0 z-0"
        nodeCount={18}
        opacity={0.07}
        parallaxFactor={0.03}
      />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14">
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">
              О <span className="text-gradient-silver">нас</span>
            </h2>
            <p className="font-inter text-gray-500 text-sm mt-3 leading-relaxed max-w-xl"></p>
          </div>
        </Reveal>

        {/* Первый блок: текст + фото */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <Reveal from="left">
            <div className="space-y-4">
              {about.intro.map((t, i) => (
                <p key={i} className="font-inter text-gray-400 leading-relaxed text-[15px]">{t}</p>
              ))}
            </div>
          </Reveal>

          <Reveal from="right">
            <div
              className="relative"
              style={{ transform: `translateY(${-imgParallax1 * 0.5}px)` }}
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/c941246b-84c4-461e-b831-28d870b8f688.jpg"
                  alt="Команда Port Mirage"
                  className="w-full h-auto will-change-transform"
                  style={{
                    transform: `translateY(${imgParallax1 * 0.3}px)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/10 rounded-xl" />
            </div>
          </Reveal>
        </div>

        {/* Второй блок: фото + история */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal from="left" delay={100}>
            <div className="space-y-4">
              <h3 className="font-orbitron text-lg font-bold text-white mb-5 tracking-normal">
                {about.historyTitle}
              </h3>
              {about.history.map((t, i) => (
                <p key={i} className="font-inter text-gray-400 leading-relaxed text-[15px]">{t}</p>
              ))}
            </div>
          </Reveal>

          <Reveal from="right" delay={150}>
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/63203eb1-be8c-4246-8447-be063759f540.jpg"
                alt="История Port Mirage"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}