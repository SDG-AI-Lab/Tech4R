import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech4R",
  description: "Tech4R is a collaborative initiative harnessing digital innovation to strengthen disaster resilience around the world.",
};

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
        <Navigation />
        <main className="flex-1 flex flex-col max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}