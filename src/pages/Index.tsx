import { useState, useEffect } from "react";
import Header from "@/components/marine/Header";
import HeroSection from "@/components/marine/HeroSection";
import ContentSections from "@/components/marine/ContentSections";
import { SLIDES } from "@/components/marine/Shared";

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.title = "Судовое агентство IDALED в Санкт-Петербурге | Судовые агенты";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", "Судовые агенты IDALED в Санкт-Петербурге — профессиональное судовое агентство. Агентирование судов, ремонт двигателей, ship chandler. Работаем 24/7.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.setAttribute("name", "keywords"); document.head.appendChild(kw); }
    kw.setAttribute("content", "судовой агент, судовое агентство, судовые агенты, судовое агентство в Санкт-Петербурге, судовой агент СПб, агентирование судов Санкт-Петербург");
  }, []);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setFormOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-ibm bg-white" style={{ color: "var(--navy)" }}>
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        formOpen={formOpen}
        setFormOpen={setFormOpen}
        scrollTo={scrollTo}
      />
      <HeroSection
        slide={slide}
        setSlide={setSlide}
        scrollTo={scrollTo}
      />
      <ContentSections scrollTo={scrollTo} />
    </div>
  );
}