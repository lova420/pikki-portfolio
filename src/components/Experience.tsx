
import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

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
      technologies: ['GCP', 'BigQuery', 'Airflow', 'Python', 'SQL', 'Cloud Composer']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Work Experience
          </h2>
          <p className="text-xl text-gray-300">
            Building the future of data engineering, one pipeline at a time
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 ml-20">
              {/* Animated timeline dot */}
              <div className="absolute -left-[52px] top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg shadow-blue-500/50">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-30"></div>
              </div>

              <div className="group bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
                
                <div className="flex flex-wrap items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 mb-2">
                      <Building size={16} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-700/50 rounded-full">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-700/50 rounded-full">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-500/30"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
