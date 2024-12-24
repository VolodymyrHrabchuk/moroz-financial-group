// app/layout.js

import "./globals.css";

import { Nanum_Myeongjo } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ReactLenis } from "@/utils/lenis";
import "lenis/dist/lenis.css";
import Footer from "@/components/Footer";
import Template from "./template";
import Script from "next/script"; // Import the Script component
import StickyButton from "@/components/StickyButton";

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
    url: "https://www.morozfinancial.com/",
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
      {/* Keep your existing scripts */}
      <Script
        id='gtm-script'
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5M59KRDM');
          `,
        }}
      />
      <Script
        id='chatway'
        async='true'
        src='https://cdn.chatway.app/widget.js?id=MI0Yp1L5nm29'
      />

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-5M59KRDM'
            height='0'
            width='0'
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ReactLenis root>
          <Template>
            <Navbar />
            {children}
            <Footer />
          </Template>
        </ReactLenis>

        {/* StickyButton placed outside ReactLenis and Template */}
        <StickyButton />
      </body>
    </html>
  );
}
