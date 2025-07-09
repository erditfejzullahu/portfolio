"use client"
import React, { memo, useCallback, useMemo } from 'react'
import { Dialog, DialogClose, DialogContent, DialogTitle } from './ui/dialog'
import { CgClose } from 'react-icons/cg'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setImageClose } from '@/store/imageFullscreenSlice';


const FullscreenImageModal = () => {
    const {isOpened, images, imageIndex} = useSelector((state: RootState) => state.fullscreenImage);
    const dispatch = useDispatch();
    const handleClose = useCallback(() => {
      dispatch(setImageClose())
    }, [dispatch])

    const swiperSlides = useMemo(() => (
      images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`} className="flex justify-center items-center">
              <div className="relative p-2 pb-4 flex items-center justify-center size-full">
                  <Image
                      src={image}
                      alt={`fullscreen-${index}`}
                      className="object-contain size-fit! m-auto max-h-full! max-w-full! shadow-md"
                      width={1200}  // Added for better performance
                      height={800}  // Added for better performance
                      priority={index === imageIndex} // Only prioritize the initial slide
                  />
              </div>
          </SwiperSlide>
      ))
  ), [images, imageIndex]);

    if(isOpened === false || images.length === 0) return null;
  return (
    <Dialog open={isOpened}>
      <DialogContent style={{ zIndex: 999999 }} className="h-[90%] min-w-[90%] [&>button]:hidden">
        <DialogClose asChild>
            <div className="absolute right-0 top-0 z-[999] cursor-pointer rounded-tr-lg bg-white hover:bg-gray-200 transition-all" onClick={handleClose}>
                <div className="sticky bg-transparent h-fit w-fit mx-auto shadow-lg shadow-gray-500 p-2">
                    <CgClose size={25}/>
                </div>
            </div>
        </DialogClose>
        <DialogTitle hidden>title</DialogTitle>
        {/* Swiper Component */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true, el: ".swiper-pagination", dynamicBullets: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          modules={[Pagination, Navigation]}
        //   navigation={true}
          initialSlide={imageIndex}
          className="w-full"
        >
          {swiperSlides}
          <div className="swiper-pagination -bottom-1!"></div>
          <div className="swiper-button-prev before:hidden! after:hidden! text-black"><FaChevronLeft className="text-gray-400!"/></div>
          <div className="swiper-button-next after:hidden! text-black"><FaChevronRight className="text-gray-400!" /></div>
        </Swiper>

      </DialogContent>
    </Dialog>
  )
}

export default memo(FullscreenImageModal)