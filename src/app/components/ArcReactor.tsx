// stark-resume/app/components/ArcReactor.tsx

import Link from 'next/link';

export const ArcReactor = () => {
  return (
    <Link
      href="/hall"
      className="group relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
      aria-label="Enter Hall of Armor"
    >
      {/* Multi-layered Glow Effect - Blue/White */}
      <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-3xl group-hover:bg-cyan-400/50 transition-all duration-500 animate-pulse"></div>
      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/40 transition-all duration-700 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* SVG for the Arc Reactor */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      >
        {/* Outer Ring - Silver/Metallic */}
        <circle 
          cx="100" 
          cy="100" 
          r="90" 
          fill="none" 
          stroke="#C0C0C0" 
          strokeWidth="4" 
          opacity="0.8"
          className="animate-pulse"
        />
        
        {/* Middle Ring - Light Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="75" 
          fill="none" 
          stroke="#87CEEB" 
          strokeWidth="3" 
          opacity="0.6" 
        />
        
        {/* Inner Ring - Bright Blue */}
        <circle 
          cx="100" 
          cy="100" 
          r="40" 
          fill="none" 
          stroke="#00BFFF" 
          strokeWidth="2" 
          opacity="0.9" 
        />

        {/* Center glowing circle */}
        <circle cx="100" cy="100" r="30" fill="url(#arcReactorGlow)" />
        
        {/* Additional inner glow */}
        <circle cx="100" cy="100" r="15" fill="url(#innerGlow)" opacity="0.8" />

        <defs>
          {/* Main Arc Reactor Gradient - Blue to White */}
          <radialGradient id="arcReactorGlow">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E0F6FF" />
            <stop offset="70%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#4169E1" />
          </radialGradient>
          
          {/* Inner Core Gradient - Bright White/Blue */}
          <radialGradient id="innerGlow">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E0F6FF" />
            <stop offset="100%" stopColor="#00BFFF" />
          </radialGradient>
        </defs>

        {/* Energy Coils - Alternating Blue and Silver */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          const isBlue = i % 2 === 0;
          return (
            <line
              key={i}
              x1={100 + 40 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 40 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 75 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 75 * Math.sin((angle * Math.PI) / 180)}
              stroke={isBlue ? "#00BFFF" : "#C0C0C0"}
              strokeWidth="4"
              opacity="0.8"
              className="group-hover:opacity-100 transition-opacity duration-300"
            />
          );
        })}

        {/* Additional Energy Lines for more detail */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = i * 45 + 22.5; // Offset by 22.5 degrees
          return (
            <line
              key={`inner-${i}`}
              x1={100 + 15 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 15 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 35 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 35 * Math.sin((angle * Math.PI) / 180)}
              stroke="#87CEEB"
              strokeWidth="2"
              opacity="0.6"
              className="group-hover:opacity-90 transition-opacity duration-300"
            />
          );
        })}

        {/* Rotating Energy Ring */}
        <circle 
          cx="100" 
          cy="100" 
          r="60" 
          fill="none" 
          stroke="url(#rotatingGradient)" 
          strokeWidth="1" 
          opacity="0.7"
          className="animate-spin"
          style={{ animationDuration: '4s' }}
        />

        <defs>
          <linearGradient id="rotatingGradient">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="25%" stopColor="#00BFFF" />
            <stop offset="50%" stopColor="transparent" />
            <stop offset="75%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* Call to Action Text - Keep Red/Gold for UI Elements */}
      <div className="absolute text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 -bottom-12">
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 bg-clip-text text-transparent font-bold text-lg">
          ⚡ ACCESS ARCHIVES ⚡
        </div>
        <div className="text-xs text-gray-400 mt-1">
          STARK INDUSTRIES
        </div>
      </div>

      {/* Pulsing Ring Effect on Hover - Blue */}
      <div className="absolute inset-0 border-2 border-cyan-400 rounded-full opacity-0 group-hover:opacity-60 group-hover:scale-125 transition-all duration-1000"></div>
    </Link>
  );
};
