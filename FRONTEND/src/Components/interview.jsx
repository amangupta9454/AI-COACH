import { useState } from 'react';

const Interview = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    // Replace with your desired external website URL
    window.open('http://Interviewerr.vercel.app', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative  bg-gradient-to-br from-indigo-900 via-purple-900 to-black overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '15px 15px',
          animation: 'twinkle 4s infinite ease-in-out'
        }}></div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20 animate-particle"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-indigo-200 via-purple-300 to-white bg-clip-text text-transparent animate-fadeInUp">
          AI Interview Taker
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Prepare for your dream job with our cutting-edge AI-powered interview platform. Practice, improve, and excel with personalized feedback tailored to your career goals.
        </p>

        <button
          onClick={handleButtonClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`}
          ></div>
          <span className="relative z-10 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span>Use AI - Interview Taker</span>
          </span>
        </button>

        {/* Additional Info Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold text-white mb-2">Realistic Mock Interviews</h3>
            <p className="text-gray-300 text-sm">Experience lifelike interview scenarios powered by AI, covering technical, behavioral, and role-specific questions.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold text-white mb-2">Personalized Feedback</h3>
            <p className="text-gray-300 text-sm">Receive detailed insights and actionable tips to improve your performance and boost confidence.</p>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
          }
        }
        @keyframes particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-100vh) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-200vh) scale(1);
            opacity: 0;
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-particle {
          animation: particle linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Interview;