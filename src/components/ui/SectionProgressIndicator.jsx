import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'problem', label: 'Problem' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'features', label: 'Features' },
    // { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Find current active section
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }));

      const currentSectionIndex = sectionElements?.findIndex(section => {
        if (section?.element) {
          const rect = section?.element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });

      if (currentSectionIndex !== -1) {
        setActiveSection(currentSectionIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-progress-indicator hidden xl:block">
      <div className="flex flex-col items-center space-y-3">
        {/* Progress Line */}
        <div className="relative w-0.5 h-48 bg-border rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-primary transition-all duration-300 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Section Indicators */}
        <div className="flex flex-col items-center space-y-2 mt-4">
          {sections?.map((section, index) => (
            <button
              key={section?.id}
              onClick={() => handleSectionClick(section?.id)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-250 focus-ring ${
                index === activeSection
                  ? 'bg-primary scale-125' :'bg-border hover:bg-primary/50'
              }`}
              title={section?.label}
            >
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                <div className="bg-background border border-border rounded-md px-2 py-1 text-xs font-medium text-text-primary shadow-card whitespace-nowrap">
                  {section?.label}
                </div>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-border" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProgressIndicator;