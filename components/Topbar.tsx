"use client"

import { images } from "@/constants"
import { links } from "@/data/navigations"
import Image from "next/image"
import Link from "next/link"

const Topbar = () => {
  return (
    <header className="border-b border-blue-light">
        <nav className="bg-blue-dark h-20 relative overflow-hidden">
            <div className="topbar-bg" />
            <div className="container mx-auto h-full">
                <ul className="flex flex-row items-center justify-between relative z-20 h-full">
                {links.map((link) => (
                    (link.label === "Erdit Fejzullahu" ? (
                        <div key={link.label} className="shadow-xl shadow-blue-light rounded-full border-4 border-blue-light hover:scale-105 transition-all ease-in-out">
                            <Link href={link.url}>
                                <Image src={images.erditi} width={55} height={55} alt="erditi" className="rounded-full"/>
                            </Link>
                        </div>
                    ) : (
                        <li key={link.label} className="navbar-links transition-all relative"><Link href={link.url} className="text-white  font-semibold text-lg border-t-2 shadow-xl bg-dark border-b-2 border-blue-light px-4 py-1.5 rounded-xl shadow-blue-light">{link.label}</Link></li>
                    ))
                ))}
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Topbar