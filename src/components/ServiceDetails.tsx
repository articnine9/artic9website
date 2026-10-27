"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Monitor,
  Share2,
  Smartphone,
  Layers,
  TrendingUp,
  Target,
  Video,
  MousePointerClick,
  Eye,
  IndianRupee
} from "lucide-react";
import { SERVICES, type ServiceItem } from "@/data/artic9Data";
import { PhoneMock, SearchMock } from "./ServicesSection";
import Reveal from "./Reveal";

const ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Sparkles,
  Monitor,
  Share2,
  Smartphone,
  Layers,
  TrendingUp,
  Target,
  Video
};

const SHORT: Record<string, string> = {
  branding: "Branding",
  "web-development": "Websites",
  "social-media": "Social Media",
  "mobile-apps": "Mobile Apps",
  "product-development": "Product & SaaS",
  seo: "SEO",
  "ppc-advertising": "PPC Ads",
  "photo-videography": "Photo & Video"
};

function CodeMock() {
  return (
    <div className="mock-code" aria-hidden>
      <div className="mock-code-bar">
        <i />
        <i />
        <i />
        <span>dashboard.tsx</span>
      </div>
      <pre>
        <code>
          <b>export default</b> function <em>Dashboard</em>() {"{"}
          {"\n"}  const users = <em>useLiveUsers</em>();
          {"\n"}  return (
          {"\n"}    &lt;<b>Grid</b> cols={"{"}3{"}"}&gt;
          {"\n"}      &lt;<b>Metric</b> label=&quot;MRR&quot; /&gt;
          {"\n"}      &lt;<b>Chart</b> data={"{"}users{"}"} /&gt;
          {"\n"}    &lt;/<b>Grid</b>&gt;
          {"\n"}  );
          {"\n"}
          {"}"}
        </code>
      </pre>
      <div className="mock-code-chip">
        <Check size={14} strokeWidth={3} /> Deployed to production
      </div>
    </div>
  );
}

function AdsMock() {
  const rows = [
    { icon: Eye, label: "Impressions", value: "1.8M" },
    { icon: MousePointerClick, label: "Clicks", value: "42.6K" },
    { icon: IndianRupee, label: "Cost / lead", value: "↓ 38%" }
  ];
  return (
    <div className="mock-ads" aria-hidden>
      <div className="mock-ads-head">
        <strong>Campaign performance</strong>
        <span>Last 30 days</span>
      </div>
      <div className="mock-ads-rows">
        {rows.map((r) => {
          const Icon = r.icon;
          return (
            <div key={r.label}>
              <Icon size={16} />
              <span>{r.label}</span>
              <b>{r.value}</b>
            </div>
          );
        })}
      </div>
      <div className="mock-ads-chart">
        {[30, 42, 38, 55, 50, 68, 62, 80, 74, 92].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

function Visual({ s }: { s: ServiceItem }) {
  if (s.bgImage) {
    return (
      <div className={`svc-visual svc-photo svc-photo-${s.id}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={s.bgImage} alt={`${s.title} work by Artic9`} loading="lazy" />
      </div>
    );
  }
  const mock =
    s.id === "mobile-apps" ? <PhoneMock /> : s.id === "seo" ? <SearchMock /> : s.id === "ppc-advertising" ? <AdsMock /> : <CodeMock />;
  return <div className={`svc-visual svc-mock svc-mock-${s.id}`}>{mock}</div>;
}

export default function ServiceDetails() {
  const [active, setActive] = useState(SERVICES[0].id);

  useEffect(() => {
    const els = SERVICES.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // keep the active pill visible in the horizontally scrolling index (phones)
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".svc-index");
    const pill = nav?.querySelector<HTMLElement>(`a[href="#${active}"]`);
    if (!nav || !pill) return;
    nav.scrollTo({ left: pill.offsetLeft - (nav.clientWidth - pill.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  return (
    <section className="section svc-section">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">What We Offer</div>
          <h2 className="section-title">
            Everything Your Brand Needs, <span className="hl">Under One Roof</span>
          </h2>
          <p className="section-lead">
            Eight specialist teams, one seamless partner — explore each service and what you get.
          </p>
        </Reveal>

        <nav className="svc-index" aria-label="Services">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""}>
                <Icon size={16} />
                {SHORT[s.id] ?? s.title}
              </a>
            );
          })}
        </nav>

        <div className="svc-list">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <article id={s.id} key={s.id} className={`svc-row ${i % 2 ? "flip" : ""}`}>
                <Reveal className="svc-media">
                  <Visual s={s} />
                  <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
                </Reveal>

                <Reveal className="svc-copy" delay={100}>
                  <div className="svc-cat">
                    <span className="svc-icon">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    {s.category}
                  </div>
                  <h3>{s.title}</h3>
                  <p className="svc-tagline">{s.tagline}</p>
                  <p>{s.description}</p>
                  <ul className="svc-features">
                    {s.features.map((f) => (
                      <li key={f}>
                        <span className="tick">
                          <Check size={13} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="svc-deliver">
                    <span>You get</span>
                    {s.deliverables.map((d) => (
                      <em key={d}>{d}</em>
                    ))}
                  </div>
                  <Link className="btn btn-dark" href={`/contact?service=${s.id}`}>
                    Start this project
                    <span className="chip">
                      <ArrowRight size={18} />
                    </span>
                  </Link>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
