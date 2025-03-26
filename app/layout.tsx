import type { Metadata, Viewport } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import {Montserrat} from "next/font/google";
import SideProjects from "@/components/SideProjects";
import Cursor from "@/components/Cursor";
import { Toaster } from "sonner";
import ClientProviderWrapper from "@/components/ClientProviderWrapper";

export const metadata: Metadata = {
  title: "Erdit Fejzullahu | Software Engineer",
  description: "Experienced software engineer specializing in building advanced applications and innovative technological solutions.",

  openGraph: {
    title: "Erdit Fejzullahu | Software Engineer",
    description: "Experienced software engineer specializing in building advanced applications and innovative technological solutions.",
    url: "https://erditfejzullahu.com", // Replace with your actual URL
    siteName: "Erdit Fejzullahu's Portfolio",
    images: [
      {
        url: "https://erditfejzullahu.com/images/erditi.webp", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Erdit Fejzullahu - Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image", // Use "summary" for smaller images
    title: "Erdit Fejzullahu | Software Engineer",
    description: "Experienced software engineer specializing in building advanced applications and innovative technological solutions.",
    images: "https://erditfejzullahu.com/images/erditi.webp", // Replace with your image URL
    // site: "@your_twitter_handle", // Replace with your actual Twitter handle
  },

  icons: {
    icon: "/favicon.ico", // Favicon URL (Replace with your actual path)
    apple: "/apple-touch-icon.png", // Apple touch icon (Replace with your actual path)
  },
  robots: "index, follow",
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const montserrat = Montserrat({subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
        cz-shortcut-listen="true"
      >
        <ClientProviderWrapper>
          {children}
        </ClientProviderWrapper>
      </body>
    </html>
  );
}
