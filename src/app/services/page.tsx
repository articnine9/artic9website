import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import ServiceDetails from "@/components/ServiceDetails";
import ProcessSteps from "@/components/ProcessSteps";
import TechStackBar from "@/components/TechStackBar";
import KnowledgeAccordion from "@/components/KnowledgeAccordion";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, bespoke websites, mobile apps, SaaS products, SEO, PPC, social media marketing and photo & videography — everything your brand needs from Artic9."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Our Services"
        title="Services That"
        highlight="Drive Growth"
        lead="From brand identity and high-performing websites to apps, SEO, paid ads and cinematic production — one creative and technology partner for every stage of your growth."
      >
        <Link className="btn btn-yellow" href="/contact">
          Get a Free Consultation
          <span className="chip">
            <ArrowRight size={18} />
          </span>
        </Link>
        <a className="btn btn-dark" href="#branding">
          Explore Services
          <span className="chip">
            <ArrowRight size={18} />
          </span>
        </a>
      </PageHero>

      <ServicesSection compact />
      <ServiceDetails />
      <ProcessSteps dark />
      <TechStackBar />
      <KnowledgeAccordion />
      <CtaBand title="Have a project in mind?" text="Pick a service — or several — and we'll put together a plan and a quote for you." />
    </>
  );
}
