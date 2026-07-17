import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Chatbot } from "@/components/site/chatbot";
import { BackToTop } from "@/components/site/back-to-top";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Astra Tech — Security & IT Solutions | Kenya",
    template: "%s | Astra Tech",
  },
  description:
    "Astra Tech delivers world-class security systems, networking, IT infrastructure, cybersecurity and smart business solutions across Kenya and East Africa. Trusted enterprise-grade protection and innovation.",
  keywords: [
    "Astra Tech",
    "security systems Kenya",
    "IT infrastructure Nairobi",
    "cybersecurity Kenya",
    "networking solutions",
    "CCTV Kenya",
    "access control",
    "smart business solutions",
    "IT support Kenya",
    "East Africa IT company",
  ],
  authors: [{ name: "Astra Tech Security & IT Solutions" }],
  metadataBase: new URL("https://astratech.co.ke"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Astra Tech — Security & IT Solutions",
    description:
      "World-class security systems, networking, IT infrastructure, cybersecurity & smart business solutions. Trusted across Kenya & East Africa.",
    url: "https://astratech.co.ke",
    siteName: "Astra Tech",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astra Tech — Security & IT Solutions",
    description:
      "World-class security systems, networking, IT infrastructure, cybersecurity & smart business solutions in Kenya.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} ${jetbrains.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        {children}
        <Footer />
        <Chatbot />
        <BackToTop />
        <Toaster />
        <SonnerToaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
