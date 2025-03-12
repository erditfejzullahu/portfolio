import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import PortfolioSlider from '@/components/PortfolioSlider'
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
    <section>
      <PortfolioSlider />
    </section>
    <section>
      <Contact />
    </section>
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default page