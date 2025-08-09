import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Explore",
      links: [
        { label: "AI Projects", path: "/ai-project-showcase", icon: "Briefcase" },
        { label: "Skills Matrix", path: "/skill-matrix-visualization", icon: "Target" },
        { label: "Experience", path: "/experience-timeline", icon: "Clock" },
        { label: "About Youssef", path: "/professional-identity-hub", icon: "User" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "AI Consulting", path: "#", icon: "Brain" },
        { label: "ML Model Development", path: "#", icon: "Code" },
        { label: "Data Engineering", path: "#", icon: "Database" },
        { label: "Technical Training", path: "#", icon: "GraduationCap" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Technical Blog", path: "#", icon: "BookOpen" },
        { label: "Research Papers", path: "#", icon: "FileText" },
        { label: "Code Examples", path: "#", icon: "Github" },
        { label: "AI Tutorials", path: "#", icon: "Play" }
      ]
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/in/youssef-chlih", color: "text-blue-600" },
    { name: "GitHub", icon: "Github", url: "https://github.com/youssef-chlih", color: "text-gray-800" },
    { name: "Email", icon: "Mail", url: "mailto:youssefchlih.ai@gmail.com", color: "text-red-500" },
    { name: "Phone", icon: "Phone", url: "tel:0606544498", color: "text-green-500" }
  ];

  const technologies = [
    "Python", "Java", "JavaScript", "PHP", "Scala", "Machine Learning", 
    "Deep Learning", "NLP", "GANs", "OpenCV", "YOLOv8", "React", "FastAPI", 
    "PostgreSQL", "MongoDB", "Docker", "Kubernetes"
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-intelligent">
                  <svg 
                    className="w-7 h-7 text-white" 
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
                <div>
                  <h3 className="font-headline text-xl gradient-text">Youssef CHLIH</h3>
                  <p className="text-sm text-muted-foreground font-body">AI Solutions Architect</p>
                </div>
              </div>
              
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Transforming data into intelligent solutions. Bridging the gap between cutting-edge AI research 
                and practical business applications with a focus on scalable, production-ready implementations.
              </p>

              {/* Location & Availability */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span className="font-body">Based in Morocco 🇲🇦</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Clock" size={16} className="text-success" />
                  <span className="font-body">Available for projects</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Icon name="Globe" size={16} className="text-secondary" />
                  <span className="font-body">Remote & On-site work</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-intelligent interactive-lift"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections?.map((section, index) => (
              <div key={index}>
                <h4 className="font-headline text-lg text-foreground mb-6">{section?.title}</h4>
                <ul className="space-y-4">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link?.path}
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-intelligent group"
                      >
                        <Icon name={link?.icon} size={16} className="group-hover:text-primary transition-intelligent" />
                        <span className="font-body text-sm">{link?.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-6">
            <h4 className="font-headline text-lg text-foreground mb-3">Technologies & Tools</h4>
            <p className="text-sm text-muted-foreground font-body">
              Expertise across the full AI/ML technology stack
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body hover:bg-primary hover:text-primary-foreground transition-intelligent cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="Mail" size={16} color="white" />
              </div>
              <h4 className="font-headline text-xl text-foreground">Stay Updated</h4>
            </div>
            
            <p className="text-muted-foreground font-body mb-6 max-w-2xl mx-auto">
              Get the latest insights on AI/ML trends, project updates, and technical tutorials 
              delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button
                variant="default"
                iconName="Send"
                iconPosition="left"
                className="font-cta"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span className="font-body">© {currentYear} Youssef CHLIH. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="font-body">Built with React & AI-powered insights</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-intelligent font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-intelligent font-body">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-intelligent font-body">
                Cookie Policy
              </a>
            </div>
          </div>
          
          {/* Moroccan Cultural Element */}
          <div className="mt-6 pt-6 border-t border-border text-center">
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span className="font-body">Proudly crafted in Morocco</span>
              <span className="text-lg">🇲🇦</span>
              <span className="font-body">with global impact in mind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;