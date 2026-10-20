import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../App";

const links = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Estaciones", href: "#estaciones" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Planes", href: "#planes" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ onActivar }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-cp flex h-16 sm:h-20 items-center justify-between">
        <a href="#top" className="flex items-center" data-testid="nav-logo">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
              data-testid={`nav-link-${l.href.replace("#", "")}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors"
            data-testid="nav-whatsapp"
          >
            WhatsApp
          </a>
          <button
            onClick={onActivar}
            className="rounded-full bg-[#f5961d] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:brightness-110 hover:-translate-y-0.5"
            data-testid="nav-activar-btn"
          >
            Activar unidad
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/5"
          aria-label="Menú"
          data-testid="nav-menu-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-cp pb-6 pt-2 flex flex-col gap-1 border-t border-white/10 bg-black/90 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-white/80"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-3">
            <button
              onClick={() => {
                setOpen(false);
                onActivar();
              }}
              className="rounded-full bg-[#f5961d] px-5 py-3 text-sm font-semibold text-black"
              data-testid="nav-mobile-activar"
            >
              Activar mi unidad
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white text-center"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
