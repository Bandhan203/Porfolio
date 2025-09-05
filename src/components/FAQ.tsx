import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A typical UI/UX design project takes 2-4 weeks, while full-stack development projects range from 4-8 weeks. I provide detailed timelines during our initial consultation.'
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Yes, I work with clients worldwide. I use modern collaboration tools like Figma, Slack, and Zoom to ensure seamless communication and project delivery regardless of location.'
    },
    {
      question: 'What is included in your design process?',
      answer: 'My design process includes user research, competitive analysis, wireframing, high-fidelity design, prototyping, and usability testing. I also provide design systems and documentation for development teams.'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! I can audit existing designs, improve user experience, optimize conversion rates, or add new features. I also offer code reviews and frontend optimization services.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'For design: Figma, Adobe XD, Sketch, and Photoshop. For development: React, TypeScript, Tailwind CSS, Next.js, and Laravel. I stay updated with the latest tools and frameworks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer maintenance packages and ongoing support. This includes design updates, bug fixes, performance optimization, and feature additions based on user feedback.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={faqRef} className="opacity-0 transform translate-y-8 transition-all duration-1000">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Everything you need to know about working with me
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="text-gray-500 dark:text-gray-400" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-500 dark:text-gray-400" size={24} />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;