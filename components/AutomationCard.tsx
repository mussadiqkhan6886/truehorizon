import React from 'react'

const AutomationCard = ({heading, icon, para}: {heading: string, icon: string, para: string}) => {
  return (
    <div className='border relative overflow-hidden border-zinc-800 rounded-md p-4'>
        <div className="bg-purple-900 blur-3xl opacity-60 w-[140px] h-[130px] -top-[120px] -left-[50px] absolute" />
      <div className='flex gap-2 z-10 items-center'>
        <div className='z-10'>{icon}</div>
        <div className='z-10 text-lg md:text-xl font-semibold'>{heading}</div>
      </div>
      <p className='text-zinc-300 text-sm z-10 mt-4'>{para}</p>
    </div>
  )
}

export default AutomationCard
