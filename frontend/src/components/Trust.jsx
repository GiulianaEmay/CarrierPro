import React from "react";
import { motion } from "framer-motion";
import { QrCode, Fuel, Receipt } from "lucide-react";

const BLOCKS = [
  { icon: QrCode, title: "Activa tu membresía", text: "Carrier Pro registra tu unidad y habilita tu acceso al beneficio." },
  { icon: Fuel, title: "Abastece y paga en Primax", text: "Presenta tu identificación Carrier Pro y realiza el pago directamente en la estación." },
  { icon: Receipt, title: "Recibe tu comprobante", text: "Primax procesa la venta y emite el comprobante correspondiente." },
];

export default function Trust() {
  return (
    <section id="confianza" data-testid="trust-section" className="py-24 sm:py-32 border-t border-white/10">
      <div className="container-cp">
        <span className="section-label">Confianza</span>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[56px] leading-tight">Tu dinero siempre <span className="text-[#f5961d]">bajo tu control.</span></h2>
        <p className="mt-5 max-w-2xl text-white/65 text-base sm:text-lg">Carrier Pro gestiona tu membresía y el acceso al beneficio.<br />El abastecimiento se paga directamente en Primax.</p>
        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {BLOCKS.map(({ icon: Icon, title, text }, i) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="card p-7" data-testid={`trust-block-${i}`}>
              <div className="flex justify-between items-center"><Icon size={24} className="text-[#f5961d]" /><span className="font-mono text-xs text-white/40">0{i + 1}</span></div>
              <h3 className="font-display text-2xl mt-6">{title}</h3><p className="mt-3 text-white/60 leading-relaxed">{text}</p>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 pt-6 border-t border-white/10 text-sm text-white/70">Carrier Pro habilita el beneficio. <span className="text-white">Primax cobra y emite tu comprobante.</span></p>
      </div>
    </section>
  );
}
