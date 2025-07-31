import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { generateHomeMetadata } from "@/lib/seo";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = generateHomeMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <OrganizationStructuredData />
        <Navigation />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}