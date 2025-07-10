"use client"
import dynamic from "next/dynamic";

export const DynamicFullscreenImageModal = dynamic(() => import ('@/components/FullscreenImageModal'), {ssr: false,   loading: () => <div className="h-[60px] bg-gray-100 animate-pulse" />})

export const DynamicSlider = dynamic(() => import ('@/components/Slider'), {ssr: false,   loading: () => <div className="h-[60px] bg-gray-100 animate-pulse" />})

export const DynamicPortfolioSlider = dynamic(() => import ('@/components/PortfolioSlider'), {ssr: false,   loading: () => <div className="h-[60px] bg-gray-100 animate-pulse" />})

export const DynamicAbout = dynamic(() => import ('@/components/About'), {ssr: false,   loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />})

export const DynamicContactForm = dynamic(() => import('@/components/Contact'), {ssr: false , loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />})