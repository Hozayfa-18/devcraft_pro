import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const projectsTimer = setInterval(() => {
      setProjectsCount(prev => {
        if (prev >= 500) {
          clearInterval(projectsTimer);
          return 500;
        }
        return prev + 10;
      });
    }, 20);

    const satisfactionTimer = setInterval(() => {
      setSatisfactionRate(prev => {
        if (prev >= 98) {
          clearInterval(satisfactionTimer);
          return 98;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(projectsTimer);
      clearInterval(satisfactionTimer);
    };
  }, []);

  const handleGetQuote = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Zap" size={16} />
              <span>Trusted by 500+ Businesses</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading text-text-primary leading-tight">
                Transform Your Ideas Into{' '}
                <span className="text-primary">Powerful Digital</span>{' '}
                <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl">
                Professional development with transparent pricing, guaranteed timelines, and ongoing support. 
                Eliminate the risk and uncertainty of custom development projects.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetQuote}
                className="cta-button text-lg px-8 py-4"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Get Your Free Quote
              </Button>
              <Button
                variant="outline"
                onClick={handleViewWork}
                className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                View Our Work
              </Button>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-heading text-primary">
                  {projectsCount}+
                </div>
                <div className="text-text-secondary font-medium">Projects Delivered</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-heading text-accent">
                  {satisfactionRate}%
                </div>
                <div className="text-text-secondary font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main Device Mockup */}
              <div className="relative bg-background rounded-2xl shadow-2xl p-4 border border-border">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full" />
                      <div className="w-3 h-3 bg-white/30 rounded-full" />
                      <div className="w-3 h-3 bg-white/30 rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-white/20 rounded w-3/4" />
                      <div className="h-4 bg-white/20 rounded w-1/2" />
                      <div className="h-8 bg-white/30 rounded w-32 mt-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-success text-white p-3 rounded-lg shadow-lg animate-bounce">
                <Icon name="CheckCircle" size={20} />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-white p-3 rounded-lg shadow-lg animate-pulse">
                <Icon name="Rocket" size={20} />
              </div>

              {/* Code Snippet */}
              <div className="absolute top-1/2 -right-8 bg-background border border-border rounded-lg p-4 shadow-lg hidden lg:block">
                <div className="text-xs font-mono text-text-secondary space-y-1">
                  <div className="text-primary">&lt;App /&gt;</div>
                  <div className="text-accent">  ready: true</div>
                  <div className="text-success">  status: 'deployed'</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2 text-text-secondary">
          <span className="text-sm font-medium">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;