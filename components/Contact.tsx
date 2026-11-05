"use client"
import dynamic from 'next/dynamic'
import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import WordAnimation from './WordAnimation'
import Link from 'next/link'
import { CgArrowBottomLeft } from 'react-icons/cg'
import Image from 'next/image'
import { images } from '@/constants'

const ContactForm = dynamic(() => import('./ContactForm'), { ssr: false })

const Contact = () => {
  const [readMore, setReadMore] = useState<boolean>(true);
  const [shouldLoadForm, setShouldLoadForm] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = formContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadForm(true);
        observer.disconnect();
      }
    }, { rootMargin: "900px 0px" });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Memoize the read more toggle handler
  const toggleReadMore = useCallback(() => {
    setReadMore(prev => !prev);
  }, []);

  // Memoize the contact images to prevent re-renders
  const contactImages = useMemo(() => [
    {
      src: images.contactus1,
      alt: 'contact-us-1',
      className: 'absolute animate-heroImg -top-20 -right-32 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2',
      style: { background: "rgba(0,0,0,0.05)" }
    },
    {
      src: images.contactus2,
      alt: 'contact-us-2',
      className: 'absolute animate-heroImg top-0 -left-32 z-20 rounded-lg rotate-20 shadow-xl hover:translate-x-6 transition-all px-8 py-2',
      style: { background: "rgba(0,0,0,0.05)" }
    }
  ], []);

  return (
    <div className="relative my-20 max-md:my-10 w-screen before:hidden container mx-auto px-4" id='contact-me'>
      <div className="flex flex-row items-end justify-between max-lg:flex-col">
        <div className="max-lg:mr-auto">
          <div className="flex-row flex items-center gap-10 max-[443px]:gap-6 max-[422px]:gap-3">
            <div className="max-[410px]:hidden">
              <WordAnimation 
                text='02. Unleash it' 
                textClasses='uppercase font-black! max-[427px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'
              />
            </div>
            <div className="max-[410px]:block hidden">
              <WordAnimation 
                text='02.' 
                textClasses='uppercase font-black! max-[427px]:font-medium! text-lg! max-[768px]:text-base! max-[500px]:text-sm!'
              />
            </div>
            <div>
              <WordAnimation 
                text="Let's Connect" 
                textClasses='text-6xl! max-md:text-3xl! font-bold! uppercase' 
                spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all'
              />
            </div>
          </div>
          <div>
            <WordAnimation 
              text='and grow' 
              textClasses='text-6xl! max-md:text-3xl! font-light! uppercase' 
              spanTextClasses='hover:text-6xl! max-md:hover:text-4xl! transition-all [&:nth-child(2)]:font-bold! [&:nth-child(3)]:font-bold!' 
              stagger={0.6}
            />
          </div>
        </div>
        <div>
          <Link 
            aria-label='Request a Consultation'
            href={"#contact-form"} 
            className="flex group flex-row animate-fadeIn items-center gap-2 cursor-pointer word-element relative z-10"
          >
            <span className="text-xl font-bold text-black group-hover:text-2xl transition-all max-md:text-base">
              Request a Consultation.
            </span>
            <CgArrowBottomLeft size={30} className="border-2 group-hover:size-10 transition-all" />
          </Link>
        </div>
      </div>

      <div className="mt-10 max-md:mt-5 p-4 relative z-10 shadow-lg shadow-[rgba(0,0,0,0.15)] custom-shape before:skew-y-[-5deg]! before:skew-x-[-15deg]!">
        {contactImages.map((img, index) => (
          <div key={index} className={img.className} style={img.style}>
            <Image src={img.src} alt={img.alt} className="size-32" />
          </div>
        ))}
        <p className={`animate-fadeInRight text-base text-gray-600 ${readMore ? "max-md:line-clamp-3" : ""}`}>
          Have a product idea, a web or mobile platform to build, or an existing system that needs new features? Tell me what you&apos;re aiming for. I can help shape the technical approach and build the frontend, backend, and integrations to support it. Share your goals, timeline, and constraints in the form, and I&apos;ll follow up to discuss next steps.
        </p>
        <p className="mt-4 text-base text-gray-600">
          Want to build something fast? Try the{" "}
          <Link
            href="https://nismacloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#850E35] underline underline-offset-2"
          >
            NismaCloud Builder
          </Link>
          .
        </p>
        <button 
          onClick={toggleReadMore} 
          className="px-4 py-2 shadow-lg shadow-gray-300 max-md:block hidden"
        >
          {readMore ? "Read More" : "Read Less"}
        </button>
      </div>

      <div ref={formContainerRef} id="contact-form" className="min-h-[700px]" aria-busy={!shouldLoadForm}>
        {shouldLoadForm ? (
          <ContactForm />
        ) : (
          <div aria-hidden="true" className="mt-10 min-h-[700px] animate-pulse space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-24 rounded bg-gray-100" />
              <div className="h-24 rounded bg-gray-100" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="h-24 rounded bg-gray-100" />
              <div className="h-24 rounded bg-gray-100" />
            </div>
            <div className="h-36 rounded bg-gray-100" />
            <div className="h-40 rounded bg-gray-100" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Contact);