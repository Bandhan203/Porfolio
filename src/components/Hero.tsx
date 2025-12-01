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
      {/* Royal background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-royal-500/12 rounded-full blur-3xl opacity-60 animate-gentle-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl opacity-50 animate-gentle-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-royal-600/8 to-gold-500/6 rounded-full blur-3xl opacity-40 animate-gentle-scale"></div>
      </div>
      
      <div ref={heroRef} className="max-w-6xl mx-auto px-6 text-center opacity-0 transform translate-y-8 transition-all duration-1000 relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight gentle-hover high-contrast-text animate-fade-in font-dmsans" style={{ fontFamily: 'DM Sans, Inter, Arial, sans-serif' }}>
            Sarder Rifat Rahman Bandhan
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gold-300 mb-8 font-light font-accent animate-fade-in animation-delay-300">
            UI/UX Designer
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in animation-delay-600">
            Designing experiences that <span className="text-royal-400 font-medium">captivate</span> and <span className="text-gold-400 font-medium">convert</span>
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed animate-fade-in animation-delay-900">
            I transform complex user problems into elegant, intuitive digital experiences. 
            Every pixel tells a story, every interaction builds trust, and every design drives results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in animation-delay-1200">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-royal-600 to-royal-700 text-white px-8 py-4 rounded-full font-medium hover:from-royal-700 hover:to-royal-800 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl flex items-center space-x-3 hover:shadow-royal-500/40"
          >
            <MessageCircle size={20} />
            <span>Let's Create Magic Together</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button 
            onClick={() => scrollToSection('portfolio')}
            className="border-2 border-gold-400/60 text-gold-300 px-8 py-4 rounded-full font-medium hover:border-gold-300 hover:text-gold-200 hover:bg-gold-500/10 transition-all duration-500 flex items-center space-x-3 backdrop-blur-sm"
          >
            <span>Explore My Universe</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="text-center animate-fade-in animation-delay-1200">
          <p className="text-sm text-gray-400 mb-4">🚀 Ready to bring your vision to life</p>
          <div className="w-3 h-3 bg-gradient-to-r from-royal-500 to-gold-500 rounded-full mx-auto animate-gentle-pulse shadow-lg shadow-royal-500/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;