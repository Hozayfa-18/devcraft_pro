import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const faqs = [
    {
      id: 0,
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity:\n\n• Landing pages: 1-2 weeks\n• Websites: 4-8 weeks\n• Mobile apps: 8-16 weeks\n• SaaS platforms: 12-24 weeks\n\nWe provide detailed timelines during consultation and stick to agreed deadlines with 98% on-time delivery rate.",
      category: "Timeline",
      hasVideo: true,
      videoTitle: "Project Timeline Breakdown"
    },
    {
      id: 1,
      question: "What\'s included in your pricing?",
      answer: "Our transparent pricing includes:\n\n• Complete design and development\n• Mobile-responsive implementation\n• Quality assurance testing\n• Deployment and launch support\n• Post-launch support period\n• Source code and documentation\n\nNo hidden fees or surprise charges - everything is outlined upfront.",
      category: "Pricing",
      hasVideo: false
    },
    {
      id: 2,
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! Every project includes:\n\n• 3-12 months of free support (varies by package)\n• Bug fixes and minor updates\n• Performance monitoring\n• Security updates\n• Technical assistance\n\nExtended support plans are available for long-term partnerships.",
      category: "Support",
      hasVideo: true,
      videoTitle: "Our Support Process"
    },
    {
      id: 3,
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrations:\n\n• CRM systems (Salesforce, HubSpot)\n• Payment processors (Stripe, PayPal)\n• Analytics platforms (Google Analytics)\n• Email marketing tools (Mailchimp)\n• Custom APIs and databases\n\nWe'll assess your current setup and recommend the best integration approach.",
      category: "Integration",
      hasVideo: false
    },
    {
      id: 4,
      question: "What if I need changes during development?",
      answer: "We expect changes and plan for them:\n\n• Each package includes revision rounds\n• Clear change request process\n• Transparent pricing for additional work\n• Regular check-ins to catch issues early\n• Flexible development approach\n\nMost changes can be accommodated without affecting timeline or budget.",
      category: "Process",
      hasVideo: true,
      videoTitle: "Handling Project Changes"
    },
    {
      id: 5,
      question: "How do you ensure project quality?",
      answer: "Quality is guaranteed through:\n\n• Rigorous testing protocols\n• Code reviews by senior developers\n• Performance optimization\n• Security audits\n• Cross-browser/device testing\n• Client approval at each milestone\n\n100% satisfaction guarantee or money back.",
      category: "Quality",
      hasVideo: false
    },
    {
      id: 6,
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies:\n\n• Frontend: React, Vue.js, Next.js\n• Backend: Node.js, Python, PHP\n• Mobile: React Native, Flutter\n• Databases: PostgreSQL, MongoDB\n• Cloud: AWS, Google Cloud, Azure\n\nTechnology choice depends on your specific needs and goals.",
      category: "Technology",
      hasVideo: true,
      videoTitle: "Technology Stack Overview"
    },
    {
      id: 7,
      question: "How do we communicate during the project?",
      answer: "Clear communication is our priority:\n\n• Dedicated project manager\n• Weekly progress updates\n• Slack/Teams integration\n• Video calls for major milestones\n• Real-time project dashboard\n• 24/7 support for urgent issues\n\nYou'll always know exactly where your project stands.",
      category: "Communication",
      hasVideo: false
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const openVideoModal = (faq) => {
    setSelectedVideo(faq);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Get answers to common questions about our development process, pricing, and support.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <span
              key={category}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq) => (
            <div
              key={faq?.id}
              className="bg-background border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq?.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full flex-shrink-0">
                    {faq?.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {faq?.question}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                  {faq?.hasVideo && (
                    <button
                      onClick={(e) => {
                        e?.stopPropagation();
                        openVideoModal(faq);
                      }}
                      className="p-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors"
                      title="Watch explanation video"
                    >
                      <Icon name="Play" size={16} />
                    </button>
                  )}
                  <Icon
                    name="ChevronDown"
                    size={20}
                    className={`text-text-secondary transition-transform duration-300 ${
                      openFAQ === faq?.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openFAQ === faq?.id
                    ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="px-6 pb-6">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                      {faq?.answer}
                    </div>
                    {faq?.hasVideo && (
                      <button
                        onClick={() => openVideoModal(faq)}
                        className="mt-4 inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-medium transition-colors"
                      >
                        <Icon name="Play" size={16} />
                        <span>Watch detailed explanation</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our team is here to help. Schedule a free consultation to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Schedule Consultation</span>
              </button>
              <button
                onClick={() => {
                  window.open('mailto:hello@devcraftpro.com', '_blank');
                }}
                className="inline-flex items-center space-x-2 border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideoModal && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-background border border-border rounded-2xl max-w-2xl w-full shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-text-primary">
                {selectedVideo?.videoTitle}
              </h3>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <Icon name="X" size={20} className="text-text-secondary" />
              </button>
            </div>

            {/* Video Content */}
            <div className="p-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Icon name="Play" size={48} className="text-primary mb-4 mx-auto" />
                  <div className="text-text-primary font-medium mb-2">
                    Video Explanation Coming Soon
                  </div>
                  <div className="text-text-secondary text-sm">
                    This feature will include detailed video explanations for complex topics.
                  </div>
                </div>
              </div>
              
              {/* Video Description */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h4 className="font-semibold text-text-primary mb-2">
                  What this video covers:
                </h4>
                <div className="text-text-secondary text-sm leading-relaxed whitespace-pre-line">
                  {selectedVideo?.answer}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FAQSection;