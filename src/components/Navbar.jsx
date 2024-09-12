"use client";
import React, { useState, useEffect } from "react";
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
const menuVariants = {
  open: {
    x: 0, // Slide in from the left
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the animation of children
      delayChildren: 0.2, // Delay the start of the children animations
      type: "tween",
      ease: "easeOut",
      duration: 0.2,
    },
    display: "flex", // Ensure that the menu is displayed when it is open
  },
  closed: {
    x: "-100%", // Slide out to the left
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.2,
    },
    transitionEnd: {
      display: "none", // Hide the menu after it has closed
    },
  },
};

const buttonVariants = {
  open: {
    rotate: 90,
  },
  closed: {
    rotate: 0,
  },
};

const pathVariants = {
  open: {
    d: "M 6 6 L 18 18 M 6 18 L 18 6",
  },
  closed: {
    d: "M 3 12 H 21 M 3 6 H 21 M 3 18 H 21",
  },
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
    className='absolute left-[-20px] mt-4 bg-blue shadow-lg p-4 flex flex-col space-y-4 w-[120px] '
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const handleMouseEnter = (label) => setActiveSubmenu(label);
  const handleMouseLeave = () => setActiveSubmenu(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileSubmenu = () => setIsMobileSubmenuOpen((prev) => !prev);

  return (
    <nav className='bg-blue text-lg fixed top-0 z-50 w-full'>
      <div className='max-w-[1400px] mx-auto h-32 flex items-center justify-between px-10 relative'>
        <div className='flex items-center'>
          <Image
            src='/logo.svg'
            alt='Moroz Financial Group Logo'
            width={180}
            height={220}
          />
        </div>
        <div className='md:hidden'>
          <motion.button
            onClick={toggleMobileMenu}
            animate={isMobileMenuOpen ? "open" : "closed"}
            aria-label='Toggle menu'
          >
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              variants={buttonVariants}
            >
              <motion.path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                variants={pathVariants}
                initial={false}
              />
            </motion.svg>
          </motion.button>
        </div>
        <ul className='hidden md:flex space-x-8'>
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

      {/* Mobile Menu */}
      <motion.div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center justify-center w-full bg-blue text-white h-screen`}
        initial='closed'
        variants={menuVariants}
        animate={isMobileMenuOpen ? "open" : "closed"}
      >
        <ul className='flex flex-col gap-4 w-full items-center'>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className='text-2xl'>
              {link.hasSubmenu ? (
                <>
                  <button
                    onClick={toggleMobileSubmenu}
                    className='flex items-center justify-between w-full text-white hover:text-gray-300'
                  >
                    {link.label}
                    <ChevronIcon isOpen={isMobileSubmenuOpen} />
                  </button>

                  {/* Submenu */}
                  {isMobileSubmenuOpen && (
                    <ul className='text-center mt-2 space-y-2'>
                      {ABOUT_SUBMENU.map((sublink) => (
                        <li key={sublink.href}>
                          <Link href={sublink.href} className='text-white'>
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className='text-white hover:text-gray-300'
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
