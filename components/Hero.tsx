"use client"
import React, { useEffect, useRef } from 'react'
import WordAnimation from './WordAnimation'
import Image from 'next/image'
import { images } from '@/constants'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import {useGSAP} from "@gsap/react"
import { heroInformations } from '@/data/navigations'
import { BsArrow90DegUp, BsArrowDown } from 'react-icons/bs'
import { BiArrowFromTop, BiArrowToTop } from 'react-icons/bi'
import { CgArrowTopRight } from 'react-icons/cg'
import Link from 'next/link'
import ScrollMouse from './ScrollMouse'

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    // useGSAP(() => {
    //     const section = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".fullscreen-section",
    //             start: "center center",
    //             end: "+=800 enter",
    //             scrub: 0.5,
    //             pin: true,
    //             pinSpacing: true,
    //             markers: true
    //         }
    //     })

    //     // section.to(".fullscreen-section", {
    //     //     width: "100vw",
    //     //     height: "100dvh",
    //     //     // gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    //     //     ease: "power2.out",
    //     //     duration:1,
    //     // })

    //     heroInformations.forEach((item, index) => {
    //         gsap.fromTo(
    //             `.hero-info-${index}`,
    //             { opacity: 0, zIndex: index + 1 },
    //             {
    //                 opacity: 1,
    //                 height: "100vh",
    //                 zIndex: heroInformations.length, // Bring to top
    //                 scrollTrigger: {
    //                     trigger: `.hero-info-${index}`,
    //                     start: "top bottom",
    //                     end: "top 100px",
    //                     scrub: true,
    //                     toggleActions: "play none none reverse"
    //                 }
    //             }
    //         )

    //         // Hide the previous div when the next one comes into view
    //         if (index > 0) {
    //             gsap.to(`.hero-info-${index - 1}`, {
    //                 display: "none",
    //                 zIndex: 0,
    //                 scrollTrigger: {
    //                     trigger: `.hero-info-${index}`,
    //                     start: "top center",
    //                     end: "top 100px",
    //                     scrub: true,
    //                     toggleActions: "play none none reverse"
    //                 }
    //             })
    //         }
    //     })
    // })
    

  return (
    <>
    <div className="min-h-screen w-screen flex items-center justify-center relative">
    <ScrollMouse />
        <div className="container mx-auto flex p-4 flex-row gap-10 items-center justify-center relative">
            <div className="flex-1">
                <div className="flex items-end justify-end">
                    <WordAnimation text='Software Engineer' textClasses='text-2xl! font-black' stagger={1}/>
                </div>
                <WordAnimation 
                    text='I specialize in crafting sophisticated web and mobile applications, delivering cutting-edge, user-centric solutions tailored to elevate your digital experience.' 
                    textClasses="text-4xl! font-normal! transition-all!"
                    spanTextClasses='hover:text-5xl! transition-all!'
                    />
                <div className="flex flex-row justify-between items-end">
                    <WordAnimation text='Mobile Dev.' textClasses='text-6xl! font-black' stagger={1.5}/>
                    <Link href={"/contact-me"} className="flex flex-row items-center gap-2 cursor-pointer word-element">
                        <span className="text-xl font-bold text-black">Get in touch.</span>
                        <CgArrowTopRight size={30} className="border-2" />
                    </Link>
                </div>

                <div className="mt-10 flex flex-row gap-1 relative ml-auto text-right max-w-lg animate-fadeIn duration-1000">
                    <div className="-ml-1">
                        <button className="border border-black rounded-2xl py-6 px-2 cursor-pointer word-element">
                            <BsArrowDown size={30}/>
                        </button>
                    </div>
                    <span className="text-sm font-medium text-gray-600 word-element">I've completed multiple projects using Next.js, .NET, React Native Vue.js and other latest modern frameworks, building scalable web apps, mobile apps, and full-stack solutions.</span>
                </div>
            </div>
            <div className="flex-[0.8] relative rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]" style={{background: "rgba(0,0,0,0.05)"}}>
                <div className="absolute animate-heroImg top-0 left-0 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.broCoding} alt='web developer' className="size-28"/>
                </div>
                <div className="absolute animate-heroImg -bottom-6 -right-6 z-20 rounded-lg -rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.broMobCoding} alt='web developer' className="size-28"/>
                </div>
                <Image src={images.erditi} className="object-cover rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.4)]  -skew-5" alt='erditi'/>
            </div>
            <div className="absolute bottom-0 left-0">
                <h2 className="text-black font-semibold text-xl">Email</h2>
                <a className="text-black font-normal link-element" href="mailto:erditfejzullahu45@gmail.com">erditfejzullahu45@gmail.com</a>
            </div>

        </div>
    </div>
    </>
  )
}

export default Hero