import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import SkillsCompetencySection from './components/SkillsCompetencySection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import Icon from '../../components/AppIcon';
import { useI18n } from '../../utils/i18n.jsx';

const ProfessionalIdentityHub = () => {
  const { t } = useI18n();
  useEffect(() => {
    // Set localized page title/meta
    document.title = `${t('pages.pih.title')} - Youssef CHLIH | AI Solutions Architect`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('pages.pih.meta'));
    }
    window.scrollTo(0, 0);
  }, [t]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <div className="animate-fade-in">
          <HeroSection />
        </div>
        
        {/* Journey & Philosophy Section */}
        <div className="animate-slide-up">
          <JourneySection />
        </div>
        
        {/* Skills & Competencies */}
        <div className="animate-slide-up">
          <SkillsCompetencySection />
        </div>
        
        {/* Testimonials */}
        <div className="animate-slide-up">
          <TestimonialsSection />
        </div>
        
        {/* Call to Action */}
        <div className="animate-scale-in">
          <CallToActionSection />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <svg 
                  className="w-6 h-6 text-white" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-headline text-lg gradient-text">
                Youssef CHLIH
              </h3>
            </div>
            
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              AI Specialist Technician bridging cultures through innovative technology. 
              Building tomorrow's intelligent systems with ethical foundations and global perspective.
            </p>
            
            <div className="flex items-center justify-center space-x-6 mb-8">
              <a 
                href="mailto:youssefchlih.ai@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-intelligent"
                aria-label="Email"
              >
                <Icon name="Mail" size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/youssef-chlih" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-intelligent"
                aria-label="LinkedIn"
              >
                <Icon name="Linkedin" size={20} />
              </a>
              <a 
                href="https://github.com/YoussefChlih" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-intelligent"
                aria-label="GitHub"
              >
                <Icon name="Github" size={20} />
              </a>
            </div>
            
            <div className="text-center text-sm text-muted-foreground font-body">
              <p>© {new Date().getFullYear()} Youssef CHLIH. All rights reserved.</p>
              <p className="mt-1">AI Specialist Technician & Data Engineering Expert</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalIdentityHub;
