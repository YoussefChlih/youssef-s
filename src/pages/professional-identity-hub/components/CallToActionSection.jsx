import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToActionSection = () => {
  const actionItems = [
    {
      title: "Explore My Projects",
      description: "Discover detailed case studies and live demonstrations of my AI solutions",
      icon: "Briefcase",
      link: "/ai-project-showcase",
      buttonText: "View Projects",
      color: "from-primary to-secondary"
    },
    {
      title: "Technical Skills Matrix",
      description: "Interactive visualization of my technical competencies and certifications",
      icon: "Code",
      link: "/skill-matrix-visualization",
      buttonText: "View Skills",
      color: "from-secondary to-accent"
    },
    {
      title: "Professional Timeline",
      description: "Journey through my career milestones and key achievements",
      icon: "Clock",
      link: "/experience-timeline",
      buttonText: "View Timeline",
      color: "from-accent to-primary"
    }
  ];

  const contactOptions = [
    {
      method: "Email",
      value: "youssefchlih.ai@gmail.com",
      icon: "Mail",
      action: "mailto:youssefchlih.ai@gmail.com"
    },
    {
      method: "Phone",
      value: "+212 606-544-498",
      icon: "Phone",
      action: "tel:+212606544498"
    },
    {
      method: "LinkedIn",
      value: "Connect professionally",
      icon: "Linkedin", 
      action: "https://linkedin.com/in/youssef-chlih"
    },
    {
      method: "GitHub",
      value: "View repositories",
      icon: "Github",
      action: "https://github.com/youssef-chlih"
    },
    {
      method: "Location",
      value: "Nador, Morocco",
      icon: "MapPin",
      action: "https://maps.google.com/?q=Nador,Morocco"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30 neural-network-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            Ready to <span className="gradient-text">Collaborate</span>?
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto mb-8">
            As an AI Specialist Technician and Data Engineering expert from EST Nador (2025 graduate), 
            I bring hands-on experience from leading internships at 3d Smart Factory and HardTech Maroc. 
            Let's discuss how my expertise in Machine Learning, Computer Vision, and multilingual capabilities 
            can drive innovation for your next project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              className="bg-primary hover:bg-primary/90 font-cta"
            >
              Start a Conversation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Download"
              iconPosition="left"
              className="font-cta"
            >
              Download Resume
            </Button>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {actionItems?.map((item, index) => (
            <Link
              key={index}
              to={item?.link}
              className="group bg-card rounded-xl p-8 shadow-intelligent hover:shadow-intelligent-hover transition-intelligent interactive-lift"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${item?.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-intelligent`}>
                <Icon name={item?.icon} size={28} className="text-white" />
              </div>
              
              <h3 className="text-xl font-headline text-foreground mb-3 group-hover:text-primary transition-intelligent">
                {item?.title}
              </h3>
              
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                {item?.description}
              </p>
              
              <div className="flex items-center space-x-2 text-primary group-hover:text-secondary transition-intelligent">
                <span className="font-cta">{item?.buttonText}</span>
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-intelligent" />
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Methods */}
        <div className="bg-card rounded-2xl p-8 shadow-intelligent">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline text-foreground mb-2">
              Get in Touch
            </h3>
            <p className="text-muted-foreground font-body">
              Choose your preferred way to connect
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions?.map((option, index) => (
              <a
                key={index}
                href={option?.action}
                className="flex items-center space-x-4 p-6 border border-border rounded-lg hover:bg-muted/50 transition-intelligent interactive-lift group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-intelligent">
                  <Icon name={option?.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-cta text-foreground group-hover:text-primary transition-intelligent">
                    {option?.method}
                  </h4>
                  <p className="text-sm text-muted-foreground font-body">
                    {option?.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Availability Status */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-success/10 text-success px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            <span className="font-cta">Available for new projects</span>
          </div>
          <p className="text-sm text-muted-foreground font-body mt-2">
            Currently accepting consultations and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;