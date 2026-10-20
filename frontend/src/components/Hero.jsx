import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, MessageCircle, Fuel } from "lucide-react";
import { WHATSAPP_URL } from "../App";

const FEATURES = [
  "Membresía por unidad",
  "Pago directo en estación",
  "Facturación directa de la estación",
  "Activación rápida",
];

export default function Hero({ onActivar }) {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative isolate min-h-[100svh] pt-28 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 dots-bg opacity-60" />
      <div className="absolute inset-0 -z-10 glow-orange" />
      <div className="absolute -top-40 -left-40 -z-10 h-[480px] w-[480px] rounded-full bg-[#f5961d]/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-32 -z-10 h-[520px] w-[520px] rounded-full bg-[#f5961d]/8 blur-[140px]" />

      <div className="container-cp relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label"
              data-testid="hero-tag"
            >
              <Fuel size={12} /> Precio convenio en combustible con Primax
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display mt-6 text-[44px] leading-[0.95] sm:text-6xl lg:text-[78px] lg:leading-[0.92] tracking-tight"
              data-testid="hero-headline"
            >
              PAGA MENOS
              <br />
              <span className="text-[#f5961d]">DESDE HOY</span>
              <br />
              EN CADA CARGA.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
              data-testid="hero-subheadline"
            >
              Carrier Pro consolida tu consumo junto al de cientos de transportistas y te da el precio costo. Sin intermediarios, sin anticipos, sin costos ocultos. Paga directo en la estación.{" "}
              <span className="text-white">
                Los beneficios de una gran flota. Sin ser una gran flota.
              </span>
            </motion.p>

            {/* Feature chips */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap gap-2"
              data-testid="hero-features"
            >
              {FEATURES.map((f) => (
                <div
                  key={f}
                  className="chip"
                  data-testid={`hero-feature-${f.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#f5961d]/20 text-[#f5961d]">
                    <Check size={11} strokeWidth={3} />
                  </span>
                  {f}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center"
            >
              <button
                onClick={onActivar}
                className="btn-primary group"
                data-testid="hero-cta-primary"
              >
                QUIERO ACTIVAR MI UNIDAD
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                data-testid="hero-cta-whatsapp"
              >
                <MessageCircle size={18} />
                Hablar por WhatsApp
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-3 text-xs text-white/40 font-mono uppercase tracking-[0.18em]"
            >
              <span className="inline-block h-1 w-1 rounded-full bg-[#f5961d]" />
              <span>Trujillo · La Libertad · Próximamente nacional</span>
            </motion.div>
          </div>

          {/* Right: truck illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[360px] sm:h-[440px] lg:h-[520px] w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden"
            data-testid="hero-truck-illustration"
          >
            <TruckRoute />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">
        <span>Desliza</span>
        <span className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

function TruckRoute() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-black" />

      {/* Stars / city dots */}
      <div className="absolute inset-0 opacity-60">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-px w-px bg-white rounded-full"
            style={{
              top: `${(i * 37) % 65}%`,
              left: `${(i * 53) % 100}%`,
              opacity: 0.2 + ((i * 17) % 80) / 200,
            }}
          />
        ))}
      </div>

      {/* Road */}
      <div className="absolute bottom-20 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-[78px] left-0 right-0 h-[2px] overflow-hidden">
        <div className="h-full w-[200%] flex marquee-track">
          {Array.from({ length: 80 }).map((_, i) => (
            <span key={i} className="mx-3 inline-block h-[2px] w-6 bg-[#f5961d]/60 rounded" />
          ))}
        </div>
      </div>

      {/* Stations along the route */}
      {[20, 50, 80].map((left, i) => (
        <div
          key={i}
          className="absolute bottom-24 flex flex-col items-center"
          style={{ left: `${left}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative">
            <span
              className="absolute inset-0 -m-2 rounded-full bg-[#f5961d]/30 pulse-ring"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
            <span className="relative block h-3 w-3 rounded-full bg-[#f5961d] shadow-[0_0_18px_rgba(245,150,29,0.8)]" />
          </div>
          <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
            Estación
          </span>
        </div>
      ))}

      {/* Truck */}
      <div className="absolute bottom-[88px] left-0 right-0 h-16">
        <div className="truck-anim h-full inline-block">
          <Truck />
        </div>
      </div>

      {/* Foreground info card */}
      <div className="absolute top-6 left-6 right-6 sm:left-8 sm:right-8 flex items-center justify-between">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg px-4 py-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Ruta
          </div>
          <div className="text-sm font-semibold mt-0.5">Trujillo → Nivel nacional</div>
        </div>
        <div className="rounded-2xl border border-[#f5961d]/30 bg-[#f5961d]/10 backdrop-blur-lg px-4 py-3 text-right">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5961d]">
            Estaciones afiliadas
          </div>
          <div className="text-sm font-semibold mt-0.5 flex items-center justify-end gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5961d] flicker" />
            En expansión
          </div>
        </div>
      </div>
    </div>
  );
}

function Truck() {
  return (
    <svg viewBox="0 0 220 70" className="h-14 w-auto drop-shadow-[0_8px_18px_rgba(245,150,29,0.35)]">
      {/* trailer */}
      <rect x="2" y="14" width="120" height="36" rx="3" fill="#1a1a1a" stroke="#f5961d" strokeWidth="1.5" />
      <rect x="10" y="20" width="22" height="10" fill="#f5961d" opacity="0.85" />
      <text x="38" y="35" fill="#fff" fontSize="9" fontFamily="monospace" letterSpacing="1">CARRIER PRO</text>
      <rect x="38" y="40" width="50" height="2" fill="#f5961d" opacity="0.6" />
      {/* cabin */}
      <path d="M 122 18 L 160 18 L 175 30 L 175 50 L 122 50 Z" fill="#0d0d0d" stroke="#f5961d" strokeWidth="1.5"/>
      <rect x="140" y="22" width="22" height="12" fill="#f5961d" opacity="0.5" />
      {/* lights */}
      <circle cx="174" cy="46" r="1.5" fill="#fff8a8" />
      {/* wheels */}
      <circle cx="25" cy="55" r="7" fill="#000" stroke="#fff" strokeWidth="1.5" />
      <circle cx="50" cy="55" r="7" fill="#000" stroke="#fff" strokeWidth="1.5" />
      <circle cx="100" cy="55" r="7" fill="#000" stroke="#fff" strokeWidth="1.5" />
      <circle cx="150" cy="55" r="7" fill="#000" stroke="#fff" strokeWidth="1.5" />
      <circle cx="170" cy="55" r="7" fill="#000" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}
