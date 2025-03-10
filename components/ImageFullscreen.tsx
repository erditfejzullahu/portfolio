import React from 'react'
import { BsArrowsFullscreen } from 'react-icons/bs'

const ImageFullscreen = ({images}: {images: any[]}) => {
  return (
    <div className="absolute top-0 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:bg-gray-400 transition-all ease-in-out hover:p-2.5 bg-white w-fit h-fit p-2 shadow-lg shadow-black left-0 bottom-0 right-0 m-auto">
        <BsArrowsFullscreen />
    </div>
  )
}

export default ImageFullscreen