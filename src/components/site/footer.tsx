"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { services } from "@/lib/site-data";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Youtube } from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/services" },
  { label: "Industries", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/pricing" },
];

const resourceLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Security Assessment", href: "/contact" },
  { label: "Case Studies", href: "/services" },
  { label: "Client Stories", href: "/about" },
  { label: "Knowledge Base", href: "/pricing" },
  { label: "Support Center", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#0F1729] via-[#1A2744] to-[#0F1729] text-white">
      <div className="bg-grid-dark absolute inset-0 opacity-20" />
      
      {/* Floating decorative elements */}
      <div className="animate-blob absolute -left-20 top-1/4 h-[300px] w-[300px] rounded-full bg-[#2B5FD915] blur-[80px]" />
      <div className="animate-blob absolute -right-20 bottom-1/4 h-[250px] w-[250px] rounded-full bg-[#7C3AED10] blur-[80px] [animation-delay:6s]" />
      
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #2B5FD966, transparent)" }}
      />

      {/* Newsletter strip */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:px-8">
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold sm:text-2xl">
              Stay ahead of threats &amp; tech trends
            </h3>
            <p className="mt-1.5 text-sm text-white/60">
              Monthly insights on security, infrastructure and digital transformation in East Africa.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md items-center gap-2"
          >
            <input
              type="email"
              required
              placeholder="you@company.co.ke"
              className="h-12 flex-1 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 backdrop-blur-sm focus:border-[#FF6B35]/50 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8F5E] px-6 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              World-class security systems, networking, IT infrastructure, cybersecurity
              and smart business solutions — trusted across Kenya &amp; East Africa.
            </p>
            <div className="flex gap-2">
              {[Linkedin, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:border-[#FF6B35]/30 hover:bg-[#FF6B35]/10 hover:text-[#FF6B35]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 transition-colors hover:text-[#FF6B35]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#FF6B35]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors hover:text-[#FF6B35]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Get in touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FF6B35]" />
                <span>
                  4th Floor, Westlands Office Park,
                  <br />
                  Ring Road Westlands, Nairobi, Kenya
                </span>
              </li>
              <li>
                <a href="tel:+254715135141" className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-[#FF6B35]">
                  <Phone className="h-4 w-4 shrink-0 text-[#FF6B35]" />
                  +254 715 135 141
                </a>
              </li>
              <li>
                <a href="mailto:hello@astratech.co.ke" className="flex items-center gap-2.5 text-sm text-white/60 transition-colors hover:text-[#FF6B35]">
                  <Mail className="h-4 w-4 shrink-0 text-[#FF6B35]" />
                  hello@astratech.co.ke
                </a>
              </li>
            </ul>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#059669]/20 bg-[#059669]/10 px-3 py-1.5 text-xs font-medium text-[#059669]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#059669] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#059669]" />
              </span>
              SOC &amp; NOC online — 24/7
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; {new Date().getFullYear()} Astra Tech Security &amp; IT Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <a href="#" className="transition-colors hover:text-white/80">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white/80">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white/80">SLA</a>
            <a href="#" className="transition-colors hover:text-white/80">Data Protection</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
