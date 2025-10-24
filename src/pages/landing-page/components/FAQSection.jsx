import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const faqs = t('faq.items', { returnObjects: true });

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const openVideoModal = (faq) => {
    setSelectedVideo(faq);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-text-primary mb-4 sm:mb-6">
            {t('faq.title')} <span className="text-primary">{t('faq.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={faq?.id || index}
              className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq?.id || index)}
                className="w-full text-left p-4 sm:p-6 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset min-h-[60px]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-2">
                      {faq?.question}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {faq?.category}
                      </span>
                      {faq?.hasVideo && (
                        <span className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent">
                          <Icon name="Play" size={10} className="mr-1 sm:w-3 sm:h-3" />
                          {t('faq.videoAvailable')}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="ml-3 sm:ml-4 flex-shrink-0">
                    <Icon 
                      name={openFAQ === (faq?.id || index) ? "ChevronUp" : "ChevronDown"} 
                      size={18} 
                      className="text-text-secondary transition-transform duration-200 sm:w-5 sm:h-5"
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 ${
                openFAQ === (faq?.id || index) 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <div className="border-t border-border pt-3 sm:pt-4">
                    <div className="prose prose-sm max-w-none text-text-secondary">
                      {faq?.answer?.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} className="mb-2 text-sm sm:text-base">
                          {line}
                        </p>
                      ))}
                    </div>
                    
                    {faq?.hasVideo && (
                      <button
                        onClick={() => openVideoModal(faq)}
                        className="mt-3 sm:mt-4 inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-sm sm:text-base min-h-[32px]"
                      >
                        <Icon name="Play" size={14} className="sm:w-4 sm:h-4" />
                        <span className="font-medium">{t('faq.watchVideo')}: {faq?.videoTitle}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {t('faq.cta.title')}
            </h3>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              {t('faq.cta.subtitle')}
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-white text-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors text-sm sm:text-base min-h-[44px]"
            >
              <Icon name="MessageCircle" size={16} className="sm:w-4 sm:h-4" />
              <span>{t('faq.cta.button')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-white/80 transition-colors min-h-[44px] min-w-[44px]"
            >
              <Icon name="X" size={20} className="sm:w-6 sm:h-6" />
            </button>
            <div className="bg-background rounded-lg overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center p-4 sm:p-6">
                <div className="text-center">
                  <Icon name="Play" size={40} className="text-primary mb-3 sm:mb-4 sm:w-12 sm:h-12" />
                  <p className="text-sm sm:text-base text-text-secondary">
                    {t('faq.modal.videoTitle')}: {selectedVideo?.videoTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary mt-2">
                    {t('faq.modal.videoContent')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;