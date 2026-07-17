"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2, Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./motion";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please add a few more details (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  "Security Systems (CCTV & Access Control)",
  "Networking Solutions",
  "IT Infrastructure",
  "Cybersecurity",
  "Smart Business Solutions",
  "Managed IT Support",
  "Not sure yet — need advice",
];

const budgetOptions = [
  "Under KES 100k",
  "KES 100k – 500k",
  "KES 500k – 2M",
  "KES 2M+",
  "Ongoing / monthly",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Request failed");
      }
      toast.success("Inquiry received!", {
        description: "Our team will reach out within one business hour.",
      });
      setDone(true);
      reset();
    } catch (err) {
      toast.error("Could not submit", {
        description: err instanceof Error ? err.message : "Please try again or call us.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-light py-20 text-[#0F1729] sm:py-28">
      {/* Floating decorative blobs */}
      <div className="animate-blob absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#2B5FD908] blur-[100px]" />
      <div className="animate-blob absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#FF6B3506] blur-[100px] [animation-delay:6s]" />
      
      <div className="bg-grid absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#2B5FD920] bg-[#F0F4FF] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#2B5FD9]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2B5FD9] animate-pulse" />
                Let&apos;s talk
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-[#0F1729] sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
                Get your free{" "}
                <span className="text-gradient">security &amp; IT assessment</span>
              </h2>
              <p className="max-w-md text-base text-[#5A6577]">
                Tell us about your business and challenges. We&apos;ll respond within one
                business hour with next steps — no pressure, no obligation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <ContactCard icon={Phone} label="Call us" value="+254 700 000 000" href="tel:+254700000000" />
              <ContactCard icon={Mail} label="Email us" value="hello@astratech.co.ke" href="mailto:hello@astratech.co.ke" />
              <ContactCard icon={MapPin} label="Visit us" value="Westlands, Nairobi" />
              <ContactCard icon={Clock} label="Support" value="24/7 NOC &amp; SOC" />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-premium">
              <div className="relative flex items-center gap-4">
                <div className="flex -space-x-3">
                  {["DM", "MA", "PN", "FC"].map((i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF] text-xs font-bold text-white shadow-md"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#0F1729]">Real engineers, real fast</div>
                  <div className="text-xs text-[#5A6577]">
                    Average first response under 60 minutes during business hours.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 text-[#0F1729] shadow-premium-lg sm:p-8">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-lg"
                    >
                      <CheckCircle2 className="h-9 w-9" />
                    </motion.div>
                    <h3 className="mt-5 text-xl font-bold text-[#0F1729]">Inquiry received!</h3>
                    <p className="mt-2 max-w-sm text-sm text-[#5A6577]">
                      Thank you for reaching out to Astra Tech. Our solutions team will
                      contact you within one business hour.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setDone(false)}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Full name" error={errors.name?.message} required>
                        <Input
                          placeholder="Jane Doe"
                          className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          aria-invalid={!!errors.name}
                          {...register("name")}
                        />
                      </Field>
                      <Field label="Email" error={errors.email?.message} required>
                        <Input
                          type="email"
                          placeholder="jane@company.co.ke"
                          className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          aria-invalid={!!errors.email}
                          {...register("email")}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Phone" error={errors.phone?.message}>
                        <Input
                          placeholder="+254 700 000 000"
                          className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          {...register("phone")}
                        />
                      </Field>
                      <Field label="Company" error={errors.company?.message}>
                        <Input
                          placeholder="Acme Ltd."
                          className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          {...register("company")}
                        />
                      </Field>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Service of interest">
                        <Select
                          value={watch("service") ?? ""}
                          onValueChange={(v) => setValue("service", v)}
                        >
                          <SelectTrigger className="h-11 w-full border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {serviceOptions.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                      <Field label="Estimated budget">
                        <Select
                          value={watch("budget") ?? ""}
                          onValueChange={(v) => setValue("budget", v)}
                        >
                          <SelectTrigger className="h-11 w-full border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]">
                            <SelectValue placeholder="Select a range" />
                          </SelectTrigger>
                          <SelectContent>
                            {budgetOptions.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </div>

                    <Field label="How can we help?" error={errors.message?.message} required>
                      <Textarea
                        placeholder="Tell us about your current setup, challenges or goals..."
                        className="min-h-[120px] resize-y border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                        aria-invalid={!!errors.message}
                        {...register("message")}
                      />
                    </Field>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="h-12 w-full gap-2 btn-gradient text-base font-semibold shadow-lg"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send my inquiry
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-xs text-[#5A6577]">
                      By submitting, you agree to be contacted by Astra Tech. We respect your
                      privacy — your details are never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm font-medium text-[#0F1729]">
        {label}
        {required && <span className="ml-0.5 text-[#2B5FD9]">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs font-medium text-[#E31B23]">{error}</p>}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white p-4 shadow-sm transition-all hover:border-[#2B5FD930] hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF] text-white shadow-md transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-[#5A6577]">{label}</div>
        <div className="truncate text-sm font-semibold text-[#0F1729]" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
      {href && (
        <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-[#5A6577]/30 transition-all group-hover:translate-x-0.5 group-hover:text-[#2B5FD9]" />
      )}
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
