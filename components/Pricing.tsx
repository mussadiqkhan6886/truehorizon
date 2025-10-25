'use client';

import React from 'react'
import Title from './Title'
import { pricingData, variants2 } from '@/lib/constants'
import Button from './Button'
import { FiCheck } from 'react-icons/fi'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
   <section id='pricing' className='max-w-7xl mx-auto py-10 text-white'>
      <Title buttonHeading='Pricing' firstLine='The Best AI Automation,' secondLine="at the Right Price" para='Choose a plan that fits your business needs and start automating with AI' />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6 md:px-10 sm:px-20">
        {pricingData.map((item, i) => (
            <motion.div variants={variants2(item.delay)} initial="hidden" whileInView={"show"} key={i} className='border flex flex-col gap-9 relative overflow-hidden border-zinc-800 p-7'>
              {item.title === "Professional" && (<div className="absolute -top-[10px] left-0 right-0 bottom-[280px] opacity-75  bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_70%)] blur-xl rotate-180" />)}
                <div className='z-10 flex gap-3 flex-col'>
                  <div className='flex justify-between'>
                    <div className='flex gap-3 items-center'>
                      <item.icon className='text-[18px] xl:text-xl' /> <p className='text-2xl tracking-tight'>{item.title}</p>
                    </div>
                    {item.badge && <div className='z-10 border border-zinc-800 bg-black px-2.5 py-1 text-sm'>
                      {item.badge}  
                    </div>}
                  </div>
                  <h5 className='text-[28px] xl:text-[34px] font-semibold tracking-tight text-zinc-300'>{item.price}</h5>
                  <p className='text-zinc-300'>{item.description}</p>
                </div>
                <div
                  className={cn(
                    "overflow-hidden w-full flex items-center justify-center rounded-md font-semibold group text-sm z-10 py-2.5",
                    item.title === "Professional" ? "bg-purple-700" : "bg-zinc-900/50"
                  )}
                >
                  <Link
                    href="/call"
                    className="overflow-hidden relative h-[20px] w-full flex items-center justify-center"
                  >
                    <span className="absolute transition-all duration-300 ease-in-out group-hover:-translate-y-full">
                      Schedule a call
                    </span>
                    <span className="absolute translate-y-full transition-all duration-300 ease-in-out group-hover:translate-y-0">
                      Schedule a call
                    </span>
                  </Link>
                </div>
                <div className='z-10'>
                  <p className='text-zinc-300 mb-2'>What&apos;s Included: </p>
                  <ul className='flex flex-col gap-2'>
                    {item.features.map((feature, j) => (
                      <li className='flex items-center gap-2 text-[17px] tracking-tight' key={j}><FiCheck className='text-xl' /> {feature}</li>
                    ))}
                  </ul>
                </div>
                {item.title !== "Professional" && (<div className="absolute -bottom-10 opacity-65 inset-0 bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_40%)] blur-2xl" />)}
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
