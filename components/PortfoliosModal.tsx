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
import { useAppDispatch } from '@/store'
import { setDialogOpen } from '@/store/topbarSlice'
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
    
    const dispatch = useAppDispatch()
    const [closing, setClosing] = useState(false)
    const swiperRef = useRef<SwiperType | null>(null)
    // Memoized handlers
    const handleClose = useCallback(() => {
        setClosing(true)
        setTimeout(() => {
            close()
            setClosing(false)
        }, 500);
    }, [close])
    
    
    const caseStudyContent = useMemo(
        () => object?.content.replace(/[\p{Extended_Pictographic}\p{Emoji_Modifier}\p{Regional_Indicator}\uFE0F\u200D\u20E3]/gu, "") ?? "",
        [object?.content]
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

    useEffect(() => {
        const isDialogOpen = opened && object !== null
        dispatch(setDialogOpen({ id: "portfolio-details", isOpen: isDialogOpen }))
        return () => {
            dispatch(setDialogOpen({ id: "portfolio-details", isOpen: false }))
        }
    }, [dispatch, object, opened])

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
                <div className="flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-4 transition-colors hover:border-gray-400">
                    <Image 
                        src={item.image} 
                        alt={item.name} 
                        className="max-h-16 max-w-16 object-contain"
                        width={64}
                        height={64}
                    />
                </div>
                <p className="mt-3 min-h-10 text-center text-sm font-medium leading-5 text-gray-700">{item.name}</p>
            </SwiperSlide>
        )),
        [object?.technologies]
    )

    // Memoize navigation buttons
    const navButtons = useMemo(() => (
        <div className="flex min-h-14 shrink-0 items-center justify-between gap-4 border-t border-gray-200 bg-white px-6 py-2 max-md:px-4">
            {hasBack && (
                <button
                    type="button"
                    aria-label={`Previous project: ${backButtonTitle}`}
                    className="mr-auto flex min-h-11 min-w-0 max-w-[48%] cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                    onClick={() => handleBackButton(getBackObject)}
                >
                    <GoChevronLeft className="size-8 shrink-0"/>
                    <span className="min-w-0 truncate text-base font-normal max-md:text-sm">{backButtonTitle}</span>
                </button>
            )}
            {hasNext && (
                <button
                    type="button"
                    aria-label={`Next project: ${nextButtonTitle}`}
                    className="ml-auto flex min-h-11 min-w-0 max-w-[48%] cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-right hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
                    onClick={() => handleNextButton(getNextObject)}
                >
                    <span className="min-w-0 truncate text-base font-normal max-md:text-sm">{nextButtonTitle}</span>
                    <GoChevronRight className="size-8 shrink-0"/>
                </button>
            )}
        </div>
    ), [hasBack, hasNext, backButtonTitle, nextButtonTitle, getBackObject, getNextObject, handleBackButton, handleNextButton])

    // Early return if not opened or no object
    if (!opened || !object) return null

    // Destructure object properties
    const { title, description } = object

    return (
        <div 
            className={`fixed h-screen w-screen left-0 flex items-center justify-center top-0 z-[9999] overscroll-none ${closing ? "animate-fadeOutLeft" : "animate-fadeIn"}`}
            style={{ background: "rgba(0,0,0,0.5)" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-dialog-title"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    handleClose()
                }
            }}
        >
            <div className="relative flex h-[min(92dvh,1000px)] w-[min(94vw,1440px)] flex-col overflow-hidden bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] animate-fadeInRight custom-shape before:skew-30! before:-top-30!">

                <button
                    type="button"
                    aria-label="Close project details"
                    className="absolute right-0 top-0 z-[999] cursor-pointer hover:bg-gray-200 transition-all shadow-lg shadow-gray-500 p-2"
                    onClick={handleClose}
                >
                    <CgClose size={25}/>
                </button>

                <div className="flex min-h-0 min-w-0 flex-1 flex-row gap-8 max-md:flex-col max-md:gap-4">
                    {/* Left Content */}
                    <div className="flex min-h-0 min-w-0 flex-1 flex-col justify-between overflow-x-hidden overflow-y-auto overscroll-contain px-5 shadow-[0_0_10px] shadow-gray-300 max-md:max-h-[56%] max-md:flex-none">
                    <div className="flex-1">
                        <div id="portfolio-dialog-title" className="p-6 pb-5 flex items-center justify-center">
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
                        <div className="mt-7 rounded-xl border border-gray-200 bg-gray-50 p-5">
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Short description</h4>
                            <p className="text-base leading-7 text-gray-700">{description}</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Technologies used</h4>
                        <div
                            onMouseEnter={pauseAutoplay}
                            onMouseLeave={startAutoplay}
                        >
                            <Swiper
                                slidesPerView={2}
                                spaceBetween={12}
                                autoplay={{ delay: 3000, disableOnInteraction: true }}
                                onSwiper={handleSwiperInit}
                                modules={[Autoplay]}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                    }
                                }}
                                className="w-full"
                            >
                                {techSlides}
                            </Swiper>
                        </div>
                    </div>
                </div>

                    {/* Right Content */}
                    <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-6 shadow-[0_0_10px] shadow-gray-300 max-md:flex-1 max-md:px-5">
                        <div className="mx-auto max-w-3xl py-7">
                            <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-200 pb-4">
                                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">Case study</h4>
                                <span className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">{object.type} project</span>
                            </div>
                            <div
                                className="portfolio-content text-base leading-7 text-gray-600"
                                dangerouslySetInnerHTML={{ __html: caseStudyContent }}
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                {navButtons}
            </div>
        </div>
    )
})

PortfoliosModal.displayName = "PortfoliosModal"

export default PortfoliosModal