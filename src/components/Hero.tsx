
import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'GCP Data Engineer',
    'Cloud Solutions Architect',
    'AI/ML Data Specialist',
    'Big Data Engineer'
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

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          Pikki Lovaraju
        </h1>

        <div className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
          <span className="text-gray-300">I'm a </span>
          <span className="text-blue-400 font-semibold ml-2 min-w-[300px] text-left">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          GCP Data Engineer with expertise in AI-driven data engineering, big data processing, 
          and cloud-based solutions. Passionate about integrating AI/ML models into data workflows 
          for intelligent data processing and analytics.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-blue-400" />
            <span>Chirala, India</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={20} className="text-blue-400" />
            <span>lovarajupikki123@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} className="text-blue-400" />
            <span>+91 8465831285</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Explore My Work
          </button>
          <a
            href="https://www.linkedin.com/in/pikki-lovaraju/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            LinkedIn Profile
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
