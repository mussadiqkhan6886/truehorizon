'use client';

import { variants2, whyUs } from '@/lib/constants'
import React from 'react'
import {motion} from "framer-motion"

const Us = () => {
  return (
     <section className='my-10 max-w-4xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 px-1 gap-5'>
            {whyUs.map((item, i) => (
                <motion.div variants={variants2(0.2)} initial="hidden" whileInView={"show"} key={i} className='relative border border-zinc-800 rounded-lg p-6 overflow-hidden'>
                    {item.heading.toLowerCase().includes("our") && (
                        <div className='w-[100px] h-[80px] absolute left-[40%] -top-[30px] rounded-full bg-fuchsia-900 blur-3xl' />
                    )}
                    <h5 className='z-10 text-2xl mb-8'>{item.heading}</h5>
                    <div className='z-10'>
                        <ul>
                            {item.list.map((listItem, j) => (
                                <li className='flex items-center gap-3 mb-1.5' key={j}><item.icon className='text-lg' /> {` `} {listItem}</li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Us
