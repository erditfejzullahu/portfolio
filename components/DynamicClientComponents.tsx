"use client"
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const FullscreenImageModal = dynamic(() => import("@/components/FullscreenImageModal"), {
  ssr: false,
});

export const DynamicFullscreenImageModal = () => {
  const isOpened = useSelector((state: RootState) => state.fullscreenImage.isOpened);
  return isOpened ? <FullscreenImageModal /> : null;
};

export const DynamicSlider = dynamic(() => import("@/components/Slider"));
export const DynamicPortfolioSlider = dynamic(() => import("@/components/PortfolioSlider"));
export const DynamicAbout = dynamic(() => import("@/components/About"));
export const DynamicContactForm = dynamic(() => import("@/components/Contact"));