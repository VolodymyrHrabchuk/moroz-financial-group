import React from "react";

const TeamHero = () => {
  return (
    <section
      className='w-full bg-cover bg-center'
      style={{ backgroundImage: "url('/accountant.jpg')" }}
    >
      <div className='flex flex-col items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-40 mt-32'>
        <h1 className='text-5xl leading-snug sm:leading-snug md:leading-snug lg:leading-snug text-white text-center font-bold md:text-6xl lg:text-7xl'>
          Our Team
        </h1>
        <p className='text-xl md:text-2xl text-[#a7a7a7] text-center mt-2'>
          We are pleased to introduce you to our team of experienced
          professionals that are always there for you
        </p>
      </div>
    </section>
  );
};

export default TeamHero;
