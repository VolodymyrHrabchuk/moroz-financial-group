"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  // Sample questions and answers
  const faqData = [
    {
      question: "What's the most frequently asked question?",
      answer:
        "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
    },
    {
      question: "How about a second one?",
      answer: "Here is the answer to the second question.",
    },
    {
      question: "And a third?",
      answer: "Here is the answer to the third question.",
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

  return (
    <section className='max-w-[1400px] mx-auto px-10 pt-40 pb-24'>
      <h1 className='text-5xl font-bold mb-8 mt-24 text-center md:text-left'>
        Frequently Asked Questions
      </h1>
      <div className='space-y-4'>
        {faqData.map((item, index) => (
          <div key={index}>
            <button
              className='flex justify-between items-center w-full p-4 focus:outline-none'
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
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
            </button>
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
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
