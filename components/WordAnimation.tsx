"use client"
import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const WordAnimation = ({text, textClasses, spanTextClasses, stagger = 0.2}: {text: string, textClasses?: string, spanTextClasses?: string, stagger?: number}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if(containerRef.current){
        const words = containerRef.current.children;

        gsap.fromTo(
            words,
            {opacity: 0, y: 20},
            {
                opacity: 1,
                y: 0,
                duration: 0.3,
                stagger: stagger,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none"
                }
            }
        )
      }
    }, [text])
    

  return (
    <div ref={containerRef} className={`flex flex-wrap gap-2 text-xl font-bold ${textClasses}`}>
        {text.split(" ").map((word, index) => (
            <span key={index} className={`inline-flex opacity-0 word-element ${spanTextClasses}`}>{word}</span>
        ))}
    </div>
  )
}

export default WordAnimation