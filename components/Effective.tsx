import React from 'react'
import Title from './Title'
import { automationTools } from '@/lib/constants'
import AutomationCard from './AutomationCard'

const Effective = () => {
  return (
    <section id='automations' className='py-10 max-w-[1320px] mx-auto text-white'>
        <Title buttonHeading='Automations' firstLine='Most Effective and cost,' secondLine="Time Reduction Automations." para='Some of the most effective and cost time reduction automations that are offered by our consultancy.' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-8 md:px-20 lg:px-28'>
            {automationTools.map((item, i) => (
                <AutomationCard key={i} {...item} />
            ))}
        </div>
    </section>
  )
}

export default Effective
