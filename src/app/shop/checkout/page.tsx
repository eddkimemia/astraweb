"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Truck,
  ShieldCheck,
  Loader2,
  Minus,
  Plus,
  Trash2,
  MapPin,
  Phone,
  Mail,
  User,
  Building,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/lib/store";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

function formatKES(n: number) {
  return `KES ${n.toLocaleString("en-KE")}`;
}

const counties = [
  "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet",
  "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado",
  "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga",
  "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia",
  "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit",
  "Meru", "Migori", "Mombasa", "Muranga", "Nairobi",
  "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua",
  "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
  "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga",
  "Wajir", "West Pokot",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [orderId, setOrderId] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    county: "",
    postalCode: "",
    paymentMethod: "cod",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const shipping = total() > 100000 ? 0 : 2500;
  const grandTotal = total() + shipping;

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.address.trim()) e.address = "Delivery address is required";
    if (!form.city.trim()) e.city = "City is required";
    if (!form.county) e.county = "County is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      toast.error("Please fix the errors", { description: "Some required fields are missing." });
      return;
    }
    if (items.length === 0) {
      toast.error("Cart is empty", { description: "Add items to your cart before checking out." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items: items.map((i) => ({
            productId: i.product.slug,
            name: i.product.name,
            price: i.product.price,
            quantity: i.quantity,
          })),
          subtotal: total(),
          shipping,
          total: grandTotal,
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to place order");

      setOrderId(json.orderId);
      setDone(true);
      clearCart();
      toast.success("Order placed!", { description: "We'll contact you shortly to confirm." });
    } catch (err) {
      toast.error("Could not place order", {
        description: err instanceof Error ? err.message : "Please try again or call us.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section className="relative py-20 sm:py-28">
        <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
        <div className="relative mx-auto max-w-lg px-4 text-center sm:px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-lg"
          >
            <CheckCircle2 className="h-10 w-10" />
          </motion.div>
          <h1 className="mt-6 text-3xl font-extrabold text-[#0F1729]">Order Confirmed!</h1>
          <p className="mt-3 text-[#5A6577]">
            Thank you for your purchase. Our team will contact you within one business hour to confirm your order and arrange delivery.
          </p>
          <div className="mt-6 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-premium">
            <p className="text-sm text-[#5A6577]">Order ID</p>
            <p className="mt-1 font-mono text-lg font-bold text-[#0F1729]">{orderId}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1 h-12 btn-gradient font-semibold shadow-md">
              <Link href="/shop">Continue Shopping</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1 h-12">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="relative py-20 sm:py-28">
        <div className="relative mx-auto max-w-lg px-4 text-center sm:px-6">
          <p className="text-lg text-[#5A6577]">Your cart is empty.</p>
          <Button asChild className="mt-4 btn-gradient shadow-md">
            <Link href="/shop">Browse Products</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 text-white sm:py-20">
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
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
            <CreditCard className="h-3.5 w-3.5" />
            Checkout
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Complete your <span className="text-gradient">order</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Review your cart and provide delivery details. All prices in Kenyan Shillings.
          </p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="relative py-10 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link
            href="/shop"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#5A6577] transition-colors hover:text-[#2B5FD9]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            {/* Left: Form */}
            <div className="space-y-8">
              {/* Contact */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2B5FD9] to-[#1E40AF] text-white shadow-md">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0F1729]">Contact Information</h2>
                    <p className="text-xs text-[#5A6577]">We'll use this to confirm your order</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name} required>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6577]" />
                        <Input
                          placeholder="Jane Doe"
                          className="h-11 pl-10 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
                        />
                      </div>
                    </Field>
                    <Field label="Email" error={errors.email} required>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6577]" />
                        <Input
                          type="email"
                          placeholder="jane@company.co.ke"
                          className="h-11 pl-10 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
                        />
                      </div>
                    </Field>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" error={errors.phone} required>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6577]" />
                        <Input
                          placeholder="+254 715 135 141"
                          className="h-11 pl-10 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          value={form.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                    </Field>
                    <Field label="Company (optional)">
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6577]" />
                        <Input
                          placeholder="Acme Ltd."
                          className="h-11 pl-10 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                          value={form.company}
                          onChange={(e) => updateField("company", e.target.value)}
                        />
                      </div>
                    </Field>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#EA580C] text-white shadow-md">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0F1729]">Delivery Address</h2>
                    <p className="text-xs text-[#5A6577]">Where should we deliver your order?</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <Field label="Street address" error={errors.address} required>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A6577]" />
                      <Input
                        placeholder="Building, street, floor"
                        className="h-11 pl-10 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                        value={form.address}
                        onChange={(e) => updateField("address", e.target.value)}
                      />
                    </div>
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Field label="City" error={errors.city} required>
                      <Input
                        placeholder="Nairobi"
                        className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                      />
                    </Field>
                    <Field label="County" error={errors.county} required>
                      <select
                        value={form.county}
                        onChange={(e) => updateField("county", e.target.value)}
                        className={cn(
                          "flex h-11 w-full rounded-lg border bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#2B5FD920]",
                          errors.county ? "border-[#E31B23]" : "border-[#E2E8F0] focus:border-[#2B5FD9]"
                        )}
                      >
                        <option value="">Select county</option>
                        {counties.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Postal code (optional)">
                      <Input
                        placeholder="00100"
                        className="h-11 border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                        value={form.postalCode}
                        onChange={(e) => updateField("postalCode", e.target.value)}
                      />
                    </Field>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] text-white shadow-md">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0F1729]">Payment Method</h2>
                    <p className="text-xs text-[#5A6577]">Choose how you'd like to pay</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { value: "cod", label: "Pay on Delivery", desc: "Pay when your order arrives" },
                    { value: "bank", label: "Bank Transfer", desc: "We'll send you our bank details" },
                    { value: "mpesa", label: "M-Pesa", desc: "Pay via M-Pesa prompt" },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        "flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition-all",
                        form.paymentMethod === opt.value
                          ? "border-[#2B5FD9] bg-[#F0F4FF] shadow-sm"
                          : "border-[#E2E8F0] bg-white hover:border-[#2B5FD930]"
                      )}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={opt.value}
                        checked={form.paymentMethod === opt.value}
                        onChange={(e) => updateField("paymentMethod", e.target.value)}
                        className="h-4 w-4 border-[#E2E8F0] text-[#2B5FD9] focus:ring-[#2B5FD920]"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#0F1729]">{opt.label}</p>
                        <p className="text-xs text-[#5A6577]">{opt.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#059669] to-[#047857] text-white shadow-md">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#0F1729]">Order Notes</h2>
                    <p className="text-xs text-[#5A6577]">Any special instructions? (optional)</p>
                  </div>
                </div>
                <Textarea
                  placeholder="Delivery instructions, preferred times, etc."
                  className="min-h-[100px] resize-y border-[#E2E8F0] focus:border-[#2B5FD9] focus:ring-[#2B5FD920]"
                  value={form.notes}
                  onChange={(e) => updateField("notes", e.target.value)}
                />
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-premium-lg">
                <h2 className="text-lg font-bold text-[#0F1729]">Order Summary</h2>
                <Separator className="my-4" />

                {/* Items */}
                <div className="max-h-[400px] space-y-4 overflow-y-auto">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.product.slug}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-3"
                      >
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#F0F4FF] text-2xl">
                          {item.product.category === "CCTV & Surveillance" && "📷"}
                          {item.product.category === "Access Control" && "🔐"}
                          {item.product.category === "Cybersecurity" && "🛡️"}
                          {item.product.category === "Networking" && "🌐"}
                          {item.product.category === "Smart Home" && "🏠"}
                          {item.product.category === "Software Licenses" && "💿"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-[#0F1729] line-clamp-1">
                            {item.product.name}
                          </p>
                          <p className="text-xs text-[#5A6577]">{item.product.category}</p>
                          <div className="mt-1.5 flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.slug, item.quantity - 1)}
                              className="flex h-6 w-6 items-center justify-center rounded border border-[#E2E8F0] hover:bg-[#F5F7FA]"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.product.slug, item.quantity + 1)}
                              className="flex h-6 w-6 items-center justify-center rounded border border-[#E2E8F0] hover:bg-[#F5F7FA]"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => removeItem(item.product.slug)}
                              className="ml-auto text-[#5A6577] hover:text-[#E31B23]"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <p className="shrink-0 text-sm font-bold text-[#0F1729]">
                          {formatKES(item.product.price * item.quantity)}
                        </p>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <Separator className="my-4" />

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A6577]">Subtotal</span>
                    <span className="font-medium text-[#0F1729]">{formatKES(total())}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#5A6577]">Shipping</span>
                    <span className={cn("font-medium", shipping === 0 ? "text-[#059669]" : "text-[#0F1729]")}>
                      {shipping === 0 ? "Free" : formatKES(shipping)}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-xs text-[#059669]">Free shipping on orders over KES 100,000</p>
                  )}
                  <Separator className="my-2" />
                  <div className="flex justify-between">
                    <span className="text-base font-bold text-[#0F1729]">Total</span>
                    <span className="text-xl font-extrabold text-[#0F1729]">{formatKES(grandTotal)}</span>
                  </div>
                </div>

                {/* Place Order */}
                <Button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="mt-6 h-12 w-full btn-gradient text-base font-semibold shadow-lg"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Placing order...
                    </>
                  ) : (
                    <>
                      Place Order
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>

                {/* Trust */}
                <div className="mt-4 space-y-2">
                  {[
                    { icon: ShieldCheck, text: "Secure checkout" },
                    { icon: Truck, text: "Nationwide delivery" },
                    { icon: CreditCard, text: "Multiple payment options" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-xs text-[#5A6577]">
                      <Icon className="h-3.5 w-3.5 text-[#059669]" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
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
        {required && <span className="ml-0.5 text-[#E31B23]">*</span>}
      </Label>
      {children}
      {error && <p className="text-xs font-medium text-[#E31B23]">{error}</p>}
    </div>
  );
}
