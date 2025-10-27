import type { Metadata } from "next";
import {Figtree} from "next/font/google"
import "./globals.css";
import Header from "@/components/admin/Header";

const figtree = Figtree({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "True Horizon | Admin Dashboard",
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
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body
        className={`${figtree.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
