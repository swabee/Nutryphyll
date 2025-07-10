'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const plans = [
  {
    title: 'Diabetes Prevention',
    image: './subscription.jpg',
    minPrice: '₹1,499.00',
    maxPrice: '₹12,199.00',
  },
  {
    title: 'Cancer Prevention',
    image: './subscription.jpg',
    minPrice: '₹1,299.00',
    maxPrice: '₹10,799.00',
  },
  {
    title: 'Hormonal Imbalance',
    image: './subscription.jpg',
    minPrice: '₹1,299.00',
    maxPrice: '₹10,499.00',
  },
  {
    title: 'Enhancing Liver Function',
    image: './subscription.jpg',
    minPrice: '₹1,299.00',
    maxPrice: '₹10,299.00',
  },
]

export default function SubscriptionPlanSection() {
  const sendWhatsApp = (planName: string, planType: string) => {
    const message = `Hi, I'd like to take the *${planName}* plan for *${planType}*. Please let me know more details.`;
    const url = `https://wa.me/919495351223?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <section className="bg-white py-20 px-4 sm:px-8 text-center" id="subscription">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-10">
        Subscription Plan
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <Image
              src={plan.image}
              alt={plan.title}
              width={400}
              height={250}
              className="w-full h-[200px] object-cover mb-4 rounded-md"
            />
            <p className="text-sm text-gray-500 mb-1">Subscription</p>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              {plan.title}
            </h3>
            <div className="text-yellow-400 mb-2">★★★★★</div>
            <p className="font-bold text-gray-700 mb-4">
              {plan.minPrice} – {plan.maxPrice}
            </p>

            <div className="flex flex-wrap gap-2 justify-center">
              {['Annual', 'Half Year', 'Trial Plan'].map((type) => (
                <button
                  key={type}
                  onClick={() => sendWhatsApp(plan.title, type)}
                  className="border border-gray-400 text-sm px-4 py-1 rounded hover:bg-gray-100"
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
