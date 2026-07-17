import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const orderItemSchema = z.object({
  productId: z.string().min(1),
  name: z.string().min(1),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
});

const orderSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(150),
  phone: z.string().min(5, "Phone is required").max(30),
  company: z.string().max(150).optional().or(z.literal("")),
  address: z.string().min(5, "Address is required").max(300),
  city: z.string().min(2, "City is required").max(100),
  county: z.string().min(2, "County is required").max(50),
  postalCode: z.string().max(10).optional().or(z.literal("")),
  paymentMethod: z.enum(["cod", "bank", "mpesa"]),
  notes: z.string().max(2000).optional().or(z.literal("")),
  items: z.array(orderItemSchema).min(1, "At least one item is required"),
  subtotal: z.number().positive(),
  shipping: z.number().min(0),
  total: z.number().positive(),
});

function generateOrderId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `AT-${timestamp}-${random}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = orderSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: firstError?.message ?? "Invalid input" },
        { status: 400 },
      );
    }

    const data = parsed.data;
    const orderId = generateOrderId();

    const order = await db.order.create({
      data: {
        id: orderId,
        name: data.name,
        email: data.email,
        phone: data.phone,
        company: data.company || null,
        address: data.address,
        city: data.city,
        county: data.county,
        postalCode: data.postalCode || null,
        paymentMethod: data.paymentMethod,
        notes: data.notes || null,
        subtotal: data.subtotal,
        shipping: data.shipping,
        total: data.total,
        items: {
          create: data.items.map((item) => ({
            productId: item.productId,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(
      {
        ok: true,
        orderId: order.id,
        message: "Order placed successfully! We will contact you to confirm.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to place order. Please try again or call us." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const orders = await db.order.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      include: { items: true },
    });
    return NextResponse.json({ ok: true, orders });
  } catch (error) {
    console.error("Fetch orders error:", error);
    return NextResponse.json({ ok: false, error: "Unable to fetch orders" }, { status: 500 });
  }
}
