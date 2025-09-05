import { useEffect, useRef } from 'react';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      }
    );
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      type: 'work',
      title: 'Full-Stack Web Developer (Intern)',
      company: 'Code-Tree',
      period: '18.06.2025 – 18.09.2025',
      description: 'Interned as a Full-Stack Web Developer. Built a restaurant management and food waste analytics system using React.js and PHP Laravel.',
      achievements: [
        'Project: SmartDine: A Restaurant Management and Food Waste Analytics System',
        'Tech: React.js, PHP Laravel',
        'Live: https://smart-dine.netlify.app/'
      ]
    },
    {
      type: 'education',
      title: 'UI/UX Design Course',
      company: 'Ostad',
      period: '[Ongoing]',
      description: 'Comprehensive UI/UX curriculum covering fundamentals, user research, design theory, prototyping, design systems, Figma, testing, and portfolio creation.',
      achievements: [
        'Fundamentals: UI/UX in real life, double diamond process, Agile vs. Waterfall, basics of good design',
        'User research: interviews, personas, user stories, use cases',
        'Design theory: design process, color theory, typography, shadows',
        'Prototyping: low-fidelity wireframes, interactive prototypes',
        'Design systems: components, advanced variants, design system development',
        'Tools: Figma, auto layout, grid systems',
        'Testing: user testing, A/B testing',
        'Portfolio: building a strong portfolio to showcase projects'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science and Engineering',
      company: 'IUBAT – International University of Business Agriculture and Technology',
      period: '2025',
      description: 'CGPA: 3.59 (up to 11 semesters)',
      achievements: []
    },
    {
      type: 'education',
      title: 'Higher Secondary Certificate (HSC)',
      company: 'Milestone School & College, Uttara, Dhaka',
      period: '2020',
      description: 'Board: Dhaka, GPA: 5.00',
      achievements: []
    },
    {
      type: 'education',
      title: 'Secondary School Certificate (SSC)',
      company: 'Milestone School & College, Uttara, Dhaka',
      period: '2018',
      description: 'Board: Dhaka, GPA: 5.00',
      achievements: []
    }
  ];

  return (
    <section id="experience" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={experienceRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              My professional journey in design and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="relative flex items-start space-x-8"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-white dark:bg-gray-900 border-4 border-gray-200 dark:border-gray-700 rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    {exp.type === 'work' ? (
                      <Briefcase className="text-gray-600 dark:text-gray-400" size={24} />
                    ) : (
                      <GraduationCap className="text-gray-600 dark:text-gray-400" size={24} />
                    )}
                  </div>
                  
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;