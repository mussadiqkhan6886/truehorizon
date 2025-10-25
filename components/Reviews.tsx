'use client';

import React from 'react'
import Title from './Title'
import { testimonials, variants2 } from '@/lib/constants'
import { FiStar } from 'react-icons/fi';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <motion.div variants={variants2(0.2)} initial="hidden" whileInView={"show"} className='grid sm:px-10  md:grid-cols-2 max-w-5xl mx-auto gap-8 mt-16'>
        {testimonials.map((review, i) => (
            <div  key={i} className='border relative flex flex-col gap-5 border-zinc-800 rounded-md p-6 overflow-hidden'>
                <div className='flex text-xl'>{makeStars(review.rating)}</div>
                <p className="z-10 text-sm sm:text-base text-zinc-300">&quot; {review.quote} &quot;</p>
                <div className="z-10 flex gap-3">
                    <div className='z-10'>
                        {review.image ? <Image src={review.image} alt='image' className='w-full h-full object-cover object-center rounded-full' width={40} height={40} /> : <Image src={"/9896174.jpg"} className='w-full h-full object-cover object-center rounded-full' alt='image review' width={40} height={40} />}
                    </div>
                    <div>
                        <p>{review.name}</p>
                        <p className='text-[11px] mt-1 text-zinc-300'>{review.title}</p>
                    </div>
                </div>
                <div className="absolute inset-0 -right-[380px] -bottom-[20px] opacity-50  bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_50%)] backdrop-blur-2xl" />
            </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Reviews
