import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const WorldMapSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Smart Agriculture AI - Morocco",
      location: "Casablanca, Morocco",
      coordinates: { lat: 33.5731, lng: -7.5898 },
      description: "Developed AI-powered crop monitoring system for local farmers, increasing yield by 35%",
      tech: ["Computer Vision", "IoT", "Machine Learning"],
      year: "2023",
      impact: "500+ farmers benefited"
    },
    {
      id: 2,
      name: "Financial Fraud Detection - UAE",
      location: "Dubai, UAE",
      coordinates: { lat: 25.2048, lng: 55.2708 },
      description: "Built real-time fraud detection system for major banking institution",
      tech: ["Deep Learning", "Real-time Analytics", "Python"],
      year: "2024",
      impact: "$2M+ fraud prevented"
    },
    {
      id: 3,
      name: "Healthcare Diagnostics - France",
      location: "Paris, France",
      coordinates: { lat: 48.8566, lng: 2.3522 },
      description: "Created medical imaging AI for early disease detection in partnership with French hospitals",
      tech: ["CNN", "Medical Imaging", "TensorFlow"],
      year: "2023",
      impact: "95% accuracy rate"
    },
    {
      id: 4,
      name: "E-commerce Personalization - USA",
      location: "San Francisco, USA",
      coordinates: { lat: 37.7749, lng: -122.4194 },
      description: "Developed recommendation engine for major e-commerce platform",
      tech: ["Collaborative Filtering", "NLP", "AWS"],
      year: "2024",
      impact: "40% increase in sales"
    },
    {
      id: 5,
      name: "Smart City Initiative - Spain",
      location: "Barcelona, Spain",
      coordinates: { lat: 41.3851, lng: 2.1734 },
      description: "Implemented traffic optimization AI for urban planning department",
      tech: ["Computer Vision", "Edge Computing", "IoT"],
      year: "2023",
      impact: "25% traffic reduction"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            Global <span className="gradient-text">Project Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Explore the worldwide reach of my AI solutions, spanning multiple continents and industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive World Map */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-6 shadow-intelligent">
              <div className="relative w-full h-96 bg-muted/30 rounded-lg overflow-hidden">
                {/* Simplified World Map with Project Markers */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Map Background */}
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Globe" size={120} className="text-muted-foreground/30" />
                    </div>
                    
                    {/* Project Markers */}
                    {projects?.map((project, index) => (
                      <button
                        key={project?.id}
                        onClick={() => setSelectedProject(project)}
                        className={`absolute w-4 h-4 rounded-full transition-intelligent hover:scale-125 ${
                          selectedProject?.id === project?.id
                            ? 'bg-accent shadow-lg scale-125'
                            : 'bg-primary hover:bg-secondary'
                        }`}
                        style={{
                          left: `${20 + (index * 15)}%`,
                          top: `${30 + (index * 10)}%`
                        }}
                        title={project?.name}
                      >
                        <div className="absolute -top-1 -left-1 w-6 h-6 bg-current rounded-full opacity-30 animate-ping"></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Map Legend */}
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span>Active Projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span>Selected</span>
                  </div>
                </div>
                <span className="font-cta">{projects?.length} Global Projects</span>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-1">
            {selectedProject ? (
              <div className="bg-card rounded-xl p-6 shadow-intelligent">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-headline text-foreground leading-tight">
                      {selectedProject?.name}
                    </h3>
                    <span className="text-sm text-accent font-cta bg-accent/10 px-2 py-1 rounded">
                      {selectedProject?.year}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm font-body">{selectedProject?.location}</span>
                  </div>
                  
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {selectedProject?.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-cta text-foreground mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject?.tech?.map((tech, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-success">
                      <Icon name="TrendingUp" size={16} />
                      <span className="text-sm font-cta">{selectedProject?.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-xl p-6 shadow-intelligent">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                    <Icon name="MousePointer" size={24} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-headline text-foreground mb-2">
                      Explore My Projects
                    </h3>
                    <p className="text-muted-foreground font-body text-sm">
                      Click on any marker on the map to learn more about my global AI implementations
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Statistics */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-2xl font-headline text-primary mb-1">5</div>
            <div className="text-sm text-muted-foreground font-body">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-headline text-secondary mb-1">3</div>
            <div className="text-sm text-muted-foreground font-body">Continents</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-headline text-accent mb-1">$5M+</div>
            <div className="text-sm text-muted-foreground font-body">Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-headline text-success mb-1">1000+</div>
            <div className="text-sm text-muted-foreground font-body">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMapSection;