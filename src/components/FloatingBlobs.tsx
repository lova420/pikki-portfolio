
import React from 'react';

const FloatingBlobs = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Large blue */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          animationDelay: '0s',
        }}
      />
      
      {/* Blob 2 - Medium purple */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
          top: '20%',
          right: '-5%',
          animationDelay: '2s',
        }}
      />
      
      {/* Blob 3 - Small pink */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)',
          bottom: '10%',
          left: '20%',
          animationDelay: '4s',
        }}
      />
      
      {/* Blob 4 - Medium cyan */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full opacity-15 blur-3xl animate-blob"
        style={{
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, transparent 70%)',
          bottom: '-10%',
          right: '10%',
          animationDelay: '6s',
        }}
      />
    </div>
  );
};

export default FloatingBlobs;
