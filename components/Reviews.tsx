import React from 'react'
import Title from './Title'
import { testimonials } from '@/lib/constants'
import { FiStar } from 'react-icons/fi';
import Image from 'next/image';

const Reviews = () => {

    
    const makeStars = (times: number) => {
        const stars: React.ReactNode[] = [];
        for(let i = 0; i < times; i++){
            stars.push(<FiStar key={i} />)
        }

        return stars
    }

  return (
     <section className='py-10 text-white'>
      <Title buttonHeading='Testimonials' firstLine='Why Businesses Love' secondLine="Our AI Solutions" para='Real businesses, real results with AI automation.' />
      <div className='grid grid-cols-2 max-w-5xl mx-auto gap-8 mt-16'>
        {testimonials.map((review, i) => (
            <div key={i} className='border relative flex flex-col gap-5 border-zinc-800 rounded-md p-6 overflow-hidden'>
                <div className='flex text-xl'>{makeStars(review.rating)}</div>
                <p className="z-10 text-zinc-300">&quot; {review.quote} &quot;</p>
                <div className="z-10 flex gap-3">
                    <div className='z-10'>
                        <Image src={"/9896174.jpg"} className='w-full h-full object-cover object-center' alt='image review' width={60} height={60} />
                    </div>
                    <div>
                        <p>{review.name}</p>
                        <p className='text-sm text-zinc-300'>{review.title}</p>
                    </div>
                </div>
                <div className="absolute inset-0 -right-[200px] -bottom-[20px] opacity-75  bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_50%)] blur-2xl" />
            </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
