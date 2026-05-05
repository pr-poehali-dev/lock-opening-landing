import { useState } from "react";
import Icon from "@/components/ui/icon";
import PolygonBackground from "./PolygonBackground";

const mediaItems = [
  {
    type: "photo",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/98255fdd-8d2a-460e-bbe8-ee3266fce728.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    type: "photo",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/23ec51bd-c041-40ae-88ae-04a92bca62ed.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    type: "photo",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/f0b6c902-0e87-4f97-89a1-e8cbfcf5ca8c.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    type: "video",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/59a6e91b-8e61-415c-a799-414fa17f50d2.jpg",
    span: "col-span-1 row-span-2",
  },
  {
    type: "photo",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/4458b1df-698d-43d8-b51f-720bbe0a3617.jpg",
    span: "col-span-1 row-span-1",
  },
  {
    type: "photo",
    src: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/1d88546a-de69-4654-961d-01df8cb06274.jpg",
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
        <div className="text-center mb-16">
          <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold">
            Наши мероприятия
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Гале<span className="text-gradient-silver">рея</span>
          </h2>
          <p className="mt-4 font-inter text-gray-500 max-w-xl mx-auto">
            Атмосфера наших вечеринок в фотографиях и видео
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 gap-3 md:gap-4 h-[500px] md:h-[600px]">
          {mediaItems.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative group overflow-hidden rounded-xl cursor-pointer`}
              onClick={() => setLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={`Галерея ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === "video" ? (
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <Icon name="Play" size={22} className="text-[#141414] ml-1" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="ZoomIn" size={20} className="text-white" />
                  </div>
                )}
              </div>
              {item.type === "video" && (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <Icon name="Play" size={10} className="text-white" />
                  <span className="font-rajdhani text-xs text-white font-semibold uppercase tracking-wide">Видео</span>
                </div>
              )}
            </div>
          ))}
        </div>
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