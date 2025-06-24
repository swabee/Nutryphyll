/** @format */

"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Best selling", href: "#best-selling" },
  { label: "About", href: "#about-us" },
  { label: "Features", href: "#features" },
  { label: "Subscription", href: "#subscription" },
  { label: "Blog", href: "#blog" },
];

export const HeroHeader = () => {
   const sendWhatsApp = () => {
    const message = `Hi, I'd like to take your service . Please let me know more details.`;
    const url = `https://wa.me/919633581223?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  return (
    <header className='fixed top-0 left-0 z-50 w-full'>
      <motion.nav
        className='bg-green-950 border-b border-green-900'
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className='mx-auto max-w-7xl px-4 py-4 flex items-center justify-between'>
          {/* Logo */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            <Link href='/' className='flex items-center space-x-2'>
              <Logo className='h-6 w-6 text-lime-400' />
              <span className='text-lime-100 font-semibold text-lg'>
                Nutryphyll
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <motion.ul
            className='hidden md:flex space-x-6 text-sm text-lime-100'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}>
            {navItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}>
                <a href={item.href} className='hover:text-lime-300'>
                  {item.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Buttons */}
          <div className='flex items-center space-x-4'>
            <div className='hidden md:block'>
              <Button 
              onClick={() => sendWhatsApp()}
              className='bg-lime-300 text-green-950 hover:bg-lime-400 text-sm px-4 py-2'>
                Contact Us
              </Button>
            </div>
            <button
              className='md:hidden p-2 text-lime-100 hover:text-lime-300'
              onClick={() => setDrawerOpen(true)}
              aria-label='Toggle menu'>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key='backdrop'
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className='fixed inset-0 bg-black z-40'
            />

            <motion.aside
              key='drawer'
              initial='hidden'
              animate='visible'
              exit='hidden'
              variants={drawerVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className='fixed top-0 right-0 bottom-0 w-64 bg-green-950 z-50 p-6 flex flex-col'>
              <button
                onClick={() => setDrawerOpen(false)}
                className='self-end text-lime-300 hover:text-lime-100 mb-6'>
                <X size={28} />
              </button>

              <nav className='flex flex-col space-y-6 text-lime-100 text-lg font-semibold'>
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className='hover:text-lime-300'>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className='flex-grow' />

              <Button
                className='bg-lime-300 text-green-950 hover:bg-lime-400 text-base px-4 py-3'
                onClick={() =>sendWhatsApp() }>
                Contact Us
              </Button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
