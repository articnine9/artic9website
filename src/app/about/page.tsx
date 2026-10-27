import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, Target, Layers, Megaphone, BarChart3, Clapperboard, Globe2, UserCheck, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import StatsCounter from "@/components/StatsCounter";
import ProcessSteps from "@/components/ProcessSteps";
import ClientsMarquee from "@/components/ClientsMarquee";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaBand from "@/components/CtaBand";
import { ARTIC9_INFO } from "@/data/artic9Data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Artic Nine Creative Agency was founded in 2017 in Nagercoil with a global vision. Meet the 33+ creative minds behind 2599+ projects for 299+ brands."
};

const INDUSTRIES = ["EdTech", "Retail", "Healthcare", "F&B", "Travel", "E-commerce"];

const VALUES = [
  { icon: Layers, title: "Creative + tech under one roof", text: "Designers, developers, filmmakers and marketers in one team — no clunky third-party handoffs." },
  { icon: Megaphone, title: "Offline + online, 360°", text: "From airport, bus-back and event branding to Meta, Google and viral social campaigns." },
  { icon: BarChart3, title: "Transparent reporting", text: "Clear milestones, regular updates and reports that show exactly what your budget delivers." },
  { icon: Clapperboard, title: "In-house production crew", text: "Photo, video, podcast and drone production handled by our own team, script to colour grade." },
  { icon: Globe2, title: "Local insight, global standards", text: "Rooted in South India, building work that competes with the best anywhere in the world." },
  { icon: UserCheck, title: "A dedicated project manager", text: "One point of contact who knows your brand and keeps every deliverable on track." }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About Artic9"
        title="We Build Brands That"
        highlight="People Remember"
        lead="A creative team that exists to help businesses succeed in an online world — designing and building bespoke websites, branding and internet marketing from our offices in Nagercoil and Chennai."
      >
        <Link className="btn btn-yellow" href="/contact">
          Work With Us
          <span className="chip">
            <ArrowRight size={18} />
          </span>
        </Link>
        <Link className="btn btn-dark" href="/#works">
          See Our Work
          <span className="chip">
            <ArrowRight size={18} />
          </span>
        </Link>
      </PageHero>

      {/* Our story */}
      <section className="section">
        <div className="container split">
          <Reveal className="split-media">
            <div className="main-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/team-artic9.jpg" alt="The Artic9 team" style={{ objectPosition: "60% 30%" }} />
            </div>
            <div className="tag">
              <strong>{ARTIC9_INFO.experienceYears}</strong>
              <span>Years of creative power</span>
            </div>
          </Reveal>

          <Reveal className="split-copy" delay={120}>
            <div className="eyebrow">Our Story</div>
            <h2 className="section-title">
              A Powerhouse of Creativity with a <span className="hl">Global Vision</span>
            </h2>
            <p>
              Artic Nine Creative Agency was founded in {ARTIC9_INFO.founded} at the southern end of India with a
              global vision. Today a team of {ARTIC9_INFO.teamSize} talented minds delivers thumping success across
              business verticals — {ARTIC9_INFO.projectsCompleted} projects launched for {ARTIC9_INFO.clientsCount}{" "}
              brands.
            </p>
            <p>
              We work with new and growing businesses, combining branding, technology and marketing so every rupee
              of your budget works harder.
            </p>
            <div className="industry-chips">
              <span className="industry-label">Industries we serve</span>
              {INDUSTRIES.map((i) => (
                <span key={i} className="industry-chip">
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="section section-alt">
        <div className="container vm-grid">
          <Reveal className="vm-card vm-yellow">
            <span className="vm-icon">
              <Eye size={28} />
            </span>
            <div className="eyebrow">Our Vision</div>
            <p>
              We work with new and growing businesses by providing affordable digital marketing services that help
              them experience growth, innovation and global reach they might have missed before.
            </p>
          </Reveal>
          <Reveal className="vm-card vm-dark" delay={120}>
            <span className="vm-icon">
              <Target size={28} />
            </span>
            <div className="eyebrow">Our Mission</div>
            <p>
              We believe in a future where companies can speed up their digital transformation using our valuable
              services, thereby bringing unprecedented revenue and growth.
            </p>
          </Reveal>
        </div>
      </section>

      <StatsCounter showCta={false} />

      {/* Why Artic9 */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Why Artic9</div>
            <h2 className="section-title">
              What Makes Us <span className="hl">Different</span>
            </h2>
          </Reveal>
          <div className="values-grid">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={(i % 3) * 90}>
                  <div className="value-card">
                    <span className="value-icon">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Meet the team */}
      <section className="section">
        <div className="container">
          <Reveal className="team-banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team-artic9.jpg" alt="The Artic9 team together at the Nagercoil studio" loading="lazy" />
            <div className="team-caption">
              <div className="eyebrow">Meet the Team</div>
              <h2>
                {ARTIC9_INFO.teamSize} designers, developers, filmmakers &amp; strategists
              </h2>
              <p>One family, one roof — and one goal: your growth.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Studios */}
      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head center">
            <div className="eyebrow">Our Studios</div>
            <h2 className="section-title">
              Two Cities, <span className="hl">One Team</span>
            </h2>
          </Reveal>
          <div className="studios">
            {ARTIC9_INFO.offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 120}>
                <div className={`studio ${i === 0 ? "studio-hq" : ""}`}>
                  <span className="studio-type">{o.type}</span>
                  <h3>{o.city}</h3>
                  <span className="studio-tag">{o.highlight}</span>
                  <p>
                    <MapPin size={16} /> {o.address}
                  </p>
                  <Link className="link-more" href="/contact">
                    Visit us <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsMarquee />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
