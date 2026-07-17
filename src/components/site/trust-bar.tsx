"use client";

import { partners, certifications } from "@/lib/site-data";
import { Reveal } from "./motion";

export function TrustBar() {
  return (
    <section className="relative border-y border-[#E2E8F0] bg-gradient-to-r from-[#F0F4FF] via-white to-[#F5F3FF] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#5A6577]">
            Technology partners &amp; certifications
          </p>
        </Reveal>

        {/* Marquee partners */}
        <Reveal delay={0.1}>
          <div className="mask-fade-edges relative mt-7 overflow-hidden">
            <div className="animate-marquee flex w-max items-center gap-12">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="flex h-10 items-center justify-center text-lg font-bold tracking-tight text-[#5A6577]/40 grayscale transition-all hover:text-[#0F1729]/80 hover:grayscale-0"
                >
                  {p.logo}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
            {certifications.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#5A6577] shadow-sm transition-all hover:border-[#2B5FD930] hover:text-[#2B5FD9]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#2B5FD9]" />
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
