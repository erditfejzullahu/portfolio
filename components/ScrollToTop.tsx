"use client"
import React, { useEffect, useState } from 'react'
import { CgArrowUp, CgChevronUp } from 'react-icons/cg';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollUpVisible, setScrollUpVisible] = useState(false)

    const {y: currentScrollY} = useWindowScroll();

    useEffect(() => {
        if(currentScrollY === 0){
            setScrollUpVisible(false)
          }else if(currentScrollY > 1000){
            setScrollUpVisible(true);
          }else if(currentScrollY < 500){
            setScrollUpVisible(false);
          }
          setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])
    
    
  return (
    <>
        {scrollUpVisible && (
            <div onClick={() => window.scrollTo({top: 0, behavior: "smooth"})} className='fixed bottom-20 right-20 z-[9999] border-2 p-1 link-element cursor-pointer'>
                <CgChevronUp size={40}/>
            </div>
        )}
    </>
  )
}

export default ScrollToTop