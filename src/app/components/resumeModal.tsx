// stark-resume/app/components/ResumeModal.tsx

'use client';

import { motion } from 'framer-motion';

type Resume = {
  id: string;
  version: number;
  name: string;
  pdfUrl: string;
  changelog: string[];
};

type ModalProps = {
  resume: Resume;
  onClose: () => void;
};

export const ResumeModal = ({ resume, onClose }: ModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gray-900 border border-cyan-500/30 w-full max-w-4xl h-[90vh] rounded-lg shadow-2xl shadow-cyan-500/10 flex flex-col overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-700 flex-shrink-0">
          <h2 className="text-2xl font-bold text-cyan-400">Mark {resume.version}: {resume.name}</h2>
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          {/* Left Side: Changelog */}
          <div className="w-full md:w-1/3 p-6 overflow-y-auto flex-shrink-0 border-r-0 md:border-r border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Key Upgrades</h3>
            <ul className="space-y-2">
              {resume.changelog.map((change, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  <span className="text-cyan-400 mr-2">{change.startsWith('+') ? '◆' : '◇'}</span>
                  {change.substring(1).trim()}
                </li>
              ))}
            </ul>
             <a
              href={resume.pdfUrl}
              download
              className="mt-8 inline-block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Download PDF
            </a>
          </div>

          {/* Right Side: PDF Viewer */}
          <div className="flex-grow bg-gray-800 p-1 rounded-b-lg">
            <iframe
              // The URL is updated here to hide the default toolbar
              src={`${resume.pdfUrl}#toolbar=0`}
              className="w-full h-full border-none rounded-b-md" // Added rounded corners
              title={`Resume ${resume.name}`}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};