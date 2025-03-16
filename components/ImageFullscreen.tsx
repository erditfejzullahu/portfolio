"use client"
import React, { useEffect, useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { CgClose } from "react-icons/cg";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { setImageOpen } from "@/store/imageFullscreenSlice";

const ImageFullscreen = ({ images, imageIndex, additionalStyles }: {images: any[]; imageIndex?: number, additionalStyles?: string}) => {
  const dispatch = useDispatch();
  
  return (
    <>
        <div className={`absolute top-0 opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg shadow-black left-0 bottom-0 right-0 m-auto ${additionalStyles}`} style={{ background: "rgba(0,0,0,0.3)" }} onClick={() => dispatch(setImageOpen({images, imageIndex}))}>
          <button className="hover:bg-gray-400 cursor-pointer transition-all ease-in-out p-2 hover:p-2.5 bg-white">
            <BsArrowsFullscreen />
          </button>
        </div>
    </>
  );
};

export default ImageFullscreen;
