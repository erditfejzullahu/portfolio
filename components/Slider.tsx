"use client"
import { images } from '@/constants';
import { professionalSlider } from '@/data/navigations';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import WordAnimation from './WordAnimation';
import Link from 'next/link';

const Slider = () => {
    // Memoize the slider items to prevent unnecessary re-renders
    const sliderItems = useMemo(() => 
        professionalSlider.map((src) => (
            <SwiperSlide key={src.name}>
                {"image" in src ? (
                    <Image
                        src={src.image}
                        alt={src.name}
                        className="size-44 object-contain m-auto py-4"
                        quality={75}
                        sizes="176px"
                    />
                ) : (
                    <src.Icon
                        role="img"
                        aria-label={src.name}
                        className="size-44 object-contain m-auto py-4"
                    />
                )}
            </SwiperSlide>
        )), 
        []
    );

    return (
        <div className="flex flex-row items-center border-t border-b border-gray-200" id="skills">
            <h2 className="sr-only">Technologies and tools</h2>
            {/* First Column: Image */}
            <div className="relative w-fit bg-gray-200 shadow-[0_0_10px_5px] shadow-gray-300 px-14 max-[430px]:px-4 border-r border-gray-200">
                <div className="absolute -right-30 top-10 bottom-0 z-20">
                    <Link 
                        aria-label='Scroll to Contact Form'
                        href="#contact-me" 
                        className="flex flex-row items-center gap-1 px-2 py-1 font-normal text-sm bg-white rounded-sm shadow-lg shadow-gray-300 hover:bg-gray-300 cursor-pointer -rotate-50"
                        prefetch={false}  // Disable prefetch for this link
                    >
                        <WordAnimation 
                            text="Lets Build Something" 
                            textClasses="text-sm! font-normal!" 
                            stagger={0.05}  // Faster stagger for short text
                        />
                        <HiArrowTrendingUp size={30} className="rotate-16"/>
                    </Link>
                </div>
                <Image 
                    src={images.team} 
                    alt="team" 
                    className="size-44"
                    width={176}
                    height={176}
                    quality={75}
                    sizes="176px"
                />
            </div>

            {/* Second Column: Swiper Carousel */}
            <div className="w-full overflow-hidden shadow-[0_0_10px] shadow-gray-300">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    breakpoints={{
                        220: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 }
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true  // Better UX
                    }}
                    modules={[Autoplay]}
                    className="w-auto"
                    watchSlidesProgress  // Better performance
                    resistanceRatio={0}  // Better swipe feel
                >
                    {sliderItems}
                </Swiper>
            </div>
        </div>
    );
};

export default React.memo(Slider);