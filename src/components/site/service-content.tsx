"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "./motion";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { gradient: string; text: string }> = {
  emerald: {
    gradient: "from-[#2B5FD9] to-[#1E40AF]",
    text: "text-[#2B5FD9]",
  },
  amber: {
    gradient: "from-[#FF6B35] to-[#EA580C]",
    text: "text-[#FF6B35]",
  },
  teal: {
    gradient: "from-[#7C3AED] to-[#5B21B6]",
    text: "text-[#7C3AED]",
  },
};

const seoContent: Record<string, { overview: string; benefits: string[]; useCases: string[]; process: string[] }> = {
  "security-systems": {
    overview:
      "In today's threat landscape, robust security systems are non-negotiable. Astra Tech designs, deploys and maintains enterprise-grade CCTV, access control and intrusion detection solutions that protect your premises 24/7. Our security engineers hold certifications from Hikvision, Axis, Dahua and leading manufacturers, ensuring every installation meets international quality standards.",
    benefits: [
      "Deter crime and prevent incidents with visible surveillance",
      "Real-time remote monitoring from anywhere in the world",
      "AI-powered video analytics for proactive threat detection",
      "Regulatory compliance for insurance and corporate governance",
      "Peace of mind with 24/7 SOC monitoring and rapid response",
    ],
    useCases: [
      "Corporate offices and commercial buildings",
      "Retail chains and shopping centres",
      "Banks and financial institutions",
      "Warehouses and industrial facilities",
      "Residential estates and gated communities",
      "Government buildings and public infrastructure",
    ],
    process: [
      "Comprehensive site survey and risk assessment",
      "Custom security architecture design and planning",
      "Professional installation by certified engineers",
      "System configuration, testing and handover",
      "Ongoing monitoring, maintenance and support",
    ],
  },
  "networking": {
    overview:
      "Reliable connectivity is the backbone of modern business. Astra Tech builds high-performance wired and wireless networks engineered for speed, resilience and security. From structured cabling to enterprise Wi-Fi 6E mesh and SD-WAN architectures, our solutions ensure your team stays connected and productive.",
    benefits: [
      "Ultra-fast, low-latency connectivity for mission-critical operations",
      "Scalable architecture that grows with your business",
      "Redundant designs for maximum uptime and reliability",
      "Centralised management and real-time network visibility",
      "Reduced operational costs through optimised infrastructure",
    ],
    useCases: [
      "Multi-site enterprises and campus environments",
      "Hotels, hospitals and hospitality venues",
      "Manufacturing plants and warehouses",
      "Educational institutions and libraries",
      "Retail chains requiring unified connectivity",
      "Remote offices and branch locations",
    ],
    process: [
      "Network assessment and requirements gathering",
      "Architecture design and capacity planning",
      "Structured cabling and equipment deployment",
      "Configuration, security hardening and testing",
      "24/7 NOC monitoring and proactive maintenance",
    ],
  },
  "it-infrastructure": {
    overview:
      "Your IT infrastructure is the foundation of digital operations. Astra Tech designs, builds and maintains server rooms, data centres, virtualisation platforms and storage systems that deliver performance, scalability and resilience. Our certified engineers ensure your infrastructure is built to last.",
    benefits: [
      "Enterprise-grade performance for demanding workloads",
      "High availability and disaster recovery capabilities",
      "Cost-efficient virtualisation and cloud migration",
      "Scalable storage and backup solutions",
      "Expert design, deployment and ongoing management",
    ],
    useCases: [
      "Enterprise data centre design and build",
      "Server room modernisation and upgrades",
      "Cloud migration and hybrid infrastructure",
      "Virtualisation (VMware, Proxmox, Hyper-V)",
      "Disaster recovery and business continuity",
      "Backup and archival solutions",
    ],
    process: [
      "Infrastructure audit and requirements analysis",
      "Solution architecture and vendor selection",
      "Physical deployment and integration",
      "Performance testing and optimisation",
      "Monitoring, maintenance and capacity planning",
    ],
  },
  cybersecurity: {
    overview:
      "Cyber threats are evolving faster than ever. Astra Tech provides proactive cybersecurity solutions that protect your data, applications and users from breaches, ransomware and advanced persistent threats. Our Security Operations Centre operates 24/7 to detect and respond to incidents in real time.",
    benefits: [
      "Proactive threat detection before breaches occur",
      "24/7 SOC monitoring with guaranteed response SLAs",
      "Compliance readiness for ISO 27001, PCI-DSS and DPA",
      "Reduced risk of data loss, downtime and reputational damage",
      "Security awareness training for your entire workforce",
    ],
    useCases: [
      "Financial institutions requiring PCI-DSS compliance",
      "Healthcare organisations protecting patient data",
      "Government agencies securing sensitive information",
      "Enterprises implementing zero-trust architecture",
      "SMEs needing managed security services",
      "Organisations undergoing security audits",
    ],
    process: [
      "Vulnerability assessment and penetration testing",
      "Security architecture review and gap analysis",
      "Implementation of EDR, SIEM and firewall solutions",
      "SOC deployment and 24/7 monitoring setup",
      "Incident response planning and tabletop exercises",
    ],
  },
  "smart-business": {
    overview:
      "Technology should work for you, not against you. Astra Tech integrates smart automation, IoT, unified communications and business intelligence solutions that streamline operations, reduce costs and drive growth. We turn complex technology into simple, measurable business outcomes.",
    benefits: [
      "Automate repetitive tasks and free up your team",
      "Unified communications for seamless collaboration",
      "Real-time business intelligence dashboards",
      "IoT-enabled monitoring and control systems",
      "Competitive advantage through digital transformation",
    ],
    useCases: [
      "Smart office automation and energy management",
      "VoIP and unified communications deployment",
      "ERP and CRM system integration",
      "Business intelligence and reporting dashboards",
      "IoT sensor networks and monitoring",
      "Digital transformation consulting",
    ],
    process: [
      "Business process analysis and technology audit",
      "Solution design and ROI modelling",
      "Phased deployment with minimal disruption",
      "User training and adoption support",
      "Ongoing optimisation and support",
    ],
  },
  "managed-it": {
    overview:
      "Your business deserves a dedicated IT team without the overhead. Astra Tech provides fully managed IT support covering 24/7 helpdesk, proactive monitoring, patch management and on-site engineering. We become your IT department — reliable, responsive and always available.",
    benefits: [
      "Predictable monthly costs with no hidden charges",
      "24/7 helpdesk with guaranteed response times",
      "Proactive monitoring prevents issues before they impact you",
      "Access to a full team of certified engineers",
      "Focus on your core business while we handle IT",
    ],
    useCases: [
      "SMEs without an internal IT team",
      "Growing businesses needing scalable support",
      "Organisations with legacy systems requiring maintenance",
      "Companies with multiple branch offices",
      "Businesses seeking to outsource IT operations",
      "Teams needing after-hours and weekend coverage",
    ],
    process: [
      "IT environment assessment and documentation",
      "Onboarding and systems integration",
      "24/7 monitoring and helpdesk activation",
      "Proactive patching and maintenance cycles",
      "Quarterly reviews and continuous improvement",
    ],
  },
  "graphic-design": {
    overview:
      "First impressions matter. Astra Tech's creative team delivers professional graphic design solutions that elevate your brand identity and communicate your message with impact. From logo design to complete brand systems, we create visual assets that resonate with your audience and stand the test of time.",
    benefits: [
      "Professional brand identity that builds trust and recognition",
      "Consistent visual language across all platforms",
      "High-quality print and digital design assets",
      "Creative solutions tailored to your industry",
      "Fast turnaround with collaborative design process",
    ],
    useCases: [
      "New business brand identity and launch",
      "Company profile and brochure design",
      "Social media content and marketing campaigns",
      "Event branding and promotional materials",
      "Product packaging and label design",
      "Corporate stationery and business cards",
    ],
    process: [
      "Brand discovery and creative brief",
      "Concept development and mood boards",
      "Design creation and refinement",
      "Final artwork delivery in all formats",
      "Brand guidelines and asset library handover",
    ],
  },
  "web-design": {
    overview:
      "Your website is your digital storefront. Astra Tech builds modern, responsive websites and web applications engineered for performance, security and conversions. We combine stunning design with robust development to deliver digital experiences that drive results.",
    benefits: [
      "Mobile-first responsive design for every device",
      "Fast loading speeds and optimised performance",
      "SEO-friendly architecture for better rankings",
      "Secure, scalable and easy to manage",
      "Conversion-focused design that drives business goals",
    ],
    useCases: [
      "Corporate and business websites",
      "E-commerce and online stores",
      "SaaS and web application platforms",
      "Landing pages and marketing sites",
      "Content management systems",
      "Custom web portals and dashboards",
    ],
    process: [
      "Discovery, strategy and sitemap planning",
      "UI/UX design and interactive prototyping",
      "Frontend and backend development",
      "Testing, QA and performance optimisation",
      "Launch, training and ongoing maintenance",
    ],
  },
  "data-analytics": {
    overview:
      "Data is your most valuable asset — if you know how to use it. Astra Tech transforms raw data into actionable insights through advanced analytics, interactive dashboards and business intelligence solutions. We help you make smarter decisions, faster.",
    benefits: [
      "Real-time visibility into business performance",
      "Data-driven decision making at every level",
      "Automated reporting and alerting",
      "Identify trends, patterns and opportunities",
      "Unified data sources for a single source of truth",
    ],
    useCases: [
      "Executive dashboards and KPI tracking",
      "Sales and revenue analytics",
      "Operational performance monitoring",
      "Customer behaviour and segmentation analysis",
      "Financial reporting and forecasting",
      "Supply chain and inventory analytics",
    ],
    process: [
      "Data audit and requirements gathering",
      "Data modelling and warehouse design",
      "ETL pipeline and integration setup",
      "Dashboard and report development",
      "Training, adoption and ongoing support",
    ],
  },
};

type ServiceContentProps = {
  serviceId: string;
  serviceTitle: string;
  accent: string;
};

export function ServiceContent({ serviceId, serviceTitle, accent }: ServiceContentProps) {
  const seo = seoContent[serviceId];
  const accentStyles = accentMap[accent];

  if (!seo) return null;

  return (
    <>
      {/* Overview Section */}
      <section className="relative py-20 sm:py-28">
        <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5FD920] bg-[#F0F4FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2B5FD9]">
                  Overview
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F1729] sm:text-4xl">
                  {serviceTitle} <span className="text-gradient">for Kenya & East Africa</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#5A6577] sm:text-lg">
                  {seo.overview}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B3520] bg-[#FFF5F0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF6B35]">
                  Key Benefits
                </span>
                <ul className="mt-5 space-y-4">
                  {seo.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[#0F1729]">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#059669]" />
                      <span className="text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Use Cases & Process */}
      <section className="relative bg-gradient-to-b from-[#F0F4FF] to-white py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#7C3AED20] bg-[#F5F3FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#7C3AED]">
                  Industries We Serve
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F1729] sm:text-4xl">
                  Proven across <span className="text-gradient">every sector</span>
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {seo.useCases.map((uc) => (
                    <div key={uc} className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
                      <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br text-white", accentStyles.gradient)}>
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-[#0F1729]">{uc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#2B5FD920] bg-[#F0F4FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2B5FD9]">
                  Our Approach
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0F1729] sm:text-4xl">
                  How we <span className="text-gradient">deliver</span>
                </h2>
                <div className="mt-6 space-y-4">
                  {seo.process.map((step, i) => (
                    <div key={step} className="flex items-start gap-4 rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                      <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold text-white", accentStyles.gradient)}>
                        {i + 1}
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-[#0F1729]">Step {i + 1}</span>
                        <p className="mt-1 text-sm text-[#5A6577]">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
