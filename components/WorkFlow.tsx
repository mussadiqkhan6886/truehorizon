'use client';

import React from 'react'
import { InfiniteMovingCardsDemo } from './ui/VerticalMoving'
import { motion } from 'framer-motion';
import { variants } from '@/lib/constants';

const WorkFlow = () => {

  return (
    <div className='w-full md:w-[450px] relative h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'>
        <motion.div variants={variants} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='bg-black rounded-2xl border-b-0 p-4 border-zinc-900 h-full border'>
        <div className='border-zinc-800 rounded-sm p-1 text-[12px] bg-gray-400/10 border mb-2 flex gap-3'>
            <div className='bg-gray-700/60 px-0.5'>All Tasks</div>
            <div>Waiting for approval</div>
        </div>
        <InfiniteMovingCardsDemo />
        </motion.div>
        <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[35px] left-0 z-10' />
    </div>
  )
}

export default WorkFlow
