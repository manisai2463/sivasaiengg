import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siva Sai Engineering Services | Turbine & Generator Erection & Overhauling",
  description: "Siva Sai Engineering Services (SSES) specializes in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, generators, and auxiliary equipment ranging from 1 MW to 1000 MW.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19]">
        <a href="#main-content" className="skip-link sr-only">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
