import React from "react";
import { Instagram, Facebook, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../App";

const XIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/carrier.pro/", Icon: Instagram },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592701653158", Icon: Facebook },
  { id: "x", label: "X", href: "https://x.com/ProCarrierFleet", Icon: XIcon },
];

const SECTIONS = [
  ["#como-funciona", "Cómo funciona"],
  ["#estaciones", "Estaciones"],
  ["#beneficios", "Beneficios"],
  ["#calculadora", "Calculadora"],
  ["#planes", "Planes"],
  ["#faq", "FAQ"],
];

const Label = ({ children }) => (
  <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/40">{children}</div>
);

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-28 sm:pb-12" data-testid="footer">
      <div className="container-cp grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/55">
            Los beneficios de una gran flota. Sin ser una gran flota.
          </p>
        </div>
        <div>
          <Label>Secciones</Label>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {SECTIONS.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-white" data-testid={`footer-link-${href.slice(1)}`}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Contacto</Label>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#f5961d]" data-testid="footer-whatsapp">
                WhatsApp: +51 916 776 302
              </a>
            </li>
            <li>Trujillo · La Libertad · Perú</li>
          </ul>
        </div>
        <div>
          <Label>Síguenos</Label>
          <div className="mt-5 flex gap-3" data-testid="footer-socials">
            {SOCIALS.map(({ id, label, href, Icon }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-testid={`footer-social-${id}`}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[#f5961d] hover:bg-[#f5961d] hover:text-black"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          <a href={SOCIALS[0].href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1 text-xs text-white/50 transition-colors hover:text-[#f5961d]">
            @carrier.pro <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <div className="container-cp mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
        <div className="font-mono text-xs text-white/45" data-testid="footer-copyright">
          © {new Date().getFullYear()} Derechos de autor Emay Tech
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50" data-testid="footer-credits">
          Diseñado y construido por la increíble gente de <span className="text-[#f5961d]">Emay</span> 💜
        </div>
      </div>
    </footer>
  );
}
