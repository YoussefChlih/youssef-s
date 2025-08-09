import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [visitorType, setVisitorType] = useState('business');
  const [currentHeadline, setCurrentHeadline] = useState(0);

  const headlines = {
    business: [
      "AI Specialist Technician and Data Engineering Expert",
      "Transforming Ideas into Intelligent Solutions",
      "Your Strategic AI Partner for Innovation"
    ],
    technical: [
      "Building Tomorrow's AI Systems Today",
      "Specialized in Machine Learning and Deep Learning",
      "Crafting Intelligent Solutions with Cutting-Edge Technology"
    ]
  };

  useEffect(() => {
    // Simulate visitor behavior detection
    const userAgent = navigator.userAgent?.toLowerCase();
    const referrer = document.referrer?.toLowerCase();
    
    if (referrer?.includes('github') || referrer?.includes('stackoverflow') || userAgent?.includes('developer')) {
      setVisitorType('technical');
    }

    // Rotate headlines every 4 seconds
    const interval = setInterval(() => {
      setCurrentHeadline(prev => (prev + 1) % headlines?.[visitorType]?.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [visitorType]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Neural Network Background */}
      <div className="absolute inset-0 neural-network-bg">
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800">
          {/* Neural Network Nodes */}
          <circle cx="200" cy="150" r="4" fill="var(--color-primary)" className="neural-pulse" />
          <circle cx="400" cy="200" r="3" fill="var(--color-secondary)" className="neural-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="600" cy="120" r="5" fill="var(--color-accent)" className="neural-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="800" cy="180" r="3" fill="var(--color-primary)" className="neural-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="1000" cy="140" r="4" fill="var(--color-secondary)" className="neural-pulse" style={{ animationDelay: '2s' }} />
          
          <circle cx="150" cy="350" r="3" fill="var(--color-accent)" className="neural-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="350" cy="400" r="4" fill="var(--color-primary)" className="neural-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="550" cy="320" r="3" fill="var(--color-secondary)" className="neural-pulse" style={{ animationDelay: '1.3s' }} />
          <circle cx="750" cy="380" r="5" fill="var(--color-accent)" className="neural-pulse" style={{ animationDelay: '1.8s' }} />
          <circle cx="950" cy="340" r="3" fill="var(--color-primary)" className="neural-pulse" style={{ animationDelay: '2.3s' }} />
          
          <circle cx="250" cy="550" r="4" fill="var(--color-secondary)" className="neural-pulse" style={{ animationDelay: '0.7s' }} />
          <circle cx="450" cy="600" r="3" fill="var(--color-accent)" className="neural-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="650" cy="520" r="4" fill="var(--color-primary)" className="neural-pulse" style={{ animationDelay: '1.7s' }} />
          <circle cx="850" cy="580" r="3" fill="var(--color-secondary)" className="neural-pulse" style={{ animationDelay: '2.2s' }} />
          
          {/* Connection Lines */}
          <line x1="200" y1="150" x2="400" y2="200" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" />
          <line x1="400" y1="200" x2="600" y2="120" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '0.5s' }} />
          <line x1="600" y1="120" x2="800" y2="180" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '1s' }} />
          <line x1="800" y1="180" x2="1000" y2="140" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '1.5s' }} />
          
          <line x1="150" y1="350" x2="350" y2="400" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '0.3s' }} />
          <line x1="350" y1="400" x2="550" y2="320" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '0.8s' }} />
          <line x1="550" y1="320" x2="750" y2="380" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '1.3s' }} />
          
          <line x1="250" y1="550" x2="450" y2="600" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '0.7s' }} />
          <line x1="450" y1="600" x2="650" y2="520" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '1.2s' }} />
          <line x1="650" y1="520" x2="850" y2="580" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.3" className="connection-flow" style={{ animationDelay: '1.7s' }} />
          
          {/* Cross connections */}
          <line x1="200" y1="150" x2="150" y2="350" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.2" className="connection-flow" style={{ animationDelay: '2s' }} />
          <line x1="400" y1="200" x2="350" y2="400" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.2" className="connection-flow" style={{ animationDelay: '2.5s' }} />
          <line x1="600" y1="120" x2="550" y2="320" stroke="var(--color-neural-connection)" strokeWidth="1" opacity="0.2" className="connection-flow" style={{ animationDelay: '3s' }} />
        </svg>
      </div>
      {/* Moroccan Pattern Overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="text-center lg:text-left space-y-8">
            {/* Dynamic Headline */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-intelligent">
                  <Icon name="Brain" size={24} color="white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-cta text-muted-foreground">AI Specialist Technician</p>
                  <p className="text-xs text-accent font-body">🇲🇦 Morocco (Trilingual: Arabic, French, English)</p>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-headline leading-tight">
                <span className="gradient-text transition-reveal">
                  {headlines?.[visitorType]?.[currentHeadline]}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl">
                Bridging the gap between cutting-edge AI research and practical business solutions. 
                Specializing in machine learning, deep learning, and intelligent system architecture 
                with a focus on scalable, production-ready implementations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/ai-project-showcase">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="Rocket"
                  iconPosition="left"
                  className="bg-primary hover:bg-primary/90 font-cta interactive-lift w-full sm:w-auto"
                >
                  Explore AI Projects
                </Button>
              </Link>
              
              <Link to="/professional-identity-hub">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="User"
                  iconPosition="left"
                  className="font-cta interactive-lift w-full sm:w-auto"
                >
                  About Youssef
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-headline text-primary">2</div>
                <div className="text-sm text-muted-foreground font-body">Internships</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-headline text-secondary">EST Nador</div>
                <div className="text-sm text-muted-foreground font-body">2023-2025</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-headline text-accent">4+</div>
                <div className="text-sm text-muted-foreground font-body">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center neural-pulse">
                <Icon name="Code" size={24} color="var(--color-primary)" />
              </div>
              <div className="absolute -top-2 -right-6 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center neural-pulse" style={{ animationDelay: '1s' }}>
                <Icon name="Database" size={20} color="var(--color-secondary)" />
              </div>
              <div className="absolute -bottom-4 -left-6 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center neural-pulse" style={{ animationDelay: '2s' }}>
                <Icon name="Cpu" size={22} color="var(--color-accent)" />
              </div>
              <div className="absolute -bottom-2 -right-4 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center neural-pulse" style={{ animationDelay: '1.5s' }}>
                <Icon name="Zap" size={18} color="var(--color-primary)" />
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-intelligent-hover bg-gradient-to-br from-primary/5 to-secondary/5 border border-border">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Youssef CHLIH - AI Solutions Architect"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with Moroccan Pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                
                {/* Professional Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-background/95 backdrop-blur-sm rounded-lg p-3 shadow-intelligent">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                        <Icon name="Award" size={16} color="white" />
                      </div>
                      <div>
                        <p className="font-cta text-sm text-foreground">Youssef CHLIH</p>
                        <p className="text-xs text-muted-foreground font-body">AI Solutions Architect</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;