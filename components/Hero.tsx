import React from 'react'
import Orb from './ORB'

const Hero = () => {
  return (
    <section className='bg-black' style={{ width: '100%', height: '600px', position: 'relative' }}>
        <Orb
            hoverIntensity={0.13}
            rotateOnHover={true}
            hue={313}
            forceHoverState={false}
        />
        <div className='bg-black flex text-white items-center justify-center min-h-screen'>
            <div className='flex items-center justify-center gap-3 font-[500] p-0.5 rounded-2xl'>
                <div className='bg-purple-700 rounded-xl px-2'>New</div>
                <div className='pr-2 overflow-hidden whitespace-nowrap animate-[show_5s_ease-out_forwards]'>Automated Voice Agent X Dashboard</div>
            </div>
        </div>
    </section>
  )
}

export default Hero
