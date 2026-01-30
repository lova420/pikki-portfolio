
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Cloud, Database, Code, Layers } from 'lucide-react';
import TiltCard3D from './TiltCard3D';
import ScrollReveal from './ScrollReveal';

// Lazy load 3D sphere
const Skills3DSphere = React.lazy(() => import('./Skills3DSphere'));

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

  const getSkillTextColor = (level: number) => {
    if (level >= 90) return 'text-green-400';
    if (level >= 80) return 'text-blue-400';
    return 'text-purple-400';
  };

  return (
    <section id="skills" className="py-16 bg-gray-800/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full mb-6 border border-green-500/20">
            <Layers size={18} className="text-green-400" />
            <span className="text-green-400 font-medium text-sm tracking-wide uppercase">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Technical Skills
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Expertise across the modern data engineering stack
          </p>
        </div>

        {/* 3D Skills Sphere Visualization */}
        <ScrollReveal animation="zoom-in" className="mb-16 hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl" />
            <div className="relative bg-gray-900/30 rounded-3xl border border-gray-700/30 backdrop-blur-sm overflow-hidden">
              <div className="text-center pt-6">
                <p className="text-gray-400 text-sm">Drag to explore • Hover for details</p>
              </div>
              <Suspense fallback={
                <div className="w-full h-[500px] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                </div>
              }>
                <Skills3DSphere />
              </Suspense>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex} animation="fade-up" delay={categoryIndex * 100}>
              <TiltCard3D className="h-full" tiltIntensity={8} glareEnabled={true}>
              <div className="bg-gray-900/70 rounded-2xl p-8 border border-gray-700/50 min-h-[450px] h-full backdrop-blur-sm relative overflow-hidden group flex flex-col">
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, transparent 50%, rgba(168, 85, 247, 0.05) 100%)',
                  }}
                />
                
                {/* Category header with 3D rotating icon */}
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient} shadow-lg transform transition-all duration-700 group-hover:rotate-12 group-hover:scale-110`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <category.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-5 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-200 font-medium text-sm group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className={`text-sm font-bold transition-all duration-300 ${getSkillTextColor(skill.level)}`}>
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
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
