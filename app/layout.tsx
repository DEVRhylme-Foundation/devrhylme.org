import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevRhylme Foundation - Open Source Organization",
  description: "Building open-source solutions for a better tomorrow. Join our community of developers and contributors.",
  keywords: ["open source", "development", "community", "foundation", "devrhylme"],
  authors: [{ name: "DevRhylme Foundation" }],
  creator: "DevRhylme Foundation",
  publisher: "DevRhylme Foundation",
  metadataBase: new URL("https://devrhylme.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devrhylme.org",
    siteName: "DevRhylme Foundation",
    title: "DevRhylme Foundation - Open Source Organization",
    description: "Building open-source solutions for a better tomorrow. Join our community of developers and contributors.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevRhylme Foundation - Building open-source solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@devrhylme",
    creator: "@devrhylme",
    title: "DevRhylme Foundation - Open Source Organization",
    description: "Building open-source solutions for a better tomorrow. Join our community of developers and contributors.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}