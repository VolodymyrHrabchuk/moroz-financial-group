// components/AccountantsList.js

import React from "react";
import Image from "next/image";

const AccountantsList = () => {
  const accountants = [
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant1.jpg", // Replace with your image paths
    },
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant2.jpg", // Replace with your image paths
    },
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant3.jpg", // Replace with your image paths
    },
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant4.jpg", // Replace with your image paths
    },
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant5.jpg", // Replace with your image paths
    },
    {
      name: "Name Surname",
      title: "CPA",
      email: "email@example.com",
      phone: "123-456-7890",
      imgSrc: "/images/accountant6.jpg", // Replace with your image paths
    },
  ];

  return (
    <section className='container mx-auto px-4 py-24'>
      <h2 className='text-3xl font-semibold text-center mb-8'>
        Meet Your Accountants
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {accountants.map((accountant, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='w-40 h-40 relative mb-4'>
              <Image
                src={accountant.imgSrc}
                alt={accountant.name}
                layout='fill'
                objectFit='cover'
                priority={index < 3} // Load the first row images with priority
              />
            </div>
            <h3 className='text-xl font-medium'>{accountant.name}</h3>
            <p className='text-gray-500'>{accountant.title}</p>
            <p className='text-gray-500'>{accountant.email}</p>
            <p className='text-gray-500'>{accountant.phone}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccountantsList;
