"use client"
import dynamic from "next/dynamic";

const LoadingPlaceholder = ({ label, className }: { label: string; className: string }) => (
  <div
    role="status"
    aria-label={label}
    aria-busy="true"
    className={`animate-pulse bg-gray-100 ${className}`}
  >
    <span className="sr-only">{label}</span>
  </div>
);

export const DynamicFullscreenImageModal = dynamic(() => import("@/components/FullscreenImageModal"), {
  ssr: false,
});

export const DynamicSlider = dynamic(() => import("@/components/Slider"), {
  ssr: false,
  loading: () => <LoadingPlaceholder label="Loading skills" className="h-[60px]" />,
});

export const DynamicPortfolioSlider = dynamic(() => import("@/components/PortfolioSlider"), {
  ssr: false,
  loading: () => <LoadingPlaceholder label="Loading projects" className="h-[60px]" />,
});

export const DynamicAbout = dynamic(() => import("@/components/About"), {
  ssr: false,
  loading: () => <LoadingPlaceholder label="Loading about section" className="h-[200px]" />,
});

export const DynamicContactForm = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <LoadingPlaceholder label="Loading contact form" className="h-[200px]" />,
});