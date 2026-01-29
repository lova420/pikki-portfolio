
import React, { useState, useEffect, useRef } from 'react';
import { Cloud, Database, Code, Cpu, Zap, Server } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Google Cloud Platform', level: 95 },
        { name: 'BigQuery', level: 90 },
        { name: 'Cloud Composer', level: 85 },
        { name: 'Dataproc', level: 80 },
        { name: 'Cloud SQL', level: 85 }
      ]
    },
    {
      title: 'Data Engineering',
      icon: Database,
      gradient: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Apache Airflow', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'SQL Server', level: 85 },
        { name: 'Data Build Tool', level: 80 },
        { name: 'Snowflake', level: 75 }
      ]
    },
    {
      title: 'Development & APIs',
      icon: Code,
      gradient: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python Data', level: 95 },
        { name: 'FastAPI', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'SQL', level: 90 },
        { name: 'Data Pipelines', level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-400 to-emerald-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-purple-400 to-pink-500';
    return 'from-yellow-400 to-orange-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-800/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            Expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {skillCategories.map((category, categoryIndex) => (
            <TiltCard3D key={categoryIndex} className="h-full" tiltIntensity={8} glareEnabled={true}>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-700/50 h-full backdrop-blur-sm relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.05) 50%, transparent 70%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 2s infinite',
                  }}
                />
                
                {/* Category header with 3D rotating icon */}
                <div className="flex items-center gap-3 mb-8">
                  <div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold transition-all duration-300 ${
                          skill.level >= 90 ? 'text-green-400' : 
                          skill.level >= 80 ? 'text-blue-400' : 'text-purple-400'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-2.5 rounded-full transition-all duration-1000 ease-out relative`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 5 + skillIndex) * 100}ms`
                          }}
                        >
                          {/* Shine effect on progress bar */}
                          <div className="absolute inset-0 overflow-hidden rounded-full">
                            <div 
                              className="absolute inset-0 -translate-x-full animate-shimmer"
                              style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
