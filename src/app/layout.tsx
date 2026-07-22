import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sivasaiengg.in'),
  title: {
    default: "Siva Sai Engineering Services | Turbine & Generator Erection",
    template: "%s | Siva Sai Engineering Services",
  },
  description: "Siva Sai Engineering Services (SSES) specializes in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, generators, and auxiliary equipment ranging from 1 MW to 1000 MW.",
  keywords: ["Turbine Erection", "Generator Overhauling", "Steam Turbine Commissioning", "Gas Turbine Alignment", "Power Plant Services", "SSES", "Engineering Services"],
  authors: [{ name: "Siva Sai Engineering Services" }],
  creator: "Siva Sai Engineering Services",
  publisher: "Siva Sai Engineering Services",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sivasaiengg.in",
    title: "Siva Sai Engineering Services | Turbine & Generator Erection",
    description: "Experts in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, and generators.",
    siteName: "Siva Sai Engineering Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Sai Engineering Services | Turbine & Generator Erection",
    description: "Experts in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, and generators.",
  },
  icons: {
    icon: "/s_favicon.png",
    shortcut: "/s_favicon.png",
    apple: "/s_favicon.png",
  },
  alternates: {
    canonical: 'https://www.sivasaiengg.in',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EngineeringBusiness",
  "name": "Siva Sai Engineering Services",
  "url": "https://www.sivasaiengg.in",
  "logo": "https://www.sivasaiengg.in/s_favicon.png",
  "description": "Siva Sai Engineering Services (SSES) specializes in the erection, overhauling, alignment, and commissioning of steam turbines, gas turbines, generators, and auxiliary equipment.",
  "sameAs": [
    "https://www.sivasaiengg.in"
  ]
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
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/s_favicon.png" />
        <link rel="shortcut icon" href="/s_favicon.png" />
        <link rel="apple-touch-icon" href="/s_favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-[#f8fafc] transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <a href="#main-content" className="skip-link sr-only">
            Skip to content
          </a>
          <Navbar />
          <div id="main-content" className="flex-1">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
