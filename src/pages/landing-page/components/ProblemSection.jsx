import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const { t } = useTranslation();
  const [selectedProblem, setSelectedProblem] = useState(0);

  const problems = [
    {
      id: 0,
      title: t('problem.problems.budget.title'),
      description: t('problem.problems.budget.description'),
      icon: "DollarSign",
      stats: t('problem.problems.budget.stats'),
      consequences: t('problem.problems.budget.consequences', { returnObjects: true })
    },
    {
      id: 1,
      title: t('problem.problems.deadlines.title'),
      description: t('problem.problems.deadlines.description'),
      icon: "Clock",
      stats: t('problem.problems.deadlines.stats'),
      consequences: t('problem.problems.deadlines.consequences', { returnObjects: true })
    },
    {
      id: 2,
      title: t('problem.problems.communication.title'),
      description: t('problem.problems.communication.description'),
      icon: "MessageSquare",
      stats: t('problem.problems.communication.stats'),
      consequences: t('problem.problems.communication.consequences', { returnObjects: true })
    },
    {
      id: 3,
      title: t('problem.problems.quality.title'),
      description: t('problem.problems.quality.description'),
      icon: "AlertTriangle",
      stats: t('problem.problems.quality.stats'),
      consequences: t('problem.problems.quality.consequences', { returnObjects: true })
    }
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            {t('problem.title')} <span className="text-error">{t('problem.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Interactive Problem Selector */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Buttons */}
          <div className="space-y-4">
            {problems?.map((problem) => (
              <button
                key={problem?.id}
                onClick={() => setSelectedProblem(problem?.id)}
                className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                  selectedProblem === problem?.id
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-background hover:border-primary/50 hover:bg-primary/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    selectedProblem === problem?.id ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    <Icon name={problem?.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                      {problem?.title}
                    </h3>
                    <p className="text-text-secondary">
                      {problem?.description}
                    </p>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    selectedProblem === problem?.id ? 'rotate-90' : ''
                  }`}>
                    <Icon name="ChevronRight" size={20} className="text-text-secondary" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Problem Details */}
          <div className="bg-background rounded-2xl border border-border p-8 shadow-lg">
            <div className="space-y-6">
              {/* Stats */}
              <div className="bg-error/10 border border-error/20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <Icon name="TrendingDown" size={20} className="text-error" />
                  <span className="text-error font-semibold">
                    {problems?.[selectedProblem]?.stats}
                  </span>
                </div>
              </div>

              {/* Consequences */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  {t('problem.impact')}
                </h4>
                <div className="space-y-3">
                  {problems?.[selectedProblem]?.consequences?.map((consequence, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="X" size={16} className="text-error mt-1 flex-shrink-0" />
                      <span className="text-text-secondary">{consequence}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Teaser */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-primary mt-1" />
                  <div>
                    <div className="font-semibold text-primary mb-1">
                      {t('problem.solution.title')}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {t('problem.solution.description')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-background border border-border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              {t('problem.cta.title')}
            </h3>
            <p className="text-text-secondary mb-6">
              {t('problem.cta.subtitle')}
            </p>
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <span>{t('problem.cta.button')}</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;