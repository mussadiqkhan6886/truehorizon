'use client';

import React from 'react'
import { FiCalendar, FiClipboard, FiFilter } from 'react-icons/fi'
import { motion } from 'framer-motion';
import { variants } from '@/lib/constants';

const Custom = () => {
  return (
    <div className='w-[450px] h-[370px] overflow-hidden rounded-3xl bg-[#0d0d0dcc] relative p-[50px] pb-0'>
        <motion.div variants={variants} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='bg-black rounded-lg border text-[13px] border-zinc-800 p-3 h-full'>
            <p>Hey David</p>
            <p className='text-zinc-200 text-[12px] mb-2'>Here is your Custom project & schedule</p>
            <div className='border relative border-zinc-800 p-2 rounded-md bg-zinc-900/50'>
                <div className='flex gap-2 items-center mb-2'>
                    <FiFilter />
                    <p>On going project:</p>
                </div>
                <div className='flex justify-between mb-1 bg-zinc-900  border-zinc-700 border rounded-md px-2 py-1 items-center'>
                    <div className='flex gap-3 items-center'>
                        <FiClipboard className='text-lg' />
                        <div>
                            <p className='text-[12px] font-[500]'>Customer Support Chatbot</p>
                            <p className='text-[11px] text-zinc-300'>90% Finished</p>
                        </div>
                    </div>
                    <div className='relative w-3 h-3 border-2 rounded-full border-zinc-300 bg-transparent'>
                        <div className='bg-zinc-900 absolute -top-2 left-1 w-2 h-2.5' />
                    </div>
                </div>
                <div className='h-0.5 opacity-65 bg-gradient-to-r absolute from-0% via-white to-0% w-full my-2' />
                <div className='h-0.5 opacity-65 bg-gradient-to-l absolute from-0% via-white to-0% w-full my-2' />
                <div className='mt-6 '>
                    <div>
                        <div className='bg-zinc-900 rounded-md p-1 px-1.5'>
                            <div className='flex gap-1 mb-1 items-center text-[12px]'>
                                <FiCalendar />
                                <p className='font-[500]'>Schedule</p>
                            </div>
                            <div className='flex gap-1.5 text-[10px] text-zinc-200'>
                                <p className='p-[1px]'>Mo</p>
                                <p className='p-[1px]'>Tu</p>
                                <p className='p-[1px]'>We</p>
                                <p className='p-[1px]'>Th</p>
                                <p className='p-[1px]'>Fr</p>
                                <p className='p-[1px]'>Sa</p>
                                <p className='bg-fuchsia-900 rounded-sm p-[1px] px-0.5'>Su</p>
                            </div>
                        </div>
                        <div className='mt-1 h-[90px] text-zinc-300 text-[11px] border-t border-zinc-700/50 place-content-center grid'>
                            <p>No meeting today</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[60px] left-0 z-10' />
    </div>
  )
}

export default Custom
