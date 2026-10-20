import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { STATS } from "../config/site";

function Counter({ value, prefix, testid }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums" data-testid={testid}>
      {prefix}{n.toLocaleString("es-PE")}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section data-testid="stats-strip" className="relative border-y border-white/10 bg-[#070707]">
      <div className="container-cp grid grid-cols-3 divide-x divide-white/10">
        {STATS.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center justify-center gap-2 px-2 py-10 sm:py-14 text-center">
            <div className={`font-display text-4xl sm:text-6xl lg:text-7xl leading-none ${i === 0 ? "text-[#f5961d]" : "text-white"}`}>
              <Counter value={s.value} prefix={s.prefix} testid={`stat-value-${i}`} />
            </div>
            <div className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.2em] text-white/50">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
