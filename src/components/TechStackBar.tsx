"use client";

import React, { useState } from "react";

interface Tool {
  name: string;
  mono?: string;
  fg?: string;
  bg?: string;
  solid?: boolean;
}

// Adobe-style app tiles use each product's own colours; everything else uses the Artic9 tile.
const adobe = (name: string, mono: string, fg: string, bg: string): Tool => ({ name, mono, fg, bg });
// Solid brand-colour tile: background colour, white text unless a text colour is given.
const t = (name: string, mono: string, bg: string, fg = "#FFFFFF"): Tool => ({ name, mono, fg, bg, solid: true });

const TECH: Record<string, Tool[]> = {
  Design: [
    adobe("Photoshop", "Ps", "#31A8FF", "#001E36"),
    adobe("Illustrator", "Ai", "#FF9A00", "#330000"),
    adobe("InDesign", "Id", "#FF3366", "#49021F"),
    adobe("Lightroom", "Lr", "#31A8FF", "#001E36"),
    adobe("Adobe XD", "Xd", "#FF61F6", "#470137"),
    { name: "Figma", mono: "Fi", fg: "#FFFFFF", bg: "#1E1E1E" },
    { name: "Canva", mono: "Cv", fg: "#FFFFFF", bg: "#00C4CC" },
    { name: "CorelDRAW", mono: "Cd", fg: "#FFFFFF", bg: "#2B9B3C" }
  ],
  "Video & Motion": [
    adobe("Premiere Pro", "Pr", "#9999FF", "#00005B"),
    adobe("After Effects", "Ae", "#9999FF", "#00005B"),
    adobe("Audition", "Au", "#00E4BB", "#00005B"),
    adobe("Media Encoder", "Me", "#9999FF", "#00005B"),
    { name: "DaVinci Resolve", mono: "Dv", fg: "#FFFFFF", bg: "#233A51" },
    { name: "Final Cut Pro", mono: "Fc", fg: "#FFFFFF", bg: "#2B2B2E" },
    { name: "Cinema 4D", mono: "C4", fg: "#FFFFFF", bg: "#011A6A" },
    { name: "Blender", mono: "Bl", fg: "#FFFFFF", bg: "#E87D0D" },
    { name: "CapCut", mono: "Cc", fg: "#FFFFFF", bg: "#111114" }
  ],
  "AI Tools": [
    { name: "ChatGPT", mono: "GP", fg: "#FFFFFF", bg: "#10A37F" },
    { name: "Claude", mono: "Cl", fg: "#FFFFFF", bg: "#D97757" },
    { name: "Gemini", mono: "Ge", fg: "#FFFFFF", bg: "#4285F4" },
    { name: "Midjourney", mono: "Mj", fg: "#FFFFFF", bg: "#111114" },
    adobe("Adobe Firefly", "Ff", "#FFFFFF", "#EB1000"),
    { name: "Runway", mono: "Rw", fg: "#FFFFFF", bg: "#2B2B2E" },
    { name: "ElevenLabs", mono: "11", fg: "#FFFFFF", bg: "#111114" },
    { name: "HeyGen", mono: "Hg", fg: "#FFFFFF", bg: "#7559FF" },
    { name: "Leonardo AI", mono: "Le", fg: "#FFFFFF", bg: "#6D3BEB" },
    { name: "Stable Diffusion", mono: "SD", fg: "#FFFFFF", bg: "#5B2EBC" },
    { name: "GitHub Copilot", mono: "Co", fg: "#FFFFFF", bg: "#24292F" }
  ],
  "Front-End": [
    t("React", "Re", "#20232A", "#61DAFB"),
    t("Next.js", "N", "#000000"),
    t("Vue.js", "Vu", "#35495E", "#42B883"),
    t("Angular", "Ng", "#DD0031"),
    t("TypeScript", "TS", "#3178C6"),
    t("JavaScript", "JS", "#F7DF1E", "#111114"),
    t("HTML5", "H5", "#E34F26"),
    t("CSS3", "C3", "#1572B6"),
    t("Tailwind CSS", "Tw", "#06B6D4"),
    t("Bootstrap", "Bs", "#7952B3"),
    t("Sass", "Sa", "#CC6699"),
    t("Vite", "Vi", "#646CFF"),
    t("Redux", "Rx", "#764ABC"),
    t("Three.js", "3J", "#111114"),
    t("GSAP", "GS", "#88CE02", "#111114"),
    t("Framer Motion", "Fm", "#0055FF")
  ],
  Backend: [
    t("Node.js", "No", "#339933"),
    t("Express", "Ex", "#111114"),
    t("NestJS", "Ne", "#E0234E"),
    t("PHP", "PHP", "#777BB4"),
    t("Laravel", "La", "#FF2D20"),
    t("Python", "Py", "#3776AB", "#FFD43B"),
    t("Django", "Dj", "#092E20"),
    t("FastAPI", "Fa", "#009688"),
    t(".NET", ".N", "#512BD4"),
    t("Java", "Jv", "#E76F00"),
    t("Spring Boot", "Sb", "#6DB33F"),
    t("GraphQL", "GQ", "#E10098"),
    t("REST APIs", "API", "#2B2B2E", "#FCC603"),
    t("Socket.IO", "So", "#010101")
  ],
  Database: [
    t("MongoDB", "Mg", "#47A248"),
    t("MySQL", "My", "#4479A1"),
    t("PostgreSQL", "Pg", "#4169E1"),
    t("Firebase", "Fb", "#FFCA28", "#111114"),
    t("Redis", "Rd", "#DC382D"),
    t("Supabase", "Sb", "#3ECF8E"),
    t("SQL Server", "SS", "#CC2927"),
    t("MariaDB", "Ma", "#003545"),
    t("Elasticsearch", "Es", "#005571"),
    t("DynamoDB", "Dy", "#4053D6"),
    t("Prisma", "Pr", "#2D3748")
  ],
  CMS: [
    t("WordPress", "Wp", "#21759B"),
    t("WooCommerce", "Wc", "#96588A"),
    t("Shopify", "Sh", "#7AB55C"),
    t("Magento", "Mg", "#EE672F"),
    t("Strapi", "St", "#4945FF"),
    t("Sanity", "Sa", "#F03E2F"),
    t("Contentful", "Cf", "#2478CC"),
    t("Webflow", "Wf", "#4353FF"),
    t("Wix", "Wx", "#0C6EFC"),
    t("Drupal", "Dr", "#0678BE"),
    t("Ghost", "Gh", "#15171A"),
    t("OpenCart", "Oc", "#23A1D1")
  ],
  CRM: [
    t("Salesforce", "Sf", "#00A1E0"),
    t("HubSpot", "Hs", "#FF7A59"),
    t("Zoho CRM", "Zo", "#E42527"),
    t("Pipedrive", "Pd", "#017737"),
    t("Freshsales", "Fs", "#F26522"),
    t("Dynamics 365 CRM", "D3", "#002050"),
    t("Odoo CRM", "Od", "#714B67"),
    t("Bitrix24", "Bx", "#2FC6F6"),
    t("LeadSquared", "Ls", "#0A8FDC"),
    t("Zendesk", "Zd", "#03363D"),
    t("monday CRM", "Mo", "#FF3D57"),
    t("WhatsApp Business", "Wa", "#25D366")
  ],
  ERP: [
    t("SAP", "SAP", "#0FAAFF"),
    t("Oracle NetSuite", "Ns", "#C74634"),
    t("Dynamics 365", "D3", "#002050"),
    t("Odoo ERP", "Od", "#714B67"),
    t("ERPNext", "En", "#0089FF"),
    t("Tally Prime", "Ty", "#2E3192"),
    t("Zoho Books", "Zb", "#E42527"),
    t("QuickBooks", "Qb", "#2CA01C"),
    t("Sage", "Sg", "#00D639", "#111114"),
    t("Custom ERP", "C9", "#111114", "#FCC603")
  ],
  Infra: [
    t("AWS", "Aw", "#232F3E", "#FF9900"),
    t("Google Cloud", "GC", "#4285F4"),
    t("Microsoft Azure", "Az", "#0078D4"),
    t("Vercel", "Ve", "#000000"),
    t("Netlify", "Nt", "#00C7B7"),
    t("DigitalOcean", "DO", "#0080FF"),
    t("Docker", "Dk", "#2496ED"),
    t("Kubernetes", "K8", "#326CE5"),
    t("Nginx", "Nx", "#009639"),
    t("Cloudflare", "Cf", "#F38020"),
    t("GitHub Actions", "GA", "#2088FF"),
    t("Linux", "Lx", "#FCC624", "#111114"),
    t("cPanel", "cP", "#FF6C2C"),
    t("Hostinger", "Ho", "#673DE6")
  ],
  Marketing: [
    t("Google Ads", "Ad", "#4285F4"),
    t("Meta Ads", "Me", "#0866FF"),
    t("LinkedIn Ads", "in", "#0A66C2"),
    t("Google Analytics 4", "G4", "#E37400"),
    t("Search Console", "SC", "#458CF5"),
    t("Tag Manager", "TM", "#246FDB"),
    t("Semrush", "Se", "#FF642D"),
    t("Ahrefs", "Ah", "#054ADA"),
    t("Yoast SEO", "Yo", "#A4286A"),
    t("Screaming Frog", "SF", "#6CBD45"),
    t("Mailchimp", "Mc", "#FFE01B", "#111114"),
    t("Hootsuite", "Hs", "#143059"),
    t("Hotjar", "Hj", "#FF3C00"),
    t("Microsoft Clarity", "Cl", "#0078D4")
  ],
  Mobile: [
    t("Flutter", "Fl", "#02569B"),
    t("React Native", "RN", "#20232A", "#61DAFB"),
    t("Swift", "Sw", "#F05138"),
    t("Kotlin", "Kt", "#7F52FF"),
    t("iOS", "iOS", "#000000"),
    t("Android", "An", "#3DDC84", "#111114"),
    t("Expo", "Ex", "#000020"),
    t("Ionic", "Io", "#3880FF"),
    t("Xcode", "Xc", "#147EFB"),
    t("Android Studio", "AS", "#3DDC84", "#111114"),
    t("Firebase", "Fb", "#FFCA28", "#111114"),
    t("OneSignal", "OS", "#E54B4D"),
    t("Google Play Console", "GP", "#01875F"),
    t("App Store Connect", "AC", "#0D96F6")
  ]
};

const initials = (name: string) =>
  name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TechStackBar() {
  const tabs = Object.keys(TECH);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow">Tech Stack</div>
          <h2 className="section-title">
            Technologies <span className="hl">We Work With</span>
          </h2>
          <p className="section-lead">
            From design and video production to AI-powered creativity, development and marketing — the tools our
            team uses every day.
          </p>
        </div>

        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={active === t}
              className={`tab ${active === t ? "on" : ""}`}
              onClick={() => setActive(t)}
            >
              {t}
              <span className="tab-count">{TECH[t].length}</span>
            </button>
          ))}
        </div>

        <div className="tech-grid" key={active}>
          {TECH[active].map((tool, i) => (
            <div className="tech-tile" key={tool.name} style={{ animationDelay: `${i * 50}ms` }}>
              <span
                className={`tech-mono ${tool.bg ? "branded" : ""} ${(tool.mono ?? "").length > 2 ? "long" : ""}`}
                style={tool.bg ? { background: tool.bg, color: tool.fg, borderColor: tool.solid ? tool.bg : tool.fg } : undefined}
              >
                {tool.mono ?? initials(tool.name)}
              </span>
              <strong>{tool.name}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
