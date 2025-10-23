import React from 'react'
import { FiArrowLeft, FiArrowRight, FiFile, FiMinus, FiSearch, FiSettings, FiSquare } from 'react-icons/fi'

const AiCard = () => {
  return (
    <div className='relative h-[159px] border border-gray-800'>
      <div className='bg-zinc-900 w-full flex justify-between items-center px-1 h-[26px]'>
        <div className='flex text-[9px] gap-2'>
            <FiArrowLeft />
            <FiArrowRight />
        </div>
        <div className='bg-zinc-800 w-[100px] h-[10px] rounded-xl'>

        </div>
        <div className='flex pr-1 items-center gap-2 text-[9px] text-zinc-300'>
            <FiSquare />
            <FiMinus />
            <span>X</span>
        </div>
      </div>
      <div className='bg-zinc-900 w-[26px] h-[134px] left-0 bottom-0 absolute'>
        <div className='text-white/80 flex gap-3 items-center flex-col pt-3'>
            <FiFile />
            <FiSearch />
            <FiSettings />
        </div>
      </div>
      <div className='bg-black'></div>

    </div>
  )
}

export default AiCard
