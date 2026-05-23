import { useState } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("https://functions.poehali.dev/62f6a48a-9dda-415a-9090-a6e60f5b8e6a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  };

  return (
    <Reveal>
      <div className="card-dark rounded-2xl p-6 md:p-8 border border-white/8">
        <div className="mb-6">
          <span className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold">
            Напиши нам
          </span>
          <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white mt-2">
            Обратная <span className="text-gradient-silver">связь</span>
          </h3>
          <p className="font-inter text-gray-500 text-sm mt-2">
            Вопрос, предложение или хочешь стать партнёром — пиши, мы отвечаем быстро.
          </p>
        </div>

        {status === "ok" ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="font-orbitron text-white font-bold tracking-wide">Сообщение отправлено!</p>
            <p className="font-inter text-gray-500 text-sm">Мы свяжемся с тобой в ближайшее время.</p>
            <button
              onClick={() => { setStatus("idle"); setForm({ name: "", contact: "", message: "" }); }}
              className="mt-2 font-rajdhani text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors underline"
            >
              Отправить ещё
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold mb-1.5">
                Имя
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Как тебя зовут?"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-inter text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold mb-1.5">
                Telegram / Email / Телефон
              </label>
              <input
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="Как с тобой связаться?"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-inter text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <div>
              <label className="block font-rajdhani text-xs tracking-widest uppercase text-gray-500 font-semibold mb-1.5">
                Сообщение
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Расскажи, чем мы можем помочь..."
                required
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-inter text-white text-sm placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
            {status === "err" && (
              <p className="text-red-400 font-inter text-xs text-center">
                Не удалось отправить. Напишите напрямую: portmirage@gmail.com
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 btn-primary rounded-lg text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Отправляем..." : "Отправить сообщение"}
            </button>
          </form>
        )}
      </div>
    </Reveal>
  );
}