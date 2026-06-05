import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../App";

export default function FinalCTA({ onActivar }) {
  return (
    <section
      id="cta-final"
      data-testid="final-cta-section"
      className="relative py-28 sm:py-36 border-t border-white/5 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-black to-[#0a0a0a]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[640px] w-[1200px] rounded-full bg-[#f5961d]/15 blur-[140px]" />
      <div className="absolute inset-0 -z-10 dots-bg opacity-50" />

      {/* Big background text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <div className="font-display text-[110px] sm:text-[200px] lg:text-[280px] leading-none text-white/[0.025] text-center tracking-tighter">
          CARRIER PRO
        </div>
      </div>

      <div className="container-cp relative text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          Último paso
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display mt-5 text-5xl sm:text-7xl lg:text-[96px] leading-[0.92] tracking-tight"
        >
          Cada carga
          <br />
          <span className="text-[#f5961d]">cuenta.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-white/70 text-lg sm:text-xl max-w-2xl mx-auto"
        >
          Empieza hoy y descubre cómo Carrier Pro puede ayudarte a optimizar tu operación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <button
            onClick={onActivar}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f5961d] px-10 py-5 text-base sm:text-lg font-bold text-black transition-all hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_25px_70px_-15px_rgba(245,150,29,0.7)]"
            data-testid="final-cta-primary"
          >
            ACTIVAR MI UNIDAD
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-testid="final-cta-whatsapp"
          >
            <MessageCircle size={18} />
            Hablar por WhatsApp
          </a>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-white/30">
          <span className="h-1 w-1 rounded-full bg-[#f5961d]" />
          <span>Activación inmediata · sin contratos largos</span>
        </div>
      </div>
    </section>
  );
}
