"use client";

import { features } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-br from-[#0F1729] via-[#1A2744] to-[#0F1729] py-20 text-white sm:py-28">
      {/* Floating decorative elements */}
      <div className="animate-blob absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-[#2B5FD920] blur-[100px]" />
      <div className="animate-blob absolute -right-32 bottom-1/4 h-[350px] w-[350px] rounded-full bg-[#7C3AED15] blur-[100px] [animation-delay:6s]" />
      <div className="animate-float-slow absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-[#FF6B3515] to-[#2B5FD910] blur-md" />
      <div className="animate-float-reverse absolute right-1/4 bottom-1/3 h-16 w-16 rounded-full bg-gradient-to-br from-[#2B5FD915] to-[#7C3AED10] blur-md [animation-delay:3s]" />
      
      <div className="bg-grid-dark absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left: heading + highlight */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              light
              eyebrow="Why Astra Tech"
              title={
                <>
                  Engineered for trust.{" "}
                  <span className="text-gradient">Built for outcomes.</span>
                </>
              }
              description="We combine local market expertise with global standards to deliver technology that genuinely moves your business forward."
            />

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="bg-grid-dark absolute inset-0 opacity-20" />
                <div className="relative">
                  <div className="text-5xl font-bold text-gradient">15+</div>
                  <p className="mt-2 text-sm text-white/70">
                    years protecting Kenyan businesses — from single-site SMEs to
                    multi-county enterprises and public institutions.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Nyeri"].map((c) => (
                      <span
                        key={c}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 backdrop-blur-sm"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: feature grid */}
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#2B5FD930] hover:bg-white/[0.06]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2B5FD900] blur-2xl transition-all duration-500 group-hover:bg-[#2B5FD920]" />
                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
