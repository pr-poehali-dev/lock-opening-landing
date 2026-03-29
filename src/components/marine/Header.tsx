import Icon from "@/components/ui/icon";
import { NAV, ContactForm } from "./Shared";

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  formOpen: boolean;
  setFormOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  scrollTo: (href: string) => void;
}

export default function Header({ scrolled, menuOpen, setMenuOpen, formOpen, setFormOpen, scrollTo }: HeaderProps) {
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
      style={{ backgroundColor: scrolled ? "var(--navy)" : "transparent" }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-6">

          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center shrink-0">
            <img
              src="https://thb.tildacdn.com/tild3333-3532-4765-b339-346564343465/-/resize/504x/logo_color.png"
              alt="IDA LED"
              className="h-[46px] lg:h-[55px] w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link">{l.label}</button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
            <a href="tel:+79633027803"
              className="flex items-center gap-2 font-ibm text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.65)" }}>
              <Icon name="Phone" size={14} style={{ color: "var(--gold)" }} />
              +7 (963) 302-78-03
            </a>
            <button onClick={() => setFormOpen(v => !v)} className="btn-gold px-5 py-2.5 rounded text-xs">
              Связаться
            </button>

            {/* Dropdown form */}
            {formOpen && (
              <div className="absolute top-full right-0 mt-3 w-72 rounded-xl shadow-2xl p-5 z-50"
                style={{ backgroundColor: "var(--navy-light)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-cormorant text-white font-semibold text-lg">Запрос агенту</span>
                  <button onClick={() => setFormOpen(false)} className="text-white/40 hover:text-white transition-colors">
                    <Icon name="X" size={16} />
                  </button>
                </div>
                <ContactForm compact />
              </div>
            )}
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden text-white p-1.5">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="px-4 py-5 space-y-1">
            {NAV.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="block w-full text-left px-3 py-2.5 rounded font-ibm text-sm uppercase tracking-wider transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}>
                {l.label}
              </button>
            ))}
            <div className="pt-4 mt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <ContactForm compact />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}