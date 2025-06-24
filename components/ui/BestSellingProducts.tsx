"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Beetroot Microgreens",
    weight: "50gm",
    price: 250,
    imageUrl: "./beet_root_micro.jpg",
  },
  {
    id: 2,
    name: "Purple Radish",
    weight: "50gm",
    price: 200,
    imageUrl: "./raddish_micro.jpg",
  },
  {
    id: 3,
    name: "Sunflower Shoots",
    weight: "50gm",
    price: 180,
    imageUrl: "./microgreensunflower.jpg",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BestSellingProducts() {
  const sendWhatsApp = (productName: string) => {
    const message = `Hi, I'm interested in buying *${productName}*. Please provide more details.`;
    const url = `https://wa.me/919633581223?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-10 text-center bg-white" id="best-selling">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Selling Products</h2>
      <div className="flex justify-center mb-6">
        <Image src="./logo_best_selling.png" alt="leaf" width={60} height={60} />
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            className="border rounded-xl p-2 md:p-4 shadow hover:shadow-lg bg-white"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={250}
              height={200}
              className="mx-auto mb-2 md:mb-4 object-contain h-[120px] md:h-[200px]"
            />
            <p className="text-xs md:text-sm text-gray-500">MICROGREENS</p>
            <h3 className="font-semibold text-sm md:text-lg">{product.name.toUpperCase()}</h3>
            <p className="text-xs md:text-sm mb-1">{product.weight}</p>
            <div className="text-yellow-500 text-sm mb-1">★★★★★</div>
            <p className="text-sm md:text-lg font-bold text-gray-700">₹{product.price}.00</p>
            <button
              onClick={() => sendWhatsApp(product.name)}
              className="mt-2 md:mt-4 bg-green-600 hover:bg-green-700 text-white py-1 px-4 md:py-2 md:px-6 rounded-md transition"
            >
              BUY NOW
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
