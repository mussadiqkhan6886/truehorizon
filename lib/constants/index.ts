import { Variants } from "framer-motion"
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiFileChartLine } from "react-icons/ri";
import { MdSpeed, MdBuild } from "react-icons/md";
import { FiRepeat } from "react-icons/fi";

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
        delay: 0.2
      }
    }
  } as Variants

export const processData = [
  {id: 1, title: "Smart Analyzing", detail: "We audit your workflows, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation."},
  {id: 2, title: "AI Development", detail: "Our engineers design and deploy tailored AI systems—agents, automations, and data pipelines—built around."},
  {id: 3, title: "Plugin Power Up", detail: "We embed automation directly into your existing tech stack with zero disruption, ensuring everything works as one unified system."},
  {id: 4, title: "Scale That Learns With You", detail: "We monitor, refine, and evolve your automations—analyzing performance data to ensure long-term efficiency and compound growth."},
]

export const smartData = [
  {icon: HiOutlineDesktopComputer , title: "System check"},
  {icon: RiFileChartLine , title: "Process check"},
  {icon: MdSpeed , title: "Speed check"},
  {icon: MdBuild , title: "Manual work"},
  {icon: FiRepeat  , title: "Repetative task"}
]