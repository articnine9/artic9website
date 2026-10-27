import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  crumb: string;
  eyebrow: string;
  title: string;
  highlight: string;
  lead: string;
  children?: React.ReactNode;
}

// Inner-page banner: same yellow-tint + grid backdrop as the home hero, with a breadcrumb.
export default function PageHero({ crumb, eyebrow, title, highlight, lead, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <span className="page-hero-nine" aria-hidden>
        9
      </span>
      <div className="container page-hero-inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={14} />
          <span aria-current="page">{crumb}</span>
        </nav>
        <div className="eyebrow">{eyebrow}</div>
        <h1>
          {title} <span className="hl">{highlight}</span>
        </h1>
        <p className="page-hero-lead">{lead}</p>
        {children && <div className="hero-ctas">{children}</div>}
      </div>
    </section>
  );
}
