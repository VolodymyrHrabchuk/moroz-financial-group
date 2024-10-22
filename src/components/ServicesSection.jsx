"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import AnimatedText from "@/app/utils/AnimatedText";

const services = [
  {
    title: "Individual Taxation",
    features: [
      "Personalized tax preparation",
      "Expertise in managing complex tax scenarios",
      "Advice on tax-efficient retirement planning",
      "Assistance with understanding and maximizing tax credits, deductions, and exemptions",
    ],
  },
  {
    title: "Corporate and Partnership Taxation",
    features: [
      "Preparation and filing of corporate and partnership tax returns",
      "Compliance with federal, state, and local tax regulations",
      "Guidance on mergers, acquisitions, and restructuring from a tax perspective",
    ],
  },
  {
    title: "Bookkeeping",
    features: [
      "Accurate tracking and categorization of all financial transactions",
      "Detailed reconciliation of accounts to ensure financial data accuracy.",
      "Preparation of detailed financial reports",
      "Maintenance of records for tax compliance and audit readiness",
    ],
  },
  {
    title: "Tax Resolution",
    features: [
      "Negotiation with the IRS and state tax authorities to settle outstanding tax debts",
      "Assistance with payment plans, offers in compromise, and penalty abatement",
      "Representation in tax disputes, including audit defense and appeals",
      "Resolution of tax liens and levies",
    ],
  },
  {
    title: "Audit Assistance",
    features: [
      "Preparation and organization of financial documents for audit reviews",
      "Representation during IRS or state tax audits",
      "Identifying potential audit risks and providing proactive solutions",
      "Assistance with audit procedures and negotiations to resolve audit issues efficiently",
    ],
  },
  {
    title: "Tax Planning & Strategy",
    features: [
      "Development of tax strategies to minimize liabilities and optimize deductions",
      "Long-term planning to manage taxes related to investments, estate planning,and business decisions",
      "Proactive analysis of changing tax laws to ensure compliance and take advantage of new opportunities",
      "Guidance on entity structuring and business operations to achieve tax efficiency",
    ],
  },
  {
    title: "Financial Consulting",
    features: [
      "Comprehensive financial analysis to assess business performance opportunities",
      "Strategies to optimize business profits and reduce liabilities",
      "Customized strategies for improving cash flow, reducing costs, and maximizing profits",
      "Risk assessment and financial forecasting to support informed decision-making",
      "Assistance with mergers, acquisitions, and capital structure optimization",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className='py-24'>
      <div className='max-w-[1400px] mx-auto px-4 text-center'>
        <AnimatedText>
          <h2 className='text-3xl sm:text-4xl md:text-5xl text-center leading-snug text-primary mb-6 font-bold'>
            Our Services
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className='mt-4 text-lg text-muted-foreground'>
            We take care of your tax and financial matters, allowing you to
            concentrate on what you do best. Learn our services and call to find
            out more.
          </p>
        </AnimatedText>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              service={service}
              index={index}
              className={
                index === services.length - 1
                  ? "lg:col-span-1 lg:col-start-2"
                  : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

const AnimatedCard = ({ service, index, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`px-6 py-12 border rounded-lg shadow-sm bg-card ${className}`}
    >
      <h3 className='text-xl font-semibold mb-6 text-primary'>
        {service.title}
      </h3>
      <ul className='text-left text-card-foreground'>
        {service.features.map((feature, i) => (
          <li key={i} className='mb-2 flex items-center'>
            <span className='w-1 h-1 rounded-full bg-blue flex-shrink-0 mt-1'></span>
            <span className='ml-3'>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
