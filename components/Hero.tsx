import React from 'react'
import WordAnimation from './WordAnimation'
import Image from 'next/image'
import { images } from '@/constants'
import { BsArrowDown } from 'react-icons/bs'
import { CgArrowBottomRight } from 'react-icons/cg'
import Link from 'next/link'
import ScrollMouse from './ScrollMouse'


const Hero = () => {

  return (
    <>
    <div className="h-[calc(100vh-80px)] max-lg:h-full w-screen border-black flex items-center justify-center relative" id='hero'>
    <ScrollMouse />
        <div className="container h-full mx-auto flex max-lg:gap-12 max-lg:flex-col-reverse p-4 flex-row gap-10 items-center justify-center relative">
            <div className="flex-1">
                <div className="flex items-end justify-end">
                    <WordAnimation text='Software Engineer' textClasses='text-2xl! xl:text-2xl! max-[400px]:text-lg! font-black max-' stagger={1}/>
                </div>
                <WordAnimation 
                    text='I specialize in crafting sophisticated web and mobile applications, delivering cutting-edge, user-centric solutions tailored to elevate your digital experience.' 
                    textClasses="text-3xl! lg:text-3xl! xl:text-4xl! max-[600px]:text-2xl! max-[400px]:text-xl! max-[300px]:text-base!  font-normal! transition-all!"
                    spanTextClasses='hover:text-5xl! transition-all! max-[400px]:max-h-[18px]!'
                    />
                <div className="flex flex-row justify-between items-end flex-wrap max-sm:gap-6">
                    <WordAnimation text='Mobile Dev.' textClasses='text-2xl! xl:text-6xl! lg:text-4xl! max-lg:text-3xl! max-[400px]:text-xl! max-[400px]:mt-4!' stagger={1.5}/>
                    <Link aria-label='Scroll to Contact' href={"#contact-me"} className="flex group max-[384px]:ml-auto flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element">
                        <span className="text-xl font-bold text-black max-md:text-base flex group-hover:text-2xl transition-all max-sm:mr-auto">Get in touch.</span>
                        <CgArrowBottomRight size={30} className="border-2 group-hover:size-10 transition-all" />
                    </Link>
                </div>

                <div className="mt-10 flex flex-row max-[360px]:flex-col-reverse gap-1 relative ml-auto text-right max-w-lg animate-fadeIn duration-1000">
                    <div className="-ml-1">
                        <Link aria-label='Scroll to Skills' href='#skills' className="max-[360px]:w-full max-[360px]:flex max-[360px]:justify-center max-[360px]:py-3 border inline-block border-black rounded-2xl py-6 px-2 cursor-pointer word-element">
                            <BsArrowDown size={30}/>
                        </Link>
                    </div>
                    <span className="text-sm font-medium text-gray-600 word-element">I've completed multiple projects using Next.js, .NET, React Native Vue.js and other latest modern frameworks, building scalable web apps, mobile apps, and full-stack solutions.</span>
                </div>
                <div className=" bottom-0 left-4 my-10 max-[500px]:my-6 max-[360px]:my-4">
                    <h2 className="text-black font-semibold text-xl">Email</h2>
                    <Link aria-label='Email me' className="text-black font-normal link-element" href="mailto:erditfejzullahu45@gmail.com">erditfejzullahu45@gmail.com</Link>
                </div>
            </div>
            <div className="flex-[0.8] max-sm:flex-none relative h-fit rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.2)]" style={{background: "rgba(0,0,0,0.05)"}}>
                <div className="absolute animate-heroImg top-0 left-0 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.broCoding} alt='web developer' className="size-28"/>
                </div>
                <div className="absolute animate-heroImg -bottom-6 -right-6 z-20 rounded-lg -rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.broMobCoding} alt='web developer' className="size-28"/>
                </div>

                <div className="absolute animate-heroImg -bottom-12 -left-12 z-20 rounded-lg -rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.seoHero} alt='web developer' className="size-28"/>
                </div>
                <div className="absolute animate-heroImg -top-6 -right-12 z-20 rounded-lg -rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2" style={{background: "rgba(0,0,0,0.05)"}}>     
                    <Image src={images.maintenance} alt='web developer' className="size-28"/>
                </div>
                <Image src={images.erditi} priority={true} fetchPriority="high" className="object-cover object-center saturate-10 max-h-[500px] max-lg:max-h-[400px] max-lg:object-[100%_30%]! max-md:max-h-[300px] max-sm:max-h-[300px] max-sm:object-[20%_40%]! max-[300px]:object-center! rounded-lg shadow-[2px_2px_10px_rgba(0,0,0,0.4)]  -skew-5" alt='erditi'/>
            </div>

        </div>
    </div>
    </>
  )
}

export default Hero