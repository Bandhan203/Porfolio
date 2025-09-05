import React, { useEffect, useRef } from 'react';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';

const Process = () => {
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Research & Discovery',
      description: 'Understanding user needs, business goals, and market context through interviews, surveys, and competitive analysis.',
      icon: <Search size={32} />
    },
    {
      number: '02',
      title: 'Ideation & Strategy',
      description: 'Brainstorming solutions, defining user journeys, and creating information architecture that aligns with objectives.',
      icon: <Lightbulb size={32} />
    },
    {
      number: '03',
      title: 'Design & Prototype',
      description: 'Creating wireframes, high-fidelity designs, and interactive prototypes to visualize and test concepts.',
      icon: <Palette size={32} />
    },
    {
      number: '04',
      title: 'Design Handoff & Collaboration',
      description: 'Preparing design assets, specifications, and interactive prototypes for seamless collaboration with developers and stakeholders.',
      icon: <Code size={32} />
    },
    {
      number: '05',
      title: 'Testing & Iteration',
      description: 'Conducting usability tests, gathering feedback, and refining the experience based on real user data.',
      icon: <TestTube size={32} />
    },
    {
      number: '06',
      title: 'Launch & Optimize',
      description: 'Deploying the final product and continuously monitoring performance to ensure optimal user experience.',
      icon: <Rocket size={32} />
    }
  ];

  return (
    <section id="process" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={processRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              My Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A systematic approach to creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="group relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <span className="text-sm font-bold text-gray-400 dark:text-gray-500 tracking-wider">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;