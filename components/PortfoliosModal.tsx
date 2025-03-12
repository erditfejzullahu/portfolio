"use client"
import { PersonalPortfolioSlider, PortfolioSliderInterface } from '@/data/navigations'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Swiper as SwiperType} from "swiper"
import WordAnimation from './WordAnimation';
import { BsArrowLeft, BsArrowLeftCircle, BsArrowsFullscreen, BsChevronLeft } from 'react-icons/bs';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ImageFullscreen from './ImageFullscreen';
import { BiChevronLeft } from 'react-icons/bi';
import { CgArrowLeft, CgArrowLeftO, CgChevronLeft, CgClose } from 'react-icons/cg';
import { FiArrowLeft } from 'react-icons/fi';
import { GoArrowLeft, GoChevronLeft, GoChevronRight } from 'react-icons/go';

interface Props {
    object: PortfolioSliderInterface | null;
    opened: boolean;
    hasBack: boolean;
    hasNext: boolean;
    close: () => void;
    handleNextButton: (item: PortfolioSliderInterface | null) => void;
    handleBackButton: (item: PortfolioSliderInterface | null) => void;
    nextButtonTitle?: string;
    backButtonTitle?: string;
}

const PortfoliosModal = ({object, opened = false, hasBack, hasNext, close, handleNextButton, handleBackButton, nextButtonTitle, backButtonTitle}: Props) => {
    if(opened === false || !object) return null;
    const {title, description, image, images, content, technologies} = object;
    
    const getNextObject = nextButtonTitle ? PersonalPortfolioSlider.find((idx) => idx.title === nextButtonTitle) || null : null;
    console.log(getNextObject, " obj tjeter");
    
    const getBackObject = backButtonTitle ? PersonalPortfolioSlider.find((idx) => idx.title === backButtonTitle) || null : null;

    const swiperRef = useRef<SwiperType | null>(null);
    const [closing, setClosing] = useState<boolean>(false)

    const handleClose = () => {
        setClosing(true)
    }

    useEffect(() => {
      if(closing){
        const timeout = setTimeout(() => {
            close();
        }, 400);
        return () => clearTimeout(timeout);
      }
    }, [closing])
    
    
    useEffect(() => {
        return () => {
            setClosing(false)
        }
    }, [])
    
  return (
    <div className={`fixed h-screen w-screen left-0 flex items-center justify-center top-0 z-[9999] ${closing ? "animate-fadeOutLeft" : "animate-fadeIn"}`} style={{background: "rgba(0,0,0,0.5)"}}>
        <div className="flex flex-row justify-between gap-10 h-[90%] w-[90%] relative animate-fadeInRight bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]  custom-shape before:skew-30! before:-top-30!">

            <div className="absolute right-0 top-0 z-[999] cursor-pointer hover:bg-gray-200 transition-all" onClick={handleClose}>
                <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 p-2">
                    <CgClose size={25}/>
                </div>
            </div>


            {/* two part content */}
            <div className="flex-1 flex h-full flex-col pb-30 justify-between px-4 overflow-hidden overflow-y-scroll shadow-[0_0_10px] shadow-gray-400">

                <div className="flex-1">
                    <div className="p-6 pb-5 flex items-center justify-center">
                        <WordAnimation text={title} textClasses='font-normal! text-4xl! flex-wrap! flex! items-center! justify-center!'/>
                    </div>
                    <div
                        onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                        onMouseLeave={() => swiperRef.current?.autoplay.start()}
                    >
                        <Swiper
                        slidesPerView={1} // Adjust number of visible slides
                        spaceBetween={10}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        pagination={{ clickable: true, el: ".swiper-pagination" }}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="w-auto" // Ensuring controlled width
                        >
                            {images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="w-fit relative mx-auto p-2 pb-4 cursor-pointer group transition-all"  onMouseEnter={() => swiperRef.current?.autoplay.stop()} onMouseLeave={() => swiperRef.current?.autoplay.start()}>
                                        <ImageFullscreen images={images}/>
                                        <Image src={image} alt={title + "-" + index} className="object-cover mx-auto shadow-[0_0_10px] shadow-gray-400 max-h-[300px]"/>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="swiper-pagination -bottom-1!"></div>
                            <div className="swiper-button-prev after:hidden! text-black"><FaChevronLeft className="text-black!"/></div>
                            <div className="swiper-button-next after:hidden! text-black"><FaChevronRight className="text-black!" /></div>
                        </Swiper>
                    </div>
                    <div className="mt-8">
                        <h4 className="text-lg font-medium text-gray-600">Short description:</h4>
                        <p className="text-gray-500 text-base">{description}</p>
                    </div>
                </div>
                <div className="mt-8">
                    <h4 className="text-xl font-medium text-gray-600 w-fit mb-2">Technologies used:</h4>
                        <div
                            onMouseEnter={() => swiperRef.current?.autoplay.pause()}
                            onMouseLeave={() => swiperRef.current?.autoplay.start()}
                        >
                            <Swiper
                                slidesPerView={3} // Adjust number of visible slides
                                spaceBetween={10}
                                autoplay={{ delay: 3000, disableOnInteraction: true }}
                                onSwiper={(swiper) => swiperRef.current = swiper}
                                modules={[Autoplay]}
                                className="w-auto" // Ensuring controlled width
                            >
                                {technologies.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="group cursor-pointer">
                                            <ImageFullscreen images={technologies}/>
                                            <Image src={item.image} alt={item.name} className="object-cover max-h-[120px] shadow-[0_0_10px] shadow-gray-400"/>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                </div>
            </div>
            <div className="flex-1 shadow-[0_0_10px] shadow-gray-400 px-4 overflow-hidden overflow-y-scroll">
                <h4 className="text-xl font-medium text-gray-600 w-fit mb-2 mt-4">Case Study:</h4>
                <p className="text-gray-500 text-base">{content}</p>
            </div>
            {/* two part content */}

            {/* next back buttons */}
            <div className="absolute flex flex-row justify-between bottom-5 left-0 right-0 mx-4">
                {hasBack && <div className="flex flex-row items-center cursor-pointer" onClick={() => handleBackButton(getBackObject)}>
                    <GoChevronLeft size={50}/>
                    <span className="font-normal text-lg">{backButtonTitle}</span>
                </div> }
                {hasNext && <div className="flex flex-row items-center cursor-pointer" onClick={() => handleNextButton(getNextObject)}>
                    <span className="font-normal text-lg">{nextButtonTitle}</span>
                    <GoChevronRight size={50}/>
                </div>}
            </div>
            {/* next back buttons  */}
        </div>

    </div>
  )
}

export default PortfoliosModal