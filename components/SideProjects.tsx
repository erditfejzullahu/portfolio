"use client"
import React, { MouseEvent as eventi, useEffect, useRef, useState } from 'react'
import { PersonalPortfolioSlider, PortfolioSliderInterface } from '@/data/navigations'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { MdOpenInFull } from 'react-icons/md'
import { setTriggerData } from '@/store/triggerModalSlice'

const SideProjects = () => {
  const dispatch = useDispatch();
  const isTopbarVisible = useSelector((state: RootState) => state.topbar.isTopbarVisible);
  
  const [hoverProjects, setHoverProjects] = useState<string | null>(null)
  const [unHovered, setUnHovered] = useState(false)
  const hoveredProject = hoverProjects ? PersonalPortfolioSlider.find((item) => item.title === hoverProjects) : null
  const [addCloser, setAddCloser] = useState(false)
  const top = useRef<HTMLDivElement>(null)
  const bottom = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null);

  const [transformStyle, setTransformStyle] = useState("")

  const handleMouseMove = (e: eventi<HTMLDivElement>) => {
    if(!itemRef.current) return;

    //check first if its working in mobile
    // const isTouchDevice = "ontouchstart" in window || window.innerWidth <= 1024;
    // if (isTouchDevice) return;

    const {left, top, width, height} = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 0.6;
    const tiltY = (relativeX - 0.5) * 0.6;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`
    setTransformStyle(newTransform)
  }

  const handleOpenModal = (object: PortfolioSliderInterface) => {
    dispatch(setTriggerData(object));
  }

  const handleCloser = () => {
    setAddCloser(true);
    setTimeout(() => {
      setHoverProjects(null); // Reset hovered project after animation
      setAddCloser(false);
    }, 300); // Match this duration with your CSS animation duration
  };

  const mouseEnter = (item: any) => {
    setHoverProjects(item.title);
    setUnHovered(true)
    setAddCloser(true)
    setTimeout(() => {
      setUnHovered(false)
      setAddCloser(false)
    }, 100);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(top.current && !top.current.contains(event.target as Node) && bottom.current && !bottom.current.contains(event.target as Node)){
        handleCloser();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [])
  

  return (
    <>
      <div style={{transform: transformStyle}} ref={top} className={` max-sm:hidden! will-change-transform fixed z-[90] left-4 top-0 bottom-0 max-h-[40%] overflow-y-auto my-auto rounded-xl shadow-lg shadow-gray-500 p-3 bg-white flex flex-col gap-4 items-center   max-[1820px]:bottom-auto ${isTopbarVisible ? "max-[1820]:top-[100px]" : "max-[1820px]:top-[20px]"} transition-all ease-out duration-500 max-[1820]:left-0 max-[1820]:right-0 max-[1820]:flex-row max-[1820px]:max-w-[600px] max-[1820px]:mx-auto max-[1820px]:overflow-x-auto`}>
        {PersonalPortfolioSlider.map((item) => (
          <div onMouseMove={handleMouseMove} ref={itemRef} onMouseEnter={() => mouseEnter(item)} onMouseLeave={() => {setUnHovered(true); setTransformStyle("")}} key={`side-${item.title}`} className={`cursor-pointer interactive relative flex items-center justify-center size-full rounded-lg hover:w-24 transition-all ease-linear shadow-[0_0_30px_rgba(0,0,0,0.2)] `}>
            <Image src={item.image} alt={"project"} className={`object-cover rounded-lg shadow-xl shadow-gray-500 size-24 border transition-all max-[1820px]:min-w-[80px] max-[1820px]:max-h-[80px] ${transformStyle}`} />
          </div>
        ))}
      </div>
      {hoveredProject && (
        <div onMouseMove={handleMouseMove} onMouseLeave={() => {setTransformStyle("")}} style={{transform: transformStyle}} ref={bottom} className={`flex will-change-transform flex-col justify-between fixed bottom-0 my-auto top-0 ${unHovered ? "left-[120px]" : "left-[160px]"} max-[1820px]:left-0 max-[1820px]:right-0 max-[1820px]:mx-auto max-[1820px]:max-w-[600px]  max-[1820px]:bottom-auto   ${isTopbarVisible ? "max-[1820]:top-[220px]" : "max-[1820px]:top-[140px]"}  transition-all ease-in max-w-[300px] rounded-xl p-4 max-h-[32%] h-full bg-white shadow-lg shadow-gray-500 animate-fadeIn ${addCloser ? "animate-fadeOutLeft" : "animate-fadeInRight"} z-[90] overflow-y-auto overflow-x-hidden!`}>
            <div className="absolute right-0 z-20 top-0 bg-white rounded-bl-md cursor-pointer hover:bg-gray-200 transition-all" onClick={handleCloser}>
                <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 rounded-bl-md p-2">
                    <CgClose size={25}/>
                </div>
            </div>
          <div >
            <div className="relative z-0">
              <Image src={hoveredProject.image} alt="image" className="w-full h-36 rounded-lg shadow-lg shadow-gray-500 max-[1820px]:object-cover" />
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold line-clamp-1">{hoveredProject.title}</h2>
              <p className="font-light text-sm line-clamp-4">{hoveredProject.description}</p>
            </div>
          </div>
          <div className="link-element">
            <button onClick={() => handleOpenModal(hoveredProject)} className="mr-auto mt-2 hover:bg-gray-300 flex flex-row items-center gap-2 bg-white shadow-xl rounded-bl-md shadow-gray-400 px-3 py-1.5 border-gray-200 link-element cursor-pointer">
              See Details
              <MdOpenInFull size={22} className="shadow-lg shadow-gray-300"/>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default SideProjects