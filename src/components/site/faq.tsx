"use client";

import Link from "next/link";
import { faqs } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";

export function Faq() {
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient">answered</span>
            </>
          }
          description="Everything you need to know about working with Astra Tech. Can't find your answer? Our team is one message away."
        />

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-2xl border border-border bg-card p-2 shadow-premium sm:p-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-border/60 last:border-b-0 data-[state=open]:bg-secondary/40 data-[state=open]:rounded-xl data-[state=open]:my-1 transition-colors"
                >
                  <AccordionTrigger className="px-4 py-4 text-left text-base font-semibold hover:no-underline sm:px-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 p-6 sm:flex-row sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircleQuestion className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-bold sm:text-lg">Still have questions?</h3>
                <p className="text-sm text-muted-foreground">
                  Our solutions team responds within one business hour.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-white shadow-none transition-all hover:bg-accent/90"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
