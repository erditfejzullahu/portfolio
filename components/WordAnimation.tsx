"use client"
import React, { useEffect, useRef, useMemo, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Register plugins once at module level
gsap.registerPlugin(ScrollTrigger);

interface WordAnimationProps {
  text: string;
  textClasses?: string;
  spanTextClasses?: string;
  stagger?: number;
  animationDelay?: number;
}

const WordAnimation = ({
  text, 
  textClasses = '', 
  spanTextClasses = '', 
  stagger = 0.2,
  animationDelay = 0
}: WordAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    // Memoize the words array to prevent unnecessary splits
    const words = useMemo(() => text.split(" "), [text]);

    const initAnimation = useCallback(() => {
      if (!containerRef.current) return;

      const wordElements = containerRef.current.children;

      // Clean up any existing animation
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.fromTo(
        wordElements,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: stagger,
          delay: animationDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
            // Better performance options
            markers: false,
            scrub: false,
            preventOverlaps: true
          }
        }
      );

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
          // ScrollTrigger.getById(animationRef.current.scrollTrigger?.id as string)?.kill();
        }
      };
    }, [stagger, animationDelay]);

    useEffect(() => {
      initAnimation();

      return () => {
        if (animationRef.current) {
          animationRef.current.kill();
          // ScrollTrigger.getById(animationRef.current.scrollTrigger?.id as string)?.kill();
        }
      };
    }, [initAnimation]);

    return (
      <div 
        ref={containerRef} 
        className={`flex flex-wrap gap-2 text-xl font-bold ${textClasses}`}
      >
        {words.map((word, index) => (
          <span 
            key={`${word}-${index}`} 
            className={`inline-flex opacity-0 word-element ${spanTextClasses}`}
            aria-hidden="true"
          >
            {word}
          </span>
        ))}
      </div>
    )
}

export default React.memo(WordAnimation);