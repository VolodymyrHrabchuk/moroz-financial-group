"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/app/utils/AnimatedCounter";

const counters = [
  { value: 9, label: "Experienced accountants" },
  { value: 5000, suffix: "+", label: "Projects" },
  { value: 100, label: "Per Month" },
];

const CounterItem = ({ value, suffix, label, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <AnimatedCounter value={value} suffix={suffix} />
      <p className='text-xl font-medium'>{label}</p>
    </motion.div>
  );
};

export default function Component() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className='w-full bg-blue py-20 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center'
        >
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
