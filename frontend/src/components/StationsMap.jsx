import React from "react";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

const MAPS_LIST_URL =
  "https://www.google.com/maps/d/edit?mid=136EwYhSwDgYk99e5VftSFBw0Lgmcsco&usp=sharing";
const MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=136EwYhSwDgYk99e5VftSFBw0Lgmcsco&ehbc=2E312F&noprof=1";

export default function StationsMap() {
  return (
    <section
      id="estaciones"
      data-testid="stations-section"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="container-cp">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="section-label">Mapa de estaciones</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
              Encuentra estaciones <br />
              <span className="text-[#f5961d]">afiliadas Primax.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg max-w-lg">
              Estas son las estaciones donde puedes usar tu QR Carrier Pro y acceder al precio de convenio. Comenzamos en Trujillo y La Libertad, en expansión nacional.
            </p>
          </div>
          <a
            href={MAPS_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
            data-testid="open-full-map"
          >
            Ver mapa completo
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Map */}
        <div
          className="mt-12 relative h-[480px] sm:h-[560px] lg:h-[640px] rounded-3xl border border-white/10 overflow-hidden bg-black"
          data-testid="map-container"
        >
          <iframe
            title="Estaciones Primax afiliadas a Carrier Pro"
            src={MAP_EMBED}
            loading="lazy"
            className="absolute inset-0 h-full w-full"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <div className="pointer-events-none absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5961d] flicker" /> Estaciones Carrier Pro · Primax
          </div>
        </div>

        {/* Helper row */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5961d]/15 border border-[#f5961d]/30 text-[#f5961d]">
              <MapPin size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold">Haz clic en cualquier pin</div>
              <div className="text-xs text-white/55 mt-0.5 leading-relaxed">
                Verás nombre, dirección y horario de cada estación afiliada.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5961d]/15 border border-[#f5961d]/30 text-[#f5961d]">
              <Navigation size={18} />
            </div>
            <div>
              <div className="text-sm font-semibold">Cómo llegar</div>
              <div className="text-xs text-white/55 mt-0.5 leading-relaxed">
                Desde cada pin puedes abrir la ruta directamente en Google Maps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
