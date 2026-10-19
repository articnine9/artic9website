"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function SolutionsSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="section section-alt">
      <div className="container solutions">
        <div className="solutions-side">
          <div className="eyebrow">Why Artic9</div>
          <h2 className="section-title">
            Smart Digital Solutions to <span className="hl">Elevate</span> Your Brand
          </h2>
          <p style={{ marginBottom: 28 }}>
            Success starts with the right partner. Since 2019 we have helped businesses across Tamil Nadu, India and
            beyond build strong online presences through strategic, results-driven marketing.
          </p>
          <a className="btn btn-yellow" href="#contact">
            Let&apos;s Grow Together
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

        <div className="solutions-body">
          <div className={`readmore-wrap ${open ? "open" : ""}`}>
            <h3>Top Digital Marketing Company in South India</h3>
            <p>
              Looking for an agency that delivers measurable growth? Artic9 offers results-driven branding, SEO, PPC,
              social media and web services that help businesses build visibility, generate leads and grow revenue.
            </p>

            <h3>Why Businesses Choose Artic9</h3>
            <ul>
              <li>
                <strong>{"07+"} years of experience</strong> and 1500+ projects launched for 250+ brands.
              </li>
              <li>
                <strong>Creative + tech under one roof</strong> — designers, developers, film crew and marketers.
              </li>
              <li>
                <strong>Offline + online</strong> — from airport and bus-back campaigns to Meta and Google ads.
              </li>
              <li>
                <strong>Transparent reporting</strong> with dedicated project managers and weekly updates.
              </li>
            </ul>

            <h3>Our Digital Marketing Services</h3>
            <ol>
              <li>
                <strong>1. Search Engine Optimization (SEO):</strong> technical audits, keyword architecture and local
                SEO that put you on page one for terms that generate revenue.
              </li>
              <li>
                <strong>2. Pay-Per-Click Advertising (PPC):</strong> Google Search, Performance Max and Meta ads for
                instant visibility and quick lead generation.
              </li>
              <li>
                <strong>3. Social Media Marketing:</strong> content strategy, high-retention reels and influencer
                collaborations that build loyal communities.
              </li>
              <li>
                <strong>4. Branding &amp; Creative:</strong> logo, identity systems, packaging, signage and vehicle
                branding.
              </li>
              <li>
                <strong>5. Website &amp; App Development:</strong> fast, mobile-first, SEO-friendly websites and
                cross-platform mobile apps.
              </li>
              <li>
                <strong>6. Photo &amp; Videography:</strong> brand films, product shoots, podcasts and drone
                cinematography by our in-house crew.
              </li>
            </ol>

            <h3>Serving Businesses Across Tamil Nadu &amp; Beyond</h3>
            <p>
              With our headquarters in Nagercoil and a corporate branch in Chennai, we blend local market insight
              with world-class standards — and work with clients across India and global markets through structured
              sprints and video reporting.
            </p>
          </div>
          <button className="btn btn-dark btn-plain readmore-btn" onClick={() => setOpen(!open)}>
            {open ? "Read Less" : "Read More"}
            <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .3s" }} />
          </button>
        </div>
      </div>
    </section>
  );
}
