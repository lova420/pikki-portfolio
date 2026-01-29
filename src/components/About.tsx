
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';
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
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights through innovative cloud solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Profile Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              As a dedicated GCP Data Engineer, I specialize in designing, building, and optimizing 
              scalable data pipelines using cutting-edge technologies like BigQuery, Cloud SQL, 
              Apache Airflow, and Cloud Composer. My expertise extends to integrating AI and Machine 
              Learning models into data workflows, enabling intelligent data processing and analytics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With hands-on experience at Bilvantis Technologies, I've successfully implemented 
              cloud data solutions that drive business value and enable data-driven decision making. 
              I'm passionate about staying at the forefront of data engineering innovations and 
              continuously expanding my expertise in cloud technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 perspective-1000">
            {highlights.map((item, index) => (
              <TiltCard3D key={index} className="h-full" tiltIntensity={12}>
                <div className="p-6 bg-gray-900/60 rounded-xl border border-gray-700/50 h-full backdrop-blur-sm relative overflow-hidden group">
                  {/* Animated border glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{
                      background: 'linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
                    }}
                  />
                  
                  {/* 3D floating icon with rotation on hover */}
                  <div 
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4 shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <item.icon size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
