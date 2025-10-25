'use client';

import { about, variants2 } from '@/lib/constants'
import React from 'react'
import { motion } from 'framer-motion'

const Who = () => {
  return (
    <section className='my-10 max-w-[970px] mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {about.map((item, i) => (
            <motion.div variants={variants2(item.delay)} initial="hidden" whileInView={"show"} key={i} className='border border-zinc-800 px-8 py-5 rounded-lg relative overflow-hidden'>
                <div className='text-white opacity-100 z-10 flex gap-2 mb-2 text-lg md:text-xl font-semibold items-center'>
                    <item.icon />
                    <h3>{item.title}</h3>
                </div>
                <p className='text-sm text-zinc-300 md:text-base z-10'>{item.para}</p>
                <div className='absolute w-[100px] h-[80px] -right-[40px] -bottom-9 bg-purple-800 blur-3xl opacity-90' />
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Who
