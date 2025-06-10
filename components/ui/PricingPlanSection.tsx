'use client'

import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: 'month',
    features: [
      'Up to 10 microgreen varieties',
      'Basic support',
      'Weekly delivery',
      'Access to farm news',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    period: 'month',
    features: [
      'Up to 30 microgreen varieties',
      'Priority support',
      'Daily delivery',
      'Farm tours & events',
      'Exclusive recipes',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    period: '',
    features: [
      'Custom microgreen varieties',
      'Dedicated support',
      'Flexible delivery schedules',
      'Farm consultancy',
      'Bulk order discounts',
    ],
    popular: false,
  },
]

export function PricingPlanSection() {
  return (
    <section
     id="pricing" className="relative bg-[#f9fced] min-h-screen py-36 px-8 sm:px-16 flex flex-col justify-center items-center overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Heading */}
      <div className="relative z-20 text-center mb-16 w-full max-w-7xl">
        <h2
          id="pricing-heading"
          className="text-5xl sm:text-6xl font-extrabold text-green-900 mb-2 drop-shadow-md"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          Pricing Plans
        </h2>
        <p className="text-sm uppercase tracking-widest text-lime-600 font-semibold">
          Choose the perfect plan for you
        </p>
      </div>

      {/* Pricing Cards Container */}
      <motion.div
        className="relative w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        {plans.map(({ name, price, period, features, popular }, idx) => (
          <div
            key={idx}
            className={`relative bg-white rounded-3xl shadow-2xl p-10 flex flex-col ${
              popular ? 'border-4 border-lime-400 z-10' : ''
            }`}
          >
            {popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-400 text-green-900 font-bold rounded-full px-5 py-1 text-sm tracking-wider drop-shadow-md select-none">
                Most Popular
              </div>
            )}

            <h3 className="text-3xl font-bold text-green-900 mb-4">{name}</h3>

            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-5xl font-extrabold text-lime-600">{price}</span>
              {period && (
                <span className="text-green-700 font-semibold text-xl self-end pb-1">
                  /{period}
                </span>
              )}
            </div>

            <ul className="mb-8 space-y-3 text-green-900 text-base sm:text-lg">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <svg
                    className="w-6 h-6 text-lime-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-auto rounded-lg py-3 text-xl font-semibold transition-colors focus:outline-none focus-visible:ring-4 ${
                popular
                  ? 'bg-lime-400 text-green-900 hover:bg-lime-500 focus-visible:ring-lime-300'
                  : 'bg-green-900 text-lime-400 hover:bg-green-800 focus-visible:ring-lime-300'
              }`}
            >
              {price === 'Contact Us' ? 'Contact Sales' : 'Get Started'}
            </button>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
