"use client"
import Hamburger from "hamburger-react"
import { useState } from "react"
import FullscreenMenu from "./FullscreenMenu"

const Topbar = () => {
    const [isOpened, setIsOpened] = useState(false)
  return (
    <header className="shadow-lg shadow-blue-light">
        <nav className="topbar-bg before:shadow-xl before:shadow-black h-20 relative overflow-hidden">
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
        <FullscreenMenu isOpened={isOpened} sendAction={(close) => setIsOpened(close)}/>
    </header>
  )
}

export default Topbar