// stark-resume/app/components/ResumeModal.tsx

'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';

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
  
  // Prevent background scrolling and handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      // Prevent arrow keys from affecting background scroll
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        e.stopPropagation();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Allow scrolling within modal content, but prevent background scroll
      e.stopPropagation();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.body.style.overflow = 'hidden'; // Prevent body scroll

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto'; // Restore body scroll
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 z-50 flex justify-center items-center backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ 
        backdropFilter: 'blur(8px) saturate(150%)',
      }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-gray-900/95 to-black/95 border-2 border-red-800 w-full max-w-6xl h-[95vh] rounded-lg shadow-2xl shadow-red-800/30 flex flex-col overflow-hidden backdrop-blur-sm"
        initial={{ y: -50, opacity: 0, scale: 0.9, rotateX: -10 }}
        animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
        exit={{ y: 50, opacity: 0, scale: 0.9, rotateX: 10 }}
        transition={{ 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          opacity: { duration: 0.2 }
        }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(0, 0, 0, 0.95) 100%)',
          boxShadow: '0 25px 50px -12px rgba(239, 68, 68, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        }}
      >
        {/* Animated Border Glow */}
        <div 
          className="absolute inset-0 rounded-lg pointer-events-none opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent)',
            animation: 'borderGlow 3s ease-in-out infinite alternate',
          }}
        />
        
        {/* Enhanced Corner Brackets with Animation */}
        <motion.div 
          className="absolute top-3 left-3 w-10 h-10 border-l-2 border-t-2 border-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.div 
          className="absolute top-3 right-3 w-10 h-10 border-r-2 border-t-2 border-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-3 left-3 w-10 h-10 border-l-2 border-b-2 border-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.4 }}
        />
        <motion.div 
          className="absolute bottom-3 right-3 w-10 h-10 border-r-2 border-b-2 border-yellow-400"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 0.5 }}
        />

        {/* Enhanced Header */}
        <motion.div 
          className="relative p-6 border-b border-red-800/50 flex-shrink-0"
          style={{
            background: 'linear-gradient(90deg, rgba(153, 27, 27, 0.2) 0%, rgba(180, 83, 9, 0.2) 100%)',
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-2 font-mono tracking-wide">
                MARK {resume.version}: {resume.name}
              </h2>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-red-400 font-semibold">STARK INDUSTRIES ARCHIVES</span>
                <span className="text-gray-500">●</span>
                <span className="text-gray-400">CLASSIFIED SCHEMATICS</span>
                <span className="text-gray-500">●</span>
                <span className="text-blue-400">LEVEL 10 CLEARANCE</span>
              </div>
            </div>
            <motion.button 
              onClick={onClose} 
              className="group relative text-gray-400 hover:text-yellow-400 text-4xl transition-all duration-300 p-3 rounded-full border border-red-800/30 hover:border-yellow-400/50 hover:bg-red-900/20"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">×</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-yellow-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Content */}
        <div className="flex-grow flex flex-col lg:flex-row overflow-hidden">
          {/* Left Side: Enhanced Changelog */}
          <motion.div 
            className="w-full lg:w-1/3 p-6 overflow-y-auto flex-shrink-0 border-r-0 lg:border-r border-red-800/30"
            style={{
              background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)',
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            
            {/* Enhanced System Status */}
            <motion.div 
              className="mb-6 p-4 rounded-lg border border-yellow-600/40 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(180, 83, 9, 0.1) 0%, rgba(34, 197, 94, 0.1) 100%)',
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-green-500/5 animate-pulse" />
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-green-400 text-sm font-bold tracking-wider">SYSTEM ONLINE</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>⚡ Armor integrity: 100%</div>
                  <div>🛡️ Defense systems: Active</div>
                  <div>🔋 Power core: Stable</div>
                  <div>📡 Communication: Online</div>
                </div>
              </div>
            </motion.div>

            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400 mb-6 flex items-center">
              <motion.span 
                className="mr-3 text-yellow-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.span>
              UPGRADE DETAILS
            </h3>
            
            <div className="space-y-3">
              {resume.changelog.map((change, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-900/20 transition-all duration-300 group border-l-2 border-transparent hover:border-yellow-400/50"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.span 
                    className={`text-lg mt-0.5 ${change.startsWith('+') ? 'text-green-400' : 'text-yellow-400'}`}
                    whileHover={{ scale: 1.2 }}
                  >
                    {change.startsWith('+') ? '◆' : '◇'}
                  </motion.span>
                  <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                    {change.substring(1).trim()}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Download Button */}
            <motion.div 
              className="mt-8 pt-6 border-t border-red-800/30"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={resume.pdfUrl}
                download
                className="block w-full text-center relative overflow-hidden rounded-lg font-bold py-4 px-6 transition-all duration-300 group"
                style={{
                  background: 'linear-gradient(135deg, #dc2626 0%, #f59e0b 100%)',
                  boxShadow: '0 10px 20px rgba(239, 68, 68, 0.3)',
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center space-x-3 text-black">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⬇
                  </motion.span>
                  <span className="tracking-wider">DOWNLOAD SCHEMATICS</span>
                </span>
              </motion.a>
              
              <div className="text-xs text-gray-500 text-center mt-3 flex items-center justify-center space-x-2">
                <span>🔒</span>
                <span>Security clearance verified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Enhanced PDF Viewer */}
          <motion.div 
            className="flex-grow relative rounded-br-lg overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)',
            }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            
            <div className="absolute inset-2 rounded-md overflow-hidden">
              <iframe
                src={`${resume.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                className="w-full h-full border-none rounded-md bg-white" 
                title={`Resume ${resume.name}`}
                style={{ 
                  filter: 'sepia(3%) saturate(110%) hue-rotate(340deg) brightness(1.1)',
                }}
              />
            </div>
            
            {/* Enhanced Scan Lines Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255, 215, 0, 0.15) 3px, rgba(255, 215, 0, 0.15) 6px)',
                  animation: 'scanLines 2s linear infinite',
                }}
              />
            </div>

            {/* Loading Overlay */}
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-black/60 rounded-full px-3 py-1 backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400">DECRYPTING</span>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Status Bar */}
        <motion.div 
          className="p-4 border-t border-red-800/30 flex-shrink-0"
          style={{
            background: 'linear-gradient(90deg, rgba(153, 27, 27, 0.1) 0%, rgba(180, 83, 9, 0.1) 100%)',
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <motion.span 
                className="text-yellow-400 text-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ●
              </motion.span>
              <span className="text-white font-semibold">STARK INDUSTRIES</span>
              <span className="text-red-400">●</span>
              <span className="text-gray-400">ARMOR SPECIFICATIONS</span>
              <span className="text-red-400">●</span>
              <span className="text-blue-400">REAL-TIME ANALYSIS</span>
            </div>
            <div className="text-gray-500 flex items-center space-x-2">
              <span>Press</span>
              <kbd className="px-2 py-1 bg-gray-800 rounded text-yellow-400 border border-gray-600">ESC</kbd>
              <span>to exit</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes borderGlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes scanLines {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </motion.div>
  );
};