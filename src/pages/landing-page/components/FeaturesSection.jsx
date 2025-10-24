import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  const features = [
    {
      id: 'speed',
      title: t('features.items.speed.title'),
      description: t('features.items.speed.description'),
      icon: 'Zap',
      metric: t('features.items.speed.metric'),
      metricLabel: t('features.items.speed.metricLabel'),
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      examples: t('features.items.speed.examples', { returnObjects: true })
    },
    {
      id: 'reliability',
      title: t('features.items.reliability.title'),
      description: t('features.items.reliability.description'),
      icon: 'Shield',
      metric: t('features.items.reliability.metric'),
      metricLabel: t('features.items.reliability.metricLabel'),
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      examples: t('features.items.reliability.examples', { returnObjects: true })
    },
    {
      id: 'scalability',
      title: t('features.items.scalability.title'),
      description: t('features.items.scalability.description'),
      icon: 'TrendingUp',
      metric: t('features.items.scalability.metric'),
      metricLabel: t('features.items.scalability.metricLabel'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      examples: t('features.items.scalability.examples', { returnObjects: true })
    },
    {
      id: 'support',
      title: t('features.items.support.title'),
      description: t('features.items.support.description'),
      icon: 'Headphones',
      metric: t('features.items.support.metric'),
      metricLabel: t('features.items.support.metricLabel'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      examples: t('features.items.support.examples', { returnObjects: true })
    },
    {
      id: 'security',
      title: t('features.items.security.title'),
      description: t('features.items.security.description'),
      icon: 'Lock',
      metric: t('features.items.security.metric'),
      metricLabel: t('features.items.security.metricLabel'),
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      examples: t('features.items.security.examples', { returnObjects: true })
    },
    {
      id: 'performance',
      title: t('features.items.performance.title'),
      description: t('features.items.performance.description'),
      icon: 'Gauge',
      metric: t('features.items.performance.metric'),
      metricLabel: t('features.items.performance.metricLabel'),
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      examples: t('features.items.performance.examples', { returnObjects: true })
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.getAttribute('data-feature-id');
            setVisibleFeatures(prev => [...new Set([...prev, featureId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureElements = document.querySelectorAll('[data-feature-id]');
    featureElements?.forEach(el => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            {t('features.title')} <span className="text-primary">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              data-feature-id={feature?.id}
              className={`group bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 ${
                visibleFeatures?.includes(feature?.id) 
                  ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon & Metric */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl ${feature?.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={feature?.icon} size={28} className={feature?.color} />
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-heading ${feature?.color}`}>
                    {feature?.metric}
                  </div>
                  <div className="text-xs text-text-secondary font-medium">
                    {feature?.metricLabel}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {feature?.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {feature?.description}
                </p>

                {/* Examples */}
                <div className="space-y-2">
                  {feature?.examples?.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                      <span className="text-text-secondary">{example}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${feature?.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
            </div>
          ))}
        </div>

        {/* Client Success Stories */}
        <div className="mt-20 bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-4">
              {t('features.successStories.title')}
            </h3>
            <p className="text-text-secondary">
              {t('features.successStories.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t('features.successStories.stats', { returnObjects: true })?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <div className={`text-3xl font-heading ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-sm text-text-secondary mb-2">{stat.label}</div>
                  <div className="text-xs text-text-secondary">
                    "{stat.quote}"
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;