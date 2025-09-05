import React from 'react';
import { Github, Linkedin, Dribbble, Figma, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Sarder Rifat Rahman Bandhan</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              UI/UX Designer & Frontend Developer creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400"
              >
                <Dribbble size={20} />
              </a>
              <a 
                href="https://figma.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110 text-gray-600 dark:text-gray-400"
              >
                <Figma size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ready to start your next project?
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center">
            © {currentYear} Sarder Rifat Rahman Bandhan. Made with <Heart className="text-red-500 mx-2" size={16} /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;