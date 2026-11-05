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

interface AllPortfoliosModalProps {
    opened: boolean;
    close: () => void;
    openSpecificProject: (item: PortfolioSliderInterface) => void;
}

const AllPortfoliosModal = ({opened, close, openSpecificProject}: AllPortfoliosModalProps) => (
    opened ? <AllPortfoliosModalContent close={close} openSpecificProject={openSpecificProject} /> : null
);

const AllPortfoliosModalContent = ({close, openSpecificProject}: Omit<AllPortfoliosModalProps, "opened">) => {

    type Selected = "All" | "Web" | "Mobile"
    const [typeSelected, setTypeSelected] = useState<Selected>("All")
    const [closing, setClosing] = useState<boolean>(false)

    const showWorks = typeSelected === "All"
        ? PersonalPortfolioSlider
        : PersonalPortfolioSlider.filter((item) => item.type === typeSelected)

    useEffect(() => {
        if(closing){
            const timeout = setTimeout(() => {
                close();
            }, 400);
            return () => clearTimeout(timeout);
      }
    }, [closing, close])

    const handleClose = () => {
        setClosing(true)
    }
    

    return (
        <div className={`fixed h-screen w-screen left-0 flex items-center justify-center top-0 z-[9999] ${closing ? "animate-fadeOutLeft" : "animate-fadeIn"}`} style={{background: "rgba(0,0,0,0.5)"}} role="dialog" aria-modal="true" aria-labelledby="all-portfolios-dialog-title">
        <div className={`flex gap-10 max-lg:gap-6 py-6! flex-col h-[90%] w-[90%] relative animate-fadeInRight px-4 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)] overflow-hidden! custom-shape before:skew-30! before:-top-30!`}>

            
            <button type="button" aria-label="Close projects" className="absolute right-0 top-0 z-[999] cursor-pointer hover:bg-gray-200 transition-all shadow-lg shadow-gray-500 p-2" onClick={handleClose}>
                <CgClose size={25}/>
            </button>

            {/* <div className="h-full space-y-6 overflow-hidden!"> */}
                <div className="flex-none">
                    <div id="all-portfolios-dialog-title" className="mx-auto flex items-center justify-center">
                        <WordAnimation text={"Client Work"} textClasses='font-normal! text-4xl! max-sm:text-2xl!'/>
                    </div>
                    <div className="mt-4 max-lg:mt-0 flex flex-row gap-4 items-center justify-center flex-wrap">
                        <button type="button" aria-pressed={typeSelected === "All"} className={`portfolio-switch_border border-b max-[500px]:text-sm border-transparent cursor-pointer items-center ${typeSelected === "All" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("All")}>
                            All
                            <BsStarFill color='#850E35' className="mb-0.5" size={20}/>
                        </button>
                        <button type="button" aria-pressed={typeSelected === "Web"} className={`portfolio-switch_border border-b max-[500px]:text-sm border-transparent cursor-pointer items-center ${typeSelected === "Web" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("Web")}>
                            Web
                            <TbWorldBolt color='#850E35' size={20}/>
                        </button>
                        <button type="button" aria-pressed={typeSelected === "Mobile"} className={`portfolio-switch_border border-b max-[500px]:text-sm border-transparent cursor-pointer items-center ${typeSelected === "Mobile" ? "font-semibold border-black! after:hidden!" : "font-normal"} transition-all flex flex-row gap-1`} onClick={() => setTypeSelected("Mobile")}>
                            Mobile
                            <FaMobile color='#850E35' size={20}/>
                        </button>
                    </div>
                </div>

                <div className="h-full flex-1 overflow-x-hidden overflow-y-auto grid grid-cols-3 max-lg:grid-cols-2 max-sm:gap-4 gap-10 max-[500px]:grid-cols-1!">
                    {showWorks.map((item, idx) => (
                        <div key={idx} className="animate-fadeInRight group relative h-fit">
                            <div className="absolute group-hover:opacity-100 group-focus-within:opacity-100 opacity-0 transition-all ease-in-out flex items-center justify-center w-full h-full left-0 top-0" style={{background: "rgba(0,0,0,0.7)"}}>
                                <button 
                                    className="hover:bg-gray-300 cursor-pointer font-normal flex flex-row items-center justify-center group gap-1 bg-white px-4 py-2 shadow-lg shadow-gray-800"
                                    onClick={() => openSpecificProject(item)}
                                >
                                    <p className='text-base! font-normal!'>See details</p>
                                    <MdOpenInFull size={24} className="shadow-lg shadow-gray-400 bg-transparent group-hover:shadow-none ml-2"/>
                                </button>
                            </div>
                            <div className="shadow-lg shadow-gray-500 h-fit">
                                <div>
                                    <Image src={item.image} alt={item.title} className="size-full max-h-[250px] h-full object-cover"/>
                                </div>
                            </div>  
                            <div className="mt-2">
                                <h4 className="text-xl text-center font-normal">{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            {/* </div> */}

        </div>
    </div>
  )
}

export default AllPortfoliosModal