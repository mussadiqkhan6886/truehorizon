import React from 'react'
import { InfiniteMovingCode } from './ui/Code'
import { InfiniteMovingCards } from './ui/MovingCards'

const Trusted = () => {

    const images = ["/hitech.png", "/terra.png", "/whop.png"]

  return (
    <section className='max-w-2xl mt-16 text-white mx-auto my-10'>
      <p className='text-center'>Over 50+ business trust us</p>
      <InfiniteMovingCards items={images} speed='fast' />
    </section>
  )
}

export default Trusted
