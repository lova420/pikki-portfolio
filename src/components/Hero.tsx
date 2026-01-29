
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Phone, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    'GCP Data Engineer',
    'Databricks Data Engineer',
    'AI/ML Engineer'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, roles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate parallax offset based on mouse position
  const parallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const parallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative floating elements */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-parallax-float"
        style={{ transform: `translate(${parallaxX * 2}px, ${parallaxY * 2}px)` }}
      />
      <div 
        className="absolute top-40 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/15 to-cyan-500/15 blur-xl animate-parallax-float"
        style={{ animationDelay: '2s', transform: `translate(${-parallaxX * 1.5}px, ${parallaxY * 1.5}px)` }}
      />
      <div 
        className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl animate-parallax-float"
        style={{ animationDelay: '4s', transform: `translate(${parallaxX}px, ${-parallaxY}px)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">

        {/* 3D Name with hover effect */}
        <h1 
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text mt-24 pb-2 animate-gradient-x cursor-default text-glow-hover transition-all duration-300"
          style={{
            transform: `perspective(1000px) rotateX(${parallaxY * 0.1}deg) rotateY(${parallaxX * 0.1}deg)`,
          }}
        >
          Pikki Lovaraju
        </h1>

        <div className="text-xl sm:text-2xl md:text-4xl font-light mb-6 min-h-[4rem] flex flex-col sm:flex-row items-center justify-center mt-4 gap-1 sm:gap-0">
          <span className="text-gray-200">I'm a </span>
          <span className="text-blue-400 font-semibold sm:ml-2 text-center sm:text-left">
            {displayText}
            <span className="animate-pulse text-purple-400">|</span>
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Data Engineer & AI Engineer with expertise in GCP, Databricks, and AI-driven data engineering. 
          Passionate about building scalable data pipelines, integrating AI/ML models into data workflows, 
          and delivering intelligent data processing and analytics solutions.
        </p>

        {/* Glassmorphism contact badges with 3D hover */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-200">
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/40 backdrop-blur-md rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 card-3d-hover cursor-default">
            <MapPin size={18} className="text-blue-400" />
            <span className="text-sm">Chirala, India</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/40 backdrop-blur-md rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 card-3d-hover cursor-default">
            <Mail size={18} className="text-blue-400" />
            <span className="text-sm">lovarajupikki123@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gray-800/40 backdrop-blur-md rounded-full border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 card-3d-hover cursor-default">
            <Phone size={18} className="text-blue-400" />
            <span className="text-sm">+91 8465831285</span>
          </div>
        </div>

        {/* Magnetic buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <MagneticButton
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 animate-glow-pulse"
          >
            Explore My Work
          </MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/pikki-lovaraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
          >
            LinkedIn Profile
          </MagneticButton>
        </div>

        {/* Centered down arrow */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollToAbout}
            className="animate-bounce hover:scale-125 transition-transform duration-300"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
