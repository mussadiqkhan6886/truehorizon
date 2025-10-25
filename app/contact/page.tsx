import ContactSection from '@/components/ContactSection'
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import React from 'react'

const Contact = () => {

  const Heading = "Get in Touch with Us"
  const para = "Have questions or need AI solutions? Let us know by filling out the form, and we will be in touch!"

  return (
    <main className="pt-4 flex flex-col justify-center items-center overflow-x-hidden min-h-screen text-white bg-black">
        <div className='flex flex-col mb-10 pt-6 items-center justify-center h-[90vh] px-6 md:h-[70vh]'>
          <div className='px-2 py-1.5 border border-zinc-800 rounded-md text-md'>Contact</div>
          <TextGenerateEffect className='text-[45px] md:text-[70px] tracking-tight md:leading-[74px] leading-14 text-center font-bold' duration={1} filter={true} words={Heading} />
          <div className='px-0 md:px-26 lg:px-50'>
              <TextGenerateEffect className='text-base leading-snug tracking-wide text-center font-normal text-gray-300' duration={1.5} filter={true} words={para} />
          </div>
        </div>
        <ContactSection />
    </main>
  )
}

export default Contact
