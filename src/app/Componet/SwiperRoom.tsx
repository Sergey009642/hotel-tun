"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const images = [
  '/room1.jpg',
  '/kuxni.jpg',
  '/room2.jpg',
  '/room3.jpg',
  '/room4.jpg',
  '/zal1.jpg'
  
];

export default function SwiperRoom() {
  return (
    <div className="w-[600px] mx-auto text-center max-xl:w-[500px] max-lg:w-[360px] max-md:w-[260px]">
      <h1 className="text-[80px] text-[#1b3d21] max-md:text-[60px]"><strong>HOME</strong></h1>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="h-[450px] w-full overflow-hidden rounded-xl shadow-md flex max-xl:h-[350px] max-lg:h-[250px] max-md:h-[150px]">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}





