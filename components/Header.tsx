'use client';

import { menu } from '@/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button'
import { FiMenu } from 'react-icons/fi'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header className='bg-black fixed animate-[slideDown_3s_ease-out_forwards] top-0 z-50 w-full py-4 border-b border-gray-700 text-white px-6 md:px-12 flex justify-between items-center relative'>
      <div>
        <h1 className='font-[800] text-[20px]'>True Horizon</h1>
      </div>
      <nav className='hidden md:flex gap-8 text-sm items-center'>
        <ul className='flex gap-8'>
            {menu.map((item, i) => (
                <li key={i}><Link href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
        <Button text='Book a call' color='purple' link='/call' />
      </nav>
      {!show && <FiMenu className='block md:hidden cursor-pointer' onClick={() => setShow(true)} />}
      {show && <p  className='block md:hidden cursor-pointer' onClick={() => setShow(false)}>X</p>}
      {show && <aside className='block md:hidden bg-black absolute top-20 pb-10 right-0 w-full'>
        <nav className='flex gap-8 flex-col text-sm items-start pl-5'>
          <ul className='flex flex-col gap-8'>
              {menu.map((item, i) => (
                  <li key={i}><Link href={item.link}>{item.title}</Link></li>
              ))}
          </ul>
          <Button text='Book a call' color='purple' link='/call' />
      </nav>
      </aside>}
    </header>
  )
}

export default Header
