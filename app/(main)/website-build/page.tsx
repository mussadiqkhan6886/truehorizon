import Hero from '@/components/wesitePage/Hero'
import Profile from '@/components/wesitePage/Profile'
import React from 'react'
import Process from '@/components/wesitePage/Process'
import Offers from '@/components/wesitePage/Offers'

const Website = () => {
  return (
    <main className="pt-4 overflow-x-hidden  md:pt-0 bg-black">
      <Hero />
      <Profile />
      <Offers />
      <Process />
    </main>
  )
}

export default Website
