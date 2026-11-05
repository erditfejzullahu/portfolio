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
                I&apos;m Erdit Fejzullahu, a full-stack software engineer who takes digital products from concept through launch and ongoing operation. I work across frontend, backend, and data to build reliable, maintainable software.
                <br /><br />
                I build with TypeScript and JavaScript across React, Next.js, Vue.js, React Native, and Expo. My backend work includes Node.js, Express.js, NestJS, .NET, PHP, and WordPress, with data and realtime systems such as PostgreSQL, SQL Server, MySQL, MongoDB, Redis, Firebase, Supabase, and Socket.IO.
                <br /><br />
                I build retrieval-augmented generation (RAG) systems with pgvector and OpenAI, and integrate large language models (LLMs) into useful web-product workflows.
                <br /><br />
                I take products through CI/CD with GitHub Actions and Python deployment tooling, package and deploy with Docker and Docker Swarm, then host and maintain them on bare-metal Linux servers with Cloudflare Tunnel for secure public access.
                <br /><br />
                My portfolio includes learning and community products, SaaS platforms, e-commerce, and fintech experiences. Explore the selected projects to see how I pair product thinking with hands-on engineering.
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