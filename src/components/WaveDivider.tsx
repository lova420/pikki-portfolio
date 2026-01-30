
import React from 'react';

interface WaveDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
  flip = false,
  color = 'rgba(31, 41, 55, 0.5)',
  className = ''
}) => {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
      style={{ marginTop: flip ? '-1px' : '0', marginBottom: flip ? '0' : '-1px' }}
    >
      <svg
        className="relative block w-full h-[60px] md:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Background wave */}
        <path
          d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"
          fill={color}
          className="animate-wave-slow"
        />

        {/* Middle wave with gradient */}
        <path
          d="M0,80 C200,20 400,100 600,60 C800,20 1000,100 1200,60 L1200,120 L0,120 Z"
          fill="url(#waveGradient)"
          className="animate-wave-medium"
          style={{ opacity: 0.5 }}
        />

        {/* Front wave */}
        <path
          d="M0,90 C150,50 300,110 600,70 C900,30 1050,110 1200,70 L1200,120 L0,120 Z"
          fill={color}
          className="animate-wave-fast"
        />
      </svg>

      <style>{`
        @keyframes wave-slow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }
        @keyframes wave-medium {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25px); }
        }
        @keyframes wave-fast {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-15px); }
        }
        .animate-wave-slow {
          animation: wave-slow 8s ease-in-out infinite;
        }
        .animate-wave-medium {
          animation: wave-medium 6s ease-in-out infinite;
        }
        .animate-wave-fast {
          animation: wave-fast 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default WaveDivider;
