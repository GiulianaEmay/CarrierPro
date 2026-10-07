import React from "react";
import { Linkedin, Facebook, Instagram, Music2 } from "lucide-react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../App";
import { CORPORATE_EMAIL, SOCIAL_LINKS, LEGAL_LINKS } from "../config/corporate";

const SOCIAL_ICONS = { LinkedIn: Linkedin, Facebook, Instagram, TikTok: Music2 };
const LINK_CLASS = "text-left hover:text-[#f5961d] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f5961d]";

export default function Footer({ onOpenCorporate }) {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 sm:pt-20 pb-10" data-testid="footer">
      <div className="container-cp grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.1fr_0.85fr_1fr_1.3fr_1fr] gap-x-8 gap-y-12">
        <div>
          <Logo />
          <p className="mt-5 text-white/75 leading-relaxed">Una sola membresía.<br />Múltiples beneficios.</p>
          <div className="flex gap-4 mt-5">{Object.entries(SOCIAL_LINKS).filter(([, url]) => url).map(([name, url]) => {
            const Icon = SOCIAL_ICONS[name];
            return <a key={name} href={url} aria-label={name} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}><Icon size={20} /></a>;
          })}</div>
        </div>
        <FooterColumn title="Carrier Pro">
          {[["Cómo funciona", "como-funciona"], ["Beneficios", "beneficios"], ["Estaciones", "estaciones"], ["Planes", "planes"], ["Carrier Empresas", "empresas"]].map(([label, id]) => <li key={id}><a className={LINK_CLASS} href={`#${id}`}>{label}</a></li>)}
        </FooterColumn>
        <FooterColumn title="Empresa">
          <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("about")}>Nosotros</button></li>
          <li><a className={LINK_CLASS} href="#beneficios">Ecosistema Carrier Pro</a></li>
          <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("partners")} data-testid="footer-partners">Alianzas comerciales</button></li>
          <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("careers")} data-testid="footer-careers">Trabaja con nosotros</button></li>
        </FooterColumn>
        <FooterColumn title="Contacto">
          <li><a className={LINK_CLASS} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">+51 973 982 417</a></li>
          <li><a className={`${LINK_CLASS} break-words`} href={`mailto:${CORPORATE_EMAIL}`}>{CORPORATE_EMAIL}</a></li>
          <li>Trujillo · Perú</li>
          <li><button className={LINK_CLASS} onClick={() => onOpenCorporate("contact")} data-testid="footer-contact">Formulario de contacto</button></li>
        </FooterColumn>
        <FooterColumn title="Información">
          {LEGAL_LINKS.slice(0, 2).map(link => <LegalLink key={link.label} link={link} />)}
          <li><a className={LINK_CLASS} href="#faq">Preguntas frecuentes</a></li>
          <LegalLink link={LEGAL_LINKS[2]} />
        </FooterColumn>
      </div>
      <div className="container-cp mt-14 pt-6 border-t border-white/10 text-xs text-white/45">© {new Date().getFullYear()} Carrier Pro. Todos los derechos reservados.</div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return <nav aria-label={title} className="min-w-0"><h2 className="font-mono text-xs uppercase tracking-[0.15em] text-white">{title}</h2><ul className="mt-6 space-y-4 text-sm text-white/60">{children}</ul></nav>;
}
function LegalLink({ link }) {
  return <li>{link.href ? <a href={link.href} className={LINK_CLASS}>{link.label}</a> : <span className="text-white/40">{link.label}<span className="block text-xs mt-1">Pendiente de publicación</span></span>}</li>;
}
