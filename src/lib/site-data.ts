import {
  Shield,
  ShieldCheck,
  Network,
  Server,
  Lock,
  Cpu,
  Camera,
  Wifi,
  Cloud,
  Fingerprint,
  Building2,
  Clock,
  HeadphonesIcon,
  Award,
  Users,
  Zap,
  Eye,
  Activity,
  Database,
  Smartphone,
  Palette,
  Monitor,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
};

export const services: Service[] = [
  {
    id: "security-systems",
    slug: "security-systems",
    icon: Camera,
    title: "Security Systems",
    tagline: "See everything. Miss nothing.",
    description:
      "Enterprise-grade CCTV, video analytics, access control, intrusion detection and perimeter protection engineered for 24/7 surveillance of your premises.",
    features: [
      "IP & analog CCTV with AI video analytics",
      "Biometric & card access control",
      "Perimeter intrusion detection",
      "Remote monitoring & mobile alerts",
      "ANPR & facial recognition",
    ],
    accent: "emerald",
  },
  {
    id: "networking",
    slug: "networking-solutions",
    icon: Network,
    title: "Networking Solutions",
    tagline: "Connect without limits.",
    description:
      "Resilient, high-performance wired and wireless networks — from structured cabling to enterprise Wi-Fi 6E mesh and SD-WAN architectures.",
    features: [
      "Structured cabling & fiber optics",
      "Enterprise Wi-Fi 6E mesh",
      "SD-WAN & load balancing",
      "Network security & firewalls",
      "24/7 network monitoring (NOC)",
    ],
    accent: "amber",
  },
  {
    id: "it-infrastructure",
    slug: "it-infrastructure",
    icon: Server,
    title: "IT Infrastructure",
    tagline: "Built to scale. Built to last.",
    description:
      "Server rooms, data centers, virtualization, storage and backup — designed, deployed and maintained by certified engineers.",
    features: [
      "Server & storage deployment",
      "Virtualization (VMware, Proxmox)",
      "Cloud migration & hybrid setups",
      "Disaster recovery & backup",
      "Data center design & cooling",
    ],
    accent: "teal",
  },
  {
    id: "cybersecurity",
    slug: "cybersecurity",
    icon: Lock,
    title: "Cybersecurity",
    tagline: "Defend every layer.",
    description:
      "Proactive threat detection, endpoint protection, penetration testing and compliance — keeping your data and operations safe.",
    features: [
      "Endpoint detection & response (EDR)",
      "Penetration testing & audits",
      "SIEM & threat intelligence",
      "ISO 27001 & PCI-DSS compliance",
      "Security awareness training",
    ],
    accent: "emerald",
  },
  {
    id: "smart-business",
    slug: "smart-business-solutions",
    icon: Cpu,
    title: "Smart Business Solutions",
    tagline: "Automate. Optimize. Grow.",
    description:
      "Smart office automation, IoT, unified communications, ERP integration and data analytics that turn technology into competitive advantage.",
    features: [
      "Smart office & IoT automation",
      "Unified communications (VoIP)",
      "ERP & CRM integration",
      "Business intelligence dashboards",
      "Digital transformation consulting",
    ],
    accent: "amber",
  },
  {
    id: "managed-it",
    slug: "managed-it-support",
    icon: HeadphonesIcon,
    title: "Managed IT Support",
    tagline: "Your dedicated IT team.",
    description:
      "Round-the-clock monitoring, helpdesk, patch management and proactive maintenance — your fully outsourced IT department.",
    features: [
      "24/7 helpdesk & remote support",
      "Proactive monitoring & patching",
      "Asset & license management",
      "On-site & on-call engineers",
      "SLA-backed response times",
    ],
    accent: "teal",
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Design that communicates. Brands that stand out.",
    description:
      "Creative visual solutions that elevate your brand identity across print and digital platforms, ensuring consistent, professional, and impactful communication.",
    features: [
      "Logo & brand identity design",
      "Company profiles & brochures",
      "Social media graphics & marketing materials",
      "Business cards, flyers & banners",
      "Packaging & presentation design",
    ],
    accent: "emerald",
  },
  {
    id: "web-design",
    slug: "web-design-development",
    icon: Monitor,
    title: "Web Design & Development",
    tagline: "Beautiful. Fast. Results-driven.",
    description:
      "Modern, responsive websites and web applications engineered for performance, security, and exceptional user experience across every device.",
    features: [
      "Corporate & business websites",
      "E-commerce & online stores",
      "UI/UX design & prototyping",
      "Custom web applications",
      "Website maintenance & SEO optimization",
    ],
    accent: "amber",
  },
  {
    id: "data-analytics",
    slug: "data-analytics-business-intelligence",
    icon: BarChart3,
    title: "Data Analytics & Business Intelligence",
    tagline: "Turn data into smarter decisions.",
    description:
      "Advanced analytics, dashboards, reporting, and business intelligence solutions that transform raw data into actionable insights for sustainable growth.",
    features: [
      "Interactive dashboards & reporting",
      "Business intelligence (Power BI & Tableau)",
      "Data visualization & KPI tracking",
      "Database design & data management",
      "Predictive analytics & business insights",
    ],
    accent: "teal",
  },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "Our engineers hold certifications across Cisco, Microsoft, Fortinet, Hikvision and more — ensuring best-in-class delivery.",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    description:
      "A dedicated NOC and SOC operating around the clock with guaranteed SLA-backed response times across Kenya.",
  },
  {
    icon: ShieldCheck,
    title: "Local Trust, Global Standards",
    description:
      "Deep understanding of the Kenyan market combined with international security and compliance frameworks.",
  },
  {
    icon: Users,
    title: "500+ Clients Protected",
    description:
      "From SMEs to enterprises and government, organisations across East Africa rely on Astra Tech.",
  },
  {
    icon: Zap,
    title: "Future-Ready Technology",
    description:
      "We deploy AI-driven, cloud-native and IoT solutions that keep you ahead of an evolving threat landscape.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Account Managers",
    description:
      "Every client gets a named technical account manager and a clear escalation path — no runaround.",
  },
];

export type Stat = {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { icon: Users, value: 500, suffix: "+", label: "Clients protected" },
  { icon: Building2, value: 12, suffix: "", label: "Counties served" },
  { icon: Clock, value: 24, suffix: "/7", label: "Monitoring & support" },
  { icon: Award, value: 15, suffix: "+", label: "Years of expertise" },
];

export type ProcessStep = {
  step: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    icon: Eye,
    title: "Assess & Discover",
    description:
      "We conduct a thorough site survey, risk assessment and infrastructure audit to understand your exact needs and threats.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Design & Engineer",
    description:
      "Our architects craft a tailored, scalable solution with detailed schematics, BOM and a clear deployment roadmap.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Deploy & Integrate",
    description:
      "Certified engineers install and configure every component with minimal disruption, integrating seamlessly with your stack.",
  },
  {
    step: "04",
    icon: Activity,
    title: "Monitor & Optimize",
    description:
      "We provide continuous monitoring, proactive maintenance and quarterly reviews to keep systems peak-performing.",
  },
];

export type Industry = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export const industries: Industry[] = [
  { icon: Building2, name: "Banking & Finance", description: "High-security surveillance, compliance & zero-trust networks." },
  { icon: Database, name: "Government & Public Sector", description: "Resilient infrastructure and sovereign data protection." },
  { icon: Server, name: "Healthcare", description: "Secure patient data, smart clinics and 24/7 availability." },
  { icon: Building2, name: "Real Estate & Hospitality", description: "Smart buildings, guest Wi-Fi and integrated security." },
  { icon: Cloud, name: "Education", description: "Connected campuses, safe environments and digital learning." },
  { icon: Wifi, name: "Logistics & Retail", description: "Multi-site networking, CCTV and loss prevention." },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Astra Tech redesigned our entire network and security posture. Downtime dropped to near zero and our audit findings improved dramatically. They feel like part of our team.",
    name: "David Mwangi",
    role: "IT Director",
    company: "Savannah Holdings",
    initials: "DM",
  },
  {
    quote:
      "The CCTV and access control rollout across our 14 branches was flawless. Project management was professional and the analytics have already prevented incidents.",
    name: "Aisha Hassan",
    role: "Operations Manager",
    company: "Pride Microfinance",
    initials: "AH",
  },
  {
    quote:
      "Their cybersecurity team found vulnerabilities our previous provider missed. The 24/7 SOC gives us genuine peace of mind. Worth every shilling.",
    name: "Brian Otieno",
    role: "CFO",
    company: "Lakeside Logistics",
    initials: "BO",
  },
  {
    quote:
      "From smart office automation to VoIP, Astra Tech modernised our headquarters end-to-end. Productivity is up and our staff love the new setup.",
    name: "Grace Wanjiru",
    role: "Managing Director",
    company: "Highland Estates",
    initials: "GW",
  },
  {
    quote:
      "Responsive, knowledgeable and reliable. Their managed IT support has been a game changer for our growing firm. Highly recommended across East Africa.",
    name: "Samuel Kiprop",
    role: "Founder & CEO",
    company: "Rift Valley Tech",
    initials: "SK",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
  expertise: string[];
};

export const team: TeamMember[] = [
  {
    name: "Daniel Kamau",
    role: "Founder & Chief Executive Officer",
    initials: "DK",
    bio: "20+ years driving ICT transformation across East Africa. Former enterprise architect turned entrepreneur.",
    expertise: ["Strategy", "Architecture", "Leadership"],
  },
  {
    name: "Mercy Adhiambo",
    role: "Chief Technology Officer",
    initials: "MA",
    bio: "Cybersecurity specialist with deep experience securing financial and government institutions.",
    expertise: ["Cybersecurity", "Cloud", "Infrastructure"],
  },
  {
    name: "Peter Njoroge",
    role: "Head of Security Systems",
    initials: "PN",
    bio: "Certified surveillance and access control engineer with 200+ deployments across the region.",
    expertise: ["CCTV", "Access Control", "IoT"],
  },
  {
    name: "Faith Chebet",
    role: "Head of Client Success",
    initials: "FC",
    bio: "Passionate about delivering exceptional service and long-term partnerships for every client.",
    expertise: ["Account Management", "SLA", "Support"],
  },
];

export type Plan = {
  name: string;
  description: string;
  monthly: number;
  features: string[];
  highlighted: boolean;
  cta: string;
};

export const plans: Plan[] = [
  {
    name: "Business Protect",
    description: "Essential security & IT support for growing SMEs.",
    monthly: 45000,
    features: [
      "Up to 25 endpoints monitored",
      "Business-hours helpdesk support",
      "Next-business-day on-site response",
      "Basic CCTV monitoring",
      "Monthly security patching",
      "Quarterly health reports",
    ],
    highlighted: false,
    cta: "Start with Business Protect",
  },
  {
    name: "Enterprise Shield",
    description: "Comprehensive protection & managed IT for mid-market firms.",
    monthly: 120000,
    features: [
      "Up to 150 endpoints + servers",
      "24/7 NOC & SOC monitoring",
      "4-hour on-site response SLA",
      "Advanced video analytics",
      "EDR + threat intelligence",
      "Dedicated account manager",
      "Monthly executive reviews",
    ],
    highlighted: true,
    cta: "Get Enterprise Shield",
  },
  {
    name: "Sovereign Secure",
    description: "Tailored, mission-critical solutions for large enterprises.",
    monthly: 0,
    features: [
      "Unlimited endpoints & sites",
      "Dedicated on-site engineers",
      "1-hour critical response SLA",
      "Custom SOC & compliance (ISO 27001)",
      "Pen testing & red teaming",
      "Disaster recovery design",
      "Executive briefing program",
    ],
    highlighted: false,
    cta: "Request a Consultation",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Which regions in Kenya does Astra Tech serve?",
    answer:
      "We are headquartered in Nairobi and serve clients across all 47 counties of Kenya, with active projects in Mombasa, Kisumu, Nakuru, Eldoret and Nyeri. We also deliver cross-border engagements in Uganda, Tanzania and Rwanda.",
  },
  {
    question: "Do you offer 24/7 monitoring and support?",
    answer:
      "Yes. Our Network Operations Centre (NOC) and Security Operations Centre (SOC) operate 24 hours a day, 7 days a week, 365 days a year. Every managed services plan includes clear, SLA-backed response times.",
  },
  {
    question: "Can you integrate new systems with our existing infrastructure?",
    answer:
      "Absolutely. We specialise in integrating new technology with your current stack — whether that is legacy CCTV, existing networks, cloud platforms or business applications. Our engineers design for compatibility and future scalability.",
  },
  {
    question: "Are your solutions compliant with Kenyan and international standards?",
    answer:
      "Yes. We align deployments with the Kenya Data Protection Act (2019), ISO 27001, PCI-DSS and other relevant frameworks. Our cybersecurity team can guide you through audits and certification readiness.",
  },
  {
    question: "How quickly can you respond to a security incident?",
    answer:
      "Response times depend on your SLA tier. Enterprise Shield clients receive 4-hour on-site response, while Sovereign Secure clients receive 1-hour critical response. Our SOC also provides immediate remote triage for active incidents.",
  },
  {
    question: "Do you provide financing or phased deployment options?",
    answer:
      "Yes. We understand capital budgets vary, so we offer flexible phased rollouts, OpEx-based managed service pricing and leasing options for equipment. Talk to our team to structure a plan that fits your budget.",
  },
];

export type Partner = {
  name: string;
  logo: string;
};

export const partners: Partner[] = [
  { name: "Cisco", logo: "CISCO" },
  { name: "Microsoft", logo: "Microsoft" },
  { name: "Fortinet", logo: "FORTINET" },
  { name: "Hikvision", logo: "HIKVISION" },
  { name: "Dell Technologies", logo: "DELL" },
  { name: "VMware", logo: "VMware" },
  { name: "Ubiquiti", logo: "UBIQUITI" },
  { name: "Sophos", logo: "SOPHOS" },
];

export const certifications = [
  "ISO 27001 Aligned",
  "Kenya Data Protection Act",
  "Cisco Certified Partner",
  "Fortinet Certified",
  "Microsoft Solutions Partner",
  "PCI-DSS Ready",
];
