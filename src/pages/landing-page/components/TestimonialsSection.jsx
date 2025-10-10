import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Solutions',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      testimonial: `DevCraft Pro transformed our outdated website into a modern, high-converting platform. Our online sales increased by 300% within the first quarter after launch. The team's attention to detail and commitment to deadlines was exceptional.`,project: 'E-commerce Website Redesign',
      results: ['300% increase in sales', '50% faster load times', '85% mobile conversion rate'],
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop'
    },
    {
      id: 2,
      name: 'Michael Chen',role: 'Founder',company: 'HealthTech Innovations',avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      testimonial: `Working with DevCraft Pro was a game-changer for our startup. They delivered our mobile app ahead of schedule and under budget. The app now has over 100K downloads and a 4.8-star rating. Their technical expertise is unmatched.`,
      project: 'Healthcare Mobile App',
      results: ['100K+ downloads', '4.8-star app rating', '90% user retention'],
      companyLogo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=40&fit=crop'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',role: 'CTO',company: 'DataFlow Systems',avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 5,
      testimonial: `The SaaS platform DevCraft Pro built for us handles thousands of concurrent users flawlessly. Their scalable architecture and clean code made it easy for our team to maintain and extend. ROI was achieved within 6 months.`,
      project: 'Enterprise SaaS Platform',
      results: ['$2M ARR achieved', '99.9% uptime', '10K+ active users'],
      companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=40&fit=crop'
    },
    {
      id: 4,
      name: 'David Thompson',role: 'Owner',company: 'Local Bistro Chain',avatar: 'https://randomuser.me/api/portraits/men/38.jpg',rating: 5,testimonial: `Our restaurant management system revolutionized our operations. Online orders increased by 400%, and our staff efficiency improved dramatically. The real-time kitchen display system eliminated order confusion completely.`,project: 'Restaurant Management System',
      results: ['400% more online orders', '60% faster service', '95% order accuracy'],
      companyLogo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&h=40&fit=crop'
    },
    {
      id: 5,
      name: 'Lisa Park',role: 'Director of Operations',company: 'EduLearn Academy',avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
      rating: 5,
      testimonial: `The online learning platform exceeded all our expectations. Student engagement increased by 200%, and course completion rates improved to 85%. The video streaming quality and interactive features are outstanding.`,
      project: 'Online Learning Platform',
      results: ['200% higher engagement', '85% completion rate', '50K+ students'],
      companyLogo: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=40&fit=crop'
    }
  ];

  const clientLogos = [
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=120&h=60&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop'
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Don't just take our word for it. Here's what business owners say about working with DevCraft Pro.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-background rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(current?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <blockquote className="text-lg lg:text-xl text-text-primary leading-relaxed mb-8 italic">
                "{current?.testimonial}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={current?.avatar}
                    alt={current?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-text-primary text-lg">{current?.name}</div>
                  <div className="text-text-secondary">{current?.role}, {current?.company}</div>
                  <div className="text-sm text-primary font-medium">{current?.project}</div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-text-primary mb-2">Key Results:</div>
                {current?.results?.map((result, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={14} className="text-success" />
                    <span className="text-sm text-text-secondary">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative bg-gradient-to-br from-primary to-secondary p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Quote" size={40} />
                </div>
                <div className="text-6xl font-heading mb-2">{current?.rating}.0</div>
                <div className="text-white/80">Client Rating</div>
              </div>

              {/* Company Logo */}
              <div className="absolute bottom-8 right-8 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <Image
                  src={current?.companyLogo}
                  alt={`${current?.company} logo`}
                  className="h-8 w-auto opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-6 flex items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 right-6 flex items-center space-x-2">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-text-primary mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {clientLogos?.map((logo, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="text-3xl font-heading text-primary mb-2">500+</div>
            <div className="text-text-secondary">Happy Clients</div>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="text-3xl font-heading text-success mb-2">98%</div>
            <div className="text-text-secondary">Satisfaction Rate</div>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="text-3xl font-heading text-accent mb-2">4.9</div>
            <div className="text-text-secondary">Average Rating</div>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="text-3xl font-heading text-primary mb-2">95%</div>
            <div className="text-text-secondary">Repeat Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;