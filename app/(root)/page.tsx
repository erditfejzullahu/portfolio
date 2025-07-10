import { DynamicAbout, DynamicContactForm, DynamicFullscreenImageModal, DynamicPortfolioSlider, DynamicSlider } from '@/components/DynamicClientComponents'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollToTop from '@/components/ScrollToTop'
import React from 'react'

const page = async () => {
  return (
    <>
    <DynamicFullscreenImageModal />
    <section>
      <Hero />
    </section>
    <section>
      <DynamicSlider />
    </section>
    <section>
      <DynamicAbout />
    </section>
    <section>
      <DynamicPortfolioSlider />
    </section>
    <section>
      <DynamicContactForm />
    </section>
    <ScrollToTop />
    <Footer />
    </>
  )
}

export default page