"use client"; // Mark this as a client component

import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1025
  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    
    if (!cursorDot) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    const ease = 0.5; // Smoothing factor
    
    const animate = () => {
      const dx = mouseX - dotX;
      const dy = mouseY - dotY;
      
      dotX += dx * ease;
      dotY += dy * ease;
      
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;
      
      requestAnimationFrame(animate);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    if(windowWidth < 1024) return;
    // Start the animation
    animate();
    
    // Attach the mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);
    
    // Add hover effects for specific elements
    const interactiveElements = document.querySelectorAll(".interactive");
    const linksElements = document.querySelectorAll(".link-element")
    const wordElements = document.querySelectorAll(".word-element")

    wordElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          if (cursorDot) {
            cursorDot.style.width = "15px"; // Increase size
            cursorDot.style.height = "15px";
            cursorDot.style.backgroundColor = "#fff";
            cursorDot.style.border = "1px solid #fff";
            cursorDot.style.boxShadow = "0 0 20px #000"
            cursorDot.style.zIndex = "0"
            // cursorDot.style.border = "2px solid black"; // Add border
          }
        });
  
        element.addEventListener("mouseleave", () => {
          if (cursorDot) {
            cursorDot.style.width = "15px"; // Reset size
            cursorDot.style.height = "15px";
            cursorDot.style.backgroundColor = "black"; // Reset color
            cursorDot.style.border = "none"; // Remove border
            cursorDot.style.boxShadow = "none";
            cursorDot.style.zIndex = "200"
          }
        });
      });

    linksElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
          if (cursorDot) {
            cursorDot.style.width = "15px"; // Increase size
            cursorDot.style.height = "15px";
            cursorDot.style.backgroundColor = "#850E35"; // Change color
            // cursorDot.style.border = "2px solid black"; // Add border
          }
        });
  
        element.addEventListener("mouseleave", () => {
          if (cursorDot) {
            cursorDot.style.width = "15px"; // Reset size
            cursorDot.style.height = "15px";
            cursorDot.style.backgroundColor = "black"; // Reset color
            cursorDot.style.border = "none"; // Remove border
          }
        });
      });

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        if (cursorDot) {
          cursorDot.style.width = "15px"; // Increase size
          cursorDot.style.height = "15px";
          cursorDot.style.backgroundColor = "white"; // Change color
          cursorDot.style.border = "2px solid white"; // Add border
        }
      });

      element.addEventListener("mouseleave", () => {
        if (cursorDot) {
          cursorDot.style.width = "15px"; // Reset size
          cursorDot.style.height = "15px";
          cursorDot.style.backgroundColor = "black"; // Reset color
          cursorDot.style.border = "none"; // Remove border
        }
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", () => {});
        element.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      className="max-[768px]:hidden!"
      id="cursor-dot"
      ref={cursorDotRef}
      style={{
        position: "fixed",
        width: "15px",
        height: "15px",
        backgroundColor: "black",
        borderRadius: "50%",
        zIndex: 999,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "all 0.2s ease-out", // Smooth transition for style changes
      }}
    />
  );
};

export default Cursor;