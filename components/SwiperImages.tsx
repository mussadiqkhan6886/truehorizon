"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function SwiperImages() {

    const data = ["./chatgpt.svg", "./discord.svg", "./framer.svg", "./gmail.svg"]

  return (
    <div className="h-[500px] w-full">
      <Swiper
        direction="vertical"  // 👈 makes slides move up/down
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2900,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="h-full"
      >
        {data.map(item => (
            <SwiperSlide key={item} className="flex items-center justify-center">
                <Image src={item} alt="image" width={50} height={50} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
