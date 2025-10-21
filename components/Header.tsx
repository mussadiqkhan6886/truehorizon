import { menu } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-black py-4 border-b border-gray-700 text-white px-12 flex justify-between items-center'>
      <div>
        <h1 className='font-[800] text-[20px]'>True Horizon</h1>
      </div>
      <nav className='hidden md:flex gap-8 text-sm items-center'>
        <ul className='flex gap-8'>
            {menu.map((item, i) => (
                <li key={i}><Link href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
        <div  
            className="bg-purple-700 overflow-hidden h-[35px] w-[95px] flex items-center justify-center rounded-md font-semibold group"
        >
            <Link  href="/call"  className='overflow-hidden relative h-[20px] w-full  flex items-center justify-center'>
                <span
                    className="absolute transition-all duration-400 ease-in-out group-hover:-translate-y-full"
                >
                    Book a call
                </span>

                <span
                    className="absolute translate-y-full transition-all duration-400 ease-in-out group-hover:translate-y-0"
                >
                    Book a call
                </span>
            </Link>
        </div>

      </nav>
    </header>
  )
}

export default Header
