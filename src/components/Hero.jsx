"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/app/utils/AnimatedText";

const phrases = ["Accounting Services With The Highest Quality"];
const Hero = () => {
  return (
    <section
      className='w-full bg-cover bg-center pt-40'
      style={{
        backgroundImage: `url('/hero-2.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "@media (max-width: 768px)": {
          backgroundImage: "url('/hero-mob.webp')",
        },
      }}
    >
      <div className='flex flex-col items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 mt-32 translate-y-[-140px]'>
        <AnimatedText>
          <h1 className='text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug text-white text-center font-bold md:text-6xl lg:text-7xl'>
            Your Success,<br></br>Our Commitment
          </h1>
        </AnimatedText>

        {phrases.map((phrase, index) => (
          <AnimatedText
            key={index}
            index={index + 1} // Increment index for delay
            className='text-xl md:text-2xl text-[#a7a7a7] text-center mt-2'
          >
            {phrase}
          </AnimatedText>
        ))}

        <Link href='/'>
          <AnimatedText className='w-full p-2'>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
              }}
              className='text-blue bg-white px-6 py-2 md:px-8 md:py-3 mt-8 rounded-xl inline-block cursor-pointer'
            >
              Contact Us
            </motion.div>
          </AnimatedText>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
