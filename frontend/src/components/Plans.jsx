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
      className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden"
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
        <div className="mt-10 grid lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
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
      className={`relative rounded-[28px] flex flex-col h-full transition-all duration-500 ${
        accent
          ? "border border-[#f5961d]/50 bg-gradient-to-b from-[#f5961d]/[0.12] via-black to-black shadow-[0_30px_80px_-30px_rgba(245,150,29,0.5)] lg:scale-[1.03] lg:-translate-y-2"
          : "border border-white/10 bg-white/[0.025] hover:border-white/20"
      }`}
      data-testid={`plan-card-${plan.id}`}
    >
      {/* Badge */}
      {accent && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#f5961d] text-black px-3.5 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] shadow-lg shadow-[#f5961d]/30">
          <Sparkles size={11} strokeWidth={2.5} /> {plan.tag}
        </div>
      )}

      <div className="p-7 sm:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                accent
                  ? "bg-[#f5961d] text-black"
                  : "border border-white/15 bg-white/5 text-[#f5961d]"
              }`}
            >
              <Icon size={20} strokeWidth={1.8} />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                Plan
              </div>
              <h3 className="font-display text-2xl leading-none mt-1">{plan.nombre}</h3>
            </div>
          </div>
          {!accent && (
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] rounded-full border border-white/15 px-2.5 py-1 text-white/55">
              {plan.tag}
            </span>
          )}
        </div>

        {/* Tagline */}
        <p className="mt-5 font-display text-xl sm:text-2xl leading-snug">
          {plan.tagline}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-white/50 text-base">S/</span>
          <span className="font-display text-[64px] sm:text-[72px] leading-none tracking-tight">
            {plan.precio}
          </span>
          <span className="text-white/50 text-sm">/ unidad · mes</span>
        </div>

        <p className="mt-3 text-sm text-white/55 leading-relaxed min-h-[60px]">
          {plan.descripcion}
        </p>

        {/* Includes previous */}
        {plan.incluyeAnterior && (
          <div
            className={`mt-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium self-start ${
              accent
                ? "border-[#f5961d]/40 bg-[#f5961d]/10 text-[#f5961d]"
                : "border-white/15 bg-white/5 text-white/75"
            }`}
          >
            <Plus size={13} strokeWidth={2.5} />
            Todo lo del plan{" "}
            <span className={accent ? "font-bold" : "font-semibold text-white"}>
              {plan.incluyeAnterior}
            </span>
          </div>
        )}

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Grouped benefits */}
        <div className="space-y-6 flex-1">
          {plan.groups.map((g) => (
            <div key={g.title}>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45 mb-3">
                {g.title}
              </div>
              <ul className="space-y-3">
                {g.items.map((it) => {
                  const ItIcon = it.icon;
                  return (
                    <li key={it.t} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                          accent
                            ? "bg-[#f5961d]/15 border border-[#f5961d]/30 text-[#f5961d]"
                            : "bg-white/5 border border-white/10 text-white/70"
                        }`}
                      >
                        <ItIcon size={14} strokeWidth={1.8} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white leading-tight">
                          {it.t}
                        </div>
                        <div className="text-xs text-white/55 mt-0.5 leading-snug">
                          {it.s}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onActivar}
          className={`mt-8 group inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all ${
            accent
              ? "bg-[#f5961d] text-black hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgba(245,150,29,0.7)]"
              : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40"
          }`}
          data-testid={`plan-cta-${plan.id}`}
        >
          Activar {plan.nombre}
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
