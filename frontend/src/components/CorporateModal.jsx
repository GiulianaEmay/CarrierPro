import React, { useEffect, useRef, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { CORPORATE_EMAIL, INTEREST_AREAS, SERVICE_TYPES } from "../config/corporate";

const COPY = {
  about: { title: "Nosotros", text: "Carrier Pro gestiona una membresía por vehículo para transportistas, flotas y empresas. Comenzamos con el beneficio de combustible en Primax y trabajamos en ampliar el ecosistema de servicios para la operación." },
  careers: { title: "Únete a Carrier Pro", text: "Estamos construyendo una nueva forma de generar valor para transportistas, flotas y empresas." },
  partners: { title: "Quiero ser aliado Carrier Pro", text: "Cuéntanos sobre tu empresa y el servicio que te interesa aportar al ecosistema. Esta solicitud expresa interés comercial; no implica una alianza activa." },
  contact: { title: "Contacta con Carrier Pro", text: "Cuéntanos cómo podemos ayudarte." },
};
const CONTROL = "w-full mt-2 rounded-xl border border-white/20 bg-black p-3 text-white focus:border-[#f5961d] focus:outline-none";

export default function CorporateModal({ type, onClose }) {
  const dialog = useRef(null);
  const [emailHref, setEmailHref] = useState("");
  const copy = COPY[type];
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, []);

  const prepareEmail = (event) => {
    event.preventDefault();
    const fields = Array.from(new FormData(event.currentTarget).entries());
    const body = fields.filter(([, value]) => value.trim()).map(([label, value]) => `${label}: ${value.trim()}`).join("\n");
    setEmailHref(`mailto:${CORPORATE_EMAIL}?subject=${encodeURIComponent(copy.title)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <dialog ref={dialog} onCancel={onClose} onClose={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="corporate-title" className="corporate-dialog rounded-3xl border border-white/20 bg-[#0a0a0a] text-white p-0 w-[calc(100%-2rem)] max-w-2xl max-h-[90svh] backdrop:bg-black/80" data-testid="corporate-modal">
      <div className="p-6 sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <h2 id="corporate-title" className="font-display text-3xl sm:text-4xl">{copy.title}</h2>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="shrink-0 rounded-full border border-white/20 p-2 hover:text-[#f5961d]" data-testid="corporate-close"><X size={20} /></button>
        </div>
        <p className="mt-5 text-white/65 leading-relaxed">{copy.text}</p>
        {type === "careers" && <p className="mt-5 text-white/80">¿Quieres formar parte de Carrier Pro? Déjanos tu información para futuras oportunidades.</p>}
        {type !== "about" && <form className="mt-7 space-y-5" onSubmit={prepareEmail} onChange={() => setEmailHref("")} data-testid="corporate-form">
          {type === "partners" && <div className="grid sm:grid-cols-2 gap-5"><Field label="Empresa" required /><Field label="RUC" pattern="[0-9]{11}" title="Ingresa los 11 dígitos del RUC" inputMode="numeric" maxLength={11} required /></div>}
          <Field label={type === "partners" ? "Nombre de contacto" : "Nombre completo"} autoComplete="name" required />
          <div className="grid sm:grid-cols-2 gap-5"><Field label="Teléfono" type="tel" autoComplete="tel" required /><Field label="Correo" type="email" autoComplete="email" required /></div>
          {type !== "contact" && <Field label="Ciudad" autoComplete="address-level2" required />}
          {type === "careers" && <>
            <Select label="Área de interés" options={INTEREST_AREAS} />
            <Field label="CV (enlace opcional)" type="url" placeholder="https://…" aria-describedby="cv-help" />
            <p id="cv-help" className="text-xs text-white/50">Puedes compartir un enlace a tu CV o adjuntarlo manualmente en tu aplicación de correo al enviar el mensaje.</p>
          </>}
          {type === "partners" && <Select label="Tipo de servicio" options={SERVICE_TYPES} />}
          {type !== "careers" && <label className="block text-sm text-white/75">Mensaje<textarea name="Mensaje" required rows={4} maxLength={1500} className={CONTROL} /></label>}
          <p className="text-xs text-white/55">Prepararemos un correo para {CORPORATE_EMAIL}. Tú revisas y envías el mensaje desde tu aplicación de correo. Este formulario no envía ni almacena tus datos en la web.</p>
          <button type="submit" className="btn-primary w-full" data-testid="corporate-prepare">{type === "partners" ? "QUIERO SER ALIADO" : "PREPARAR CORREO"}<ArrowRight size={18} /></button>
          {emailHref && <div role="status" className="border-t border-white/10 pt-5">
            <p className="text-sm text-white/70">Correo preparado. Aún no se ha enviado.</p>
            <a href={emailHref} className="btn-secondary mt-4 w-full" data-testid="corporate-email">ABRIR MI CORREO</a>
            <p className="text-xs text-white/50 mt-3">Si no tienes una aplicación de correo configurada, escribe directamente a {CORPORATE_EMAIL}.</p>
          </div>}
        </form>}
      </div>
    </dialog>
  );
}
function Field({ label, ...props }) {
  return <label className="block text-sm text-white/75">{label}<input name={label} maxLength={200} {...props} className={CONTROL} /></label>;
}
function Select({ label, options }) {
  return <label className="block text-sm text-white/75">{label}<select name={label} defaultValue="" required className={CONTROL}><option value="" disabled>Selecciona una opción</option>{options.map(option => <option key={option}>{option}</option>)}</select></label>;
}
