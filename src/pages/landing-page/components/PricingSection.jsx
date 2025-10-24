import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState('landing-page');
  const [billingCycle, setBillingCycle] = useState('project');

  const projectTypes = [
    { id: 'landing-page', label: t('pricing.projectTypes.landingPage'), icon: 'FileText' },
    { id: 'webapp', label: t('pricing.projectTypes.webApp'), icon: 'Globe' },
    { id: 'mobile', label: t('pricing.projectTypes.mobileApp'), icon: 'Smartphone' }
  ];

  const pricingData = {
    'landing-page': {
      starter: {
        name: t('pricing.packages.landingPage.basic.name'),
        price: t('pricing.packages.landingPage.basic.price'),
        timeline: t('pricing.packages.landingPage.basic.timeline'),
        description: t('pricing.packages.landingPage.basic.description'),
        features: t('pricing.packages.landingPage.basic.features', { returnObjects: true }),
        revisions: t('pricing.packages.landingPage.basic.revisions'),
        popular: false
      },
      professional: {
        name: t('pricing.packages.landingPage.professional.name'),
        price: t('pricing.packages.landingPage.professional.price'),
        timeline: t('pricing.packages.landingPage.professional.timeline'),
        description: t('pricing.packages.landingPage.professional.description'),
        features: t('pricing.packages.landingPage.professional.features', { returnObjects: true }),
        revisions: t('pricing.packages.landingPage.professional.revisions'),
        popular: true
      },
      enterprise: {
        name: t('pricing.packages.landingPage.enterprise.name'),
        price: t('pricing.packages.landingPage.enterprise.price'),
        timeline: t('pricing.packages.landingPage.enterprise.timeline'),
        description: t('pricing.packages.landingPage.enterprise.description'),
        features: t('pricing.packages.landingPage.enterprise.features', { returnObjects: true }),
        revisions: t('pricing.packages.landingPage.enterprise.revisions'),
        popular: false
      }
    },
    webapp: {
      starter: {
        name: t('pricing.packages.webApp.basic.name'),
        price: t('pricing.packages.webApp.basic.price'),
        timeline: t('pricing.packages.webApp.basic.timeline'),
        description: t('pricing.packages.webApp.basic.description'),
        features: t('pricing.packages.webApp.basic.features', { returnObjects: true }),
        revisions: t('pricing.packages.webApp.basic.revisions'),
        popular: false
      },
      professional: {
        name: t('pricing.packages.webApp.professional.name'),
        price: t('pricing.packages.webApp.professional.price'),
        timeline: t('pricing.packages.webApp.professional.timeline'),
        description: t('pricing.packages.webApp.professional.description'),
        features: t('pricing.packages.webApp.professional.features', { returnObjects: true }),
        revisions: t('pricing.packages.webApp.professional.revisions'),
        popular: true
      },
      enterprise: {
        name: t('pricing.packages.webApp.enterprise.name'),
        price: t('pricing.packages.webApp.enterprise.price'),
        timeline: t('pricing.packages.webApp.enterprise.timeline'),
        description: t('pricing.packages.webApp.enterprise.description'),
        features: t('pricing.packages.webApp.enterprise.features', { returnObjects: true }),
        revisions: t('pricing.packages.webApp.enterprise.revisions'),
        popular: false
      }
    },
    mobile: {
      starter: {
        name: t('pricing.packages.mobileApp.basic.name'),
        price: t('pricing.packages.mobileApp.basic.price'),
        timeline: t('pricing.packages.mobileApp.basic.timeline'),
        description: t('pricing.packages.mobileApp.basic.description'),
        features: t('pricing.packages.mobileApp.basic.features', { returnObjects: true }),
        revisions: t('pricing.packages.mobileApp.basic.revisions'),
        popular: false
      },
      professional: {
        name: t('pricing.packages.mobileApp.professional.name'),
        price: t('pricing.packages.mobileApp.professional.price'),
        timeline: t('pricing.packages.mobileApp.professional.timeline'),
        description: t('pricing.packages.mobileApp.professional.description'),
        features: t('pricing.packages.mobileApp.professional.features', { returnObjects: true }),
        revisions: t('pricing.packages.mobileApp.professional.revisions'),
        popular: true
      },
      enterprise: {
        name: t('pricing.packages.mobileApp.enterprise.name'),
        price: t('pricing.packages.mobileApp.enterprise.price'),
        timeline: t('pricing.packages.mobileApp.enterprise.timeline'),
        description: t('pricing.packages.mobileApp.enterprise.description'),
        features: t('pricing.packages.mobileApp.enterprise.features', { returnObjects: true }),
        revisions: t('pricing.packages.mobileApp.enterprise.revisions'),
        popular: false
      }
    }
  };

  const currentPricing = pricingData?.[selectedType];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-text-primary mb-4 sm:mb-6">
            {t('pricing.title')} <span className="text-primary">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Project Type Selector */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-background border border-border rounded-xl p-1 sm:p-2 inline-flex w-full sm:w-auto">
            {projectTypes?.map((type) => (
              <button
                key={type?.id}
                onClick={() => setSelectedType(type?.id)}
                className={`flex items-center space-x-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base min-h-[44px] flex-1 sm:flex-none ${
                  selectedType === type?.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={type?.icon} size={16} className="sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{type?.label}</span>
                <span className="sm:hidden text-xs">{type?.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {Object.entries(currentPricing)?.map(([key, plan]) => (
            <div
              key={key}
              className={`relative bg-background border-2 rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plan?.popular
                  ? 'border-primary shadow-2xl sm:scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-xl'
              }`}
            >
              {/* Popular Badge */}
              {plan?.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {t('pricing.popular')}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2">
                  {plan?.name}
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan?.description}
                </p>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-3xl sm:text-4xl font-heading text-primary">
                    <span className="text-sm sm:text-lg font-normal text-text-secondary">{t('pricing.startingFrom')}</span><br />
                    <span className="text-3xl sm:text-4xl font-heading text-primary">{plan?.price?.replace(t('pricing.startingFrom') + ' ', '')}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-text-secondary">
                    {t('pricing.timeline')}: {plan?.timeline}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {Array.isArray(plan?.features) && plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={14} className="text-success flex-shrink-0 mt-1 sm:w-4 sm:h-4" />
                    <span className="text-text-secondary text-xs sm:text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Revisions */}
              <div className="bg-muted/50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-medium text-text-primary">
                    {t('pricing.revisions')}:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary">
                    {plan?.revisions}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                fullWidth
                variant={plan?.popular ? 'default' : 'outline'}
                className={plan?.popular ? 'cta-button' : 'border-primary text-primary hover:bg-primary hover:text-white'}
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t('pricing.getStarted')}
              </Button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-12 sm:mt-16 bg-background border border-border rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-text-primary text-center mb-6 sm:mb-8">
            {t('pricing.included.title')}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t('pricing.included.items', { returnObjects: true })?.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon name={item?.icon} size={20} className="text-primary sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold text-text-primary mb-1 sm:mb-2">{item?.title}</h4>
                <p className="text-xs sm:text-sm text-text-secondary">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {t('pricing.custom.title')}
            </h3>
            <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
              {t('pricing.custom.subtitle')}
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base min-h-[44px]"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('pricing.custom.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;