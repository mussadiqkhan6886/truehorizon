import { Variants } from "framer-motion"

export const menu = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Call", link: "/call"},
    {title: "Contact", link: "/contact"},
]

export const variants = {
    hidden: {
      opacity: 0,
      y: 100, 
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.5s animation speed
        delay: 0.5
      }
    }
  } as Variants