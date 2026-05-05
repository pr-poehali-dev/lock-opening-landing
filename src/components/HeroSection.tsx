import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-06-06T20:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();
  if (diff <= 0) return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  return { months, days, hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-0">
      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/5 border border-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm glow-border-white">
        <span className="font-orbitron text-lg sm:text-2xl md:text-3xl font-bold text-white tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-1.5 font-rajdhani text-[10px] sm:text-xs tracking-wider uppercase text-gray-500 font-semibold text-center">
        {label}
      </span>
    </div>
  );
}

export default function HeroSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/98255fdd-8d2a-460e-bbe8-ee3266fce728.jpg)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-[#141414]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="font-rajdhani text-sm tracking-widest uppercase text-gray-300 font-semibold">
            Progressive House
          </span>
        </div>

        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight glow-white">
          PROG<span className="text-gradient-silver">HOUSE</span>
        </h1>
        <p className="font-rajdhani text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl tracking-wide">
          Собираем людей, которые любят музыку так же сильно, как мы. Добро пожаловать!
        </p>

        <div className="mb-8 w-full px-2">
          <p className="font-rajdhani text-xs sm:text-sm tracking-widest uppercase text-gray-500 mb-4 font-semibold">
            До следующего мероприятия осталось
          </p>
          <div className="flex items-start justify-center gap-1.5 sm:gap-3 md:gap-4">
            <TimeUnit value={time.months} label="мес." />
            <div className="text-gray-500 text-lg sm:text-2xl font-orbitron font-bold mt-3 sm:mt-4">:</div>
            <TimeUnit value={time.days} label="дней" />
            <div className="text-gray-500 text-lg sm:text-2xl font-orbitron font-bold mt-3 sm:mt-4">:</div>
            <TimeUnit value={time.hours} label="часов" />
            <div className="text-gray-500 text-lg sm:text-2xl font-orbitron font-bold mt-3 sm:mt-4">:</div>
            <TimeUnit value={time.minutes} label="минут" />
            <div className="text-gray-500 text-lg sm:text-2xl font-orbitron font-bold mt-3 sm:mt-4">:</div>
            <TimeUnit value={time.seconds} label="сек." />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 btn-primary rounded shadow-lg animate-pulse-white"
          >
            Купить билет
          </button>
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 btn-outline rounded"
          >
            О нас
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8 animate-float">
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/30 hover:text-white/70 transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
