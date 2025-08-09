import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CTO at TechVision Inc.",
      company: "TechVision Inc.",
      location: "San Francisco, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Youssef's ability to translate complex AI concepts into practical business solutions is remarkable. His work on our fraud detection system not only met our technical requirements but exceeded our expectations in terms of cultural sensitivity and global applicability. His Moroccan perspective brought unique insights that made our solution truly international.`,
      rating: 5,
      project: "Financial Fraud Detection System",
      highlight: "Cultural sensitivity and global perspective"
    },
    {
      id: 2,
      name: "Dr. Ahmed Hassan",
      role: "Research Director",
      company: "AI Research Lab, UAE",
      location: "Dubai, UAE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Youssef on our healthcare AI project was an exceptional experience. His technical expertise in deep learning is matched only by his ethical approach to AI development. He consistently considered the human impact of every algorithm, ensuring our solutions were not just accurate but also fair and inclusive.`,
      rating: 5,
      project: "Healthcare Diagnostics AI",
      highlight: "Ethical AI development and technical excellence"
    },
    {
      id: 3,
      name: "Marie Dubois",
      role: "Head of Innovation",
      company: "European Health Consortium",
      location: "Paris, France",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Youssef's multilingual abilities and cultural awareness were invaluable to our European expansion project. He seamlessly navigated the technical challenges while ensuring our AI solutions respected local regulations and cultural nuances. His communication skills in French, Arabic, and English made collaboration effortless across our diverse team.`,
      rating: 5,
      project: "European AI Expansion",
      highlight: "Multilingual communication and cultural awareness"
    },
    {
      id: 4,
      name: "Carlos Rodriguez",
      role: "Senior ML Engineer",
      company: "Barcelona Smart City",
      location: "Barcelona, Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Youssef is one of the most innovative AI professionals I've had the pleasure to work with. His approach to smart city solutions combined cutting-edge technology with practical urban planning insights. He has this unique ability to see the bigger picture while maintaining attention to technical details.`,
      rating: 5,
      project: "Smart City Traffic Optimization",
      highlight: "Innovation and practical implementation"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      role: "Agricultural Technology Lead",
      company: "Morocco AgriTech",
      location: "Casablanca, Morocco",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      content: `يوسف جلب منظورًا فريدًا لمشروع الذكاء الاصطناعي الزراعي. فهمه العميق للثقافة المحلية والتحديات الزراعية في المغرب، إلى جانب خبرته التقنية، أدى إلى حلول مبتكرة حقًا تخدم مجتمعنا المحلي.\n\nYoussef brought a unique perspective to our agricultural AI project. His deep understanding of local culture and farming challenges in Morocco, combined with his technical expertise, led to truly innovative solutions that serve our local community.`,
      rating: 5,
      project: "Smart Agriculture AI",
      highlight: "Local cultural understanding and community impact"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            What <span className="gradient-text">Colleagues Say</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Testimonials from clients, colleagues, and collaborators across the globe
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-intelligent mb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <Image
                  src={currentTestimonial?.avatar}
                  alt={currentTestimonial?.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-headline text-foreground">
                    {currentTestimonial?.name}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {currentTestimonial?.role}
                  </p>
                  <p className="text-sm text-muted-foreground font-body">
                    {currentTestimonial?.company} • {currentTestimonial?.location}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-1">
                {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
              "{currentTestimonial?.content}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-cta text-primary">
                  Project: {currentTestimonial?.project}
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Key Strength: {currentTestimonial?.highlight}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-intelligent"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-intelligent"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation Dots */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-intelligent ${
                  index === activeTestimonial
                    ? 'bg-primary' :'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.slice(0, 3)?.map((testimonial, index) => (
              <button
                key={testimonial?.id}
                onClick={() => setActiveTestimonial(index)}
                className={`text-left p-6 rounded-xl transition-intelligent interactive-lift ${
                  index === activeTestimonial
                    ? 'bg-primary text-primary-foreground shadow-intelligent'
                    : 'bg-card hover:bg-muted'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Image
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-cta text-sm">{testimonial?.name}</h4>
                    <p className="text-xs opacity-80">{testimonial?.company}</p>
                  </div>
                </div>
                <p className="text-sm opacity-90 line-clamp-3">
                  "{testimonial?.content?.substring(0, 120)}..."
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-headline text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground font-body">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-headline text-secondary mb-2">15+</div>
            <div className="text-sm text-muted-foreground font-body">Countries Served</div>
          </div>
          <div>
            <div className="text-3xl font-headline text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-body">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-headline text-success mb-2">5.0</div>
            <div className="text-sm text-muted-foreground font-body">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;