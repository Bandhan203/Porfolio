import React, { useEffect, useRef } from 'react';
import { Palette, CheckCircle, ArrowRight, Layout, Smartphone, Layers, Sparkles, Code } from 'lucide-react';

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
    },
    {
      title: 'Web Design',
      description: 'Stunning, responsive websites that captivate and convert visitors',
      icon: <Layout size={32} />,
      features: [
        'Responsive web design',
        'Landing page design',
        'E-commerce design',
        'Custom illustrations',
        'Brand consistency'
      ]
    },
    {
      title: 'Mobile App Design',
      description: 'Intuitive mobile experiences for iOS and Android platforms',
      icon: <Smartphone size={32} />,
      features: [
        'iOS & Android design',
        'App wireframing',
        'Interactive prototypes',
        'Icon & asset design',
        'App store optimization'
      ]
    },
    {
      title: 'Design Systems',
      description: 'Scalable design systems for consistent brand experiences',
      icon: <Layers size={32} />,
      features: [
        'Component libraries',
        'Style guide creation',
        'Design tokens',
        'Documentation',
        'Collaboration tools'
      ]
    },
    {
      title: 'Brand Identity',
      description: 'Memorable brand identities that tell your unique story',
      icon: <Sparkles size={32} />,
      features: [
        'Logo design',
        'Brand guidelines',
        'Color palette creation',
        'Typography selection',
        'Visual identity system'
      ]
    },
    {
      title: 'Frontend Development',
      description: 'Pixel-perfect implementation of designs with modern technologies',
      icon: <Code size={32} />,
      features: [
        'React & Next.js development',
        'Responsive implementation',
        'Animation & interactions',
        'Performance optimization',
        'Cross-browser compatibility'
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-royal-400/50 dark:hover:border-gold-400/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* No popular badge needed */}
                
                <div className="mb-8">
                  <div className="text-royal-500 dark:text-gold-400 mb-6">
                    {service.icon}
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
                      <CheckCircle className="text-royal-500 dark:text-gold-400 flex-shrink-0" size={20} />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-royal-600 to-royal-700 hover:from-royal-700 hover:to-royal-800 text-white py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg hover:shadow-royal-500/30"
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