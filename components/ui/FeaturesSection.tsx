'use client'

import { motion } from 'framer-motion'
import {
  Droplets,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'

const features = [  {
    title: 'All India Delivery',
    description: 'We deliver fresh microgreens to every corner of India.',
    icon: <Leaf size={22} className="text-lime-400 rotate-45" />,
  },
    {
    title: 'Safe & Certified',
    description: 'Our greens meet strict food safety standards.',
    icon: <ShieldCheck size={22} className="text-lime-400" />,
  },
  {
    title: 'Fresh Microgreens',
    description: 'Harvested daily to deliver fresh and nutritious greens.',
    icon: <Leaf size={22} className="text-lime-400" />,
  },
  {
    title: 'Sustainable Farming',
    description: 'Eco-friendly and water-efficient growing methods.',
    icon: <Droplets size={22} className="text-lime-400" />,
  },
  {
    title: 'Health Boost',
    description: 'Nutrient-packed greens to enhance your wellness.',
    icon: <HeartPulse size={22} className="text-lime-400" />,
  },
  {
    title: 'Bright & Clean',
    description: 'No pesticides or chemicals — just clean produce.',
    icon: <Sparkles size={22} className="text-lime-400" />,
  },
  {
    title: 'Sun-Kissed Growth',
    description: 'Grown in natural light for maximum taste and quality.',
    icon: <Sun size={22} className="text-lime-400" />,
  },


]

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      type: 'spring',
      stiffness: 80,
      damping: 15,
    },
  }),
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-32 px-6 sm:px-12 flex flex-col justify-start items-center">
      
      <div className="max-w-7xl mx-auto w-full">
        {/* Subheading */}
        <div className="text-center mb-10">
          <h2
            className="text-4xl sm:text-5xl font-bold text-green-900"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Features
          </h2>
          <p className="text-sm uppercase tracking-wide text-lime-600 mt-2">
            What Makes Us Special
          </p>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto text-sm sm:text-base">
            Discover the benefits of our microgreens — healthy, fresh, and sustainably grown with love.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl border border-lime-300 bg-[#d8eac1] transition-all duration-300 shadow-sm hover:shadow-xl"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                y: -4,
                boxShadow: '0px 12px 30px rgba(190, 242, 100, 0.3)',
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-lime-100 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-green-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm text-green-800">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
