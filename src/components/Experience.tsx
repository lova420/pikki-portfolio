
import React from 'react';
import { Calendar, MapPin, Building, Briefcase } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const Experience = () => {
  const experiences = [
    {
      company: 'Bilvantis Technologies',
      role: 'Cloud Data Engineer',
      period: 'May 2024 - Present',
      location: 'On-site',
      responsibilities: [
        'Designed and implemented scalable cloud data solutions using Google Cloud Platform',
        'Utilized AI and Machine Learning techniques to optimize data engineering processes',
        'Specialized in building and maintaining data pipelines for efficient data processing',
        'Collaborated with cross-functional teams to deliver data-driven solutions'
      ],
      technologies: ['GCP', 'BigQuery', 'Airflow', 'Python', 'SQL', 'Cloud Composer', 'Databricks', 'Delta Lake', 'PySpark']
    }
  ];

  return (
    <section id="experience" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
            <Briefcase size={18} className="text-blue-400" />
            <span className="text-blue-400 font-medium text-sm tracking-wide uppercase">Career Journey</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Work Experience
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Building the future of data engineering, one pipeline at a time
          </p>
        </div>

        <div className="relative perspective-1000">
          {/* Timeline line with animated gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-60" />
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 ml-20">
              {/* Animated timeline dot */}
              <div className="absolute -left-[52px] top-8 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50 z-10">
                <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-40" />
              </div>

              <TiltCard3D tiltIntensity={6} glareEnabled={true}>
                <div className="bg-gray-900/70 rounded-2xl p-8 md:p-10 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden group min-h-[400px]">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)',
                    }}
                  />
                  
                  <div className="flex flex-wrap items-start justify-between mb-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 mb-4">
                        <Building size={18} />
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-gray-200">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-full text-sm border border-gray-700/50">
                          <Calendar size={14} className="text-blue-400" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-full text-sm border border-gray-700/50">
                          <MapPin size={14} className="text-purple-400" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-4">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-gray-200 group/item">
                          <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-500/30 group-hover/item:scale-125 transition-transform duration-300" />
                          <span className="leading-relaxed text-base group-hover/item:text-white transition-colors duration-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-5 py-2 bg-gradient-to-r from-blue-500/15 to-purple-500/15 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
