import type { Metadata } from "next";
import { Space_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heading = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | DeFi Protocol Engineering`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://coreledger-innovations.com"),
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/brand/logo-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} ${mono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
