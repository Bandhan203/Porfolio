import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/8 rounded-full blur-3xl opacity-50 animate-gentle-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl opacity-40 animate-gentle-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/4 to-purple-500/4 rounded-full blur-3xl opacity-30 animate-gentle-scale"></div>
      </div>
      
      <div ref={heroRef} className="max-w-6xl mx-auto px-6 text-center opacity-0 transform translate-y-8 transition-all duration-1000 relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight gentle-hover high-contrast-text animate-fade-in font-dmsans" style={{ fontFamily: 'DM Sans, Inter, Arial, sans-serif' }}>
            Sarder Rifat Rahman Bandhan
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-orange-300 mb-8 font-light font-accent animate-fade-in animation-delay-300">
            UI/UX Designer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in animation-delay-600">
            Designing experiences that <span className="text-orange-400 font-medium">captivate</span> and <span className="text-orange-400 font-medium">convert</span>
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed animate-fade-in animation-delay-900">
            I transform complex user problems into elegant, intuitive digital experiences. 
            Every pixel tells a story, every interaction builds trust, and every design drives results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-1200">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:from-orange-600 hover:to-orange-700 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3 hover:shadow-orange-500/20"
          >
            <MessageCircle size={20} />
            <span>Let's Create Magic Together</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="border-2 border-orange-400/60 text-orange-300 px-8 py-4 rounded-full font-medium hover:border-orange-300 hover:text-orange-200 hover:bg-orange-500/10 transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm"
          >
            <span>Explore My Universe</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="text-center animate-fade-in animation-delay-1200">
          <p className="text-sm text-gray-400 mb-4">🚀 Ready to bring your vision to life</p>
          <div className="w-3 h-3 bg-orange-500/70 rounded-full mx-auto animate-gentle-pulse shadow-lg shadow-orange-500/30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;