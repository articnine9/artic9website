import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactCards from "@/components/ContactCards";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import OfficeMaps from "@/components/OfficeMaps";
import KnowledgeAccordion from "@/components/KnowledgeAccordion";
import { ARTIC9_INFO } from "@/data/artic9Data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Artic9 about your branding, website, app or marketing project. Call +91 90034 42463, email hi@artic9.com or visit our Nagercoil and Chennai studios."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in Touch"
        title="Let's Work"
        highlight="Together"
        lead="Tell us about your brand, your goals and your timeline. Our strategists will get back to you within one business day."
      />

      <ContactCards />
      <ProjectInquiryForm />
      <OfficeMaps />

      <section className="section socials-strip">
        <div className="container socials-strip-inner">
          <div>
            <div className="eyebrow">Follow Our Work</div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Find Us <span className="hl">Online</span>
            </h2>
          </div>
          <div className="social-pills">
            {ARTIC9_INFO.socials.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer">
                <strong>{s.name}</strong>
                <span>{s.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <KnowledgeAccordion />
    </>
  );
}
