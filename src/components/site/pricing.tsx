"use client";

import Link from "next/link";
import { plans } from "@/lib/site-data";
import { Reveal, StaggerGroup, staggerItem, SectionHeading } from "./motion";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

function formatKES(n: number) {
  if (n === 0) return "Custom";
  return `KES ${n.toLocaleString("en-KE")}`;
}

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-secondary/30 py-20 sm:py-28">
      <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Managed service plans"
          title={
            <>
              Transparent pricing that{" "}
              <span className="text-gradient">scales with you</span>
            </>
          }
          description="Predictable monthly plans covering monitoring, support and security. All prices in Kenyan Shillings, exclusive of VAT."
        />

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={cn(
                "relative flex flex-col overflow-hidden rounded-3xl border bg-card p-7 transition-all duration-300 hover:-translate-y-1",
                plan.highlighted
                  ? "border-accent/40 shadow-glow-lg ring-1 ring-accent/20 lg:scale-[1.04]"
                  : "border-border shadow-premium hover:shadow-glow",
              )}
            >
              {plan.highlighted && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
                  <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/15 blur-3xl" />
                </>
              )}

              {plan.highlighted && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-none">
                  <Sparkles className="h-3 w-3" />
                  Most popular
                </div>
              )}

              <div className="relative">
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-6 flex items-end gap-1">
                  {plan.monthly === 0 ? (
                    <span className="text-4xl font-bold tracking-tight">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold tracking-tight">
                        {formatKES(plan.monthly)}
                      </span>
                      <span className="mb-1 text-sm text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="relative mt-6 flex-1 space-y-3 border-t border-border pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                        plan.highlighted ? "bg-accent text-white" : "bg-accent/10 text-accent",
                      )}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  "relative mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all",
                  plan.highlighted
                    ? "bg-accent text-white shadow-none hover:bg-accent/90"
                    : "border border-border bg-background text-foreground hover:border-accent/40 hover:text-accent",
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            All plans include a <span className="font-semibold text-foreground">30-day satisfaction guarantee</span>.
            Need something bespoke? <Link href="/contact" className="font-semibold text-accent hover:underline">Talk to our team →</Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
