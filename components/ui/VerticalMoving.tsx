import { FiCheck, FiClipboard, FiClock, FiCrosshair, FiDollarSign, FiLoader, FiMenu, FiUsers } from "react-icons/fi";
import { InfiniteMovingCards } from "./GoingUp";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[90%] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={data}
        direction="up"
        speed="fast"
      />
    </div>
  );
}


const data = [
  {
    icon: <FiMenu />,
    subheading: "70% prepared",
    title: "Lead List",
    image: <FiLoader />
  },
  {
    icon: <FiClock />,
    subheading: "sent to selected clients",
    title: "Payment reminder",
    image: <FiCheck />,
  },
  {
    icon: <FiDollarSign />,
    subheading: "Due on 2nd july",
    title: "Payroll management",
    image: <FiClock />,
  },
  {
    icon: <FiUsers />,
    subheading: "2 days ago",
    title: "Employee Tracking",
    image: <FiCheck />,
  },
  {
    icon: <FiClipboard />,
    subheading: "Social media post",
    title: "Cancelled by user",
    image: <FiCrosshair />,
  },
  
];
