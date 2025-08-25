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
      className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-red-800 w-full max-w-5xl h-[90vh] rounded-lg shadow-2xl shadow-red-800/20 flex flex-col overflow-hidden"
        initial={{ y: -50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-red-600/10 to-yellow-400/10 rounded-lg pointer-events-none" />
        
        {/* Corner Brackets */}
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-yellow-400 opacity-60" />
        <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-yellow-400 opacity-60" />
        <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-yellow-400 opacity-60" />
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-yellow-400 opacity-60" />

        {/* Header */}
        <div className="relative p-6 border-b border-red-800/50 flex-shrink-0 bg-gradient-to-r from-red-900/20 to-yellow-900/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-yellow-400 mb-1">
                MARK {resume.version}: {resume.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-red-400">STARK INDUSTRIES ARCHIVES</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-400">CLASSIFIED SCHEMATICS</span>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-yellow-400 text-3xl transition-colors duration-200 p-2"
            >
              ×
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">
          {/* Left Side: Changelog */}
          <div className="w-full md:w-1/3 p-6 overflow-y-auto flex-shrink-0 border-r-0 md:border-r border-red-800/30 bg-gradient-to-b from-gray-900/50 to-black/50">
            
            {/* System Status */}
            <div className="mb-6 p-4 border border-yellow-600/30 rounded bg-yellow-900/10">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-semibold">SYSTEM ONLINE</span>
              </div>
              <div className="text-xs text-gray-400">
                Armor integrity: 100%<br/>
                All systems operational
              </div>
            </div>

            <h3 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
              <span className="mr-2">⚡</span>
              Details
            </h3>
            
            <div className="space-y-3">
              {resume.changelog.map((change, index) => (
                <div key={index} className="flex items-start space-x-3 p-2 rounded hover:bg-red-900/10 transition-colors">
                  <span className={`text-sm mt-1 ${change.startsWith('+') ? 'text-green-400' : 'text-yellow-400'}`}>
                    {change.startsWith('+') ? '◆' : '◇'}
                  </span>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {change.substring(1).trim()}
                  </span>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-8 pt-6 border-t border-red-800/30">
              <a
                href={resume.pdfUrl}
                download
                className="block w-full text-center bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-500 hover:to-yellow-400 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>⬇</span>
                  <span>DOWNLOAD SCHEMATICS</span>
                </span>
              </a>
              
              <div className="text-xs text-gray-500 text-center mt-2">
                Security clearance required
              </div>
            </div>
          </div>

          {/* Right Side: PDF Viewer */}
          <div className="flex-grow bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-b-lg relative">
            
            
            <iframe
              src={`${resume.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-full border-none rounded-md bg-white" 
              title={`Resume ${resume.name}`}
              style={{ 
                filter: 'sepia(5%) saturate(120%) hue-rotate(345deg)',
              }}
            />
            
            {/* Scan Lines Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 215, 0, 0.1) 2px, rgba(255, 215, 0, 0.1) 4px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="p-4 border-t border-red-800/30 bg-gradient-to-r from-red-900/10 to-yellow-900/10">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400">●</span>
              <span className="text-white">STARK INDUSTRIES</span>
              <span className="text-red-400">|</span>
              <span className="text-gray-400">ARMOR SPECIFICATIONS</span>
            </div>
            <div className="text-gray-500">
              Press ESC to exit
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
