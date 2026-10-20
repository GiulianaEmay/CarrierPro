import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, QrCode, CreditCard, Building2, Sparkles } from "lucide-react";

const PLANS = [
  { id: "digital", name: "Carrier Digital", price: "19.90", icon: QrCode, cta: "ACTIVAR DIGITAL", tag: "Esencial", items: ["Membresía por placa", "Acceso mediante QR", "Beneficio de combustible", "Pago directo en Primax", "Soporte Carrier Pro"] },
  { id: "fleet", name: "Fleet Óptimo", price: "29.90", icon: CreditCard, cta: "ELEGIR FLEET ÓPTIMO", tag: "Más elegido", featured: true, items: ["Todo lo de Carrier Digital", "Acceso mediante QR", "Tarjeta física Carrier Pro", "Entrega de tarjeta programada"] },
];

const EMPRESAS = ["Membresías para la flota", "Condiciones corporativas", "Beneficios especiales para colaboradores"];

const reveal = (i = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.55, delay: i * 0.08 } });

export default function Plans({ onActivar }) {
  return (
    <section id="planes" data-testid="plans-section" className="relative section-y border-t border-white/10 overflow-hidden">
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#f5961d]/10 blur-[160px]" />
      <div className="container-cp">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <span className="section-label">Planes y membresías</span>
            <h2 className="h2-cp mt-5">Elige cómo <span className="text-[#f5961d]">empiezas a ahorrar.</span></h2>
          </div>
          <p className="text-white/60 text-base sm:text-lg max-w-md">Una membresía para reducir y optimizar los costos de tu vehículo, comenzando por el combustible en Primax.</p>
        </div>

        <GroupLabel>Para ti y tu vehículo</GroupLabel>
        <div className="grid md:grid-cols-2 gap-6">
          {PLANS.map((plan, i) => <PlanCard key={plan.id} plan={plan} index={i} onActivar={onActivar} />)}
        </div>

        <div id="empresas" className="scroll-mt-24" data-testid="empresas-section">
          <GroupLabel>Para empresas y flotas</GroupLabel>
          <motion.article {...reveal()} className="relative overflow-hidden rounded-[32px] border border-white/15 bg-[#0b0b0b] p-2">
            <div className="grid gap-2 lg:grid-cols-[1.4fr_1fr]">
              <div className="relative rounded-[26px] p-7 sm:p-10">
                <div className="absolute inset-0 dots-bg opacity-50" />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#f5961d]/15 text-[#f5961d]"><Building2 size={20} /></span>
                  <h3 className="font-display mt-6 text-3xl sm:text-4xl leading-tight">Carrier Empresas</h3>
                  <p className="font-display mt-1 text-xl sm:text-2xl text-[#f5961d]">Tu flota ahorra. Tu equipo también.</p>
                  <p className="mt-4 max-w-lg text-white/60">Para empresas e instituciones con flota: una propuesta corporativa para tu operación y tus colaboradores.</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-1">{EMPRESAS.map((item) => <CheckItem key={item}>{item}</CheckItem>)}</ul>
                </div>
              </div>
              <div className="flex flex-col justify-center rounded-[26px] border border-white/[0.06] bg-black p-7 sm:p-10">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Desde</div>
                <Price value="24.90" />
                <button onClick={() => onActivar("Carrier Empresas")} className="btn-primary mt-8 w-full" data-testid="plan-cta-empresas">SOLICITAR PLAN EMPRESA<ArrowRight size={18} /></button>
                <p className="mt-4 text-xs text-white/45">Sujeto a condiciones y validación corporativa.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

const GroupLabel = ({ children }) => (
  <div className="mt-14 mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
    {children}<span className="h-px flex-1 bg-white/10" />
  </div>
);

const Price = ({ value, dark }) => (
  <div className="mt-2 flex items-start gap-1.5">
    <span className={`mt-2 text-lg font-semibold ${dark ? "text-black/60" : "text-white/45"}`}>S/</span>
    <span className="font-display text-[64px] sm:text-[76px] leading-[0.9] tabular-nums">{value}</span>
    <span className={`mt-auto mb-3 font-mono text-[11px] uppercase leading-tight tracking-[0.14em] ${dark ? "text-black/60" : "text-white/45"}`}>/ unidad<br />/ mes</span>
  </div>
);

const CheckItem = ({ children, solid }) => (
  <li className="flex items-start gap-3 text-[15px] text-white/85">
    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${solid ? "bg-[#f5961d] text-black" : "bg-white/10 text-[#f5961d]"}`}>
      <Check size={12} strokeWidth={3} />
    </span>
    {children}
  </li>
);

function PlanCard({ plan, index, onActivar }) {
  const { featured } = plan;
  const Icon = plan.icon;
  return (
    <motion.article
      {...reveal(index)}
      data-testid={`plan-card-${plan.id}`}
      className={`relative flex flex-col rounded-[32px] p-2 ${featured ? "border border-[#f5961d]/60 bg-[#0d0904] shadow-[0_40px_100px_-40px_rgba(245,150,29,0.6)]" : "border border-white/10 bg-white/[0.02]"}`}
    >
      <div className={`relative overflow-hidden rounded-[26px] p-7 sm:p-8 ${featured ? "bg-[#f5961d] text-black" : "border border-white/[0.06] bg-[#0b0b0b]"}`}>
        <div className={`absolute inset-0 ${featured ? "diag-lines-dark opacity-[0.08]" : "dots-bg opacity-60"}`} />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${featured ? "bg-black text-[#f5961d]" : "bg-[#f5961d]/15 text-[#f5961d]"}`}><Icon size={18} /></span>
            <h3 className="font-display text-2xl leading-none whitespace-nowrap">{plan.name}</h3>
          </div>
          <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] ${featured ? "bg-black text-[#f5961d]" : "border border-white/15 text-white/55"}`}>
            {featured && <Sparkles size={11} />}{plan.tag}
          </span>
        </div>
        <div className="relative mt-8"><Price value={plan.price} dark={featured} /></div>
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-7 sm:px-6">
        <ul className="flex-1 space-y-4">{plan.items.map((item) => <CheckItem key={item} solid={featured}>{item}</CheckItem>)}</ul>
        <button onClick={() => onActivar(plan.name)} className={`${featured ? "btn-primary" : "btn-secondary"} mt-9 w-full`} data-testid={`plan-cta-${plan.id}`}>
          {plan.cta}<ArrowRight size={18} />
        </button>
      </div>
    </motion.article>
  );
}
