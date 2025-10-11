import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [selectedType, setSelectedType] = useState('landing-page');
  const [billingCycle, setBillingCycle] = useState('project');

  const projectTypes = [
    { id: 'landing-page', label: 'Landing Page', icon: 'FileText' },
    { id: 'webapp', label: 'Web Application', icon: 'Globe' },
    { id: 'mobile', label: 'Mobile Apps', icon: 'Smartphone' }
  ];

  const pricingData = {
    'landing-page': {
      starter: {
        name: 'Basic Landing Page',
        price: '$2,500',
        timeline: '1-2 weeks',
        description: 'Simple, high-converting landing page for your campaigns',
        features: [
          'Single page design',
          'Mobile responsive',
          'Contact form integration',
          'Basic SEO optimization',
          'Social media links',
          '3 months support'
        ],
        revisions: '3 rounds',
        popular: false
      },
      professional: {
        name: 'Professional Landing Page',
        price: '$5,000',
        timeline: '2-3 weeks',
        description: 'Advanced landing page with conversion optimization',
        features: [
          'Custom design & animations',
          'A/B testing setup',
          'Advanced analytics',
          'Lead capture forms',
          'Email integration',
          '6 months support'
        ],
        revisions: '5 rounds',
        popular: true
      },
      enterprise: {
        name: 'Enterprise Landing Page',
        price: '$10,000',
        timeline: '3-4 weeks',
        description: 'Full-scale landing page solution with advanced features',
        features: [
          'Multi-variant testing',
          'CRM integration',
          'Advanced tracking',
          'Custom functionality',
          'Performance optimization',
          '12 months support'
        ],
        revisions: 'Unlimited',
        popular: false
      }
    },
    webapp: {
      starter: {
        name: 'Basic Web App',
        price: '$15,000',
        timeline: '8-12 weeks',
        description: 'Simple web application with core functionality',
        features: [
          'Custom functionality',
          'User authentication',
          'Basic dashboard',
          'Database integration',
          'Responsive design',
          '3 months support'
        ],
        revisions: '3 rounds',
        popular: false
      },
      professional: {
        name: 'Advanced Web App',
        price: '$35,000',
        timeline: '16-20 weeks',
        description: 'Feature-rich web application ready for production',
        features: [
          'Advanced features',
          'Multi-user system',
          'Admin dashboard',
          'API development',
          'Third-party integrations',
          'Analytics & reporting',
          '6 months support'
        ],
        revisions: '5 rounds',
        popular: true
      },
      enterprise: {
        name: 'Enterprise Web App',
        price: '$75,000',
        timeline: '24-32 weeks',
        description: 'Enterprise-grade web application with custom features',
        features: [
          'Custom architecture',
          'Advanced security',
          'Scalable infrastructure',
          'Custom integrations',
          'Advanced analytics',
          'Priority support',
          '12 months support'
        ],
        revisions: 'Unlimited',
        popular: false
      }
    },
    mobile: {
      starter: {
        name: 'Basic Mobile App',
        price: '$15,000',
        timeline: '8-10 weeks',
        description: 'Simple app for core functionality',
        features: [
          'iOS & Android',
          'Up to 5 screens',
          'Basic user authentication',
          'Push notifications',
          'App store submission',
          '3 months support'
        ],
        revisions: '3 rounds',
        popular: false
      },
      professional: {
        name: 'Advanced Mobile App',
        price: '$35,000',
        timeline: '12-16 weeks',
        description: 'Feature-rich app for business growth',
        features: [
          'Cross-platform development',
          'Up to 15 screens',
          'Advanced user management',
          'Payment integration',
          'Offline functionality',
          'Analytics integration',
          '6 months support'
        ],
        revisions: '5 rounds',
        popular: true
      },
      enterprise: {
        name: 'Custom Mobile Solution',
        price: '$75,000',
        timeline: '20-24 weeks',
        description: 'Fully customized mobile experience',
        features: [
          'Native iOS & Android',
          'Unlimited screens',
          'Custom backend',
          'Third-party integrations',
          'Advanced security',
          'Performance optimization',
          '12 months support'
        ],
        revisions: 'Unlimited',
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
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            No hidden fees, no surprises. Choose the package that fits your needs and budget.
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
                    Most Popular
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
                    {plan?.price}
                  </div>
                  <div className="text-sm text-text-secondary">
                    Timeline: {plan?.timeline}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan?.features?.map((feature, index) => (
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
                    Design Revisions:
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
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mt-16 bg-background border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-text-primary text-center mb-8">
            What's Included in Every Package
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'Quality Guarantee', desc: '100% satisfaction or money back' },
              { icon: 'Clock', title: 'On-Time Delivery', desc: 'Guaranteed timeline adherence' },
              { icon: 'Headphones', title: 'Dedicated Support', desc: 'Direct access to your team' },
              { icon: 'Repeat', title: 'Free Revisions', desc: 'Included in every package' }
            ]?.map((item, index) => (
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
              Need Something Custom?
            </h3>
            <p className="mb-6 opacity-90">
              Every business is unique. Let's discuss your specific requirements and create a custom solution.
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
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;