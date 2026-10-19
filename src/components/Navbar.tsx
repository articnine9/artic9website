"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Phone, ArrowRight, Mail } from "lucide-react";
import Artic9Logo from "./Artic9Logo";
import { ARTIC9_INFO } from "@/data/artic9Data";

const NAV_LINKS = [
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const phone = ARTIC9_INFO.phones[0];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#top" aria-label="Artic9 home">
            <Artic9Logo size="md" />
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={`tel:${phone.value}`}>
              <span className="ic">
                <Phone size={16} />
              </span>
              {phone.display}
            </a>
            <a className="btn btn-yellow header-cta" href="#contact">
              Get in Touch
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </a>
            <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-top">
          <Artic9Logo size="md" theme="dark" />
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <nav className="drawer-nav">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div>
          <h4>Let&apos;s Work Together</h4>
          <a className="plain" href={`mailto:${ARTIC9_INFO.email}`} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <Mail size={16} /> {ARTIC9_INFO.email}
          </a>
          {ARTIC9_INFO.phones.map((p) => (
            <a key={p.value} className="plain" href={`tel:${p.value}`} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
              <Phone size={16} /> {p.display}
            </a>
          ))}
        </div>

        <div>
          <h4>Our Studios</h4>
          {ARTIC9_INFO.offices.map((o) => (
            <p key={o.city} style={{ marginBottom: 10 }}>
              <strong style={{ color: "#fff" }}>{o.city}</strong> — {o.address}
            </p>
          ))}
        </div>
      </aside>
    </>
  );
}
