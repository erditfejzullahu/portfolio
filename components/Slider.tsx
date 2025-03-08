"use client"
import { images } from '@/constants';
import { professionalSlider } from '@/data/navigations'
import Image from 'next/image'
import React from 'react'
import { CgArrowTopRight } from 'react-icons/cg';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { TbArrowBounce } from 'react-icons/tb';
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Slider = () => {
    return (
      <div className="flex flex-row items-center border-t border-gray-200 border-b" id='about'>
        {/* First Column: Image */}
        <div className="w-fit bg-gray-200 shadow-[0_0_10px_5px] shadow-gray-300 px-14 relative border-r border-gray-200">
            <div className="absolute -right-30 top-10 bottom-0 z-20">
                <button className="font-normal text-sm flex flex-row items-center gap-1 -rotate-50 bg-white rounded-sm px-2 py-1 shadow-lg shadow-gray-300">
                    Lets Build Something
                    <HiArrowTrendingUp size={30} className="rotate-16"/>
                </button>
            </div>
          <Image src={images.team} alt="team" className="size-44"/>
        </div>
  
        {/* Second Column: Swiper Carousel */}
        <div className="w-full overflow-hidden shadow-[0_0_10px] shadow-gray-300">
          <Swiper
            slidesPerView={3} // Adjust number of visible slides
            spaceBetween={10}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="w-auto" // Ensuring controlled width
          >
            {professionalSlider.map((src, index) => (
              <SwiperSlide key={index}>
                <Image src={src.image} alt={`skill-${index}`} className="size-44 object-contain m-auto py-4" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };

  

export default Slider