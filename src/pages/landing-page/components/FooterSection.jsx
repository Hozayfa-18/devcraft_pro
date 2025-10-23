import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const footerLinks = {
    services: [
      { label: 'Landing Pages', href: '#services' },
      { label: 'Website Development', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Careers', href: '#contact' }
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Support', href: '#contact' },
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
    { name: 'X', icon: 'X', href: 'https://x.com/qk_dev' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/qk_dev' },
    { name: 'Instagram', icon: 'Instagram', href: 'https://instagram.com/qk_dev' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/qk_dev' },
    { name: 'TikTok', icon: 'Video', href: 'https://tiktok.com/@qk_dev' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security' },
    { name: 'SOC 2 Type II', description: 'Security & Availability' },
    { name: 'GDPR Compliant', description: 'Data Protection' },
    { name: 'AWS Partner', description: 'Cloud Excellence' }
  ];

  const legalContent = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <h3>Information We Collect</h3>
        <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
        
        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
        
        <h3>Information Sharing</h3>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
        
        <h3>Data Security</h3>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h3>Your Rights</h3>
        <p>You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.</p>
        
        <p><strong>Last updated:</strong> ${new Date().toLocaleDateString()}</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      content: `
        <h3>Acceptance of Terms</h3>
        <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h3>Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
        
        <h3>Service Availability</h3>
        <p>We strive to maintain high service availability but do not guarantee uninterrupted access to our services.</p>
        
        <h3>User Responsibilities</h3>
        <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>
        
        <h3>Limitation of Liability</h3>
        <p>In no event shall QK Dev or its suppliers be liable for any damages arising out of the use or inability to use our services.</p>
        
        <p><strong>Last updated:</strong> ${new Date().toLocaleDateString()}</p>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      content: `
        <h3>What Are Cookies</h3>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website.</p>
        
        <h3>How We Use Cookies</h3>
        <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content and advertisements.</p>
        
        <h3>Types of Cookies</h3>
        <ul>
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
          <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
        </ul>
        
        <h3>Managing Cookies</h3>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.</p>
        
        <p><strong>Last updated:</strong> ${new Date().toLocaleDateString()}</p>
      `
    },
    gdpr: {
      title: 'GDPR Compliance',
      content: `
        <h3>Data Controller</h3>
        <p>QK Dev is the data controller for the personal data we collect and process.</p>
        
        <h3>Legal Basis for Processing</h3>
        <p>We process personal data based on legitimate interests, contractual necessity, and consent where applicable.</p>
        
        <h3>Your Rights Under GDPR</h3>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        
        <h3>Data Retention</h3>
        <p>We retain personal data only for as long as necessary to fulfill the purposes for which it was collected.</p>
        
        <h3>Data Transfers</h3>
        <p>When we transfer data outside the EEA, we ensure appropriate safeguards are in place.</p>
        
        <p><strong>Last updated:</strong> ${new Date().toLocaleDateString()}</p>
      `
    },
    security: {
      title: 'Security',
      content: `
        <h3>Security Measures</h3>
        <p>We implement comprehensive security measures to protect your data and our systems.</p>
        
        <h3>Data Encryption</h3>
        <p>All data is encrypted in transit and at rest using industry-standard encryption protocols.</p>
        
        <h3>Access Controls</h3>
        <p>We implement strict access controls and regularly review permissions to ensure only authorized personnel can access sensitive data.</p>
        
        <h3>Security Monitoring</h3>
        <p>We continuously monitor our systems for security threats and vulnerabilities.</p>
        
        <h3>Incident Response</h3>
        <p>In the event of a security incident, we have procedures in place to respond quickly and notify affected users.</p>
        
        <h3>Third-Party Security</h3>
        <p>We carefully vet all third-party services and ensure they meet our security standards.</p>
        
        <p><strong>Last updated:</strong> ${new Date().toLocaleDateString()}</p>
      `
    }
  };

  const handleLinkClick = (href) => {
    if (href?.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href?.startsWith('/')) {
      // Handle legal pages with modal
      const pageKey = href?.substring(1); // Remove the leading '/'
      if (legalContent[pageKey]) {
        setModalContent(legalContent[pageKey]);
        setShowModal(true);
      }
    } else {
      // For external links
      window.open(href, '_blank');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
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
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <div className="text-white/80">+49 17655298403</div>
                    <div className="text-white/60 text-xs">German & English speakers</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <div className="text-white/80">+90 5393225378</div>
                    <div className="text-white/60 text-xs">Arabic & Turkish speakers</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={16} className="text-primary" />
                <span className="text-white/80">info@qk-dev.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={16} className="text-primary" />
                <span className="text-white/80">Königstraße 73, 47178 Duisburg, Germany</span>
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
      {/* <div className="bg-primary">
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
      </div> */}

      {/* Legal Modal */}
      {showModal && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-2xl font-semibold text-text-primary">
                {modalContent.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="X" size={24} className="text-text-secondary" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div 
                className="prose prose-sm max-w-none text-text-secondary"
                dangerouslySetInnerHTML={{ __html: modalContent.content }}
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end p-6 border-t border-border">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterSection;