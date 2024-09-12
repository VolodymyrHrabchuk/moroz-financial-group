"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Constants for links and submenus
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "", label: "About Us", hasSubmenu: true },
  { href: "/service", label: "Services" },
  { href: "/exchange", label: "ClientXchange" },
  { href: "/contact", label: "Contact Us" },
];

const ABOUT_SUBMENU = [
  { href: "/team", label: "Our Team" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
];

// Framer Motion animation variants
const submenuVariants = {
  open: { opacity: 1, y: 0, display: "block" },
  closed: { opacity: 0, y: -20, transitionEnd: { display: "none" } },
};

const chevronVariants = {
  open: { rotate: 270 },
  closed: { rotate: 90 },
};

// Chevron Icon Component
const ChevronIcon = ({ isOpen }) => (
  <motion.svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 185.343 185.343'
    fill='white'
    className='w-3 h-3 pl-1'
    variants={chevronVariants}
    animate={isOpen ? "open" : "closed"}
  >
    <path d='M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175 l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934 c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z' />
  </motion.svg>
);

// Submenu Component
const Submenu = ({ links, isOpen }) => (
  <motion.ul
    variants={submenuVariants}
    initial='closed'
    animate={isOpen ? "open" : "closed"}
    className='absolute left-[-20px] mt-4 bg-blue shadow-lg p-4 flex flex-col space-y-4 w-[120px]'
  >
    {links.map((sublink) => (
      <li key={sublink.href}>
        <Link href={sublink.href} className='text-white hover:text-gray-300'>
          {sublink.label}
        </Link>
      </li>
    ))}
  </motion.ul>
);

const Navbar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (label) => setActiveSubmenu(label);
  const handleMouseLeave = () => setActiveSubmenu(null);

  return (
    <nav className='bg-blue text-lg'>
      <div className="max-w-[1400px] mx-auto h-32 flex items-center justify-between px-10 relative">
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Moroz Financial Group Logo'
            width={180}
            height={220}
          />
        </div>
        <ul className='flex space-x-8'>
          {NAV_LINKS.map((link) => {
            const isSubmenuOpen = activeSubmenu === link.label;
            return (
              <li
                key={link.href}
                className='relative group'
                onMouseEnter={() =>
                  link.hasSubmenu && handleMouseEnter(link.label)
                }
                onMouseLeave={() => link.hasSubmenu && handleMouseLeave()}
              >
                <div className='flex items-center space-x-1'>
                  <Link
                    href={link.href}
                    className='text-white hover:text-gray-300'
                  >
                    {link.label}
                  </Link>
                  {link.hasSubmenu && <ChevronIcon isOpen={isSubmenuOpen} />}
                </div>
                {link.hasSubmenu && (
                  <Submenu links={ABOUT_SUBMENU} isOpen={isSubmenuOpen} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
