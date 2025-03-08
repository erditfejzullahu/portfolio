"use client"
import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const WordAnimation = ({text, textClasses, spanTextClasses}: {text: string, textClasses?: string, spanTextClasses?: string}) => {
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
                stagger: 0.2,
                ease: "power3.out"
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