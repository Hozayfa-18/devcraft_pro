import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const navigationItems = [
    { label: t('header.nav.services'), anchor: '#services', description: 'Web & Mobile Development' },
    { label: t('header.nav.process'), anchor: '#process', description: 'How We Work' },
    { label: t('header.nav.portfolio'), anchor: '#portfolio', description: 'Our Projects' },
    { label: t('header.nav.pricing'), anchor: '#pricing', description: 'Transparent Rates' },
    { label: t('header.nav.about'), anchor: '#about', description: 'Our Team' },
    { label: t('header.nav.contact'), anchor: '#contact', description: 'Get Started' }
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

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

    const handleClickOutside = (event) => {
      if (isLanguageMenuOpen && !event.target.closest('.language-menu')) {
        setIsLanguageMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      // Store the current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore body scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

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

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsLanguageMenuOpen(false);
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
                  <div className="text-lg lg:text-xl font-heading text-primary">QK DEV</div>
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

            {/* Desktop CTA & Language Switcher */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative language-menu">
                <button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <span className="text-lg">{currentLanguage.flag}</span>
                  <span className="text-sm font-medium">{currentLanguage.name}</span>
                  <Icon name="ChevronDown" size={16} />
                </button>
                
                {isLanguageMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          lang.code === i18n.language ? 'bg-primary/10 text-primary' : ''
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {lang.code === i18n.language && (
                          <Icon name="Check" size={16} className="ml-auto text-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                {t('header.cta.getQuote')}
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="cta-button"
              >
                {t('header.cta.startProject')}
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
          <div className="fixed top-0 right-0 w-full max-w-sm h-full bg-background shadow-xl animate-slide-down overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} color="white" />
                </div>
                <div>
                  <div className="text-lg font-heading text-primary">QK DEV</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="focus-ring rounded-md p-2 text-text-secondary hover:text-primary"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <nav className="px-6 py-4 space-y-1">
              {navigationItems?.map((item) => (
                <button
                  key={item?.anchor}
                  onClick={() => handleNavClick(item?.anchor)}
                  className={`w-full text-left px-4 py-4 rounded-lg transition-colors duration-250 min-h-[56px] ${
                    activeSection === item?.anchor?.substring(1)
                      ? 'bg-primary/10 text-primary border-l-4 border-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
                  }`}
                >
                  <div className="font-medium text-base">{item?.label}</div>
                  <div className="text-sm text-text-secondary mt-1">{item?.description}</div>
                </button>
              ))}
            </nav>
            
            <div className="px-6 py-4 border-t border-border mt-4">
              {/* Mobile Language Switcher */}
              <div className="mb-4">
                <div className="text-sm font-medium text-text-secondary mb-3">Language / اللغة</div>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg border transition-colors min-h-[44px] ${
                        lang.code === i18n.language 
                          ? 'border-primary bg-primary/10 text-primary' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="text-base">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  {t('header.cta.getQuote')}
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="cta-button"
                >
                  {t('header.cta.startProject')}
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