"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Play, Star, Phone, Lock, Cpu, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, AnimatedCounter } from "./motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-light">
      {/* Floating decorative blobs */}
      <div className="animate-blob absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#2B5FD910] blur-[100px]" />
      <div className="animate-blob absolute -right-32 top-1/3 h-[600px] w-[600px] rounded-full bg-[#7C3AED08] blur-[100px] [animation-delay:6s]" />
      <div className="animate-blob absolute left-1/2 -top-20 h-[400px] w-[400px] rounded-full bg-[#FF6B3508] blur-[80px] [animation-delay:12s]" />
      
      {/* Floating glass bubbles */}
      <div className="animate-float-slow absolute left-[15%] top-[20%] h-16 w-16 rounded-full bg-gradient-to-br from-[#2B5FD915] to-[#7C3AED08] blur-sm" />
      <div className="animate-float-reverse absolute right-[20%] top-[30%] h-12 w-12 rounded-full bg-gradient-to-br from-[#FF6B3510] to-[#2B5FD908] blur-sm" />
      <div className="animate-float-slow absolute left-[8%] bottom-[30%] h-20 w-20 rounded-full bg-gradient-to-br from-[#7C3AED10] to-[#2B5FD908] blur-md [animation-delay:3s]" />
      <div className="animate-float absolute right-[12%] bottom-[25%] h-10 w-10 rounded-full bg-gradient-to-br from-[#2B5FD912] to-[#FF6B3508] blur-sm [animation-delay:5s]" />

      <div className="bg-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2B5FD920] bg-[#F0F4FF] px-4 py-2 text-sm font-medium text-[#2B5FD9]">
                <ShieldCheck className="h-4 w-4" />
                Trusted by 500+ organisations across East Africa
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F1729] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
                Security &amp; IT solutions that{" "}
                <span className="text-gradient">protect, connect</span> and{" "}
                <span className="text-gradient-gold">power</span> your business
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-xl text-base leading-relaxed text-[#5A6577] sm:text-lg">
                From enterprise-grade surveillance and resilient networks to proactive
                cybersecurity and smart automation — Astra Tech engineers the technology
                backbone trusted across Kenya and East Africa.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-13 gap-2 btn-gradient px-8 text-base font-semibold shadow-lg">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-13 gap-2 border-[#E2E8F0] bg-white px-8 text-base font-semibold text-[#0F1729] hover:bg-[#F0F4FF] hover:border-[#2B5FD930] hover:text-[#2B5FD9]"
                >
                  <Link href="/services" className="flex items-center gap-2">
                    <Play className="h-4 w-4" />
                    Explore Services
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
                <div className="flex items-center gap-1.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>
                  <span className="text-sm text-[#5A6577]">
                    <span className="font-semibold text-[#0F1729]">4.9/5</span> client rating
                  </span>
                </div>
                <div className="h-4 w-px bg-[#E2E8F0]" />
                <div className="flex items-center gap-1.5 text-sm text-[#5A6577]">
                  <Lock className="h-4 w-4 text-[#2B5FD9]" />
                  ISO 27001 aligned
                </div>
                <div className="h-4 w-px bg-[#E2E8F0]" />
                <div className="flex items-center gap-1.5 text-sm text-[#5A6577]">
                  <Cpu className="h-4 w-4 text-[#7C3AED]" />
                  Certified engineers
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32}>
            <HeroVisual />
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 grid grid-cols-2 gap-6 lg:mt-20 lg:grid-cols-4">
            {[
              { value: 500, suffix: "+", label: "Clients protected", color: "from-[#2B5FD9] to-[#1E40AF]" },
              { value: 12, suffix: "", label: "Counties served", color: "from-[#7C3AED] to-[#5B21B6]" },
              { value: 24, suffix: "/7", label: "SOC monitoring", color: "from-[#FF6B35] to-[#EA580C]" },
              { value: 99.9, suffix: "%", label: "Uptime SLA", color: "from-[#059669] to-[#047857]" },
            ].map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-6 text-center shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg">
                <div className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  <AnimatedCounter value={s.value} suffix={s.suffix} className="text-lg font-bold" />
                </div>
                <div className="text-xs font-medium uppercase tracking-wider text-[#5A6577] sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Main dashboard card */}
      <div className="glass-card relative rounded-3xl p-6 shadow-premium-lg">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5 text-[0.65rem] text-[#5A6577]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            astra-soc.live
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-[#F0F4FF] p-3">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF]">
              <ShieldCheck className="h-5 w-5 text-white" />
              <span className="absolute inset-0 rounded-lg border border-[#2B5FD930] animate-pulse-ring" />
            </div>
            <div>
              <div className="text-sm font-semibold text-[#0F1729]">All systems secured</div>
              <div className="text-[0.7rem] text-[#5A6577]">Last scan: 2 min ago</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-[#059669]">99.9%</div>
            <div className="text-[0.65rem] text-[#5A6577]">uptime</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: "Threats blocked", value: "1,284", icon: Lock, color: "from-[#2B5FD9] to-[#1E40AF]" },
            { label: "Active endpoints", value: "342", icon: Cpu, color: "from-[#7C3AED] to-[#5B21B6]" },
            { label: "Cameras online", value: "96/96", icon: ShieldCheck, color: "from-[#059669] to-[#047857]" },
            { label: "Avg response", value: "1.2s", icon: Phone, color: "from-[#FF6B35] to-[#EA580C]" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-[#E2E8F0] bg-white p-3 shadow-sm"
            >
              <div className={`mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${m.color} text-white`}>
                <m.icon className="h-4 w-4" />
              </div>
              <div className="text-lg font-bold text-[#0F1729]">{m.value}</div>
              <div className="text-[0.65rem] text-[#5A6577]">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          <div className="text-[0.7rem] font-medium uppercase tracking-wider text-[#5A6577]">
            Live activity
          </div>
          {[
            { t: "Endpoint scan completed", c: "bg-[#059669]", time: "now" },
            { t: "Firewall rule updated", c: "bg-[#2B5FD9]", time: "3m" },
            { t: "Anomaly detected & blocked", c: "bg-[#FF6B35]", time: "8m" },
          ].map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15 }}
              className="flex items-center justify-between rounded-lg bg-[#F5F7FA] px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${a.c}`} />
                <span className="text-xs text-[#5A6577]">{a.t}</span>
              </div>
              <span className="text-[0.65rem] text-[#5A6577]">{a.time}</span>
            </motion.div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-4 top-20 h-px overflow-hidden">
          <div className="animate-scan h-full w-full bg-gradient-to-r from-transparent via-[#2B5FD930] to-transparent" />
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-1/3 hidden rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-premium backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF]">
            <ShieldCheck className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#0F1729]">ISO 27001</div>
            <div className="text-[0.65rem] text-[#5A6577]">Certified processes</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-3 bottom-8 hidden rounded-2xl border border-[#E2E8F0] bg-white p-3 shadow-premium backdrop-blur sm:block"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#EA580C]">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="text-xs font-semibold text-[#0F1729]">&lt; 1 hr response</div>
            <div className="text-[0.65rem] text-[#5A6577]">Critical incidents</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
