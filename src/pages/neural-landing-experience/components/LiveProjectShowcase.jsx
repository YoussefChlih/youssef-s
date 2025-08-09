import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LiveProjectShowcase = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const projects = [
    {
      id: 1,
      title: "HireGenius - AI-Based Intelligent Recruitment System",
      category: "Machine Learning & Computer Vision",
      description: "Comprehensive AI recruitment platform using NLP for CV analysis, YOLOv8 for facial expression analysis, and CNN-BiLSTM for voice analysis during interviews.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
      technologies: ["Python", "NLP", "YOLOv8", "CNN-BiLSTM", "Computer Vision", "FastAPI"],
      metrics: {
        accuracy: "95%",
        processing: "Real-time",
        features: "3 AI modules"
      },
      demoUrl: "#",
      githubUrl: "#",
      liveDemo: true,
      status: "Final Project"
    },
    {
      id: 2,
      title: "3D Object Classification using DGCNN",
      category: "Computer Vision & Deep Learning",
      description: "Advanced 3D object classification system using Dynamic Graph Convolutional Neural Network with ModelNet10 dataset and interactive Streamlit interface.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop",
      technologies: ["Python", "DGCNN", "ModelNet10", "Streamlit", "3D CNN", "Machine Learning"],
      metrics: {
        accuracy: "High precision",
        interface: "Interactive",
        dataset: "ModelNet10"
      },
      demoUrl: "#",
      githubUrl: "#",
      liveDemo: true,
      status: "Internship Project"
    },
    {
      id: 3,
      title: "Web Scraper Application",
      category: "Full-Stack Development",
      description: "Full-stack web scraping solution with React frontend, FastAPI backend, WebSocket integration, and multi-format data export capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Material-UI", "FastAPI", "WebSocket", "Selenium", "Python"],
      metrics: {
        formats: "4 export types",
        interface: "Responsive",
        automation: "Full-stack"
      },
      demoUrl: "#",
      githubUrl: "#",
      liveDemo: true,
      status: "Personal Project"
    },
    {
      id: 4,
      title: "Automated IT Fault Detection System",
      category: "Machine Learning & Analytics",
      description: "AI-driven IT fault detection system using Machine Learning algorithms to enhance system reliability and performance through predictive analytics.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "Data Analysis", "System Monitoring"],
      metrics: {
        reliability: "Enhanced",
        prediction: "Automated",
        monitoring: "Real-time"
      },
      demoUrl: "#",
      githubUrl: "#",
      liveDemo: false,
      status: "Internship Project"
    }
  ];

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentProject(prev => (prev + 1) % projects?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating, projects?.length]);

  const handleProjectChange = (index) => {
    setCurrentProject(index);
    setIsAutoRotating(false);
    
    // Resume auto-rotation after 10 seconds
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const currentProjectData = projects?.[currentProject];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Rocket" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline gradient-text">
              Live Project Showcase
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Explore interactive demonstrations of production-ready AI solutions. 
            Each project showcases real-world applications with measurable business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project Display */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-intelligent-hover border border-border overflow-hidden transition-intelligent">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={currentProjectData?.image}
                  alt={currentProjectData?.title}
                  className="w-full h-full object-cover transition-intelligent hover:scale-105"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-cta ${
                    currentProjectData?.status === 'Production' ?'bg-success text-success-foreground' 
                      : currentProjectData?.status === 'Beta' ?'bg-warning text-warning-foreground' :'bg-secondary text-secondary-foreground'
                  }`}>
                    {currentProjectData?.status}
                  </div>
                </div>

                {/* Live Demo Indicator */}
                {currentProjectData?.liveDemo && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                      <span className="text-xs font-cta text-foreground">Live Demo</span>
                    </div>
                  </div>
                )}

                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-cta">
                    {currentProjectData?.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-headline text-foreground mb-3">
                    {currentProjectData?.title}
                  </h3>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {currentProjectData?.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-cta text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProjectData?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                  {Object.entries(currentProjectData?.metrics)?.map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-headline text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground font-body capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    className="flex-1 font-cta"
                  >
                    Try Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Github"
                    iconPosition="left"
                    className="flex-1 font-cta"
                  >
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="space-y-6">
            <div className="space-y-4">
              {projects?.map((project, index) => (
                <div
                  key={project?.id}
                  onClick={() => handleProjectChange(index)}
                  className={`p-4 rounded-xl border transition-intelligent cursor-pointer interactive-lift ${
                    index === currentProject
                      ? 'bg-primary/5 border-primary shadow-intelligent'
                      : 'bg-card border-border hover:border-primary/50 hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        index === currentProject
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon 
                          name={
                            project?.category?.includes('Vision') ? 'Eye' :
                            project?.category?.includes('Machine Learning') ? 'Brain' :
                            project?.category?.includes('NLP') ? 'MessageSquare' :
                            'Cpu'
                          } 
                          size={20} 
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-cta text-sm mb-1 ${
                        index === currentProject ? 'text-primary' : 'text-foreground'
                      }`}>
                        {project?.title}
                      </h4>
                      <p className="text-xs text-muted-foreground font-body line-clamp-2">
                        {project?.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-muted-foreground font-body">
                          {project?.category}
                        </span>
                        {project?.liveDemo && (
                          <div className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                            <span className="text-xs text-success font-cta">Live</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Projects CTA */}
            <div className="pt-6 border-t border-border">
              <Link to="/ai-project-showcase">
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="font-cta interactive-lift"
                >
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Auto-rotation Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-2 text-xs text-muted-foreground font-body">
            <Icon name="RotateCw" size={14} className={isAutoRotating ? 'animate-spin' : ''} />
            <span>{isAutoRotating ? 'Auto-rotating projects' : 'Auto-rotation paused'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProjectShowcase;