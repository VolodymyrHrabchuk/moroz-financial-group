// components/ServicesSection.js
import React from "react";

const services = [
  {
    title: "Individual Taxation",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
  {
    title: "Corporate and Partnership Taxation",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
  {
    title: "Bookkeeping",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
  {
    title: "Audit Resolution",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
  {
    title: "Financial Planning",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
  {
    title: "Tax Consulting",
    features: ["Feature", "Feature", "Feature", "Feature"],
  },
];

const ServicesSection = () => {
  return (
    <section className='py-24'>
      <div className='max-w-[1400px] mx-auto px-4 text-center'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-center leading-snug text-blue mb-6 font-bold'>
          Our Services
        </h2>
        <p className='mt-4 text-lg text-grey'>
          We take care of your tax and financial matters, allowing you to
          concentrate on what you do best. Learn our services and call to find
          out more.
        </p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='px-6 py-12 border rounded-lg shadow-sm'>
              <h3 className='text-xl font-semibold mb-6 text-blue'>
                {service.title}
              </h3>
              <ul className='list-disc list-inside text-left text-grey'>
                {service.features.map((feature, i) => (
                  <li key={i} className='mb-2 px-4'>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
