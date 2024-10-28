"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Constants for links and submenus
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "", label: "About Us", hasSubmenu: true },
  { href: "/calendar", label: "Calendar" },
  { href: "https://www.mytaxdocs.com/", label: "ClientXchange" },
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
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
    },
    display: "flex",
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.3,
    },
    transitionEnd: {
      display: "none",
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

const mobileSubmenuVariants = {
  open: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  closed: { height: 0, opacity: 0, transition: { duration: 0.4 } },
};

const pathVariants = {
  open: {
    d: "M 6 6 L 18 18 M 6 18 L 18 6",
  },
  closed: {
    d: "M 3 12 H 21 M 3 6 H 21 M 3 18 H 21",
  },
};

// Hover Animation Variants for Navigation Links
const linkVariants = {
  initial: {
    scale: 1,
    color: "#FFFFFF",
  },
  hover: {
    scale: 1.02,
    color: "#D1D5DB", // Tailwind's gray-300
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const underlineVariants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

// Hover Animation Variants for Sublinks
const sublinkVariants = {
  initial: {
    scale: 1,
    color: "#FFFFFF",
  },
  hover: {
    scale: 1.05,
    color: "#D1D5DB", // Tailwind's gray-300
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const subUnderlineVariants = {
  initial: {
    width: 0,
  },
  hover: {
    width: "100%",
    transition: {
      type: "tween",
      duration: 0.3,
    },
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

// Submenu Component with Hover Animations for Sublinks
const Submenu = ({ links, isOpen }) => (
  <motion.ul
    variants={submenuVariants}
    initial='closed'
    animate={isOpen ? "open" : "closed"}
    className='absolute left-0 md:left-[-20px] mt-4 bg-blue shadow-lg p-4 flex flex-col space-y-4 w-[160px]'
  >
    {links.map(({ href, label }) => (
      <li key={href}>
        <motion.div
          className='relative cursor-pointer'
          variants={sublinkVariants}
          initial='initial'
          whileHover='hover'
        >
          <Link href={href} className='relative z-10'>
            {label}
            {/* Underline */}
            <motion.span
              className='absolute left-0 -bottom-1 h-0.5 bg-gray-300'
              variants={subUnderlineVariants}
            />
          </Link>
        </motion.div>
      </li>
    ))}
  </motion.ul>
);

const Navbar = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const pathname = usePathname();

  const handleMouseEnter = (label) => setActiveSubmenu(label);
  const handleMouseLeave = () => setActiveSubmenu(null);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleMobileSubmenu = () => setIsMobileSubmenuOpen((prev) => !prev);

  useEffect(() => {
    // Set a timeout to close menus after 0.5 seconds (500 milliseconds)
    const timeoutId = setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileSubmenuOpen(false);
    }, 500); // 500 milliseconds = 0.5 seconds

    // Cleanup function to clear the timeout if the effect is re-run or the component unmounts
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <>
      <nav className='bg-blue text-lg fixed top-0 z-50 w-full'>
        <div className='max-w-[1400px] mx-auto h-32 flex items-center justify-between px-6 relative z-50'>
          <div className='flex items-center'>
            <Link href='/'>
              <Image
                src='/logo.svg'
                alt='Moroz Financial Group Logo'
                width={180}
                height={220}
              />
            </Link>
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
          <ul className='hidden md:flex space-x-8 font-bold'>
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
                  <motion.div
                    className='flex items-center space-x-1 cursor-pointer'
                    variants={linkVariants}
                    initial='initial'
                    whileHover='hover'
                  >
                    <Link href={link.href} className='relative z-10'>
                      {link.label}
                      {/* Underline */}
                      <motion.span
                        className='absolute left-0 -bottom-1 h-0.5 bg-gray-300'
                        variants={underlineVariants}
                      />
                    </Link>
                    {link.hasSubmenu && <ChevronIcon isOpen={isSubmenuOpen} />}
                  </motion.div>
                  {link.hasSubmenu && (
                    <Submenu links={ABOUT_SUBMENU} isOpen={isSubmenuOpen} />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='fixed top-0 left-0 right-0 bottom-0 z-40 flex flex-col items-center justify-center bg-blue text-white md:hidden'
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
          >
            <ul className='flex flex-col gap-5 items-center'>
              {NAV_LINKS.map((link) => (
                <li key={link.href} className='text-3xl'>
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
                      <AnimatePresence>
                        {isMobileSubmenuOpen && (
                          <motion.ul
                            key='submenu'
                            initial='closed'
                            animate='open'
                            exit='closed'
                            variants={mobileSubmenuVariants}
                            className='text-center mt-2 space-y-2 overflow-hidden'
                          >
                            {ABOUT_SUBMENU.map((sublink) => (
                              <li key={sublink.href}>
                                <motion.div
                                  className='relative cursor-pointer'
                                  variants={sublinkVariants}
                                  initial='initial'
                                  whileHover='hover'
                                >
                                  <Link
                                    href={sublink.href}
                                    className='relative z-10'
                                    onClick={toggleMobileMenu}
                                  >
                                    {sublink.label}
                                    {/* Underline */}
                                    <motion.span
                                      className='absolute left-0 -bottom-1 h-0.5 bg-gray-300'
                                      variants={subUnderlineVariants}
                                    />
                                  </Link>
                                </motion.div>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className='text-white hover:text-gray-300'
                      onClick={toggleMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
