import React from 'react'
import WordAnimation from './WordAnimation'
import { CgArrowBottomLeft } from 'react-icons/cg'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@/constants'

const About = () => {
  return (
    <div className="relative w-screen before:hidden container mx-auto px-4 " id='about'>
      <div className="mt-20 flex flex-row justify-between items-end relative">
        <div className="absolute animate-heroImg -top-0 -left-20 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-4 py-1" style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.javascript1} alt='about1' className="size-28 opacity-50"/>
        </div>
        <div>
          <div className="flex-row flex items-center gap-10">
            <div>
              <WordAnimation text='01. Who am i' textClasses='uppercase font-black! text-lg!'/>
            </div>
            <div>
              <WordAnimation text='About me' textClasses='text-6xl! font-bold! uppercase' spanTextClasses='hover:text-6xl! transition-all'/>
            </div>
          </div>
          <div>
            <WordAnimation text='and my work' textClasses='text-6xl! font-light! uppercase' spanTextClasses='hover:text-6xl! transition-all [&:nth-child(2)]:font-bold! [&:nth-child(3)]:font-bold!' stagger={0.6}/>
          </div>
        </div>
        <div>
          <Link href={"#projects"} className="flex group flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element">
              <span className="text-xl font-bold text-black group-hover:text-2xl transition-all">Get in touch.</span>
              <CgArrowBottomLeft size={30} className="border-2 group-hover:size-10 transition-all" />
          </Link>
        </div>
      </div>
      <div className="mt-10  p-4 relative z-10 shadow-lg shadow-[rgba(0,0,0,0.15)] rounded-lg custom-shape">
        <div className="absolute animate-heroImg -bottom-50 -right-30 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.javascript2} alt='about2' className="size-28"/>
        </div>
        <p className="animate-fadeInRight text-base">Senior Full-Stack Developer with extensive experience building high-performance web and mobile applications. I specialize in React, React Native, Next.js, Vue.js, .NET, PHP, Node.js/Express.js, Tailwind CSS, and WordPress, crafting scalable and efficient solutions for diverse industries.
<br /><br />
With a proven track record of delivering production-ready applications, I have developed and optimized platforms for Fintech, E-commerce, SaaS, Productivity, and Enterprise solutions. My passion lies in creating beautiful, fast, and user-friendly experiences while ensuring maintainability and performance.
<br /><br />
I have collaborated with startups, enterprises, and direct clients, helping them transform ideas into fully functional digital products. Whether it's mobile apps, web platforms, APIs, or full-stack solutions, I bring a strategic and hands-on approach to every project.</p>
      </div>
    </div>
  )
}

export default About