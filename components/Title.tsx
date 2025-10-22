'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { variants } from '@/lib/constants';

interface TitleProps {
  buttonHeading: string
  title: string
  para: string
}

const Title = ({ buttonHeading, title, para }: TitleProps) => {


  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate once when in view
      className="relative flex items-center py-10 justify-center flex-col gap-5"
    >
      <div className="text-sm font-semibold border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">{buttonHeading}</div>
      <div className='md:px-30 flex items-center gap-3 md:gap-5 flex-col'>
        <h2 className="text-[27px] md:text-[50px] xl:w-[80%] md:leading-14 text-center md:px-10 font-semibold">{title}</h2>
        <p className="text-gray-300 w-full md:w-[600px] text-center px-4 text-[15px] sm:text-[18px]">{para}</p>
      </div>
    </motion.div>
  )
}

export default Title
