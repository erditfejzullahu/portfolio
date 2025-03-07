import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/Topbar";
import {Montserrat} from "next/font/google";
import SideProjects from "@/components/SideProjects";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <Topbar />
        <SideProjects />
        {children}
      </body>
    </html>
  );
}
