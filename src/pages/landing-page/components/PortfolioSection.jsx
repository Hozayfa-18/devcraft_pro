import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PortfolioSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'webapp', label: 'Web Applications' }
  ];

  const projects = [
    {
      id: 1,
      title: 'EcoCommerce Platform',
      category: 'website',
      type: 'E-commerce Website',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      client: 'GreenTech Solutions',
      timeline: '6 weeks',
      results: {
        traffic: '+250%',
        conversion: '+180%',
        revenue: '$1.2M'
      },
      description: 'Modern e-commerce platform for sustainable products with advanced filtering and checkout optimization.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      challenges: 'Complex product categorization and inventory management',
      solution: 'Custom taxonomy system with real-time inventory tracking',
      testimonial: "QK DEV delivered exactly what we needed. The platform handles our complex product catalog beautifully and our sales have tripled since launch.",
      clientRole: 'CEO, GreenTech Solutions'
    },
    {
      id: 2,
      title: 'FitTracker Mobile App',
      category: 'mobile',
      type: 'Health & Fitness App',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      client: 'HealthFirst Inc',
      timeline: '12 weeks',
      results: {
        downloads: '50K+',
        rating: '4.8/5',
        retention: '85%'
      },
      description: 'Comprehensive fitness tracking app with social features and AI-powered workout recommendations.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'AWS'],
      challenges: 'Real-time data synchronization across devices',
      solution: 'Offline-first architecture with smart sync algorithms',
      testimonial: "The app exceeded our expectations. Users love the intuitive interface and the AI recommendations are spot-on.",
      clientRole: 'Product Manager, HealthFirst Inc'
    },
    {
      id: 3,
      title: 'ProjectFlow Web App',
      category: 'webapp',
      type: 'Project Management Web Application',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      client: 'Workflow Dynamics',
      timeline: '16 weeks',
      results: {
        users: '10K+',
        efficiency: '+200%',
        satisfaction: '95%'
      },
      description: 'Comprehensive project management web application with advanced analytics and team collaboration features.',
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Docker'],
      challenges: 'Scalable multi-user architecture',
      solution: 'Microservices architecture with automated scaling',
      testimonial: "This web application transformed how our clients manage projects. The ROI has been incredible.",
      clientRole: 'CTO, Workflow Dynamics'
    },
    {
      id: 4,
      title: 'RestaurantOS',
      category: 'website',
      type: 'Restaurant Management',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
      client: 'Culinary Ventures',
      timeline: '8 weeks',
      results: {
        orders: '+300%',
        efficiency: '+150%',
        satisfaction: '96%'
      },
      description: 'Complete restaurant management system with online ordering, inventory tracking, and staff scheduling.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Stripe'],
      challenges: 'Real-time order management and kitchen workflow',
      solution: 'WebSocket-based real-time updates with queue management',
      testimonial: "Our restaurant operations are now completely streamlined. Orders flow seamlessly from online to kitchen.",
      clientRole: 'Owner, Culinary Ventures'
    },
    {
      id: 5,
      title: 'LearnHub Platform',
      category: 'webapp',
      type: 'Online Learning Web Application',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      client: 'EduTech Innovations',
      timeline: '16 weeks',
      results: {
        students: '25K+',
        completion: '78%',
        engagement: '+200%'
      },
      description: 'Interactive online learning web application with video streaming, assessments, and progress tracking.',
      technologies: ['React', 'Node.js', 'AWS', 'WebRTC'],
      challenges: 'Video streaming optimization and progress analytics',
      solution: 'CDN-based video delivery with advanced analytics dashboard',
      testimonial: "The web application handles thousands of concurrent users flawlessly. Student engagement has never been higher.",
      clientRole: 'Founder, EduTech Innovations'
    },
    {
      id: 6,
      title: 'TravelBuddy App',
      category: 'mobile',
      type: 'Travel Planning App',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
      client: 'Adventure Seekers',
      timeline: '14 weeks',
      results: {
        downloads: '75K+',
        bookings: '$2M+',
        rating: '4.9/5'
      },
      description: 'AI-powered travel planning app with itinerary optimization and local recommendations.',
      technologies: ['Flutter', 'Python', 'Google Maps', 'ML Kit'],
      challenges: 'Complex itinerary optimization algorithms',
      solution: 'Machine learning models for personalized recommendations',
      testimonial: "The app has revolutionized how our customers plan trips. Bookings increased by 400% in the first quarter.",
      clientRole: 'CEO, Adventure Seekers'
    }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects?.filter(project => project?.category === selectedFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading text-text-primary mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary leading-relaxed">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setSelectedFilter(filter?.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === filter?.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter?.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project) => (
            <div
              key={project?.id}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project?.type}
                </div>

                {/* View Details Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg">
                    <Icon name="Eye" size={20} />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {project?.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project?.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(project?.results)?.map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-semibold text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Client & Timeline */}
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>{project?.client}</span>
                  <span>{project?.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-text-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-text-secondary mb-6">
              Let's discuss how we can create similar results for your business.
            </p>
            <Button
              className="cta-button"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
      {/* Project Detail Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="bg-background border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>

              {/* Project Title */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-3xl font-heading mb-2">{selectedProject?.title}</h3>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-primary px-3 py-1 rounded-full">{selectedProject?.type}</span>
                  <span>{selectedProject?.client}</span>
                  <span>{selectedProject?.timeline}</span>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-8">
              {/* Results Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(selectedProject?.results)?.map(([key, value]) => (
                  <div key={key} className="text-center bg-muted/50 rounded-xl p-4">
                    <div className="text-2xl font-heading text-primary mb-1">{value}</div>
                    <div className="text-text-secondary capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xl font-semibold text-text-primary mb-3">Project Overview</h4>
                <p className="text-text-secondary leading-relaxed">{selectedProject?.description}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Challenge</h4>
                  <p className="text-text-secondary">{selectedProject?.challenges}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Solution</h4>
                  <p className="text-text-secondary">{selectedProject?.solution}</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-muted/50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Quote" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-text-primary italic mb-3">"{selectedProject?.testimonial}"</p>
                    <div className="text-sm text-text-secondary font-medium">
                      {selectedProject?.clientRole}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Button
                  className="cta-button"
                  onClick={() => {
                    closeModal();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Start Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;