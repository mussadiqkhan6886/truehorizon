import React from 'react'
import Title from './Title'
import { processData } from '@/lib/constants'
import ProcessCard from './ProcessCard'

const Process = () => {
  return (
    <section className='py-10 text-white'>
      <Title buttonHeading='Our Process' firstLine='Our Simple, Smart,' secondLine='and Scalable Process' para='We design, develop, and implement automation tools that help you work smarter, not harder' />
      <div className='grid grid-cols-1 [@media(min-width:840px)]:grid-cols-2 gap-5  max-w-xl md:max-w-4xl place-content-center mx-auto'>
        {processData.map(item => (
          <ProcessCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Process
