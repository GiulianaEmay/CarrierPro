import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const PLANS = [
  {
    id: "carrier",
    nombre: "Carrier",
    precio: 50,
    tag: "Básico",
    descripcion:
      "Ideal para transportistas independientes que buscan reducir sus gastos operativos desde la primera carga.",
    features: [
      "Acceso a beneficios exclusivos en estaciones afiliadas",
      "Identificación digital mediante código QR",
      "Pago directo en estación (efectivo, tarjeta, Yape u otros)",
      "Facturación emitida directamente por la estación",
      "Sin tarjetas especiales ni convenios empresariales",
      "Afiliación por unidad",
      "Soporte directo",
      "Cancelación flexible, sin contratos largos",
    ],
    accent: false,
  },
  {
    id: "pro",
    nombre: "Carrier Pro",
    precio: 75,
    tag: "Recomendado",
    descripcion:
      "Todo lo incluido en Carrier, más herramientas para controlar mejor la operación de cada unidad.",
    features: [
      "Todo lo incluido en plan Carrier",
      "Historial digital de todas las cargas por unidad",
      "Dashboard de consumo y gastos por vehículo",
      "Reportes semanales y mensuales",
      "Seguimiento detallado para detectar variaciones",
      "Métricas de rendimiento por unidad",
      "Mayor visibilidad sobre costos de combustible",
      "Soporte prioritario",
    ],
    accent: true,
  },
  {
    id: "plus",
    nombre: "Carrier Plus",
    precio: 80,
    tag: "Operación completa",
    descripcion:
      "Todo lo incluido en Carrier Pro, además de beneficios para una gestión más completa de tu operación.",
    features: [
      "Todo lo incluido en plan Carrier Pro",
      "Registro digital de viáticos por viaje",
      "Registro y control de gastos de peajes",
      "Reportes consolidados de operación",
      "Convenios y beneficios con empresas aliadas",
      "Descuentos en servicios para transportistas",
      "Acceso a la comunidad Carrier Pro",
      "Prioridad en nuevas funciones · Soporte preferente",
    ],
    accent: false,
  },
];

export default function Plans({ onActivar }) {
  return (
    <section
      id="planes"
      data-testid="plans-section"
      className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[460px] w-[860px] rounded-full bg-[#f5961d]/10 blur-[160px]" />

      <div className="container-cp">
        <div className="text-center max-w-3xl mx-auto">
          <span className="section-label">Planes</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-tight">
            Elige el plan <br />
            <span className="text-[#f5961d]">para tu unidad.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg">
            Afiliación por unidad. Sin contratos largos. Cambia o cancela cuando quieras.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {PLANS.map((p, i) => (
            <PlanCard key={p.id} plan={p} index={i} onActivar={onActivar} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-mono uppercase tracking-[0.22em] text-white/40">
          Precios en soles (S/) · IGV incluido · Por unidad / mes
        </p>
      </div>
    </section>
  );
}

function PlanCard({ plan, index, onActivar }) {
  const accent = plan.accent;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`relative rounded-[28px] p-7 sm:p-8 flex flex-col h-full ${
        accent
          ? "border border-[#f5961d]/40 bg-gradient-to-b from-[#f5961d]/[0.10] via-black to-black shadow-[0_30px_80px_-30px_rgba(245,150,29,0.45)]"
          : "border border-white/10 bg-white/[0.025]"
      }`}
      data-testid={`plan-card-${plan.id}`}
    >
      {accent && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#f5961d] text-black px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em]">
          <Sparkles size={11} strokeWidth={2.5} /> Más elegido
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.22em] text-white/40">
            Plan
          </div>
          <h3 className={`font-display text-2xl sm:text-3xl mt-1 ${accent ? "text-white" : "text-white"}`}>
            {plan.nombre}
          </h3>
        </div>
        <span
          className={`text-[10px] font-mono uppercase tracking-[0.2em] rounded-full px-2.5 py-1 ${
            accent
              ? "bg-[#f5961d] text-black"
              : "border border-white/20 text-white/60"
          }`}
        >
          {plan.tag}
        </span>
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-white/50 text-base">S/</span>
        <span className="font-display text-6xl sm:text-7xl leading-none tracking-tight">
          {plan.precio}
        </span>
        <span className="text-white/50 text-sm">/ unidad · mes</span>
      </div>

      <p className="mt-4 text-sm text-white/60 leading-relaxed">{plan.descripcion}</p>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <ul className="space-y-2.5 text-sm flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-white/75">
            <span
              className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                accent ? "bg-[#f5961d] text-black" : "bg-white/10 text-[#f5961d]"
              }`}
            >
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="leading-snug">{f}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onActivar}
        className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
          accent
            ? "bg-[#f5961d] text-black hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_rgba(245,150,29,0.6)]"
            : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
        }`}
        data-testid={`plan-cta-${plan.id}`}
      >
        Activar {plan.nombre}
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
