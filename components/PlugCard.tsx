import React from 'react'
import {ORB} from './ORB'
import SwiperImages from './SwiperImages'

const PlugCard = () => {
  return (
    <div className='border h-[170px] border-zinc-800 flex items-center justify-center'>
      <div className='flex '>
        <div className='h-full'>
          <div className='w-[70px] h-full border rounded-lg flex items-center justify-center border-zinc-800 px-2 py-1'>
            <ORB
                smaller={true}
                hoverIntensity={0.13}
                rotateOnHover={true}
                hue={313}
                forceHoverState={false}
                s={30}
            />
          </div>
          <p className='text-[10px] mt-1 text-center'>Our Solution</p>
        </div>
        <div className='flex flex-col items-center overflow-hidden justify-center mb-4 gap-4'>
          <div className='w-[100px] relative h-[1px] bg-zinc-700/70 ' >
            <div className='w-[20px] moveAnimate delay-100 top-0 left-10 h-[1px] bg-gradient-to-l rounded-full from-purple-400 to-purple-900 absolute ' />
          </div>
          <div className='w-[100px] relative h-[1px] bg-zinc-700/70 ' >
            <div className='w-[20px] moveAnimate top-0 left-10 h-[1px] bg-gradient-to-l rounded-full from-purple-400 to-purple-900 absolute ' />
          </div>
          <div className='w-[100px] relative h-[1px] bg-zinc-700/70 ' >
            <div className='w-[20px] moveAnimate top-0 left-10 h-[1px] bg-gradient-to-l rounded-full from-purple-400 to-purple-900 absolute ' />
          </div>
        </div>
        <div>
          <div className='border overflow-hidden h-[70px] w-[70px] rounded-lg border-zinc-800 p-2'>
            <SwiperImages />
          </div>
          <p className='text-[10px] mt-1 text-center'>Your stack</p>
        </div>
      </div>
    </div>
  )
}

export default PlugCard
