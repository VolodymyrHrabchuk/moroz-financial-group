"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TeamValues = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className='py-12 md:py-24 bg-blue border-b-2'>
      <div className='max-w-[1400px] mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-around'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className='text-3xl sm:text-4xl md:text-5xl leading-snug text-white mb-6 md:mb-0 font-bold flex-1 md:mr-10'
        >
          Our Team Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-grey flex-1'
        >
          At the core of our team is a shared commitment to integrity,
          collaboration, and excellence. We believe in delivering transparent,
          accurate, and timely financial services that empower our clients to
          make informed decisions. Our team fosters a culture of continuous
          learning and innovation, ensuring that we stay ahead in an
          ever-evolving financial landscape. By working closely with our
          clients, we aim to build lasting relationships based on trust,
          professionalism, and a genuine desire to see them succeed. Your
          Success, Our Commitment.
        </motion.p>
      </div>
    </section>
  );
};

export default TeamValues;
