import { Variants } from "framer-motion"
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiFileChartLine } from "react-icons/ri";
import { MdSpeed, MdBuild } from "react-icons/md";
import { FiTrendingUp, FiRepeat, FiZap, FiCheck } from "react-icons/fi";
import {
  FiBarChart2,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiLayers,
} from "react-icons/fi";
import {FaCrown, FaHandshakeSimple, FaLightbulb, FaRocket, FaUsers} from "react-icons/fa6"
import {FaTimes} from "react-icons/fa"

export const menu = [
    {title: "Home", link: "/"},
    {title: "About", link: "/about"},
    {title: "Development", link: "/website-build"},
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
        delay: 0.
      },

    }
  } as Variants

export const variants2 = (delay: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

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
    delay: 0.1
  },
  {
    title: "Better Customer Experience",
    detail:
      "Personalized AI interactions improve response times, customer engagement, and overall satisfaction.",
    icon: FiUsers,
    delay: 0.2
  },
  {
    title: "24/7 Availability",
    detail:
      "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime.",
    icon: FiClock,
    delay: 0.3
  },
  {
    title: "Cost Reduction",
    detail:
      "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability.",
    icon: FiDollarSign,
    delay: 0.4
  },
  {
    title: "Data-Driven Insights",
    detail:
      "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions.",
    icon: FiTrendingUp,
    delay: 0.5
  },
  {
    title: "Scalability & Growth",
    detail:
      "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs.",
    icon: FiLayers,
    delay: 0.6
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
    delay: 0.1,
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
    delay: 0.2,
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
    delay: 0.3,
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
export const faqs = [
  {
    position: 660,
    question: "How can AI automation help my business?",
    answer:
      "AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.",
  },
  {
    position: 560,
    question: "Is AI automation difficult to integrate?",
    answer:
      "No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.",
  },
  {
    position: 360,
    question: "What industries can benefit from AI automation?",
    answer:
      "AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.",
  },
  {
    position: 260,
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.",
  },
  {
    position: 160,
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.",
  },
];


export const footerLinks = [
  {
    title: "Links",
    items: [
      { name: "Services", link: "#services" },
      { name: "Process", link: "#process" },
      { name: "Case studies", link: "#case-studies" },
      { name: "Benefits", link: "#benefits" },
      { name: "Pricing", link: "#pricing" },
    ],
  },
  {
    title: "Pages",
    items: [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Development", link: "/website-build" },
      { name: "404", link: "/not-found" },
    ],
  },
  {
    title: "Socials",
    items: [
      { name: "Instagram", link: "https://instagram.com" },
      { name: "Facebook", link: "https://facebook.com" },
      { name: "Linkedin", link: "https://linkedin.com" },
      { name: "Twitter", link: "https://twitter.com" },
    ],
  },
];

export const about = [
  {icon: FiBarChart2, delay: 0.2, title: "50+ Businesses", para: "Companies have streamlined their workflows with True Horizon AI solutions"},
  {icon: FiClock, delay: 0.3, title: "1M+ Hours", para: "Reducing manual work and boosting productivity through automation"},
  {icon: FiZap, delay: 0.4, title: "95% Faster", para: "Clients see improved efficiency within the first three months of usage"},
]

export const valuesAbout = [
  {icon: FaLightbulb, delay: 0.2, title: "Driving Innovation Forward", para: "We embrace cutting-edge AI to create smarter, more efficient automation solutions."},
  {icon: FaHandshakeSimple, delay: 0.3, title: "Committed to Integrity & Trust", para: "Trust and transparency are at the core of everything we do for our clients."},
  {icon: FaRocket, delay: 0.4, title: "Empowering Business Growth", para: "We help businesses scale faster with AI-driven efficiency, reducing manual tasks and unlocking new opportunities."},
  {icon: FaUsers, delay: 0.5, title: "Putting Customers First", para: "Your success is our priority we build solutions that truly make an impact."},
]

export const whyUs = [
  {heading: "Manual Work", icon: FaTimes, list: ["Prone to Human Errors", "Limited by Work Hours", "High Labor Costs & Overhead", "Slow & Time-Consuming Tasks", "Disconnected & Repetitive Work", "Inconsistent & Dependent on Workforce"]},
  {heading: "Our True Horizon", icon: FiCheck, list: ["Prone to Human Errors", "Limited by Work Hours", "High Labor Costs & Overhead", "Slow & Time-Consuming Tasks", "Disconnected & Repetitive Work", "Inconsistent & Dependent on Workforce"]}
  
]


export const automationTools = [
  {
    title: "Gmail Outreach Bot",
    description:
      "Automate your cold outreach, sending out 50–1000 emails per day without manual effort.",
  },
  {
    title: "Voice Call Agent",
    description:
      "This AI-powered inbound voice agent answers calls, books appointments, answers FAQs, and follows up without needing a human on the line.",
  },
  {
    title: "AI Appointment Setter",
    description:
      "Automatically qualify inbound leads via IG DMs and get them to book an appointment if they’re qualified for your service or product.",
  },
  {
    title: "Appointment Booking with FAQ Chatbot",
    description:
      "A fully automated AI chatbot that answers customer questions and books appointments on your calendar without human involvement.",
  },
  {
    title: "YouTube Viral Video Idea Generator",
    description:
      "This plug-and-play n8n automation analyzes top-performing YouTube videos in your niche and gives you new content ideas with real data: titles, keywords, and angles your audience is searching for.",
  },
  {
    title: "AI Content Creation Agent (Veo 3 + n8n)",
    description:
      "Effortlessly create and post short-form videos on autopilot to all your social platforms using advanced AI automation.",
  },
];

export const servicesData = [
  {
    id: 1,
    category: "Development",
    services: ["Custom Websites", "Web Apps", "Landing Pages"],
    description:
      "We build fast, scalable, and secure websites tailored to your business goals — from custom-coded sites to dynamic web applications and high-converting landing pages.",
    image: "/development.jpg", // use your own asset path or icon
  },
  {
    id: 2,
    category: "Design",
    services: ["UI/UX", "Redesign", "Responsive Design"],
    description:
      "Our design team crafts intuitive and modern interfaces that captivate users. We focus on user experience, aesthetics, and fully responsive layouts for every device.",
    image: "/design.jpg",
  },
  {
    id: 3,
    category: "eCommerce",
    services: ["Online Stores", "Payments", "Inventory Systems"],
    description:
      "Launch your online store with smooth checkout flows, secure payment gateways, and easy inventory management — everything you need to grow your business online.",
    image: "/ecommerce.jpg",
  },
  {
    id: 4,
    category: "Optimization",
    services: ["SEO", "Speed", "Accessibility", "Maintenance"],
    description:
      "Boost your website’s performance, visibility, and usability. We optimize speed, SEO structure, accessibility, and provide ongoing support for seamless operation.",
    image: "/seo.jpg",
  },
  {
    id: 5,
    category: "Branding",
    services: ["Logo", "Content", "Analytics", "Social Integration"],
    description:
      "Build a memorable digital identity. From logo design to SEO-friendly content and integrated analytics — we help your brand stand out and stay consistent online.",
    image: "/marketing.jpg",
  },
];


export const processSteps = [
  {
    id: 1,
    title: "Meeting",
    description:
      "We start with a detailed chat  in person, on Zoom, or by phone to understand your goals and vision for the perfect website.",
  },
  {
    id: 2,
    title: "Pay Deposit",
    description:
      "After defining the project scope and cost, we take a 50% deposit and gather all the information and assets needed to begin.",
  },
  {
    id: 3,
    title: "Website is Built",
    description:
      "We assist you in setting up domain names, hosting, and email then begin crafting your beautiful, fully functional website.",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Every page and feature is thoroughly tested for performance, responsiveness, and usability to ensure everything works flawlessly.",
  },
  {
    id: 5,
    title: "Delivery",
    description:
      "The big reveal! We present your finished website, apply any final adjustments, and request the remaining balance before launch.",
  },
];