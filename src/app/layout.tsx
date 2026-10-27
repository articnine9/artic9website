import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Artic9 Creative Agency | Branding, Bespoke Web, Mobile Apps & ROI-Driven Marketing",
    template: "%s | Artic9 Creative Agency"
  },
  description: "Artic Nine Creative Agency was founded in 2017 in Nagercoil & Chennai. We help brands grow with creative power, high-impact tech, and results-driven marketing. Over 2599+ launched projects and 299+ clients.",
  keywords: [
    "Artic9",
    "Artic Nine Creative Agency",
    "Digital Marketing Agency Nagercoil",
    "Branding Agency Chennai",
    "Bespoke Web Development",
    "Next.js Development Agency",
    "Mobile App Development",
    "PPC Advertising",
    "SEO Services Tamil Nadu",
    "Creative Agency India"
  ],
  authors: [{ name: "Artic Nine Creative Agency" }],
  openGraph: {
    title: "Artic9 Creative Agency | Branding, Web, Apps & Performance Marketing",
    description: "Helping your business grow with latest technology and effective marketing. 2599+ successful projects, 299+ notable clients.",
    url: "https://www.artic9.com",
    siteName: "Artic9 Creative Agency",
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
