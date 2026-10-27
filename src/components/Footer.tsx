import React from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import Artic9Logo from "./Artic9Logo";
import { ARTIC9_INFO } from "@/data/artic9Data";

const QUICK = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/contact" }
];

const SERVICES = [
  { label: "Branding & Creative", id: "branding" },
  { label: "Website Development", id: "web-development" },
  { label: "Mobile Apps", id: "mobile-apps" },
  { label: "Social Media Marketing", id: "social-media" },
  { label: "SEO & PPC", id: "seo" },
  { label: "Photo & Videography", id: "photo-videography" }
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>
            Let&apos;s Work <span>Together</span>
          </h2>
          <a className="btn btn-yellow" href="/contact">
            Start a Project
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </a>
        </div>

        <div className="footer-grid">
          <div>
            <Artic9Logo size="lg" theme="dark" />
            <p style={{ marginTop: 18, maxWidth: 320 }}>{ARTIC9_INFO.tagline}</p>
            <div className="socials">
              {ARTIC9_INFO.socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              {QUICK.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href={`/services#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in Touch</h4>
            <ul style={{ marginBottom: 22 }}>
              <li>
                <a href={`mailto:${ARTIC9_INFO.email}`} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                  <Mail size={16} /> {ARTIC9_INFO.email}
                </a>
              </li>
              {ARTIC9_INFO.phones.map((p) => (
                <li key={p.value}>
                  <a href={`tel:${p.value}`} style={{ display: "inline-flex", gap: 10, alignItems: "center" }}>
                    <Phone size={16} /> {p.display}
                  </a>
                </li>
              ))}
            </ul>
            {ARTIC9_INFO.offices.map((o) => (
              <div className="office" key={o.city}>
                <strong>{o.city}</strong>
                <p>{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Artic Nine Creative Agency. All rights reserved.</span>
          <span>{ARTIC9_INFO.website}</span>
        </div>
      </div>
    </footer>
  );
}
