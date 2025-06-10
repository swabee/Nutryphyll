'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const faqItemVariants = {
  collapsed: {
    opacity: 0,
    maxHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    overflow: 'hidden',
  },
  expanded: {
    opacity: 1,
    maxHeight: 300, // adjust based on your content height
    paddingTop: 12,
    paddingBottom: 24,
    overflow: 'hidden',
  },
}

const faqs = [
  {
    question: 'How are your microgreens grown?',
    answer:
      'We use sustainable, eco-friendly farming methods ensuring freshness and quality.',
  },
  {
    question: 'Do you offer delivery?',
    answer: 'Yes! We deliver fresh produce directly to your door every day.',
  },
  {
    question: 'Are your products organic?',
    answer:
      'Our microgreens are grown without harmful chemicals, focusing on natural practices.',
  },
  {
    question: 'Can I visit your farm?',
    answer:
      'Currently, we focus on delivery, but stay tuned for future farm tours and events.',
  },
]

export function WhyUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
     id="why-us" className="relative bg-[#f9fced] min-h-screen py-36 px-8 sm:px-16 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Heading & Subheading outside bg image */}
      <div className="relative z-20 text-center mb-16 w-full max-w-7xl">
        <h2
          className="text-5xl sm:text-6xl font-extrabold text-green-900 mb-2 drop-shadow-md"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Why Us
        </h2>
        <p className="text-sm uppercase tracking-widest text-lime-600 font-semibold">
          Frequently Asked Questions
        </p>
      </div>

      {/* Background image container with FAQ content */}
      <motion.div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        style={{
          backgroundImage: "url('./bg4.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: 'inset 0 0 180px 80px rgba(249,252,237,0.85)',
        }}
      >
        {/* Background overlay */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background:
              'rgba(249, 252, 237, 0.75)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            zIndex: 0,
          }}
          aria-hidden="true"
        />

        {/* FAQ content */}
        <div className="relative z-10 px-14 py-20">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="border-b border-green-300 last:border-b-0"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-header-${idx}`}
                  className="w-full flex justify-between items-center py-5 text-green-900 text-xl sm:text-2xl font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-lime-300 rounded-lg transition-colors hover:bg-lime-50"
                >
                  {question}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="text-green-700 text-3xl select-none transform"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-panel-${idx}`}
                      role="region"
                      aria-labelledby={`faq-header-${idx}`}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={faqItemVariants}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="text-green-900 text-base sm:text-lg pl-4 pr-10 select-text"
                      style={{ overflow: 'hidden' }}
                    >
                      <p>{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
