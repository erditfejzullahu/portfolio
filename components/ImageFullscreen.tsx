"use client"
import React, { useCallback, memo } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setImageOpen } from "@/store/imageFullscreenSlice";

interface ImageFullscreenProps {
  images: string[];
  imageIndex?: number;
  additionalStyles?: string;
}

const ImageFullscreen = memo(({ 
  images, 
  imageIndex = 0, 
  additionalStyles = "" 
}: ImageFullscreenProps) => {
  const dispatch = useDispatch();
  
  const handleOpenFullscreen = useCallback(() => {
    dispatch(setImageOpen({ images, imageIndex }));
  }, [dispatch, images, imageIndex]);

  return (
    <div 
      className={`absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center shadow-lg shadow-black m-auto ${additionalStyles}`} 
      style={{ background: "rgba(0,0,0,0.3)" }}
      onClick={handleOpenFullscreen}
    >
      <button 
        className="hover:bg-gray-400 cursor-pointer transition-all ease-in-out p-2 hover:p-2.5 bg-white rounded"
        aria-label="View image in fullscreen"
      >
        <BsArrowsFullscreen size={16} />
      </button>
    </div>
  );
});

ImageFullscreen.displayName = "ImageFullscreen";

export default ImageFullscreen;