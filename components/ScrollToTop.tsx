"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { CgChevronUp } from 'react-icons/cg'
import { useWindowScroll } from 'react-use'

const ScrollToTop = () => {
  const [scrollUpVisible, setScrollUpVisible] = useState(false)
  const { y: currentScrollY } = useWindowScroll()

  // Memoized scroll to top handler
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  // Optimized scroll visibility logic
  useEffect(() => {
    // Only update state if the visibility actually needs to change
    if (currentScrollY > 1000 && !scrollUpVisible) {
      setScrollUpVisible(true)
    } else if (currentScrollY <= 500 && scrollUpVisible) {
      setScrollUpVisible(false)
    }
  }, [currentScrollY, scrollUpVisible])

  // Memoize the button component to prevent unnecessary re-renders
  const scrollButton = useMemo(() => (
    <div 
      onClick={scrollToTop} 
      className='fixed bg-white bottom-10 right-10 max-[600px]:right-4 transition-all ease-in z-[100] border-2 rounded-lg shadow-lg shadow-gray-300 hover:bg-gray-200 link-element cursor-pointer'
      aria-label="Scroll to top"
    >
      <CgChevronUp size={40}/>
    </div>
  ), [scrollToTop])

  return scrollUpVisible ? scrollButton : null
}

export default React.memo(ScrollToTop)