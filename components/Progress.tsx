"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ProgressDots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = ["Draft", "Schedule", "Sent"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % data.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center items-center px-3 opacity-60">
      <div className="relative mb-6 flex items-center justify-between w-full ">
        {data.map((item, i) => (
          <React.Fragment key={i}>
            {/* Connecting line (except last) */}
            {i < data.length - 1 && (
              <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width:
                      activeIndex >= i
                        ? activeIndex === i
                          ? "50%"
                          : "100%"
                        : "0%",
                    backgroundColor:
                      activeIndex >= i ? "#a855f7" : "#d1d5db",
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="h-[1px] origin-left absolute left-0 top-0"
                />
              </div>
            )}

            {/* Dot + Label */}
            <div className="flex flex-col items-center justify-center relative z-10">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor:
                    activeIndex >= i ? "#a855f7" : "#d1d5db",
                  scale: activeIndex === i ? 1.4 : 1,
                }}
                transition={{ duration: 0.4 }}
                className="w-2 h-2 rounded-full"
              />
              <p
                className={`text-xs text-zinc-300 absolute -bottom-[24px]`}
              >
                {item}
              </p>
            </div>
          </React.Fragment>
        ))}
        <div className="w-full h-[30px] z-20 blur-3xl opacity-70 bg-black absolute bottom-0" />
      </div>
    </div>
  );
};

export default ProgressDots;
