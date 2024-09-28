"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const accountants = [
  {
    name: "Dmitry Moroz",
    title: "CPA, 7 years of expertise",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant1.jpg", // Replace with your image paths
  },
  {
    name: "Mariya Labetska",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant2.jpg", // Replace with your image paths
  },
  {
    name: "Iosif Vardoev",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant3.jpg", // Replace with your image paths
  },
  {
    name: "Lidiia Danyliak",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant4.jpg", // Replace with your image paths
  },
  {
    name: "Olga Tiurenkova",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant5.jpg", // Replace with your image paths
  },
  {
    name: "Anastasiia Bondarenko",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant6.jpg", // Replace with your image paths
  },
  {
    name: "Assylbek Myrzagali",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant6.jpg", // Replace with your image paths
  },
  {
    name: "Elizaveta Zukhar",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant6.jpg", // Replace with your image paths
  },
  {
    name: "Michael Zukhar",
    title: "CPA",
    email: "email@example.com",
    phone: "123-456-7890",
    imgSrc: "/images/accountant6.jpg", // Replace with your image paths
  },
]

export default function Component() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Meet Your Accountants
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {accountants.map((accountant, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="w-40 h-40 relative mb-4">
              <Image
                src={accountant.imgSrc}
                alt={accountant.name}
                layout="fill"
                objectFit="cover"
                priority={index < 3} // Load the first row images with priority
              />
            </div>
            <h3 className="text-xl font-medium">{accountant.name}</h3>
            <p className="text-gray-500">{accountant.title}</p>
            <p className="text-gray-500">{accountant.email}</p>
            <p className="text-gray-500">{accountant.phone}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}