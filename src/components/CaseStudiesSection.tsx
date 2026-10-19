"use client";

import React, { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { CASE_STUDIES, type CaseStudy } from "@/data/artic9Data";
import Reveal from "./Reveal";

const FILTERS = ["All", "Branding", "Web", "Social", "Video"];

function Featured({ c, index }: { c: CaseStudy; index: number }) {
  const gallery = c.gallery ?? [c.image];
  const [shot, setShot] = useState(0);

  return (
    <article className="feat">
      <div className="feat-media">
        {gallery.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={src} src={src} alt={`${c.client} work ${i + 1}`} className={i === shot ? "on" : ""} />
        ))}
        {c.badge && <span className="work-badge">{c.badge}</span>}
        {gallery.length > 1 && (
          <div className="feat-thumbs">
            {gallery.map((src, i) => (
              <button
                key={src}
                className={i === shot ? "on" : ""}
                onClick={() => setShot(i)}
                aria-label={`Show image ${i + 1}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="feat-body">
        <div className="feat-top">
          <span className="feat-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="feat-meta">
            {c.client}
            <br />
            <small>{c.industry}</small>
          </span>
        </div>
        <h3>{c.title}</h3>
        {c.metric && (
          <div className="feat-metric">
            <strong>{c.metric.value}</strong>
            <span>{c.metric.label}</span>
          </div>
        )}
        <ul className="feat-list">
          {c.highlights.slice(0, 3).map((h) => (
            <li key={h}>
              <Check size={14} strokeWidth={3} />
              {h}
            </li>
          ))}
        </ul>
        <div className="feat-tags">
          {c.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Tile({ c, index }: { c: CaseStudy; index: number }) {
  return (
    <article className="tile">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.image} alt={c.client} loading="lazy" className={`tile-img tile-${c.id}`} />
      <div className="tile-shade" />
      <div className="tile-head">
        {c.badge && <span className="work-badge">{c.badge}</span>}
        <span className="tile-num">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="tile-body">
        <span className="tile-meta">
          {c.client.split("(")[0].trim()} · {c.industry}
        </span>
        <h3>{c.title}</h3>
        <div className="tile-more">
          {c.metric && (
            <div className="tile-metric">
              <strong>{c.metric.value}</strong>
              <span>{c.metric.label}</span>
            </div>
          )}
          <div className="feat-tags">
            {c.tags.slice(0, 3).map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
      <span className="tile-go">
        <ArrowUpRight size={20} />
      </span>
    </article>
  );
}

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState("All");

  const items = useMemo(
    () => (filter === "All" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.categories.includes(filter))),
    [filter]
  );
  const [first, ...rest] = items;
  const order = (c: CaseStudy) => CASE_STUDIES.indexOf(c);

  return (
    <section className="section works" id="works">
      <div className="container">
        <Reveal className="works-head">
          <div>
            <div className="eyebrow">Our Works</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Work That <span className="hl">Speaks</span>
            </h2>
          </div>
          <div className="works-filters" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={filter === f ? "on" : ""}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div key={filter} className="works-body">
          {first && <Featured c={first} index={order(first)} />}
          {rest.length > 0 && (
            <div className="tiles">
              {rest.map((c) => (
                <Tile key={c.id} c={c} index={order(c)} />
              ))}
            </div>
          )}
        </div>

        <div className="works-cta">
          <p>
            Have a project in mind? <strong>Let&apos;s make it our next success story.</strong>
          </p>
          <a className="btn btn-yellow" href="#contact">
            Start Your Project
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
