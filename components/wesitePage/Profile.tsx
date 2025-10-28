import React from 'react'
import { TextGenerateEffect } from '../ui/TextGenerateEffect'

const Profile = () => {
  return (
    <section 
  className='bg-zinc-950 min-h-screen text-white p-16 [clip-path:polygon(50%_0%,100%_0,100%_35%,100%_91%,84%_98%,43%_100%,6%_97%,0_88%,0%_35%,0_0)]'
>
  <div className='max-w-[910px]  flex flex-col gap-16 mx-auto'>
    <div className=''>
      <h2 className='text-[35px] md:text-[45px] tracking-tight font-[500] leading-10 md:leading-15'>
        We accelerate ambition, grow brands, build digital products, and craft experiences that bring positive change, value, and innovation.
      </h2>
    </div>

    <div className=' rounded-b-4xl flex gap-5 md:gap-13 justify-between items-start'>
      <div className='flex gap-3 items-center'>
        <div className='w-2.5 mb-1 h-2.5 bg-fuchsia-800 rounded-full' />
        <p className='text-[12px] sm:text-sm text-zinc-300'>COMPANY PROFILE</p>
      </div>

      <div className='max-w-xl mx-auto pl-5'>
        <TextGenerateEffect
          className='text-sm leading-snug tracking-wide font-[300] text-zinc-300'
          duration={1.3}
          filter={true}
          words={
            "We are a team of professional designers, developers, marketers and IT specialists combining our knowledge and expertise to create exceptional outcomes tailored to your business’s needs and requirements."
          }
        />
        <br />
        <TextGenerateEffect
          className='text-sm leading-snug tracking-wide font-[300] text-zinc-300'
          duration={1.4}
          filter={true}
          words={
            "With one of the largest ranges of services under one roof in the UK, we are your trusted partner for all things digital. Tell us about your goals and we’ll show you how we can achieve them. Whatever your project, we’d love to be involved."
          }
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Profile
