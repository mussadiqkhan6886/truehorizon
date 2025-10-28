'use client';

import React from 'react'
import { motion } from 'framer-motion';
import { servicesData } from '@/lib/constants';
import Card from './Card';

const Services = () => {

    const variant1 = {
        hidden: {
            x: -100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1
        }
    }

    const variant2 = {
        hidden: {
            x: 100,
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1
        }
    }

  return (
    <section className='bg-white text-black p-16'>
      <div className='flex justify-between items-center'>
        <motion.div variants={variant1} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='flex gap-3 items-center'>
            <div className='w-2.5 mb-1 h-2.5 bg-fuchsia-800 rounded-full' />
            <p className='text-[12px] sm:text-sm text-zinc-700 font-semibold'>OUR SERVICES</p>
        </motion.div>
        <motion.h3 variants={variant2} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='text-4xl w-[50%]'>
            A service offering designed to meet your every need
        </motion.h3>
      </div>
      <section className="flex flex-col mt-10">
          {servicesData.map((service) => (
            <Card key={service.id} {...service} />
          ))}
    </section>
    </section>
  )
}

export default Services
