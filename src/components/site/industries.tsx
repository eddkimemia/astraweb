"use client";

import { industries } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";

export function Industries() {
  return (
    <section id="industries" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries we serve"
          title={
            <>
              Sector expertise that{" "}
              <span className="text-gradient">understands your world</span>
            </>
          }
          description="From regulated finance to 24/7 healthcare, we tailor every solution to the realities and compliance needs of your industry."
        />

        <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <motion.div
              key={ind.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/15" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary ring-1 ring-border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <ind.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold">{ind.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
