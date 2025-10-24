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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            {t('pricing.title')} <span className="text-primary">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Project Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border border-border rounded-xl p-2 inline-flex">
            {projectTypes?.map((type) => (
              <button
                key={type?.id}
                onClick={() => setSelectedType(type?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedType === type?.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-text-secondary hover:text-primary hover:bg-primary/5'
                }`}
              >
                <Icon name={type?.icon} size={18} />
                <span>{type?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Object.entries(currentPricing)?.map(([key, plan]) => (
            <div
              key={key}
              className={`relative bg-background border-2 rounded-2xl p-8 transition-all duration-300 ${
                plan?.popular
                  ? 'border-primary shadow-2xl scale-105'
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
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-text-primary mb-2">
                  {plan?.name}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {plan?.description}
                </p>
                <div className="space-y-2">
                  <div className="text-4xl font-heading text-primary">
                    <span className="text-lg font-normal text-text-secondary">{t('pricing.startingFrom')}</span><br />
                    <span className="text-4xl font-heading text-primary">{plan?.price?.replace(t('pricing.startingFrom') + ' ', '')}</span>
                  </div>
                  <div className="text-sm text-text-secondary">
                    {t('pricing.timeline')}: {plan?.timeline}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {Array.isArray(plan?.features) && plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-1" />
                    <span className="text-text-secondary text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Revisions */}
              <div className="bg-muted/50 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-text-primary">
                    {t('pricing.revisions')}:
                  </span>
                  <span className="text-sm font-semibold text-primary">
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
        <div className="mt-16 bg-background border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-8">
            {t('pricing.included.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t('pricing.included.items', { returnObjects: true })?.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={item?.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">{item?.title}</h4>
                <p className="text-sm text-text-secondary">{item?.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Quote CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t('pricing.custom.title')}
            </h3>
            <p className="mb-6 opacity-90">
              {t('pricing.custom.subtitle')}
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
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