// components/ContactForm.jsx
"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SuccessModal from "./SuccesModal";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // To reset form fields after submission
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsModalOpen(true);
        reset(); // Reset the form fields
      } else {
        const errorData = await response.json();
        alert(`Failed to send message: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <section className='max-w-[1400px] w-full mx-auto px-10 py-24 gap-10 justify-center md:flex md:items-stretch'>
      <div className='md:flex-1 max-w-[460px] w-full'>
        <h2 className='text-5xl font-bold mb-4'>Contact us</h2>
        <p className='text-gray-600 mb-6'>
          Let us know if you have any questions!
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          {/* Form fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='firstName' className='block mb-1 text-gray-700'>
                First name
              </label>
              <input
                id='firstName'
                type='text'
                {...register("firstName", { required: true })}
                className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue'
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
                className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue'
              />
              {errors.lastName && (
                <span className='text-red-600'>Last name is required</span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor='email' className='block mb-1 text-gray-700'>
              Email address
            </label>
            <input
              id='email'
              type='email'
              {...register("email", { required: true })}
              className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue'
            />
            {errors.email && (
              <span className='text-red-600'>Email is required</span>
            )}
          </div>
          <div>
            <label htmlFor='message' className='block mb-1 text-gray-700'>
              Your message
            </label>
            <textarea
              id='message'
              {...register("message", { required: true })}
              className='w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-1 focus:ring-blue'
              rows='4'
            ></textarea>
            {errors.message && (
              <span className='text-red-600'>Message is required</span>
            )}
          </div>
          <motion.button
            type='submit'
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
            }}
            className='text-white bg-blue w-full px-6 py-2 md:px-6 md:py-3 mt-8 rounded-xl inline-block cursor-pointer'
          >
            Submit
          </motion.button>
        </form>
      </div>
      <div className='hidden max-w-[380px] w-full md:block md:flex-1 md:ml-8 relative'>
        <Image
          src='/contact-1.webp'
          alt='Contact image'
          fill
          className='object-cover w-full h-full rounded-lg'
        />
      </div>
      {/* Include the SuccessModal component */}
      <SuccessModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
};

export default ContactForm;
