"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a full range of accounting and financial services, including individual and corporate tax preparation, bookkeeping, financial consulting, audit assistance, tax resolution, and tax planning strategies.",
    },
    {
      question: "How do I know if I need a CPA?",
      answer:
        "If you're a business owner, independent contractor, or individual with complex financial situations (like investments, rental properties, or multiple income streams), a CPA can help you navigate tax laws, ensure compliance, and plan for future financial success.",
    },
    {
      question:
        "What’s the difference between tax preparation and tax planning?",
      answer:
        "Tax preparation involves preparing and filing your taxes for the previous year, while tax planning is a proactive approach to minimize your tax burden and maximize deductions for future filings, helping you make strategic financial decisions year-round.",
    },
    {
      question: "Can you help me with IRS problems?",
      answer:
        "Yes, we specialize in tax resolution services, including negotiating with the IRS on your behalf, handling audits, and resolving issues like tax debts, liens, and wage garnishments.",
    },
    {
      question: "Do you offer virtual consultations and services?",
      answer:
        "Yes, we offer virtual consultations and provide services to accommodate your busy schedule. Our team can assist you remotely, ensuring you get the same quality of service without needing to visit our office.",
    },
    {
      question: "What should I bring to my initial consultation?",
      answer:
        "For an individual, bring your previous tax returns, income statements, and any relevant documents related to investments, assets, or deductions. Businesses should provide financial statements, bank records, and prior-year tax returns. We'll guide you on what specific documents are needed based on your situation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Our pricing is based on the complexity of the services required. We offer competitive rates and provide a detailed estimate before starting any work. Contact us for a personalized quote.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for the accordion content
  const contentVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the toggle icon
  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  // Animation variants for the FAQ item container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='max-w-[1400px] mx-auto px-10 pt-40 pb-24'
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='text-5xl font-bold mb-8 mt-24 text-center md:text-left'
      >
        Frequently Asked Questions
      </motion.h1>
      <div className='space-y-4'>
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            custom={index}
          >
            <motion.button
              className='flex justify-between items-center w-full p-4 focus:outline-none'
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              <h3 className='text-xl font-medium text-left'>{item.question}</h3>
              <motion.span
                className='text-2xl'
                variants={iconVariants}
                animate={openIndex === index ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              >
                +
              </motion.span>
            </motion.button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-${index}`}
                  className='overflow-hidden text-gray-500 px-4'
                  variants={contentVariants}
                  initial='closed'
                  animate='open'
                  exit='closed'
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className='py-4'
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQ;
