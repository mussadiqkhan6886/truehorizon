import type { Metadata } from "next";
import {Figtree} from "next/font/google"
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "True Horizon",
  description:
    "True Horizon partners with executives and teams to identify high-ROI automation opportunities, upskill internal talent, and implement end-to-end AI infrastructure built for measurable business growth.",
  keywords: [
    "AI automation",
    "business growth",
    "True Horizon",
    "AI consulting",
    "enterprise automation",
    "machine learning solutions",
    "AI transformation",
    "automation strategy",
    "AI upskilling",
  ],
  authors: [{ name: "True Horizon" }],
  creator: "True Horizon",
  publisher: "True Horizon",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://truehorizon.ai/",
    siteName: "True Horizon",
    title: "True Horizon",
    description:
      "Empowering organizations to scale through AI automation, strategy, and workforce transformation.",
    images: [
      {
        url: "https://truehorizon.ai/og-image.jpg", // Replace with your real OG image URL
        width: 1200,
        height: 630,
        alt: "True Horizon - AI Business Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "True Horizon",
    description:
      "AI strategy and automation solutions designed to maximize ROI and drive organizational efficiency.",
    site: "@truehorizon", // Replace with your Twitter handle if available
    images: ["https://truehorizon.ai/og-image.jpg"], // Same as OG image
  },
  category: "Artificial Intelligence, Automation, Business Consulting",
  alternates: {
    canonical: "http\s://truehorizon.ai/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  metadataBase: new URL("https://truehorizon.ai"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
