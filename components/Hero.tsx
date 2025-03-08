"use client"
import React, { useEffect } from 'react'
import WordAnimation from './WordAnimation'
import Image from 'next/image'
import { images } from '@/constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    useEffect(() => {
      gsap.to(".full-screen-section", {
        scrollTrigger: {
            trigger: ".full-screen-section",
            start: "top top",
            end: "bottom top",
            pin: true,
            scrub: true
        },
        scale: 1.2,
        transformOrigin: "center center",
        ease: "power3.out"
      })
    }, [])
    

  return (
    <>
    <div className="h-[50vh]">
        <div className="flex p-4 mt-10 flex-row gap-4 items-center">
            <div className="flex-1">
                <WordAnimation 
                    text='I specialize in crafting sophisticated web and mobile applications, delivering cutting-edge, user-centric solutions tailored to elevate your digital experience.' 
                    textClasses="text-4xl! font-normal! transition-all!"
                    spanTextClasses='hover:text-5xl! transition-all!'
                    />
            </div>
            <div className="flex-[0.45]">
                <Image src={images.erditi} className="object-cover rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.4)]" alt='erditi'/>
            </div>
        </div>
    </div>
    <div className="h-[35vh] bg-amber-400 border-t border-gray-500 full-screen-section">

    </div>
    </>
  )
}

export default Hero