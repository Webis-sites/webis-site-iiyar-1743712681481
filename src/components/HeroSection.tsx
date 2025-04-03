'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-primary to-secondary text-white" dir="rtl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/books-technology-background.jpg"
          alt="טכנולוגיה וספרים"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block font-hebrew">iiyar</span>
            </h1>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            <span className="block font-hebrew">חנות ספרים מוביל בישראל</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mb-8 max-w-md text-xl font-hebrew text-white text-opacity-90"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              className="rounded-full bg-white px-8 py-3 font-hebrew font-bold text-primary shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              קבע תור עכשיו
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-secondary opacity-20 blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute right-0 top-20 h-40 w-40 rounded-full bg-primary opacity-20 blur-3xl"
      ></motion.div>
    </section>
  );
};

export default HeroSection;