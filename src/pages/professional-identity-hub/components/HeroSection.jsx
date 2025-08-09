import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background neural-network-bg">
      <div className="absolute inset-0 moroccan-pattern opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <span className="text-sm font-cta text-primary uppercase tracking-wider">
                  Professional Identity
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-foreground leading-tight">
                <span className="gradient-text">Youssef CHLIH</span><br/>
                <span className="text-2xl md:text-3xl lg:text-4xl">AI Specialist Technician & Data Engineering Expert</span>
              </h1>
              
              <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-2xl">
                Specialized Technician in Artificial Intelligence and Data Engineering with comprehensive training and 
                hands-on experience through internships. Expert in Machine Learning, Deep Learning, Computer Vision, 
                and Natural Language Processing. Trilingual professional actively seeking opportunities as an AI Specialist 
                Technician and Data Engineer.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-headline text-primary">2025</div>
                <div className="text-sm text-muted-foreground font-body">Graduate Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline text-secondary">4+</div>
                <div className="text-sm text-muted-foreground font-body">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline text-accent">6+</div>
                <div className="text-sm text-muted-foreground font-body">Certifications</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Youssef-CHLIH.pdf" 
                download="Youssef-CHLIH-CV.pdf"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta transition-intelligent hover:bg-primary/90 interactive-lift"
              >
                <Icon name="Download" size={20} />
                <span>Download CV</span>
              </a>
              <a 
                href="mailto:youssefchlih.ai@gmail.com"
                className="flex items-center justify-center space-x-2 px-6 py-3 border border-border text-foreground rounded-lg font-cta transition-intelligent hover:bg-muted interactive-lift"
              >
                <Icon name="Mail" size={20} />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Professional Photo */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
              
              {/* Main Photo */}
              <div className="relative bg-card rounded-2xl p-6 shadow-intelligent">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                  alt="Youssef CHLIH - AI Solutions Architect"
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-accent text-white p-3 rounded-full shadow-intelligent neural-pulse">
                  <Icon name="Brain" size={24} />
                </div>
                
                <div className="absolute -bottom-3 -left-3 bg-secondary text-white p-3 rounded-full shadow-intelligent">
                  <Icon name="Globe" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;