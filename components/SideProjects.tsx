"use client"
import React, { useState } from 'react'
import { projects } from '@/data/navigations'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'

const SideProjects = () => {
  const [hoverProjects, setHoverProjects] = useState<number | null>(null)
  const [unHovered, setUnHovered] = useState(false)
  const hoveredProject = hoverProjects ? projects.find((item) => item.id === hoverProjects) : null
  const [addCloser, setAddCloser] = useState(false)

  const handleCloser = () => {
    setAddCloser(true)
  }
  return (
    <>
      <div className="absolute left-4 top-0 bottom-0 max-h-[30%] overflow-y-scroll my-auto rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.2)] p-3 bg-white flex flex-col gap-4 items-center">
        {projects.map((item) => (
          <div onMouseEnter={() => {setHoverProjects(item.id); setUnHovered(false); setAddCloser(false)}} onMouseLeave={() => setUnHovered(true)} key={item.id} className="cursor-pointer relative flex items-center justify-center size-16 rounded-lg hover:w-24 transition-all ease-linear shadow-[0_0_30px_rgba(0,0,0,0.2)]">
            <Image src={item.image} alt={"project"} className="object-cover rounded-lg size-16 hover:w-24 hover:h-20 transition-all" />
          </div>
        ))}
      </div>
      {hoveredProject && (
        <div className={`flex flex-col justify-between absolute bottom-0 my-auto top-0 ${unHovered ? "left-[120px]" : "left-[160px]"} transition-all ease-in max-w-[300px] rounded-xl p-4 max-h-[32%] h-full bg-white shadow-[0_0_30px_rgba(0,0,0,0.2)] animate-fadeIn ${addCloser ? "animate-fadeOutLeft" : "animate-fadeInRight"}`}>
          <div onClick={handleCloser} className="bg-gray-200 self-start absolute -top-2 -right-2 rounded-full p-1 border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.2)] cursor-pointer">
            <CgClose size={24}/>
          </div>
          <div>
            <div>
              <Image src={hoveredProject.image} alt="image" className="w-full h-36 rounded-lg" />
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold line-clamp-1">{hoveredProject.title}</h2>
              <p className="font-light text-sm line-clamp-4">{hoveredProject.description}</p>
            </div>
          </div>
          <div>
            <button className="mr-auto bg-gray-200 px-3 py-1 rounded-lg border border-gray-200 shadow-xl">Details</button>
          </div>
        </div>
      )}
    </>
  )
}

export default SideProjects