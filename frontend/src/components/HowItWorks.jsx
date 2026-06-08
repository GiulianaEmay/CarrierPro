import React from "react";
import { motion } from "framer-motion";
import { FileSignature, QrCode, ScanLine, ArrowRight, Sparkles } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Registra tu unidad",
    desc: "Solo necesitamos el número de placa de tu unidad.",
    icon: FileSignature,
    visual: "form",
  },
  {
    n: "02",
    title: "Recibe tu QR en 3 minutos",
    desc: "Te enviamos tu QR por WhatsApp o correo. Es tu acceso al precio de convenio en cualquier estación Primax afiliada.",
    icon: QrCode,
    visual: "qr",
  },
  {
    n: "03",
    title: "Carga combustible y paga directo en caja",
    desc: "Presenta tu QR, realiza tu pago habitual y accede a tu beneficio.",
    icon: ScanLine,
    visual: "scan",
  },
];

export default function HowItWorks({ onActivar }) {
  return (
    <section
      id="como-funciona"
      data-testid="howitworks-section"
      className="relative py-24 sm:py-32 border-t border-white/5 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 diag-lines opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-[#f5961d]/8 blur-[140px] -z-10" />

      <div className="container-cp">
        <div className="max-w-3xl">
          <span className="section-label">Cómo funciona</span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[64px] leading-[0.98] tracking-tight">
            Empieza a ahorrar <br /> en <span className="text-[#f5961d]">3 pasos · 5 minutos.</span>
          </h2>
          <p className="mt-5 text-white/60 text-base sm:text-lg max-w-xl">
            Sin trámites complicados. Sin cambiar tu forma de cargar combustible.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14 sm:mt-20">
          {/* vertical line */}
          <div className="absolute left-7 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#f5961d]/0 via-[#f5961d]/40 to-[#f5961d]/0 sm:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 sm:space-y-20">
            {STEPS.map((s, i) => (
              <Step key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>

        {/* Result */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-24 relative overflow-hidden rounded-[28px] border border-[#f5961d]/30 bg-gradient-to-br from-[#f5961d]/[0.12] via-black to-black p-8 sm:p-12"
          data-testid="howitworks-result"
        >
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#f5961d]/20 blur-[100px]" />
          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#f5961d] font-mono text-xs uppercase tracking-[0.2em]">
                <Sparkles size={14} /> Resultado final
              </div>
              <h3 className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Empieza a ahorrar <br /> desde tu <span className="text-[#f5961d]">primera carga.</span>
              </h3>
              <button
                onClick={onActivar}
                className="btn-primary mt-7"
                data-testid="howitworks-cta"
              >
                ACTIVAR MI UNIDAD
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 sm:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                Tarjeta Carrier Pro
              </div>
              <div className="mt-4 space-y-2.5">
                {[
                  ["Tu combustible.", "text-white"],
                  ["Tu factura.", "text-white"],
                  ["Tu dinero.", "text-white"],
                  ["Ahora con mejores condiciones.", "text-[#f5961d]"],
                ].map(([t, c]) => (
                  <div key={t} className={`font-display text-2xl sm:text-3xl ${c}`}>
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-mono text-white/40 uppercase tracking-wider">
                <span>Carrier · Pro</span>
                <span>Activo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Step({ step, index }) {
  const Icon = step.icon;
  const isEven = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-center"
      data-testid={`step-${step.n}`}
    >
      {/* timeline dot */}
      <div className="absolute left-7 sm:left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <span className="absolute inset-0 -m-2 rounded-full bg-[#f5961d]/30 pulse-ring" />
          <div className="relative h-4 w-4 rounded-full bg-[#f5961d] border-4 border-black shadow-[0_0_18px_rgba(245,150,29,0.7)]" />
        </div>
      </div>

      {/* text */}
      <div className={`pl-16 sm:pl-0 ${isEven ? "sm:order-2 sm:pl-12" : "sm:pr-12 sm:text-right"}`}>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#f5961d]">
          Paso {step.n}
        </span>
        <h3 className="font-display mt-3 text-3xl sm:text-4xl leading-tight">
          {step.title}
        </h3>
        <p className={`mt-3 text-white/60 max-w-md ${isEven ? "" : "sm:ml-auto"}`}>
          {step.desc}
        </p>
      </div>

      {/* visual */}
      <div className={`pl-16 sm:pl-0 ${isEven ? "sm:order-1 sm:pr-12" : "sm:pl-12"}`}>
        <StepVisual variant={step.visual} Icon={Icon} />
      </div>
    </motion.div>
  );
}

function StepVisual({ variant, Icon }) {
  return (
    <div className="relative h-56 sm:h-64 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-black overflow-hidden">
      <div className="absolute inset-0 dots-bg opacity-50" />
      <div className="absolute top-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5961d]/15 border border-[#f5961d]/30 text-[#f5961d]">
        <Icon size={18} />
      </div>

      {variant === "form" && <FormVisual />}
      {variant === "qr" && <QRVisual />}
      {variant === "scan" && <ScanVisual />}
    </div>
  );
}

function FormVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="w-full max-w-[260px] space-y-3">
        {[
          ["Placa de unidad", "T7K-823", 0.2],
          ["Empresa", "Transportes Norte", 0.5],
          ["Teléfono", "+51 944 123 456", 0.8],
        ].map(([label, val, d], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: d }}
            viewport={{ once: true }}
            className="rounded-xl border border-white/10 bg-black/40 px-3 py-2.5"
          >
            <div className="text-[10px] font-mono uppercase tracking-wider text-white/40">{label}</div>
            <div className="text-sm text-white mt-0.5 font-medium">{val}</div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          viewport={{ once: true }}
          className="mt-2 rounded-full bg-[#f5961d] text-black text-sm font-semibold text-center py-2.5"
        >
          Activar membresía →
        </motion.div>
      </div>
    </div>
  );
}

function QRVisual() {
  // 9x9 generated pattern for fun
  const cells = Array.from({ length: 81 }, (_, i) => (i * 7 + (i % 5) * 11) % 3 !== 0);
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative rounded-2xl bg-white p-3 shadow-[0_20px_60px_-20px_rgba(245,150,29,0.5)]">
        <div className="grid grid-cols-9 gap-[2px] w-44 h-44">
          {cells.map((on, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: on ? 1 : 0, scale: on ? 1 : 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.008 }}
              className={`rounded-[2px] ${on ? "bg-black" : "bg-transparent"}`}
            />
          ))}
        </div>
        {/* corners */}
        <span className="absolute top-3 left-3 h-8 w-8 border-4 border-black rounded-md" />
        <span className="absolute top-3 right-3 h-8 w-8 border-4 border-black rounded-md" />
        <span className="absolute bottom-3 left-3 h-8 w-8 border-4 border-black rounded-md" />
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#f5961d] text-black text-[10px] font-mono px-3 py-1 uppercase tracking-wider">
          Carrier Pro
        </span>
      </div>
    </div>
  );
}

function ScanVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative rounded-2xl border-2 border-[#f5961d]/40 bg-black/40 backdrop-blur-md p-4 w-44 h-44 overflow-hidden">
        <div className="absolute top-2 left-2 h-6 w-6 border-t-2 border-l-2 border-[#f5961d]" />
        <div className="absolute top-2 right-2 h-6 w-6 border-t-2 border-r-2 border-[#f5961d]" />
        <div className="absolute bottom-2 left-2 h-6 w-6 border-b-2 border-l-2 border-[#f5961d]" />
        <div className="absolute bottom-2 right-2 h-6 w-6 border-b-2 border-r-2 border-[#f5961d]" />

        {/* mini QR */}
        <div className="grid grid-cols-7 gap-[1px] mx-auto w-24 h-24 mt-3 opacity-90">
          {Array.from({ length: 49 }).map((_, i) => (
            <span key={i} className={`rounded-sm ${(i * 11 + 3) % 3 === 0 ? "bg-white" : "bg-transparent"}`} />
          ))}
        </div>

        {/* scan line */}
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 140 }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="absolute left-3 right-3 h-[2px] bg-[#f5961d] shadow-[0_0_20px_#f5961d]"
        />
      </div>
    </div>
  );
}
