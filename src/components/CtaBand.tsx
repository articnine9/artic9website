import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CtaBandProps {
  title?: string;
  text?: string;
  label?: string;
  href?: string;
}

export default function CtaBand({
  title = "Ready to grow your business?",
  text = "Tell us about your idea and our strategists will get back to you within one business day.",
  label = "Start Your Project",
  href = "/contact"
}: CtaBandProps) {
  return (
    <section className="section cta-band-wrap">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="btn btn-dark" href={href}>
            {label}
            <span className="chip">
              <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
