"use client"

import { useEffect } from "react"

const SECTION_IDS = new Set(["skills", "about", "contact-me"])

const SectionHashCleanup = () => {
  useEffect(() => {
    let enteredSectionId: string | null = null

    const handleScroll = () => {
      const sectionId = window.location.hash.slice(1)
      if (!SECTION_IDS.has(sectionId)) {
        enteredSectionId = null
        return
      }

      const section = document.getElementById(sectionId)
      if (!section) return

      const bounds = section.getBoundingClientRect()
      const isInViewport = bounds.top < window.innerHeight && bounds.bottom > 0

      if (isInViewport) {
        enteredSectionId = sectionId
      } else if (enteredSectionId === sectionId) {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}`
        )
        enteredSectionId = null
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("hashchange", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("hashchange", handleScroll)
    }
  }, [])

  return null
}

export default SectionHashCleanup
