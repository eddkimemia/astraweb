"use client";

import Link from "next/link";
import { services } from "@/lib/site-data";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem, SectionHeading, TiltCard } from "./motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { ring: string; bg: string; text: string; glow: string; border: string; gradient: string }> = {
  emerald: {
    ring: "group-hover:ring-[#2B5FD9]/20",
    bg: "bg-[#F0F4FF]",
    text: "text-[#2B5FD9]",
    glow: "group-hover:shadow-[0_20px_60px_-15px_#2B5FD926]",
    border: "group-hover:border-[#2B5FD930]",
    gradient: "from-[#2B5FD9] to-[#1E40AF]",
  },
  amber: {
    ring: "group-hover:ring-[#FF6B35]/20",
    bg: "bg-[#FFF5F0]",
    text: "text-[#FF6B35]",
    glow: "group-hover:shadow-[0_20px_60px_-15px_#FF6B3526]",
    border: "group-hover:border-[#FF6B3530]",
    gradient: "from-[#FF6B35] to-[#EA580C]",
  },
  teal: {
    ring: "group-hover:ring-[#7C3AED]/20",
    bg: "bg-[#F5F3FF]",
    text: "text-[#7C3AED]",
    glow: "group-hover:shadow-[0_20px_60px_-15px_#7C3AED26]",
    border: "group-hover:border-[#7C3AED30]",
    gradient: "from-[#7C3AED] to-[#5B21B6]",
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Full-spectrum security &amp;{" "}
              <span className="text-gradient">IT capabilities</span>
            </>
          }
          description="Nine integrated practice areas that cover every layer of your technology stack — from physical security and networking to design, development, and data intelligence."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const accent = accentMap[service.accent];
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <TiltCard className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className={cn(
                      "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1",
                      accent.glow,
                      accent.border,
                    )}
                  >
                    {/* Subtle gradient glow on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className={cn("absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl", `bg-gradient-to-br ${accent.gradient} opacity-10`)} />
                    </div>

                    <div className="relative flex items-start justify-between">
                      <div
                        className={cn(
                          "flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-[#E2E8F0] transition-all duration-300 group-hover:scale-110",
                          accent.bg,
                          accent.ring,
                        )}
                      >
                        <service.icon className={cn("h-6 w-6", accent.text)} />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-[#5A6577]/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0F1729]" />
                    </div>

                    <div className="relative mt-5">
                      <h3 className="text-lg font-bold tracking-tight text-[#0F1729]">{service.title}</h3>
                      <p className={cn("mt-0.5 text-sm font-medium", accent.text)}>
                        {service.tagline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-[#5A6577]">
                        {service.description}
                      </p>
                    </div>

                    <ul className="relative mt-5 space-y-2 border-t border-[#E2E8F0] pt-5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-[#0F1729]/80">
                          <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accent.text)} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </TiltCard>
              </motion.div>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#E2E8F0] bg-gradient-to-r from-[#F0F4FF] to-[#F5F3FF] p-6 shadow-premium sm:flex-row sm:p-8">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-bold sm:text-xl text-[#0F1729]">
                Not sure which solution fits your business?
              </h3>
              <p className="mt-1 text-sm text-[#5A6577]">
                Book a free 30-minute consultation with our solutions architects.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-xl btn-gradient px-6 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg"
            >
              Talk to an expert
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
