import Hero from '@/components/wesitePage/Hero'
import Profile from '@/components/wesitePage/Profile'
import React from 'react'
import Process from '@/components/wesitePage/Process'
import Offers from '@/components/wesitePage/Offers'

const Website = () => {
  return (
    <main className="overflow-x-hidden bg-black">
      <Hero />
      <Profile />
      <Offers />
      <Process />
    </main>
  )
}

export default Website
