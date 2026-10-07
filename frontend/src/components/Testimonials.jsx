import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Receipt } from "lucide-react";

const ITEMS = [
  { icon: MapPin, title: "Confirma tu estación", text: "Consulta las estaciones habilitadas y las condiciones vigentes antes de cargar." },
  { icon: Receipt, title: "Distingue tus pagos", text: "La membresía se gestiona con Carrier Pro. El combustible se paga directamente en Primax." },
  { icon: ShieldCheck, title: "Elige con información clara", text: "Compara los planes y consulta qué incluye tu membresía. Los próximos beneficios están identificados por separado." },
];

export default function Testimonials() {
  return (
    <section id="informacion-clara" className="py-24 sm:py-32 border-t border-white/10" data-testid="transparency-section">
      <div className="container-cp">
        <span className="section-label">Decide con confianza</span>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl">Información clara. <span className="text-[#f5961d]">En cada paso.</span></h2>
        <div className="mt-12 grid md:grid-cols-3 gap-5">{ITEMS.map(({ icon: Icon, title, text }, i) => (
          <motion.article key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card p-7">
            <Icon className="text-[#f5961d]" size={28} /><h3 className="font-display text-2xl mt-5">{title}</h3><p className="mt-3 text-white/60">{text}</p>
          </motion.article>
        ))}</div>
      </div>
    </section>
  );
}
