import React, { useState } from "react";
import { ArrowRight, Copy, Printer, CheckCircle2 } from "lucide-react";
import LegalLayout from "./LegalLayout";
import { LEGAL } from "../config/legal";

const CONTROL = "mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-white placeholder:text-white/30 focus:border-[#f5961d] focus:outline-none";
const today = () => new Date().toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" });
const newCode = () => {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `CP-${ymd}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
};

export default function LibroReclamaciones() {
  const [result, setResult] = useState(null);
  const [menor, setMenor] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const code = newCode();
    const fields = Array.from(new FormData(e.currentTarget).entries()).filter(([, v]) => String(v).trim());
    const header = [`Hoja de reclamación N.° ${code}`, `Fecha: ${today()}`, `Proveedor: ${LEGAL.razonSocial} · RUC ${LEGAL.ruc}`, ""];
    const text = [...header, ...fields.map(([k, v]) => `${k}: ${String(v).trim()}`)].join("\n");
    setResult({ code, text });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LegalLayout title="Libro de reclamaciones" label="Libro de reclamaciones virtual" testid="page-libro" intro="Conforme al Código de Protección y Defensa del Consumidor, puedes registrar aquí tu reclamo o queja.">
      <ProviderBox />
      {result ? <Confirmation result={result} onNew={() => { setResult(null); setMenor(false); }} /> : (
        <form onSubmit={submit} className="mt-10 space-y-10" data-testid="libro-form">
          <Block n="1" title="Identificación del consumidor reclamante">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombres y apellidos" required autoComplete="name" />
              <Field label="DNI / CE" required inputMode="numeric" maxLength={12} />
              <Field label="Teléfono" type="tel" required autoComplete="tel" />
              <Field label="Correo electrónico" type="email" required autoComplete="email" />
            </div>
            <Field label="Domicilio" required autoComplete="street-address" />
            <label className="flex items-center gap-3 text-sm text-white/75">
              <input type="checkbox" checked={menor} onChange={(e) => setMenor(e.target.checked)} className="h-4 w-4 accent-[#f5961d]" data-testid="libro-menor" />
              Soy menor de edad
            </label>
            {menor && <Field label="Nombre del padre, madre o apoderado" required />}
          </Block>

          <Block n="2" title="Identificación del bien contratado">
            <div className="grid gap-5 sm:grid-cols-2">
              <Choice name="Tipo de bien" options={["Servicio", "Producto"]} />
              <Field label="Monto reclamado (S/)" type="number" min="0" step="0.01" placeholder="Opcional" />
            </div>
            <Field label="Descripción (plan, placa, fecha)" required placeholder="Ej.: Plan Fleet Óptimo, placa T7K-823" />
          </Block>

          <Block n="3" title="Detalle de la reclamación y pedido del consumidor">
            <Choice name="Tipo" options={["Reclamo", "Queja"]} />
            <p className="text-xs leading-relaxed text-white/45"><span className="text-white/70">Reclamo:</span> disconformidad relacionada a los productos o servicios. <span className="text-white/70">Queja:</span> disconformidad no relacionada a los productos o servicios, o malestar respecto a la atención al público.</p>
            <Area label="Detalle" />
            <Area label="Pedido" />
          </Block>

          <label className="flex items-start gap-3 text-sm text-white/70">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#f5961d]" data-testid="libro-accept" />
            Declaro que la información es verdadera y acepto la Política de privacidad para la atención de mi reclamo.
          </label>
          <button type="submit" className="btn-primary w-full sm:w-auto" data-testid="libro-submit">REGISTRAR HOJA DE RECLAMACIÓN <ArrowRight size={18} /></button>
          <p className="text-xs text-white/45">La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</p>
        </form>
      )}
    </LegalLayout>
  );
}

const ProviderBox = () => (
  <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:grid-cols-2" data-testid="libro-provider">
    {[["Proveedor", LEGAL.razonSocial], ["RUC", LEGAL.ruc], ["Domicilio", LEGAL.domicilio], ["Plazo de respuesta", LEGAL.plazoRespuesta]].map(([k, v]) => (
      <div key={k}><div className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">{k}</div><div className="mt-1 text-sm text-white">{v}</div></div>
    ))}
  </div>
);

function Confirmation({ result, onNew }) {
  const [copied, setCopied] = useState(false);
  const mailto = `mailto:${LEGAL.email}?subject=${encodeURIComponent(`Libro de Reclamaciones - ${result.code}`)}&body=${encodeURIComponent(result.text)}`;
  const copy = () => navigator.clipboard.writeText(result.text).then(() => setCopied(true));
  return (
    <div className="mt-10 rounded-3xl border border-[#f5961d]/40 bg-[#f5961d]/[0.06] p-6 sm:p-8" data-testid="libro-confirmation">
      <CheckCircle2 className="text-[#f5961d]" size={30} />
      <h2 className="font-display mt-4 text-2xl sm:text-3xl">Tu hoja está lista</h2>
      <p className="mt-2 text-white/70">Código de reclamo: <span className="font-mono text-lg text-[#f5961d]" data-testid="libro-code">{result.code}</span></p>
      <p className="mt-3 text-sm text-white/60"><span className="text-white">Último paso:</span> pulsa "Enviar por correo" para enviarnos tu hoja desde tu aplicación de correo. Guarda tu código para el seguimiento. Responderemos en un plazo máximo de {LEGAL.plazoRespuesta}.</p>
      <pre className="mt-5 max-h-64 overflow-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black p-4 font-mono text-xs text-white/70">{result.text}</pre>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a href={mailto} className="btn-primary" data-testid="libro-send-email">ENVIAR POR CORREO <ArrowRight size={18} /></a>
        <button onClick={copy} className="btn-secondary" data-testid="libro-copy"><Copy size={16} /> {copied ? "COPIADO" : "COPIAR"}</button>
        <button onClick={() => window.print()} className="btn-secondary" data-testid="libro-print"><Printer size={16} /> IMPRIMIR</button>
      </div>
      <p className="mt-4 text-xs text-white/45">Si no tienes una aplicación de correo, copia el texto y envíalo a {LEGAL.email}.</p>
      <button onClick={onNew} className="mt-6 text-sm text-[#f5961d] hover:underline" data-testid="libro-new">Registrar otra hoja</button>
    </div>
  );
}

const Block = ({ n, title, children }) => (
  <fieldset className="space-y-5 border-t border-white/10 pt-8">
    <legend className="font-display text-xl sm:text-2xl"><span className="mr-2 font-mono text-sm text-[#f5961d]">0{n}</span>{title}</legend>
    {children}
  </fieldset>
);

const Field = ({ label, ...props }) => (
  <label className="block text-sm text-white/75">{label}<input name={label} maxLength={200} className={CONTROL} {...props} /></label>
);

const Area = ({ label }) => (
  <label className="block text-sm text-white/75">{label}<textarea name={label} required rows={4} maxLength={1200} className={CONTROL} data-testid={`libro-${label.toLowerCase()}`} /></label>
);

const Choice = ({ name, options }) => (
  <div className="text-sm text-white/75">
    {name}
    <div className="mt-2 flex gap-3">
      {options.map((o, i) => (
        <label key={o} className="flex cursor-pointer items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 has-[:checked]:border-[#f5961d] has-[:checked]:bg-[#f5961d]/10">
          <input type="radio" name={name} value={o} required defaultChecked={i === 0} className="accent-[#f5961d]" data-testid={`libro-${o.toLowerCase()}`} />{o}
        </label>
      ))}
    </div>
  </div>
);
