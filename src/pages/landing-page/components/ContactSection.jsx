import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    projectType: '',
    timeline: '',
    budget: '',
    
    // Step 2
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: '',
    features: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectTypes = [
    { id: 'landing-page', label: 'Landing Page', icon: 'FileText', price: 'From $500' },
    { id: 'web-app', label: 'Web Application', icon: 'Globe', price: 'From $5,000' },
    { id: 'mobile-app', label: 'Mobile App', icon: 'Smartphone', price: 'From $5,000' }
  ];

  const timelines = [
    { id: 'asap', label: 'ASAP (Rush Job)', icon: 'Zap' },
    { id: '1-month', label: 'Within 1 Month', icon: 'Calendar' },
    { id: '2-3-months', label: '2-3 Months', icon: 'Clock' },
    { id: 'flexible', label: 'Flexible Timeline', icon: 'MoreHorizontal' }
  ];

  const budgetRanges = [
    { id: 'under-2k', label: 'Under $2,000', range: '$500 - $2,000' },
    { id: '5k-15k', label: '$5,000 - $15,000', range: '$5,000 - $15,000' },
    { id: '15k-20k', label: '$15,000 - $20,000', range: '$15,000 - $20,000' },
    { id: 'over-20k', label: '$20,000+', range: '$20,000+' },
    { id: 'discuss', label: 'Let\'s Discuss', range: 'Custom Budget' }
  ];

  const featureOptions = [
    'User Authentication',
    'Payment Processing',
    'Admin Dashboard',
    'API Integration',
    'Real-time Features',
    'Mobile App',
    'E-commerce',
    'Analytics',
    'Multi-language',
    'Third-party Integrations'
  ];

  const contactMethods = [
    {
      icon: 'Phone',
      title: 'Call Us',
      value: '+49 17655298403',
      value2: '+90 5393225378',
      description: 'German & English speakers:',
      description2: 'Arabic & Turkish speakers:',
      action: () => window.open('tel:+4917655298403'),
      action2: () => window.open('tel:+905393225378')
    },
    {
      icon: 'Mail',
      title: 'Email Us',
      value: 'info@qk-dev.com',
      description: 'We respond within 2 hours',
      action: () => window.open('mailto:info@qk-dev.com')
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData(prev => ({
      ...prev,
      features: prev?.features?.includes(feature)
        ? prev?.features?.filter(f => f !== feature)
        : [...prev?.features, feature]
    }));
  };


  const nextStep = () => {
    if (currentStep === 1 && formData?.projectType && formData?.timeline) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS (clean format)
      const templateParams = {
        name: formData.name || 'Anonymous',
        message: `Contact Information:
- Name: ${formData.name || 'Not provided'}
- Email: ${formData.email || 'Not provided'}
- Phone: ${formData.phone || 'Not provided'}
- Company: ${formData.company || 'Not provided'}

Project Details:
- Project Type: ${formData.projectType || 'Not specified'}
- Timeline: ${formData.timeline || 'Not specified'}
- Budget: ${formData.budget || 'Not specified'}
- Features Needed: ${formData.features?.join(', ') || 'None specified'}

Project Description:
${formData.projectDescription || 'No description provided'}

Estimated Timeline: ${getEstimatedTimeline()}

---
This inquiry was submitted through the QK Dev website contact form.`
      };

      // Send email using EmailJS
      console.log('Sending email with params:', templateParams);
      const result = await emailjs.send(
        'contact_form', // Replace with your EmailJS service ID
        'template_l6ptts5', // Replace with your EmailJS template ID
        templateParams,
        'VeNoZTET9rUrqDydT' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setShowSuccess(false);
        setCurrentStep(1);
        setFormData({
          projectType: '',
          timeline: '',
          budget: '',
          name: '',
          email: '',
          phone: '',
          company: '',
          projectDescription: '',
          features: []
        });
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', error.text || error.message);
      setIsSubmitting(false);
      alert(`There was an error sending your message: ${error.text || error.message}. Please try again or contact us directly at info@qk-dev.com`);
    }
  };

  const getEstimatedTimeline = () => {
    const timelineMap = {
      'landing-page': '1-2 weeks',
      'mobile-app': '8-24 weeks',
      'web-app': '8-20 weeks'
    };
    return timelineMap?.[formData?.projectType] || 'To be determined';
  };

  if (showSuccess) {
    return (
      <section id="contact" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center bg-background rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={40} className="text-success" />
            </div>
            <h2 className="text-3xl font-heading text-text-primary mb-4">
              Thank You for Your Request!
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              We've received your project details and will get back to you within 2 hours with:
            </p>
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-text-secondary">Detailed project timeline</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-text-secondary">Accurate cost estimate</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Check" size={16} className="text-success" />
                <span className="text-text-secondary">Next steps and process overview</span>
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="text-sm text-text-secondary">
                <strong>Estimated Timeline:</strong> {getEstimatedTimeline()}
              </div>
            </div>
            <p className="text-text-secondary">
              Check your email for a confirmation and calendar link to schedule your free consultation.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            Ready to Start Your <span className="text-primary">Project?</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Get a free quote and timeline estimate. No commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              Get In Touch
            </h3>
            {contactMethods?.map((method, index) => (
              <div
                key={index}
                className="w-full bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon name={method?.icon} size={20} className="text-primary group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{method?.title}</h4>
                    {method?.value2 ? (
                      <div className="space-y-2">
                          <div className="text-sm text-text-secondary">{method?.description}</div>
                        <div>
                          <button
                            onClick={method?.action}
                            className="block text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {method?.value}
                          </button>
                        </div>
                        <div className="text-sm text-text-secondary">{method?.description2}</div>
                        <div>
                          <button
                            onClick={method?.action2}
                            className="block text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {method?.value2}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={method?.action}
                          className="text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          {method?.value}
                        </button>
                        <div className="text-sm text-text-secondary mt-1">{method?.description}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4">Why Choose Us?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">On-Time Delivery Promise</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Award" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">500+ Successful Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-2">
            <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 1 ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    1
                  </div>
                  <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`} />
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 2 ? 'bg-primary text-white' : 'bg-muted text-text-secondary'
                  }`}>
                    2
                  </div>
                </div>
                <div className="text-sm text-text-secondary">
                  Step {currentStep} of 2
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-6">
                        What type of project do you need?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {projectTypes?.map((type) => (
                          <button
                            key={type?.id}
                            type="button"
                            onClick={() => handleInputChange('projectType', type?.id)}
                            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                              formData?.projectType === type?.id
                                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <Icon name={type?.icon} size={20} className="text-primary mt-1" />
                              <div>
                                <div className="font-semibold text-text-primary">{type?.label}</div>
                                <div className="text-sm text-primary">{type?.price}</div>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-6">
                        When do you need it completed?
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {timelines?.map((timeline) => (
                          <button
                            key={timeline?.id}
                            type="button"
                            onClick={() => handleInputChange('timeline', timeline?.id)}
                            className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                              formData?.timeline === timeline?.id
                                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <Icon name={timeline?.icon} size={20} className="text-primary" />
                              <span className="font-medium text-text-primary">{timeline?.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-6">
                        What's your budget range?
                      </h3>
                      <div className="space-y-3">
                        {budgetRanges?.map((budget) => (
                          <button
                            key={budget?.id}
                            type="button"
                            onClick={() => handleInputChange('budget', budget?.id)}
                            className={`w-full p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                              formData?.budget === budget?.id
                                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-text-primary">{budget?.label}</span>
                              <span className="text-sm text-text-secondary">{budget?.range}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={nextStep}
                        disabled={!formData?.projectType || !formData?.timeline}
                        className="cta-button"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-text-primary">
                        Tell us about yourself
                      </h3>
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-primary hover:text-primary/80 font-medium flex items-center space-x-1"
                      >
                        <Icon name="ArrowLeft" size={16} />
                        <span>Back</span>
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        type="text"
                        placeholder="John Doe"
                        value={formData?.name}
                        onChange={(e) => handleInputChange('name', e?.target?.value)}
                        required
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@company.com"
                        value={formData?.email}
                        onChange={(e) => handleInputChange('email', e?.target?.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData?.phone}
                        onChange={(e) => handleInputChange('phone', e?.target?.value)}
                      />
                      <Input
                        label="Company Name"
                        type="text"
                        placeholder="Your Company"
                        value={formData?.company}
                        onChange={(e) => handleInputChange('company', e?.target?.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Project Description
                      </label>
                      <textarea
                        placeholder="Tell us about your project goals, target audience, and any specific requirements..."
                        value={formData?.projectDescription}
                        onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-4">
                        Features Needed (Select all that apply)
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {featureOptions?.map((feature) => (
                          <button
                            key={feature}
                            type="button"
                            onClick={() => handleFeatureToggle(feature)}
                            className={`p-3 border rounded-lg text-left transition-colors ${
                              formData?.features?.includes(feature)
                                ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50'
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <Icon 
                                name={formData?.features?.includes(feature) ? "CheckSquare" : "Square"} 
                                size={16} 
                              />
                              <span className="text-sm">{feature}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>


                    <Button
                      type="submit"
                      loading={isSubmitting}
                      fullWidth
                      className="cta-button"
                      iconName="Send"
                      iconPosition="right"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
                    </Button>

                    <div className="text-center text-sm text-text-secondary">
                      By submitting this form, you agree to receive communication from QK Dev. 
                      We respect your privacy and never share your information.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;