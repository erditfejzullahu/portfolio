import About from '@/components/About'
import Hero from '@/components/Hero'
import ScrollToTop from '@/components/ScrollToTop'
import Slider from '@/components/Slider'
import React from 'react'

const page = () => {
  return (
    <>
    <section>
      <Hero />
    </section>
    <section>
      <Slider />
    </section>
    <section>
      <About />
    </section>
    <ScrollToTop />
    </>
  )
}

export default page