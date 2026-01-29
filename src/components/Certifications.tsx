
import React from 'react';
import { Award, Download, BadgeCheck } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

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

        <div className="grid md:grid-cols-2 gap-8 perspective-1000">
          {certifications.map((cert, index) => (
            <TiltCard3D key={index} className="h-full" tiltIntensity={10} glareEnabled={true}>
              <div className="bg-gray-900/70 rounded-2xl p-8 md:p-10 border border-gray-700/50 h-[480px] backdrop-blur-sm relative overflow-hidden group flex flex-col">
                {/* Animated shine sweep effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 1.5s ease-in-out',
                  }}
                />
                
                <div className="flex items-start gap-5 mb-8 relative z-10">
                  {/* 3D rotating logo container */}
                  <div 
                    className={`p-5 rounded-2xl bg-gradient-to-br ${cert.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg mb-3">{cert.issuer}</p>
                    <p className="text-gray-200 leading-relaxed">{cert.description}</p>
                  </div>
                </div>

                <div className="space-y-4 relative z-10 flex-grow">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                    Key Skills Validated
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 bg-gradient-to-r ${cert.color}/15 text-white border-white/15 hover:border-white/40 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end relative z-10">
                  <button 
                    onClick={() => downloadCertificate(cert.certificateUrl, cert.fileName)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${cert.color}/20 border border-white/10 text-white hover:border-white/30 transition-all duration-300 group/btn hover:scale-105`}
                  >
                    <span className="text-sm font-medium">Download Certificate</span>
                    <Download size={16} className="transform transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                  </button>
                </div>
              </div>
            </TiltCard3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
