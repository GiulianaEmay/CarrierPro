import React from "react";
import Logo from "./Logo";
import { WHATSAPP_URL } from "../App";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 sm:py-14" data-testid="footer">
      <div className="container-cp grid sm:grid-cols-3 gap-8 items-start">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Los beneficios de una gran flota. Sin ser una gran flota.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Secciones</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><a href="#como-funciona" className="hover:text-white">Cómo funciona</a></li>
            <li><a href="#estaciones" className="hover:text-white">Estaciones</a></li>
            <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
            <li><a href="#planes" className="hover:text-white">Planes</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">Contacto</div>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5961d]">
                WhatsApp: +51 973 982 417
              </a>
            </li>
            <li>Trujillo · La Libertad · Perú</li>
          </ul>
        </div>
      </div>
      <div className="container-cp mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-xs text-white/40 font-mono">
          © {new Date().getFullYear()} Carrier Pro. Todos los derechos reservados.
        </div>
        <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/30">
          Made in Trujillo · Perú
        </div>
      </div>
    </footer>
  );
}
