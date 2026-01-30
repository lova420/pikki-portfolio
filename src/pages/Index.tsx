
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
import CursorTrail from '../components/CursorTrail';
import GlowingOrbs from '../components/GlowingOrbs';
import WaveDivider from '../components/WaveDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-x-hidden">
      {/* Cursor trail effect */}
      <CursorTrail />

      {/* Background layers */}
      <FloatingBlobs />
      <FloatingTechIcons />
      <ParticleBackground />
      <GlowingOrbs />

      {/* Content */}
      <Navbar />
      <Hero />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" />
      <About />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" flip />
      <Experience />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" />
      <Skills />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" flip />
      <Education />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" />
      <Certifications />
      <WaveDivider color="rgba(31, 41, 55, 0.3)" flip />
      <Contact />
    </div>
  );
};

export default Index;
