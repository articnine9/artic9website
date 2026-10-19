import React from "react";
import { CLIENT_LOGOS } from "@/data/artic9Data";
import Reveal from "./Reveal";

function Row({ items, reverse = false }: { items: typeof CLIENT_LOGOS; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className={`marquee-track ${reverse ? "rev" : ""}`}>
        {doubled.map((c, i) => (
          <div className="client-logo" key={`${c.name}-${i}`} aria-hidden={i >= items.length}>
            <strong>{c.name}</strong>
            <span>{c.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  const half = Math.ceil(CLIENT_LOGOS.length / 2);
  return (
    <section className="section" id="clients">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Our Clients</div>
          <h2 className="section-title">
            Trusted By <span className="hl">Great Brands</span>
          </h2>
          <p className="section-lead">
            Artic9 partners with renowned brands — from heritage businesses to national networks — to deliver
            branding, web, apps and marketing that make a difference.
          </p>
        </Reveal>
      </div>
      <Row items={CLIENT_LOGOS.slice(0, half)} />
      <Row items={CLIENT_LOGOS.slice(half)} reverse />
    </section>
  );
}
