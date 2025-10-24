import { Variants } from "framer-motion"
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiFileChartLine } from "react-icons/ri";
import { MdSpeed, MdBuild } from "react-icons/md";
import { FiBriefcase, FiRepeat, FiZap } from "react-icons/fi";
import { FiTrendingUp, FiCpu,
  FiShield, } from "react-icons/fi";
import {
  FiBarChart2,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";
import {FaCrown, FaRocket} from "react-icons/fa6"

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


export const aiBenefitsData = [
  {
    title: "Increased Productivity",
    detail:
      "Gain actionable insights with AI-driven analytics to improve decision-making and strategy.",
    icon: FiBarChart2,
  },
  {
    title: "Better Customer Experience",
    detail:
      "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    icon: FiUsers,
  },
  {
    title: "24/7 Availability",
    detail:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    icon: FiClock,
  },
  {
    title: "Cost Reduction",
    detail:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    icon: FiDollarSign,
  },
  {
    title: "Data-Driven Insights",
    detail:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    icon: FiTrendingUp,
  },
  {
    title: "Scalability & Growth",
    detail:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    icon: FiLayers,
  },
];



export const pricingData = [
  {
    title: "Starter",
    badge: null,
    price: "Request for pricing",
    description: "Perfect for small businesses starting with AI automation.",
    ctaText: "Schedule a call",
    icon: FaRocket,
    features: [
      "Basic workflow automation",
      "AI-powered personal assistant",
      "Standard analytics & reporting",
      "Email & chat support",
      "Up to 3 AI integrations",
    ],
  },
  {
    title: "Professional",
    badge: "Popular",
    price: "Request for pricing",
    description: "Perfect for small businesses starting with AI automation.",
    ctaText: "Schedule a call",
    icon: FiZap,
    features: [
      "Advanced workflow automation",
      "AI-driven sales & marketing tools",
      "Enhanced data analytics & insights",
      "Priority customer support",
      "Up to 10 AI integrations",
    ],
  },
  {
    title: "Enterprise",
    badge: null,
    price: "Custom",
    description: "Perfect for small businesses starting with AI automation.",
    ctaText: "Schedule a call",
    icon: FaCrown,
    features: [
      "Fully customizable AI automation",
      "Dedicated AI business consultant",
      "Enterprise-grade compliance",
      "24/7 VIP support",
      "Unlimited AI integrations",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
    name: "James Carter",
    title: "CEO at TechFlow Solutions",
    rating: 5,
    image: ""
  },
  {
    quote:
      "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
    name: "Sophia Martinez",
    title: "Operations Manager at NexaCorp",
    rating: 4,
    image: ""
  },
  {
    quote:
      "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
    name: "David Reynolds",
    title: "Head of Sales at GrowthPeak",
    rating: 5,
    image: ""
  },
  {
    quote:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract.",
    name: "Emily Wong",
    title: "Customer Success Lead at SupportHive",
    rating: 5,
    image: ""
  },
];
