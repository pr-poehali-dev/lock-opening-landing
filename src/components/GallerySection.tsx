import { useState } from "react";
import Icon from "@/components/ui/icon";
import PolygonBackground from "./PolygonBackground";
import Reveal from "./Reveal";

const mediaItems = [
  {
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e5ba2f8d-47da-4e67-a787-9cdbdb6864e2.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e05d9374-018b-49da-afa6-af355de0e824.jpg",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/04e42c3f-6cc2-42af-8e76-4a2c1130c5bb.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/a952389c-d1c5-45fd-b4ef-f03bcad10efe.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/77548b72-11e4-4cc5-9278-e4ee20e06e5d.jpg",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <PolygonBackground className="absolute inset-0 z-0" nodeCount={20} opacity={0.08} parallaxFactor={0.035} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold">
              Наши мероприятия
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Гале<span className="text-gradient-silver">рея</span>
            </h2>
            <p className="mt-4 font-inter text-gray-500 max-w-xl mx-auto">
              Атмосфера наших вечеринок в фотографиях
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-[480px] md:h-[580px]">
            {mediaItems.map((item, i) => (
              <div
                key={i}
                className={`${item.span} relative group overflow-hidden rounded-xl cursor-pointer`}
                onClick={() => setLightbox(item.src)}
              >
                <img
                  src={item.src}
                  alt={`Галерея ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="ZoomIn" size={20} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img
            src={lightbox}
            alt="Фото"
            className="max-w-full max-h-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}