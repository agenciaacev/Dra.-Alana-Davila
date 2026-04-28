import { useState, useEffect } from "react";

// @ts-ignore
import Imglogo from "../assets/logo-dr-alana-preto.webp";

const WA_LINK =
  "https://wa.me/5585999999999?text=Olá!%20Vim%20do%20site%20da%20Dra.%20Alana%20e%20gostaria%20de%20agendar%20uma%20avaliação.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={Imglogo}
            alt="Dra. Alana Dávila"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Sobre", "#sobre"],
            ["Procedimentos", "#procedimentos"],
            ["Resultados", "#resultados"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-charcoal-700 hover:text-gold-400 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 font-500"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block btn-gold font-semibold text-[10px] rounded-[25px]"
        >
          Agendar Avaliação
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className={`block w-5 h-px bg-charcoal-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px bg-charcoal-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-80" : "max-h-0"}`}
      >
        <nav className="bg-cream-50/98 backdrop-blur-sm px-6 py-4 flex flex-col gap-4 border-t border-cream-200">
          {[
            ["Sobre", "#sobre"],
            ["Procedimentos", "#procedimentos"],
            ["Resultados", "#resultados"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-charcoal-700 font-sans text-xs tracking-[0.2em] uppercase font-500"
            >
              {label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-center mt-2 text-[10px] rounded-[25px]"
          >
            Agendar Avaliação
          </a>
        </nav>
      </div>
    </header>
  );
}
