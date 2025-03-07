"use client"

import { images } from "@/constants"
import { links } from "@/data/navigations"
import Image from "next/image"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"

const Topbar = () => {
  return (
    <header className="shadow-lg shadow-blue-light">
        <nav className="topbar-bg h-20 relative overflow-hidden">
            <div className="mx-auto h-full px-6">
                <ul className="flex flex-row items-center justify-between relative z-20 h-full">
                <li>
                    <h2 className="text-2xl font-medium uppercase">Erdit Fejzullahu</h2>
                    {/* <Link href={"/"}>
                        <Image src={images.erditi} width={55} height={55} alt="erditi" className="rounded-full"/>
                    </Link> */}
                </li>
                <li className="cursor-pointer">
                    <RxHamburgerMenu className="size-8"/>
                </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Topbar