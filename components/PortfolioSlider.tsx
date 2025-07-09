"use client"
import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import WordAnimation from './WordAnimation'
import { HiArrowTrendingDown } from 'react-icons/hi2'
import { images } from '@/constants'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { PortfolioSliderInterface, PersonalPortfolioSlider } from '@/data/navigations'
import { Swiper as SwiperType } from 'swiper'
import { MdOpenInFull } from 'react-icons/md'
import PortfoliosModal from './PortfoliosModal'
import { RootState, useAppDispatch } from '@/store'
import { setOverflowHidden } from '@/store/overflowSlice'
import { useSelector } from 'react-redux'
import AllPortfoliosModal from './AllPortfoliosModal'
import { resetTrigger } from '@/store/triggerModalSlice'

const PortfolioSlider = () => {
    const { data, shouldTrigger } = useSelector((state: RootState) => state.trigger)
    const isOverflowHidden = useSelector((state: RootState) => state.overflow.isOverflowHidden)
    const dispatch = useAppDispatch()

    const [showModal, setShowModal] = useState<boolean>(false)
    const [showAllProjsModal, setShowAllProjsModal] = useState<boolean>(false)
    const [showHoverDiv, setShowHoverDiv] = useState<{index: number[], object: PortfolioSliderInterface | null}>({
        index: [],
        object: null
    })
    const [navigationState, setNavigationState] = useState({
        hasBack: false,
        hasNext: false,
        nextPortfolioApp: undefined as string | undefined,
        backPortfolioApp: undefined as string | undefined
    })

    const swiperRef = useRef<SwiperType | null>(null)

    // Memoize the portfolio items to prevent unnecessary re-renders
    const portfolioItems = useMemo(() => PersonalPortfolioSlider, [])

    // Handle overflow state changes
    useEffect(() => {
        dispatch(setOverflowHidden(showModal || showAllProjsModal))
    }, [showModal, showAllProjsModal, dispatch])

    // Handle trigger from external source
    useEffect(() => {
        if (shouldTrigger && data) {
            handleOpenModal(data, "Default")
        }
    }, [shouldTrigger, data])

    type ModalType = "Next" | "Back" | "Default"

    // Memoized handlers
    const handleOpenSpecificProject = useCallback((item: PortfolioSliderInterface) => {
        setShowAllProjsModal(false)
        setTimeout(() => handleOpenModal(item, "Default"), 50)
    }, [])

    const handleOpenModal = useCallback((item: PortfolioSliderInterface | null, type: ModalType) => {
        if (!item) return
        
        const findItem = portfolioItems.findIndex((idx) => idx.title === item.title)
        const newState = {
            hasBack: findItem > 0,
            hasNext: findItem < portfolioItems.length - 1,
            nextPortfolioApp: findItem < portfolioItems.length - 1 ? portfolioItems[findItem + 1].title : undefined,
            backPortfolioApp: findItem > 0 ? portfolioItems[findItem - 1].title : undefined
        }
        setNavigationState(newState)

        if (type === "Default") {
            setShowHoverDiv(prev => ({ ...prev, object: item }))
        } else {
            handleClose()
            setShowHoverDiv(prev => ({ ...prev, object: item }))
        }
    }, [portfolioItems])

    const handleClose = useCallback(() => {
        setShowModal(false)
        setShowHoverDiv({ index: [], object: null })
        if (shouldTrigger && data) {
            dispatch(resetTrigger())
        }
    }, [shouldTrigger, data, dispatch])

    // Show modal when hoverDiv object is set
    useEffect(() => {
        if (showHoverDiv.object !== null) {
            setShowModal(true)
        }
    }, [showHoverDiv.object])

    // Swiper mouse events
    const handleMouseEnter = useCallback(() => swiperRef.current?.autoplay.stop(), [])
    const handleMouseLeave = useCallback(() => swiperRef.current?.autoplay.start(), [])

    // Hover handlers
    const handleMouseEnterItem = useCallback((index: number) => {
        setShowHoverDiv(prev => ({ ...prev, index: [index] }))
    }, [])

    const handleMouseLeaveItem = useCallback(() => {
        setShowHoverDiv(prev => ({ ...prev, index: [] }))
    }, [])

    return (
        <>
            <div className="flex flex-row items-center border-t border-b border-gray-200" id="projects">
                {/* First Column: Image */}
                <div className="relative w-fit bg-gray-200 shadow-[0_0_10px_5px] shadow-gray-300 px-14 max-[430px]:px-4 border-r border-gray-200">
                    <div className="absolute -right-30 top-10 bottom-0 z-20">
                        <button 
                            className="flex flex-row items-center gap-1 px-2 py-1 font-normal text-sm bg-white rounded-sm shadow-lg shadow-gray-300 hover:bg-gray-300 cursor-pointer -rotate-50"
                            onClick={() => setShowAllProjsModal(true)}
                            aria-label="Explore all projects"
                        >
                            <WordAnimation text="Explore my expertise" textClasses="text-sm! font-normal!"/>
                            <HiArrowTrendingDown size={30} className="rotate-16"/>
                        </button>
                    </div>
                    <Image 
                        src={images.portfolio} 
                        alt="Portfolio illustration" 
                        className="size-44"
                        width={176}
                        height={176}
                        quality={75}
                        priority
                    />
                </div>

                {/* Second Column: Swiper Carousel */}
                <div 
                    className="w-full overflow-hidden shadow-[0_0_10px] shadow-gray-300"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        autoplay={{ delay: 2000, disableOnInteraction: true }}
                        breakpoints={{
                            220: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 } 
                        }}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        modules={[Autoplay]}
                        className="w-auto"
                    >
                        {portfolioItems.map((item, index) => (
                            <SwiperSlide key={`personal-portfolio-${item.title}-${index}`}>
                                <div 
                                    className="portfolio-swiper p-2 h-full" 
                                    onMouseEnter={() => handleMouseEnterItem(index)}
                                    onMouseLeave={handleMouseLeaveItem}
                                >
                                    {!showHoverDiv.index.includes(index) ? (
                                        <div>
                                            <div>
                                                <Image 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="size-20 object-cover rounded-lg mx-auto shadow-lg shadow-[rgba(0,0,0,0.2)]"
                                                    width={80}
                                                    height={80}
                                                    loading={index < 4 ? 'eager' : 'lazy'}
                                                />
                                            </div>
                                            <div className="flex flex-col items-center gap-1 mt-2">
                                                <h3 className="text-medium text-xl text-black line-clamp-1">{item.title}</h3>
                                                <p className="text-light text-sm text-gray-500 line-clamp-2 text-center">{item.description}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-[160px] flex-1 animate-fadeIn border-r border-l border-white">
                                            <div className="h-full flex items-center">
                                                <button 
                                                    className="flex flex-row items-center group gap-1 px-4 py-2 font-normal bg-white shadow-lg shadow-gray-400 hover:bg-gray-300 cursor-pointer"
                                                    onClick={() => handleOpenModal(item, "Default")}
                                                    aria-label={`View details of ${item.title}`}
                                                >
                                                    <WordAnimation text="See details" textClasses="text-base! font-normal!"/>
                                                    <MdOpenInFull size={24} className="ml-2 shadow-lg shadow-gray-400 bg-transparent group-hover:shadow-none"/>
                                                </button>
                                            </div>    
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <PortfoliosModal 
                object={showHoverDiv.object} 
                opened={showModal} 
                hasBack={navigationState.hasBack} 
                hasNext={navigationState.hasNext} 
                close={handleClose} 
                nextButtonTitle={navigationState.nextPortfolioApp} 
                backButtonTitle={navigationState.backPortfolioApp}
                handleNextButton={(item) => handleOpenModal(item, "Next")}
                handleBackButton={(item) => handleOpenModal(item, "Back")}
            />

            <AllPortfoliosModal 
                opened={showAllProjsModal}
                close={() => setShowAllProjsModal(false)}
                openSpecificProject={handleOpenSpecificProject}
            />
        </>
    )
}

export default React.memo(PortfolioSlider)