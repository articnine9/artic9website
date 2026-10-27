import React from "react";
import { ArrowRight, Rocket, Users } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        {/* Left Column: Heading, Subtitle, CTAs & Social Proof */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-tag">Since {ARTIC9_INFO.founded}</span>
            <span className="hero-badge-text">Branding · Web · Apps · Marketing</span>
          </div>

          <h1 className="hero-title">
            A Digital Marketing
            <br />
            Agency Without
            <br />
            <span className="hl-borders">Borders</span>
          </h1>

          <p className="hero-lead">
            We help brands across India, the UAE, the UK, and the US grow through creative branding,
            SEO, digital marketing, and high-performing websites and apps.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-yellow hero-btn" href="#works">
              See our work
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </a>
            <a className="btn btn-dark hero-btn" href="/contact">
              Request a Consultation
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-avatars" aria-hidden="true">
              <span className="av-gt">GT</span>
              <span className="av-yi">Yi</span>
              <span className="av-tw">TW</span>
              <span className="av-plus">+</span>
            </div>
            <div className="hero-trust-copy">
              <strong>{ARTIC9_INFO.clientsCount} brands trust Artic9</strong>
              <span>from local leaders to national networks</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Pixar-Style Character, Ambient Arc, Glowing Bulb & Metric Badges */}
        <div className="hero-visual-wrapper">
          <div className="hero-visual">
            {/* Elegant Background Curved Arc */}
            <svg
              className="hero-arc-line"
              viewBox="0 0 520 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 120 110 C 260 20, 480 60, 490 230 C 500 360, 430 430, 310 460"
                stroke="#FCC603"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            {/* Glowing 3D Lightbulb with Radiant Accents */}
            <div className="hero-lightbulb-wrap" aria-hidden="true">
              <svg
                className="hero-bulb-svg"
                viewBox="0 0 90 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="bulbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFE169" />
                    <stop offset="65%" stopColor="#FCC603" />
                    <stop offset="100%" stopColor="#E5AC00" />
                  </linearGradient>
                  <filter id="bulbGlow" x="-25%" y="-25%" width="150%" height="150%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                {/* Radiant rays */}
                <path d="M 24 20 L 14 12" stroke="#FCC603" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 45 12 L 45 2" stroke="#FCC603" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 66 20 L 76 12" stroke="#FCC603" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M 78 42 L 88 40" stroke="#FCC603" strokeWidth="3.5" strokeLinecap="round" />
                {/* Glow aura */}
                <circle cx="45" cy="50" r="28" fill="#FCC603" opacity="0.28" filter="url(#bulbGlow)" />
                {/* Bulb glass */}
                <path
                  d="M 45 24 C 30 24, 20 35, 20 50 C 20 60, 27 68, 33 74 L 35 80 L 55 80 L 57 74 C 63 68, 70 60, 70 50 C 70 35, 60 24, 45 24 Z"
                  fill="url(#bulbGrad)"
                />
                {/* Filament */}
                <path
                  d="M 37 66 L 39 46 C 39 42, 42 40, 45 40 C 48 40, 51 42, 51 46 L 53 66"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                {/* Base / Screw socket */}
                <rect x="35" y="80" width="20" height="4" rx="2" fill="#2B2B2E" />
                <rect x="37" y="85" width="16" height="4" rx="2" fill="#1B1B1F" />
                <rect x="40" y="90" width="10" height="3" rx="1.5" fill="#111114" />
              </svg>
            </div>

            {/* Sparkle Ticks near character */}
            <div className="hero-sparkle" aria-hidden="true">
              <span className="sp-1" />
              <span className="sp-2" />
              <span className="sp-3" />
            </div>

            {/* Main 3D Person, Armchair & Plant Character Image */}
            <div className="hero-char-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-3d-character.png"
                alt="Artic9 Creative Marketer - 3D Character with Laptop and Plant"
                className="hero-char-img"
              />
            </div>

            {/* Floating 3D Metric Card 1: 2599+ Projects launched */}
            <div className="hero-metric-card c-projects">
              <div className="card-badge">
                <Rocket size={22} className="card-icon" />
              </div>
              <div className="card-text">
                <strong className="card-val">{ARTIC9_INFO.projectsCompleted}</strong>
                <span className="card-lbl">Projects launched</span>
              </div>
            </div>

            {/* Floating 3D Metric Card 2: 09+ Years Of growth partnerships */}
            <div className="hero-metric-card c-growth">
              <div className="card-badge">
                <Users size={22} className="card-icon" />
              </div>
              <div className="card-text">
                <strong className="card-val">{ARTIC9_INFO.experienceYears} Years</strong>
                <span className="card-lbl">Of growth partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
