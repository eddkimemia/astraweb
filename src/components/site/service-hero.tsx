"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, ShieldCheck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./motion";
import { cn } from "@/lib/utils";
import {
  Camera,
  Network,
  Server,
  Lock,
  Cpu,
  HeadphonesIcon,
  Palette,
  Monitor,
  BarChart3,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Camera,
  Network,
  Server,
  Lock,
  Cpu,
  HeadphonesIcon,
  Palette,
  Monitor,
  BarChart3,
};

const accentMap: Record<string, { bg: string; text: string; gradient: string }> = {
  emerald: {
    bg: "bg-[#F0F4FF]",
    text: "text-[#2B5FD9]",
    gradient: "from-[#2B5FD9] to-[#1E40AF]",
  },
  amber: {
    bg: "bg-[#FFF5F0]",
    text: "text-[#FF6B35]",
    gradient: "from-[#FF6B35] to-[#EA580C]",
  },
  teal: {
    bg: "bg-[#F5F3FF]",
    text: "text-[#7C3AED]",
    gradient: "from-[#7C3AED] to-[#5B21B6]",
  },
};

type ServiceHeroProps = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  accent: string;
  slug: string;
};

export function ServiceHero({ title, tagline, description, features, accent, slug }: ServiceHeroProps) {
  const accentStyles = accentMap[accent];
  const IconComponent = iconMap[Object.keys(iconMap).find((k) => {
    const idMap: Record<string, string> = {
      Camera: "security-systems",
      Network: "networking",
      Server: "it-infrastructure",
      Lock: "cybersecurity",
      Cpu: "smart-business",
      HeadphonesIcon: "managed-it",
      Palette: "graphic-design",
      Monitor: "web-design",
      BarChart3: "data-analytics",
    };
    return idMap[k] === slug.split("-")[0] || idMap[k] === slug;
  }) || "Camera"];

  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white sm:py-28">
      <div className="absolute inset-0 bg-[#061A3D]" />
      <div className="bg-grid-dark absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #165DFF55, transparent 60%), radial-gradient(ellipse 50% 50% at 90% 30%, #E31B2320, transparent 60%)",
        }}
      />
      <div className="animate-blob absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-[#165DFF33] blur-3xl" />
      <div className="animate-blob absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#E31B231A] blur-3xl [animation-delay:6s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Reveal>
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{title}</span>
          </nav>
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col items-start gap-6">
            <Reveal>
              <div className={cn("flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg", accentStyles.gradient)}>
                <IconComponent className="h-8 w-8" />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-xl font-medium text-accent">
                {tagline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 gap-2 bg-accent px-6 text-base text-white hover:bg-accent/90 shadow-none">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 gap-2 border-white/20 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
                >
                  <a href="tel:+254700000000" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Us Now
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Features Card */}
          <Reveal delay={0.2} y={32}>
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-white/80" />
                <span className="text-sm font-semibold text-white">What&apos;s Included</span>
              </div>
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className={cn("mt-0.5 h-4 w-4 shrink-0", accentStyles.text)} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-white/10 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-accent"
                >
                  Discuss your requirements
                  <span className="h-4 w-4">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
