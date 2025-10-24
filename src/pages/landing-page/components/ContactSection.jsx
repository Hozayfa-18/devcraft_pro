import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const { t } = useTranslation();
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

  const projectTypes = t('contact.form.projectTypes', { returnObjects: true });

  const timelines = t('contact.form.timelines', { returnObjects: true });

  const budgetRanges = t('contact.form.budgetRanges', { returnObjects: true });

  const featureOptions = t('contact.form.featureOptions', { returnObjects: true });

  const contactMethods = t('contact.methods', { returnObjects: true });

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
This inquiry was submitted through the QK DEV website contact form.`
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
              {t('contact.success.title')}
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              {t('contact.success.subtitle')}
            </p>
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {t('contact.success.items', { returnObjects: true })?.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-muted/50 rounded-lg p-4 mb-6">
              <div className="text-sm text-text-secondary">
                <strong>{t('contact.success.estimatedTimeline')}:</strong> {getEstimatedTimeline()}
              </div>
            </div>
            <p className="text-text-secondary">
              {t('contact.success.footer')}
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
            {t('contact.title')} <span className="text-primary">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-text-primary mb-6">
              {t('contact.getInTouch.title')}
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
                          <a
                            href={method?.action}
                            className="block text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {method?.value}
                          </a>
                        </div>
                        <div className="text-sm text-text-secondary">{method?.description2}</div>
                        <div>
                          <a
                            href={method?.action2}
                            className="block text-primary font-medium hover:text-primary/80 transition-colors"
                          >
                            {method?.value2}
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <a
                          href={method?.action}
                          className="text-primary font-medium hover:text-primary/80 transition-colors"
                        >
                          {method?.value}
                        </a>
                        <div className="text-sm text-text-secondary mt-1">{method?.description}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Trust Badges */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4">{t('contact.trustBadges.title')}</h4>
              <div className="space-y-3">
                {t('contact.trustBadges.items', { returnObjects: true })?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name={item.icon} size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">{item.text}</span>
                  </div>
                ))}
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
                  {t('contact.form.stepIndicator', { current: currentStep, total: 2 })}
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Project Details */}
                {currentStep === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-6">
                        {t('contact.form.step1.projectType.title')}
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
                        {t('contact.form.step1.timeline.title')}
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
                        {t('contact.form.step1.budget.title')}
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
{t('contact.form.continue')}
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-text-primary">
                        {t('contact.form.step2.title')}
                      </h3>
                      <button
                        type="button"
                        onClick={prevStep}
                        className="text-primary hover:text-primary/80 font-medium flex items-center space-x-1"
                      >
                        <Icon name="ArrowLeft" size={16} />
                        <span>{t('contact.form.back')}</span>
                      </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact.form.fields.name.label')}
                        type="text"
                        placeholder={t('contact.form.fields.name.placeholder')}
                        value={formData?.name}
                        onChange={(e) => handleInputChange('name', e?.target?.value)}
                        required
                      />
                      <Input
                        label={t('contact.form.fields.email.label')}
                        type="email"
                        placeholder={t('contact.form.fields.email.placeholder')}
                        value={formData?.email}
                        onChange={(e) => handleInputChange('email', e?.target?.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label={t('contact.form.fields.phone.label')}
                        type="tel"
                        placeholder={t('contact.form.fields.phone.placeholder')}
                        value={formData?.phone}
                        onChange={(e) => handleInputChange('phone', e?.target?.value)}
                      />
                      <Input
                        label={t('contact.form.fields.company.label')}
                        type="text"
                        placeholder={t('contact.form.fields.company.placeholder')}
                        value={formData?.company}
                        onChange={(e) => handleInputChange('company', e?.target?.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {t('contact.form.fields.description.label')}
                      </label>
                      <textarea
                        placeholder={t('contact.form.fields.description.placeholder')}
                        value={formData?.projectDescription}
                        onChange={(e) => handleInputChange('projectDescription', e?.target?.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-4">
                        {t('contact.form.fields.features.label')}
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
{t('contact.form.submit', { isSubmitting })}
                    </Button>

                    <div className="text-center text-sm text-text-secondary">
                      {t('contact.form.privacy')}
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