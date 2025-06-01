
import React from 'react';
import { Award, ExternalLink, Download } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Google Certified Professional Data Engineer',
      issuer: 'Google Cloud',
      description: 'Demonstrates expertise in designing, building, operationalizing, securing, and monitoring data processing systems',
      skills: ['BigQuery', 'Dataflow', 'Cloud Composer', 'Data Pipeline Design'],
      color: 'from-blue-500 to-cyan-500',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg',
      certificateUrl: '/lovable-uploads/88cf070b-0acf-4570-b96e-e48891c594bb.png',
      fileName: 'Google_Cloud_Professional_Data_Engineer_Certificate.png'
    },
    {
      title: 'Microsoft Certified Azure Administrator Associate',
      issuer: 'Microsoft',
      description: 'Validates skills in implementing, managing, and monitoring Azure environments',
      skills: ['Azure Services', 'Virtual Machines', 'Storage', 'Networking'],
      color: 'from-purple-500 to-pink-500',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      certificateUrl: '/lovable-uploads/6cd513ca-961a-46a3-a9e4-82204fbd3a06.png',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-gray-300">
            Industry-recognized expertise in cloud and data technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-lg p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-4 rounded-lg bg-gradient-to-r ${cert.color}/20 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} logo`} 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                  <p className="text-gray-300 leading-relaxed">{cert.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Key Skills Validated:</h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 bg-gradient-to-r ${cert.color}/20 text-white border-transparent group-hover:border-white/30`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button 
                  onClick={() => downloadCertificate(cert.certificateUrl, cert.fileName)}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="text-sm">Download Certificate</span>
                  <Download size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
