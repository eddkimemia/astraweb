"use client";

import { useState } from "react";
import { testimonials } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const count = testimonials.length;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  };

  const active = testimonials[index];

  return (
    <section className="relative overflow-hidden bg-gradient-light py-20 text-[#0F1729] sm:py-28">
      <div className="animate-blob absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#2B5FD908] blur-[100px]" />
      <div className="animate-blob absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#7C3AED06] blur-[100px] [animation-delay:6s]" />
      <div className="bg-grid absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client stories"
          title={
            <>
              Trusted by leaders,{" "}
              <span className="text-gradient">valued by teams</span>
            </>
          }
          description="Real outcomes from real organisations across Kenya and East Africa."
        />

        <Reveal delay={0.15}>
          <div className="relative mt-14">
            <Quote className="mx-auto mb-6 h-12 w-12 text-[#2B5FD9]/20" />

            <div className="relative min-h-[260px] sm:min-h-[220px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center"
                >
                  <div className="mb-5 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#FF6B35] text-[#FF6B35]" />
                    ))}
                  </div>
                  <blockquote className="mx-auto max-w-3xl text-balance text-xl font-medium leading-relaxed text-[#0F1729]/90 sm:text-2xl">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>
                  <div className="mt-7 flex items-center justify-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF] text-sm font-bold text-white shadow-lg">
                      {active.initials}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-[#0F1729]">{active.name}</div>
                      <div className="text-sm text-[#5A6577]">
                        {active.role}, {active.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => go(-1)}
                className="h-10 w-10 rounded-xl border-[#E2E8F0] bg-white text-[#5A6577] hover:bg-[#F0F4FF] hover:text-[#2B5FD9] hover:border-[#2B5FD930]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === index ? "w-8 bg-[#2B5FD9]" : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]",
                    )}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => go(1)}
                className="h-10 w-10 rounded-xl border-[#E2E8F0] bg-white text-[#5A6577] hover:bg-[#F0F4FF] hover:text-[#2B5FD9] hover:border-[#2B5FD930]"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
