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
