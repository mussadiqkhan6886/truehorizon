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
    "True Horizon partners with executives and teams to identify high-ROI automation opportunities, upskill internal talent, and implement end-to-end AI infrastructure built and web development for measurable business growth.",
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
    "web development",
    "web design", 
    "UI/UX",
    "web developer",
    "tech",
    "freelancing agency",
    "agency",
    "true horizon",
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
    url: "https://truehorizon.uk/",
    siteName: "True Horizon",
    title: "True Horizon",
    description:
      "Empowering organizations to scale through AI automation, strategy, web development and workforce transformation.",
    images: [
      {
        url: "https://truehorizon.tecg/website.png", // Replace with your real OG image URL
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
    images: ["https://truehorizon.uk/website.png"], // Same as OG image
  },
  category: "Artificial Intelligence, Automation, Business Consulting, Web Development",
  alternates: {
    canonical: "http\s://truehorizon.uk/",
  },
  icons: {
    icon: "/star.ico",
    apple: "/star.ico",
    shortcut: "/star.ico",
  },
  metadataBase: new URL("https://truehorizon.uk"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="RRRHPtTwSVSw9dAQAJV6ZPIBgtyQZo03ZPo5wIyBZec" />
        <meta
          name="description"
          content="True Horizon partners with executives and teams to identify high-ROI automation opportunities, upskill internal talent, and implement end-to-end AI infrastructure built and web development for measurable business growth."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "True Horizon",
              url: "https://www.truehorizon.uk",
              logo: "https://www.truehorizon.uk/star.ico",
              // sameAs: [
              //   "https://www.linkedin.com/company/truehorizon",
              //   "https://twitter.com/truehorizon",
              // ],
            }),
          }}
        />
      </head>
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
