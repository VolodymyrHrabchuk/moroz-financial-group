// src/app/layout.js or src/pages/_app.js depending on your setup

import "./globals.css";

import { Nanum_Myeongjo } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";
import Footer from "@/components/Footer";
import Template from "./template";

export const metadata = {
  title: "Moroz Financial Group",
  description: "Your best financial services",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moroz-financial-group.vercel.app//', // Replace with your actual URL
    title: 'Moroz Financial Group',
    description: 'Your best financial services',
    images: [
      {
        url: '/fullteam.webp',
        width: 1200,
        height: 630,
        alt: 'Moroz Financial Group Full Team',
      },
    ],
    siteName: 'Moroz Financial Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moroz Financial Group',
    description: 'Your best financial services',
    images: ['/fullteam.webp'],
  },
};

const nanum = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nanum",
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={nanum.className}>
      <ReactLenis root>
        <body>
          <Template>
            <Navbar />
            {children}
            <Footer />
          </Template>
        </body>
      </ReactLenis>
    </html>
  );
}
