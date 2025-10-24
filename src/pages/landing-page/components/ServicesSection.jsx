import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServicesSection = () => {
  const { t } = useTranslation();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'landing-pages',
      title: t('services.items.landingPages.title'),
      description: t('services.items.landingPages.description'),
      icon: 'Globe',
      startingPrice: t('services.items.landingPages.price'),
      features: t('services.items.landingPages.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'websites',
      title: t('services.items.websites.title'),
      description: t('services.items.websites.description'),
      icon: 'Monitor',
      startingPrice: t('services.items.websites.price'),
      features: t('services.items.websites.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'mobile-apps',
      title: t('services.items.mobileApps.title'),
      description: t('services.items.mobileApps.description'),
      icon: 'Smartphone',
      startingPrice: t('services.items.mobileApps.price'),
      features: t('services.items.mobileApps.features', { returnObjects: true }),
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            {t('services.title')} <span className="text-primary">{t('services.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service?.image}
                  alt={service?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service?.gradient} opacity-80`} />
                
                {/* Icon */}
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                  <Icon name={service?.icon} size={24} color="white" />
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {service?.startingPrice}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {service?.title}
                </h3>
                <p className="text-text-secondary mb-4 text-sm leading-relaxed">
                  {service?.description}
                </p>

                {/* Features - Show on Hover */}
                <div className={`transition-all duration-300 ${
                  hoveredService === service?.id 
                    ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="space-y-2 mb-4">
                    {service?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('services.cta')}</span>
                  <Icon name="ArrowRight" size={16} />
                </button>
              </div>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service?.gradient} transform transition-transform duration-300 ${
                hoveredService === service?.id ? 'scale-x-100' : 'scale-x-0'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-muted/50 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-heading text-primary mb-2">500+</div>
              <div className="text-text-secondary">{t('services.stats.projects')}</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-accent mb-2">98%</div>
              <div className="text-text-secondary">{t('services.stats.delivery')}</div>
            </div>
            <div>
              <div className="text-3xl font-heading text-success mb-2">24/7</div>
              <div className="text-text-secondary">{t('services.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;