import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Tengo que depositar dinero a Carrier Pro para cargar combustible?",
    a: "No. Nunca. Tu dinero va directo a la estación Primax en caja. Carrier Pro solo cobra la membresía mensual por el acceso al convenio.",
  },
  {
    q: "¿Cuánto voy a ahorrar exactamente?",
    a: "Depende del precio de convenio vigente vs el precio pizarra del día. El ahorro varía, pero siempre es significativamente menor al precio pizarra. Con 2 viajes semanales y 2 tanqueadas por viaje, el ahorro mensual supera ampliamente los S/50 de membresía.",
  },
  {
    q: "¿En qué estaciones Primax puedo usar mi QR?",
    a: "En las estaciones Primax afiliadas al convenio en Trujillo. Estamos en expansión. Al activar tu membresía te confirmamos las estaciones disponibles.",
  },
  {
    q: "¿Puedo registrar más de una unidad?",
    a: "Sí. Cada placa es una membresía independiente a S/50/mes. Si tienes más de 5 unidades consulta por nuestro descuento especial.",
  },
  {
    q: "¿Qué pasa si quiero cancelar?",
    a: "Cancelas cuando quieras. Sin penalidades, sin contratos de permanencia. Un mensaje a WhatsApp y listo.",
  },
  {
    q: "¿El QR de prueba es realmente gratis?",
    a: "Sí. Te damos acceso al precio de convenio antes de que pagues la membresía. Para que compruebes el ahorro tú mismo en estación antes de decidir.",
  },
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
