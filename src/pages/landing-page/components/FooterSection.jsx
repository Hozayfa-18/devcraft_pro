import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const FooterSection = () => {
  const { t } = useTranslation();
  const currentYear = new Date()?.getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const footerLinks = t('footer.links', { returnObjects: true });

  const socialLinks = t('footer.socialLinks', { returnObjects: true });

  const certifications = t('footer.certifications.items', { returnObjects: true }) || [];

  const legalContent = t('footer.legalContent', { returnObjects: true });

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
                <div className="text-2xl font-heading text-white">{t('footer.company.name')}</div>
                <div className="text-sm text-white/60">{t('footer.company.tagline')}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed max-w-md">
              {t('footer.company.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {t('footer.contactInfo', { returnObjects: true })?.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name={contact.icon} size={16} className="text-primary" />
                  <div>
                    <div className="text-white/80">{contact.value}</div>
                    {contact.description && (
                      <div className="text-white/60 text-xs">{contact.description}</div>
                    )}
                  </div>
                </div>
              ))}
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
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.sections.services')}</h3>
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
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.sections.company')}</h3>
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
            <h3 className="text-lg font-semibold text-white mb-6">{t('footer.sections.support')}</h3>
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
            {t('footer.certifications.title')}
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
              {t('footer.copyright', { year: currentYear })}
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
              <span className="text-white/60 text-sm">{t('footer.status')}</span>
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
                Stay Updated with QK DEV
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
{t('footer.modal.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterSection;