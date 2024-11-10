"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const taxEvents = {
  15: [
    { month: "January", text: "Q4 Estimate Tax Payments" },
    { month: "March", text: "S-Corp and Partnership Tax Return Filings" },
    {
      month: "April",
      text: "Personal Tax Return Filings \n Q1 Estimate Tax Payments",
    },
    { month: "June", text: "Q2 Estimate Tax Payments" },
    {
      month: "September",
      text: "Business Extension Tax Returns \n Q3 Estimate Tax Payments",
    },
    { month: "October", text: "Personal Extensions Tax Returns" },
  ],
  30: [{ month: "April", text: "Q1 Form 941" }],
  31: [
    { month: "January", text: "1099/1096 - W2/W3 \n Q4 Form 941 Filings" },
    { month: "July", text: "Q2 Form 941" },
    { month: "October", text: "Q3 Form 941" },
  ],
};

const highlightedDates = [15, 31, 30];

export default function TaxCalendar() {
  const [activeDate, setActiveDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  useEffect(() => {
    document.title = `${months[currentMonth]} Tax Calendar | Moroz Financial Group`;
  }, [currentMonth]);

  const handleDateInteraction = (date) => {
    if (highlightedDates.includes(date)) {
      setActiveDate(activeDate === date ? null : date);
    }
  };

  const getEventsForDay = (day) => {
    return (
      taxEvents[day]?.filter((event) => event.month === months[currentMonth]) ||
      []
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      const isHighlighted = highlightedDates.includes(i);
      const events = getEventsForDay(i);

      days.push(
        <motion.div
          key={i}
          className={`relative aspect-square flex items-center justify-center rounded-lg cursor-pointer ${
            isHighlighted && events.length > 0
              ? "border-2 border-blue-300"
              : "bg-white"
          } ${
            isHighlighted && (activeDate === i || hoveredDate === i)
              ? "bg-blue text-white"
              : ""
          }`}
          onMouseEnter={() => setHoveredDate(i)}
          onMouseLeave={() => setHoveredDate(null)}
          onClick={() => handleDateInteraction(i)}
          style={{ fontSize: "0.8rem", padding: "0.5rem" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <span>{i}</span>

          <AnimatePresence>
            {isHighlighted &&
              (activeDate === i || hoveredDate === i) &&
              events.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className='absolute bottom-full left-1/2 transform -translate-x-1/2 z-20 bg-white p-4 rounded-lg shadow-xl text-black text-sm sm:text-base w-64 sm:w-80'
                >
                  {events.map((event, index) => (
                    <div key={index} className='mb-2'>
                      <p className='font-bold'>
                        {event.month} {i}
                      </p>
                      {event.text.split("\n").map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  ))}
                </motion.div>
              )}
          </AnimatePresence>
        </motion.div>
      );
    }
    return days;
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth((prevMonth) => {
      if (direction === "next") {
        return (prevMonth + 1) % 12;
      } else {
        return (prevMonth - 1 + 12) % 12;
      }
    });
    setActiveDate(null);
    setHoveredDate(null);
  };

  return (
    <main className='max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8 py-40 sm:py-15 mt-16'>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-5xl text-left sm:text-center font-bold leading-snug text-blue mb-5 sm:mb-10'
      >
        Tax Calendar
      </motion.h1>

      <div className='flex justify-between items-center mb-6'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleMonthChange("prev")}
          className='text-sm bg-gray-300 hover:bg-gray-500 text-black font-bold py-1 px-3 rounded'
        >
          Previous
        </motion.button>
        <h2 className='text-xl sm:text-2xl font-bold text-blue mb-4'>
          {months[currentMonth]}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleMonthChange("next")}
          className='text-sm bg-gray-300 hover:bg-gray-500 text-black font-bold py-1 px-3 rounded'
        >
          Next
        </motion.button>
      </div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            opacity: 0,
            y: 50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
        }}
        className='grid grid-cols-7 gap-1 mb-2'
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <motion.div
            key={day}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className='text-center font-bold text-sm'
          >
            {day}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
        }}
        className='grid grid-cols-7 gap-1'
      >
        {renderCalendarDays()}
      </motion.div>
    </main>
  );
}
