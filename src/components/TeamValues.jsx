import React from "react";

const TeamValues = () => {
  return (
    <section className='py-12 md:py-24 bg-blue border-b-2'>
      <div className='max-w-[1400px] mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center justify-around'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl leading-snug text-white mb-6 md:mb-0 font-bold flex-1 md:mr-10'>
          Our Team Values
        </h2>
        <p className='text-lg text-grey flex-1'>
          At the core of our team is a shared commitment to integrity,
          collaboration, and excellence. We believe in delivering transparent,
          accurate, and timely financial services that empower our clients to
          make informed decisions. Our team fosters a culture of continuous
          learning and innovation, ensuring that we stay ahead in an
          ever-evolving financial landscape. By working closely with our
          clients, we aim to build lasting relationships based on trust,
          professionalism, and a genuine desire to see them succeed.
        </p>
      </div>
    </section>
  );
};

export default TeamValues;
