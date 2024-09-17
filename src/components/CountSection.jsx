import React from "react";
import AnimatedCounter from "@/app/utils/AnimatedCounter";

const counters = [
  { value: 30, label: "Experienced accountants" },
  { value: 50000, suffix: "+", label: "Projects" },
  { value: 100, label: "Per Month" },
];

const CounterItem = ({ value, suffix, label }) => (
  <div>
    <AnimatedCounter value={value} suffix={suffix} />
    <p className='text-xl font-medium'>{label}</p>
  </div>
);

const CountSection = () => {
  return (
    <section className='w-full bg-blue py-20 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center'>
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              value={counter.value}
              suffix={counter.suffix}
              label={counter.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountSection;
