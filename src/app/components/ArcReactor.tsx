// stark-resume/app/components/ArcReactor.tsx

import Link from 'next/link';

export const ArcReactor = () => {
  return (
    <Link
      href="/hall"
      className="group relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
      aria-label="Enter Hall of Armor"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-cyan-400/30 rounded-full blur-2xl group-hover:bg-cyan-400/50 transition-all duration-500 animate-pulse"></div>

      {/* SVG for the Arc Reactor */}
      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full transition-transform duration-500 group-hover:scale-110"
      >
        {/* Outer Ring */}
        <circle cx="100" cy="100" r="90" fill="none" stroke="#22d3ee" strokeWidth="4" opacity="0.5" />
        
        {/* Inner concentric rings */}
        <circle cx="100" cy="100" r="75" fill="none" stroke="#67e8f9" strokeWidth="2" opacity="0.3" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="#a5f3fc" strokeWidth="1" opacity="0.7" />

        {/* Center glowing circle */}
        <circle cx="100" cy="100" r="30" fill="url(#centerGlow)" />
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#67e8f9" />
          </radialGradient>
        </defs>

        {/* Coil Wraps */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = i * 30;
          return (
            <line
              key={i}
              x1={100 + 40 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 40 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 75 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 75 * Math.sin((angle * Math.PI) / 180)}
              stroke="#67e8f9"
              strokeWidth="5"
              opacity="0.8"
            />
          );
        })}
      </svg>
      <span className="absolute text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-bold -bottom-10">
        Initialize Archives
      </span>
    </Link>
  );
};