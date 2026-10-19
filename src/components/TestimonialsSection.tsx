import React from "react";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/artic9Data";
import Reveal from "./Reveal";

export default function TestimonialsSection() {
  return (
    <section className="section section-dark">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Testimonials</div>
          <h2 className="section-title">
            What Our <span className="hl">Clients Say</span>
          </h2>
        </Reveal>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="testi" style={{ height: "100%" }}>
                <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} size={18} fill="currentColor" />
                  ))}
                </div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="testi-author">
                  <span className="av">{t.avatarInitials}</span>
                  <div>
                    <strong>{t.author}</strong>
                    <span>
                      {t.role}, {t.organization}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
