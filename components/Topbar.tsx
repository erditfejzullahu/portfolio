"use client"
import Hamburger from "hamburger-react"
import { useState } from "react"
import FullscreenMenu from "./FullscreenMenu"

const Topbar = () => {
    const [isOpened, setIsOpened] = useState(true)
    
  return (
    <header className="shadow-lg shadow-blue-light">
        <nav className="topbar-bg before:shadow-xl before:shadow-black h-20 relative overflow-hidden">
            <div className="mx-auto h-full px-6">
                <ul className="flex flex-row items-center justify-between relative z-20 h-full">
                <li>
                    <h2 className="text-2xl font-medium uppercase">Erdit Fejzullahu</h2>
                    {/* <Link href={"/"}>
                        <Image src={images.erditi} width={55} height={55} alt="erditi" className="rounded-full"/>
                    </Link> */}
                </li>
                <li className="cursor-pointer">
                    <Hamburger toggle={setIsOpened} toggled={isOpened} size={20}/>
                </li>
                </ul>
            </div>
        </nav>
        <FullscreenMenu isOpened={isOpened}/>
    </header>
  )
}

export default Topbar