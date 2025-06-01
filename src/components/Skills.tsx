
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Cloud Platforms',
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

  return (
    <section id="skills" className="py-20 bg-gray-800/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300">
            Expertise across the modern data engineering stack
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900/50 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 3 + skillIndex) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
