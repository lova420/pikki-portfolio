
import React from 'react';
import { Code, Database, Cloud, Brain, User } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Expert in designing scalable cloud solutions using Google Cloud Platform',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines for efficient data processing and analytics',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Integrating machine learning models into data workflows for intelligent processing',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Proficient in Python, SQL, and modern data engineering frameworks',
      gradient: 'from-orange-500 to-yellow-500'
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
            <User size={18} className="text-blue-400" />
            <span className="text-blue-400 font-medium text-sm tracking-wide uppercase">Get to Know Me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Passionate about transforming data into actionable insights through innovative cloud solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-10 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              Profile Summary
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg">
              As a dedicated GCP Data Engineer, I specialize in designing, building, and optimizing 
              scalable data pipelines using cutting-edge technologies like BigQuery, Cloud SQL, 
              Apache Airflow, and Cloud Composer. My expertise extends to integrating AI and Machine 
              Learning models into data workflows, enabling intelligent data processing and analytics.
            </p>
            <p className="text-gray-200 leading-relaxed text-lg">
              With hands-on experience at Bilvantis Technologies, I've successfully implemented 
              cloud data solutions that drive business value and enable data-driven decision making. 
              I'm passionate about staying at the forefront of data engineering innovations and 
              continuously expanding my expertise in cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 perspective-1000">
            {highlights.map((item, index) => (
              <TiltCard3D key={index} className="h-full" tiltIntensity={12}>
                <div className="p-6 bg-gray-900/70 rounded-2xl border border-gray-700/50 min-h-[220px] h-full backdrop-blur-sm relative overflow-hidden group flex flex-col">
                  {/* Animated border glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, transparent 50%, rgba(168, 85, 247, 0.08) 100%)',
                    }}
                  />
                  
                  {/* 3D floating icon with rotation on hover */}
                  <div 
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.gradient} mb-5 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <item.icon size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-200 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              </TiltCard3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
