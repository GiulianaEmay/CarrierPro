import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Minus, Plus, MessageCircle, Fuel, Share2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "../App";
import {
  SAVINGS_PER_GALLON,
  GALLONS_MIN,
  GALLONS_MAX,
  GALLONS_STEP,
  GALLONS_DEFAULT,
} from "../config";

const fmt = (n) => n.toLocaleString("es-PE", { maximumFractionDigits: 0 });
const MAX_UNITS = 50;

export default function SavingsCalculator() {
  const [gallons, setGallons] = useState(GALLONS_DEFAULT);
  const [units, setUnits] = useState(1);
  const monthly = gallons * units * SAVINGS_PER_GALLON;
  const yearly = monthly * 12;
  const pct = ((gallons - GALLONS_MIN) / (GALLONS_MAX - GALLONS_MIN)) * 100;

  const waMsg = `Hola Carrier Pro, usé la calculadora: ${units} ${units > 1 ? "unidades" : "unidad"} con ${fmt(gallons)} galones/mes cada una. Ahorro estimado: S/ ${fmt(monthly)} al mes. Quiero activar mi membresía.`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
  const shareMsg = `Mira esto: con Carrier Pro ahorraría S/ ${fmt(monthly)} al mes (S/ ${fmt(yearly)} al año) en combustible con ${units} ${units > 1 ? "unidades" : "unidad"}. Calcula tu ahorro aquí: ${window.location.origin}/#calculadora`;
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareMsg)}`;

  return (
    <section id="calculadora" data-testid="calculator-section" className="relative py-24 sm:py-32 lg:py-40 border-t border-white/5 overflow-hidden">
      <div className="absolute -right-40 top-1/3 -z-10 h-[460px] w-[460px] rounded-full bg-[#f5961d]/10 blur-[140px]" />
      <div className="container-cp">
        <div className="max-w-2xl">
          <span className="section-label"><Calculator size={12} /> Calculadora de ahorro</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
            ¿Cuánto <span className="text-[#f5961d]">ahorras</span> al mes?
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg">
            Mueve el control según tu consumo y descubre lo que dejas de pagar con Carrier Pro.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid lg:grid-cols-[1.15fr_1fr] rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          <div className="p-7 sm:p-10 lg:p-12 space-y-10">
            <div>
              <div className="flex items-end justify-between gap-4">
                <label htmlFor="gallons" className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                  Galones al mes por unidad
                </label>
                <div className="font-display text-4xl sm:text-5xl tabular-nums" data-testid="calc-gallons-value">
                  {fmt(gallons)} <span className="text-base text-white/40 font-body font-normal">gal</span>
                </div>
              </div>
              <input
                id="gallons"
                type="range"
                min={GALLONS_MIN}
                max={GALLONS_MAX}
                step={GALLONS_STEP}
                value={gallons}
                onChange={(e) => setGallons(Number(e.target.value))}
                className="cp-range mt-6 w-full"
                style={{ "--pct": `${pct}%` }}
                data-testid="calc-gallons-slider"
              />
              <div className="mt-3 flex justify-between font-mono text-[10px] text-white/35">
                <span>{fmt(GALLONS_MIN)} gal</span>
                <span>{fmt(GALLONS_MAX)} gal</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">Número de unidades</div>
                <div className="mt-1 text-sm text-white/55">Cada unidad suma su propio ahorro.</div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black p-1.5">
                <StepBtn onClick={() => setUnits((u) => Math.max(1, u - 1))} testid="calc-units-minus" label="Quitar unidad"><Minus size={16} /></StepBtn>
                <span className="w-10 text-center font-display text-2xl tabular-nums" data-testid="calc-units-value">{units}</span>
                <StepBtn onClick={() => setUnits((u) => Math.min(MAX_UNITS, u + 1))} testid="calc-units-plus" label="Agregar unidad"><Plus size={16} /></StepBtn>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm text-white/60">
              <Fuel size={18} className="text-[#f5961d] shrink-0" />
              <span>Ahorro desde <span className="text-white font-semibold">S/ {SAVINGS_PER_GALLON.toFixed(2)}</span> por galón en estaciones afiliadas.</span>
            </div>
          </div>

          <div className="relative p-7 sm:p-10 lg:p-12 bg-[#f5961d] text-black flex flex-col justify-between gap-10 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] diag-lines-dark" />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-black/60">Ahorro mensual estimado</div>
              <div className="mt-3 font-display text-[56px] sm:text-[76px] leading-none tabular-nums" data-testid="calc-monthly-savings">
                <span className="text-2xl sm:text-3xl align-top mr-1">S/</span>{fmt(monthly)}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-black/15">
                <Stat label="Al año" value={`S/ ${fmt(yearly)}`} testid="calc-yearly-savings" />
                <Stat label="Galones totales" value={fmt(gallons * units)} testid="calc-total-gallons" />
              </div>
            </div>
            <div className="relative">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm sm:text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
                data-testid="calc-whatsapp-cta"
              >
                <MessageCircle size={18} /> Quiero este ahorro
              </a>
              <a
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/30 px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-black/10"
                data-testid="calc-share-cta"
              >
                <Share2 size={16} /> Compartir con un colega
              </a>
              <p className="mt-3 text-center text-[11px] text-black/60">*Estimación referencial. El ahorro puede ser mayor según la estación.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const StepBtn = ({ onClick, testid, label, children }) => (
  <button
    onClick={onClick}
    aria-label={label}
    data-testid={testid}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#f5961d] hover:text-black"
  >
    {children}
  </button>
);

const Stat = ({ label, value, testid }) => (
  <div className="bg-[#f5961d] px-4 py-4">
    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/55">{label}</div>
    <div className="mt-1 font-display text-xl sm:text-2xl tabular-nums" data-testid={testid}>{value}</div>
  </div>
);
