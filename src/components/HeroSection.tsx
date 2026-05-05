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
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-black/60 border border-brand-red/40 rounded-lg flex items-center justify-center glow-border-red backdrop-blur-sm">
          <span className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute inset-0 rounded-lg bg-brand-red/5" />
      </div>
      <span className="mt-2 font-rajdhani text-xs sm:text-sm tracking-widest uppercase text-gray-400 font-semibold">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-brand-red/8 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-4 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-brand-red/50 rounded-full bg-brand-red/10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          <span className="font-rajdhani text-sm tracking-widest uppercase text-brand-red font-semibold">
            Progressive House
          </span>
        </div>

        <h1 className="font-orbitron text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
          PROG<span className="text-gradient-red">HOUSE</span>
        </h1>
        <p className="font-rajdhani text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl tracking-wide">
          Промо-группа. Создаём пространство для настоящей музыки.
        </p>

        <div className="mb-8">
          <p className="font-rajdhani text-sm sm:text-base tracking-widest uppercase text-gray-400 mb-6 font-semibold">
            До следующего мероприятия осталось
          </p>
          <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
            <TimeUnit value={time.months} label="месяцев" />
            <div className="text-brand-red text-2xl sm:text-3xl font-orbitron font-bold mt-5 sm:mt-6">:</div>
            <TimeUnit value={time.days} label="дней" />
            <div className="text-brand-red text-2xl sm:text-3xl font-orbitron font-bold mt-5 sm:mt-6">:</div>
            <TimeUnit value={time.hours} label="часов" />
            <div className="text-brand-red text-2xl sm:text-3xl font-orbitron font-bold mt-5 sm:mt-6">:</div>
            <TimeUnit value={time.minutes} label="минут" />
            <div className="text-brand-red text-2xl sm:text-3xl font-orbitron font-bold mt-5 sm:mt-6">:</div>
            <TimeUnit value={time.seconds} label="секунд" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => {
              document.querySelector("#tickets")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-brand-red text-white font-orbitron font-bold text-sm tracking-widest uppercase rounded hover:bg-brand-red-dark transition-all duration-300 animate-pulse-red shadow-lg shadow-brand-red/30"
          >
            Купить билет
          </button>
          <button
            onClick={() => {
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 border border-white/30 text-white font-orbitron font-bold text-sm tracking-widest uppercase rounded hover:border-brand-red hover:bg-brand-red/10 transition-all duration-300 backdrop-blur-sm"
          >
            О нас
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8 animate-float">
        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white/40 hover:text-brand-red transition-colors"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
