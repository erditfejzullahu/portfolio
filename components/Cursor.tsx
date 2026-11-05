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
    let frameId = 0;

    const animate = () => {
      dotX += (mouseX - dotX) * 0.85;
      dotY += (mouseY - dotY) * 0.85;
      cursorDot.style.left = `${dotX}px`;
      cursorDot.style.top = `${dotY}px`;

      if (Math.abs(mouseX - dotX) > 0.1 || Math.abs(mouseY - dotY) > 0.1) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = 0;
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const setDefaultStyle = () => {
      cursorDot.style.backgroundColor = "black";
      cursorDot.style.border = "none";
      cursorDot.style.boxShadow = "none";
    };

    const handlePointerMove = (event: PointerEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!frameId) frameId = requestAnimationFrame(animate);
    };

    const handlePointerOver = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(".interactive, .link-element, .word-element");
      if (!target) return;

      cursorDot.style.backgroundColor = "white";
      cursorDot.style.border = target.classList.contains("interactive")
        ? "2px solid white"
        : target.classList.contains("word-element")
          ? "1px solid white"
          : "none";
      cursorDot.style.boxShadow = target.classList.contains("word-element")
        ? "0 0 20px black"
        : "none";
    };

    const handlePointerOut = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest(".interactive, .link-element, .word-element");
      if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) {
        return;
      }
      setDefaultStyle();
    };

    const enableCursor = () => {
      if (!mediaQuery.matches) return;
      document.addEventListener("pointermove", handlePointerMove, { passive: true });
      document.addEventListener("pointerover", handlePointerOver);
      document.addEventListener("pointerout", handlePointerOut);
    };

    const disableCursor = () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      if (frameId) cancelAnimationFrame(frameId);
      frameId = 0;
      setDefaultStyle();
    };

    enableCursor();
    const handleMediaChange = () => {
      if (mediaQuery.matches) enableCursor();
      else disableCursor();
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", enableCursor);
      mediaQuery.removeEventListener("change", handleMediaChange);
      disableCursor();
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
        zIndex: 2147483647,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out, border 0.2s ease-out, box-shadow 0.2s ease-out",
      }}
    />
  );
};

export default Cursor;