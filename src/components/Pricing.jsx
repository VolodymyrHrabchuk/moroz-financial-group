"use client";

import { useState } from "react";

// PricingCard Component
function PricingCard({ title, price, priceNote, features }) {
  return (
    <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
      <h3 className='text-xl font-semibold mb-4 '>{title}</h3>
      <p className='text-2xl font-bold'>{price}</p>
      <p className='text-sm mb-4'>{priceNote}</p>
      <ul className='text-gray-600'>
        {features.map((feature, idx) => (
          <li key={idx} className='mb-2'>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Tabs Component
function Tabs({ plans, activeTab, setActiveTab }) {
  return (
    <div className='flex space-x-4 mb-8 bg-gray-100 py-3 px-4 rounded-xl'>
      {plans.map((plan) => (
        <button
          key={plan.tabName}
          className={`px-4 py-2 rounded-md ${
            activeTab === plan.tabName ? "bg-white" : "bg-transparent"
          }`}
          onClick={() => setActiveTab(plan.tabName)}
        >
          {plan.displayName}
        </button>
      ))}
    </div>
  );
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("oneTime");

  // Updated pricing data structure
  const pricingData = [
    {
      tabName: "oneTime",
      displayName: "One-time Service",
      title: "Tax Planning And Preparation",
      cards: [
        {
          title: "Individual Tax Return",
          price: "$300",
          priceNote: "starting",
          features: ["Consultation", "Tax Filing", "Support", "Advice"],
        },
        {
          title: "Business Tax Return",
          price: "$500",
          priceNote: "starting",
          features: [
            "Business Consultation",
            "Tax Filing",
            "Audit Support",
            "Planning",
          ],
        },
        // Add more cards as needed
      ],
    },
    {
      tabName: "monthly",
      displayName: "Monthly Plans",
      title: "Tax Planning And Preparation",
      cards: [
        {
          title: "Individual Plan",
          price: "$500",
          priceNote: "per month",
          features: [
            "Monthly Consultation",
            "Tax Optimization",
            "Priority Support",
            "Annual Review",
          ],
        },
        {
          title: "Business Plan",
          price: "$700",
          priceNote: "per month",
          features: [
            "Monthly Business Consultation",
            "Strategic Tax Planning",
            "Audit Assistance",
            "Quarterly Reviews",
          ],
        },
        // Add more cards as needed
      ],
    },
    // Add more plans as needed
  ];

  // Get the active plan data
  const activePlan = pricingData.find((plan) => plan.tabName === activeTab);

  return (
    <section className='flex flex-col items-center p-8'>
      {/* Header */}
      <div className='mb-14'>
        <h1 className='text-5xl leading-snug text-blue text-center font-bold md:text-6xl lg:text-7xl'>
          Pricing
        </h1>
        <p className='text-xl md:text-2xl text-grey text-center mt-2'>
          You can choose between a one-time service or a convenient monthly
          plan.
        </p>
      </div>

      {/* Tabs */}
      <Tabs
        plans={pricingData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Title */}
      <h2 className='text-4xl font-bold mb-8 text-center'>{activePlan.title}</h2>

      {/* Pricing Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {activePlan.cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
}
