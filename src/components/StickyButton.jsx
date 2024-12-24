"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdPhone } from "react-icons/md";

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show button if we're not at the top and not at the bottom
      if (
        scrollPosition > windowHeight * 0.3 &&
        scrollPosition + windowHeight < documentHeight - 100
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const debouncedCheckScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkScroll, 10);
    };

    window.addEventListener("scroll", debouncedCheckScroll);
    checkScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", debouncedCheckScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <Link
      href='tel:+12245265170'
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white bg-blue px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg flex items-center justify-center uppercase transition-opacity duration-150 hover:bg-blue/70 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{
        maxWidth: "calc(100% - 2rem)",
        zIndex: 2147483647,
      }}
    >
      <MdPhone className='text-lg sm:text-xl mr-2' aria-hidden='true' />
      <span className='sr-only sm:not-sr-only sm:mr-2'>Call us now</span>
      <span className='text-sm sm:text-base font-bold whitespace-nowrap'>
        +1 (224) 526-5170
      </span>
    </Link>
  );
}

