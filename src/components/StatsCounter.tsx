"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { STATS } from "@/data/artic9Data";
import Reveal from "./Reveal";

function CountUp({ value }: { value: string }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const pad = value.startsWith("0") ? value.match(/^\d+/)?.[0].length ?? 0 : 0;
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {String(n).padStart(pad, "0")}
      {suffix}
    </span>
  );
}

export default function StatsCounter({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="section section-dark">
      <div className="container">
        <div className="perf-grid">
          <Reveal>
            <div className="eyebrow">Partner in Performance</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Driving Performance, <span className="hl">Delivering Growth</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ fontSize: "1.08rem", marginBottom: 26 }}>
              We are more than just a service provider — we are your partner in performance, helping businesses
              grow with the latest technology and effective marketing.
            </p>
            {showCta && (
              <a className="btn btn-yellow" href="/about">
                Know More
                <span className="chip">
                  <ArrowRight size={18} />
                </span>
              </a>
            )}
          </Reveal>
        </div>

        <div className="stats">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat-value">
                <CountUp value={s.value} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
