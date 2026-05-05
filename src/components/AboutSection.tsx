import PolygonBackground from "./PolygonBackground";
import HistoryCarousel from "./HistoryCarousel";
import Reveal from "./Reveal";
import { useParallax } from "@/hooks/useParallax";
import { useRef } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollY = useParallax();
  const sectionTop = sectionRef.current?.offsetTop ?? 0;
  const relativeScroll = Math.max(0, scrollY - sectionTop + window.innerHeight);
  const imgParallax1 = relativeScroll * 0.06;

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-[#141414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <PolygonBackground className="absolute inset-0 z-0" nodeCount={18} opacity={0.07} parallaxFactor={0.03} />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-white/3 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold">
              Кто мы такие
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              О <span className="text-gradient-silver">нас</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <Reveal from="left">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-white/15 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 font-semibold">Наша миссия</span>
              </div>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Музыка, которая объединяет
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed mb-5 text-base">
                Мы создаём тёплые вечеринки, где каждый чувствует себя своим. Progressive house — это не просто жанр, это особое состояние, которое мы хотим подарить вам.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-base">
                На каждом нашем событии — продуманный звук, уютная атмосфера и артисты, которые по-настоящему вкладывают душу в своё дело.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6">
                {[
                  { value: "50+", label: "Мероприятий" },
                  { value: "12", label: "Артистов" },
                  { value: "15K+", label: "Гостей" },
                ].map((stat, i) => (
                  <Reveal key={stat.label} delay={i * 100}>
                    <div className="text-center">
                      <div className="font-orbitron text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      <div className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 mt-1 font-semibold">{stat.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal from="right">
            <div className="relative" style={{ transform: `translateY(${-imgParallax1 * 0.5}px)` }}>
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/4458b1df-698d-43d8-b51f-720bbe0a3617.jpg"
                  alt="DJ за пультом"
                  className="w-full h-full object-cover will-change-transform"
                  style={{ transform: `scale(1.08) translateY(${imgParallax1 * 0.3}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-white/15 rounded-xl" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/5 rounded-full blur-xl" />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal from="left" delay={100}>
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-white/15 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 font-semibold">Наша история</span>
              </div>
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                Маленькая идея, которая выросла в большое сообщество
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  { year: "2019", text: "Первая вечеринка на 200 человек — билеты разошлись за несколько часов. Мы поняли, что не одни." },
                  { year: "2021", text: "Познакомились с замечательными артистами. Начали вместе создавать что-то большее." },
                  { year: "2023", text: "Первый open-air фестиваль под открытым небом. 3000 улыбающихся людей — это незабываемо." },
                  { year: "2025", text: "Регулярные события в лучших клубах города. Наша собственная звуковая система и дружная команда." },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 font-orbitron text-xs font-bold text-gray-400 mt-1">{item.year}</div>
                    <div className="flex-1 pl-4 border-l border-white/10">
                      <p className="font-inter text-gray-400 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={150}>
            <HistoryCarousel />
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
