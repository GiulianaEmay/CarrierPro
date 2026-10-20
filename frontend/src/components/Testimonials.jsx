import React from "react";
import { motion } from "framer-motion";
import { Quote, TrendingDown } from "lucide-react";

const TESTIMONIES = [
  {
    nombre: "Luis Vargas",
    ciudad: "Trujillo",
    unidades: 3,
    foto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=320&q=70",
    comentario:
      "Con Carrier Pro empecé a notar el ahorro desde la primera semana. Sigo cargando en la misma estación, pero ahora con mejores condiciones.",
    ahorro: "S/ 480 / mes",
  },
  {
    nombre: "María Solano",
    ciudad: "La Libertad",
    unidades: 5,
    foto: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=320&q=70",
    comentario:
      "Lo mejor es que no entrego mi dinero a nadie. Sigo pagando directo en estación y la factura llega a mi nombre.",
    ahorro: "S/ 820 / mes",
  },
  {
    nombre: "Jorge Quispe",
    ciudad: "Trujillo",
    unidades: 1,
    foto: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=320&q=70",
    comentario:
      "Soy independiente, solo tengo una unidad. Carrier Pro me da los beneficios que antes solo veían las grandes flotas.",
    ahorro: "S/ 210 / mes",
  },
];

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIES;
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 lg:py-40 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute left-0 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#f5961d]/[0.07] blur-[140px]" />
      <div className="container-cp">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="section-label">Testimonios</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
              Lo dicen los <br />
              <span className="text-[#f5961d]">transportistas.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base sm:text-lg">
            Operadores reales, ahorrando real. Cada testimonio refleja resultados con tu misma operación.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal i={0} className="relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] p-8 sm:p-12" testid="testimonial-0">
            <div className="absolute inset-0 dots-bg opacity-50" />
            <Quote size={120} strokeWidth={1} className="absolute -right-4 -top-4 text-[#f5961d]/10" />
            <div className="relative">
              <Savings value={featured.ahorro} big />
              <p className="mt-8 font-display text-2xl sm:text-3xl lg:text-[34px] leading-[1.2] font-medium text-white">
                “{featured.comentario}”
              </p>
            </div>
            <Author t={featured} className="relative mt-12" />
          </Reveal>

          <div className="grid gap-5">
            {rest.map((t, idx) => (
              <Reveal key={t.nombre} i={idx + 1} className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.02] p-7 sm:p-8 transition-colors duration-300 hover:border-white/20" testid={`testimonial-${idx + 1}`}>
                <div className="flex items-start justify-between gap-4">
                  <Quote size={24} className="text-[#f5961d]" />
                  <Savings value={t.ahorro} />
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/80">“{t.comentario}”</p>
                <Author t={t} className="mt-7" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const Reveal = ({ i, className, testid, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.55, delay: i * 0.08 }}
    className={className}
    data-testid={testid}
  >
    {children}
  </motion.div>
);

const Savings = ({ value, big }) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-[#f5961d]/30 bg-[#f5961d]/10 font-mono text-[#f5961d] ${big ? "px-4 py-2 text-sm" : "px-3 py-1 text-[11px]"}`}>
    <TrendingDown size={big ? 15 : 12} /> Ahorro {value}
  </div>
);

const Author = ({ t, className }) => (
  <div className={`flex items-center gap-3 border-t border-white/10 pt-5 ${className}`}>
    <img src={t.foto} alt={t.nombre} loading="lazy" className="h-12 w-12 rounded-full border border-white/15 object-cover" />
    <div>
      <div className="font-semibold leading-tight">{t.nombre}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
        {t.ciudad} · {t.unidades} {t.unidades > 1 ? "unidades" : "unidad"}
      </div>
    </div>
  </div>
);
