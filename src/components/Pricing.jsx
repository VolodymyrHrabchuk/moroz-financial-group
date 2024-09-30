"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ContactForm from "./ContactForm";

// PricingCard Component
// function PricingCard({ title, price, priceNote, features }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       transition={{ duration: 0.5 }}
//       className='bg-white p-6 rounded-lg shadow-lg text-center'
//     >
//       <h3 className='text-xl font-semibold mb-4'>{title}</h3>
//       <p className='text-2xl font-bold'>{price}</p>
//       <p className='text-sm mb-4'>{priceNote}</p>
//       <ul className='text-gray-600'>
//         {features.map((feature, idx) => (
//           <motion.li
//             key={idx}
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: idx * 0.1 }}
//             className='mb-2'
//           >
//             {feature}
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }

// Tabs Component
// function Tabs({ plans, activeTab, setActiveTab }) {
//   return (
//     <div className='flex space-x-4 mb-8 bg-gray-100 py-3 px-4 rounded-xl'>
//       {plans.map((plan) => (
//         <motion.button
//           key={plan.tabName}
//           className={`px-4 py-2 rounded-md ${
//             activeTab === plan.tabName ? "bg-white" : "bg-transparent"
//           }`}
//           onClick={() => setActiveTab(plan.tabName)}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {plan.displayName}
//         </motion.button>
//       ))}
//     </div>
//   );
// }

export default function Pricing() {
  // const [activeTab, setActiveTab] = useState("oneTime");

  // Updated pricing data structure
  // const pricingData = [
  //   {
  //     tabName: "oneTime",
  //     displayName: "One-time Service",
  //     title: "Tax Planning And Preparation",
  //     cards: [
  //       {
  //         title: "Individual Tax Return",
  //         price: "$300",
  //         priceNote: "starting",
  //         features: ["Consultation", "Tax Filing", "Support", "Advice"],
  //       },
  //       {
  //         title: "Business Tax Return",
  //         price: "$500",
  //         priceNote: "starting",
  //         features: [
  //           "Business Consultation",
  //           "Tax Filing",
  //           "Audit Support",
  //           "Planning",
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     tabName: "monthly",
  //     displayName: "Monthly Plans",
  //     title: "Tax Planning And Preparation",
  //     cards: [
  //       {
  //         title: "Individual Plan",
  //         price: "$500",
  //         priceNote: "per month",
  //         features: [
  //           "Monthly Consultation",
  //           "Tax Optimization",
  //           "Priority Support",
  //           "Annual Review",
  //         ],
  //       },
  //       {
  //         title: "Business Plan",
  //         price: "$700",
  //         priceNote: "per month",
  //         features: [
  //           "Monthly Business Consultation",
  //           "Strategic Tax Planning",
  //           "Audit Assistance",
  //           "Quarterly Reviews",
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // Get the active plan data
  // const activePlan = pricingData.find((plan) => plan.tabName === activeTab);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='flex flex-col items-center p-8'
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='mb-14'
      >
        <h1 className='text-5xl leading-normal lg:leading-snug text-blue text-center font-bold md:text-4xl lg:text-6xl max-w-[800px] mx-auto'>
          Custom Pricing Tailored to Your Needs
        </h1>
        <p className='text-xl md:text-2xl text-grey text-center leading-snug mt-2 max-w-[1100px] mx-auto'>
          Every client is unique, and so are their financial situations.
          That&apos;s why we offer personalized pricing based on your specific
          needs and the complexity of your requirements.
          <br />
          Contact us today to learn more and receive a customized proposal.
        </p>
      </motion.div>
      <ContactForm />

      {/* Tabs */}
      {/* <Tabs
        plans={pricingData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      /> */}

      {/* Title */}
      {/* <motion.h2
        key={activePlan.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-4xl font-bold mb-8 text-center'
      >
        {activePlan.title}
      </motion.h2> */}

      {/* Pricing Cards */}
      {/* <AnimatePresence mode='wait'> */}
      {/* <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
        >
          {activePlan.cards.map((card, index) => (
            <PricingCard key={index} {...card} />
          ))}
        </motion.div> */}
      {/* </AnimatePresence> */}
    </motion.section>
  );
}
