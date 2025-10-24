import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const ProcessSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const processSteps = [
    {
      id: 0,
      title: t('process.steps.consult.title'),
      subtitle: t('process.steps.consult.subtitle'),
      duration: t('process.steps.consult.duration'),
      icon: 'MessageCircle',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      description: t('process.steps.consult.description'),
      deliverables: t('process.steps.consult.deliverables', { returnObjects: true }),
      clientInvolvement: t('process.steps.consult.clientInvolvement', { returnObjects: true })
    },
    {
      id: 1,
      title: t('process.steps.design.title'),
      subtitle: t('process.steps.design.subtitle'),
      duration: t('process.steps.design.duration'),
      icon: 'Palette',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      description: t('process.steps.design.description'),
      deliverables: t('process.steps.design.deliverables', { returnObjects: true }),
      clientInvolvement: t('process.steps.design.clientInvolvement', { returnObjects: true })
    },
    {
      id: 2,
      title: t('process.steps.develop.title'),
      subtitle: t('process.steps.develop.subtitle'),
      duration: t('process.steps.develop.duration'),
      icon: 'Code',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      description: t('process.steps.develop.description'),
      deliverables: t('process.steps.develop.deliverables', { returnObjects: true }),
      clientInvolvement: t('process.steps.develop.clientInvolvement', { returnObjects: true })
    },
    {
      id: 3,
      title: t('process.steps.deploy.title'),
      subtitle: t('process.steps.deploy.subtitle'),
      duration: t('process.steps.deploy.duration'),
      icon: 'Rocket',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      description: t('process.steps.deploy.description'),
      deliverables: t('process.steps.deploy.deliverables', { returnObjects: true }),
      clientInvolvement: t('process.steps.deploy.clientInvolvement', { returnObjects: true })
    }
  ];

  const openModal = (step) => {
    setModalContent(step);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <section id="process" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            {t('process.title')} <span className="text-primary">{t('process.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('process.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-border hidden lg:block">
            <div 
              className="h-full bg-primary transition-all duration-1000 ease-out"
              style={{ width: `${(activeStep / (processSteps?.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps?.map((step, index) => (
              <div
                key={step?.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep >= index ? 'opacity-100' : 'opacity-60'
                }`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => openModal(step)}
              >
                {/* Step Card */}
                <div className={`bg-background border-2 rounded-2xl p-6 shadow-lg transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-primary shadow-xl scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}>
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep >= index ? step?.bgColor : 'bg-muted'
                    }`}>
                      <Icon 
                        name={step?.icon} 
                        size={24} 
                        className={activeStep >= index ? step?.color : 'text-text-secondary'} 
                      />
                    </div>
                    <div className="text-sm font-medium text-text-secondary">
                      {step?.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-text-primary">
                      {index + 1}. {step?.title}
                    </h3>
                    <div className="text-sm font-medium text-primary">
                      {step?.subtitle}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step?.description}
                    </p>
                  </div>

                  {/* View Details Button */}
                  <button className="mt-4 text-primary hover:text-primary/80 text-sm font-medium flex items-center space-x-1 transition-colors">
                    <span>{t('common.viewDetails')}</span>
                    <Icon name="ChevronRight" size={14} />
                  </button>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              {t('process.cta.title')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('process.cta.subtitle')}
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>{t('process.cta.button')}</span>
              <Icon name="Calendar" size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Modal */}
      {showModal && modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-background border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${modalContent?.bgColor}`}>
                  <Icon name={modalContent?.icon} size={20} className={modalContent?.color} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    {modalContent?.title} - {modalContent?.subtitle}
                  </h3>
                  <div className="text-sm text-text-secondary">
                    {t('process.modal.duration')}: {modalContent?.duration}
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="X" size={20} className="text-text-secondary" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <p className="text-text-secondary leading-relaxed">
                {modalContent?.description}
              </p>

              {/* Deliverables */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {t('process.modal.deliverables')}:
                </h4>
                <div className="space-y-2">
                  {modalContent?.deliverables?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Involvement */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {t('process.modal.involvement')}:
                </h4>
                <div className="space-y-2">
                  {modalContent?.clientInvolvement?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="User" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProcessSection;