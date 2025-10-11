import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: 'Services', anchor: '#services', description: 'Web & Mobile Development' },
    { label: 'Process', anchor: '#process', description: 'How We Work' },
    { label: 'Portfolio', anchor: '#portfolio', description: 'Our Projects' },
    { label: 'Pricing', anchor: '#pricing', description: 'Transparent Rates' },
    { label: 'About', anchor: '#about', description: 'Our Team' },
    { label: 'Contact', anchor: '#contact', description: 'Get Started' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navigationItems?.map(item => item?.anchor?.substring(1));
      const currentSection = sections?.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor) => {
    const element = document.querySelector(anchor);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-navigation transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-card border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('#hero')}
                className="flex items-center space-x-2 focus-ring rounded-lg p-1"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={20} color="white" />
                </div>
                <div className="text-left">
                  <div className="text-lg lg:text-xl font-heading text-primary">QK Dev</div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.anchor}
                  onClick={() => handleNavClick(item?.anchor)}
                  className={`nav-link focus-ring rounded-md px-3 py-2 text-sm font-medium transition-colors duration-250 ${
                    activeSection === item?.anchor?.substring(1) 
                      ? 'nav-link-active' :''
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Get Quote
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="cta-button"
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden focus-ring rounded-md p-2 text-text-secondary hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-mobile-menu lg:hidden">
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-background shadow-xl animate-slide-down">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} color="white" />
                </div>
                <div>
                  <div className="text-lg font-heading text-primary">QK Dev</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="focus-ring rounded-md p-2 text-text-secondary hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <nav className="px-6 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <button
                  key={item?.anchor}
                  onClick={() => handleNavClick(item?.anchor)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-250 ${
                    activeSection === item?.anchor?.substring(1)
                      ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <div className="font-medium">{item?.label}</div>
                  <div className="text-sm text-text-secondary mt-1">{item?.description}</div>
                </button>
              ))}
            </nav>
            
            <div className="px-6 py-4 border-t border-border mt-4">
              <div className="space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Get Free Quote
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="cta-button"
                >
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;