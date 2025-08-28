'use client';

import { useRef, useState, useEffect } from 'react';
import { Resume } from '@/app/types/types';

function ResumeDisplay({ resume, onClick }: { resume: Resume, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative flex-shrink-0 w-96 h-[500px] mx-8 cursor-pointer transition-all duration-700 
        ${isHovered ? 'scale-110 z-20' : 'scale-100'}
        perspective-1000
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Glow Ring */}
      <div className={`
        absolute inset-0 rounded-2xl transition-all duration-500 blur-xl
        ${isHovered 
          ? 'bg-gradient-to-r from-yellow-400/40 via-red-500/40 to-yellow-400/40 scale-110' 
          : 'bg-gradient-to-r from-red-800/20 via-gray-800/20 to-red-800/20 scale-100'
        }
      `} />

      {/* Main Card Container */}
      <div className={`
        relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900
        rounded-2xl border-2 transition-all duration-500 overflow-visible
        ${isHovered 
          ? 'border-yellow-400 shadow-2xl shadow-yellow-400/50 bg-gradient-to-br from-gray-800 via-black to-gray-800' 
          : 'border-red-800/60 shadow-xl shadow-red-800/30'
        }
      `}>
        
        {/* Animated Circuit Pattern Background */}
        <div className={`
          absolute inset-0 opacity-10 transition-opacity duration-500
          ${isHovered ? 'opacity-20' : 'opacity-10'}
        `}>
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 215, 0, 0.05) 0%, transparent 50%)
            `
          }} />
        </div>

        {/* Top Status Bar */}
        <div className={`
          relative z-10 h-16 px-6 pt-4 flex justify-between items-center
          border-b transition-all duration-300
          ${isHovered ? 'border-yellow-400/30' : 'border-red-800/30'}
        `}>
          <div className="flex items-center space-x-2">
            <div className={`
              w-3 h-3 rounded-full animate-pulse transition-colors duration-300
              ${resume.isLatest ? 'bg-green-400' : 'bg-gray-400'}
            `} />
            <span className={`
              text-xs font-mono uppercase tracking-wider transition-colors duration-300
              ${isHovered ? 'text-yellow-400' : 'text-red-400'}
            `}>
              {resume.isLatest ? 'ACTIVE' : 'ARCHIVED'}
            </span>
          </div>
          
          <div className="text-xs font-mono text-gray-400">
            {resume.date}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative z-10 px-8 py-6 h-full flex flex-col justify-center items-center text-center">
          
          {/* Mark Version - Large Central Display */}
          <div className="relative mb-8">
            <div className={`
              text-6xl font-bold font-mono tracking-wider transition-all duration-500
              bg-gradient-to-r bg-clip-text text-transparent
              ${isHovered 
                ? 'from-yellow-400 via-red-500 to-yellow-400 scale-110' 
                : 'from-yellow-600 via-red-700 to-yellow-600'
              }
            `}>
              MK {resume.version}
            </div>
            
            {/* Hexagonal Frame Around Version */}
            <div className={`
              absolute inset-0 flex items-center justify-center transition-all duration-500
              ${isHovered ? 'scale-125 opacity-60' : 'scale-100 opacity-30'}
            `}>
              <div className={`
                w-32 h-32 border-2 transition-colors duration-300
                ${isHovered ? 'border-yellow-400' : 'border-red-800'}
              `} style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
              }} />
            </div>
          </div>

          {/* Resume Name */}
          <div className={`
            text-xl font-semibold mb-4 max-w-full transition-colors duration-300 font-mono uppercase tracking-wide
            ${isHovered ? 'text-white' : 'text-gray-300'}
          `}>
            {resume.name}
          </div>

          {/* Divider Line */}
          <div className={`
            w-24 h-0.5 mb-6 transition-all duration-300
            ${isHovered ? 'bg-yellow-400 w-32' : 'bg-red-800 w-24'}
          `} />

          {/* Status Badge */}
          <div className={`
            px-6 py-2 rounded-full border-2 mb-8 font-mono text-sm uppercase tracking-wider transition-all duration-300
            ${resume.isLatest 
              ? isHovered
                ? 'text-green-300 border-green-300 bg-green-400/20 shadow-lg shadow-green-400/30'
                : 'text-green-400 border-green-400 bg-green-400/10'
              : isHovered
                ? 'text-gray-300 border-gray-300 bg-gray-400/20'
                : 'text-gray-500 border-gray-600 bg-gray-600/10'
            }
          `}>
            {resume.isLatest ? '◉ CURRENT BUILD' : '○ LEGACY BUILD'}
          </div>

          {/* Interactive Prompt */}
          <div className={`
            text-sm font-mono uppercase tracking-widest transition-all duration-300
            ${isHovered ? 'text-cyan-400 opacity-100 scale-105' : 'text-cyan-600 opacity-60'}
          `}>
            {isHovered ? '▶ ACCESSING PROTOCOLS' : '□ CLICK TO ACCESS'}
          </div>
        </div>

        {/* Holographic Corner Brackets - Always visible but enhanced on hover */}
        <div className={`
          absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 transition-all duration-300
          ${isHovered ? 'border-cyan-400 opacity-80' : 'border-yellow-400/40 opacity-40'}
        `} />
        <div className={`
          absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 transition-all duration-300
          ${isHovered ? 'border-cyan-400 opacity-80' : 'border-yellow-400/40 opacity-40'}
        `} />
        <div className={`
          absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 transition-all duration-300
          ${isHovered ? 'border-cyan-400 opacity-80' : 'border-yellow-400/40 opacity-40'}
        `} />
        <div className={`
          absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 transition-all duration-300
          ${isHovered ? 'border-cyan-400 opacity-80' : 'border-yellow-400/40 opacity-40'}
        `} />

        {/* Arc Reactor Style Center Glow - Only on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative">
              {/* Outer Ring */}
              <div className="w-48 h-48 rounded-full border border-yellow-400/20 animate-spin" style={{ animationDuration: '4s' }} />
              {/* Middle Ring */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-red-400/30 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              {/* Inner Pulse */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-cyan-400/50 animate-ping" />
              {/* Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-radial from-yellow-400/30 to-transparent" />
            </div>
          </div>
        )}

        {/* Power Lines Animation - Only on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent animate-pulse" />
            <div className="absolute top-0 right-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-red-400/50 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute left-0 top-1/4 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}
      </div>

      {/* Enhanced Floor Reflection */}
      <div className="absolute -bottom-8 left-0 w-full h-[500px] opacity-20 transform scale-y-[-1] scale-90">
        <div className={`
          w-full h-full bg-gradient-to-t from-transparent via-gray-900/20 to-transparent
          rounded-2xl border-2 transition-all duration-300 blur-sm
          ${isHovered ? 'border-yellow-400/20' : 'border-red-800/10'}
        `}>
          <div className="px-8 py-16 h-full flex flex-col justify-center items-center text-center">
            <div className="text-4xl font-bold mb-4 text-yellow-600/30 font-mono">MK {resume.version}</div>
            <div className="text-lg text-white/30 font-mono">{resume.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ArmorScene = ({ resumes, onPedestalClick }: { resumes: Resume[], onPedestalClick: (resume: Resume) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-visible">
      
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 0, 0, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 0, 0, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%)
          `,
          backgroundSize: '50px 50px, 50px 50px, 100% 100%'
        }} />
      </div>

      {/* Enhanced Atmospheric Particles */}
      <div className="absolute inset-0 overflow-visible pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`
              absolute rounded-full animate-pulse
              ${i % 3 === 0 ? 'w-1 h-1 bg-yellow-400' : i % 3 === 1 ? 'w-0.5 h-0.5 bg-red-400' : 'w-1.5 h-1.5 bg-cyan-400'}
              ${i % 4 === 0 ? 'opacity-60' : 'opacity-30'}
            `}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Gallery Container */}
      <div className="relative h-full flex items-center">
        
        {/* Scrollable Gallery with enhanced spacing */}
        <div 
          ref={scrollRef}
          className="flex items-center px-20 overflow-x-auto scrollbar-hide"
          style={{
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {resumes.map((resume, index) => (
            <ResumeDisplay
              key={resume.id}
              resume={resume}
              onClick={() => onPedestalClick(resume)}
            />
          ))}
        </div>

        {/* Enhanced Navigation Hints */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-yellow-400/70 animate-pulse">
          <div className="bg-black/60 p-3 rounded-full border border-yellow-400/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>
        
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-yellow-400/70 animate-pulse">
          <div className="bg-black/60 p-3 rounded-full border border-yellow-400/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom HUD */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/90 border-2 border-red-800 px-8 py-3 rounded-full backdrop-blur-sm">
          <div className="flex items-center space-x-6 text-sm font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
              <span className="text-yellow-400">STARK ARCHIVES</span>
            </div>
            <span className="text-red-400">|</span>
            <span className="text-white">SCROLL TO NAVIGATE</span>
            <span className="text-red-400">|</span>
            <span className="text-gray-400">{resumes.length} UNITS</span>
          </div>
        </div>
      </div>

      {/* Enhanced Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
      
      {/* Side Lighting Effects */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-red-900/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-red-900/20 to-transparent pointer-events-none" />
    </div>
  );
};