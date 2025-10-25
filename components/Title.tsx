'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { variants } from '@/lib/constants';

interface TitleProps {
  buttonHeading: string
  firstLine: string
  secondLine?: string
  para: string
}

const Title = ({ buttonHeading, firstLine, secondLine, para }: TitleProps) => {


  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate once when in view
      className="relative flex items-center py-10 justify-center flex-col gap-5"
    >
      <div className="text-sm font-semibold border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">{buttonHeading}</div>
      <div className='md:px-24 flex items-center gap-3 md:gap-5 flex-col'>
        <h2 className="text-[26px] sm:text-[27px] md:text-[50px]  md:leading-14 text-center font-semibold">{firstLine}
          <br />
          {secondLine}
        </h2>
        <p className="text-gray-300 w-full md:w-[635px] text-center px-4 text-[13px] sm:text-[18px]">{para}</p>
      </div>
    </motion.div>
  )
}

export default Title
