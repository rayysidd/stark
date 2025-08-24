'use client';

import { useRef, useState, useEffect } from 'react';
import { Resume } from '@/app/types/types';

function ResumeDisplay({ resume, onClick }: { resume: Resume, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`
        relative flex-shrink-0 w-80 h-96 mx-8 cursor-pointer transition-all duration-500 
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
      `}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display Frame */}
      <div className={`
        relative w-full h-full bg-gradient-to-br from-gray-900 to-black 
        border-2 transition-all duration-300
        ${isHovered ? 'border-yellow-400 shadow-2xl shadow-yellow-400/30' : 'border-red-800 shadow-lg shadow-red-800/20'}
      `}>
        
        {/* Glowing Border Effect */}
        <div className={`
          absolute inset-0 transition-all duration-300
          ${isHovered ? 'bg-gradient-to-r from-yellow-400/10 to-red-600/10' : 'bg-gradient-to-r from-red-800/5 to-yellow-600/5'}
        `} />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-center items-center text-center">
          
          {/* Version */}
          <div className={`
            text-3xl font-bold mb-4 transition-colors duration-300
            ${isHovered ? 'text-yellow-400' : 'text-yellow-600'}
          `}>
            MARK {resume.version}
          </div>

          {/* Name */}
          <div className="text-lg text-white mb-4 max-w-full">
            {resume.name}
          </div>

          {/* Date */}
          <div className="text-sm text-red-400 mb-4">
            {resume.date}
          </div>

          {/* Status */}
          <div className={`
            text-xs mb-6 px-3 py-1 rounded-full border
            ${resume.isLatest 
              ? 'text-green-400 border-green-400 bg-green-400/10' 
              : 'text-gray-400 border-gray-600 bg-gray-600/10'
            }
          `}>
            {resume.isLatest ? '● CURRENT VERSION' : '○ ARCHIVED'}
          </div>

          {/* Interactive Prompt */}
          <div className={`
            text-xs text-cyan-400 transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-60'}
          `}>
            CLICK TO ACCESS SCHEMATICS
          </div>

          {/* Holographic Corner Effects */}
          {isHovered && (
            <>
              <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-cyan-400 opacity-60" />
              <div className="absolute top-2 right-2 w-8 h-8 border-r-2 border-t-2 border-cyan-400 opacity-60" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-l-2 border-b-2 border-cyan-400 opacity-60" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-cyan-400 opacity-60" />
            </>
          )}
        </div>

        {/* Arc Reactor Style Glow */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 rounded-full border-2 border-cyan-400/30 animate-spin" style={{ animationDuration: '3s' }} />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-yellow-400/40 animate-ping" />
            </div>
          </div>
        )}
      </div>

      {/* Floor Reflection Effect */}
      <div className="absolute -bottom-4 left-0 w-full h-96 opacity-20 transform scale-y-[-1]">
        <div className={`
          w-full h-full bg-gradient-to-t from-transparent via-gray-900/30 to-transparent
          border-2 transition-all duration-300
          ${isHovered ? 'border-yellow-400/20' : 'border-red-800/20'}
        `}>
          <div className="p-6 h-full flex flex-col justify-center items-center text-center blur-sm">
            <div className="text-3xl font-bold mb-4 text-yellow-600/50">MARK {resume.version}</div>
            <div className="text-lg text-white/50 mb-4">{resume.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ArmorScene = ({ resumes, onPedestalClick }: { resumes: Resume[], onPedestalClick: (resume: Resume) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
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
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Gallery Container */}
      <div className="relative h-full flex items-center">
        
        {/* Scrollable Gallery */}
        <div 
          ref={scrollRef}
          className="flex items-center px-16 overflow-x-auto scrollbar-hide"
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

        {/* Navigation Hints */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400/60 animate-pulse">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-400/60 animate-pulse">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-black/80 border border-red-800 px-6 py-2 rounded-full">
          <div className="flex items-center space-x-4 text-sm">
            <span className="text-yellow-400">●</span>
            <span className="text-white">STARK INDUSTRIES ARCHIVES</span>
            <span className="text-red-400">|</span>
            <span className="text-gray-400">SCROLL TO BROWSE</span>
          </div>
        </div>
      </div>

      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
    </div>
  );
};
