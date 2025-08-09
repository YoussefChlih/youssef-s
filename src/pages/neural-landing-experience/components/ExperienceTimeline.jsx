import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceTimeline = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const experiences = [
    {
      id: 1,
      period: "2023 - 2025",
      role: "Student - DUT in AI and Data Engineering",
      company: "EST Nador",
      location: "Nador, Morocco",
      type: "Education",
      description: "Specialized Technician program in Artificial Intelligence and Data Engineering with comprehensive training in Machine Learning, Deep Learning, and Natural Language Processing.",
      achievements: [
        "Completed comprehensive 4-month internship program",
        "Developed HireGenius AI recruitment system as final project",
        "Mastered Python, Java, computer vision, and web development",
        "Gained expertise in GANs, UML, databases, and MLOps"
      ],
      technologies: ["Python", "Java", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
      projects: [
        "HireGenius - AI-Based Intelligent Recruitment System",
        "Web Scraper Application",
        "Realistic Image Generation with GANs"
      ],
      impact: {
        duration: "2 years",
        projects: "5+",
        skills: "15+"
      }
    },
    {
      id: 2,
      period: "02/2025 - 06/2025",
      role: "AI Developer Intern",
      company: "3d Smart Factory",
      location: "Mohammedia, Morocco",
      type: "Internship",
      description: "Developed comprehensive 3D object classification system using advanced machine learning techniques with focus on DGCNN implementation and interactive applications.",
      achievements: [
        "Implemented DGCNN (Dynamic Graph Convolutional Neural Network) model with ModelNet10 dataset",
        "Created interactive Streamlit application for real-time 3D object classification",
        "Achieved accurate 3D shape recognition with user-friendly visualization",
        "Applied advanced machine learning techniques for industrial applications"
      ],
      technologies: ["Python", "DGCNN", "ModelNet10", "Streamlit", "3D CNN", "Machine Learning"],
      projects: [
        "3D Object Classification System",
        "Interactive Streamlit Interface",
        "Real-time Classification Engine"
      ],
      impact: {
        accuracy: "High precision",
        interface: "Interactive",
        classification: "Real-time"
      }
    },
    {
      id: 3,
      period: "08/2024 - 09/2024",
      role: "AI Development Intern - IT Fault Detection",
      company: "HardTech Maroc",
      location: "Casablanca, Morocco",
      type: "Internship",
      description: "Designed and implemented automated IT fault detection system utilizing Machine Learning algorithms to enhance system reliability and performance.",
      achievements: [
        "Developed predictive models to anticipate system failures",
        "Conducted comprehensive data analysis and preprocessing",
        "Improved overall IT infrastructure reliability through ML algorithms",
        "Implemented automated monitoring and fault detection capabilities"
      ],
      technologies: ["Python", "Machine Learning", "Predictive Analytics", "Data Analysis", "System Monitoring"],
      projects: [
        "Automated IT Fault Detection System",
        "Predictive Failure Models",
        "System Reliability Enhancement"
      ],
      impact: {
        reliability: "Enhanced",
        prediction: "Automated",
        monitoring: "Real-time"
      }
    },
    {
      id: 4,
      period: "2022 - 2023",
      role: "Baccalaureate Student",
      company: "Lycée Moulay Rachid",
      location: "Nador, Morocco", 
      type: "Education",
      description: "Completed Baccalaureate in Science-Mathematics A (BIOF) with strong foundation in mathematics and sciences, preparing for advanced studies in AI and Data Engineering.",
      achievements: [
        "Successfully completed Science-Mathematics A (BIOF) program",
        "Built strong foundation in mathematics and analytical thinking",
        "Developed problem-solving and collaborative teamwork skills",
        "Prepared for advanced studies in technology and engineering"
      ],
      technologies: ["Mathematics", "Sciences", "Analytical Thinking", "Problem Solving"],
      projects: [
        "Mathematical Research Projects",
        "Science Laboratory Experiments",
        "Academic Presentations"
      ],
      impact: {
        foundation: "Strong",
        preparation: "Excellent",
        skills: "Comprehensive"
      }
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline gradient-text">
              Professional Journey
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            From Morocco to international AI projects - a timeline of growth, innovation, and measurable impact. 
            Click on any experience to explore detailed achievements and project outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences?.map((exp, index) => (
              <div key={exp?.id} className="relative">
                {/* Timeline Node */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-intelligent"></div>

                {/* Experience Card */}
                <div className="ml-16">
                  <div 
                    className={`bg-card rounded-2xl border transition-intelligent cursor-pointer interactive-lift ${
                      expandedCard === exp?.id 
                        ? 'border-primary shadow-intelligent-hover' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => toggleCard(exp?.id)}
                  >
                    {/* Card Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-cta">
                              {exp?.period}
                            </span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body">
                              {exp?.type}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-headline text-foreground mb-1">
                            {exp?.role}
                          </h3>
                          
                          <div className="flex items-center space-x-2 text-muted-foreground">
                            <Icon name="Building" size={16} />
                            <span className="font-cta text-sm">{exp?.company}</span>
                            <span className="text-xs">•</span>
                            <Icon name="MapPin" size={14} />
                            <span className="font-body text-sm">{exp?.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <Icon 
                            name={expandedCard === exp?.id ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            className="text-muted-foreground transition-intelligent"
                          />
                        </div>
                      </div>

                      <p className="text-muted-foreground font-body leading-relaxed">
                        {exp?.description}
                      </p>

                      {/* Quick Impact Metrics */}
                      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border">
                        {Object.entries(exp?.impact)?.map(([key, value], index) => (
                          <div key={index} className="text-center">
                            <div className="text-lg font-headline text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground font-body capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {expandedCard === exp?.id && (
                      <div className="border-t border-border p-6 space-y-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-cta text-sm text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Trophy" size={16} />
                            <span>Key Achievements</span>
                          </h4>
                          <ul className="space-y-2">
                            {exp?.achievements?.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground font-body">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-cta text-sm text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Code" size={16} />
                            <span>Technologies Used</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp?.technologies?.map((tech, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-body"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notable Projects */}
                        <div>
                          <h4 className="font-cta text-sm text-foreground mb-3 flex items-center space-x-2">
                            <Icon name="Briefcase" size={16} />
                            <span>Notable Projects</span>
                          </h4>
                          <div className="grid gap-2">
                            {exp?.projects?.map((project, index) => (
                              <div key={index} className="flex items-center space-x-3 p-2 bg-muted/50 rounded-lg">
                                <Icon name="Folder" size={14} className="text-primary" />
                                <span className="text-sm font-body text-foreground">{project}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 pt-12 border-t border-border">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <Icon name="Rocket" size={16} color="white" />
              </div>
              <h3 className="text-xl font-headline text-foreground">
                Ready for the Next Challenge
              </h3>
            </div>
            
            <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
              With 5+ years of progressive experience in AI and machine learning, I'm excited to tackle 
              complex challenges and drive innovation in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/experience-timeline">
                <Button
                  variant="default"
                  iconName="FileText"
                  iconPosition="left"
                  className="font-cta interactive-lift"
                >
                  Detailed Experience
                </Button>
              </Link>
              
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;