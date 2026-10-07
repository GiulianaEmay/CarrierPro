import React from "react";
import { motion } from "framer-motion";
import {
  Fuel,
  Wallet,
  CreditCard,
  FileMinus,
  Car,
  Headphones,
  Sparkles,
} from "lucide-react";

const BENEFITS = [
  { icon: Fuel, title: "Combustible", desc: "Accede al beneficio en estaciones Primax habilitadas.", status: "Disponible" },
  { icon: Wallet, title: "Talleres", desc: "Nuevos aliados para tu vehículo.", status: "Próximo" },
  { icon: Car, title: "Mantenimiento", desc: "Más opciones para cuidar tu operación.", status: "Próximo" },
  { icon: CreditCard, title: "Neumáticos", desc: "Una red de beneficios que sigue creciendo.", status: "Próximo" },
  { icon: FileMinus, title: "Autopartes", desc: "Nuevas posibilidades para tu vehículo.", status: "Próximo" },
  { icon: Headphones, title: "Seguros", desc: "Beneficios en preparación.", status: "Próximo" },
  { icon: Sparkles, title: "Otros servicios", desc: "Seguimos ampliando el ecosistema Carrier Pro.", status: "Próximo" },
];

export default function Benefits() {
  return (
    <section
      id="beneficios"
      data-testid="benefits-section"
      className="relative py-24 sm:py-32 border-t border-white/5"
    >
      <div className="container-cp">
        <div className="max-w-3xl">
          <span className="section-label">Membresía</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
            UNA MEMBRESÍA. <br /><span className="text-[#f5961d]">CADA VEZ MÁS BENEFICIOS.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg max-w-xl">
            El combustible es el comienzo. Los beneficios marcados como próximos aún no forman parte de la membresía activa.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group relative bg-black hover:bg-[#0a0a0a] transition-colors p-7 sm:p-8 min-h-[210px] flex flex-col"
                data-testid={`benefit-${i}`}
              >
                <div className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/20">
                  {b.status}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5961d]/30 bg-[#f5961d]/10 text-[#f5961d] group-hover:bg-[#f5961d] group-hover:text-black transition-colors">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
