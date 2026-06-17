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
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Port Mirage - комьюнити, создающее мультижанровые вечеринки с
                фокусом на progressive house и близкие по духу направления.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Живые перформансы - одна из ключевых частей формата.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Музыка, атмосфера и ощущение единства между людьми лежат в
                основе каждого события.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Открывать новую музыку, привозить актуальных артистов и делиться
                этим с людьми - одна из главных идей проекта.
              </p>
            </div>
          </Reveal>

          <Reveal from="right">
            <div
              className="relative"
              style={{ transform: `translateY(${-imgParallax1 * 0.5}px)` }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/b951ee06-a305-45d9-a342-61aa9ad9c9be.jpg"
                  alt="Команда Port Mirage"
                  className="w-full h-full object-cover will-change-transform"
                  style={{
                    transform: `scale(1.08) translateY(${imgParallax1 * 0.3}px)`,
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
                Наша история
              </h3>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Port Mirage появился благодаря друзьям, объединённым одной
                страстью - электронной музыкой.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Нам хотелось создавать события, которые вдохновляли бы нас
                самих, где звучание выходит за рамки привычного - более
                глубокое, атмосферное и эмоциональное.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Проект постепенно обрёл новые форматы: появились привозы
                артистов, живые перформансы, новые элементы внутри событий.
              </p>
              <p className="font-inter text-gray-400 leading-relaxed text-[15px]">
                Главное осталось неизменным: музыка, её эстетика и внимание к
                деталям.
              </p>
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