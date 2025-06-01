
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Data Engineer";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
            Pikki Lovaraju
          </h1>
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 min-h-[2em] flex items-center justify-center">
            <span>I'm a </span>
            <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
              {displayText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            GCP Data Engineer with expertise in AI-driven data engineering, big data processing, and cloud-based solutions. 
            Passionate about integrating AI/ML models into data workflows for intelligent data processing and analytics.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.linkedin.com/in/pikki-lovaraju/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lovarajupikki123@gmail.com"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="animate-bounce p-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
