// stark-resume/app/hall/page.tsx
'use client';

import { useState } from 'react';
import resumeData from '@/app/data/resumeData.json';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

type Resume = {
  id: string;
  version: number;
  name: string;
  date: string;
  pdfUrl: string;
  isLatest: boolean;
  changelog: string[];
  easterEgg: string | null;
};

const ResumeModal = dynamic(
  () => import('../components/resumeModal').then((mod) => mod.ResumeModal),
  { ssr: false }
);

export default function HallPage() {
  const resumes: Resume[] = resumeData;
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);
  const [activeEgg, setActiveEgg] = useState<string | null>(null); // State for easter egg

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-cyan-400">Hall of Armor</h1>
        <p className="text-lg text-gray-300 mt-2">A Chronicle of Professional Evolution</p>
      </div>

      <div className="flex flex-col gap-8 w-full"> {/* Increased gap */}
        {resumes.map((resume) => (
          <div key={resume.id} className="relative w-full max-w-3xl mx-auto">
            <motion.div
              className="p-6 bg-gray-800/50 border border-cyan-400/20 rounded-lg shadow-lg backdrop-blur-sm cursor-pointer"
              whileHover={{ scale: 1.03, boxShadow: '0px 0px 20px rgba(0, 255, 255, 0.4)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setSelectedResume(resume)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-cyan-400">Mark {resume.version}</h2>
                {resume.isLatest && (
                  <span className="px-3 py-1 text-xs font-bold text-black bg-cyan-400 rounded-full">LATEST</span>
                )}
              </div>
              <h3 className="text-xl text-white font-light mt-1">{resume.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{resume.date}</p>

              {/* Easter Egg Button */}
              {resume.easterEgg && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                    setActiveEgg(activeEgg === resume.id ? null : resume.id);
                  }}
                  className="absolute bottom-4 right-4 text-cyan-400 text-2xl hover:scale-125 transition-transform"
                  title="Show archived log"
                >
                  ◈
                </button>
              )}
            </motion.div>

            {/* Easter Egg Tooltip */}
            <AnimatePresence>
              {activeEgg === resume.id && (
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-gray-700 border border-cyan-500/50 rounded-lg text-sm text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <p className="font-bold mb-1">Archived Log:</p>
                  <p>{resume.easterEgg}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedResume && (
          <ResumeModal resume={selectedResume} onClose={() => setSelectedResume(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}