"use client"
import { PersonalPortfolioSlider, PortfolioSliderInterface } from '@/data/navigations'
import Image from 'next/image'
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from "swiper"
import WordAnimation from './WordAnimation'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import ImageFullscreen from './ImageFullscreen'
import { CgClose } from 'react-icons/cg'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

interface Props {
    object: PortfolioSliderInterface | null
    opened: boolean
    hasBack: boolean
    hasNext: boolean
    close: () => void
    handleNextButton: (item: PortfolioSliderInterface | null) => void
    handleBackButton: (item: PortfolioSliderInterface | null) => void
    nextButtonTitle?: string
    backButtonTitle?: string
}

const PortfoliosModal = React.memo(({
    object, 
    opened = false, 
    hasBack, 
    hasNext, 
    close, 
    handleNextButton, 
    handleBackButton, 
    nextButtonTitle, 
    backButtonTitle
}: Props) => {
    
    const [closing, setClosing] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null)
    // Memoized handlers
    const handleClose = useCallback(() => {
        setClosing(true)
        setTimeout(() => {
            close()
            setClosing(false)
        }, 500);
    }, [])
    
    
    const technologiesImagesOnly = useMemo(() => 
        object?.technologies.map((tech) => tech.image), 
        [object?.technologies]
    )

    const getNextObject = useMemo(() => 
        nextButtonTitle ? PersonalPortfolioSlider.find((idx) => idx.title === nextButtonTitle) || null : null,
        [nextButtonTitle]
    )

    const getBackObject = useMemo(() => 
        backButtonTitle ? PersonalPortfolioSlider.find((idx) => idx.title === backButtonTitle) || null : null,
        [backButtonTitle]
    )

    // Cleanup effect
    useEffect(() => {
        return () => {
            setClosing(false)
        }
    }, [])

    // Reset closing state when opened changes
    useEffect(() => {
        if (opened) {
            setClosing(false)
        }
    }, [opened])

    
    
    // Memoize derived data

    // Memoize swiper callbacks
    const handleSwiperInit = useCallback((swiper: SwiperType) => {
        swiperRef.current = swiper
    }, [])

    const pauseAutoplay = useCallback(() => {
        swiperRef.current?.autoplay.pause()
    }, [])

    const startAutoplay = useCallback(() => {
        swiperRef.current?.autoplay.start()
    }, [])

    // Memoize main image slides
    const imageSlides = useMemo(() => 
        object?.images.map((image, index) => (
            <SwiperSlide key={index}>
                <div 
                    className="w-fit relative mx-auto p-2 pb-4 cursor-pointer group transition-all" 
                    onMouseEnter={pauseAutoplay} 
                    onMouseLeave={startAutoplay}
                >
                    <ImageFullscreen images={object?.images} imageIndex={index}/>
                    <Image 
                        src={image} 
                        alt={`${object?.title}-${index}`} 
                        className="object-cover mx-auto shadow-[0_0_10px] shadow-gray-400 h-full max-h-[300px] max-lg:max-h-[150px]! max-md:max-h-[250px]!"
                        width={800}
                        height={600}
                    />
                </div>
            </SwiperSlide>
        )),
        [object?.images, object?.title, pauseAutoplay, startAutoplay]
    )

    const techSlides = useMemo(() => 
        object?.technologies.map((item, index) => (
            <SwiperSlide key={index}>
                <div className="group relative cursor-pointer border">
                    <ImageFullscreen images={technologiesImagesOnly!} imageIndex={index}/>
                    <Image 
                        src={item.image} 
                        alt={item.name} 
                        className="object-contain min-h-[120px] max-h-[120px] p-4 shadow-[0_0_10px] shadow-gray-400"
                        // width={120}
                        // height={120}
                        // quality={20}
                    />
                </div>
                <div>
                    <p className="text-center font-semibold mt-2">{item.name}</p>
                </div>
            </SwiperSlide>
        )),
        [object?.technologies, technologiesImagesOnly]
    )

    // Memoize navigation buttons
    const navButtons = useMemo(() => (
        <div className="absolute flex flex-row flex-wrap justify-between bottom-3 left-0 right-0 mx-4">
            {hasBack && (
                <div 
                    className="flex flex-row items-center cursor-pointer mr-auto" 
                    onClick={() => handleBackButton(getBackObject)}
                >
                    <GoChevronLeft className="size-10"/>
                    <span className="font-normal text-lg max-md:text-base line-clamp-1">{backButtonTitle}</span>
                </div>
            )}
            {hasNext && (
                <div 
                    className="flex flex-row items-center cursor-pointer ml-auto" 
                    onClick={() => handleNextButton(getNextObject)}
                >
                    <span className="font-normal text-lg max-md:text-base line-clamp-1">{nextButtonTitle}</span>
                    <GoChevronRight className="size-10"/>
                </div>
            )}
        </div>
    ), [hasBack, hasNext, backButtonTitle, nextButtonTitle, getBackObject, getNextObject, handleBackButton, handleNextButton])

    // Early return if not opened or no object
    if (!opened || !object) return null

    // Destructure object properties
    const { title, description, images, content, technologies } = object

    // Memoize technology slides

    return (
        <div 
            className={`fixed h-screen w-screen left-0 flex items-center justify-center top-0 z-[9999] ${closing ? "animate-fadeOutLeft" : "animate-fadeIn"}`} 
            style={{ background: "rgba(0,0,0,0.5)" }}
        >
            <div className="flex flex-row max-md:flex-col justify-between max-lg:gap-6 gap-10 max-md:gap-4 h-[90%] w-[90%] relative animate-fadeInRight bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] custom-shape overflow-hidden before:skew-30! before:-top-30!">

                <div 
                    className="absolute right-0 top-0 z-[999] cursor-pointer hover:bg-gray-200 transition-all" 
                    onClick={handleClose}
                >
                    <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 p-2">
                        <CgClose size={25}/>
                    </div>
                </div>

                {/* Left Content */}
                <div className="flex-1 flex h-full flex-col max-h-[calc(100%-100px)] max-md:max-h-full pb-6 justify-between px-4 overflow-hidden overflow-y-auto shadow-[0_0_10px] shadow-gray-400">
                    <div className="flex-1">
                        <div className="p-6 pb-5 flex items-center justify-center">
                            <WordAnimation 
                                text={title} 
                                textClasses='font-normal! text-3xl! max-lg:text-2xl! flex-wrap! flex! items-center! justify-center!'
                            />
                        </div>
                        <div
                            onMouseEnter={pauseAutoplay}
                            onMouseLeave={startAutoplay}
                        >
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                autoplay={{ delay: 3000, disableOnInteraction: true }}
                                pagination={{ clickable: true, el: ".swiper-pagination" }}
                                navigation={{ 
                                    nextEl: ".swiper-button-next", 
                                    prevEl: ".swiper-button-prev" 
                                }}
                                onSwiper={handleSwiperInit}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="w-auto"
                            >
                                {imageSlides}
                                <div className="swiper-pagination -bottom-1!"></div>
                                <div className="swiper-button-prev after:hidden! text-black">
                                    <FaChevronLeft className="text-gray-400!"/>
                                </div>
                                <div className="swiper-button-next after:hidden! text-black">
                                    <FaChevronRight className="text-gray-400!" />
                                </div>
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
                            onMouseEnter={pauseAutoplay}
                            onMouseLeave={startAutoplay}
                        >
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={10}
                                autoplay={{ delay: 3000, disableOnInteraction: true }}
                                onSwiper={handleSwiperInit}
                                modules={[Autoplay]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3
                                    }
                                }}
                                className="w-auto"
                            >
                                {techSlides}
                            </Swiper>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 h-full max-h-[calc(100%-100px)] max-md:max-h-full shadow-[0_0_10px] shadow-gray-400 px-4 overflow-hidden min-md:overflow-y-auto">
                    <div className="max-md:h-full max-md:max-h-[calc(100%-100px)] max-md:overflow-y-auto">
                        <h4 className="text-xl font-medium text-gray-600 w-fit mb-2 mt-4">Case Study:</h4>
                        <div 
                            className="text-gray-500 text-base portfolio-content" 
                            dangerouslySetInnerHTML={{ __html: content }}
                        />
                    </div>
                </div>

                {/* Navigation Buttons */}
                {navButtons}
            </div>
        </div>
    )
})

export default PortfoliosModal