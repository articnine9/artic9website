"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowRight, Mail } from "lucide-react";
import Artic9Logo from "./Artic9Logo";
import { ARTIC9_INFO } from "@/data/artic9Data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Works", href: "/#works" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href.includes("#") ? false : href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close the drawer whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const phone = ARTIC9_INFO.phones[0];

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" aria-label="Artic9 home">
            <Artic9Logo size="md" />
          </Link>

          <nav className="nav" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={`tel:${phone.value}`}>
              <span className="ic">
                <Phone size={16} />
              </span>
              {phone.display}
            </a>
            <Link className="btn btn-yellow header-cta" href="/contact">
              Get in Touch
              <span className="chip">
                <ArrowRight size={18} />
              </span>
            </Link>
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
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
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
