import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

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
        <div className='flex min-h-screen flex-col gap-4'>
          <div className='border border-zinc-800 rounded-lg p-6 min-w-[310px]'>
            <div className='flex gap-2 mb-2'>
              <FaEnvelope />
              <p>E-mail</p>
            </div>
            <p>truehorizon@gmail.com</p>
          </div>
          <div className='border border-zinc-800 rounded-lg p-6 min-w-[310px]'>
            <div className='flex gap-2 mb-2 '>
              <FaPhone />
              <p>Phone</p>
            </div>
            <p>signup below</p>
          </div>
          <form className='p-3 rounded-lg mb-6 border gap-2 border-zinc-800 grid grid-cols-2'>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' placeholder='Khan' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' /></div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className="flex flex-col gap-2 col-span-2">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <div className='col-span-2 flex flex-col gap-2'>
              <label htmlFor="firstName">First Name</label>
              <input type="text" id='firstName' placeholder='Arman' className='outline-none border border-zinc-800 p-2 text-zinc-200' />
            </div>
            <button type='submit' className='bg-purple-800 py-2 mt-2 rounded-sm text-white col-span-2'>Submit Form</button>
          </form>
        </div>
    </main>
  )
}

export default Contact
