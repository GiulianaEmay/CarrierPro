import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowRight,
  Fuel,
  QrCode,
  Receipt,
  Headphones,
  LineChart,
  History,
  FileBarChart,
  Activity,
  Wallet,
  Route,
  Users,
  Star,
  Crown,
  Layers,
  Plus,
} from "lucide-react";

const PLANS = [
  {
    id: "carrier",
    nombre: "Carrier",
    precio: 50,
    tag: "Esencial",
    accent: "white",
    icon: Layers,
    tagline: "Empieza a ahorrar desde tu primera carga.",
    descripcion:
      "Ideal para transportistas independientes que buscan reducir gastos operativos sin complicaciones.",
    incluyeAnterior: null,
    groups: [
      {
        title: "Beneficio principal",
        items: [
          { icon: Fuel, t: "Beneficios en estaciones afiliadas", s: "Mejores condiciones en cada carga" },
          { icon: Wallet, t: "Pago directo en estación", s: "Efectivo, tarjeta, Yape u otros" },
          { icon: Receipt, t: "Facturación directa", s: "La estación factura a tu RUC" },
        ],
      },
      {
        title: "Acceso & soporte",
        items: [
          { icon: QrCode, t: "Identificación digital por QR", s: "Acceso rápido y seguro al beneficio" },
          { icon: Headphones, t: "Soporte directo", s: "Por WhatsApp · sin contratos largos" },
        ],
      },
    ],
  },
  {
    id: "pro",
    nombre: "Carrier Pro",
    precio: 75,
    tag: "Más elegido",
    accent: "orange",
    icon: Star,
    tagline: "Control real de cada unidad de tu operación.",
    descripcion:
      "Para transportistas que quieren visibilidad y reportes del consumo de cada vehículo.",
    incluyeAnterior: "Carrier",
    groups: [
      {
        title: "Control operativo",
        items: [
          { icon: History, t: "Historial digital de cargas", s: "Cada carga, fecha y monto por unidad" },
          { icon: LineChart, t: "Dashboard de consumo", s: "Indicadores por vehículo en tiempo real" },
          { icon: FileBarChart, t: "Reportes semanales y mensuales", s: "Para control operativo y contable" },
        ],
      },
      {
        title: "Visibilidad",
        items: [
          { icon: Activity, t: "Seguimiento detallado", s: "Detecta variaciones o consumos inusuales" },
          { icon: Headphones, t: "Soporte prioritario", s: "Atención preferente para miembros Pro" },
        ],
      },
    ],
  },
  {
    id: "plus",
    nombre: "Carrier Plus",
    precio: 80,
    tag: "Operación completa",
    accent: "white",
    icon: Crown,
    tagline: "Gestión integral de viajes, gastos y comunidad.",
    descripcion:
      "Para quienes buscan una gestión 360° de su operación, con descuentos y comunidad.",
    incluyeAnterior: "Carrier Pro",
    groups: [
      {
        title: "Gestión de viaje",
        items: [
          { icon: Route, t: "Registro de viáticos por viaje", s: "Asocia gastos a cada operación" },
          { icon: Wallet, t: "Control de peajes", s: "Registro y reporte automático" },
          { icon: FileBarChart, t: "Reportes consolidados", s: "Visión completa de tu operación" },
        ],
      },
      {
        title: "Comunidad & beneficios extra",
        items: [
          { icon: Sparkles, t: "Convenios y descuentos", s: "Servicios seleccionados para transportistas" },
          { icon: Users, t: "Comunidad Carrier Pro", s: "Contactos y oportunidades de negocio" },
          { icon: Headphones, t: "Soporte preferente", s: "Y prioridad en nuevas funciones" },
        ],
      },
    ],
  },
];

const COMMON = [
  "Afiliación por unidad",
  "Sin contratos de permanencia",
  "Sin tarjetas especiales",
  "Cancela cuando quieras",
];

export default function Plans({ onActivar }) {
  const [highlighted, setHighlighted] = useState("pro");

  return (
    <section
      id="planes"
      data-testid="plans-section"
      className="relative py-24 sm:py-32 lg:py-40 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute top-20 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-[1000px] rounded-full bg-[#f5961d]/10 blur-[180px]" />

      <div className="container-cp">
        {/* Header */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-end">
          <div>
            <span className="section-label">Planes & precios</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-tight">
              Elige el plan <br />
              <span className="text-[#f5961d]">para tu unidad.</span>
            </h2>
          </div>
          <p className="text-white/65 text-base sm:text-lg max-w-md">
            Cada plan es <span className="text-white">por unidad/mes</span>. Empieza con lo esencial o escala a herramientas de control y comunidad cuando lo necesites.
          </p>
        </div>

        {/* Common in all plans */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 flex flex-wrap items-center gap-x-6 gap-y-2.5">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f5961d]">
            Incluido en todos los planes
          </div>
          {COMMON.map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 text-sm text-white/75">
              <Check size={14} className="text-[#f5961d]" strokeWidth={2.5} />
              {c}
            </span>
          ))}
        </div>

        {/* Plan cards */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-5 items-stretch">
          {PLANS.map((p, i) => (
            <PlanCard
              key={p.id}
              plan={p}
              index={i}
              isHighlighted={highlighted === p.id}
              onHover={() => setHighlighted(p.id)}
              onActivar={onActivar}
            />
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="font-mono uppercase tracking-[0.22em] text-white/40">
            Precios en soles (S/) · IGV incluido · Por unidad / mes
          </span>
          <span className="text-white/50">
            ¿Tienes más de 5 unidades?{" "}
            <button
              onClick={onActivar}
              className="text-[#f5961d] underline-offset-4 hover:underline"
              data-testid="plans-fleet-cta"
            >
              Cotiza por flota →
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index, isHighlighted, onHover, onActivar }) {
  const accent = plan.accent === "orange";
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={onHover}
      className={`group relative flex h-full flex-col rounded-[32px] p-2 transition-[transform,box-shadow,border-color] duration-500 ${
        accent
          ? "border border-[#f5961d]/60 bg-[#0d0904] shadow-[0_40px_100px_-40px_rgba(245,150,29,0.65)] lg:-translate-y-3"
          : `border bg-white/[0.02] ${isHighlighted ? "border-white/25" : "border-white/10"}`
      }`}
      data-testid={`plan-card-${plan.id}`}
    >
      <div
        className={`relative overflow-hidden rounded-[26px] p-6 sm:p-7 ${
          accent ? "bg-[#f5961d] text-black" : "border border-white/[0.06] bg-[#0b0b0b] text-white"
        }`}
      >
        <div className={`absolute inset-0 ${accent ? "diag-lines-dark opacity-[0.08]" : "dots-bg opacity-60"}`} />
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${accent ? "bg-black text-[#f5961d]" : "bg-[#f5961d]/15 text-[#f5961d]"}`}>
              <Icon size={17} strokeWidth={2} />
            </span>
            <h3 className="font-display text-xl leading-none whitespace-nowrap">{plan.nombre}</h3>
          </div>
          <span className={`inline-flex shrink-0 whitespace-nowrap items-center gap-1 rounded-full px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.2em] ${accent ? "bg-black text-[#f5961d]" : "border border-white/15 text-white/55"}`}>
            {accent && <Sparkles size={10} />} {plan.tag}
          </span>
        </div>
        <div className="relative mt-8 flex items-start gap-1.5">
          <span className={`mt-3 text-lg font-semibold ${accent ? "text-black/60" : "text-white/45"}`}>S/</span>
          <span className="font-display text-[84px] sm:text-[96px] leading-[0.85] tabular-nums" data-testid={`plan-price-${plan.id}`}>{plan.precio}</span>
          <span className={`mt-auto mb-2 text-xs font-mono uppercase tracking-[0.16em] ${accent ? "text-black/60" : "text-white/45"}`}>/ unidad<br />/ mes</span>
        </div>
        <p className={`relative mt-6 font-display text-lg leading-snug ${accent ? "text-black" : "text-white/90"}`}>{plan.tagline}</p>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-6 sm:px-6">
        <p className="text-sm leading-relaxed text-white/55 lg:min-h-[66px]">{plan.descripcion}</p>

        {plan.incluyeAnterior && (
          <div className={`mt-5 inline-flex items-center gap-2 self-start rounded-full border px-3.5 py-2 text-xs font-medium ${accent ? "border-[#f5961d]/40 bg-[#f5961d]/10 text-[#f5961d]" : "border-white/15 bg-white/5 text-white/75"}`}>
            <Plus size={13} strokeWidth={2.5} />
            Todo lo del plan <span className="font-semibold">{plan.incluyeAnterior}</span>
          </div>
        )}

        <div className="mt-7 flex-1 space-y-7">
          {plan.groups.map((g) => (
            <div key={g.title}>
              <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                {g.title}
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <ul className="space-y-3.5">
                {g.items.map((it) => (
                  <li key={it.t} className="flex items-start gap-3">
                    <span className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${accent ? "bg-[#f5961d] text-black" : "bg-white/10 text-[#f5961d]"}`}>
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-medium leading-tight text-white">{it.t}</div>
                      <div className="mt-1 text-xs leading-snug text-white/45">{it.s}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button
          onClick={onActivar}
          className={`group/btn mt-9 inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-[transform,background-color,box-shadow,border-color] duration-300 hover:-translate-y-0.5 ${
            accent
              ? "bg-[#f5961d] text-black hover:shadow-[0_20px_50px_-12px_rgba(245,150,29,0.7)]"
              : "border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10"
          }`}
          data-testid={`plan-cta-${plan.id}`}
        >
          Activar {plan.nombre}
          <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
