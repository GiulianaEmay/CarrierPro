import React from "react";
import { motion } from "framer-motion";
import { Wallet, Fuel, Receipt } from "lucide-react";

const BLOCKS = [
  {
    icon: Wallet,
    title: "No entregas dinero a Carrier Pro",
    desc: "Tu dinero nunca sale de tus manos. No hay depósitos, no hay adelantos.",
    tag: "Dinero",
  },
  {
    icon: Fuel,
    title: "Pagas directamente en la estación",
    desc: "Como siempre. Mismo proceso, mejores condiciones.",
    tag: "Surtidor",
  },
  {
    icon: Receipt,
    title: "La estación te factura directamente",
    desc: "Tu RUC, tu comprobante. Sin intermediarios contables.",
    tag: "Factura",
  },
];

export default function Trust() {
  return (
    <section
      id="confianza"
      data-testid="trust-section"
      className="relative py-24 sm:py-32 border-t border-white/5"
    >
      <div className="container-cp">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <span className="section-label">Confianza</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] tracking-tight">
              Tu dinero <br />
              <span className="text-[#f5961d]">siempre permanece</span> <br />
              bajo tu control.
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg max-w-md">
              Simple. Transparente. Sin intermediarios. Carrier Pro no toca tu dinero — solo desbloquea mejores condiciones.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            {BLOCKS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="card group p-6 sm:p-8 hover:border-[#f5961d]/30 transition-colors"
                  data-testid={`trust-block-${i}`}
                >
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 -m-3 rounded-2xl bg-[#f5961d]/15 blur-xl group-hover:bg-[#f5961d]/25 transition-all" />
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f5961d]/30 bg-[#f5961d]/10 text-[#f5961d]">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg sm:text-xl font-semibold">{b.title}</h3>
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="mt-2 text-white/60 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <div className="rounded-3xl border border-[#f5961d]/30 bg-[#f5961d]/[0.06] px-6 py-5 mt-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#f5961d] flicker" />
              <p className="font-display text-lg sm:text-xl text-white">
                Simple. <span className="text-[#f5961d]">Transparente.</span> Sin intermediarios.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative mt-4 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6 sm:p-7"
              data-testid="trust-tagline"
            >
              <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-[#f5961d]/15 blur-[80px]" />
              <div className="relative font-display text-xl sm:text-2xl lg:text-[28px] leading-snug tracking-tight">
                <span className="text-white/55">No depositas.</span>{" "}
                <span className="text-white/55">No adelantas.</span>{" "}
                <span className="text-white/55">No transfieres.</span>
                <br />
                <span className="text-white">Cargas, pagas en caja</span>{" "}
                <span className="text-[#f5961d]">y sigues tu ruta.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
