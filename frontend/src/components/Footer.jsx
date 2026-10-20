import React from "react";
import { Linkedin, Facebook, Instagram, Music2 } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../App";
import { CORPORATE_EMAIL, SOCIAL_LINKS, LEGAL_LINKS } from "../config/corporate";

const XIcon = ({ size = 18 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_ICONS = { LinkedIn: Linkedin, Facebook, Instagram, X: XIcon, TikTok: Music2 };
const LINK_CLASS = "text-left text-white/55 hover:text-white transition-colors";

export default function Footer({ onOpenCorporate }) {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 sm:pt-24 pb-28" data-testid="footer">
      <div className="container-cp grid gap-12 lg:grid-cols-[1fr_2.3fr] lg:gap-14">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-[15px] leading-relaxed text-white/60">
            Una sola membresía. Múltiples beneficios. Carrier Pro reduce y optimiza los costos de tu vehículo, comenzando por el combustible en Primax.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
          <FooterColumn title="Carrier Pro">
            {[["Cómo funciona", "como-funciona"], ["Beneficios", "beneficios"], ["Calculadora", "calculadora"], ["Estaciones", "estaciones"], ["Planes", "planes"], ["Carrier Empresas", "empresas"]].map(([label, id]) => (
              <li key={id}><a className={LINK_CLASS} href={`#${id}`} data-testid={`footer-link-${id}`}>{label}</a></li>
            ))}
          </FooterColumn>
          <FooterColumn title="Empresa">
            <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("about")}>Nosotros</button></li>
            <li><a className={LINK_CLASS} href="#beneficios">Ecosistema Carrier Pro</a></li>
            <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("partners")} data-testid="footer-partners">Alianzas comerciales</button></li>
            <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("careers")} data-testid="footer-careers">Trabaja con nosotros</button></li>
          </FooterColumn>
          <FooterColumn title="Contacto">
            <li><a className={LINK_CLASS} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp">+51 973 982 417</a></li>
            <li><a className={`${LINK_CLASS} break-all`} href={`mailto:${CORPORATE_EMAIL}`}>{CORPORATE_EMAIL}</a></li>
            <li className="text-white/55">Trujillo · Perú</li>
            <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("contact")} data-testid="footer-contact">Formulario de contacto</button></li>
          </FooterColumn>
          <FooterColumn title="Información">
            {LEGAL_LINKS.slice(0, 2).map((link) => <LegalLink key={link.label} link={link} />)}
            <li><a className={LINK_CLASS} href="#faq">Preguntas frecuentes</a></li>
            <LegalLink link={LEGAL_LINKS[2]} />
          </FooterColumn>
        </div>
      </div>

      <div className="container-cp mt-20 grid items-center gap-6 border-t border-white/10 pt-8 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 md:grid-cols-3 md:text-left">
        <div data-testid="footer-copyright">Copyright © Emay Tech {new Date().getFullYear()}</div>
        <div className="leading-relaxed md:text-center" data-testid="footer-credits">
          Diseñado y construido por<br />la increíble gente de Emay 💜
        </div>
        <div className="flex justify-center gap-5 md:justify-end" data-testid="footer-socials">
          {Object.entries(SOCIAL_LINKS).filter(([, url]) => url).map(([name, url]) => {
            const Icon = SOCIAL_ICONS[name];
            return (
              <a key={name} href={url} aria-label={name} target="_blank" rel="noopener noreferrer" data-testid={`footer-social-${name.toLowerCase()}`} className="text-white/55 transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-[#f5961d]">
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <nav aria-label={title} className="min-w-0">
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </nav>
  );
}

function LegalLink({ link }) {
  return (
    <li>
      {link.href ? <a href={link.href} className={LINK_CLASS}>{link.label}</a> : <span className="text-white/35">{link.label}<span className="mt-1 block text-[11px] text-white/25">Pendiente de publicación</span></span>}
    </li>
  );
}
