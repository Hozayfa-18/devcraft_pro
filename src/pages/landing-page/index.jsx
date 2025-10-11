import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import FloatingCTA from '../../components/ui/FloatingCTA';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'QK Dev - Transform Your Ideas Into Powerful Digital Solutions';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 'Professional web and mobile development services with transparent pricing, guaranteed timelines, and ongoing support. Transform your business ideas into powerful digital solutions.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professional web and mobile development services with transparent pricing, guaranteed timelines, and ongoing support. Transform your business ideas into powerful digital solutions.';
      document.getElementsByTagName('head')?.[0]?.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "QK Dev",
      "description": "Professional development agency specializing in web and mobile applications",
      "url": "https://qkdev.com",
      "logo": "https://qkdev.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "email": "hello@qkdev.com"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "San Francisco",
        "addressRegion": "CA",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://twitter.com/qkdev",
        "https://linkedin.com/company/qkdev",
        "https://github.com/qkdev"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.getElementsByTagName('head')?.[0]?.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the structured data script when component unmounts
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts?.forEach(script => {
        if (script?.text?.includes('QK Dev')) {
          script?.remove();
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem Agitation Section */}
        <ProblemSection />
        
        {/* Services Showcase */}
        <ServicesSection />
        
        {/* Process Timeline */}
        <ProcessSection />
        
        {/* Features & Benefits */}
        <FeaturesSection />
        
        {/* Pricing Section */}
        <PricingSection />
        
        {/* Portfolio Showcase */}
        <PortfolioSection />
        
        {/* Client Testimonials */}
        <TestimonialsSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Contact & Lead Capture */}
        <ContactSection />
        
        {/* Footer */}
        <FooterSection />
      </main>

      {/* Floating Elements */}
      <FloatingCTA />
      <SectionProgressIndicator />
    </div>
  );
};

export default LandingPage;