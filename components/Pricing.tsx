import React from 'react'
import Title from './Title'
import { pricingData } from '@/lib/constants'
import Button from './Button'

const Pricing = () => {
  return (
   <section className='py-10 text-white'>
      <Title buttonHeading='Pricing' firstLine='The Best AI Automation,' secondLine="at the Right Price" para='Choose a plan that fits your business needs and start automating with AI' />
      <div>
        {pricingData.map((item, i) => (
            <div key={i}>
                <div>

                </div>
                <Button text='Schedule a call ' color={`${item.badge ? "purple": "gray"}`} link='"/call'  />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
