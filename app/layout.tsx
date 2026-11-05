import type { Metadata, Viewport } from "next";
import "./globals.css";
import {Montserrat} from "next/font/google";
import ClientProviderWrapper from "@/components/ClientProviderWrapper";
const siteUrl = "https://erditfejzullahu.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Erdit Fejzullahu | Full-Stack Engineer, AI & RAG",
  description:
    "Full-stack software engineer building web and mobile products, RAG and LLM integrations, APIs, and production deployments—from idea through ongoing operation.",
  applicationName: "Erdit Fejzullahu Portfolio",
  keywords: [
    "Erdit Fejzullahu",
    "full-stack software engineer",
    "full-stack developer",
    "web and mobile app development",
    "AI integration",
    "RAG systems",
    "retrieval-augmented generation",
    "LLM integration",
    "production deployment",
    "CI/CD",
    "Docker Swarm",
    "bare-metal hosting",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Node.js",
    "Express.js",
    "NestJS",
    ".NET",
    "Vue.js",
    "PostgreSQL",
    "pgvector",
    "OpenAI",
    "Docker",
    "GitHub Actions",
  ],
  authors: [{ name: "Erdit Fejzullahu", url: siteUrl }],
  creator: "Erdit Fejzullahu",
  publisher: "Erdit Fejzullahu",
  alternates: { canonical: "/" },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Erdit Fejzullahu | Full-Stack Engineer, AI & RAG",
    description:
      "Full-stack software engineer building web and mobile products, RAG and LLM integrations, APIs, and production deployments—from idea through ongoing operation.",
    siteName: "Erdit Fejzullahu Portfolio",
    images: [
      {
        url: `${siteUrl}/images/erditi.webp`,
        width: 768,
        height: 768,
        alt: "Erdit Fejzullahu, full-stack software engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Erdit Fejzullahu | Full-Stack Engineer, AI & RAG",
    description:
      "Full-stack software engineer building web and mobile products, RAG and LLM integrations, APIs, and production deployments—from idea through ongoing operation.",
    images: [`${siteUrl}/images/erditi.webp`],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Erdit Fejzullahu",
                  url: siteUrl,
                  image: `${siteUrl}/images/erditi.webp`,
                  jobTitle: "Full-Stack Software Engineer",
                  description:
                    "Full-stack software engineer building and operating web and mobile products, APIs, RAG systems, and LLM integrations from concept through production.",
                  sameAs: [
                    "https://www.linkedin.com/in/erdit-fejzullahu-210bab268",
                    "https://github.com/erditfejzullahu",
                  ],
                  knowsAbout: [
                    "Full-stack software development",
                    "Web application development",
                    "Mobile application development",
                    "Artificial intelligence integration",
                    "Retrieval-augmented generation (RAG)",
                    "Large language model (LLM) integrations",
                    "CI/CD and production deployments",
                    "Docker and Docker Swarm",
                    "Bare-metal Linux hosting and operations",
                    "React",
                    "Next.js",
                    "React Native",
                    "TypeScript",
                    "Node.js",
                    "Express.js",
                    "NestJS",
                    ".NET",
                    "Vue.js",
                    "PHP",
                    "PostgreSQL",
                    "pgvector",
                    "OpenAI",
                    "GitHub Actions",
                  ],
                },
                {
                  "@type": "WebSite",
                  name: "Erdit Fejzullahu Portfolio",
                  url: siteUrl,
                },
              ],
            }),
          }}
        />
        <ClientProviderWrapper>
          {children}
        </ClientProviderWrapper>
      </body>
    </html>
  );
}
