import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";
import Reveal from "./Reveal";

const POINTS = [
  "In-house team of designers, developers & strategists",
  "Studios in Nagercoil and Chennai, serving clients worldwide",
  "Data-driven, ROI-focused approach with transparent reporting",
  "Custom strategies for every brand — no templates"
];

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container split">
        <Reveal className="split-media">
          <div className="main-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portfolio/storytelling-video.jpg" alt="Artic9 photo and video production work" />
          </div>
          <div className="accent">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/truck-branding.jpg" alt="Artic9 vehicle branding work" />
          </div>
          <div className="tag">
            <strong>{ARTIC9_INFO.experienceYears}</strong>
            <span>Years of creative power</span>
          </div>
        </Reveal>

        <Reveal className="split-copy" delay={120}>
          <div className="eyebrow">What We Do</div>
          <h2 className="section-title">
            We Build Brands That <span className="hl">People Remember</span>
          </h2>
          <p>
            Founded in {ARTIC9_INFO.founded}, Artic Nine Creative Agency transforms brands with innovative and
            results-driven strategies. We don&apos;t just create campaigns — we build digital experiences that drive
            engagement and growth.
          </p>
          <p>
            From identity systems and high-performing websites to mobile apps, SEO, PPC and social media, we bring
            your vision to life and connect it with the right audience.
          </p>
          <ul className="check-list">
            {POINTS.map((p) => (
              <li key={p}>
                <span className="tick">
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <a className="btn btn-dark" href="/about">
            View More
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
