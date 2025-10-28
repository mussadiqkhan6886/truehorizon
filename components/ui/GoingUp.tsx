"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    icon: React.ReactNode;
    image: React.ReactNode;
    title: string;
    subheading: string
  }[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        // remove if
        if(scrollerRef.current){
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "up" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "30s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-[40rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col gap-3 py-4",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.title}
            className="relative w-[300px] justify-between items-center flex max-w-full shrink-0 rounded-sm border p-1 border-zinc-800 "
          >
            <div className="flex items-center gap-2">
                <div className="w-[24px] grid place-content-center h-[24px] rounded-sm bg-zinc-800/40">
                  {item.icon}
                </div>
                <div className="flex-col flex">
                    <span className="relative z-20 text-[12px] text-white">
                        {item.title}
                    </span>
                    <span className="text-[11px] text-gray-400">
                        {item.subheading}
                    </span>
                </div>
            </div>
            <div className="w-[24px] grid place-content-center text-purple-800 border border-zinc-700 text-sm h-[24px] bg-zinc-800/30 rounded-md">
              {item.image}
            </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};
