import { icons } from '@/lib/constants'
import React from 'react'
import { InfiniteMovingCards } from '../ui/MovingCards'

const Tech = () => {
  return (
    <section>
      <h5 className='text-white'>Tech We Use</h5>
      <div>
        <InfiniteMovingCards items={icons} className=' bg-transparent' />
      </div>
    </section>
  )
}

export default Tech
