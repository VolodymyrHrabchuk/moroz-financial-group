"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mx-auto bg-blue text-white py-10 px-6'>
      <div className='max-w-[1400px] mx-auto flex items-start gap-4 flex-col md:flex-row md:gap-24'>
        {/* Left Section */}
        <div className='space-y-4'>
          <div className='flex items-start gap-3 flex-col'>
            <Image
              src='/logo.svg'
              alt='Moroz Financial Group Logo'
              width={220}
              height={220}
            />
            <Link
              href='mailto:Info@morozfinancial.com'
              className='text-white opacity-75 text-sm hover:opacity-100 '
            >
              Info@morozfinancial.com
            </Link>
            {/* <Link
              href='tel:+12245265170'
              className='text-white opacity-75 text-sm hover:opacity-100'
            >
              +1 (224) 526-5170
            </Link> */}
          </div>
          <div className='flex space-x-4 mt-4'>
            <Link
              href='https://www.instagram.com/moroz_financial'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-75'
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <FaInstagram />
              </IconContext.Provider>
            </Link>
            {/* Add other social icons here if needed */}
          </div>
        </div>

        {/* Middle Section */}
        <div className='space-y-2 '>
          {/* <p className='font-bold text-md'>Hours</p>
          <p className='text-white opacity-75 text-sm'>Mon - Fri</p>
          <p className='text-white opacity-75 text-sm'>9 AM - 6 PM CST</p> */}
          <p className='font-bold text-md'>Call</p>
          <Link
            href='tel:+12245265170'
            className='text-white opacity-75 text-sm hover:opacity-100'
          >
            +1 (224) 526-5170
          </Link>
          <p className='font-bold text-md'>Fax</p>
          <Link
            href='tel:+18473055895'
            className='text-white opacity-75 text-sm hover:opacity-100'
          >
            (847) 305-5895
          </Link>
        </div>

        {/* Right Section */}
        <div className='flex flex-col md:flex-row md:items-center gap-6 text-center md:text-left md:ml-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1275.1016319467283!2d-87.64975149647931!3d41.88624718539067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cd00ef472b7%3A0x80654fb20993263f!2zMjIwIE4gR3JlZW4gU3QsIENoaWNhZ28sIElMIDYwNjA3LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1sen!2sus!4v1730988079754!5m2!1sen!2sus'
            className='rounded-md w-full h-64 md:w-2/3 md:h-64'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>

          <p className='text-left font-bold text-md text-white'>
            220 N Green St, Suite 521, Chicago, IL 60607
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='max-w-[1400px] mx-auto mt-12 mb-0 text-center text-xs'>
        <span className='text-white opacity-45'>
          © Moroz Financial Group {currentYear}
        </span>
        <span className='mx-2 opacity-45'>|</span>
        <Link
          href='/privacy-policy'
          className='text-white opacity-45 hover:opacity-100'
        >
          Privacy Policy
        </Link>
        <span className='mx-2 opacity-45'>|</span>
        <span className='text-white opacity-45'>
          Website developed by{" "}
          <Link
            href='https://vh-dev.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white opacity-65 hover:opacity-100'
          >
            VH-DEV
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
