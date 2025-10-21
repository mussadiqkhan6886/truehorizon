import React from 'react'
import Orb from './ORB'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import Button from './Button';
import {FiArrowRight} from "react-icons/fi"
import Galaxy from './Stars';

const Hero = () => {
    const Heading = `True Horizon That Builds, Not Just Advises.`;
    const para = `We don’t hand you a strategy deck. We implement real AI systems—agents, automations, and dashboards that move the needle.`
  return (
    <section className='' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
            hoverIntensity={0.13}
            rotateOnHover={true}
            hue={313}
            forceHoverState={false}
        />
        {/* <div style={{ width: '100%', height: '500px', position: 'absolute' }}>
        <Galaxy 
            mouseRepulsion={false}
            mouseInteraction={false}
            density={0.2}
            glowIntensity={0.1}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.1}
            starSpeed={0.2}
        />
        </div> */}
        
        <div className='z-50 px-[160px] flex flex-col text-white items-center justify-center min-h-screen'>
            <div className='flex items-center justify-center gap-3 font-[500] p-0.5 rounded-2xl'>
                <div className='bg-purple-700 z-50 rounded-xl px-2'>New</div>
                <div className='pr-2 text-sm overflow-hidden whitespace-nowrap animate-[show_5s_ease-out_forwards]'>Automated Voice Agent X Dashboard</div>
            </div>
            <TextGenerateEffect className='text-[70px] tracking-tight leading-[74px] text-center font-bold' duration={1} filter={true} words={Heading} />
            <div className='px-50'>
                <TextGenerateEffect className='text-base leading-snug tracking-wide text-center font-normal text-gray-300' duration={1.5} filter={true} words={para} />
            </div>
            <div className='flex z-50 gap-7 mt-5'>
                <Button text='Get in touch' color='purple' icon={<FiArrowRight className='inline' />} link='/call' />
                <Button text='View Services' color='gray' link='#services' />
            </div>
        </div>
    </section>
  )
}

export default Hero
