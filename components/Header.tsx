'use client';

import { menu } from '@/lib/constants'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Button from './Button'
import { FiMenu } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <header className='bg-black fixed top-0 z-50 w-full py-4 border-b border-gray-700/40 text-white px-6 md:px-12 flex justify-between items-center '>
      
      {/* Logo */}
      <div className='animate-[slideDown_3s_ease-out_forwards]'>
        <h1 className='font-[800] text-[20px]'>True Horizon</h1>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden md:flex gap-8 text-sm items-center animate-[slideDown_3s_ease-out_forwards]'>
        <ul className='flex gap-8'>
          {menu.map((item, i) => (
            <li key={i}><Link href={item.link}>{item.title}</Link></li>
          ))}
        </ul>
        <Button text='Book a call' color='purple' link='/call' />
      </nav>

      {/* Mobile Menu Icon */}
      <div className='md:hidden animate-[slideDown_3s_ease-out_forwards]'>
        {!show ? (
          <FiMenu
            className='cursor-pointer text-xl'
            onClick={() => setShow(true)}
          />
        ) : (
          <FiX
            className='cursor-pointer text-xl'
            onClick={() => setShow(false)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {show && (
        <aside className='md:hidden bg-black absolute top-20 left-0 w-full pb-10 border-t border-gray-700/40 animate-[slideDown_0.5s_ease-out_forwards]'>
          <nav className='flex flex-col gap-8 text-sm items-start pl-5'>
            <ul className='flex flex-col gap-6'>
              {menu.map((item, i) => (
                <li key={i}>
                  <Link href={item.link} onClick={() => setShow(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Button text='Book a call' color='purple' link='/call' />
          </nav>
        </aside>
      )}
    </header>
  )
}

export default Header
