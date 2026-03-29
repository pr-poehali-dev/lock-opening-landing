import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

/* ─────────────── IMAGES ─────────────── */
export const IMG_SHIP     = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/5d9466ad-8660-43f6-9490-fa23a64eeeed.jpg";
export const IMG_ENGINE   = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/32f4384a-8ed2-435c-913b-3be3513c5db6.jpg";
export const IMG_CHANDLER = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/55069be5-26b0-43e3-938d-106938ebfb12.jpg";

/* ─────────────── DATA ─────────────── */
export const NAV = [
  { label: "Агентирование",    href: "#agency" },
  { label: "Ремонт двигателей", href: "#engines" },
  { label: "Ship Chandler",    href: "#chandler" },
  { label: "Как мы работаем",  href: "#how" },
  { label: "Контакты",         href: "#contacts" },
];

export const SLIDES = [
  { title: "Судовое\nагентирование",        sub: "Полный комплекс портовых услуг для судовладельцев и операторов",                    badge: "Профессиональный судовой агент" },
  { title: "Ремонт судовых\nдвигателей",    sub: "Диагностика и ремонт главных и вспомогательных двигателей любой мощности",          badge: "Сертифицированные механики" },
  { title: "Ship Chandler —\nСнабжение",    sub: "Провизия, техническое снабжение и расходные материалы с доставкой на борт",         badge: "Поставки 24 / 7" },
];

export const AGENCY_SERVICES = [
  { icon: "FileText",      title: "Оформление судозаходов",  desc: "Таможенное и пограничное оформление, портовые формальности, взаимодействие с властями" },
  { icon: "Users",         title: "Смена экипажа",           desc: "Организация визовой поддержки, трансфера, гостиниц, репатриации моряков" },
  { icon: "Anchor",        title: "Агентирование в порту",   desc: "Координация швартовки, бункеровки, балластных операций и грузовых работ" },
  { icon: "ClipboardList", title: "Судовые документы",       desc: "Помощь с сертификацией, инспекциями и флагом регистрации" },
  { icon: "Truck",         title: "Логистика грузов",        desc: "Организация стивидорных работ, складирования и доставки грузов" },
  { icon: "Shield",        title: "P&I представительство",   desc: "Интересы судовладельцев перед страховыми клубами и властями" },
];

export const ENGINE_SERVICES = [
  { icon: "Settings",    label: "Диагностика и дефектация",  desc: "Эндоскопия цилиндров, анализ масла, компрессия, термография" },
  { icon: "Wrench",      label: "Капитальный ремонт",        desc: "Расточка, хонингование гильз, шлифовка коленвалов" },
  { icon: "Zap",         label: "Турбокомпрессоры",          desc: "Восстановление и балансировка роторов ТКР" },
  { icon: "Droplets",    label: "Топливная система",         desc: "ТНВД, форсунки, трубопроводы высокого давления" },
  { icon: "Thermometer", label: "Система охлаждения",        desc: "Ремонт теплообменников, насосов, термостатов" },
  { icon: "Activity",    label: "Ходовые испытания",         desc: "Финальная настройка под нагрузкой с протоколом" },
];

export const CHANDLER_CATS = [
  { icon: "UtensilsCrossed", title: "Продовольствие",  desc: "Свежие, замороженные и сухие продукты по ГОСТу и международным стандартам" },
  { icon: "Package",         title: "Техснабжение",    desc: "Запасные части, крепёж, инструмент, лакокрасочные материалы" },
  { icon: "Droplets",        title: "Масла и химия",   desc: "Судовые масла, топливные присадки, антикоррозионные покрытия" },
  { icon: "Shirt",           title: "Спецодежда",      desc: "СИЗ, форменная одежда, спасательное снаряжение и пиротехника" },
  { icon: "Wifi",            title: "Связь и IT",      desc: "Спутниковые карты, SIM-карты, оборудование ГМССБ" },
  { icon: "Heart",           title: "Медикаменты",     desc: "Судовая аптека, медицинские комплекты по СОЛАС" },
];

export const HOW_STEPS = [
  { num: "01", icon: "Phone",       title: "Заявка",           desc: "Капитан или судовладелец оставляет заявку — телефон, e-mail или форма" },
  { num: "02", icon: "Search",      title: "Анализ и расчёт",  desc: "Агент изучает требования, рассчитывает дисбурсментский счёт" },
  { num: "03", icon: "FileCheck",   title: "Документация",     desc: "Подготовка манифестов, нотисов о прибытии, взаимодействие с портом" },
  { num: "04", icon: "Anchor",      title: "Встреча судна",    desc: "Координация лоцмана, буксиров, швартовки и таможенного оформления" },
  { num: "05", icon: "Package",     title: "Снабжение",        desc: "Доставка провизии, материалов и ЗИП непосредственно на борт" },
  { num: "06", icon: "CheckCircle2",title: "Отход судна",      desc: "Окончательный расчёт с портовыми властями, оформление отхода" },
];

export const STATS = [
  { value: "15+",  label: "лет на рынке" },
  { value: "300+", label: "судозаходов в год" },
  { value: "40+",  label: "портов присутствия" },
  { value: "24/7", label: "на связи всегда" },
];

/* ─────────────── HELPERS ─────────────── */
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}

/* ─────────────── CONTACT FORM ─────────────── */
export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  if (sent) return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: "rgba(34,197,94,0.2)" }}>
        <Icon name="CheckCircle2" size={24} className="text-green-400" />
      </div>
      <p className="text-white font-ibm font-medium">Заявка принята!</p>
      <p className="text-white/50 text-sm mt-1 font-ibm">Свяжемся в течение 30 минут</p>
    </div>
  );

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-3">
      {!compact && (
        <p className="font-cormorant text-white/70 italic text-sm mb-2">
          Оставьте контакты — перезвоним в течение 30 минут
        </p>
      )}
      <input required value={form.name} onChange={set("name")}
        placeholder="Ваше имя / название судна" className="input-marine" />
      <input required type="tel" value={form.phone} onChange={set("phone")}
        placeholder="+7 (___) ___-__-__" className="input-marine" />
      <div className="relative">
        <textarea
          value={form.message}
          onChange={set("message")}
          maxLength={1000}
          rows={compact ? 3 : 4}
          placeholder="Сообщение (необязательно)"
          className="input-marine resize-none"
          style={{ paddingBottom: "1.5rem" }}
        />
        <span className="absolute bottom-2 right-3 font-ibm text-xs pointer-events-none"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          {form.message.length}/1000
        </span>
      </div>
      {!compact && (
        <select value={form.service} onChange={set("service")} className="input-marine"
          style={{ appearance: "none", cursor: "pointer" }}>
          <option value="">Выберите услугу...</option>
          <option>Судовое агентирование</option>
          <option>Ремонт двигателей</option>
          <option>Ship Chandler</option>
          <option>Другое</option>
        </select>
      )}
      <button type="submit" className="btn-gold w-full rounded px-4 py-3 text-xs tracking-widest">
        Отправить заявку
      </button>
    </form>
  );
}