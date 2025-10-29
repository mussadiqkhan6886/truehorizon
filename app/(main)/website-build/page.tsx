import type { Metadata } from 'next';
import Hero from '@/components/wesitePage/Hero'
import Profile from '@/components/wesitePage/Profile'
import React from 'react'
import Process from '@/components/wesitePage/Process'
import Offers from '@/components/wesitePage/Offers'

export const metadata: Metadata = {
   title: "Development - True Horizon",
  description: "At True Horizon, we combine innovation and technology to deliver intelligent automation and web development solutions that drive growth and transform operations.",
   openGraph: {
    title: "Website development - True Horizon",
    description:
      "True Horizon combines innovation and technology to deliver intelligent automation and web development solutions that drive growth and transform operations.",
    url: "https://truehorizon.tech/website-build",
    siteName: "True Horizon",
    images: [
      {
        url: "https://truehorizon.tech/website.png", // replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "True Horizon - About Us",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development - True Horizon",
    description:
      "Discover how True Horizon helps organizations scale with intelligent automation and web development solutions.",
    images: ["https://truehorizon.tech/website.png"], // same as OG image
  },
  alternates: {
    canonical: "https://truehorizon.tech/website-build",
  },
};
const Website = () => {
  return (
    <main className="overflow-x- pt-10 bg-black">
      <Hero />
      <Profile />
      <Offers />
      <Process />
    </main>
  )
}

export default Website
