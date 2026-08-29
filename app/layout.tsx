import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminai.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Luminai — One place for useful things", template: "%s — Luminai" },
  description: "A thoughtful universal platform for AI, education, media and professional work.",
  applicationName: "Luminai",
  keywords: ["AI", "education", "past papers", "movies", "music", "portfolio"],
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Luminai", title: "Luminai — One place for useful things", description: "A thoughtful universal platform for AI, education, media and professional work." },
  twitter: { card: "summary", title: "Luminai", description: "A thoughtful universal platform for AI, education, media and professional work." },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f6f7f3" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;
}
