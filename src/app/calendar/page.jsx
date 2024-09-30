"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const taxEvents = {
  15: [
    { month: "Jan", text: "Q4 Estimate Tax Payments" },
    { month: "Apr", text: "Personal Tax Return Filings - Q1 Estimate Tax Payments" },
    { month: "Jun", text: "Q2 Estimate Tax Payments" },
    { month: "Sep", text: "Business Extension Tax Returns - Q3 Estimate Tax Payments" },
  ],
  31: [
    { month: "Jan", text: "1099/1096 - W2/W3 - Q4 Form 941 Filings" },
    { month: "Jul", text: "Q2 Form 941" },
    { month: "Oct", text: "Q3 Form 941" },
  ],
  30: [{ month: "Apr", text: "Q1 Form 941" }],
  15: [
    { month: "Mar", text: "S-Corp and Partnership Tax Return Filings" },
    { month: "Oct", text: "Personal Extensions Tax Returns" },
  ],
};

const highlightedDates = [15, 31, 30];

export default function TaxCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleDateInteraction = (date) => {
    if (highlightedDates.includes(date)) {
      setSelectedDate(selectedDate === date ? null : date);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      const isHighlighted = highlightedDates.includes(i);
      days.push(
        <motion.div
          key={i}
          className={`relative aspect-square flex items-center justify-center rounded-lg cursor-pointer ${
            isHighlighted ? "border-2 border-blue-300" : "bg-white"
          } ${selectedDate === i ? "bg-[#0c1c36] text-white" : ""}`}
          whileHover={
            isHighlighted
              ? {
                  backgroundColor: "#0c1c36",
                  color: "white",
                  scale: 1.1,
                  zIndex: 10,
                }
              : {}
          }
          onClick={() => handleDateInteraction(i)}
          onHoverStart={() => handleDateInteraction(i)}
          onHoverEnd={() => handleDateInteraction(null)}
        >
          <span className="text-sm sm:text-base">{i}</span>
          <AnimatePresence>
            {selectedDate === i && taxEvents[i] && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 z-20 bg-white p-4 rounded-lg shadow-xl text-black text-sm sm:text-base w-64 sm:w-80"
              >
                {taxEvents[i].map((event, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-bold">
                      {event.month} {i}
                    </p>
                    <p>{event.text}</p>
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

  return (
    <main
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-30 mt-32"
      ref={sectionRef}
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='text-5xl  text-left sm:text-center md:text-6xl lg:text-7xl leading-snug text-blue mb-10 sm:mb-20 font-bold flex-1 md:mr-10'
      >
        Tax Calendar
      </motion.h1>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-bold">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">{renderCalendarDays()}</div>
    </main>
  );
}