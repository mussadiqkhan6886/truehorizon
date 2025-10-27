import React from 'react'
import Galaxy from '../Stars'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'
import Button from '../Button'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  return (
    <section  className='min-h-[90vh] pt-4 sm:pt-0 relative' >
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Galaxy
            mouseRepulsion={false}
            mouseInteraction={false}
            density={0.3}
            glowIntensity={0.1}
            saturation={0}
            hueShift={140}
            twinkleIntensity={0.1}
            starSpeed={0.2}
        />
      </div>
        <div className='z-20 h-[80vh] sm:px-[35px] md:px-[70px] lg:px-[160px] flex flex-col text-white items-center justify-center'>
            <TextGenerateEffect className='text-[45px] md:text-[70px] tracking-tight md:leading-[74px] leading-14 text-center font-bold' duration={1} filter={true} words={"Build Fast Scalable and Professional Website"} />
            <div className='px-0 md:px-26 lg:px-50'>
                <TextGenerateEffect className='text-base leading-snug tracking-wide text-center font-normal text-gray-300' duration={1.3} filter={true} words={"We don't offer simple website, We provide full modern design website with faster service"} />
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
