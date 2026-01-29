
import React from 'react';
import { Cloud, Database, Cpu, Zap, Server, Code2, Brain, Sparkles } from 'lucide-react';

const FloatingTechIcons = () => {
  const icons = [
    { Icon: Cloud, color: 'text-blue-400', delay: '0s', position: 'top-[15%] left-[10%]' },
    { Icon: Database, color: 'text-purple-400', delay: '1s', position: 'top-[25%] right-[15%]' },
    { Icon: Cpu, color: 'text-cyan-400', delay: '2s', position: 'top-[60%] left-[8%]' },
    { Icon: Zap, color: 'text-yellow-400', delay: '3s', position: 'top-[70%] right-[12%]' },
    { Icon: Server, color: 'text-green-400', delay: '4s', position: 'top-[40%] left-[5%]' },
    { Icon: Code2, color: 'text-pink-400', delay: '5s', position: 'top-[45%] right-[8%]' },
    { Icon: Brain, color: 'text-orange-400', delay: '6s', position: 'top-[80%] left-[15%]' },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {icons.map(({ Icon, color, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-parallax-float opacity-10 hover:opacity-30 transition-opacity duration-500`}
          style={{ animationDelay: delay }}
        >
          <div className="relative">
            <Icon size={48} className={`${color} drop-shadow-lg`} />
            <div className={`absolute inset-0 ${color} blur-xl opacity-50`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingTechIcons;
