"use client"; // Mark this as a client component

import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;

    if (!cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    const ease = 0.1; // Smoothing factor

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

    // Start the animation
    animate();

    // Attach the mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Add hover effects for specific elements
    const interactiveElements = document.querySelectorAll(".interactive");
    const linksElements = document.querySelectorAll(".link-element")

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
      id="cursor-dot"
      ref={cursorDotRef}
      style={{
        position: "fixed",
        width: "15px",
        height: "15px",
        backgroundColor: "black",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "all 0.2s ease-out", // Smooth transition for style changes
      }}
    />
  );
};

export default Cursor;