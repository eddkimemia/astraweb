"use client";

import Link from "next/link";
import { Reveal } from "./motion";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1729] via-[#1A2744] to-[#0F1729] px-6 py-12 text-white shadow-2xl sm:px-12 sm:py-16">
            <div className="bg-grid-dark absolute inset-0 opacity-30" />
            
            {/* Floating decorative elements */}
            <div className="animate-blob absolute -left-10 top-0 h-60 w-60 rounded-full bg-[#2B5FD930] blur-3xl" />
            <div className="animate-blob absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-[#FF6B3520] blur-3xl [animation-delay:6s]" />
            <div className="animate-float-slow absolute right-1/4 top-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-[#7C3AED20] to-[#2B5FD910] blur-md" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white/90 backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Free, no-obligation security assessment
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                  Ready to secure and{" "}
                  <span className="text-gradient">scale your business?</span>
                </h2>
                <p className="mt-4 text-base text-white/70 sm:text-lg">
                  Book a 30-minute consultation with our solutions architects. We&apos;ll review
                  your current setup and outline exactly where you can improve — at no cost.
                </p>
              </div>

              <div className="flex flex-col gap-3 lg:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8F5E] px-7 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                >
                  Book my assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+254700000000"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <PhoneCall className="h-4 w-4" />
                  +254 700 000 000
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
