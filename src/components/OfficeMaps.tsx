import React from "react";
import { MapPin, Phone, Navigation } from "lucide-react";
import { ARTIC9_INFO } from "@/data/artic9Data";
import Reveal from "./Reveal";

export default function OfficeMaps() {
  return (
    <section className="section section-alt" id="studios">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Our Studios</div>
          <h2 className="section-title">
            Come Say <span className="hl">Hello</span>
          </h2>
          <p className="section-lead">Drop by either of our studios — we would love to meet you in person.</p>
        </Reveal>

        <div className="maps">
          {ARTIC9_INFO.offices.map((o, i) => {
            const q = encodeURIComponent(`Artic9, ${o.address}`);
            return (
              <Reveal key={o.city} delay={i * 120}>
                <article className="map-card">
                  <div className="map-frame">
                    <iframe
                      title={`Map of Artic9 ${o.city} office`}
                      src={`https://maps.google.com/maps?q=${q}&z=15&output=embed`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="map-body">
                    <span className="studio-type">{o.type}</span>
                    <h3>{o.city}</h3>
                    <p>
                      <MapPin size={16} /> {o.address}
                    </p>
                    <p>
                      <Phone size={16} />
                      <a href={`tel:${ARTIC9_INFO.phones[i % ARTIC9_INFO.phones.length].value}`}>
                        {ARTIC9_INFO.phones[i % ARTIC9_INFO.phones.length].display}
                      </a>
                    </p>
                    <a
                      className="btn btn-yellow btn-plain"
                      href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation size={16} /> Get Directions
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
