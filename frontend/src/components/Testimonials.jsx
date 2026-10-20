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
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative py-24 sm:py-32 border-t border-white/5"
    >
      <div className="container-cp">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="section-label">Testimonios</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
              Lo dicen los <br />
              <span className="text-[#f5961d]">transportistas.</span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-base">
            Operadores reales, ahorrando real. Cada testimonio refleja resultados con tu misma operación.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIES.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card p-7 flex flex-col"
              data-testid={`testimonial-${i}`}
            >
              <Quote size={28} className="text-[#f5961d]" />
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/80 flex-1">
                "{t.comentario}"
              </p>

              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <img
                  src={t.foto}
                  alt={t.nombre}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover border border-white/10"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold leading-tight">{t.nombre}</div>
                  <div className="text-xs text-white/50 font-mono uppercase tracking-wider mt-0.5">
                    {t.ciudad} · {t.unidades} {t.unidades > 1 ? "unidades" : "unidad"}
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-mono text-emerald-300 inline-flex items-center gap-1">
                  <TrendingDown size={11} /> {t.ahorro}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
