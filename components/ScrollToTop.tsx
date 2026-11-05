"use client"
import React, { useState, useEffect, useCallback, useRef } from 'react'
import { CgChevronUp } from 'react-icons/cg'

const ScrollToTop = () => {
  const [scrollUpVisible, setScrollUpVisible] = useState(false)
  const visibilityRef = useRef(false)

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    const updateVisibility = () => {
      const currentScrollY = window.scrollY
      const shouldShow = currentScrollY > 1000
        ? true
        : currentScrollY <= 500
          ? false
          : visibilityRef.current

      if (shouldShow !== visibilityRef.current) {
        visibilityRef.current = shouldShow
        setScrollUpVisible(shouldShow)
      }
    }

    const animationFrame = requestAnimationFrame(updateVisibility)
    window.addEventListener("scroll", updateVisibility, { passive: true })
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", updateVisibility)
    }
  }, [])

  return scrollUpVisible ? (
    <button
      type="button"
      onClick={scrollToTop}
      className='fixed bg-white bottom-10 right-10 max-[600px]:right-4 transition-all ease-in z-[100] border-2 rounded-lg shadow-lg shadow-gray-300 hover:bg-gray-200 link-element cursor-pointer'
      aria-label="Scroll to top"
    >
      <CgChevronUp size={40}/>
    </button>
  ) : null
}

export default React.memo(ScrollToTop)