import { smartData } from '@/lib/constants'
import React from 'react'

const SmartCard = () => {
  return (
    <div className='flex gap-2'>
      <div className='border border-zinc-800 px-2 w-[180px] flex justify-center items-center flex-col gap-4 h-[160px]'>
        <div className="relative border [animation:spin_3s_linear_infinite] border-zinc-800 rounded-full flex items-center justify-center  w-25 h-25 overflow-hidden">
            <div className="absolute w-2/3 h-2/3 rounded-full border border-zinc-800/20" />
            <div className="absolute w-1/3 h-1/3 rounded-full border border-zinc-800/20" />

            {/* Rotating scanning line */}
            <div
                className="absolute  w-[120px] h-[53px]
                    [clip-path:polygon(50%_0%,33%_100%,71%_100%)]
                    bg-gradient-to-r from-purple-700 via-purple-500/60 to-0% bottom-0 blur-[2px]"
            />
        </div>
        <h5 className='text-[11px] font-semibold'>Analyze current workflow..</h5>
      </div>
      <div className='border flex-1 w-full gap-3 border-zinc-800 px-1 py-2'>
        {smartData.map((item, i) => (
            <div key={i} className='text-[12px] items-center mb-1 flex p-0.5 px-1.5 gap-1.5 border border-zinc-800'>
                {<item.icon />}
                <div className='text-zinc-300 font-[500]'>{item.title}</div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default SmartCard
