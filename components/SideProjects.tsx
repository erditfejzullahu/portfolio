"use client"
import React, { MouseEvent as eventi, useEffect, useRef, useState } from 'react'
import { projects } from '@/data/navigations'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'

const SideProjects = () => {
  const [hoverProjects, setHoverProjects] = useState<number | null>(null)
  const [unHovered, setUnHovered] = useState(false)
  const hoveredProject = hoverProjects ? projects.find((item) => item.id === hoverProjects) : null
  const [addCloser, setAddCloser] = useState(false)
  const top = useRef<HTMLDivElement>(null)
  const bottom = useRef<HTMLDivElement>(null)
  const itemRef = useRef<HTMLDivElement>(null);

  const [transformStyle, setTransformStyle] = useState("")

  const handleMouseMove = (e: eventi<HTMLDivElement>) => {
    if(!itemRef.current) return;

    const {left, top, width, height} = itemRef.current.getBoundingClientRect();
    const realtiveX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 0.6;
    const tiltY = (realtiveX - 0.5) * -0.6

    const newTransform = `perspective(200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    setTransformStyle(newTransform)
  }

  const handleCloser = () => {
    setAddCloser(true);
    setTimeout(() => {
      setHoverProjects(null); // Reset hovered project after animation
      setAddCloser(false);
    }, 300); // Match this duration with your CSS animation duration
  };

  const mouseEnter = (item: any) => {
    setHoverProjects(item.id);
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
      <div style={{transform: transformStyle}} ref={top} className="absolute z-[100] left-4 top-0 bottom-0 max-h-[30%] overflow-y-scroll my-auto rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] p-3 bg-white flex flex-col gap-4 items-center">
        {projects.map((item) => (
          <div onMouseMove={handleMouseMove} ref={itemRef} onMouseEnter={() => mouseEnter(item)} onMouseLeave={() => {setUnHovered(true); setTransformStyle("")}} key={item.id} className={`cursor-pointer interactive relative flex items-center justify-center size-16 rounded-lg hover:w-24 transition-all ease-linear shadow-[0_0_30px_rgba(0,0,0,0.2)] `}>
            <Image src={item.image} alt={"project"} className={`object-cover rounded-lg size-16 hover:w-24 hover:h-20 transition-all ${transformStyle}`} />
          </div>
        ))}
      </div>
      {hoveredProject && (
        <div onMouseMove={handleMouseMove} style={{transform: transformStyle}} ref={bottom} className={` flex flex-col justify-between absolute bottom-0 my-auto top-0 ${unHovered ? "left-[120px]" : "left-[160px]"} transition-all ease-in max-w-[300px] rounded-xl p-4 max-h-[32%] h-full bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] animate-fadeIn ${addCloser ? "animate-fadeOutLeft" : "animate-fadeInRight"} z-[100]`}>
          <div onClick={handleCloser} className={`bg-gray-200 self-start absolute -top-2 -right-2 rounded-full p-1 border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.2)] cursor-pointer ${transformStyle}`}>
            <CgClose size={24}/>
          </div>
          <div >
            <div>
              <Image src={hoveredProject.image} alt="image" className="w-full h-36 rounded-lg" />
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold line-clamp-1">{hoveredProject.title}</h2>
              <p className="font-light text-sm line-clamp-4">{hoveredProject.description}</p>
            </div>
          </div>
          <div className="link-element">
            <button className="mr-auto bg-gray-200 px-3 py-1 rounded-lg border border-gray-200 shadow-xl link-element cursor-pointer">Details</button>
          </div>
        </div>
      )}
    </>
  )
}

export default SideProjects