import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    "q": "¿Qué diferencia hay entre Carrier Digital y Fleet Óptimo?",
    "a": "Carrier Digital cuesta S/19.90 por unidad al mes e incluye acceso mediante QR, beneficio de combustible, pago directo en Primax y soporte. Fleet Óptimo cuesta S/29.90 e incluye todo lo de Digital más tarjeta física Carrier Pro con entrega programada."
  },
  {
    "q": "¿Qué es Carrier Empresas?",
    "a": "Es la propuesta para empresas e instituciones con flota: S/24.90 por unidad al mes, membresías para la flota, condiciones corporativas y beneficios especiales para colaboradores. Sujeto a condiciones y validación corporativa."
  },
  {
    "q": "¿Cuánto demora la activación?",
    "a": "El QR se activa aproximadamente 5 minutos después de confirmar el pago. La entrega de la tarjeta física de Fleet Óptimo se programa por separado."
  },
  {
    "q": "¿Qué necesito para afiliarme?",
    "a": "Tu placa y teléfono; RUC cuando sea necesario para el comprobante correspondiente. Para Carrier Empresas, comparte también la empresa y el número aproximado de unidades."
  },
  {
    "q": "¿Puedo registrar varias unidades?",
    "a": "Sí. La membresía es por placa. Puedes registrar varias unidades y consultar Carrier Empresas si representas a una empresa o institución con flota."
  },
  {
    "q": "¿Dónde uso mi beneficio?",
    "a": "En las estaciones Primax habilitadas para Carrier Pro. Consulta el mapa y confirma las ciudades y estaciones disponibles antes de cargar."
  },
  {
    "q": "¿A quién le pago el combustible?",
    "a": "Pagas directamente en Primax, que emite tu comprobante. Carrier Pro gestiona y cobra tu membresía; no recibe el dinero destinado al combustible."
  },
  {
    "q": "¿Cuánto puedo ahorrar?",
    "a": "Depende de las condiciones vigentes, la estación y tu consumo. Los precios de combustible son variables; confirma el beneficio antes de cargar. No prometemos una cifra fija de ahorro."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 sm:py-32 border-t border-white/5"
    >
      <div className="container-cp grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="section-label">FAQ</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[56px] leading-[1.0] tracking-tight">
            Preguntas <br />
            <span className="text-[#f5961d]">frecuentes.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg max-w-md">
            Lo que normalmente nos preguntan los transportistas antes de afiliarse.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} data-testid={`faq-item-${i}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className={`font-display text-lg sm:text-xl leading-snug ${isOpen ? "text-white" : "text-white/80 group-hover:text-white"} transition-colors`}>
                    {f.q}
                  </span>
                  <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                    isOpen
                      ? "border-[#f5961d] bg-[#f5961d] text-black"
                      : "border-white/20 text-white/70 group-hover:border-white/40"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-white/70 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
