import { useState } from "react";
import Icon from "@/components/ui/icon";
import PolygonBackground from "./PolygonBackground";
import Reveal from "./Reveal";

const photos = [
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e5ba2f8d-47da-4e67-a787-9cdbdb6864e2.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e05d9374-018b-49da-afa6-af355de0e824.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/04e42c3f-6cc2-42af-8e76-4a2c1130c5bb.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/a952389c-d1c5-45fd-b4ef-f03bcad10efe.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/77548b72-11e4-4cc5-9278-e4ee20e06e5d.jpg",
];

function GalleryPhoto({ src, index, onClick }: { src: string; index: number; onClick: (s: string) => void }) {
  return (
    <div
      className="relative group overflow-hidden rounded-xl cursor-pointer"
      onClick={() => onClick(src)}
    >
      <img
        src={src}
        alt={`Галерея ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <Icon name="ZoomIn" size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <PolygonBackground className="absolute inset-0 z-0" nodeCount={20} opacity={0.08} parallaxFactor={0.035} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs tracking-widest uppercase font-semibold" style={{ color: "#D4AF37" }}>
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
          <div className="flex flex-col gap-3 md:gap-4">
            {/* Верхний ряд — 3 фото */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 h-52 sm:h-64 md:h-72">
              {photos.slice(0, 3).map((src, i) => (
                <GalleryPhoto key={i} src={src} index={i} onClick={setLightbox} />
              ))}
            </div>
            {/* Нижний ряд — 2 фото по центру */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 h-52 sm:h-64 md:h-72 max-w-2xl mx-auto w-full">
              {photos.slice(3).map((src, i) => (
                <GalleryPhoto key={i + 3} src={src} index={i + 3} onClick={setLightbox} />
              ))}
            </div>
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