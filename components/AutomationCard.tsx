import React from 'react'
import { IconType } from 'react-icons/lib'

const AutomationCard = ({title, icon, description}: {title: string, icon: IconType, description: string}) => {
  return (
    <div className='border relative overflow-hidden border-zinc-800 rounded-md p-4'>
        <div className="bg-purple-900 blur-3xl opacity-60 w-[140px] h-[130px] -top-[120px] -left-[50px] absolute" />
      <div className='flex gap-2 z-10 items-center'>
        {/* <icon className="z-10" /> */}
        <div className='z-10 text-lg md:text-xl font-semibold'>{title}</div>
      </div>
      <p className='text-zinc-300 text-sm z-10 mt-4'>{description}</p>
    </div>
  )
}

export default AutomationCard
