"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import SuccessModal from "./SuccesModal";

import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null); // State to store CAPTCHA value
  const [showCaptcha, setShowCaptcha] = useState(false); // State to control CAPTCHA visibility
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
    getValues, // To retrieve form values
  } = useForm();

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, rootMargin: "-100px" }); // Use 'rootMargin' instead of 'margin'

  // Define animation variants for CAPTCHA
  const captchaVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { opacity: 1, height: "auto", overflow: "visible" },
    exit: { opacity: 0, height: 0, overflow: "hidden" },
  };

  // Handler for CAPTCHA change
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      clearErrors("captcha");
      // Proceed to submit the form since CAPTCHA is verified
      onFinalSubmit(getValues(), value);
    }
  };

  // Final submission handler after CAPTCHA is verified
  const onFinalSubmit = async (data, captchaToken) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, captcha: captchaToken }), // Include CAPTCHA token
      });

      if (response.ok) {
        setIsModalOpen(true);
        reset();
        setCaptchaValue(null); // Reset CAPTCHA
        setShowCaptcha(false); // Hide CAPTCHA with animation
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  // Primary submission handler
  const onSubmit = (data) => {
    if (!showCaptcha) {
      // First submission attempt: Show CAPTCHA
      setShowCaptcha(true);
    } else {
      // If CAPTCHA is already shown but not verified
      if (!captchaValue) {
        setError("captcha", {
          type: "manual",
          message: "Please verify that you are not a robot.",
        });
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className='max-w-[1400px] w-full mx-auto px-10 py-24 gap-10 justify-center md:flex md:items-stretch'
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='md:flex-1 max-w-[460px] w-full'
      >
        <h2 className='text-5xl font-bold mb-4'>Contact us</h2>
        <p className='text-gray-600 mb-6'>
          Let us know if you have any questions!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='grid grid-cols-1 md:grid-cols-2 gap-4'
          >
            <div>
              <label htmlFor='firstName' className='block mb-1 text-gray-700'>
                First name
              </label>
              <input
                id='firstName'
                type='text'
                {...register("firstName", { required: true })}
                className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500' // Fixed class
              />
              {errors.firstName && (
                <span className='text-red-600'>First name is required</span>
              )}
            </div>
            <div>
              <label htmlFor='lastName' className='block mb-1 text-gray-700'>
                Last name
              </label>
              <input
                id='lastName'
                type='text'
                {...register("lastName", { required: true })}
                className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500' // Fixed class
              />
              {errors.lastName && (
                <span className='text-red-600'>Last name is required</span>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label htmlFor='email' className='block mb-1 text-gray-700'>
              Email address
            </label>
            <input
              id='email'
              type='email'
              {...register("email", { required: true })}
              className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500' // Fixed class
            />
            {errors.email && (
              <span className='text-red-600'>Email is required</span>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <label htmlFor='phone' className='block mb-1 text-gray-700'>
              Phone number
            </label>
            <input
              id='phone'
              type='tel'
              {...register("phone", { required: true })}
              className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
            {errors.phone && (
              <span className='text-red-600'>Phone number is required</span>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <label htmlFor='message' className='block mb-1 text-gray-700'>
              Your message
            </label>
            <textarea
              id='message'
              {...register("message", { required: true })}
              className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue-500' // Fixed class
              rows='4'
            ></textarea>
            {errors.message && (
              <span className='text-red-600'>Message is required</span>
            )}
          </motion.div>

          {/* CAPTCHA Section - Conditionally Rendered with Animation */}
          <AnimatePresence>
            {showCaptcha && (
              <motion.div
                key='captcha'
                variants={captchaVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ duration: 0.5 }}
                className='mt-4'
              >
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} // Ensure this is set correctly
                  onChange={handleCaptchaChange}
                  hl='en'
                />
                {errors.captcha && (
                  <span className='text-red-600'>{errors.captcha.message}</span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type='submit'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
            }}
            className='text-white bg-blue w-full px-6 py-2 md:px-6 md:py-3 mt-8 rounded-xl inline-block cursor-pointer'
          >
            Free consultation
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='hidden max-w-[380px] w-full md:block md:flex-1 md:ml-8 relative'
      >
        <Image
          src='/contact-1.webp'
          alt='Contact image'
          fill
          className='object-cover w-full h-full rounded-lg'
        />
      </motion.div>
      <SuccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
