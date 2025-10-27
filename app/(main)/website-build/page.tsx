import Hero from '@/components/wesitePage/Hero'
import Profile from '@/components/wesitePage/Profile'
import React from 'react'

const Website = () => {
  return (
    <main className="pt-4 overflow-x-hidden  md:pt-0 bg-black">
      <Hero />
      <Profile />
    </main>
  )
}

export default Website
