import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/brand";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${brand.name} | ${brand.tagline}`,
    template: `%s | ${brand.name}`
  },
  description:
    "Digital Bhanu shares practical AI knowledge, digital marketing ideas, AI-generated images, videos, and useful resources.",
  openGraph: {
    title: brand.name,
    description: brand.tagline,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
