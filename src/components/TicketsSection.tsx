import Reveal from "./Reveal";

export default function TicketsSection() {
  return (
    <section id="tickets" className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/f0b6c902-0e87-4f97-89a1-e8cbfcf5ca8c.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85" />
      <div className="absolute inset-0" style={{ backdropFilter: "grayscale(60%)" }} />

      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
        <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-rajdhani text-sm tracking-widest uppercase text-gray-300 font-semibold">
            6 июня 2026
          </span>
        </span>

        <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          ПРИХОДИ И <br />
          <span className="text-gradient-silver">ПОЧУВСТВУЙ МУЗЫКУ</span>
        </h2>

        <p className="font-inter text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Вечер с любимыми треками, хорошей компанией и атмосферой, которую сложно передать словами.
          Просто приходи — остальное мы берём на себя.
        </p>
        <p className="font-rajdhani text-base text-gray-400 mb-10 tracking-wide">
          Места ограничены — успей взять билет по лучшей цене.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="px-6 py-3 bg-white/5 border border-white/12 rounded-lg backdrop-blur-sm">
            <div className="font-orbitron text-xs text-gray-500 uppercase tracking-widest">Ранние птички</div>
            <div className="font-orbitron text-2xl font-bold text-white mt-1">1 500 ₽</div>
            <div className="font-rajdhani text-xs text-gray-400 mt-1 uppercase tracking-wide">Осталось 12 шт</div>
          </div>
          <div className="px-6 py-3 bg-white/10 border border-white/25 rounded-lg backdrop-blur-sm glow-border-white">
            <div className="font-orbitron text-xs text-gray-400 uppercase tracking-widest">Стандарт</div>
            <div className="font-orbitron text-2xl font-bold text-white mt-1">2 500 ₽</div>
            <div className="font-rajdhani text-xs text-gray-300 mt-1 uppercase tracking-wide">Доступно</div>
          </div>
          <div className="px-6 py-3 bg-white/5 border border-white/12 rounded-lg backdrop-blur-sm">
            <div className="font-orbitron text-xs text-gray-500 uppercase tracking-widest">VIP</div>
            <div className="font-orbitron text-2xl font-bold text-white mt-1">5 000 ₽</div>
            <div className="font-rajdhani text-xs text-gray-300 mt-1 uppercase tracking-wide">Доступно</div>
          </div>
        </div>

        <a
          href="#"
          className="inline-block px-12 py-5 btn-primary rounded-lg shadow-xl animate-pulse-white"
        >
          Купить билет →
        </a>

        <p className="mt-6 font-inter text-xs text-gray-600">
          Безопасная оплата · Билет придёт на почту мгновенно · Без скрытых комиссий
        </p>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}