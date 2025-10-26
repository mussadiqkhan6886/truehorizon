"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import ProgressDots from "./Progress";
import { motion } from "framer-motion";
import { variants } from "@/lib/constants";

const cards = [
  { title: "George chapel", op: "Founder", verified: "Verified", email: "geroge@gmail.com", company: "Chapel LLC" },
  { title: "Mike Taylor", op: "Founder", verified: "Verified", email: "mike@gmail.com", company: "Mike LLC" },
  { title: "Thomas Shelby", op: "Founder", verified: "Verified", email: "shelby@gmail.com", company: "shelby.co" },
  { title: "Jack Denil", op: "Founder", verified: "Verified", email: "jack@gmail.com", company: "Jack.co" },
];

const GrowthCard = () => {
  return (
    <div className='w-[450px] overflow-hidden relative h-[370px] rounded-3xl bg-[#0d0d0dcc] p-[50px] pb-0'>
        <motion.div variants={variants} initial="hidden" whileInView={"show"} viewport={{once: true, amount: 0.2}}   className="p-2 border border-zinc-800 rounded-md bg-black">
        <div>
            <div className="p-2 bg-zinc-900/50 border border-zinc-800 rounded-md flex items-center justify-between">
                <p className="text-[11px] pl-1">E-mail sending...</p>
                 <div className='border-2 pr-2 w-[18px]  h-[18px] duration-200 rounded-full border-purple-800 animate-spin bg-transparent relative'>
                    <div className='bg-black w-[4px] h-[4px] -top-0.5' />
                </div>
            </div>
            <div className="flex gap-2 flex-row mt-2">
                <div className="p-1 px-1.5 rounded-md text-[9px] border border-zinc-800 bg-zinc-900/50">Linkedin</div>
                <div className="p-1 px-1.5 rounded-md text-[9px] border border-zinc-800 bg-zinc-900/50">IT services</div>
                <div className="p-1 px-1.5 rounded-md text-[9px] border border-zinc-800 bg-zinc-900/50">Founders</div>
            </div>
        </div>
        <div className="w-full h-[200px] overflow-hidden  flex justify-center items-center">
        <Swiper
            autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            }}
            speed={500}
            direction="vertical"
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={1}
            loop={true}
            effect="coverflow"
            modules={[EffectCoverflow, Autoplay]}
            coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
            }}
            className="h-[330px] w-[320px]"
        >
            {cards.map((card, index) => (
            <SwiperSlide key={index}>
                {({ isActive }) => (
                <div
                    className={`transition-all duration-500 flex flex-col justify-center items-center rounded-2xl border border-zinc-800 p-3 px-5 text-[11px]
                    ${
                    isActive
                        ? "scale-105 opacity-100 bg-zinc-900/30 shadow-lg shadow-black"
                        : "opacity-30 bg-black text-zinc-500"
                    }`}
                >
                    <div className="flex w-full gap-2 items-center mb-3 justify-between">
                        <div className="flex gap-2">
                            <Image className="rounded-full scale-90" src={"/9896174.jpg"} alt="image" width={35} height={20} />
                            <div>
                                <p>{card.title}</p>
                                <p className="text-[10px] text-zinc-300">{card.op}</p>
                            </div>
                        </div>
                        <div className="text-[10px]">
                            {card.verified}
                        </div>
                    </div>
                    <div className="flex text-zinc-300 justify-between text-[10px] w-full">
                        <div>
                            <p>Email</p>
                            <p>{card.email}</p>
                        </div>
                        <div>
                            <p>Company</p>
                            <p>{card.company}</p>
                        </div>
                    </div>
                </div>
                )}
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
        <ProgressDots />
        </motion.div>
        <div className='bg-gradient-to-t from-[rgb(8,8,8)] to-transparent  absolute bottom-0 w-full h-[55px] left-0 z-10' />
    </div>
  );
};

export default GrowthCard;
