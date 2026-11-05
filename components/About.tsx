import React from 'react'
import WordAnimation from './WordAnimation'
import { CgArrowBottomLeft, CgPerformance } from 'react-icons/cg'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@/constants'
import { BsPersonWorkspace, BsRocketTakeoff } from 'react-icons/bs'
import { FaHandHoldingHeart } from 'react-icons/fa'
import AboutText from './AboutText'

const About = () => {
  return (
    <div className="relative my-20 max-md:my-10 w-screen before:hidden container mx-auto px-4 " id='about'>
      <div className="flex flex-row max-[575px]:flex-col justify-between items-end relative">
        <div className="absolute animate-heroImg -top-0 -left-20 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-4 py-1" style={{background: "rgba(0,0,0,0.05)"}}>     
            <Image src={images.javascript1} alt='about1' className="size-28 opacity-50"/>
        </div>
        <div className="max-[575px]:mr-auto">
          <div className="flex-row flex items-center gap-10 max-[380px]:gap-6 max-[355px]:gap-3">
            <div className="max-[324px]:hidden">
              <WordAnimation text='01. Who am i' textClasses='uppercase font-black! max-[380px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'/>
            </div>
            <div className="max-[324px]:block hidden">
              <WordAnimation text='01.' textClasses='uppercase font-black! max-[380px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'/>
            </div>
            <div>
              <WordAnimation text='About me' textClasses='text-6xl! max-md:text-3xl! font-bold! uppercase' spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all'/>
            </div>
          </div>
          <div>
            <WordAnimation text='and my work' textClasses='text-6xl! max-md:text-3xl! font-light! uppercase' spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all [&:nth-child(2)]:font-bold! [&:nth-child(3)]:font-bold!' stagger={0.6}/>
          </div>
        </div>
        <div>
          <Link aria-label='Explore my work' href={"#projects"} className="flex group flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element">
              <span className="text-xl max-md:text-base font-bold text-black group-hover:text-2xl transition-all">Explore my work.</span>
              <CgArrowBottomLeft size={30} className="border-2 group-hover:size-10 transition-all" />
          </Link>
        </div>
      </div>
      <h2 className="sr-only">Full-stack software engineering services</h2>
      <AboutText />

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 my-8">
        <div className="shadow-lg shadow-[rgba(0,0,0,0.15)] p-4">
          <h3 className="text-2xl max-md:text-xl font-normal text-black mb-1"><BsRocketTakeoff color='#850E35' className="float-left mr-2 mt-1" size={24}/> Web Product Development</h3>
          <p className="text-gray-600 max-[500px]:text-sm text-base">Build responsive web applications and product experiences with React, Next.js, Vue.js, or WordPress.</p>
        </div>
        <div className="shadow-lg shadow-[rgba(0,0,0,0.15)] p-4">
          <h3 className="text-2xl max-md:text-xl font-normal text-black mb-1"><BsPersonWorkspace color='#850E35' className="float-left mr-2 mt-1" size={24}/> Mobile App Development</h3>
          <p className="text-gray-600 max-[500px]:text-sm text-base">Create cross-platform mobile experiences with React Native and Expo, connected to the services your product needs.</p>
        </div>
        <div className="shadow-lg shadow-[rgba(0,0,0,0.15)] p-4">
          <h3 className="text-2xl max-md:text-xl font-normal text-black mb-1"><CgPerformance color='#850E35' className="float-left mr-2 mt-1" size={24}/> Backend & AI Integrations</h3>
          <p className="text-gray-600 max-[500px]:text-sm text-base">Build APIs and data integrations, RAG systems, and LLM-powered features for web products.</p>
        </div>
        <div className="shadow-lg shadow-[rgba(0,0,0,0.15)] p-4">
          <h3 className="text-2xl max-md:text-xl font-normal text-black mb-1"><FaHandHoldingHeart color='#850E35' className="float-left mr-2 mt-1" size={24}/> Delivery & Operations</h3>
          <p className="text-gray-600 max-[500px]:text-sm text-base">Ship with GitHub Actions CI/CD and Docker Swarm, then host and maintain live applications on bare-metal Linux servers.</p>
        </div>
      </div>
    </div>
  )
}

export default About