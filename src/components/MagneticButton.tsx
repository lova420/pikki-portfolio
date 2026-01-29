
import React, { useRef, useState } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = '', 
  onClick,
  href,
  target,
  rel
}) => {
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: isHovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out',
  };

  const commonProps = {
    ref: buttonRef as any,
    className: `relative overflow-hidden ${className}`,
    style,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  };

  if (href) {
    return (
      <a {...commonProps} href={href} target={target} rel={rel}>
        <span className="relative z-10">{children}</span>
        {/* Ripple effect */}
        <div 
          className={`absolute inset-0 bg-white/20 transition-transform duration-500 ${isHovered ? 'scale-150' : 'scale-0'}`}
          style={{ borderRadius: '50%', transformOrigin: 'center' }}
        />
      </a>
    );
  }

  return (
    <button {...commonProps} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      {/* Ripple effect */}
      <div 
        className={`absolute inset-0 bg-white/10 transition-transform duration-500 ${isHovered ? 'scale-150' : 'scale-0'}`}
        style={{ borderRadius: '50%', transformOrigin: 'center' }}
      />
    </button>
  );
};

export default MagneticButton;
