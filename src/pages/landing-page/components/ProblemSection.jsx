import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [selectedProblem, setSelectedProblem] = useState(0);

  const problems = [
    {
      id: 0,
      title: "Budget Overruns",
      description: "Projects that start at $5K end up costing $15K",
      icon: "DollarSign",
      stats: "73% of projects exceed initial budget",
      consequences: [
        "Unexpected costs drain business resources",
        "Project scope creep without clear boundaries", 
        "Hidden fees discovered mid-development",
        "No transparent pricing structure"
      ]
    },
    {
      id: 1,
      title: "Missed Deadlines",
      description: "Promised 6-week delivery becomes 6-month nightmare",
      icon: "Clock",
      stats: "68% of projects delivered late",
      consequences: [
        "Market opportunities lost to competitors",
        "Launch dates pushed indefinitely",
        "Revenue goals missed due to delays",
        "Team productivity severely impacted"
      ]
    },
    {
      id: 2,
      title: "Poor Communication",
      description: "Weeks of silence followed by disappointing updates",
      icon: "MessageSquare",
      stats: "81% report communication issues",
      consequences: [
        "No visibility into project progress",
        "Requirements misunderstood repeatedly",
        "Feedback ignored or implemented incorrectly",
        "Constant anxiety about project status"
      ]
    },
    {
      id: 3,
      title: "Subpar Quality",
      description: "Delivered product breaks on launch day",
      icon: "AlertTriangle",
      stats: "59% need immediate fixes post-launch",
      consequences: [
        "Embarrassing bugs in front of customers",
        "Security vulnerabilities expose business",
        "Performance issues drive users away",
        "Additional costs for emergency fixes"
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            Tired of Development <span className="text-error">Disasters?</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            You're not alone. Most business owners have horror stories about failed development projects. 
            Click below to see the real cost of these common problems.
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
                  Real Business Impact:
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
                      We eliminate this risk completely
                    </div>
                    <div className="text-sm text-text-secondary">
                      Our proven process and transparent approach ensures you never face these problems.
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
              Ready for a Different Experience?
            </h3>
            <p className="text-text-secondary mb-6">
              Join 500+ business owners who chose reliability over risk.
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
              <span>See Our Solution</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;