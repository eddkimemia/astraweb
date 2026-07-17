"use client";

import { stats } from "@/lib/site-data";
import { Reveal, AnimatedCounter, StaggerGroup, staggerItem } from "./motion";
import { motion } from "framer-motion";

const gradientMap: Record<string, string> = {
  "Clients protected": "from-[#2B5FD9] to-[#1E40AF]",
  "Counties served": "from-[#7C3AED] to-[#5B21B6]",
  "Monitoring & support": "from-[#FF6B35] to-[#EA580C]",
  "Years of expertise": "from-[#059669] to-[#047857]",
};

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#F0F4FF] to-[#F5F3FF] p-8 shadow-premium-lg sm:p-12">
            <div className="bg-grid absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]" />
            
            {/* Floating decorative blobs */}
            <div className="animate-blob absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2B5FD910] blur-3xl" />
            <div className="animate-blob absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#7C3AED08] blur-3xl [animation-delay:6s]" />
            
            <div className="relative">
              <div className="mb-10 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-[#0F1729] sm:text-3xl">
                  Numbers that speak to <span className="text-gradient">reliability</span>
                </h2>
                <p className="mt-2 text-sm text-[#5A6577] sm:text-base">
                  A track record built one secure deployment at a time.
                </p>
              </div>
              <StaggerGroup className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={staggerItem}
                    className="flex flex-col items-center text-center"
                  >
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientMap[s.label] || "from-[#2B5FD9] to-[#1E40AF]"} text-white shadow-lg`}>
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div className="text-4xl font-bold tracking-tight text-[#0F1729] sm:text-5xl">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-1.5 text-sm font-medium text-[#5A6577]">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
