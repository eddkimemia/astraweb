import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email is required").max(150),
  phone: z.string().max(30).optional().or(z.literal("")),
  company: z.string().max(150).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  budget: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(10, "Please tell us a bit more (min 10 characters)").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        { ok: false, error: firstError?.message ?? "Invalid input" },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const inquiry = await db.contactInquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        service: data.service || null,
        budget: data.budget || null,
        message: data.message,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        id: inquiry.id,
        message: "Thank you! Our team will reach out within one business hour.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or call us directly." },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const inquiries = await db.contactInquiry.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        email: true,
        service: true,
        status: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ ok: true, inquiries });
  } catch (error) {
    console.error("Fetch inquiries error:", error);
    return NextResponse.json({ ok: false, error: "Unable to fetch inquiries" }, { status: 500 });
  }
}
