"use client"

import { useEffect, useRef } from "react";

interface WordAnimationProps {
  text: string;
  textClasses?: string;
  spanTextClasses?: string;
  stagger?: number;
  animationDelay?: number;
}

const WordAnimation = ({
  text,
  textClasses = "",
  spanTextClasses = "",
  stagger = 0.2,
  animationDelay = 0,
}: WordAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        container.classList.add("is-visible");
        observer.disconnect();
      }
    }, { rootMargin: "0px 0px -5% 0px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`word-animation flex flex-wrap gap-2 text-xl font-bold ${textClasses}`}>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={`inline-flex word-element ${spanTextClasses}`}
          style={{ transitionDelay: `${animationDelay + index * stagger}s` }}
          aria-hidden="true"
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;
