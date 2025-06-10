'use client'

import { motion } from 'framer-motion'
import {
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from 'react-icons/fa'

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function Footer() {
  return (
    <motion.footer
      className="bg-green-900 text-lime-300 py-16 px-8 sm:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={footerVariants}
      aria-label="Footer"
    >
      <div id="blog" className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Brand & Description */}
        <div className="flex flex-col max-w-sm space-y-4">
          <h3
            className="text-3xl font-extrabold text-lime-400"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            FreshGreens
          </h3>
          <p className="text-green-200 leading-relaxed">
            Delivering premium, eco-friendly microgreens fresh from our farm to your
            doorstep. Sustainable, healthy, and bursting with flavor.
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-lime-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-lime-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-lime-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-lime-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={22} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className="flex flex-col sm:flex-row justify-between flex-grow max-w-4xl gap-12"
          aria-label="Footer navigation"
        >
          <div>
            <h4 className="text-lime-400 font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-green-200">
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lime-400 font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-green-200">
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-lime-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lime-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <a
                  href="mailto:support@freshgreens.com"
                  className="hover:text-lime-400 transition-colors"
                >
                  support@freshgreens.com
                </a>
              </li>
              <li>+1 (555) 123-4567</li>
              <li>123 Green St, Farmville, USA</li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Copyright */}
      <div className="mt-16 border-t border-green-800 pt-8 text-center text-green-400 select-none text-sm sm:text-base">
        &copy; {new Date().getFullYear()} FreshGreens. All rights reserved.
      </div>
    </motion.footer>
  )
}
