// stark-resume/app/landing/page.tsx
'use client'; // Needed for the Framer Motion component we will add

import { ArcReactor } from '../components/ArcReactor';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
          Stark Industries Archives
        </h1>
        <p className="text-lg md:text-xl text-cyan-400 mt-2">
          Project: Career Evolution
        </p>
      </motion.div>

      <motion.div
        className="my-16"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <ArcReactor />
      </motion.div>

      <motion.div
        className="text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p>Unauthorized access is prohibited.</p>
        <p>System Online</p>
      </motion.div>
    </main>
  );
}