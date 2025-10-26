'use client';

import React from 'react'
import Title from './Title'
import Image from 'next/image'
import {motion} from "framer-motion"
import { variants2 } from '@/lib/constants';

const Study = () => {
  return (
    <section id='case-studies' className='py-10 mb-10 text-white'>
      <Title buttonHeading='Case Studies' firstLine='Case Study — The' secondLine="Village of Robbins" para='Smart Government Systems for a Smarter Community' />
      <motion.div variants={variants2(0.2)} initial="hidden" whileInView={"show"} className='flex flex-col items-center md:flex-row mt-10 gap-12 max-w-[940px]  mx-auto'>
        <div className='flex-1 w-full md:w-[50%] overflow-hidden relative'>
            <Image src={"/studyImage.png"} className='w-full h-full object-center object-cover scale-110' width={500} height={500} alt='image study' />
            <div className='absolute -left-10 w-[100px] z-10 top-0 h-full bg-gradient-to-r from-black to-black/10' />
        </div>
        <div className='md:w-[50%] px-8'>
            <div>

            </div>
            <div className=' lg:pr-6'>
                <h5 className="text-2xl font-semibold mb-3 lg:pr-10">&quot;Smart Government Systems <br /> for a Smarter Community&quot;</h5>
                <p className="text-zinc-300 mb-6 lg:pr-10 text-base">The Village of Robbins struggled with slow permit processing, scattered citizen requests, and rising admin costs. A.I Consulting built CivicFlow, an AI system that automated service routing, introduced a 24/7 resident chatbot, and gave administrators real-time dashboards for public works and budgeting.</p>
                <div>
                    <h6 className='mb-2 text-zinc-300'>Impact : </h6>
                    <ul className='flex gap-1 font-[500] flex-col list-disc pl-6'>
                        <li className='pl-2'>58% faster request resolution</li>
                        <li className='pl-2'>40% less admin workload</li>
                        <li className='pl-2'>$75k annual cost savings</li>
                        <li className='pl-2'>24/7 citizen access via AI assistant</li>
                    </ul>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Study
