
import React from 'react';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Expert in designing scalable cloud solutions using Google Cloud Platform'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Building robust data pipelines for efficient data processing and analytics'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Integrating machine learning models into data workflows for intelligent processing'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Proficient in Python, SQL, and modern data engineering frameworks'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <item.icon size={32} className="text-blue-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
