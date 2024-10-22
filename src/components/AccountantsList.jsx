"use client";

import React, { useRef } from "react";
import Image from "next/legacy/image";
import { motion, useInView } from "framer-motion";

const accountants = [
  {
    name: "Dmitry Moroz",
    title: "CPA Partner",
    email: "dmitrymoroz@morozfinancial.com",
    imgSrc: "/moroz.webp",
  },
  {
    name: "Mariya Labetska",
    title: "Senior Tax Analyst",
    email: "mariyalabetska@morozfinancial.com",
    imgSrc: "/labetska.webp",
  },
  {
    name: "Iosif Vardoev",
    title: "Tax Preparer",
    email: "iosifvardoev@morozfinancial.com",
    imgSrc: "/vardoev.webp",
  },
  {
    name: "Lidiia Danyliak",
    title: "Tax Preparer",
    email: "lidiiadanyliak@morozfinancial.com",
    imgSrc: "/danyliak.webp",
  },
  {
    name: "Olga Tiurenkova",
    title: "Financial Accountant",
    email: "olgatiurenkova@morozfinancial.com",
    imgSrc: "/tiurenkova.webp",
  },
  {
    name: "Anastasiia Bondarenko",
    title: "Tax Resolution Specialist",
    email: "anastasiiabondarenko@morozfinancial.com",
    imgSrc: "/bondarenko.webp",
  },
  {
    name: "Assylbek Myrzagali",
    title: "CPA",
    email: "assylbekmyrzagali@morozfinancial.com",
    imgSrc: "/myrzagali.webp",
  },
  {
    name: "Elizaveta Zukhar",
    title: "Secretary",
    email: "elizavetazukhar@morozfinancial.com",
    imgSrc: "/zukhar-l.webp",
  },
  {
    name: "Michael Zukhar",
    title: "Accountant Specialist",
    email: "michaelzukhar@morozfinancial.com",
    imgSrc: "/zukhar-m.webp",
  },
];

const AccountantsList = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className='container mx-auto px-4 pb-24'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className='text-3xl font-semibold text-center mb-16'
      >
        Meet Your Accountants
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {accountants.map((accountant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='flex flex-col items-center'
          >
            <div className='w-40 h-40 relative mb-4'>
              <Image
                src={accountant.imgSrc}
                alt={accountant.name}
                layout='fill'
                objectFit='cover'
                priority={index < 3}
              />
            </div>
            <h3 className='text-xl font-medium'>{accountant.name}</h3>
            <p className='text-gray-500'>{accountant.title}</p>
            <p className='text-gray-500'>{accountant.email}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AccountantsList;
