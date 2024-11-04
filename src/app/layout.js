// app/layout.js or app/layout.tsx

import "./globals.css";

import { Nanum_Myeongjo } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";
import Footer from "@/components/Footer";
import Template from "./template";

export const metadata = {
  title: {
    default: "Moroz Financial Group | Accounting & Tax Services",
    template: "%s | Accounting & Tax Services",
  },
  description:
    "High quality accounting and tax services, helping you solve your financial issues effortlessly.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moroz-financial-group.vercel.app/",
    title: "Moroz Financial Group | Accounting & Tax Services",
    description:
      "High quality accounting and tax services, helping you solve your financial issues effortlessly.",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Moroz Financial Group Full Team",
      },
    ],
    siteName: "Moroz Financial Group | Accounting & Tax Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moroz Financial Group",
    description:
      "High quality accounting and tax services, helping you solve your financial issues effortlessly.",
    images: ["/opengraph.jpg"],
  },
  other: {
    "og:logo": "/opengraph.jpg",
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
