import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsMatrixVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const skillCategories = [
    {
      category: "Programming Languages", 
      icon: "Code",
      color: "primary",
      skills: [
        { name: "Python", level: 95, certified: true, lastUpdated: "2025-04-20" },
        { name: "Java", level: 88, certified: true, lastUpdated: "2025-03-15" },
        { name: "JavaScript", level: 85, certified: false, lastUpdated: "2025-02-10" },
        { name: "PHP", level: 80, certified: false, lastUpdated: "2025-01-25" },
        { name: "Scala", level: 75, certified: false, lastUpdated: "2024-12-05" }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      color: "secondary", 
      skills: [
        { name: "Machine Learning", level: 95, certified: true, lastUpdated: "2025-04-15" },
        { name: "Deep Learning", level: 92, certified: true, lastUpdated: "2025-04-10" },
        { name: "NLP", level: 90, certified: true, lastUpdated: "2025-04-22" },
        { name: "GANs", level: 88, certified: true, lastUpdated: "2025-03-20" },
        { name: "Predictive Models", level: 87, certified: true, lastUpdated: "2025-03-05" },
        { name: "LLMs", level: 85, certified: true, lastUpdated: "2025-04-01" },
        { name: "RAG", level: 82, certified: false, lastUpdated: "2025-03-15" }
      ]
    },
    {
      category: "Computer Vision",
      icon: "Eye",
      color: "accent",
      skills: [
        { name: "OpenCV", level: 90, certified: true, lastUpdated: "2025-04-18" },
        { name: "3D CNN", level: 88, certified: true, lastUpdated: "2025-04-12" },
        { name: "YOLOv8", level: 92, certified: true, lastUpdated: "2025-03-08" },
        { name: "Pillow", level: 85, certified: false, lastUpdated: "2025-02-28" }
      ]
    },
    {
      category: "Web Technologies",
      icon: "Globe",
      color: "success",
      skills: [
        { name: "HTML", level: 92, certified: false, lastUpdated: "2025-04-05" },
        { name: "CSS", level: 90, certified: false, lastUpdated: "2025-04-14" },
        { name: "React", level: 88, certified: false, lastUpdated: "2025-03-12" },
        { name: "FastAPI", level: 87, certified: true, lastUpdated: "2025-02-15" },
        { name: "REST APIs", level: 85, certified: true, lastUpdated: "2025-04-08" }
      ]
    },
    {
      category: "Database Management",
      icon: "Database",
      color: "warning",
      skills: [
        { name: "SQL", level: 90, certified: true, lastUpdated: "2025-04-20" },
        { name: "PostgreSQL", level: 88, certified: false, lastUpdated: "2025-03-25" },
        { name: "MongoDB", level: 85, certified: true, lastUpdated: "2025-04-16" },
        { name: "Redis", level: 80, certified: false, lastUpdated: "2025-04-19" },
        { name: "Cassandra", level: 75, certified: false, lastUpdated: "2025-03-30" },
        { name: "Neo4j", level: 78, certified: false, lastUpdated: "2025-02-10" }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: "Settings",
      color: "info",
      skills: [
        { name: "Docker", level: 85, certified: true, lastUpdated: "2025-04-10" },
        { name: "Kubernetes", level: 80, certified: true, lastUpdated: "2025-04-12" },
        { name: "Jenkins", level: 78, certified: false, lastUpdated: "2025-04-08" },
        { name: "GitLab CI", level: 75, certified: false, lastUpdated: "2025-04-05" },
        { name: "Terraform", level: 72, certified: false, lastUpdated: "2025-04-02" },
        { name: "CloudFormation", level: 70, certified: false, lastUpdated: "2025-03-25" }
      ]
    },
    {
      category: "Languages",
      icon: "MessageCircle",
      color: "violet",
      skills: [
        { name: "Arabic", level: 100, certified: false, lastUpdated: "Native" },
        { name: "French", level: 95, certified: true, lastUpdated: "Fluent" },
        { name: "English", level: 90, certified: true, lastUpdated: "Advanced" }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 7);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        light: 'bg-primary/10'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        light: 'bg-secondary/10'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        light: 'bg-accent/10'
      },
      success: {
        bg: 'bg-success',
        text: 'text-success',
        border: 'border-success',
        light: 'bg-success/10'
      },
      warning: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
        light: 'bg-orange-500/10'
      },
      info: {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
        light: 'bg-blue-500/10'
      },
      danger: {
        bg: 'bg-red-500',
        text: 'text-red-500',
        border: 'border-red-500',
        light: 'bg-red-500/10'
      },
      violet: {
        bg: 'bg-violet-500',
        text: 'text-violet-500',
        border: 'border-violet-500',
        light: 'bg-violet-500/10'
      }
    };
    return colorMap?.[color];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Icon name="Target" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline gradient-text">
              Skills Matrix Visualization
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Real-time competency mapping with certification tracking and continuous learning updates. 
            Hover over skills to see detailed proficiency metrics and recent achievements.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {skillCategories?.map((category, categoryIndex) => {
            const colors = getColorClasses(category?.color);
            const isActive = animationPhase === categoryIndex;
            
            return (
              <div
                key={category?.category}
                className={`bg-card rounded-2xl border transition-intelligent shadow-intelligent ${
                  isActive ? `${colors?.border} shadow-intelligent-hover` : 'border-border'
                }`}
              >
                {/* Category Header */}
                <div className={`p-6 border-b border-border ${isActive ? colors?.light : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${colors?.bg} rounded-lg flex items-center justify-center`}>
                      <Icon name={category?.icon} size={20} color="white" />
                    </div>
                    <h3 className="font-headline text-lg text-foreground">
                      {category?.category}
                    </h3>
                  </div>
                  
                  {/* Category Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className={`text-xl font-headline ${colors?.text}`}>
                        {Math.round(category?.skills?.reduce((acc, skill) => acc + skill?.level, 0) / category?.skills?.length)}%
                      </div>
                      <div className="text-xs text-muted-foreground font-body">Avg. Proficiency</div>
                    </div>
                    <div>
                      <div className={`text-xl font-headline ${colors?.text}`}>
                        {category?.skills?.filter(skill => skill?.certified)?.length}
                      </div>
                      <div className="text-xs text-muted-foreground font-body">Certifications</div>
                    </div>
                  </div>
                </div>
                {/* Skills List */}
                <div className="p-6 space-y-4">
                  {category?.skills?.map((skill, skillIndex) => (
                    <div
                      key={skill?.name}
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-cta text-sm text-foreground">{skill?.name}</span>
                          {skill?.certified && (
                            <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                              <Icon name="Check" size={10} color="white" />
                            </div>
                          )}
                        </div>
                        <span className={`text-sm font-headline ${colors?.text}`}>
                          {skill?.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${colors?.bg} transition-all duration-1000 ease-out ${
                            isActive ? 'animate-pulse' : ''
                          }`}
                          style={{
                            width: `${skill?.level}%`,
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        ></div>
                      </div>
                      
                      {/* Hover Tooltip */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div className="absolute z-10 bottom-full left-0 mb-2 p-3 bg-popover border border-border rounded-lg shadow-intelligent-hover min-w-48">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-cta text-sm text-popover-foreground">{skill?.name}</span>
                              <span className={`text-sm font-headline ${colors?.text}`}>{skill?.level}%</span>
                            </div>
                            <div className="text-xs text-muted-foreground font-body">
                              Last updated: {formatDate(skill?.lastUpdated)}
                            </div>
                            {skill?.certified && (
                              <div className="flex items-center space-x-1">
                                <Icon name="Award" size={12} color="var(--color-success)" />
                                <span className="text-xs text-success font-cta">Certified</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div className="bg-card rounded-2xl border border-border p-8 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-headline text-primary mb-2">20+</div>
              <div className="text-sm text-muted-foreground font-body">Core Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-headline text-secondary mb-2">8</div>
              <div className="text-sm text-muted-foreground font-body">Active Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-headline text-accent mb-2">87%</div>
              <div className="text-sm text-muted-foreground font-body">Average Proficiency</div>
            </div>
            <div>
              <div className="text-3xl font-headline text-success mb-2">2024</div>
              <div className="text-sm text-muted-foreground font-body">Last Updated</div>
            </div>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="TrendingUp" size={16} color="white" />
            </div>
            <h3 className="text-xl font-headline text-foreground">
              Continuous Learning Journey
            </h3>
          </div>
          
          <p className="text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
            Skills are continuously updated through hands-on projects, certifications, and industry best practices. 
            The matrix reflects real-world proficiency gained through practical application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/skill-matrix-visualization">
              <Button
                variant="default"
                iconName="BarChart3"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                Detailed Skills Analysis
              </Button>
            </Link>
            
            <Link to="/experience-timeline">
              <Button
                variant="outline"
                iconName="Clock"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                View Learning Timeline
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrixVisualization;