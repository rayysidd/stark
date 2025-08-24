// stark-resume/app/landing/page.tsx
'use client';

import { ArcReactor } from '../app/components/ArcReactor'; // Fixed import path
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 0, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 0, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Atmospheric Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
        
        {/* Top Security Badge */}
        <motion.div
          className="mb-8 px-4 py-2 border border-red-600 bg-red-900/20 rounded-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400">CLASSIFIED ACCESS</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-4">
            STARK INDUSTRIES
          </h1>
          <h2 className="text-2xl md:text-3xl text-white mb-2">
            ARCHIVES
          </h2>
        </motion.div>

        {/* Project Label */}
        <motion.div
          className="mb-8 px-6 py-3 border-2 border-yellow-400/50 bg-gradient-to-r from-yellow-900/20 to-red-900/20 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
            PROJECT: CAREER EVOLUTION
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Personal Development Initiative
          </p>
        </motion.div>

        {/* Arc Reactor */}
        <motion.div
          className="my-12 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ArcReactor />
          
          {/* Glow effect around Arc Reactor */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-red-600/10 to-transparent rounded-full blur-xl scale-150 -z-10"></div>
        </motion.div>

        {/* Access Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/hall">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span className="flex items-center space-x-2">
                <span>⚡</span>
                <span>ACCESS HALL OF ARMOR</span>
                <span>⚡</span>
              </span>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-yellow-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </Link>
        </motion.div>

        {/* Security Warning */}
        <motion.div
          className="text-center text-gray-400 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">SYSTEM ONLINE</span>
            </div>
            <span className="text-gray-600">|</span>
            <span className="text-yellow-400">SECURITY LEVEL: ALPHA</span>
          </div>
          
          <p className="text-red-400 text-sm font-semibold">
            ⚠ UNAUTHORIZED ACCESS IS PROHIBITED ⚠
          </p>
          
          <p className="text-xs text-gray-500 max-w-md">
            This system contains confidential information regarding Project Career Evolution. 
            Access is restricted to authorized personnel only.
          </p>
        </motion.div>

        {/* Bottom Status Bar */}
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-black/80 border border-red-800 px-6 py-2 rounded-full">
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-yellow-400">●</span>
              <span className="text-white">STARK INDUSTRIES</span>
              <span className="text-red-400">|</span>
              <span className="text-gray-400">EST. 1940</span>
              <span className="text-red-400">|</span>
              <span className="text-gray-400">INNOVATION UNLIMITED</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-yellow-400 opacity-40" />
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-yellow-400 opacity-40" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-yellow-400 opacity-40" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-yellow-400 opacity-40" />

      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
    </main>
  );
}
