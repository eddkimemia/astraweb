"use client";

import { processSteps } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";

const stepGradients: Record<string, string> = {
  "01": "from-[#2B5FD9] to-[#1E40AF]",
  "02": "from-[#7C3AED] to-[#5B21B6]",
  "03": "from-[#FF6B35] to-[#EA580C]",
  "04": "from-[#059669] to-[#047857]",
};

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-gradient-light py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Floating decorative elements */}
      <div className="animate-blob absolute -right-20 top-1/4 h-[300px] w-[300px] rounded-full bg-[#2B5FD906] blur-[80px]" />
      <div className="animate-blob absolute -left-20 bottom-1/4 h-[250px] w-[250px] rounded-full bg-[#7C3AED06] blur-[80px] [animation-delay:6s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A proven path from{" "}
              <span className="text-gradient">assessment to always-on</span>
            </>
          }
          description="Our four-step engagement model keeps every project transparent, predictable and built to last."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent lg:block" />

          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div key={step.step} variants={staggerItem} className="relative">
                {/* Step number node */}
                <div className="relative z-10 mb-6 flex justify-center lg:mb-0">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#E2E8F0] bg-white shadow-premium">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#F0F4FF] to-white" />
                    <step.icon className="relative h-9 w-9 text-[#2B5FD9]" />
                    <span className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${stepGradients[step.step] || "from-[#2B5FD9] to-[#1E40AF]"} text-xs font-bold text-white shadow-lg`}>
                      {step.step}
                    </span>
                    {i < processSteps.length - 1 && (
                      <div className="absolute left-full top-1/2 hidden h-px w-6 -translate-y-1/2 bg-[#E2E8F0] lg:block" />
                    )}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 text-center shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg lg:text-left">
                  <h3 className="text-base font-bold text-[#0F1729]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A6577]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm shadow-premium">
              <span className="flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#2B5FD9] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2B5FD9]" />
              </span>
              <span className="text-[#5A6577]">
                Average deployment: <span className="font-semibold text-[#0F1729]">2-4 weeks</span> for enterprise rollouts
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
