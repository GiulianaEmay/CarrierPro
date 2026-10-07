import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, QrCode, CreditCard, Building2 } from "lucide-react";

const PLANS = [
  { id: "digital", name: "Carrier Digital", price: "19.90", icon: QrCode, cta: "ACTIVAR DIGITAL", items: ["Membresía por placa", "Acceso mediante QR", "Beneficio de combustible", "Pago directo en Primax", "Soporte Carrier Pro"] },
  { id: "fleet", name: "Fleet Óptimo", price: "29.90", icon: CreditCard, cta: "ELEGIR FLEET ÓPTIMO", items: ["Todo lo de Carrier Digital", "Acceso mediante QR", "Tarjeta física Carrier Pro", "Entrega de tarjeta programada"] },
];

export default function Plans({ onActivar }) {
  return (
    <section id="planes" data-testid="plans-section" className="relative py-24 sm:py-32 border-t border-white/10">
      <div className="container-cp">
        <span className="section-label">Planes y membresías</span>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-tight">Elige cómo <span className="text-[#f5961d]">empiezas a ahorrar.</span></h2>
        <p className="mt-5 text-white/60 max-w-xl">Una membresía para reducir y optimizar los costos de tu vehículo, comenzando por el combustible en Primax.</p>
        <h3 className="font-mono text-xs tracking-[0.18em] text-white/60 mt-12 mb-8">PARA TI Y TU VEHÍCULO</h3>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.article key={plan.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} data-testid={`plan-card-${plan.id}`} className={`relative rounded-[28px] p-7 sm:p-10 flex flex-col border ${i ? "border-[#f5961d]/60 bg-gradient-to-b from-[#f5961d]/20 to-black shadow-[0_20px_80px_-30px_rgba(245,150,29,0.4)]" : "border-white/15 bg-white/[0.025]"}`}>
                {i === 1 && <span className="absolute -top-4 left-7 rounded-full bg-[#f5961d] px-4 py-2 text-black font-mono text-xs">MÁS ELEGIDO</span>}
                <Icon size={28} className="text-[#f5961d] mb-5" />
                <h4 className="font-display text-3xl">{plan.name}</h4>
                <p className="mt-5 font-mono text-4xl sm:text-5xl tracking-tight">S/{plan.price}</p>
                <p className="mt-2 text-white/60 text-sm">/ unidad / mes</p>
                <ul className="my-8 space-y-4 flex-1">{plan.items.map(item => <li key={item} className="flex items-start gap-3 text-white/80"><Check size={18} className="shrink-0 mt-1 text-[#f5961d]" />{item}</li>)}</ul>
                <button onClick={() => onActivar(plan.name)} className={i ? "btn-primary w-full" : "btn-secondary w-full"} data-testid={`plan-cta-${plan.id}`}>{plan.cta}<ArrowRight size={18} /></button>
              </motion.article>
            );
          })}
        </div>
        <div id="empresas" className="pt-16 scroll-mt-24" data-testid="empresas-section">
          <h3 className="font-mono text-xs tracking-[0.18em] text-white/60 mb-6">PARA EMPRESAS Y FLOTAS</h3>
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-[28px] border border-white/20 bg-gradient-to-br from-white/[0.07] to-black p-7 sm:p-10 lg:p-12 grid lg:grid-cols-[1.3fr_1fr] gap-10">
            <div>
              <Building2 className="text-[#f5961d] mb-5" size={30} />
              <h4 className="font-display text-3xl sm:text-4xl">Carrier Empresas</h4>
              <p className="font-display mt-3 text-2xl text-[#f5961d]">Tu flota ahorra. Tu equipo también.</p>
              <p className="mt-4 text-white/60">Para empresas e instituciones con flota: una propuesta corporativa para tu operación y tus colaboradores.</p>
              <ul className="mt-6 space-y-3">{["Membresías para la flota", "Condiciones corporativas", "Beneficios especiales para colaboradores"].map(item => <li key={item} className="flex gap-3"><Check size={18} className="text-[#f5961d] shrink-0 mt-1" />{item}</li>)}</ul>
            </div>
            <div className="flex flex-col justify-center lg:border-l lg:border-white/10 lg:pl-10">
              <p className="font-mono text-4xl sm:text-5xl">S/24.90</p>
              <p className="mt-2 text-sm text-white/60">/ unidad / mes</p>
              <button onClick={() => onActivar("Carrier Empresas")} className="btn-primary mt-7" data-testid="plan-cta-empresas">SOLICITAR PLAN EMPRESA<ArrowRight size={18} /></button>
              <p className="mt-4 text-xs text-white/50">Sujeto a condiciones y validación corporativa.</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
