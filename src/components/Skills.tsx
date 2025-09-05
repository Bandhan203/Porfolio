import React, { useEffect, useRef } from 'react';
import { Palette, Code, Smartphone, Monitor, Database, Zap, Search, Users, Layers, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const designSkills = [
    { name: 'User Research', level: 90, icon: <Search size={24} /> },
    { name: 'Wireframing', level: 95, icon: <Layers size={24} /> },
    { name: 'Prototyping', level: 88, icon: <Smartphone size={24} /> },
    { name: 'Design Systems', level: 92, icon: <Palette size={24} /> },
    { name: 'User Testing', level: 85, icon: <Users size={24} /> },
  ];

  const devSkills = [
    { name: 'React & TypeScript', level: 85, icon: <Code size={24} /> },
    { name: 'Tailwind CSS', level: 90, icon: <Palette size={24} /> },
    { name: 'Laravel & PHP', level: 82, icon: <Database size={24} /> },
    { name: 'Git & GitHub', level: 88, icon: <GitBranch size={24} /> },
    { name: 'Responsive Design', level: 93, icon: <Monitor size={24} /> },
  ];

  const tools = [
    { category: 'Design Tools', items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator'] },
    { category: 'Development', items: ['React', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Node.js'] },
    { category: 'Collaboration', items: ['Git/GitHub', 'Slack', 'Notion', 'Jira', 'Miro'] },
  ];

  const SkillBar = ({ skill, delay }: { skill: any; delay: number }) => (
    <div className="group" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="text-purple-600 dark:text-purple-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
            {skill.icon}
          </div>
          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-purple-500 to-teal-500 dark:from-purple-400 dark:to-teal-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={skillsRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive skill set spanning design thinking and technical implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mr-4">
                  <Palette className="text-purple-600 dark:text-purple-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">UI/UX Design</h3>
              </div>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center mr-4">
                  <Code className="text-teal-600 dark:text-teal-400" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Development</h3>
              </div>
              <div className="space-y-6">
                {devSkills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100 + 200} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Tools & Technologies</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((toolGroup, groupIndex) => (
                <div key={toolGroup.category} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{toolGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {toolGroup.items.map((tool, index) => (
                      <span 
                        key={tool}
                        className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                        style={{ animationDelay: `${(groupIndex * 5 + index) * 50}ms` }}
                      >
                        {tool}
                      </span>
                    ))}
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

export default Skills;