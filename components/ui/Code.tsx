"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCode = ({
  items,
  direction = "up",
  speed = "fast",
  pauseOnHover,
  className,
  images
}: {
  items?: React.ReactNode;
  direction?: "up" | "down" | "left";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  images?: string[]
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "up" ? "forwards" : direction === "left" ? "vertical" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "10s" : speed === "normal" ? "30s" : "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        `scroller relative z-20 h-[40rem] overflow-hidden 
        [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]
        `,
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex flex-col gap-3 py-4 text-[12px]",
          start && "animate-scroll-vertical",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {images ? 
          images.map((item, i) => (
            <Image key={i} src={item} alt="image" width={70} height={70} />
          ))
        : items}
      </div>
    </div>
  );
};
