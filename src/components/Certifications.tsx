
import React from 'react';
import { Award, ExternalLink, Download } from 'lucide-react';
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
    <section id="certifications" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Certifications
          </h2>
          <p className="text-xl text-gray-300">
            Industry-recognized expertise in cloud and data technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 perspective-1000">
          {certifications.map((cert, index) => (
            <TiltCard3D key={index} className="h-full" tiltIntensity={10} glareEnabled={true}>
              <div className="bg-gray-900/60 rounded-xl p-8 border border-gray-700/50 h-full backdrop-blur-sm relative overflow-hidden group">
                {/* Animated shine sweep effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 1.5s ease-in-out',
                  }}
                />
                
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  {/* 3D rotating logo container */}
                  <div 
                    className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 flex items-center justify-center`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} logo`} 
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                    <p className="text-gray-400 leading-relaxed text-sm">{cert.description}</p>
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  <h4 className="text-lg font-semibold text-white">Key Skills Validated:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 bg-gradient-to-r ${cert.color}/20 text-white border-white/10 hover:border-white/40 hover:scale-105 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex justify-end relative z-10">
                  <button 
                    onClick={() => downloadCertificate(cert.certificateUrl, cert.fileName)}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-all duration-300 px-4 py-2 rounded-lg hover:bg-blue-500/10 group/btn"
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
