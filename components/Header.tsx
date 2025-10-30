'use client';

import { menu } from '@/lib/constants'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { FiMenu } from 'react-icons/fi'
import { FiX } from 'react-icons/fi'

const Header = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth >= 768){
        setShow(false)
      }
    })

    return window.removeEventListener("resize", () => {
      if(window.innerWidth >= 768){
        setShow(false)
      }
    })
  }, [window.innerWidth])

  return (
    <header className='bg-black fixed top-0 z-50 w-full py-4 border-b border-gray-700/40 text-white px-6 md:px-12'>
      <div className="bg-black animate-[slideDown_3s_ease-out_forwards] flex justify-between items-center ">
      <div className=''>
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

      <div className='block md:hidden'>
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
      </div>
    </header>
  )
}

export default Header
