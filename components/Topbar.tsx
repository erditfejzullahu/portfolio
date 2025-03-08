"use client"
import Hamburger from "hamburger-react"
import { useEffect, useRef, useState } from "react"
import FullscreenMenu from "./FullscreenMenu"
import { useWindowScroll } from "react-use"
import gsap from "gsap"

const Topbar = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [isTopbarVisible, setIsTopbarVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0);

    const topbarContainerRef = useRef<HTMLDivElement>(null);
    const navBar = useRef<HTMLDivElement>(null);

    const {y: currentScrollY} = useWindowScroll();
    
    useEffect(() => {
        if(currentScrollY === 0){
            setIsTopbarVisible(true)
            topbarContainerRef.current?.classList.remove('floating-nav');
            navBar.current?.classList.remove("floating-neccessary")
          }else if(currentScrollY > lastScrollY){
            setIsTopbarVisible(false);
            topbarContainerRef.current?.classList.add('floating-nav');
            navBar.current?.classList.remove("floating-neccessary")
          }else if(currentScrollY < lastScrollY){
            setIsTopbarVisible(true);
            topbarContainerRef.current?.classList.add('floating-nav');
            navBar.current?.classList.remove("floating-neccessary")
          }
          setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
      gsap.to(topbarContainerRef.current, {
        y: isTopbarVisible ? 0 : -100,
        opacity: isTopbarVisible ? 1 : 0,
        duration: 0.2
      })
    }, [isTopbarVisible])
    
    

  return (
    <>
    <header ref={topbarContainerRef} className="shadow-lg fixed top-0 w-full z-[100]">
        <nav ref={navBar} className="topbar-bg before:shadow-xl before:shadow-black h-20 relative overflow-hidden">
            <div className="mx-auto h-full px-6">
                <ul className="flex flex-row items-center justify-between relative z-20 h-full">
                <li>
                    <h2 className="text-2xl font-medium uppercase pointer-events-none cursor-none">Erdit Fejzullahu</h2>
                </li>
                <li className="cursor-pointer">
                    <Hamburger toggled={isOpened} toggle={() => setIsOpened((prevData) => (!prevData))} size={20}/>
                </li>
                </ul>
            </div>
        </nav>
    </header>
        <FullscreenMenu isOpened={isOpened} sendAction={(close) => setIsOpened(close)}/>
        </>
  )
}

export default Topbar