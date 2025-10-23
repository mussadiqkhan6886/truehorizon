import React from 'react'
import SmartCard from './SmartCard';
import AiCard from './AiCard';
import PlugCard from './PlugCard';
import ScaleCard from './ScaleCard';

const ProcessCard = ({id, title, detail}: {id: number, title: string, detail: string}) => {

  let card;

  if(title.toLowerCase().includes("smart")){
    card = <SmartCard />
  }else if(title.toLowerCase().includes("ai")){
    card = <AiCard />
  }else if(title.toLowerCase().includes("plug")){
    card = <PlugCard />
  }else if(title.toLowerCase().includes("scale")){
    card = <ScaleCard />
  }else {
    card = ''
  }

  return (
    <div className='bg-zinc-900/40 flex flex-col justify-start items-start rounded-xl border border-zinc-800 p-[27px]'>
      <div className='text-[12px] border border-zinc-800 px-1.5 rounded-sm py-0.5'>Step {id}</div>
      <div>
        <h4 className='text-[22px] font-semibold mb-2.5 mt-1.5'>{title}</h4>
        <p className='text-zinc-300 text-[15px]'>{detail}</p>
      </div>
      <div className='mt-6.5 px-3 w-full'>
        {card}
      </div>
    </div>
  )
}

export default ProcessCard
