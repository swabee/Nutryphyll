'use client'

import { motion } from 'framer-motion'

const aboutVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function AboutUsSection() {
  return (
<section
  id="about-us"
  className="relative bg-white min-h-screen py-32 px-6 sm:px-12 flex flex-col justify-center items-center overflow-hidden scroll-mt-24"
>

      {/* Heading & Subheading outside bg image */}
      <div className="relative z-20 text-center mb-12 w-full max-w-5xl">
        <h2
          className="text-4xl sm:text-5xl font-bold text-green-900 mb-2"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          About Us
        </h2>
        <p className="text-sm uppercase tracking-wide text-lime-600">
          Who We Are
        </p>
      </div>

      {/* Background image container with content */}
      <motion.div
        className="relative max-w-3xl text-center w-full rounded-xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={aboutVariants}
        style={{ backgroundImage: "url('./bg2.jpg')" }}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            filter: 'brightness(0.85)',
            boxShadow: 'inset 0 0 150px 60px #f9fced',
            borderRadius: 'inherit',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* Text content */}
        <p className="relative z-10 p-12 text-green-900 text-base sm:text-lg leading-relaxed bg-[#f9fced]/70">
          At Nutryphyll, we believe in nurturing health through nature. Our microgreens are
          sustainably grown with care, harvested daily to ensure maximum freshness and nutrition.
          We’re committed to eco-friendly farming practices and delivering the highest quality produce
          right to your plate. Join us in bringing wellness, flavor, and sustainability together.
        </p>
      </motion.div>
    </section>
  )
}
