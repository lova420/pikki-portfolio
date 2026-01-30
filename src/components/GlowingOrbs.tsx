
import React from 'react';

interface OrbConfig {
  size: number;
  color: string;
  x: string;
  y: string;
  delay: number;
  duration: number;
}

interface GlowingOrbsProps {
  count?: number;
  className?: string;
}

const defaultOrbs: OrbConfig[] = [
  { size: 300, color: 'rgba(59, 130, 246, 0.15)', x: '10%', y: '20%', delay: 0, duration: 15 },
  { size: 250, color: 'rgba(139, 92, 246, 0.12)', x: '80%', y: '10%', delay: 2, duration: 18 },
  { size: 200, color: 'rgba(236, 72, 153, 0.1)', x: '70%', y: '60%', delay: 4, duration: 20 },
  { size: 280, color: 'rgba(6, 182, 212, 0.12)', x: '20%', y: '70%', delay: 1, duration: 16 },
  { size: 220, color: 'rgba(16, 185, 129, 0.1)', x: '50%', y: '40%', delay: 3, duration: 22 },
];

const GlowingOrbs: React.FC<GlowingOrbsProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {defaultOrbs.map((orb, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(40px)',
            animation: `float-orb-${index} ${orb.duration}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      <style>{`
        @keyframes float-orb-0 {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          25% { transform: translate(-50%, -50%) translate(30px, -20px); }
          50% { transform: translate(-50%, -50%) translate(-20px, 30px); }
          75% { transform: translate(-50%, -50%) translate(20px, 20px); }
        }
        @keyframes float-orb-1 {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          25% { transform: translate(-50%, -50%) translate(-25px, 25px); }
          50% { transform: translate(-50%, -50%) translate(25px, -15px); }
          75% { transform: translate(-50%, -50%) translate(-15px, -25px); }
        }
        @keyframes float-orb-2 {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          33% { transform: translate(-50%, -50%) translate(20px, 30px); }
          66% { transform: translate(-50%, -50%) translate(-30px, -10px); }
        }
        @keyframes float-orb-3 {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          50% { transform: translate(-50%, -50%) translate(35px, -25px); }
        }
        @keyframes float-orb-4 {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          25% { transform: translate(-50%, -50%) translate(-20px, -30px); }
          50% { transform: translate(-50%, -50%) translate(30px, 20px); }
          75% { transform: translate(-50%, -50%) translate(10px, -20px); }
        }
      `}</style>
    </div>
  );
};

export default GlowingOrbs;
