import React from 'react'
import { servicesData } from '@/lib/constants';
import Card from './Card';

const Offers = () => {
  return (
    <section className='bg-white text-black p-16'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
            <div className='w-2.5 mb-1 h-2.5 bg-fuchsia-800 rounded-full' />
            <p className='text-[12px] sm:text-sm text-zinc-700 font-semibold'>OUR SERVICES</p>
        </div>
        <h3 className='text-4xl w-[50%]'>
            A service offering designed to meet your every need
        </h3>
      </div>
      <section className="flex flex-col mt-10">
          {servicesData.map((service) => (
            <Card key={service.id} {...service} />
          ))}
    </section>
    </section>
  )
}

export default Offers
