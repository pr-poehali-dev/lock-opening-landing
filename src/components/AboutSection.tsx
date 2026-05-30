import PolygonBackground from "./PolygonBackground";
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
            <span className="font-rajdhani text-xs tracking-widest uppercase font-semibold" style={{ color: "#D4AF37" }}>
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
              <p className="font-inter text-gray-400 leading-relaxed mb-4 text-base">
                Port Mirage — комьюнити, создающее мультижанровые вечеринки с фокусом на progressive house и близкие по духу направления.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed mb-4 text-base">
                Живые перформансы — одна из ключевых частей формата.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed mb-4 text-base">
                Музыка, атмосфера и ощущение единства между людьми лежат в основе каждого события.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-base">
                Открывать новую музыку, привозить актуальных артистов и делиться этим с людьми является одной из главных идей проекта.
              </p>
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
              <div className="space-y-4">
                <p className="font-inter text-gray-400 leading-relaxed text-base">
                  Port Mirage появился благодаря друзьям, объединённым одной страстью — электронной музыкой.
                </p>
                <p className="font-inter text-gray-400 leading-relaxed text-base">
                  Нам хотелось создавать события, которые вдохновляли бы нас самих, где звучание выходит за рамки привычного — более глубокое, атмосферное и эмоциональное.
                </p>
                <p className="font-inter text-gray-400 leading-relaxed text-base">
                  Проект постепенно обрёл новые форматы и появились привозы артистов, живые перформансы, новые элементы внутри событий.
                </p>
                <p className="font-inter text-gray-400 leading-relaxed text-base">
                  Однако главное осталось неизменным: музыка, её эстетика и внимание к деталям как основа каждого события.
                </p>
              </div>
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