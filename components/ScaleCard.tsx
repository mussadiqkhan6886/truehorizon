import React from 'react'
import { FiArrowUp, FiCheck, FiMessageSquare, FiSettings, FiTrendingUp } from 'react-icons/fi';

const ScaleCard = () => {
  return (
    <div className='border border-zinc-800 p-2 flex flex-col gap-2'>
      <div className='border border-zinc-800 p-1 text-white text-[11px] flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <div className='bg-zinc-800/50 p-2 text-[13px]'>
            <FiMessageSquare />
          </div>
          <div>
            <h5 className='font-[500]'>Chatbot System</h5>
            <p className='text-zinc-300 text-[10px]'>Efficiency will increase by 20%</p>
          </div>
        </div>
        <div className='border-2 pr-2 w-[18px]  h-[18px] duration-200 rounded-full border-purple-800 animate-spin bg-transparent relative'>
          <div className='bg-black w-[4px] h-[4px] -top-0.5' />
        </div>
      </div>
      <div className='border border-zinc-800 p-1 text-white text-[12px] flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <div className='bg-zinc-800/50 p-2 text-[13px]'>
            <FiSettings />
          </div>
          <div>
            <h5 className='font-[500]'>Workflow System</h5>
            <p className='text-zinc-300 text-[10px]'>Updates available</p>
          </div>
        </div>
        <div className='bg-zinc-800/40 p-1 rounded-sm grid place-content-center text-[15px]'>
          <FiArrowUp className='text-purple-700' />
        </div>
      </div>
      <div className='border border-zinc-800 p-1 text-white text-[12px] flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <div className='bg-zinc-800/50 p-2 text-[13px]'>
            <FiTrendingUp />
          </div>
          <div>
            <h5 className='font-[500]'>Sales system</h5>
            <p className='text-zinc-300 text-[10px]'>Up to date</p>
          </div>
        </div>
        <div className='text-[17px] p-1'>
          <FiCheck className='text-purple-700' />
        </div>
      </div>

    </div>
  )
}

export default ScaleCard
