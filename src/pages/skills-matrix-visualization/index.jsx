import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { useI18n } from '../../utils/i18n.jsx';

const SkillsMatrixVisualization = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { t } = useI18n();

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: "Code",
      color: "primary",
      description: "Multi-language programming expertise",
      skills: [
        { name: "Python", level: 95, certified: true, lastUpdated: "2025-06-01", projects: 25, certImage: "/assets/images/certificates/Python programmer Bootcamp.png" },
        { name: "Java", level: 85, certified: false, lastUpdated: "2025-05-15", projects: 12 },
        { name: "JavaScript", level: 80, certified: false, lastUpdated: "2025-05-20", projects: 15 },
        { name: "PHP", level: 75, certified: false, lastUpdated: "2025-04-10", projects: 8 },
        { name: "Scala", level: 70, certified: false, lastUpdated: "2025-03-25", projects: 5 }
      ]
    },
    {
      category: "AI & Machine Learning",
      icon: "Brain",
      color: "secondary",
      description: "Advanced AI and ML technologies",
      skills: [
        { name: "Machine Learning", level: 92, certified: true, lastUpdated: "2025-06-01", projects: 20, certImage: "/assets/images/certificates/Machine learning in Production.png" },
        { name: "Deep Learning", level: 90, certified: true, lastUpdated: "2025-05-30", projects: 18, certImage: "/assets/images/certificates/The Machine Learning Process A-Z.png" },
        { name: "Natural Language Processing", level: 88, certified: true, lastUpdated: "2025-05-25", projects: 12, certImage: "/assets/images/certificates/Intro to NLP for AI.png" },
        { name: "GANs (Generative Adversarial Networks)", level: 85, certified: false, lastUpdated: "2025-04-15", projects: 6 },
        { name: "Predictive Models", level: 87, certified: false, lastUpdated: "2025-05-10", projects: 14 },
        { name: "Large Language Models (LLMs)", level: 82, certified: false, lastUpdated: "2025-05-05", projects: 8 },
        { name: "RAG (Retrieval Augmented Generation)", level: 80, certified: false, lastUpdated: "2025-04-20", projects: 5 }
      ]
    },
    {
      category: "Computer Vision",
      icon: "Eye",
      color: "accent",
      description: "Advanced computer vision and image processing",
      skills: [
        { name: "OpenCV", level: 90, certified: false, lastUpdated: "2025-06-01", projects: 15 },
        { name: "YOLOv8", level: 88, certified: false, lastUpdated: "2025-05-20", projects: 8 },
        { name: "3D CNN", level: 85, certified: false, lastUpdated: "2025-06-01", projects: 5 },
        { name: "DGCNN (Dynamic Graph CNN)", level: 92, certified: false, lastUpdated: "2025-06-01", projects: 3 },
        { name: "Pillow", level: 80, certified: false, lastUpdated: "2025-04-15", projects: 12 },
        { name: "CNN-BiLSTM", level: 85, certified: false, lastUpdated: "2025-04-25", projects: 4 }
      ]
    },
    {
      category: "Database Management",
      icon: "Database",
      color: "success",
      description: "SQL and NoSQL database technologies",
      skills: [
        { name: "SQL", level: 88, certified: false, lastUpdated: "2025-05-15", projects: 18 },
        { name: "PostgreSQL", level: 85, certified: false, lastUpdated: "2025-05-10", projects: 12 },
        { name: "MongoDB", level: 82, certified: false, lastUpdated: "2025-04-20", projects: 10 },
        { name: "Redis", level: 78, certified: false, lastUpdated: "2025-04-15", projects: 8 },
        { name: "Cassandra", level: 75, certified: false, lastUpdated: "2025-03-30", projects: 5 },
        { name: "Neo4j", level: 80, certified: false, lastUpdated: "2025-04-05", projects: 6 }
      ]
    },
    {
      category: "Web Technologies",
      icon: "Globe",
      color: "warning",
      description: "Modern web development stack",
      skills: [
        { name: "HTML", level: 90, certified: false, lastUpdated: "2025-05-25", projects: 20 },
        { name: "CSS", level: 88, certified: false, lastUpdated: "2025-05-25", projects: 20 },
        { name: "React", level: 85, certified: false, lastUpdated: "2025-05-20", projects: 12 },
        { name: "FastAPI", level: 87, certified: false, lastUpdated: "2025-05-15", projects: 10 },
        { name: "REST APIs", level: 85, certified: false, lastUpdated: "2025-05-10", projects: 15 }
      ]
    },
    {
      category: "DevOps & Infrastructure",
      icon: "Server",
      color: "info",
      description: "Modern DevOps and cloud infrastructure",
      skills: [
        { name: "CI/CD (Jenkins)", level: 80, certified: false, lastUpdated: "2025-04-30", projects: 8 },
        { name: "GitLab CI", level: 78, certified: false, lastUpdated: "2025-04-25", projects: 6 },
        { name: "Docker", level: 82, certified: false, lastUpdated: "2025-05-05", projects: 10 },
        { name: "Kubernetes", level: 75, certified: false, lastUpdated: "2025-04-20", projects: 5 },
        { name: "Terraform", level: 72, certified: false, lastUpdated: "2025-04-10", projects: 4 },
        { name: "CloudFormation", level: 70, certified: false, lastUpdated: "2025-04-05", projects: 3 }
      ]
    },
    {
      category: "Cloud Platforms",
      icon: "Cloud",
      color: "primary",
      description: "Cloud computing and AI services",
      skills: [
        { name: "Oracle Cloud Infrastructure", level: 88, certified: true, lastUpdated: "2025-06-01", projects: 8, certImage: "/assets/images/certificates/Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate.png" },
        { name: "Oracle Generative AI", level: 85, certified: true, lastUpdated: "2025-06-01", projects: 5 }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary',
        text: 'text-primary',
        border: 'border-primary',
        light: 'bg-primary/10',
        gradient: 'from-primary to-primary/80'
      },
      secondary: {
        bg: 'bg-secondary',
        text: 'text-secondary',
        border: 'border-secondary',
        light: 'bg-secondary/10',
        gradient: 'from-secondary to-secondary/80'
      },
      accent: {
        bg: 'bg-accent',
        text: 'text-accent',
        border: 'border-accent',
        light: 'bg-accent/10',
        gradient: 'from-accent to-accent/80'
      },
      success: {
        bg: 'bg-success',
        text: 'text-success',
        border: 'border-success',
        light: 'bg-success/10',
        gradient: 'from-success to-success/80'
      },
      // Added missing categories used by some skill groups
      warning: {
        bg: 'bg-warning',
        text: 'text-warning',
        border: 'border-warning',
        light: 'bg-warning/10',
        gradient: 'from-warning to-warning/80'
      },
      info: {
        bg: 'bg-info',
        text: 'text-info',
        border: 'border-info',
        light: 'bg-info/10',
        gradient: 'from-info to-info/80'
      }
    };
    // Fallback to primary if an unknown color key is supplied to avoid runtime errors
    return colorMap[color] || colorMap.primary;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  const certifiedSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.filter(s => s.certified).length, 0);
  const avgProficiency = Math.round(
    skillCategories.reduce((acc, cat) => 
      acc + cat.skills.reduce((catAcc, skill) => catAcc + skill.level, 0), 0
    ) / totalSkills
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
  <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/30 to-background animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <Icon name="Target" size={24} color="white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-headline gradient-text">
                {t('skillsPage.title')}
              </h1>
            </div>
            <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
              {t('skillsPage.subtitle')}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-4 border border-border interactive-tilt">
                <div className="text-2xl font-headline text-primary mb-1">{totalSkills}</div>
                <div className="text-sm text-muted-foreground font-body">{t('skillsPage.quickStats.totalSkills')}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border interactive-tilt">
                <div className="text-2xl font-headline text-secondary mb-1">{certifiedSkills}</div>
                <div className="text-sm text-muted-foreground font-body">{t('skillsPage.quickStats.certifications')}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border interactive-tilt">
                <div className="text-2xl font-headline text-accent mb-1">{avgProficiency}%</div>
                <div className="text-sm text-muted-foreground font-body">{t('skillsPage.quickStats.avgProficiency')}</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border interactive-tilt">
                <div className="text-2xl font-headline text-success mb-1">2025</div>
                <div className="text-sm text-muted-foreground font-body">{t('skillsPage.quickStats.lastUpdated')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
      <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-lg font-cta transition-intelligent ${
                selectedCategory === null
                  ? 'bg-primary text-primary-foreground shadow-intelligent'
          : 'bg-card text-foreground hover:bg-muted border border-border hover-glow'
              }`}
            >
        {t('skillsPage.allCategories')}
            </button>
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <button
                  key={category.category}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-6 py-3 rounded-lg font-cta transition-intelligent flex items-center space-x-2 hover-glow ${
                    selectedCategory === index
                      ? `${colors.bg} text-white shadow-intelligent`
                      : 'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <Icon name={category.icon} size={16} />
                  <span>{category.category}</span>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories
              .filter((_, index) => selectedCategory === null || selectedCategory === index)
              .map((category, categoryIndex) => {
                const colors = getColorClasses(category.color);
                const isActive = animationPhase === categoryIndex;
                
                return (
                  <div
                    key={category.category}
                    className={`bg-card rounded-2xl border transition-intelligent shadow-intelligent hover:shadow-intelligent-hover ${
                      isActive ? `${colors.border} shadow-intelligent-hover` : 'border-border'
                    }`}
                  >
                    {/* Category Header */}
                    <div className={`p-6 border-b border-border ${isActive ? colors.light : ''}`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center`}>
                          <Icon name={category.icon} size={24} color="white" />
                        </div>
                        <div>
                          <h3 className="font-headline text-xl text-foreground">
                            {category.category}
                          </h3>
                          <p className="text-sm text-muted-foreground font-body">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Category Stats */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className={`text-xl font-headline ${colors.text}`}>
                            {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                          </div>
                          <div className="text-xs text-muted-foreground font-body">Avg. Proficiency</div>
                        </div>
                        <div>
                          <div className={`text-xl font-headline ${colors.text}`}>
                            {category.skills.filter(skill => skill.certified).length}
                          </div>
                          <div className="text-xs text-muted-foreground font-body">Certifications</div>
                        </div>
                        <div>
                          <div className={`text-xl font-headline ${colors.text}`}>
                            {category.skills.reduce((acc, skill) => acc + skill.projects, 0)}
                          </div>
                          <div className="text-xs text-muted-foreground font-body">Projects</div>
                        </div>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="p-6 space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skill.name}
                          className="relative"
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="font-cta text-sm text-foreground">{skill.name}</span>
                              {skill.certified && (
                                <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center">
                                  <Icon name="Check" size={10} color="white" />
                                </div>
                              )}
                            </div>
                            <span className={`text-sm font-headline ${colors.text}`}>
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${colors.gradient} transition-all duration-1000 ease-out ${
                                isActive ? 'animate-pulse' : ''
                              }`}
                              style={{
                                width: `${skill.level}%`,
                                transitionDelay: `${skillIndex * 100}ms`
                              }}
                            ></div>
                          </div>
                          
                          {/* Hover Tooltip */}
                          {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                            <div className="absolute z-10 bottom-full left-0 mb-2 p-4 bg-popover border border-border rounded-lg shadow-intelligent-hover min-w-64">
                              <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                  <span className="font-cta text-base text-popover-foreground">{skill.name}</span>
                                  <span className={`text-lg font-headline ${colors.text}`}>{skill.level}%</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground font-body">
                                  <div>
                                    <span className="block">Last updated:</span>
                                    <span className="text-foreground">{formatDate(skill.lastUpdated)}</span>
                                  </div>
                                  <div>
                                    <span className="block">Projects:</span>
                                    <span className="text-foreground">{skill.projects}</span>
                                  </div>
                                </div>
                                {skill.certified && (
                                  <div className="space-y-2 pt-2 border-t border-border">
                                    <div className="flex items-center space-x-2">
                                      <Icon name="Award" size={14} color="var(--color-success)" />
                                      <span className="text-xs text-success font-cta">Certified Professional</span>
                                    </div>
                                    {skill.certImage && (
                                      <div className="mt-2">
                                        <img 
                                          src={skill.certImage} 
                                          alt={`${skill.name} Certificate`}
                                          className="w-full h-20 object-cover rounded border border-border"
                                        />
                                      </div>
                                    )}
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
        </div>
      </section>

      {/* Certifications Showcase */}
  <section className="py-20 bg-background animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <Icon name="Award" size={20} color="white" />
              </div>
              <h2 className="text-3xl font-headline text-foreground">
                {t('skillsPage.certsTitle')}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-3xl mx-auto">
              {t('skillsPage.certsSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.flatMap(category => 
              category.skills.filter(skill => skill.certified && skill.certImage)
            ).map((skill, index) => (
              <div key={index} className="group bg-card rounded-xl p-6 border border-border shadow-intelligent hover:shadow-intelligent-hover transition-all duration-300 interactive-lift">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg border border-border">
                  <img 
                    src={skill.certImage} 
                    alt={`${skill.name} Certification`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-cta text-lg text-foreground line-clamp-2">{skill.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-headline">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{skill.projects} projects</span>
                    <span>{formatDate(skill.lastUpdated)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Journey */}
  <section className="py-20 bg-muted/30 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="white" />
              </div>
              <h2 className="text-3xl font-headline text-foreground">
                {t('skillsPage.learningTitle')}
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground font-body mb-8 max-w-3xl mx-auto">
              {t('skillsPage.learningSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-project-showcase">
                <Button
                  variant="default"
                  iconName="Briefcase"
                  iconPosition="left"
                  className="font-cta interactive-lift"
                >
                  {t('skillsPage.buttons.viewProjects')}
                </Button>
              </Link>
              
              <Link to="/certifications-gallery">
                <Button
                  variant="default"
                  iconName="Award"
                  iconPosition="left"
                  className="font-cta interactive-lift"
                >
                  {t('skillsPage.buttons.viewCerts')}
                </Button>
              </Link>
              
              <Link to="/experience-timeline">
                <Button
                  variant="outline"
                  iconName="Clock"
                  iconPosition="left"
                  className="font-cta interactive-lift"
                >
                  {t('skillsPage.buttons.experienceTimeline')}
                </Button>
              </Link>

              <Link to="/professional-identity-hub">
                <Button
                  variant="outline"
                  iconName="User"
                  iconPosition="left"
                  className="font-cta interactive-lift"
                >
                  {t('skillsPage.buttons.aboutMe')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsMatrixVisualization;
