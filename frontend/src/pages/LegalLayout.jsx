import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import StickyWhatsApp from "../components/StickyWhatsApp";
import { LEGAL } from "../config/legal";

export default function LegalLayout({ title, label, intro, children, testid }) {
  useEffect(() => {
    document.title = `${title} | Carrier Pro`;
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="relative min-h-screen bg-black text-white" data-testid={testid}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container-cp flex h-16 sm:h-20 items-center justify-between">
          <a href="/" data-testid="legal-logo"><Logo /></a>
          <a href="/" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white" data-testid="legal-back">
            <ArrowLeft size={16} /> Volver al inicio
          </a>
        </div>
      </header>
      <main className="container-cp section-y">
        <div className="max-w-3xl">
          <span className="section-label">{label}</span>
          <h1 className="h2-cp mt-5">{title}</h1>
          {intro && <p className="mt-5 text-base sm:text-lg text-white/60">{intro}</p>}
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">Última actualización: {LEGAL.actualizado}</p>
        </div>
        <div className="mt-12 max-w-3xl">{children}</div>
      </main>
      <Footer onOpenCorporate={() => { window.location.href = "/"; }} />
      <StickyWhatsApp />
    </div>
  );
}

export function LegalSections({ sections }) {
  return (
    <div className="space-y-10">
      {sections.map(([heading, paragraphs], i) => (
        <section key={heading} className="border-t border-white/10 pt-8">
          <h2 className="font-display text-xl sm:text-2xl"><span className="mr-2 font-mono text-sm text-[#f5961d]">{String(i + 1).padStart(2, "0")}</span>{heading}</h2>
          <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-white/70">
            {paragraphs.map((p, j) => (Array.isArray(p)
              ? <ul key={j} className="list-disc space-y-1.5 pl-5 marker:text-[#f5961d]">{p.map((li) => <li key={li}>{li}</li>)}</ul>
              : <p key={j}>{p}</p>))}
          </div>
        </section>
      ))}
    </div>
  );
}

export const Draft = () => (
  <p className="mb-10 rounded-2xl border border-[#f5961d]/30 bg-[#f5961d]/[0.06] p-4 text-sm text-white/70">
    Texto base de referencia. Recomendamos su revisión por un asesor legal antes de considerarlo definitivo.
  </p>
);
