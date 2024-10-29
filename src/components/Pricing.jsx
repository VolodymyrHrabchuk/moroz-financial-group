"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const priceSections = [
  {
    title: "Business Income Tax",
    subtitle: "Pricing is based on  level of complexity",
    items: [
      {
        range: "Simple (basic operations, solo-owner)",
        price: "$500 - $1,000",
      },
      {
        range: (
          <>
            Moderate Complexity <br />
            (assets, liabilities, and multiple employees)
          </>
        ),
        price: "$1,200 - $2,500",
      },
      {
        range: (
          <>
            Complex <br /> (multiple shareholders, large revenues, multi-state,
            asset sales)
          </>
        ),
        price: "$2,500 - $4,000+",
      },
    ],
    itemKeyName: "range",
  },
  {
    title: "Personal Income Tax",
    subtitle:
      "All prices start from listed below, varying by service and complexity",
    items: [
      { item: "Base Price", price: "$300" },
      { item: "Schedule A", price: "$100 - 200" },
      { item: "Schedule B", price: "$50 - 150" },
      { item: "Schedule C", price: "$200" },
      { item: "Schedule D", price: "$50 - 300" },
      { item: "Schedule E Rentals", price: "$150 / each" },
      { item: "Schedule K - 1", price: "$25 - 50 / each" },
      { item: "Additional Forms", price: "$50 - 100 / each" },
      { item: "Additional State", price: "$50 / each" },
    ],
    itemKeyName: "item",
  },
  {
    title: "Bookkeeping services",
    subtitle: "Pricing is based on number of transactions and accounts",
    items: [
      { item: "Monthly", price: "$Variable" },
      { item: "Quarterly", price: "$Variable" },
      { item: "Annually", price: "$Variable" },
    ],
    itemKeyName: "item",
  },
  {
    title: "Legal Services",
    items: [
      { service: "Business Registration", price: "$600" },
      { service: "Annual Report Filing", price: "$150" },
      { service: "Change of Address", price: "$50" },
      { service: "General Consultation", price: "$250" },
      { service: "2553 S-Election", price: "$150" },
    ],
    itemKeyName: "service",
  },
  {
    title: "Payroll Services",
    items: [
      { employees: "1 Employee", price: "$300 / Quarter" },
      { employees: "2-5 Employees", price: "$450 / Quarter" },
      { employees: "5-10 Employees", price: "$750 / Quarter" },
    ],
    itemKeyName: "employees",
  },
  {
    title: "Tax Planning",
    items: [{ service: "Tax Strategy Consultation", price: "$300 / Hour" }],
    itemKeyName: "service",
  },
  {
    title: "Tax Resolutions",
    items: [
      { service: "Audit Representation", price: "Starting at $3,000" },
      { service: "Penalty Abatement", price: "% 20 from Penalty Amount" },
    ],
    itemKeyName: "service",
  },
];

const formatPrice = (price) => {
  if (price.includes("-")) {
    const [start, end] = price.split("-").map((p) => p.trim());
    return (
      <span className='flex flex-col lg:flex-row lg:items-center'>
        <span>{start}</span>
        <span className=' lg:inline mx-1'>-</span>
        <span>{end}</span>
      </span>
    );
  }
  return price;
};

const PriceSection = ({ title, subtitle, items, itemKeyName }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className='mb-12'
    >
      <h2 className='text-3xl font-normal text-center mb-2 relative'>
        <span className='px-4 bg-white relative z-10 text-xl lg:text-4xl'>
          {title}
        </span>
        <div className='absolute w-full h-px bg-gray-300 top-1/2 left-0 -z-10'></div>
      </h2>
      {subtitle && (
        <p className='text-sm lg:text-md font-normal text-center mb-6'>
          {subtitle}
        </p>
      )}
      <div className='space-y-2'>
        {items.map((item, index) => (
          <div
            key={index}
            className='flex pt-2 justify-between items-start md:items-center'
          >
            <span className='text-sm lg:text-xl max-w-[70%]'>
              {item[itemKeyName]}
            </span>
            <span className='text-sm lg:text-xl text-right'>
              {formatPrice(item.price)}
            </span>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

const PriceSectons = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
      {priceSections.map((section, index) => (
        <PriceSection key={index} {...section} />
      ))}
    </div>
  );
};
export default PriceSectons;
