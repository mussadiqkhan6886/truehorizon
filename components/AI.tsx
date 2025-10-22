'use client';

import React from 'react'
import Orb from './ORB';
import { FiBarChart, FiImage, FiPaperclip, FiSend } from 'react-icons/fi';
import TextType from './ui/Typewriter';
import { variants } from '@/lib/constants';
import {motion} from "framer-motion";

const AI = () => {
  return (
    <motion.div variants={variants} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}} className='w-[450px] text-white relative h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'>
          <div  className='bg-black w-full rounded-2xl gap-1 border-b-0 flex justify-center flex-col items-center p-4 border-zinc-900 h-full border'>
            <div className='grid place-content-center'>
              <Orb
                  smaller={true}
                  hoverIntensity={0.13}
                  rotateOnHover={true}
                  hue={313}
                  forceHoverState={false}
              />
            </div>
            <h5 className="text-lg font-semibold">What can I help with?</h5>
            <p className="text-[10px] tracking-tight px-8 font-[500] leading-3 text-zinc-400 text-center">Weather you want help in  customer handling or make changes in your system just give me command</p>
            <div className='border border-zinc-800/80 mt-3 rounded-md px-2 p-1'>
              <div className="flex w-[300px] items-center justify-between ">
                <div>
                  <TextType 
                    text={["Provide me full report", "Schedule a 30 day content", "Generate a invoice"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    className='text-[13px] text-zinc-500 font-[500]'
                    cursorClassName='text-zinc-500'
                  />
                </div>
                <div className="w-[21px] grid place-content-center text-purple-800 border border-zinc-700 text-[12px] h-[21px] bg-zinc-800/30 rounded-md">
                  <FiSend />
                </div>
              </div>
              <div className='flex gap-1 bg-zinc-900/60 items-center px-1.5 rounded-xl w-[100px] mt-1.5 border border-zinc-800 opacity-90'>
                <span className='text-purple-800 text-[13px]'>+</span>
                <h6 className='text-zinc-600 text-[10px]'>Add Document</h6>
              </div>
            </div>
            <div className='flex gap-3 justify-center items-center mt-2 opacity-60'>
              <div className="flex gap-1 items-center text-[11px] border border-zinc-800/70 rounded-xl p-0.5 px-1">
                <FiBarChart className='text-purple-800' />
                <p>Analyze</p>
              </div>
              <div className="flex gap-1 items-center text-[11px] border border-zinc-800/70 rounded-xl p-0.5 px-1">
                <FiImage className='text-purple-800' />
                <p>Generate Image</p>
              </div>
              <div className="flex gap-1 items-center text-[11px] border border-zinc-800/70 rounded-xl p-0.5 px-1">
                <FiPaperclip className='text-purple-800' />
                <p>Research</p>
              </div>
            </div>
          </div>
          <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[45px] left-0 z-10' />
        </motion.div>
  )
}

export default AI
