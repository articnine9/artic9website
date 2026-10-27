export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  icon: string;
  bgImage?: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  image: string;
  badge?: string;
  gallery?: string[];
  metric?: { value: string; label: string };
  categories: string[];
}

export interface ClientItem {
  name: string;
  category: string;
  location?: string;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatarInitials: string;
  rating: number;
}

export const ARTIC9_INFO = {
  name: "Artic Nine Creative Agency",
  shortName: "Artic9",
  founded: "2017",
  experienceYears: "09+",
  projectsCompleted: "2599+",
  clientsCount: "299+",
  teamSize: "33+",
  tagline: "Helping your business grow by using the latest technology and effective marketing.",
  heroHeading: "We Help Brands Grow with Creative Power, High-Impact Tech & Results-Driven Marketing",
  heroSubheading: "From bespoke web and mobile applications to full-spectrum branding and ROI-obsessed digital campaigns, Artic9 empowers regional leaders and global challengers to scale fearlessly.",
  phones: [
    { display: "+91 90034 42463", value: "+919003442463" },
    { display: "+91 95003 09310", value: "+919500309310" }
  ],
  email: "hi@artic9.com",
  website: "www.artic9.com",
  offices: [
    {
      type: "Headquarters",
      city: "Nagercoil",
      address: "KKM Building, 569, MS Road, Vetturnimadam, Nagercoil - 629001, Tamil Nadu",
      highlight: "HQ & Design Studio"
    },
    {
      type: "Branch Office",
      city: "Chennai",
      address: "No. 1, Kodambakkam High Road, Nungambakkam, Chennai - 600034, Tamil Nadu",
      highlight: "Corporate & Tech Hub"
    }
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com/artic9creative", handle: "@artic9creative" },
    { name: "LinkedIn", href: "https://linkedin.com/company/artic9", handle: "Artic Nine Creative Agency" },
    { name: "Facebook", href: "https://facebook.com/artic9creative", handle: "Artic9 Creative" },
    { name: "WhatsApp", href: "https://wa.me/919003442463", handle: "+91 90034 42463" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "branding",
    title: "Branding & Creative Identity",
    category: "Design & Strategy",
    tagline: "We don't stop until a name transforms into an unmistakable living brand.",
    description: "Every great business begins with a soul. We craft comprehensive brand identities, visual language, packaging, and corporate stationery that evoke emotion, communicate trust, and command market leadership.",
    features: [
      "Master Logo & Emblem Design",
      "Brand Guidelines & Typography System",
      "Corporate Stationery & Merchandising",
      "Packaging, Labels & Box Architecture",
      "Retail, Signage & Vehicle Branding"
    ],
    deliverables: ["Brand Identity Manual", "Vector Assets Package", "Stationery Kit", "Packaging Dielines"],
    icon: "Sparkles",
    bgImage: "/images/portfolio/gt-holidays-branding.jpg"
  },
  {
    id: "web-development",
    title: "Bespoke Website Development",
    category: "Web & Engineering",
    tagline: "Designing user-friendly websites that captivate, convert, and perform.",
    description: "Your digital flagship must do more than look pretty—it must load lightning-fast, tell your story persuasively, and turn casual visitors into loyal paying customers across desktop and mobile devices.",
    features: [
      "Custom Next.js & React High-Performance Apps",
      "Conversion-Optimized UX/UI Design",
      "Bespoke CMS & E-Commerce Integration",
      "Speed Optimization & 100% Core Web Vitals",
      "Fluid Animations & Responsive Interactivity"
    ],
    deliverables: ["Next.js Production Codebase", "Figma Design System", "Interactive Prototype", "CMS Portal"],
    icon: "Monitor",
    bgImage: "/images/portfolio/pragrup-web.jpg"
  },
  {
    id: "social-media",
    title: "Social Media Marketing (SMM)",
    category: "Growth & Engagement",
    tagline: "Engaging campaigns that build loyal communities and expand your organic reach.",
    description: "Stop posting generic graphics. We engineer high-retention reels, viral carousels, hyper-targeted ad funnels, and influencer collaborations that spark conversations and convert passive scrollers into brand advocates.",
    features: [
      "Content Strategy, Copywriting & Storyboards",
      "High-Retention Reels, Shorts & Motion Graphics",
      "Strategic Influencer Management & Outreach",
      "Community Management & Active Engagement",
      "Performance Analytics & Growth Optimization"
    ],
    deliverables: ["Monthly Content Calendar", "Reels & Creative Assets", "Campaign Analytics Report"],
    icon: "Share2",
    bgImage: "/images/portfolio/social-media-food.jpg"
  },
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    category: "Mobile & Cloud",
    tagline: "Scalable, user-friendly mobile apps for seamless digital experiences.",
    description: "From napkin concept to the App Store and Google Play, we engineer powerful native and cross-platform apps backed by robust cloud infrastructures, clean APIs, and buttery-smooth user interfaces.",
    features: [
      "Cross-Platform iOS & Android Applications",
      "Robust Cloud Backends (AWS, Node.js, Firebase)",
      "Secure Relational & NoSQL Data (MySQL, MongoDB)",
      "Real-time Push Notifications & Offline Sync",
      "End-to-End Store Deployment & Maintenance"
    ],
    deliverables: ["iOS & Android Production Builds", "Cloud API Architecture", "Admin Dashboard"],
    icon: "Smartphone"
  },
  {
    id: "product-development",
    title: "Product Development & SaaS",
    category: "Software & SaaS",
    tagline: "Turning ambitious ideas into scalable, market-ready digital products.",
    description: "Whether you are validating an MVP or scaling an enterprise platform, we bring seasoned full-stack architects to shape your product roadmap, build resilient microservices, and deliver intuitive software.",
    features: [
      "MVP Scoping & Fast-Track Go-To-Market",
      "SaaS Architecture & Multi-Tenant Databases",
      "Microservices on AWS, Node.js & Docker",
      "User Onboarding, Billing & Analytics Integration",
      "Enterprise Grade Security & Compliance"
    ],
    deliverables: ["Scalable Product MVP", "System Architecture Blueprint", "Automated CI/CD Pipeline"],
    icon: "Layers"
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    category: "Search & Visibility",
    tagline: "Boosting organic visibility and rankings to drive continuous inbound growth.",
    description: "Don't gamble on fleeting algorithms. We implement battle-tested technical SEO, keyword architecture, content clustering, and high-authority link-building to dominate page one for terms that actually generate revenue.",
    features: [
      "In-Depth Commercial Keyword Research",
      "Full Technical SEO Audits & Core Web Vitals",
      "Hyper-Local SEO & Google Business Profile Domination",
      "Authority Building & Digital PR Outreach",
      "Weekly Rank Tracking & Actionable Reporting"
    ],
    deliverables: ["SEO Audit Report", "Keyword Roadmap", "On-Page Optimization", "Backlink Portfolio"],
    icon: "TrendingUp"
  },
  {
    id: "ppc-advertising",
    title: "Pay-Per-Click Advertising (PPC)",
    category: "Paid Media & ROI",
    tagline: "Targeted campaigns delivering measurable results and immediate ROI.",
    description: "Turn ad spend into predictable revenue. We craft laser-targeted search, display, and social ad funnels on Google, Meta, and LinkedIn with relentless A/B creative testing to slash acquisition costs.",
    features: [
      "Google Search, Display & Performance Max Ads",
      "Meta Ads (Facebook & Instagram Hyper-Targeting)",
      "Dynamic Retargeting & Cart Recovery Funnels",
      "A/B Creative & Landing Page Variant Testing",
      "Granular Multi-Touch Attribution & ROAS Tracking"
    ],
    deliverables: ["High-Converting Ad Campaigns", "Custom Landing Pages", "ROAS Dashboard"],
    icon: "Target"
  },
  {
    id: "photo-videography",
    title: "Photo & Videography",
    category: "Production & Media",
    tagline: "Capturing stunning visuals that showcase products and tell cinematic stories.",
    description: "Nothing connects emotionally quite like cinema-grade imagery. Our in-house production crew handles corporate shoots, commercial video ads, TV spots, podcast AV setups, and product showcases from script to color grade.",
    features: [
      "Corporate Headshots & Team Culture Shoots",
      "High-End Product Photography for Catalog & Web",
      "Commercial Video Ads & Brand Films",
      "Podcast & Interview Studio Audio-Visual Setups",
      "Drone Aerial Cinematography & Post-Production"
    ],
    deliverables: ["4K Edited Video Masters", "High-Res Retouched Photo Gallery", "Social Cut-Downs"],
    icon: "Video",
    bgImage: "/images/portfolio/storytelling-video.jpg"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "gt-holidays",
    client: "GT Holidays",
    industry: "Travel & Hospitality",
    title: "Scaling South India's Premier Holiday Brand with 360° Offline & Digital Dominance",
    description: "From comprehensive corporate identity to high-impact airport advertising, bus-back campaigns, local transit takeover, and digital lead funnels, Artic9 fueled GT Holidays' massive multi-city brand expansion.",
    highlights: [
      "Comprehensive Corporate Identity & Sub-brand System",
      "Multi-city transit & bus-back takeover in Nagercoil, Madurai & Salem",
      "Airport advertising installations & sports championship sponsorships",
      "Consistent 300%+ increase in inbound holiday inquiries"
    ],
    tags: ["Brand Identity", "Transit Advertising", "Print Media", "Digital Marketing"],
    image: "/images/portfolio/gt-holidays-campaign.jpg",
    badge: "Flagship Client",
    gallery: ["/images/portfolio/gt-holidays-campaign.jpg", "/images/portfolio/gt-holidays-branding.jpg"],
    metric: { value: "300%+", label: "Growth in holiday inquiries" },
    categories: ["Branding", "Advertising", "Digital"]
  },
  {
    id: "pragrup",
    client: "Pragrup Architecture",
    industry: "Architecture & Urbanism",
    title: "Designing a Minimalist, Architectural-Grade Digital Portfolio Showcase",
    description: "Crafted a bespoke, responsive web presence that mirrors Pragrup's spatial philosophy with fluid transitions, generous negative space, and high-fidelity project gallery curation.",
    highlights: [
      "Custom bespoke portfolio architecture",
      "Silky-smooth image interactions and fast loading times",
      "Award-winning typography and spatial layout",
      "Zero-latency responsiveness across devices"
    ],
    tags: ["Bespoke Web Development", "UX/UI Design", "Performance"],
    image: "/images/portfolio/pragrup-web.jpg",
    badge: "Design Award",
    metric: { value: "0", label: "Templates used — fully bespoke build" },
    categories: ["Web"]
  },
  {
    id: "culinary-reels",
    client: "F&B Category Leaders (Drizzle Bistro & People's Dosa)",
    industry: "Food, Dining & Lifestyle",
    title: "Viral Social Content & Food Festivals Driving Queues Out the Door",
    description: "Produced sensory-rich food reels, targeted local festival ads, and vibrant menu creative campaigns that generated thousands of shares and packed dine-in seats across weekend rushes.",
    highlights: [
      "Over 1.2M+ organic views across seasonal campaign reels",
      "Weekend footfall surges exceeding 45% during festival specials",
      "Vibrant packaging and in-store promotional collaterals"
    ],
    tags: ["Social Media Marketing", "Photo/Video Shoot", "Influencer Collabs"],
    image: "/images/portfolio/social-media-food.jpg",
    badge: "Viral Campaign",
    metric: { value: "1.2M+", label: "Organic reel views" },
    categories: ["Social", "Digital"]
  },
  {
    id: "storytelling-av",
    client: "South Tamil Nadu Rising Enterprise Stories",
    industry: "Corporate & Community",
    title: "Cinematic Documentary Storytelling Across Tirunelveli, Nagercoil & Tuticorin",
    description: "Captured the entrepreneurial heartbeat of southern India through evocative documentary-style video profiles, podcast productions, and founder interviews that forged lasting emotional brand bonds.",
    highlights: [
      "Multi-location cinematic documentary production",
      "Studio-grade audio, lighting, and 4K aerial drone coverage",
      "Broadcasted across regional business chambers and social media"
    ],
    tags: ["Videography", "Storytelling", "Podcast AV"],
    image: "/images/portfolio/storytelling-video.jpg",
    badge: "Media Production",
    metric: { value: "3", label: "Cities covered on location" },
    categories: ["Video"]
  }
];

export const CLIENT_LOGOS: ClientItem[] = [
  { name: "GT Holidays", category: "Travel & Tourism", badge: "Premier Partner" },
  { name: "Young Indians (Yi)", category: "Leadership & Youth", badge: "National Network" },
  { name: "Toni&Guy Hairdressing", category: "Luxury Salon & Beauty" },
  { name: "Toni&Guy Essensuals", category: "Lifestyle & Grooming" },
  { name: "Titan World Nagercoil", category: "Watches & Accessories" },
  { name: "BNI (Business Network International)", category: "Business Networking" },
  { name: "YES (Young Entrepreneur School)", category: "TN Chamber of Commerce" },
  { name: "Arunachala Hitech Engineering College", category: "Higher Education" },
  { name: "Rajan & Co", category: "Retail Revolution" },
  { name: "D. Harris Nadar Diamonds & Jewellery", category: "Fine Jewellery" },
  { name: "Tirunelveli Halwa King", category: "Heritage Food" },
  { name: "CAT Broadband", category: "Telecom & Internet" },
  { name: "The First Loan", category: "Financial Consulting" },
  { name: "Greatest Bakery", category: "Confectionery & Bakery" },
  { name: "Pragrup Architecture", category: "Urban Architecture" },
  { name: "Corpus Christi School", category: "Education" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We have trusted Artic9 with our branding since the very beginning, and they have done an outstanding job. They truly brought our brand to life with unique energy, remarkable creativity, and deep emotion across all our campaigns.",
    author: "Karthick Manikandan",
    role: "Founder & Managing Director",
    organization: "GT Holidays (Sangam Group of Hotels)",
    avatarInitials: "KM",
    rating: 5
  },
  {
    quote: "The website Artic9 developed for us was delivered on time and exceeded all our expectations with stunning design, intuitive navigation, and seamless functionality that truly improves our digital presence and parent engagement.",
    author: "Parveen Mathew",
    role: "Correspondent",
    organization: "Corpus Christi School",
    avatarInitials: "PM",
    rating: 5
  },
  {
    quote: "Artic9’s team combines technical precision with bold creative courage. Their performance marketing strategies gave our retail showroom the exact customer footfalls and regional dominance we were striving for.",
    author: "Regional Director",
    role: "Director of Retail Operations",
    organization: "Titan World & Retail Partners",
    avatarInitials: "TW",
    rating: 5
  }
];

export const STATS = [
  { value: "2599+", label: "Successfully Launched Projects", sub: "Delivered with precision & impact" },
  { value: "299+", label: "Notable Brand Clients", sub: "From local titans to national leaders" },
  { value: "09+", label: "Years of Experience", sub: "Founded in 2017, growing every day" },
  { value: "33+", label: "In-House Technical Gurus", sub: "Designers, developers & strategists" }
];

export const TECH_STACK = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "Node.js", category: "Backend" },
  { name: "Firebase", category: "Realtime & Auth" },
  { name: "MongoDB", category: "NoSQL Database" },
  { name: "MySQL", category: "Relational Database" },
  { name: "Google Ads", category: "PPC Media" },
  { name: "Meta Ads", category: "Paid Social" }
];

export const FAQ_ITEMS = [
  {
    question: "Why choose Artic9 over a traditional marketing agency?",
    answer: "Artic9 brings together creative mastery and engineering rigor under one single roof. Founded in 2017, our in-house team of 33+ designers, developers, and media specialists eliminates clunky third-party handoffs. Whether you need a bespoke Next.js web application, a full brand overhaul, or an ROI-driven multi-city PPC ad campaign, we deliver thumping success with complete transparency."
  },
  {
    question: "What makes Artic9’s bespoke website development different?",
    answer: "We reject sluggish templates and generic WordPress themes. We build custom web applications using modern technologies like Next.js, React, and server-side rendering for instant page loads, flawless mobile responsiveness, and 100% Core Web Vitals. Every layout is uniquely wireframed and conversion-engineered to turn site visitors into high-value leads."
  },
  {
    question: "How do your offices in Nagercoil and Chennai collaborate with clients?",
    answer: "With our headquarters in Nagercoil (KKM Building) and corporate presence in Chennai (Nungambakkam), we combine localized regional knowledge with world-class international standards. We service clients across Tamil Nadu, India, and global markets via structured sprints, weekly video reporting, and dedicated project managers."
  },
  {
    question: "What is your typical project timeline from discovery to launch?",
    answer: "Timelines depend on project scope: Brand identity systems typically take 2-3 weeks; bespoke web design & development takes 3-6 weeks; and end-to-end mobile applications or SaaS products span 8-12 weeks. Every engagement kicks off with an in-depth discovery session, structured milestone approvals, and thorough QA."
  },
  {
    question: "Can Artic9 handle both offline and digital marketing campaigns?",
    answer: "Yes! Our case study with GT Holidays illustrates our unique capability to orchestrate full 360° omnichannel campaigns—spanning airport advertising, bus-back graphics, and event sponsorships alongside hyper-targeted Meta/Google Ads, SEO, and viral social reels."
  }
];
