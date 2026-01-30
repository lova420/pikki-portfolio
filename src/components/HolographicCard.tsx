
import React, { useRef, useState, useCallback } from 'react';

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const HolographicCard: React.FC<HolographicCardProps> = ({
  children,
  className = '',
  intensity = 1
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [rainbowAngle, setRainbowAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10 * intensity;
    const rotateY = ((x - centerX) / centerX) * 10 * intensity;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
    setRainbowAngle(Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90);
  }, [intensity]);

  const handleMouseLeave = useCallback(() => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setIsHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Rainbow holographic overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 overflow-hidden"
        style={{
          opacity: isHovered ? 0.4 : 0,
          transition: 'opacity 0.3s ease',
          background: `linear-gradient(${rainbowAngle}deg,
            rgba(255, 0, 0, 0.1) 0%,
            rgba(255, 154, 0, 0.1) 10%,
            rgba(208, 222, 33, 0.1) 20%,
            rgba(79, 220, 74, 0.1) 30%,
            rgba(63, 218, 216, 0.1) 40%,
            rgba(47, 201, 226, 0.1) 50%,
            rgba(28, 127, 238, 0.1) 60%,
            rgba(95, 21, 242, 0.1) 70%,
            rgba(186, 12, 248, 0.1) 80%,
            rgba(251, 7, 217, 0.1) 90%,
            rgba(255, 0, 0, 0.1) 100%
          )`,
          mixBlendMode: 'overlay'
        }}
      />

      {/* Glare effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.1) 20%,
            transparent 50%
          )`
        }}
      />

      {/* Shimmer sweep effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10 overflow-hidden"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.5s ease',
          background: `linear-gradient(
            105deg,
            transparent 20%,
            rgba(255, 255, 255, 0.1) 35%,
            rgba(255, 255, 255, 0.2) 40%,
            rgba(255, 255, 255, 0.1) 45%,
            transparent 60%
          )`,
          backgroundSize: '200% 200%',
          animation: isHovered ? 'holographic-shimmer 2s ease-in-out infinite' : 'none'
        }}
      />

      {/* Prismatic edge glow */}
      <div
        className="absolute -inset-[2px] rounded-2xl pointer-events-none z-0"
        style={{
          opacity: isHovered ? 0.7 : 0,
          transition: 'opacity 0.3s ease',
          background: `linear-gradient(${rainbowAngle + 45}deg,
            #ff0080, #ff8c00, #40e0d0, #7b68ee, #ff0080
          )`,
          filter: 'blur(4px)'
        }}
      />

      {/* Card content */}
      <div className="relative z-30">
        {children}
      </div>

      <style>{`
        @keyframes holographic-shimmer {
          0% {
            background-position: 200% 50%;
          }
          100% {
            background-position: -200% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default HolographicCard;
