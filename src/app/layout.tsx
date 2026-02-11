import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://muthu-trading.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "MGM Muthu International Trading | Your Trusted Export Provider",
    template: "%s | MGM Muthu International Trading",
  },
  description:
    "Your trusted Full Export Provider with 15,000+ products, 70+ years of experience, and ISO 22000 certification. Quality brands at competitive prices from Portugal to the world.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "MGM Muthu International Trading",
    title: "MGM Muthu International Trading | Your Trusted Export Provider",
    description:
      "Your trusted Full Export Provider with 15,000+ products, 70+ years of experience, and ISO 22000 certification. Quality brands at competitive prices from Portugal to the world.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MGM Muthu International Trading | Your Trusted Export Provider",
    description:
      "Your trusted Full Export Provider with 15,000+ products, 70+ years of experience, and ISO 22000 certification.",
  },
  keywords: [
    "MGM Muthu",
    "International Trading",
    "export provider",
    "Portuguese products",
    "food export",
    "household appliances",
    "health and beauty",
    "cleaning products",
    "bicycles",
    "ISO 22000",
    "B2B",
    "wholesale",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
