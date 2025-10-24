import Link from 'next/link'
import React from 'react'

const Button = ({text, color, icon, link}: {text: string, color: string, icon?: React.ReactNode, link: string}) => {
  return (
    <div  
        className={`${color == "gray" ? "border border-gray-500 bg-black" : "bg-purple-700"} ${icon && "w-[130px]"} overflow-hidden h-[35px] w-[120px] flex items-center justify-center rounded-md font-semibold group text-sm`}
    >
        <Link  href={link}  className='overflow-hidden relative h-[20px] w-full  flex items-center justify-center'>
            <span
                className="absolute transition-all duration-400 ease-in-out group-hover:-translate-y-full"
            >
                {text} {' '} {icon}
            </span>

            <span
                className="absolute translate-y-full transition-all duration-400 ease-in-out group-hover:translate-y-0"
            >
                {text} {' '} {icon}
            </span>
        </Link>
    </div>
  )
}

export default Button
