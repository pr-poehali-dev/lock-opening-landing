import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const PHOTOS = [
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/98255fdd-8d2a-460e-bbe8-ee3266fce728.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/23ec51bd-c041-40ae-88ae-04a92bca62ed.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/59a6e91b-8e61-415c-a799-414fa17f50d2.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/f0b6c902-0e87-4f97-89a1-e8cbfcf5ca8c.jpg",
  "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/4458b1df-698d-43d8-b51f-720bbe0a3617.jpg",
];

export default function HistoryCarousel() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setActive((idx + PHOTOS.length) % PHOTOS.length);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  useEffect(() => {
    const t = setInterval(() => goTo(active + 1), 4000);
    return () => clearInterval(t);
  }, [active, goTo]);

  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  return (
    <div className="relative w-full select-none">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        {PHOTOS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`История ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
            style={{
              opacity: i === active ? 1 : 0,
              transform: i === active ? "scale(1)" : "scale(1.04)",
              zIndex: i === active ? 2 : 1,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[3]" />

        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-[4] w-9 h-9 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-black/70 transition-all"
        >
          <Icon name="ChevronLeft" size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-[4] w-9 h-9 rounded-full bg-black/50 border border-white/15 flex items-center justify-center text-white hover:bg-black/70 transition-all"
        >
          <Icon name="ChevronRight" size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === active
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
