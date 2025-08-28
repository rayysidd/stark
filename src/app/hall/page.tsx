'use client';

import { useState } from 'react';
import resumeData from '@/app/data/resumeData.json';
import { AnimatePresence, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArmorScene } from '../components/ArmorScene';
import { Resume } from '@/app/types/types';

const ResumeModal = dynamic(
  () => import('../components/resumeModal').then((mod) => mod.ResumeModal),
  { ssr: false }
);

export default function HallPage() {
  const resumes: Resume[] = resumeData;
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);

  return (
    <main className="relative w-screen h-screen bg-black text-white overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
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
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Top Header Bar - Reduced height */}
      <motion.div 
        className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <Link href="/" className="pointer-events-auto">
          <button className="group flex items-center space-x-2 bg-black/80 border border-red-800 hover:border-yellow-400 px-3 py-2 rounded-lg transition-all duration-300 backdrop-blur-sm">
            <svg className="w-4 h-4 text-yellow-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-yellow-400 group-hover:text-white transition-colors text-sm">RETURN TO ARCHIVES</span>
          </button>
        </Link>

        {/* Status Indicator */}
        <div className="bg-black/80 border border-red-800 px-3 py-2 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400">HALL ONLINE</span>
            <span className="text-red-400">|</span>
            <span className="text-gray-400">{resumes.length} UNITS ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* Main Title - Compact positioning */}
      <motion.div 
        className="absolute top-16 left-0 right-0 z-10 text-center py-3"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 bg-clip-text text-transparent mb-1 font-mono">
          Sometimes you gotta run before you can walk
        </h1>
        <div className="flex items-center justify-center space-x-4 text-xs">
          <span className="text-red-400">STARK INDUSTRIES</span>
          <span className="text-gray-600">|</span>
          <span className="text-white">PERSONAL ARCHIVES</span>
        </div>
      </motion.div>

      {/* Main Gallery - Optimized space allocation */}
      <div className="absolute top-24 left-0 right-0 bottom-16">
        <ArmorScene resumes={resumes} onPedestalClick={(resume) => setSelectedResume(resume)} />
      </div>

      {/* Bottom Status Bar - Reduced size and positioned closer */}
      <motion.div 
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-black/80 border border-red-800 rounded-full px-4 py-1 backdrop-blur-sm">
          <div className="flex items-center space-x-3 text-xs">
            <span className="text-yellow-400">●</span>
            <span className="text-white">SECURITY CLEARANCE: ALPHA</span>
            <span className="text-red-400">|</span>
            <span className="text-gray-400">ACCESS GRANTED</span>
          </div>
        </div>
      </motion.div>

      {/* Corner Brackets - Smaller and less intrusive */}
      <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-yellow-400 opacity-40 pointer-events-none z-30" />
      <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-yellow-400 opacity-40 pointer-events-none z-30" />
      <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-yellow-400 opacity-40 pointer-events-none z-30" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-yellow-400 opacity-40 pointer-events-none z-30" />

      {/* Resume Modal */}
      <AnimatePresence>
        {selectedResume && (
          <ResumeModal resume={selectedResume} onClose={() => setSelectedResume(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}