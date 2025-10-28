import Hero from '@/components/wesitePage/Hero'
import Profile from '@/components/wesitePage/Profile'
import React from 'react'
import Services from '@/components/wesitePage/Services'
import Process from '@/components/wesitePage/Process'

const Website = () => {
  return (
    <main className="pt-4 overflow-x-hidden  md:pt-0 bg-black">
      <Hero />
      <Profile />
      <Services />
      <Process />
    </main>
  )
}

export default Website
