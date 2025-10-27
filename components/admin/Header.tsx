import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex py-3 px-6 justify-between text-black font-semibold text-lg tracking-tight items-center bg-gray-200">
      <div className='flex gap-4 items-center'>
        <Link className='border border-black px-5 py-1.5' href="/admin/contact">Contact</Link>
        <Link className='border border-black px-5 py-1.5' href="/admin/booking">Booking</Link>
      </div>
      <div>
        <Link className='border border-black px-5 py-1.5' href="/" >Home</Link>
      </div>
    </header>
  )
}

export default Header
