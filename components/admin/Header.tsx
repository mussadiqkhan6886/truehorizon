import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex p-3 px-6 justify-between items-center bg-gray-200">
      <div className='flex gap-2 items-center'>
        <Link href="/admin/contact" />
        <Link href="/admin/booking" />
      </div>
      <div>
        <Link href="/" />
      </div>
    </header>
  )
}

export default Header
