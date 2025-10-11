import React from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    services: [
      { label: 'Landing Pages', href: '#services' },
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Web Applications', href: '#services' },
      { label: 'Custom Solutions', href: '#contact' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Careers', href: '#contact' }
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Support', href: '#contact' },
      { label: 'Documentation', href: '#contact' },
      { label: 'System Status', href: '#contact' },
      { label: 'API Reference', href: '#contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'GDPR Compliance', href: '/gdpr' },
      { label: 'Security', href: '/security' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/qkdev' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/qkdev' },
    { name: 'GitHub', icon: 'Github', href: 'https://github.com/qkdev' },
    { name: 'Dribbble', icon: 'Dribbble', href: 'https://dribbble.com/qkdev' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/qkdev' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'GDPR Compliant', description: 'Data Protection' },
    { name: 'AWS Partner', description: 'Cloud Excellence' }
  ];

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links or pages that don't exist yet
      console.log(`Navigate to: ${href}`);
    }
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} color="white" />
              </div>
              <div>
                <div className="text-2xl font-heading text-white">QK Dev</div>
                <div className="text-sm text-white/60">Professional Development</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed max-w-md">
              Transform your business ideas into powerful digital solutions. We deliver quality 
              development services with transparent pricing and guaranteed timelines.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={16} className="text-primary" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-white/80">hello@qkdev.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks?.map((social) => (
                <button
                  key={social?.name}
                  onClick={() => window.open(social?.href, '_blank')}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  title={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              {footerLinks?.support?.map((link) => (
                <li key={link?.label}>
                  <button
                    onClick={() => handleLinkClick(link?.href)}
                    className="text-white/70 hover:text-primary transition-colors text-sm"
                  >
                    {link?.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            Trusted & Certified
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {certifications?.map((cert) => (
              <div key={cert?.name} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <div className="text-white font-medium text-sm">{cert?.name}</div>
                <div className="text-white/60 text-xs">{cert?.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60 text-sm">
              © {currentYear} QK Dev. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              {footerLinks?.legal?.map((link) => (
                <button
                  key={link?.label}
                  onClick={() => handleLinkClick(link?.href)}
                  className="text-white/60 hover:text-primary transition-colors text-sm"
                >
                  {link?.label}
                </button>
              ))}
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter Signup */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with QK Dev
              </h3>
              <p className="text-white/80 text-sm">
                Get development tips, industry insights, and project updates delivered to your inbox.
              </p>
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-text-primary"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;