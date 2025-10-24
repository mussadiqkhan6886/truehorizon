'use client';

import React from 'react'
import Title from './Title'
import { aiBenefitsData, variants2 } from '@/lib/constants'
import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <section className='py-10 text-white'>
      <Title buttonHeading='Benefits' firstLine='AI isn&apos;t just a tool — it&apos;s the' secondLine="new infrastructure of business." para='We help you harness it to move faster, think smarter, and scale beyond limits.' />
      <div className='grid grid-cols-3 gap-4 px-28'>
        {aiBenefitsData.map(item => (
            <motion.div variants={variants2(item.delay)} initial="hidden" whileInView={"show"} className='border overflow-hidden border-zinc-800 flex flex-col gap-3 p-6 rounded-md relative' key={item.detail}>
                <div className="absolute -bottom-10 opacity-65 inset-0 bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_70%)] blur-3xl" />
                <item.icon className='text-lg' />
                <h4 className='text-[22px] font-semibold'>{item.title}</h4>
                <p className='text-[15px] pr-6 z-10 text-zinc-200'>{item.detail}</p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
