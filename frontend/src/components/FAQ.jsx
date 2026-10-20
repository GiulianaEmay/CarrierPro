import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Qué plan me conviene?",
    a: "Carrier Digital (S/19.90 por unidad al mes) incluye QR, beneficio de combustible, pago directo en Primax y soporte. Fleet Óptimo (S/29.90) suma la tarjeta física Carrier Pro con entrega programada. Si tienes una empresa o institución con flota, Carrier Empresas (S/24.90) ofrece condiciones corporativas, sujeto a validación.",
  },
  {
    q: "¿Qué necesito y cuánto demora la activación?",
    a: "Solo tu placa y teléfono (RUC si necesitas comprobante). Puedes registrar varias unidades, ya que la membresía es por placa. Tu QR se activa aproximadamente 5 minutos después de confirmar el pago.",
  },
  {
    q: "¿Dónde uso mi beneficio?",
    a: "En las estaciones Primax habilitadas para Carrier Pro. Revisa el mapa para confirmar las estaciones disponibles antes de cargar.",
  },
  {
    q: "¿A quién le pago el combustible?",
    a: "Pagas directamente en Primax, que emite tu comprobante. Carrier Pro solo cobra tu membresía; nunca recibe el dinero del combustible.",
  },
  {
    q: "¿Cuánto puedo ahorrar?",
    a: "Depende de tu consumo, la estación y las condiciones vigentes. Usa la calculadora para ver una estimación referencial según tus galones al mes.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative section-y border-t border-white/5"
    >
      <div className="container-cp grid lg:grid-cols-[0.9fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="section-label">FAQ</span>
          <h2 className="h2-cp mt-5">
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
