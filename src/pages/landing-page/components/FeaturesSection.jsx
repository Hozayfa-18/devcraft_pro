import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  const features = [
    {
      id: 'speed',
      title: 'Launch 3x Faster',
      description: 'Our streamlined process and pre-built components accelerate development',
      icon: 'Zap',
      metric: '3x',
      metricLabel: 'Faster Delivery',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      examples: [
        'Landing page in 7 days vs 21 days',
        'Mobile app in 8 weeks vs 24 weeks',
        'Web application in 10 weeks vs 30 weeks'
      ]
    },
    {
      id: 'reliability',
      title: 'Guaranteed Reliability',
      description: 'Enterprise-grade infrastructure with 99.9% uptime guarantee',
      icon: 'Shield',
      metric: '99.9%',
      metricLabel: 'Uptime SLA',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      examples: [
        'Automated backups every 6 hours',
        'Load balancing for high traffic',
        'Security monitoring 24/7'
      ]
    },
    {
      id: 'scalability',
      title: 'Built to Scale',
      description: 'Architecture designed to handle growth from day one',
      icon: 'TrendingUp',
      metric: '10x',
      metricLabel: 'Traffic Capacity',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      examples: [
        'Cloud-native infrastructure',
        'Auto-scaling capabilities',
        'CDN for global performance'
      ]
    },
    {
      id: 'support',
      title: '24/7 Expert Support',
      description: 'Dedicated support team available whenever you need assistance',
      icon: 'Headphones',
      metric: '<2hr',
      metricLabel: 'Response Time',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      examples: [
        'Live chat support',
        'Emergency hotline',
        'Dedicated account manager'
      ]
    },
    {
      id: 'security',
      title: 'Bank-Level Security',
      description: 'Advanced security measures protect your data and users',
      icon: 'Lock',
      metric: '256-bit',
      metricLabel: 'SSL Encryption',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      examples: [
        'GDPR compliance',
        'Regular security audits',
        'Penetration testing'
      ]
    },
    {
      id: 'performance',
      title: 'Lightning Fast',
      description: 'Optimized for speed with Core Web Vitals compliance',
      icon: 'Gauge',
      metric: '<2s',
      metricLabel: 'Load Time',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      examples: [
        'Image optimization',
        'Code splitting',
        'Browser caching'
      ]
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
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            Why Choose <span className="text-primary">QK Dev?</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            We don't just build software - we deliver competitive advantages that drive real business results.
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
              Real Results from Real Clients
            </h3>
            <p className="text-text-secondary">
              See how our technical strengths translate to business success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="text-3xl font-heading text-primary mb-2">150%</div>
                <div className="text-sm text-text-secondary mb-2">Traffic Increase</div>
                <div className="text-xs text-text-secondary">
                  "Our new website loads 3x faster and converts much better"
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="text-3xl font-heading text-success mb-2">$2.5M</div>
                <div className="text-sm text-text-secondary mb-2">Revenue Generated</div>
                <div className="text-xs text-text-secondary">
                  "The mobile app helped us reach new markets globally"
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-background rounded-xl p-6 border border-border">
                <div className="text-3xl font-heading text-accent mb-2">90%</div>
                <div className="text-sm text-text-secondary mb-2">Time Saved</div>
                <div className="text-xs text-text-secondary">
                  "Automation features eliminated manual processes"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;