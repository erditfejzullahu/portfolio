"use client"
import React, { useEffect, useRef, useState } from 'react'
import { social, menu } from '@/data/navigations';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

const FullscreenMenu = ({isOpened = false, sendAction}: {isOpened: boolean, sendAction: (close: boolean) => void}) => {
    const [isVisible, setIsVisible] = useState(isOpened)
    const outsideClick = useRef<HTMLDivElement>(null)

    
    
    useEffect(() => {
        if(isOpened){
            setIsVisible(true);
        }else{
            const timeout = setTimeout(() => {
                setIsVisible(false);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [isOpened])
    
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if(outsideClick.current && !outsideClick.current.contains(event?.target as Node)){
                sendAction(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
    }, [])
    
    if(!isVisible) return null;
  return (
    <div className={`fixed w-screen h-screen bg-black-light bottom-0 right-0 left-0 top-0 ${isOpened ? "animate-fadeIn" : "animate-fadeOut"} z-[100] `}>
        <div ref={outsideClick} className={`relative overflow-y-auto w-[85%] sm:w-[80%] md:w-[70%] bg-white ml-auto h-full shadow-[0_0_20px_rgba(0,0,0,0.4)] ${isOpened ? "animate-toLeft" : "animate-toRight"} flex items-center justify-center`}>
            <div className="absolute right-0 top-0 cursor-pointer hover:bg-gray-200 transition-all" onClick={() => sendAction(false)}>
                <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 p-2">
                    <CgClose size={25}/>
                </div>
            </div>
            <div className="flex flex-row max-[380px]:flex-col-reverse justify-between max-[380px]:gap-10 flex-1 max-w-[80%]">
                <div className="">
                    <h3 className="text-gray-300 font-medium mb-2 max-[380px]:text-right">Social Links</h3>
                    <ul className="flex flex-col gap-6 h-full max-[380px]:justify-end max-[380px]:gap-3 max-[380px]:flex-row max-[380px]:flex-wrap">
                        {social.map((link) => (
                           <li key={link.label} className="link-element">
                                <Link href={link.url} className={`text-xl max-[500px]:text-base font-light hover:text-2xl transition-all text-underline ${link.label === "Murrizi" ? "text-[#850E35]! font-semibold" : ""}`}>{link.label}</Link>
                           </li> 
                        ))}
                    </ul>
                </div>
                <div className="">
                    <h3 className="text-gray-300 max-[380px]:text-left font-medium mb-2 text-right">Menu</h3>
                    <ul className="flex flex-col gap-2 justify-between max-[380px]:justify-start h-full">
                        {menu.map((link) => (
                            <li key={link.label} className="text-right max-[380px]:text-left">
                                <Link href={link.url} className="text-6xl max-[500px]:text-4xl link-element font-light hover:text-8xl transition-all text-underline">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullscreenMenu