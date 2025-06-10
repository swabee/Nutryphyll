/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroHeader } from "./header";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <section id="home" className='relative h-screen bg-[#f9fced] overflow-hidden flex items-center justify-center px-6 sm:px-12'>
        {/* Background Image (faint pattern) */}
        <Image
          src='./bg.png'
          alt='Background'
          fill
          className='object-cover z-0 opacity-80'
          priority
        />

        {/* Main Content */}
        <div className='relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className='text-center md:text-left max-w-lg'>
            <h1
              className='text-7xl font-bold italic'
              style={{ fontFamily: "var(--font-playfair)" }}>
              Nutryphyll
            </h1>

            {/* <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                            Microgreens Farm
                        </p> */}
         <p className="mt-6 text-base sm:text-lg text-gray-800 max-w-md mx-auto md:mx-2">
  Bringing wellness to your plate with microgreens
</p>

          </motion.div>

          {/* Plant Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className='flex-shrink-0 w-64 sm:w-80 md:w-[400px]'>
            <Image
              src='./plant-img.png'
              alt='Plant Display'
              width={400}
              height={500}
              className='object-contain'
              priority
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
