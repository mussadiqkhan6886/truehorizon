'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

const Card = ({image, category, description, id, services}: {image: string, category: string, description: string, id: number, services: string[]}) => {
    
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
    <section className='flex flex-col md:flex-row justify-between'>
      <motion.div variants={variant1} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='w-full md:w-[60%] md:p-16 px-24 pt-0'>
        <Image className='w-full h-full object-center object-cover' src={image} alt={category} width={200} height={200} />
      </motion.div>
      <motion.div variants={variant2} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='md:w-[60%] flex gap-10 border-b border-zinc-800 py-10'>
        <div>
            <p className='text-sm text-gray-700'>0{id}</p>
        </div>
        <div>
            <h4 className='text-2xl font-[500] uppercase '>{category}</h4>
            <p className='text-gray-700 my-3 text-[17px] pr-1 md:pr-6'>{description}</p>
            <div className='flex flex-wrap gap-4 mt-10'>
                {services.map((item, i) => (
                    <div className='bg-gray-200 px-4 py-1.5 rounded-md font-semibold' key={i}>{item}</div>
                ) )}
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Card
