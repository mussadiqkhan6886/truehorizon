'use client';

import { valuesAbout, variants2 } from '@/lib/constants'
import React from 'react'
import { motion } from 'framer-motion';

const Values = () => {
  return (
    <section className='my-10 max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-1 gap-5'>
            {valuesAbout.map(item => (
                <motion.div variants={variants2(item.delay)} initial="hidden" whileInView={"show"} key={item.delay} className='flex gap-5 flex-col px-8 py-5 rounded-lg border border-zinc-800'>
                    <div className='flex gap-3 items-center text-2xl font-semibold'>
                        <item.icon className='text-3xl' />
                        <h5 className='tracking-tight'>{item.title}</h5>
                    </div>
                    <p className='text-zinc-300'>{item.para}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Values
