"use client"
import { images } from '@/constants'
import Image from 'next/image'
import React, { memo, useState, useCallback } from 'react'

const AboutText = () => {
    const [readMore, setReadMore] = useState(false)
    
    const toggleReadMore = useCallback(() => {
        setReadMore(prev => !prev)
    }, [])

    return (
        <div className="relative z-10 p-4 mt-10 shadow-lg shadow-[rgba(0,0,0,0.15)] custom-shape max-md:mt-5">
            {/* Floating Image */}
            <div 
                className="absolute animate-heroImg -bottom-50 -right-30 z-20 px-8 py-2 transition-all rotate-20 shadow-xl hover:translate-x-6 rounded-lg" 
                style={{ background: "rgba(0,0,0,0.05)" }}
            >     
                <Image 
                    width={200} 
                    height={200} 
                    src={images.javascript2} 
                    alt='JavaScript illustration'
                    className="size-28"
                    priority={false} // Explicitly set priority
                />
            </div>

            {/* Content */}
            <p className={`animate-fadeInRight text-base text-gray-600 max-[400px]:text-sm ${readMore ? "max-md:line-clamp-5" : ""}`}>
                Senior Full-Stack Developer with extensive experience building high-performance web and mobile applications. I specialize in React, React Native, Next.js, Vue.js, .NET, PHP, Node.js/Express.js, Tailwind CSS, and WordPress, crafting scalable and efficient solutions for diverse industries.
                <br /><br />
                With a proven track record of delivering production-ready applications, I have developed and optimized platforms for Fintech, E-commerce, SaaS, Productivity, and Enterprise solutions. My passion lies in creating beautiful, fast, and user-friendly experiences while ensuring maintainability and performance.
                <br /><br />
                I have collaborated with startups, enterprises, and direct clients, helping them transform ideas into fully functional digital products. Whether it's mobile apps, web platforms, APIs, or full-stack solutions, I bring a strategic and hands-on approach to every project.
            </p>

            {/* Read More Button */}
            <button 
                onClick={toggleReadMore} 
                className="hidden px-4 py-2 shadow-lg shadow-gray-300 max-md:block"
                aria-expanded={readMore}
                aria-label={readMore ? "Show less content" : "Show more content"}
            >
                {readMore ? "Read Less" : "Read More"}
            </button>
        </div>
    )
}

export default memo(AboutText)