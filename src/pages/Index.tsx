
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import { ThemeProvider } from '../contexts/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-900 dark:bg-gray-900 bg-white text-white dark:text-white text-gray-900 relative overflow-x-hidden transition-colors duration-300">
        <ParticleBackground />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default Index;
