import { useState } from "react";
import Icon from "@/components/ui/icon";
import PolygonBackground from "./PolygonBackground";
import Reveal from "./Reveal";

const photos = [
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/7ca6771f-58af-4ada-b4b1-00308ed9622a.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/57f4a0fd-6714-4b1d-ac6c-51b35cb7149f.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/2bd13234-1087-4b0a-83b7-c571e8a2c289.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/3d66b5c6-182e-4918-bccf-7d350fefcaeb.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/e05d9374-018b-49da-afa6-af355de0e824.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/04e42c3f-6cc2-42af-8e76-4a2c1130c5bb.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/a952389c-d1c5-45fd-b4ef-f03bcad10efe.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/77548b72-11e4-4cc5-9278-e4ee20e06e5d.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/b90acb54-6aa9-4dd9-a36e-5818d9e09257.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/afffa5be-0c80-4238-bc72-96b201a274ab.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/2be0d717-ce27-46c9-8832-6056b25daf9c.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/fd1c6ead-798a-4227-bd54-bcbc7a1a564f.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/56668caf-c477-4286-a90a-8f2a4e458759.jpg",
];

const PER_PAGE = 5;

function GalleryPhoto({ src, index, onClick }: { src: string; index: number; onClick: (i: number) => void }) {
  return (
    <div
      className="relative group overflow-hidden rounded-xl cursor-pointer"
      onClick={() => onClick(index)}
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(photos.length / PER_PAGE);
  const paginated = photos.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const openLightbox = (localIndex: number) => {
    setLightboxIndex(page * PER_PAGE + localIndex);
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % photos.length);
  };

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
            <div className="grid grid-cols-3 gap-3 md:gap-4 h-52 sm:h-64 md:h-72">
              {paginated.slice(0, 3).map((src, i) => (
                <GalleryPhoto key={src} src={src} index={i} onClick={openLightbox} />
              ))}
            </div>
            {paginated.length > 3 && (
              <div className="grid grid-cols-2 gap-3 md:gap-4 h-52 sm:h-64 md:h-72 max-w-2xl mx-auto w-full">
                {paginated.slice(3).map((src, i) => (
                  <GalleryPhoto key={src} src={src} index={i + 3} onClick={openLightbox} />
                ))}
              </div>
            )}
          </div>
        </Reveal>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === page ? "bg-white w-6" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 disabled:opacity-25 disabled:cursor-not-allowed transition-all"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Лайтбокс */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
          >
            <Icon name="X" size={32} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
          >
            <Icon name="ChevronLeft" size={22} />
          </button>

          <img
            src={photos[lightboxIndex]}
            alt="Фото"
            className="max-w-full max-h-full rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
          >
            <Icon name="ChevronRight" size={22} />
          </button>

          <div className="absolute bottom-4 font-rajdhani text-white/40 text-sm tracking-wide">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}