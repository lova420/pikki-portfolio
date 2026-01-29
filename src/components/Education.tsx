
import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

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
    <section id="education" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full mb-6 border border-purple-500/20">
            <BookOpen size={18} className="text-purple-400" />
            <span className="text-purple-400 font-medium text-sm tracking-wide uppercase">Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Education
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Building knowledge foundations for technical excellence
          </p>
        </div>

        <div className="space-y-8 perspective-1000">
          {education.map((edu, index) => (
            <TiltCard3D key={index} tiltIntensity={5} glareEnabled={true}>
              <div
                className="group bg-gray-900/70 rounded-2xl p-8 border border-gray-700/50 backdrop-blur-sm relative overflow-hidden min-h-[180px]"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)',
                  }}
                />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-110 transition-all duration-500">
                      <GraduationCap className="text-white" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap md:flex-col gap-2 md:items-end ml-16 md:ml-0">
                    <div className="flex items-center gap-2 text-gray-200 px-4 py-2 bg-gray-800/80 rounded-full text-sm border border-gray-700/50">
                      <Calendar size={14} className="text-blue-400" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-200 px-4 py-2 bg-gray-800/80 rounded-full text-sm border border-gray-700/50">
                      <MapPin size={14} className="text-purple-400" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="ml-16 md:ml-20 mt-4">
                  <p className="text-gray-200 leading-relaxed text-base border-l-2 border-gradient-to-b from-blue-500 to-purple-500 pl-4 border-gray-700 group-hover:border-blue-500 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
