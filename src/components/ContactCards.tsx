import React from "react";
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";
import Reveal from "./Reveal";

export default function ContactCards() {
  const whatsapp = ARTIC9_INFO.socials.find((s) => s.name === "WhatsApp");
  const hq = ARTIC9_INFO.offices[0];

  const cards = [
    {
      icon: Phone,
      title: "Call Us",
      lines: ARTIC9_INFO.phones.map((p) => ({ text: p.display, href: `tel:${p.value}` }))
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: [{ text: ARTIC9_INFO.email, href: `mailto:${ARTIC9_INFO.email}` }]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      lines: whatsapp ? [{ text: `Chat on ${whatsapp.handle}`, href: whatsapp.href }] : []
    },
    {
      icon: MapPin,
      title: "Visit Our HQ",
      lines: [{ text: hq.address, href: "#studios" }]
    }
  ];

  return (
    <section className="section contact-cards-wrap">
      <div className="container contact-cards">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={i * 80}>
              <div className="contact-card">
                <span className="contact-card-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </span>
                <h3>{c.title}</h3>
                {c.lines.map((l) => (
                  <a
                    key={l.text}
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.text}
                  </a>
                ))}
                <ArrowUpRight className="contact-card-go" size={20} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
