import React from "react";
import { ExternalLink, MapPin, Navigation, ArrowRight, TrendingDown } from "lucide-react";
import { FUEL_PRICE } from "../config/site";

const MAPS_LIST_URL =
  "https://www.google.com/maps/d/edit?mid=136EwYhSwDgYk99e5VftSFBw0Lgmcsco&usp=sharing";
const MAP_EMBED =
  "https://www.google.com/maps/d/embed?mid=136EwYhSwDgYk99e5VftSFBw0Lgmcsco&ehbc=2E312F&noprof=1";

export default function StationsMap() {
  return (
    <section
      id="estaciones"
      data-testid="stations-section"
      className="relative section-y border-t border-white/10"
    >
      <div className="container-cp">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="section-label">Mapa de estaciones</span>
            <h2 className="h2-cp mt-5">
              Encuentra estaciones <br />
              <span className="text-[#f5961d]">afiliadas Primax.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg max-w-lg">
              Consulta las ciudades y estaciones habilitadas para acceder a tu beneficio Carrier Pro en Primax.
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

        <PriceBoard />

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

function PriceBoard() {
  const { pizarra, carrier, actualizado } = FUEL_PRICE;
  const ahorro = (pizarra - carrier).toFixed(2);
  return (
    <div className="mt-10 grid overflow-hidden rounded-[28px] border border-white/10 bg-[#0a0a0a] sm:grid-cols-[1fr_auto_1fr_1fr]" data-testid="price-board">
      <div className="p-6 sm:p-7">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Precio pizarra Primax</div>
        <div className="mt-2 font-display text-4xl text-white/40 line-through decoration-[#f5961d]/70 tabular-nums" data-testid="price-pizarra">S/ {pizarra.toFixed(2)}</div>
        <div className="mt-1 text-xs text-white/40">por galón</div>
      </div>
      <div className="hidden items-center justify-center sm:flex">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f5961d]/50 text-[#f5961d]"><ArrowRight size={18} /></span>
      </div>
      <div className="border-t border-white/10 p-6 sm:border-t-0 sm:p-7">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#f5961d]">Precio Carrier Pro</div>
        <div className="mt-2 font-display text-5xl text-white tabular-nums" data-testid="price-carrier">S/ {carrier.toFixed(2)}</div>
        <div className="mt-1 text-xs text-white/40">por galón · actualizado {actualizado}</div>
      </div>
      <div className="flex flex-col justify-center bg-[#f5961d] p-6 text-black sm:p-7">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-black/65"><TrendingDown size={14} /> Tu ahorro</div>
        <div className="mt-2 font-display text-5xl tabular-nums" data-testid="price-ahorro">S/ {ahorro}</div>
        <div className="mt-1 text-xs text-black/65">menos en cada galón</div>
      </div>
    </div>
  );
}
