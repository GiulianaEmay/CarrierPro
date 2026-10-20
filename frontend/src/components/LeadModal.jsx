import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, AlertCircle, Phone, User, Building2, Mail, Truck, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "../App";

export default function LeadModal({ open, onClose }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    unidades: 1,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const t = setTimeout(() => {
        setError("");
        setSuccess(false);
        setForm({ nombre: "", telefono: "", correo: "", empresa: "", unidades: 1 });
      }, 300);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onChange = (k) => (e) => {
    const v = k === "unidades" ? Math.max(1, parseInt(e.target.value || "1", 10)) : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (form.nombre.trim().length < 2) return setError("Ingresa tu nombre.");
    if (form.telefono.trim().length < 6) return setError("Ingresa un teléfono válido.");
    if (!form.unidades || form.unidades < 1) return setError("Indica el número de unidades.");
    setSuccess(true);
  };

  const waText = encodeURIComponent(
    `Hola Carrier Pro, soy ${form.nombre || "[nombre]"}${
      form.empresa ? ` de ${form.empresa}` : ""
    }. Quiero activar ${form.unidades} unidad${form.unidades > 1 ? "es" : ""}. Mi teléfono: ${form.telefono}${form.correo ? `. Correo: ${form.correo}` : ""}`
  );
  const waSuccessUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6"
          data-testid="lead-modal"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
            data-testid="lead-modal-backdrop"
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-lg bg-[#0a0a0a] border border-white/10 sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#f5961d]/20 blur-[100px] pointer-events-none" />

            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 h-10 w-10 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/40 hover:bg-white/10 transition-colors z-10"
              data-testid="lead-modal-close"
            >
              <X size={18} />
            </button>

            {!success ? (
              <div className="relative p-6 sm:p-8">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f5961d]">
                  Afiliación · 1 minuto
                </div>
                <h3 className="font-display mt-2 text-2xl sm:text-3xl leading-tight">
                  Activa tu unidad <br />
                  <span className="text-[#f5961d]">en Carrier Pro.</span>
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Te contactamos por WhatsApp para confirmar tu activación.
                </p>

                <form onSubmit={submit} className="mt-6 space-y-3.5" data-testid="lead-form">
                  <Field label="Nombre" icon={User} name="nombre" placeholder="Tu nombre completo" value={form.nombre} onChange={onChange("nombre")} required />
                  <Field label="Teléfono" icon={Phone} name="telefono" type="tel" placeholder="+51 9xx xxx xxx" value={form.telefono} onChange={onChange("telefono")} required />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Unidades" icon={Truck} name="unidades" type="number" min={1} value={form.unidades} onChange={onChange("unidades")} required />
                    <Field label="Empresa (opcional)" icon={Building2} name="empresa" placeholder="Razón social" value={form.empresa} onChange={onChange("empresa")} />
                  </div>
                  <Field label="Correo (opcional)" icon={Mail} name="correo" type="email" placeholder="correo@ejemplo.com" value={form.correo} onChange={onChange("correo")} />

                  {error && (
                    <div className="rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm px-3.5 py-2.5 flex items-start gap-2" data-testid="lead-error">
                      <AlertCircle size={16} className="mt-0.5 shrink-0" /> {error}
                    </div>
                  )}

                  <button type="submit" className="btn-primary w-full" data-testid="lead-submit">
                    QUIERO ACTIVAR MI UNIDAD
                    <ArrowRight size={18} />
                  </button>

                  <div className="text-center text-[11px] text-white/40 mt-1 font-mono uppercase tracking-wider">
                    Tu información está protegida
                  </div>
                </form>
              </div>
            ) : (
              <div className="relative p-7 sm:p-10 text-center" data-testid="lead-success">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 15 }}
                  className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f5961d]/20 border border-[#f5961d]/40 text-[#f5961d]"
                >
                  <CheckCircle2 size={32} />
                </motion.div>
                <h3 className="font-display mt-5 text-2xl sm:text-3xl leading-tight">
                  ¡Listo {form.nombre.split(" ")[0]}!
                </h3>
                <p className="mt-3 text-white/70 max-w-sm mx-auto">
                  Continúa por WhatsApp para activar tu unidad ahora mismo. Te llevaremos con un mensaje pre-rellenado.
                </p>
                <a
                  href={waSuccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                  data-testid="lead-success-whatsapp"
                >
                  <MessageCircle size={18} />
                  Continuar por WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="mt-3 text-sm text-white/50 hover:text-white"
                  data-testid="lead-success-close"
                >
                  Cerrar
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, icon: Icon, name, ...rest }) {
  return (
    <label className="block" htmlFor={`lead-${name}`}>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 focus-within:border-[#f5961d]/60 focus-within:ring-2 focus-within:ring-[#f5961d]/20 transition-all px-3.5 py-3">
        <Icon size={16} className="text-white/40 shrink-0" />
        <input
          id={`lead-${name}`}
          name={name}
          data-testid={`lead-input-${name}`}
          className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none text-sm"
          {...rest}
        />
      </div>
    </label>
  );
}
