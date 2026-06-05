import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  History,
  BarChart3,
  Wrench,
  Shield,
  Users,
  Briefcase,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

const ITEMS = [
  { icon: Activity, title: "Control de consumo por unidad" },
  { icon: History, title: "Historial digital de cargas" },
  { icon: BarChart3, title: "Reportes operativos" },
  { icon: Wrench, title: "Descuentos en talleres" },
  { icon: Shield, title: "Beneficios en seguros" },
  { icon: Users, title: "Red de transportistas Carrier Pro" },
  { icon: Briefcase, title: "Gestión de viáticos" },
  { icon: LayoutDashboard, title: "Dashboard operativo" },
];

export default function Future() {
  return (
    <section
      id="futuro"
      data-testid="future-section"
      className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#f5961d]/8 blur-[140px] -z-10" />

      <div className="container-cp">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Roadmap</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
            Más beneficios <br />
            en <span className="text-[#f5961d]">camino.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg">
            Estamos construyendo la red operativa más completa para transportistas independientes del país.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 overflow-hidden"
                data-testid={`future-${i}`}
              >
                <div className="absolute inset-0 diag-lines opacity-30" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white/60">
                      <Icon size={18} />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#f5961d]/30 bg-[#f5961d]/8 text-[#f5961d] px-2 py-0.5 text-[9px] font-mono uppercase tracking-[0.18em]">
                      <Sparkles size={8} /> Soon
                    </span>
                  </div>
                  <h3 className="mt-5 text-sm sm:text-base font-medium text-white/80 leading-snug">
                    {it.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
