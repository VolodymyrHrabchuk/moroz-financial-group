"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TeamWhoWeAre = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className='py-12 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-around'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className='text-3xl sm:text-4xl md:text-7xl leading-snug text-blue mb-6 md:mb-0 font-bold flex-1 md:mr-10'
        >
          Who we are?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-grey flex-1'
        >
          We are a dedicated team of experienced accountants, financial
          advisors, and business consultants committed to helping businesses and
          individuals navigate their financial goals with confidence. With a
          strong foundation in tax preparation, bookkeeping, and financial
          planning, we provide personalized solutions tailored to your unique
          needs. Our firm prides itself on accuracy, reliability, and a
          client-first approach, ensuring that your financial success is always
          our top priority.
        </motion.p>
      </div>
    </section>
  );
};

export default TeamWhoWeAre;
