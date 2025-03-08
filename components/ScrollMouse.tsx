import React from 'react'

const ScrollMouse = () => {
  return (
    <a className="absolute bottom-20 right-20 cursor-pointer" href='#about'>
        <div className="border-2 border-black h-15 w-10 rounded-2xl relative flex items-start justify-center">
            <div className="h-7 bg-black w-[3px] absolute left-0 right-0 mx-auto rounded-full top-2 animate-mouseScroll">

            </div>
        </div>
    </a>
  )
}

export default ScrollMouse