"use client"
import React, { useEffect, useRef, useState } from 'react'
import WordAnimation from './WordAnimation'
import { HiArrowTrendingDown } from 'react-icons/hi2'
import { images } from '@/constants'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { PortfolioSliderInterface, PersonalPortfolioSlider } from '@/data/navigations'
import {Swiper as SwiperType} from 'swiper'
import { MdOpenInFull } from 'react-icons/md'
import PortfoliosModal from './PortfoliosModal'
import { RootState, useAppDispatch } from '@/store'
import { setOverflowHidden } from '@/store/overflowSlice'
import { useSelector } from 'react-redux'

const PortfolioSlider = () => {

    const [showModal, setShowModal] = useState<boolean>(true)
    const [showHoverDiv, setShowHoverDiv] = useState<{index: number[], object: PortfolioSliderInterface | null}>({
        index: [],
        object: null
    })

    const isOverflowHidden = useSelector(
     (state: RootState) => state.overflow.isOverflowHidden
    )
    const dispatch = useAppDispatch();

    useEffect(() => {
      if(showModal){
        dispatch(setOverflowHidden(true))
      }else{
        dispatch(setOverflowHidden(false))
      }
    }, [showModal])
    

    const swiperRef = useRef<SwiperType | null>(null);
  return (
    <>
    <div className="flex flex-row items-center border-t border-gray-200 border-b" id='skills'>
        {/* First Column: Image */}
        <div className="w-fit bg-gray-200 shadow-[0_0_10px_5px] shadow-gray-300 px-14 relative border-r border-gray-200">
            <div className="absolute -right-30 top-10 bottom-0 z-20">
                <button className="hover:bg-gray-300 cursor-pointer font-normal text-sm flex flex-row items-center gap-1 -rotate-50 bg-white rounded-sm px-2 py-1 shadow-lg shadow-gray-300">
                    <WordAnimation text='Explore my expertise' textClasses='text-sm! font-normal!'/>
                    <HiArrowTrendingDown size={30} className="rotate-16"/>
                </button>
            </div>
            <Image src={images.portfolio} alt="team" className="size-44"/>
        </div>

        {/* Second Column: Swiper Carousel */}
        <div className="w-full overflow-hidden shadow-[0_0_10px] shadow-gray-300"
            onMouseEnter={() => swiperRef.current?.autoplay.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay.start()}
        >
            <Swiper
            slidesPerView={3} // Adjust number of visible slides
            spaceBetween={10}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => swiperRef.current = swiper}
            modules={[Autoplay, Pagination]}
            className="w-auto" // Ensuring controlled width
            >
            {PersonalPortfolioSlider.map((item, index) => (
            <SwiperSlide key={index} className="">
                    <div 
                        className="portfolio-swiper p-2 h-full" 
                        onMouseEnter={() => setShowHoverDiv(prevValues => ({
                            ...prevValues,
                            index: [index],
                            object: item
                        }))}
                        onMouseLeave={() => setShowHoverDiv(prevValues => ({
                            ...prevValues,
                            index: [],
                            object: null
                        }))}
                    >
                        {!showHoverDiv.index.includes(index) && <div>
                            <div>
                                <Image src={item.image} alt={item.title} className="size-20 object-cover rounded-lg mx-auto shadow-lg shadow-[rgba(0,0,0,0.2)]"/>
                            </div>
                            <div className="flex flex-col items-center gap-1 mt-2">
                                <h3 className="text-medium text-xl text-black">{item.title}</h3>
                                <p className="text-light text-sm text-gray-500 line-clamp-2 text-center">{item.description}</p>
                            </div>
                        </div>}

                        {showHoverDiv.index.includes(index) && <div className="flex items-center justify-center h-[160px] flex-1 animate-fadeIn border-r border-l border-white">
                            <div className="h-full flex items-center">
                                <button 
                                    className="hover:bg-gray-300 cursor-pointer font-normal flex flex-row items-center group gap-1 bg-white px-4 py-2 shadow-lg shadow-gray-400"
                                    onClick={() => setShowModal(true)}
                                >
                                    <WordAnimation text='See details' textClasses='text-base! font-normal!'/>
                                    <MdOpenInFull size={24} className="shadow-lg shadow-gray-400 bg-transparent group-hover:shadow-none ml-2"/>
                                </button>
                            </div>    
                        </div>}
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </div>

    <PortfoliosModal object={PersonalPortfolioSlider[0]} opened={showModal}/>
    </>
  )
}

export default PortfolioSlider