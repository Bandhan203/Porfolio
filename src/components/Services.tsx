import React, { useEffect, useRef } from 'react';
import { Palette, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Complete design solutions from research to high-fidelity prototypes',
      icon: <Palette size={32} />, 
      features: [
        'User research & analysis',
        'Wireframing & prototyping',
        'High-fidelity designs',
        'Design system creation',
        'Usability testing'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={servicesRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive design solutions tailored to your needs
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`relative bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border-2 border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms`, width: '350px', maxWidth: '90vw' }}
              >
                {/* No popular badge needed */}
                
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-gray-700 dark:text-gray-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* No pricing shown */}
                </div>
                
                <div className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500 dark:text-green-400 flex-shrink-0" size={20} />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className={
                    'w-full py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                  }
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
  </div>
      </div>
    </section>
  );
};

export default Services;