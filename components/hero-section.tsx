/** @format */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroHeader } from "./header";

const images = [
  {
    src: "./ulkadanam2.jpg",
    alt: "Microgreens 3",
  },
  {
    src: "./bg3.jpg",
    alt: "Microgreens 1",
  },
  {
    src: "./ulkadanam.jpg",
    alt: "Microgreens 2",
  },
  {
    src: "./bg4.jpg",
    alt: "Microgreens 3",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className='bg-white' id='home'>
      <HeroHeader />
      {/* Banner Section */}
      <div className='relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden mt-6 sm:mt-10'>
        <AnimatePresence>
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='absolute inset-0'>
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              className='object-cover w-full h-full'
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Optional overlay text */}
        <div className='absolute bottom-4 left-4 sm:left-8 text-white bg-black/40 px-4 py-2 rounded-md backdrop-blur-sm'>
          <p className='text-sm sm:text-base'>
            Rich in Vitamins – Builds Immunity
          </p>
        </div>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-3xl mx-auto text-center px-4 sm:px-8 py-10'>
        <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4'>
          The Best Microgreens In Kerala
        </h2>
        <p className='text-gray-700 text-base sm:text-lg'>
          Discover the premium Microgreens in Kerala! Our fresh, nutrient-packed
          microgreens are grown with the highest quality standards. Perfect for
          enhancing your meals with vibrant flavors and health benefits. Shop
          now and elevate your diet with the best microgreens available!
        </p>
      </motion.div>
    </section>
  );
}

// /** @format */

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import { HeroHeader } from "./header";

// export default function HeroSection() {
//   return (
//     <>
//       <HeroHeader />

//       <section id="home" className='relative h-screen bg-[#f9fced] overflow-hidden flex items-center justify-center px-6 sm:px-12'>
//         {/* Background Image (faint pattern) */}
//         <Image
//           src='./bg.png'
//           alt='Background'
//           fill
//           className='object-cover z-0 opacity-80'
//           priority
//         />

//         {/* Main Content */}
//         <div className='relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12'>
//           {/* Text Section */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className='text-center md:text-left max-w-lg'>
//             <h1
//               className='text-7xl font-bold italic'
//               style={{ fontFamily: "var(--font-playfair)" }}>
//               Nutryphyll
//             </h1>

//             {/* <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2">
//                             Microgreens Farm
//                         </p> */}
//          <p className="mt-6 text-base sm:text-lg text-gray-800 max-w-md mx-auto md:mx-2">
//   Bringing wellness to your plate with microgreens
// </p>

//           </motion.div>

//           {/* Plant Image */}
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2 }}
//             className='flex-shrink-0 w-64 sm:w-80 md:w-[400px]'>
//             <Image
//               src='./plant-img.png'
//               alt='Plant Display'
//               width={400}
//               height={500}
//               className='object-contain'
//               priority
//             />
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }
