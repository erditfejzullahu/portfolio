"use client"
import React, { useEffect, useState } from 'react'
import WordAnimation from './WordAnimation'
import { BsStarFill } from 'react-icons/bs'
import { TbWorldBolt } from 'react-icons/tb'
import { FaMobile } from 'react-icons/fa'
import { PersonalPortfolioSlider, PortfolioSliderInterface } from '@/data/navigations'
import Image from 'next/image'
import { MdOpenInFull } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'

const AllPortfoliosModal = ({opened = false, close, openSpecificProject}: {opened: boolean, close: () => void, openSpecificProject: (item: PortfolioSliderInterface) => void}) => {
    if(opened === false) return null;

    type Selected = "All" | "Web" | "Mobile"
    const [typeSelected, setTypeSelected] = useState<Selected>("All")
    const [showWorks, setShowWorks] = useState<PortfolioSliderInterface[]>(PersonalPortfolioSlider);
    const [closing, setClosing] = useState<boolean>(false)

    useEffect(() => {
      if(typeSelected === "All"){
        setShowWorks(PersonalPortfolioSlider);
      }else if(typeSelected === "Web"){
        setShowWorks(PersonalPortfolioSlider.filter((item) => item.type === "Web"))
      }else if(typeSelected === "Mobile"){
        setShowWorks(PersonalPortfolioSlider.filter((item) => item.type === "Mobile"))
      }
    }, [typeSelected])


    const handleClose = () => {
        setClosing(true)
    }

    useEffect(() => {
      if(closing){
        const timeout = setTimeout(() => {
            close();
        }, 400);
        return () => clearTimeout(timeout);
      }
    }, [closing])
    
    
    useEffect(() => {
        return () => {
            setClosing(false)
        }
    }, [])
    
    
  return (
    <div className={`fixed h-screen w-screen left-0 flex items-center justify-center top-0 z-[9999] ${closing ? "animate-fadeOutLeft" : "animate-fadeIn"}`} style={{background: "rgba(0,0,0,0.5)"}}>
        <div className={`flex gap-10 py-6! flex-col h-[90%] w-[90%] relative animate-fadeInRight px-4 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]  custom-shape before:skew-30! before:-top-30!`}>

            
            <div className="absolute right-0 top-0 z-[999] cursor-pointer hover:bg-gray-200 transition-all" onClick={handleClose}>
                <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 p-2">
                    <CgClose size={25}/>
                </div>
            </div>


            <div className="mx-auto">
                <WordAnimation text={"Client Work"} textClasses='font-normal! text-4xl!'/>
            </div>
            <div className="mt-4 flex flex-row gap-4 items-center justify-center">
                <button className={`portfolio-switch_border border-b border-transparent cursor-pointer items-center ${typeSelected === "All" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("All")}>
                    All
                    <BsStarFill color='#850E35' className="mb-0.5" size={20}/>
                </button>
                <button className={`portfolio-switch_border border-b border-transparent cursor-pointer items-center ${typeSelected === "Web" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("Web")}>
                    Web
                    <TbWorldBolt color='#850E35' size={20}/>
                </button>
                <button className={`portfolio-switch_border border-b border-transparent cursor-pointer items-center ${typeSelected === "Mobile" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("Mobile")}>
                    Mobile
                    <FaMobile color='#850E35' size={20}/>
                </button>
            </div>

            <div className="flex-1 grid grid-cols-3 gap-10 overflow-y-scroll">
                {showWorks.map((item, idx) => (
                    <div key={idx} className="animate-fadeInRight group relative">
                        <div className="absolute group-hover:opacity-100 opacity-0 transition-all ease-in-out flex items-center justify-center w-full h-full left-0 top-0" style={{background: "rgba(0,0,0,0.7)"}}>
                            <button 
                                className="hover:bg-gray-300 cursor-pointer font-normal flex flex-row items-center justify-center group gap-1 bg-white px-4 py-2 shadow-lg shadow-gray-800"
                                onClick={() => openSpecificProject(item)}
                            >
                                <WordAnimation text='See details' textClasses='text-base! font-normal!'/>
                                <MdOpenInFull size={24} className="shadow-lg shadow-gray-400 bg-transparent group-hover:shadow-none ml-2"/>
                            </button>
                        </div>
                        <div className="shadow-lg shadow-gray-500 h-fit">
                            <div>
                                <Image src={item.image} alt={item.title} className="size-full object-cover"/>
                            </div>
                        </div>  
                        <div className="mt-2">
                            <h4 className="text-xl text-center font-normal">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AllPortfoliosModal