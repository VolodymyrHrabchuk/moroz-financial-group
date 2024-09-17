import React from "react";

const TeamWhoWeAre = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className='max-w-[1400px] mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-around'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl leading-snug text-blue mb-6 md:mb-0 font-bold flex-1 md:mr-10'>
          Who we are?
        </h2>
        <p className='text-lg text-grey flex-1'>
          We are a dedicated team of experienced accountants, financial
          advisors, and business consultants committed to helping businesses and
          individuals navigate their financial goals with confidence. With a
          strong foundation in tax preparation, bookkeeping, and financial
          planning, we provide personalized solutions tailored to your unique
          needs. Our firm prides itself on accuracy, reliability, and a
          client-first approach, ensuring that your financial success is always
          our top priority.
        </p>
      </div>
    </section>
  );
};

export default TeamWhoWeAre;
