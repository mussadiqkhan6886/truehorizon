'use client';

import React from 'react'
import Title from './Title'
import FaqCollapse from './FaqCollapse'
import Button from './Button'
import { FiArrowRight } from 'react-icons/fi'
import { variants2 } from '@/lib/constants'
import { motion } from 'framer-motion'

const FAQ = () => {
  return (
     <section className='py-10 text-white'>
      <Title buttonHeading='FAQs' firstLine='We’ve Got the Answers' secondLine="You’re Looking For" para='Quick answers to your AI automation questions.' />
      <FaqCollapse />
      <div className='max-w-3xl mx-auto py-16'>
        <motion.div variants={variants2(0.2)} initial="hidden" whileInView={"show"} className='relative gap-4 items-center flex justify-center bg-zinc-800/30 overflow-hidden rounded-xl flex-col py-[70px]'>
            <div className='absolute bg-purple-900 -left-[120px] -top-[170px] blur-3xl  opacity-65 w-[300px] h-[340px] rotate-[50deg]' />
            <h6 className='text-3xl z-10 sm:text-5xl text-center font-semibold tracking-tight'>Let AI do the Work so <br />you can Scale Faster</h6>
            <p className='text-zinc-300 font-[500] text-[17px]'>Book a Call Today and Start Automating</p>
            <Button text='Book a free call' color='purple' icon={<FiArrowRight className='inline' />} link='/call' />
            <div className='absolute bg-purple-900 -right-[120px] -bottom-[170px] blur-3xl  opacity-65 w-[280px] h-[320px] rotate-[50deg]' />
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
