import React from "react";
import { ArrowRight, Rocket, Users } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <b>Since {ARTIC9_INFO.founded}</b>
            Branding · Web · Apps · Marketing
          </div>

          <h1>
            Digital Marketing
            <br />
            Agency in <span className="hl">South India</span>
          </h1>

          <p className="hero-lead">
            We help brands in Nagercoil, Chennai and across the globe grow with creative branding, SEO, PPC,
            social media and high-performing websites &amp; apps.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-yellow" href="#works">
              See our work
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </a>
            <a className="btn btn-dark" href="/contact">
              Request a Consultation
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-avatars" aria-hidden>
              <span>GT</span>
              <span>Yi</span>
              <span>TW</span>
              <span>+</span>
            </div>
            <p>
              <strong>{ARTIC9_INFO.clientsCount} brands trust Artic9</strong>
              from local leaders to national networks
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-shape" />
          <div className="hero-shape-ring" />
          <div className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero-person-cutout.png" alt="Artic9 digital strategist" />
          </div>
          <div className="hero-card c1">
            <span className="ic">
              <Rocket size={20} />
            </span>
            <div>
              <strong>{ARTIC9_INFO.projectsCompleted}</strong>
              <span>Projects launched</span>
            </div>
          </div>
          <div className="hero-card c2">
            <span className="ic">
              <Users size={20} />
            </span>
            <div>
              <strong>{ARTIC9_INFO.experienceYears} Years</strong>
              <span>Of growth partnerships</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
