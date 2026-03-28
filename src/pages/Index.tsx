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
