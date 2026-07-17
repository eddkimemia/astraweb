"use client";

import { Check, MapPin, Target, Eye, Heart } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";

const values = [
  {
    icon: Target,
    title: "Integrity first",
    description: "We do what's right for the client — even when no one is watching. Transparent pricing, honest advice, no lock-in games.",
  },
  {
    icon: Eye,
    title: "Vigilance always",
    description: "Security is not a product, it's a discipline. We stay alert so threats don't catch you off guard.",
  },
  {
    icon: Heart,
    title: "Partnership driven",
    description: "Your success is our success. We measure ourselves by the outcomes you achieve, not the tickets we close.",
  },
];

const milestones = [
  { year: "2009", text: "Founded in Nairobi as a CCTV & networking installer" },
  { year: "2014", text: "Expanded to managed IT services across 6 counties" },
  { year: "2018", text: "Launched 24/7 SOC & NOC operations" },
  { year: "2021", text: "Cross-border projects in Uganda, Tanzania & Rwanda" },
  { year: "2024", text: "500+ active clients & ISO 27001 aligned processes" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: story */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title={
                <>
                  Born in Nairobi.{" "}
                  <span className="text-gradient">Protecting East Africa.</span>
                </>
              }
              description="For over 15 years, Astra Tech has been the trusted technology partner for organisations that cannot afford to compromise on security, reliability or performance."
            />

            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground">
                What began as a small team of surveillance engineers in Westlands has grown
                into a full-spectrum security and IT solutions provider serving hundreds of
                clients across Kenya and the wider East African region.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Today we operate a 24/7 Security Operations Centre, deploy enterprise-grade
                infrastructure, and help organisations navigate digital transformation —
                all while staying true to the principles that earned our first clients' trust.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                {["Headquartered in Westlands, Nairobi", "Serving all 47 counties", "East Africa coverage"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-border bg-secondary/40 p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Astra Tech HQ</div>
                  <div className="text-sm text-muted-foreground">
                    4th Floor, Westlands Office Park, Ring Road Westlands, Nairobi, Kenya
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: timeline + values */}
          <div className="flex flex-col gap-8">
            {/* Timeline */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-premium sm:p-8">
                <h3 className="mb-6 text-lg font-bold">Our journey</h3>
                <div className="relative space-y-6 before:absolute before:left-[1.05rem] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="relative flex gap-4"
                    >
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <div className="text-sm font-bold text-primary">{m.year}</div>
                        <div className="text-sm text-muted-foreground">{m.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Values */}
            <StaggerGroup className="grid gap-4">
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  variants={staggerItem}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">{v.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
