import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      number: '500+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects across various industries',
      icon: 'CheckCircle'
    },
    {
      number: '98%',
      label: 'On-Time Delivery',
      description: 'Consistent delivery within agreed timelines',
      icon: 'Clock'
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Every project backed by our satisfaction guarantee',
      icon: 'Heart'
    },
    {
      number: '5+',
      label: 'Years Experience',
      description: 'Proven track record in web and mobile development',
      icon: 'Award'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      description: '10+ years building scalable web applications and mobile apps'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      expertise: 'Design & User Experience',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      description: 'Creating beautiful, user-friendly interfaces that convert'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Project Manager',
      expertise: 'Project Coordination',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Ensuring smooth project delivery and clear communication'
    }
  ];

  const values = [
    {
      icon: 'Shield',
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code is written with care and attention to detail.'
    },
    {
      icon: 'Clock',
      title: 'On-Time Delivery',
      description: 'We respect your timeline and deliver projects when promised, every single time.'
    },
    {
      icon: 'MessageCircle',
      title: 'Transparent Communication',
      description: 'You\'ll always know exactly where your project stands with regular updates and clear communication.'
    },
    {
      icon: 'Users',
      title: 'Client-Focused',
      description: 'Your success is our success. We\'re invested in helping your business grow and thrive.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            About <span className="text-primary">QK Dev</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            We're a team of passionate developers and designers who transform your ideas into powerful digital solutions. 
            Our mission is to help businesses succeed through exceptional web and mobile development.
          </p>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
              What We Do
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We specialize in three core services that help businesses establish and grow their digital presence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Pages */}
            <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Landing Pages</h4>
              <p className="text-text-secondary mb-6">
                High-converting landing pages that turn visitors into customers. Perfect for marketing campaigns, 
                product launches, and lead generation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Mobile responsive design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">SEO optimized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Fast loading times</span>
                </div>
              </div>
            </div>

            {/* Web Applications */}
            <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Globe" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Web Applications</h4>
              <p className="text-text-secondary mb-6">
                Custom web applications that solve complex business problems. From simple dashboards to 
                enterprise-level platforms.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Custom functionality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">User authentication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Database integration</span>
                </div>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="bg-background border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Smartphone" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-text-primary mb-4">Mobile Apps</h4>
              <p className="text-text-secondary mb-6">
                Native and cross-platform mobile applications for iOS and Android. 
                Reach your customers wherever they are.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">iOS & Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">App store optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm text-text-secondary">Push notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
              Our Track Record
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={stat.icon} size={24} className="text-primary group-hover:text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-heading text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-text-secondary">
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
              Our Values
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={value.icon} size={24} className="text-primary group-hover:text-white" />
                </div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your project and see how we can help bring your ideas to life.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
