"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const Template = ({ children }) => {
  const [isCurtainVisible, setIsCurtainVisible] = useState(true);

  useEffect(() => {
    // Hide the curtain after the animation completes
    const timer = setTimeout(() => {
      setIsCurtainVisible(false);
    }, 1500); // Adjust duration to match the curtain animation time
    return () => clearTimeout(timer);
  }, []);

  const curtainVariants = {
    initial: {
      y: "-100%", // Start above the screen
    },
    animate: {
      y: 0, // Move to fill the screen
    },
    exit: {
      y: "100%", // Exit by moving upwards
    },
  };

  return (
    <>
      <AnimatePresence>
        {isCurtainVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={curtainVariants}
            transition={{ ease: "easeInOut", duration: 1 }} // Adjust the duration as needed
            className='fixed top-0 left-0 w-screen h-screen bg-blue z-[9999] flex items-center justify-center'
          >
            <motion.img
              src='/logo.svg'
              alt='Logo'
              className='w-36 h-36 translate-y-3' // Adjust size as needed
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The page content after the curtain disappears */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }} // Delay to ensure it appears after the curtain
        className='min-h-screen'
      >
        {children}
      </motion.div>
    </>
  );
};

export default Template;
