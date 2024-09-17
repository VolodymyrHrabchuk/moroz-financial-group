"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/app/utils/AnimatedCounter";

const Hero = () => {
  return (
    <section
      className='w-full bg-cover bg-center pt-40'
      style={{ backgroundImage: "url('/hero-1.jpg')" }}
    >
      <div className='flex flex-col items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 mt-32 translate-y-[-140px]'>
        <h1 className='text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug text-white text-center font-bold md:text-6xl lg:text-7xl'>
          Your Success,<br></br>Our Commitment
        </h1>
        <h3 className='text-xl md:text-2xl text-[#a7a7a7] text-center mt-2'>
          Some subheading describing your service
        </h3>

        <Link href='/'>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
            }}
            className='text-blue bg-white px-6 py-2 md:px-8 md:py-3 mt-8 rounded-xl inline-block cursor-pointer'
          >
            Learn More
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
