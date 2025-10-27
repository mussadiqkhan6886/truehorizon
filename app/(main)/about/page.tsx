import FAQ from '@/components/FAQ';
import Title from '@/components/Title';
import Trusted from '@/components/Trusted';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import Us from '@/components/Us';
import Values from '@/components/Values';
import Who from '@/components/Who';
import React from 'react'

const About = () => {
  const Heading = "Helping Businesses Grow";
  const para = "Xtract helps businesses streamline operations and grow faster with AI-powered automation"
  return (
    <main className="pt-4 flex flex-col justify-center items-center overflow-x-hidden min-h-screen text-white bg-black">
      <div className='flex flex-col mb-10 pt-6 items-center justify-center h-[90vh] px-6 md:h-[70vh]'>
        <div className='px-2 py-1.5 border border-zinc-800 rounded-md text-md'>About Us</div>
        <TextGenerateEffect className='text-[45px] md:text-[70px] tracking-tight md:leading-[74px] leading-14 text-center font-bold' duration={1} filter={true} words={Heading} />
        <div className='px-0 md:px-26 lg:px-50'>
            <TextGenerateEffect className='text-base leading-snug tracking-wide text-center font-normal text-gray-300' duration={1.5} filter={true} words={para} />
        </div>
      </div>
      <Trusted />
      <Title buttonHeading='Who We Are' firstLine='Who We Are' para='True Horizon empowers organizations to operate at a higher level of intelligence designing and deploying automation systems that eliminate inefficiency, accelerate growth, and transform how teams work.' />
      <Who />
      <Title buttonHeading='Our Values' firstLine='The Principles That' secondLine='Power True Horizon Consulting' para='Our work reflects what we believe: build with intelligence, operate with integrity, and design systems that move business forward' />
      <Values />
      <Title buttonHeading='Why us' firstLine='What makes us stand' secondLine='out in the industry' para='Discover how our innovation strategies, data driven approach, and commitment to results set us apart from this competition' />
      <Us />
      <FAQ />
    </main>
  )
}

export default About
