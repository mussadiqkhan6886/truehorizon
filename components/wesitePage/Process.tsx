import { processSteps } from '@/lib/constants'
import React from 'react'
import Button from '../Button'
import { FiArrowDown, FiArrowDownCircle } from 'react-icons/fi'

const Process = () => {
  return (
    <section className='bg-zinc-950 text-white p-10 max-w-[1300px] mx-auto flex flex-col items-center justify-center gap-10'>
      <h4 className='text-4xl font-semibold text-center'>What happens when you contact us about your website</h4>
      <FiArrowDownCircle className='text-4xl' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
        {processSteps.map(item => (
            <div key={item.id} className='flex flex-col items-center border border-zinc-800 rounded-lg p-3'>
                <h5 className='text-lg font-semibold mb-3'>{item.title}</h5>
                <p className='text-zinc-200 text-sm text-center'>{item.description}</p>
            </div>
        ))}
      </div>
      <Button text='Get Your Website' link='/call' color='purple' />
    </section>
  )
}

export default Process
