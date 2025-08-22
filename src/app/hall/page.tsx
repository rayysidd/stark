'use client';

import { useState } from 'react';
import resumeData from '@/app/data/resumeData.json';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { ArmorScene } from '../components/ArmorScene';
import { Resume } from '@/app/types/types'; // Import the standardized type

// The local Resume type is now removed

const ResumeModal = dynamic(
  () => import('../components/resumeModal').then((mod) => mod.ResumeModal),
  { ssr: false }
);

export default function HallPage() {
  const resumes: Resume[] = resumeData;
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);

  return (
    <main className="relative w-screen h-screen bg-gray-900 text-white">
      <ArmorScene resumes={resumes} onPedestalClick={(resume) => setSelectedResume(resume)} />
      
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center p-8 md:p-16 pointer-events-none">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-cyan-400">Hall of Armor</h1>
          <p className="text-lg text-gray-300 mt-2">Select an Armor to view its schematics.</p>
        </div>
      </div>

      <AnimatePresence>
        {selectedResume && (
          <ResumeModal resume={selectedResume} onClose={() => setSelectedResume(null)} />
        )}
      </AnimatePresence>
    </main>
  );
}