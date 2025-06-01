
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-300">
            Building knowledge foundations for technical excellence
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-blue-400 font-semibold">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed ml-16">
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
