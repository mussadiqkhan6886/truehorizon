"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqs, variants2 } from "@/lib/constants";
import {motion} from "framer-motion";

const FaqCollapse = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div variants={variants2(0.2)} initial="hidden" whileInView={"show"} className="relative max-w-3xl mx-auto py-10 space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={i}
            className="relative border border-zinc-800 rounded-lg bg-gradient-to-b from-zinc-900/50 to-zinc-800/60 overflow-hidden transition-all duration-500"
          >
            {/* 🌌 Ever-glow background (unique per item) */}
            <div
              className="absolute top-0 w-[200px] h-[120px] -translate-y-1/3 rounded-full 
                         bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.5),_transparent_70%)] 
                         blur-3xl pointer-events-none"
              style={{ left: `${faq.position}px` }}
            />

            {/* Header Button */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="relative z-10 w-full flex justify-between items-center px-5 py-4 text-left cursor-pointer"
            >
              <span className="text-white font-semibold">{faq.question}</span>
              <FiChevronDown
                className={`text-white transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Smooth Expand/Collapse */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden px-5`}
            >
              <p className="pb-4 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default FaqCollapse;
