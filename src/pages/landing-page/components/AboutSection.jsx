import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AboutSection = () => {
  const { t } = useTranslation();
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = t('about.trackRecord.stats', { returnObjects: true });

  const teamMembers = t('about.team.members', { returnObjects: true });

  const values = t('about.values.items', { returnObjects: true });

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-heading text-text-primary mb-4 sm:mb-6">
            {t('about.title')} <span className="text-primary">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-primary mb-4 sm:mb-6">
              {t('about.whatWeDo.title')}
            </h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              {t('about.whatWeDo.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t('about.whatWeDo.services', { returnObjects: true })?.map((service, index) => (
              <div key={index} className="bg-background border border-border rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon name={service.icon} size={24} className="text-primary sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 sm:mb-4">{service.title}</h4>
                <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
                  {service.description}
                </p>
                <div className="space-y-1 sm:space-y-2">
                  {service.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <Icon name="Check" size={14} className="text-success sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-primary mb-4 sm:mb-6">
              {t('about.trackRecord.title')}
            </h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              {t('about.trackRecord.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={stat.icon} size={20} className="text-primary group-hover:text-white sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-heading text-primary mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-text-primary mb-1 sm:mb-2">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-text-secondary">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
              Meet Our Team
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-border group-hover:border-primary transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  {member.name}
                </h4>
                <div className="text-primary font-medium mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-text-secondary mb-4">
                  {member.expertise}
                </div>
                <p className="text-sm text-text-secondary">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Values */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-primary mb-4 sm:mb-6">
              {t('about.values.title')}
            </h3>
            <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={value.icon} size={20} className="text-primary group-hover:text-white sm:w-6 sm:h-6" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-2 sm:mb-3">
                  {value.title}
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4">
              {t('about.cta.title')}
            </h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
              {t('about.cta.subtitle')}
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-sm sm:text-base min-h-[44px]"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('about.cta.button')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
