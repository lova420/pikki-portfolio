
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
import FloatingBlobs from '../components/FloatingBlobs';
import FloatingTechIcons from '../components/FloatingTechIcons';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Background layers */}
      <FloatingBlobs />
      <FloatingTechIcons />
      <ParticleBackground />
      
      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
