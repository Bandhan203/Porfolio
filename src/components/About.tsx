import React, { useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={aboutRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-orange-400 font-semibold tracking-wider text-sm uppercase">About Me</p>
                  <h2 className="font-poppins text-5xl font-bold text-white leading-tight">
                    Hey, I'm <span className="text-orange-400">Rifat!</span>
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    A <span className="text-orange-400 font-semibold">UI/UX Designer</span> who believes in creating digital experiences that don't just look beautiful—they <span className="italic">feel</span> magical.
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    🎨 <strong className="text-white">My Design Philosophy:</strong> Every pixel has a purpose. Every interaction tells a story. I craft user experiences that make people say "wow" and keep them coming back for more.
                  </p>
                  <p>
                    🧠 <strong className="text-white">My Approach:</strong> I turn ideas into intuitive, delightful user experiences—where every detail is crafted for clarity, beauty, and impact.
                  </p>
                  <p>
                    🚀 <strong className="text-white">My Mission:</strong> To create digital solutions that don't just meet requirements—they exceed expectations and spark joy in every user interaction.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-orange-400 font-semibold mb-3">Let's Connect!</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>📍 Uttara, Dhaka, Bangladesh</p>
                    <p>📧 <a href="mailto:bandhan203@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">bandhan203@gmail.com</a></p>
                    <div className="flex space-x-4 mt-3">
                      <a href="https://github.com/Bandhan203" className="text-orange-400 hover:text-orange-300 transition-colors font-medium" target="_blank" rel="noopener noreferrer">GitHub</a>
                      <a href="https://www.linkedin.com/in/rifat-rahman-bandhan-22118b355" className="text-orange-400 hover:text-orange-300 transition-colors font-medium" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      <a href="https://dribbble.com/rifat-rahman-bandhan" className="text-pink-400 hover:text-pink-300 transition-colors font-medium" target="_blank" rel="noopener noreferrer">Dribbble</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-white font-poppins text-2xl font-semibold mb-6">My Toolkit 🛠️</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-orange-400 font-semibold text-lg">Design & Creativity</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">UI/UX Design</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">Figma</span>
                        
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">Wireframing</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">Prototyping</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-orange-400 font-semibold text-lg">Development Power</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">HTML5</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">CSS3</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">JavaScript</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">React</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">Tailwind CSS</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">Git/GitHub</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-orange-400 font-semibold text-lg">Programming Languages</h4>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">C/C++</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">C#</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">MySQL</span>
                        <span className="bg-gray-800/70 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 hover:border-orange-400/50 transition-colors">PHP</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-6 border border-orange-400/20">
                  <h3 className="text-white font-semibold mb-4 flex items-center">
                    <span className="mr-2">🎓</span> Currently Learning
                  </h3>
                  <div className="space-y-2 text-gray-300">
                    <p>• Full Stack Web Development with PHP-Laravel at <span className="text-orange-400 font-medium">Shikkho.AI</span></p>
                    <p>• Advanced UI/UX Design Techniques at <span className="text-orange-400 font-medium">Ostad</span></p>
                  </div>
                </div>

                <div className="pt-4">
                  <a 
                    href="/Curriculum%20vitae.pdf" 
                    download
                    className="group inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span>Get My Resume</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900">
                  <img 
                    src="/Bandhan_GitHub.jpg" 
                    alt="Rifat Rahman Bandhan - UI/UX Designer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl blur-xl animate-pulse"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl animate-pulse delay-1000"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-4 right-12 bg-gray-800/90 backdrop-blur-sm text-green-400 text-xs px-3 py-1 rounded-full font-medium border border-green-400/20">
                Available for work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;