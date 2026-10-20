import React from "react";
import { motion } from "framer-motion";
import { FileSignature, QrCode, ScanLine, ArrowRight } from "lucide-react";

const STEPS = [
  {
    n: "01",
    title: "Registra tu placa",
    desc: "Comparte tu placa y teléfono. RUC cuando sea necesario para el comprobante correspondiente.",
    icon: FileSignature,
    visual: "form",
  },
  {
    n: "02",
    title: "Activa tu membresía",
    desc: "Recibe tu QR aproximadamente 5 minutos después de confirmar el pago. Fleet Óptimo agrega tarjeta física con entrega programada.",
    icon: QrCode,
    visual: "qr",
  },
  {
    n: "03",
    title: "Carga combustible y paga directo en caja",
    desc: "Presenta tu QR o tarjeta, carga y paga directamente en una estación Primax habilitada.",
    icon: ScanLine,
    visual: "scan",
  },
];

export default function HowItWorks({ onActivar }) {
  return (
    <section
      id="como-funciona"
      data-testid="howitworks-section"
      className="relative section-y border-t border-white/5 overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 diag-lines opacity-50" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-[#f5961d]/8 blur-[140px] -z-10" />

      <div className="container-cp">
        <div className="max-w-3xl">
          <span className="section-label">Cómo funciona</span>
          <h2 className="h2-cp mt-5">
            Empieza a ahorrar <br /> en <span className="text-[#f5961d]">3 pasos.</span>
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-2" data-testid="howitworks-flow">
            {["Placa", "Membresía", "QR / Tarjeta", "Beneficio"].map((t, i, arr) => (
              <React.Fragment key={t}>
                <span className={`rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] ${i === arr.length - 1 ? "bg-[#f5961d] text-black" : "border border-white/15 bg-white/[0.04] text-white/75"}`}>{t}</span>
                {i < arr.length - 1 && <ArrowRight size={14} className="text-[#f5961d]" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative mt-10 sm:mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <Step key={s.n} step={s} index={i} last={i === STEPS.length - 1} />
          ))}
        </div>

        <button onClick={onActivar} className="btn-primary mt-12" data-testid="howitworks-cta">
          ACTIVAR MI MEMBRESÍA <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Step({ step, index, last }) {
  const Icon = step.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="relative flex flex-col rounded-[28px] border border-white/10 bg-[#0a0a0a] p-2"
      data-testid={`step-${step.n}`}
    >
      <StepVisual variant={step.visual} Icon={Icon} />
      <div className="px-5 pb-6 pt-6 sm:px-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#f5961d]">Paso {step.n}</span>
        <h3 className="font-display mt-2 text-2xl leading-tight">{step.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-white/60">{step.desc}</p>
      </div>
      {!last && (
        <span className="absolute left-1/2 -bottom-5 z-10 inline-flex h-9 w-9 -translate-x-1/2 rotate-90 items-center justify-center rounded-full border border-[#f5961d]/50 bg-black text-[#f5961d] md:left-auto md:-right-[30px] md:top-[128px] md:bottom-auto md:translate-x-0 md:rotate-0">
          <ArrowRight size={16} />
        </span>
      )}
    </motion.div>
  );
}

function StepVisual({ variant, Icon }) {
  return (
    <div className="relative h-64 rounded-[22px] border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-black overflow-hidden">
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
    <div className="absolute inset-0 flex items-center justify-center px-8 pt-10">
      <div className="w-full max-w-[240px] space-y-2.5">
        {[
          ["Placa de unidad", "T7K-823", 0.2],
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
