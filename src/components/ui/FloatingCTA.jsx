import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [ctaMessage, setCtaMessage] = useState('Get Quote');

  const sectionMessages = {
    hero: 'Get Started',
    services: 'Get Quote',
    process: 'Start Project',
    portfolio: 'Hire Us',
    pricing: 'Choose Plan',
    about: 'Work With Us',
    contact: 'Get Quote'
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero section
      setIsVisible(scrollY > windowHeight * 0.3);
      
      // Update CTA message based on current section
      const sections = ['hero', 'services', 'process', 'portfolio', 'pricing', 'about', 'contact'];
      const currentSection = sections?.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setCurrentSection(currentSection);
        setCtaMessage(sectionMessages?.[currentSection] || 'Get Quote');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-floating-cta animate-fade-in">
      <Button
        onClick={handleCtaClick}
        className="cta-button shadow-cta-hover rounded-full px-6 py-3 flex items-center space-x-2 group"
        size="lg"
      >
        <span className="font-cta">{ctaMessage}</span>
        <Icon 
          name="ArrowRight" 
          size={18} 
          className="transition-transform duration-250 group-hover:translate-x-1" 
        />
      </Button>
      
      {/* Pulse animation for attention */}
      <div className="absolute inset-0 rounded-full bg-accent opacity-20 animate-ping" />
    </div>
  );
};

export default FloatingCTA;