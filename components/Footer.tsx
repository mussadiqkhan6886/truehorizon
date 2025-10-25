import { footerLinks } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black border-t relative overflow-hidden  text-white border-zinc-800'>
        <div className="absolute -top-[10px] -left-[10px] right-0 bottom-[280px] opacity-40 rounded-full  bg-[radial-gradient(circle_at_bottom,_#6A1B9A_0%,_transparent_60%)] h-[140px] blur-2xl rotate-180" />
      <div className='flex flex-col md:flex-row w-full z-10 justify-between p-[10px] sm:p-[70px] gap-10 '>
        <div className='w-[300px]'>
            <h6 className='mb-3 text-3xl font-bold'>True Horizon</h6>
            <p className='text-zinc-300 font-semibold mb-3'>We ship production systems—fast. Automations and agents tailored to your stack, measured against real KPIs.</p>
            <p className='mb-2 font-semibold text-lg'>Join our newsletter</p>
            <div className='border border-zinc-800 py-0.5 px-0.5 flex items-center rounded-md'>
                <input placeholder='name@gmail.com' className='outline-none px-2' type="text" />
                <button className='bg-purple-700 rounded-sm px-4 py-1.5 font-semibold'>Subscribe</button>
            </div>
        </div>
        <div className='flex md:w-[50%] z-10 justify-between'>
            {footerLinks.map((item, i) => (
                <div key={i} className='w-full'>
                    <p className='text-[18px] font-[500] text-white mb-1.5'>{item.title}</p>
                    <ul>
                        {item.items.map((footerItem, j) => (
                            <li className='text-[15px] hover:text-white text-zinc-300 mb-1' key={j}><Link href={footerItem.link}>{footerItem.name}</Link></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      <div className='border flex-col md:flex-row border-zinc-800 justify-center items-center gap-1 md:justify-between flex px-1 sm:px-8 text-[12px] md:text-sm py-5'>
        <p className='text-zinc-300'>True Horizon</p>
        <p>Start small, build systems for scale</p>
        <p className='text-zinc-300'>&copy; True Horizon</p>
      </div>
    </footer>
  )
}

export default Footer
