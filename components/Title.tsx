'use client';

import React from 'react'
import { motion, Variants } from 'framer-motion'

interface TitleProps {
  buttonHeading: string
  title: string
  para: string
}

const Title = ({ buttonHeading, title, para }: TitleProps) => {

  const variants = {
    hidden: {
      opacity: 0,
      y: 40, 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.5s animation speed
      }
    }
  } as Variants

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }} // animate once when in view
      className="relative flex items-center py-10 justify-center flex-col gap-5"
    >
      <div className="text-sm font-semibold border border-gray-700 px-2.5 py-1.5 mb-2 rounded-md">{buttonHeading}</div>
      <div className='px-30 flex items-center gap-5 flex-col'>
        <h2 className="text-[50px] w-[80%] leading-14 text-center px-10 font-semibold">{title}</h2>
        <p className="text-gray-300">{para}</p>
      </div>
    </motion.div>
  )
}

export default Title
