
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'Vasireddy Venkatadri Institute of Technology',
      location: 'Guntur',
      period: '2020 - 2024',
      description: 'Focused on software development, database management, and cloud technologies'
    },
    {
      degree: 'Intermediate',
      institution: 'Gowthami Junior College',
      location: 'Chirala',
      period: '2018 - 2020',
      description: 'Foundation in mathematics, physics, and computer science'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'AMG High School',
      location: 'Bapatla',
      period: '2018',
      description: 'Strong academic foundation with focus on science and mathematics'
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Education
          </h2>
          <p className="text-xl text-gray-300">
            Building knowledge foundations for technical excellence
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-400 font-semibold">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-400 px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 px-3 py-1 bg-gray-700/50 rounded-full text-sm">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed ml-16 border-l-2 border-gray-700 pl-4">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
