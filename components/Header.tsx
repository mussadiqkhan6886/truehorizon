import { menu } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='bg-black fixed animate-[slideDown_3s_ease-out_forwards] top-0 z-50 w-full py-4 border-b border-gray-700 text-white px-12 flex justify-between items-center'>
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
    </header>
  )
}

export default Header
