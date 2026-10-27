import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsCounter from "@/components/StatsCounter";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectInquiryForm from "@/components/ProjectInquiryForm";
import ClientsMarquee from "@/components/ClientsMarquee";
import TechStackBar from "@/components/TechStackBar";
import TestimonialsSection from "@/components/TestimonialsSection";
import KnowledgeAccordion from "@/components/KnowledgeAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsCounter />
      <AboutSection />
      <CaseStudiesSection />
      <SolutionsSection />
      <ProjectInquiryForm />
      <ClientsMarquee />
      <TechStackBar />
      <TestimonialsSection />
      <KnowledgeAccordion />
    </>
  );
}
