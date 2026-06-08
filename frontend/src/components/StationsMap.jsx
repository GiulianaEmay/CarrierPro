import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink, BadgeCheck } from "lucide-react";

const MAPS_LIST_URL = "https://maps.app.goo.gl/xrVhoPWKmunM6TuV8";
const MAP_EMBED =
  "https://www.google.com/maps?q=Trujillo,La+Libertad,Peru&z=11&output=embed";

const STATIONS = [
  {
    id: "est-trujillo-centro",
    nombre: "Estación Trujillo Centro",
    direccion: "Av. España 1234, Trujillo, La Libertad",
    horario: "24 horas",
    telefono: "+51 944 123 456",
    imagen: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=70",
    estado: "Operativa",
    maps_url: MAPS_LIST_URL,
  },
  {
    id: "est-trujillo-norte",
    nombre: "Estación Trujillo Norte",
    direccion: "Panamericana Norte Km 558, Trujillo",
    horario: "05:00 - 23:00",
    telefono: "+51 944 555 222",
    imagen: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=70",
    estado: "Operativa",
    maps_url: MAPS_LIST_URL,
  },
  {
    id: "est-la-libertad-sur",
    nombre: "Estación La Libertad Sur",
    direccion: "Panamericana Sur Km 562, La Libertad",
    horario: "24 horas",
    telefono: "+51 944 777 888",
    imagen: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?auto=format&fit=crop&w=800&q=70",
    estado: "Operativa",
    maps_url: MAPS_LIST_URL,
  },
  {
    id: "est-moche",
    nombre: "Estación Moche",
    direccion: "Av. La Marina s/n, Moche, La Libertad",
    horario: "05:00 - 22:00",
    telefono: "+51 944 333 999",
    imagen: "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?auto=format&fit=crop&w=800&q=70",
    estado: "Operativa",
    maps_url: MAPS_LIST_URL,
  },
];

export default function StationsMap() {
  const [active, setActive] = useState(STATIONS[0]);

  return (
    <section
      id="estaciones"
      data-testid="stations-section"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="container-cp">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <span className="section-label">Mapa & estaciones</span>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-[58px] leading-[1.0] tracking-tight">
              Encuentra estaciones <br />
              <span className="text-[#f5961d]">afiliadas.</span>
            </h2>
            <p className="mt-5 text-white/60 text-base sm:text-lg max-w-lg">
              Consulta ubicaciones, horarios y beneficios disponibles. Comenzamos en Trujillo y La Libertad, preparados para expansión nacional.
            </p>
          </div>
          <a
            href={MAPS_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            data-testid="open-full-map"
          >
            Ver mapa completo
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-6">
          <div className="relative h-[360px] sm:h-[480px] rounded-3xl border border-white/10 overflow-hidden bg-black" data-testid="map-container">
            <iframe
              title="Estaciones Carrier Pro - Trujillo, La Libertad"
              src={MAP_EMBED}
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              style={{ filter: "invert(0.92) hue-rotate(180deg)" }}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
            <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 backdrop-blur-md px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5961d] flicker" /> Trujillo · La Libertad
            </div>
          </div>

          <div className="space-y-3">
            <ActiveCard s={active} />
            <div className="grid grid-cols-2 gap-3">
              {STATIONS.slice(0, 4).map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`text-left rounded-2xl border p-3 transition-all ${
                    active?.id === s.id
                      ? "border-[#f5961d]/50 bg-[#f5961d]/[0.06]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                  data-testid={`station-tab-${s.id}`}
                >
                  <div className="text-xs font-mono uppercase tracking-wider text-white/40">Estación</div>
                  <div className="text-sm font-semibold mt-1 leading-tight">{s.nombre}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between mb-6">
            <h3 className="font-display text-2xl sm:text-3xl">Estaciones disponibles</h3>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              {STATIONS.length} activas
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {STATIONS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group card hover:border-[#f5961d]/30 transition-colors"
                data-testid={`station-card-${s.id}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.imagen} alt={s.nombre} loading="lazy" className="h-full w-full object-cover opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-[#f5961d] text-black px-2.5 py-1">
                    <BadgeCheck size={10} strokeWidth={3} /> Beneficio Carrier Pro
                  </span>
                  <span className="absolute bottom-3 left-3 text-[11px] font-mono uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {s.estado}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold leading-tight">{s.nombre}</h4>
                  <p className="mt-1 text-sm text-white/60">{s.direccion}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5">
                      <Clock size={12} /> {s.horario}
                    </span>
                    <a href={s.maps_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5961d] hover:text-white transition-colors" data-testid={`station-cta-${s.id}`}>
                      Cómo llegar <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveCard({ s }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6" data-testid="active-station-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#f5961d]">Seleccionada</div>
          <h4 className="font-display text-2xl mt-1">{s.nombre}</h4>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 px-2 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {s.estado}
        </span>
      </div>
      <div className="mt-4 space-y-2.5 text-sm text-white/70">
        <div className="flex items-start gap-2.5"><MapPin size={14} className="text-[#f5961d] mt-0.5 shrink-0" /> {s.direccion}</div>
        <div className="flex items-center gap-2.5"><Clock size={14} className="text-[#f5961d]" /> {s.horario}</div>
        <div className="flex items-center gap-2.5"><Phone size={14} className="text-[#f5961d]" /> {s.telefono}</div>
      </div>
      <a href={s.maps_url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full" data-testid="active-station-directions">
        Cómo llegar
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
