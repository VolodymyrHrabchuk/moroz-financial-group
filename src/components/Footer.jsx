"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer className=' mx-auto bg-blue text-white py-10 px-6'>
      <div className='max-w-[1400px]  mx-auto flex items-start gap-4 flex-col md:flex-row md:gap-24'>
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
              href='mailto:Info@morozfinancial.com
'
              className='text-white opacity-75 text-sm hover:opacity-100 '
            >
              Info@morozfinancial.com
            </Link>
            <Link
              href='tel:+18478500085'
              className='text-white opacity-75 text-sm hover:opacity-100'
            >
              +1 (847) 850-0085
            </Link>
          </div>
          <div className='flex space-x-4 mt-4'>
            <Link
              href='https://www.instagram.com/YourInstagramProfile'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-75'
            >
              <IconContext.Provider value={{ size: "24px" }}>
                <FaInstagram />
              </IconContext.Provider>
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className='space-y-2 '>
          <p className='font-bold text-md'>Hours</p>
          <p className='text-white opacity-75 text-sm'>Mon - Fri</p>
          <p className='text-white opacity-75 text-sm'>9 AM - 6 PM CST</p>
          <p className='font-bold text-md'>Call</p>
          <Link
            href='tel:+18478500085'
            className='text-white opacity-75 text-sm hover:opacity-100'
          >
            +1 (847) 850-0085
          </Link>
          <p className='font-bold text-md'>Email</p>
          <Link
            href='mailto:dmitrymoroz@morozfinancial.com'
            className='text-white opacity-75 text-sm hover:opacity-100'
          >
            dmitrymoroz@morozfinancial.com
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
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.412378672214!2d-87.98168068469316!3d42.148974979200175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb359f15f70a1%3A0x26075b422dfeaf4e!2s770%20W%20Dundee%20Rd%2C%20Arlington%20Heights%2C%20IL%2060004%2C%20USA!5e0!3m2!1sen!2sin!4v1663242288941!5m2!1sen!2sin'
            className='rounded-md w-full h-full md:w-2/3 md:h-64'
            style={{ border: 0, pointerEvents: "none" }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <p className='text-left font-bold text-md text-white'>
            770 W Dundee Rd, Arlington Heights, IL 60004
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
