"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { ArrowRight, Check, Mail, Phone, MapPin } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";

const SERVICE_OPTIONS = ["Branding", "Website", "Mobile App", "Social Media", "SEO", "PPC Ads", "Photo & Video"];

export default function ProjectInquiryForm() {
  const [services, setServices] = useState<string[]>(["Website"]);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const toggle = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 }, colors: ["#FCC603", "#111114", "#FFFFFF"] });
    }, 700);
  };

  return (
    <section className="section project" id="contact">
      <div className="container project-grid">
        <div>
          <h2>
            Got New
            <br />
            Projects?
          </h2>
          <p>
            #LetsWorkTogether — tell us about your idea and our strategists will get back to you within one business
            day.
          </p>
          <div className="contact-lines">
            <a href={`mailto:${ARTIC9_INFO.email}`}>
              <span className="ic">
                <Mail size={20} />
              </span>
              {ARTIC9_INFO.email}
            </a>
            <a href={`tel:${ARTIC9_INFO.phones[0].value}`}>
              <span className="ic">
                <Phone size={20} />
              </span>
              {ARTIC9_INFO.phones.map((p) => p.display).join("  /  ")}
            </a>
            <a href="#footer">
              <span className="ic">
                <MapPin size={20} />
              </span>
              Nagercoil · Chennai
            </a>
          </div>
        </div>

        <div className="form-card">
          {done ? (
            <div className="form-success">
              <div className="ic">
                <Check size={34} strokeWidth={3} />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: 8 }}>Thank you!</h3>
              <p>We&apos;ve received your brief and will be in touch shortly.</p>
              <button className="btn btn-dark btn-plain" style={{ marginTop: 22 }} onClick={() => setDone(false)}>
                Send another
              </button>
            </div>
          ) : (
            <form className="form-grid" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="f-name">Name*</label>
                <input id="f-name" required placeholder="Your full name" />
              </div>
              <div className="field">
                <label htmlFor="f-email">Email*</label>
                <input id="f-email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="field">
                <label htmlFor="f-phone">Phone Number*</label>
                <input id="f-phone" type="tel" required placeholder="+91" />
              </div>
              <div className="field">
                <label htmlFor="f-web">Website</label>
                <input id="f-web" placeholder="www.yourbrand.com" />
              </div>
              <div className="field full">
                <label>What do you need?</label>
                <div className="chips">
                  {SERVICE_OPTIONS.map((s) => (
                    <button
                      type="button"
                      key={s}
                      className={`chip-opt ${services.includes(s) ? "on" : ""}`}
                      onClick={() => toggle(s)}
                      aria-pressed={services.includes(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field full">
                <label htmlFor="f-msg">Message*</label>
                <textarea id="f-msg" required placeholder="Tell us about your project, goals and timeline" />
              </div>
              <div className="field full">
                <button type="submit" className="btn btn-dark" style={{ justifyContent: "space-between" }} disabled={submitting}>
                  {submitting ? "Sending…" : "Submit Your Project"}
                  <span className="chip">
                    <ArrowRight size={18} />
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
