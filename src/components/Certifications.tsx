
import React from 'react';
import { Download, BadgeCheck } from 'lucide-react';
import HolographicCard from './HolographicCard';
import ScrollReveal from './ScrollReveal';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Certified Professional Data Engineer',
      issuer: 'Google Cloud',
      description: 'Demonstrates expertise in designing, building, operationalizing, securing, and monitoring data processing systems',
      skills: ['BigQuery', 'Dataflow', 'Cloud Composer', 'Data Pipeline Design'],
      color: 'from-blue-500 to-cyan-500',
      logo: '/google-cloud-logo.png',
      certificateUrl: '/my_files/google_certificate.png',
      fileName: 'Google_Cloud_Professional_Data_Engineer_Certificate.png'
    },
    {
      title: 'Microsoft Certified Azure Administrator Associate',
      issuer: 'Microsoft',
      description: 'Validates skills in implementing, managing, and monitoring Azure environments',
      skills: ['Azure Services', 'Virtual Machines', 'Storage', 'Networking'],
      color: 'from-purple-500 to-pink-500',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      certificateUrl: '/my_files/microsoft_certificate.png',
      fileName: 'Microsoft_Azure_Administrator_Associate_Certificate.png'
    }
  ];

  const downloadCertificate = async (certificateUrl: string, fileName: string) => {
    try {
      const response = await fetch(certificateUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading certificate:', error);
    }
  };

  return (
    <section id="certifications" className="py-16 bg-gray-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full mb-6 border border-yellow-500/20">
            <BadgeCheck size={18} className="text-yellow-400" />
            <span className="text-yellow-400 font-medium text-sm tracking-wide uppercase">Verified Credentials</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Industry-recognized expertise in cloud and data technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 perspective-1000">
          {certifications.map((cert, index) => (
            <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
              <HolographicCard className="h-full">
                <div className="bg-gray-900/70 rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-700/50 min-h-[480px] h-auto md:h-[480px] backdrop-blur-sm relative overflow-hidden group flex flex-col">
                {/* Animated shine sweep effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 1.5s ease-in-out',
                  }}
                />
                
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-6 sm:mb-8 relative z-10">
                  {/* 3D rotating logo container */}
                  <div
                    className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${cert.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center flex-shrink-0`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-base sm:text-lg mb-2 sm:mb-3">{cert.issuer}</p>
                    <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{cert.description}</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 relative z-10 flex-grow">
                  <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    Key Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 bg-gradient-to-r ${cert.color}/15 text-white border-white/15 hover:border-white/40 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 flex justify-center sm:justify-end relative z-10">
                  <button
                    onClick={() => downloadCertificate(cert.certificateUrl, cert.fileName)}
                    className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r ${cert.color}/20 border border-white/10 text-white hover:border-white/30 transition-all duration-300 group/btn hover:scale-105 w-full sm:w-auto justify-center`}
                  >
                    <span className="text-xs sm:text-sm font-medium">Download Certificate</span>
                    <Download size={16} className="transform transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                  </button>
                </div>
              </div>
              </HolographicCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
