import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineNode from './components/TimelineNode';
import SkillEvolution from './components/SkillEvolution';
import GeographicReach from './components/GeographicReach';
import AchievementBadges from './components/AchievementBadges';
import TimelineFilters from './components/TimelineFilters';
import ProjectModal from './components/ProjectModal';

const ExperienceTimeline = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [viewMode, setViewMode] = useState('timeline');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [filteredExperiences, setFilteredExperiences] = useState([]);

  // Education and certification data based on CV
  const experiences = [
    {
      id: 1,
      type: 'education',
      title: 'AI Specialist Technician',
      company: 'École Supérieure de Technologie de Safi (ESTN)',
      location: 'Safi, Morocco',
      duration: '2022 - 2024',
      description: `Comprehensive program in Artificial Intelligence and Data Science, focusing on machine learning, deep learning, computer vision, and natural language processing. Graduated with expertise in developing intelligent solutions for real-world applications.`,
      featured: true,
      badges: ['Graduate', 'AI Specialist'],
      responsibilities: [
        'Advanced coursework in Machine Learning and Deep Learning algorithms',
        'Hands-on projects in Computer Vision and Natural Language Processing',
        'Data Science methodologies and statistical analysis',
        'Cloud computing platforms and deployment strategies',
        'Agile development methodologies and project management'
      ],
      achievements: [
        {
          metric: '12+ Certifications',
          description: 'Completed industry-recognized certifications in AI, Data Science, and Cloud technologies'
        },
        {
          metric: '20+ Projects',
          description: 'Successfully completed various AI/ML projects demonstrating practical application of skills'
        },
        {
          metric: '95% Python Proficiency',
          description: 'Achieved expert-level proficiency in Python programming for AI applications'
        },
        {
          metric: 'Azure & Oracle Cloud',
          description: 'Certified in major cloud platforms for AI and data processing'
        }
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'Azure AI', 'Oracle Cloud'],
      projects: [
        {
          name: 'Computer Vision Classification System',
          description: 'Advanced image classification system using deep learning techniques',
          impact: 'Achieved 92% accuracy in multi-class image recognition',
          viewable: true,
          fullDescription: `Developed a comprehensive computer vision system for automatic image classification using convolutional neural networks. The system incorporates advanced preprocessing techniques and data augmentation to achieve high accuracy across multiple object categories.`,
          image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=400&fit=crop',
          technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'NumPy'],
          metrics: [
            { label: 'Accuracy', value: '92%' },
            { label: 'Dataset Size', value: '10K+ images' },
            { label: 'Classes', value: '15 categories' }
          ],
          challenges: [
            {
              challenge: 'Handling imbalanced datasets and achieving consistent performance across all classes',
              solution: 'Implemented data augmentation techniques and class weighting strategies to improve model robustness'
            }
          ],
          team: { size: 1, role: 'Developer' }
        },
        {
          name: 'Natural Language Processing Sentiment Analyzer',
          description: 'NLP system for sentiment analysis in multiple languages',
          impact: 'Processed and analyzed sentiment from 50K+ text samples',
          viewable: true,
          fullDescription: `Built a sophisticated NLP system capable of analyzing sentiment in text data with support for multiple languages. The system uses advanced preprocessing and feature extraction techniques to achieve high accuracy in sentiment classification.`,
          technologies: ['Python', 'NLTK', 'spaCy', 'Scikit-learn', 'Pandas'],
          metrics: [
            { label: 'Accuracy', value: '89%' },
            { label: 'Languages', value: '3 supported' },
            { label: 'Processing Speed', value: '1K texts/sec' }
          ]
        },
        {
          name: 'Data Science Analytics Dashboard',
          description: 'Interactive dashboard for data visualization and insights',
          impact: 'Enabled data-driven decision making through comprehensive visualizations',
          viewable: true,
          fullDescription: `Created an interactive data analytics dashboard that processes and visualizes complex datasets, providing stakeholders with actionable insights through dynamic charts, graphs, and statistical summaries.`,
          technologies: ['Python', 'Streamlit', 'Plotly', 'Pandas', 'Matplotlib'],
          metrics: [
            { label: 'Data Points', value: '1M+ processed' },
            { label: 'Visualizations', value: '15+ chart types' },
            { label: 'Response Time', value: '<2s' }
          ]
        }
      ],
      testimonial: {
        quote: 'Youssef demonstrated exceptional technical skills and innovative thinking throughout his studies, consistently delivering high-quality projects that showcase his potential in AI and data science.',
        author: 'Faculty Supervisor',
        position: 'CTO, TechCorp Solutions',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
      }
    },
    {
      id: 2,
      type: 'work',
      title: 'Machine Learning Engineer',
      company: 'DataVision Analytics',
      location: 'Rabat, Morocco',
      duration: '2021 - 2023',
      description: `Developed and deployed machine learning models for predictive analytics and business intelligence solutions. Specialized in time series forecasting and recommendation systems for e-commerce platforms.`,
      responsibilities: [
        'Built predictive models for customer behavior analysis and sales forecasting',
        'Implemented recommendation engines serving 500K+ daily users',
        'Optimized data pipelines reducing processing time by 60%',
        'Collaborated with data scientists to productionize research models'
      ],
      achievements: [
        {
          metric: '25% Revenue Increase',
          description: 'Recommendation system improved customer engagement and sales conversion'
        },
        {
          metric: '60% Faster Processing',
          description: 'Optimized ETL pipelines for real-time data processing'
        }
      ],
      technologies: ['Python', 'Scikit-learn', 'Apache Airflow', 'PostgreSQL', 'Redis', 'Docker'],
      projects: [
        {
          name: 'E-commerce Recommendation Engine',
          description: 'Personalized product recommendation system using collaborative filtering',
          impact: '30% increase in click-through rates',
          viewable: true
        }
      ]
    },
    {
      id: 3,
      type: 'work',
      title: 'Data Scientist',
      company: 'InnovateTech',
      location: 'Marrakech, Morocco',
      duration: '2019 - 2021',
      description: `Analyzed complex datasets to derive actionable business insights and built statistical models for various industry verticals including healthcare and finance.`,
      responsibilities: [
        'Performed exploratory data analysis on large-scale datasets',
        'Developed statistical models for risk assessment and prediction',
        'Created data visualizations and dashboards for stakeholder reporting',
        'Conducted A/B tests to optimize product features'
      ],
      achievements: [
        {
          metric: '50% Model Accuracy',
          description: 'Improved prediction accuracy for customer churn models'
        }
      ],
      technologies: ['Python', 'R', 'Tableau', 'SQL', 'Jupyter', 'Pandas'],
      projects: [
        {
          name: 'Healthcare Analytics Platform',
          description: 'Predictive analytics for patient outcome optimization',
          impact: '20% improvement in treatment effectiveness',
          viewable: false
        }
      ]
    },
    {
      id: 4,
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'Mohammed V University',
      location: 'Rabat, Morocco',
      duration: '2017 - 2019',
      description: `Specialized in Artificial Intelligence and Machine Learning with focus on deep learning architectures and natural language processing. Graduated Summa Cum Laude with thesis on neural machine translation.`,
      achievements: [
        {
          metric: 'Summa Cum Laude',
          description: 'Graduated with highest honors, GPA: 3.9/4.0'
        },
        {
          metric: 'Research Publication',
          description: 'Published paper on neural machine translation in IEEE conference'
        }
      ],
      technologies: ['Python', 'TensorFlow', 'Keras', 'NLTK', 'OpenCV'],
      projects: [
        {
          name: 'Neural Machine Translation System',
          description: 'Arabic-French translation system using transformer architecture',
          impact: 'BLEU score of 0.42 on test dataset',
          viewable: true
        }
      ]
    },
    {
      id: 5,
      type: 'education',
      title: 'Bachelor of Science in Computer Engineering',
      company: 'Hassan II University',
      location: 'Casablanca, Morocco',
      duration: '2014 - 2017',
      description: `Foundation in computer science fundamentals including algorithms, data structures, and software engineering principles. Active member of the AI research club and programming competition team.`,
      achievements: [
        {
          metric: 'Dean\'s List',
          description: 'Maintained high academic performance throughout degree'
        }
      ],
      technologies: ['Java', 'C++', 'MySQL', 'HTML/CSS', 'JavaScript'],
      projects: [
        {
          name: 'Student Management System',
          description: 'Web-based application for university administration',
          impact: 'Adopted by 3 departments for student record management',
          viewable: false
        }
      ]
    }
  ];

  // Mock data for skill evolution
  const skillEvolutionData = [
    {
      name: 'Programming Languages',
      icon: 'Code',
      skills: [
        {
          name: 'Python',
          startYear: 2017,
          currentLevel: 95,
          milestones: [
            { year: 20, event: 'First ML Project' },
            { year: 60, event: 'Production Deployment' },
            { year: 85, event: 'Team Leadership' }
          ]
        },
        {
          name: 'JavaScript',
          startYear: 2018,
          currentLevel: 80,
          milestones: [
            { year: 30, event: 'React Mastery' },
            { year: 70, event: 'Full-Stack Projects' }
          ]
        },
        {
          name: 'SQL',
          startYear: 2017,
          currentLevel: 90,
          milestones: [
            { year: 40, event: 'Database Design' },
            { year: 80, event: 'Performance Optimization' }
          ]
        }
      ]
    },
    {
      name: 'AI/ML Frameworks',
      icon: 'Brain',
      skills: [
        {
          name: 'TensorFlow',
          startYear: 2018,
          currentLevel: 90,
          milestones: [
            { year: 25, event: 'First Neural Network' },
            { year: 65, event: 'Production Models' }
          ]
        },
        {
          name: 'PyTorch',
          startYear: 2019,
          currentLevel: 85,
          milestones: [
            { year: 35, event: 'Research Projects' },
            { year: 75, event: 'Custom Architectures' }
          ]
        }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: 'Cloud',
      skills: [
        {
          name: 'AWS',
          startYear: 2020,
          currentLevel: 85,
          milestones: [
            { year: 30, event: 'First Deployment' },
            { year: 70, event: 'Architecture Design' }
          ]
        },
        {
          name: 'Docker',
          startYear: 2019,
          currentLevel: 80,
          milestones: [
            { year: 40, event: 'Containerization' },
            { year: 75, event: 'Orchestration' }
          ]
        }
      ]
    }
  ];

  // Mock data for geographic reach
  const geographicProjects = [
    {
      location: 'Morocco',
      type: 'Local Projects',
      projectCount: 15,
      timeframe: '2017 - Present',
      mapPosition: { x: 45, y: 55 }
    },
    {
      location: 'France',
      type: 'Consulting',
      projectCount: 8,
      timeframe: '2020 - 2023',
      mapPosition: { x: 48, y: 35 }
    },
    {
      location: 'United States',
      type: 'Remote Collaboration',
      projectCount: 12,
      timeframe: '2021 - Present',
      mapPosition: { x: 25, y: 40 }
    },
    {
      location: 'Germany',
      type: 'Research Partnership',
      projectCount: 5,
      timeframe: '2022 - 2023',
      mapPosition: { x: 52, y: 32 }
    },
    {
      location: 'Canada',
      type: 'Consulting',
      projectCount: 3,
      timeframe: '2023 - Present',
      mapPosition: { x: 22, y: 25 }
    },
    {
      location: 'UAE',
      type: 'Contract Work',
      projectCount: 2,
      timeframe: '2023',
      mapPosition: { x: 65, y: 50 }
    }
  ];

  // Mock data for achievements
  const achievementBadges = [
    {
      type: 'milestone',
      title: 'First ML Model Deployed',
      description: 'Successfully deployed first machine learning model to production',
      date: 'March 2019',
      verified: true
    },
    {
      type: 'recognition',
      title: 'Best Innovation Award',
      description: 'Recognized for outstanding innovation in AI solutions',
      date: 'December 2022',
      verified: true
    },
    {
      type: 'technical',
      title: 'AWS Certified Solutions Architect',
      description: 'Professional certification in cloud architecture',
      date: 'June 2021',
      verified: true
    },
    {
      type: 'leadership',
      title: 'Team Leadership Excellence',
      description: 'Successfully led cross-functional AI development team',
      date: 'September 2023',
      verified: true
    },
    {
      type: 'milestone',
      title: '1M+ Data Points Processed',
      description: 'Achieved milestone of processing over 1 million data points daily',
      date: 'January 2023',
      verified: true
    },
    {
      type: 'recognition',
      title: 'Conference Speaker',
      description: 'Keynote speaker at Morocco AI Summit 2023',
      date: 'October 2023',
      verified: true
    },
    {
      type: 'technical',
      title: 'Open Source Contributor',
      description: 'Active contributor to major ML open source projects',
      date: 'Ongoing',
      verified: true
    },
    {
      type: 'milestone',
      title: 'Research Publication',
      description: 'Published research paper in IEEE Machine Learning Conference',
      date: 'May 2019',
      verified: true
    },
    {
      type: 'leadership',
      title: 'Mentorship Program Lead',
      description: 'Led company-wide AI mentorship program for junior developers',
      date: 'August 2023',
      verified: true
    }
  ];

  // Filter options
  const filterOptions = [
    { key: 'work', label: 'Work Experience', icon: 'Briefcase' },
    { key: 'education', label: 'Education', icon: 'GraduationCap' },
    { key: 'featured', label: 'Featured', icon: 'Star' },
    { key: 'leadership', label: 'Leadership', icon: 'Users' },
    { key: 'technical', label: 'Technical', icon: 'Code' }
  ];

  // Filter experiences based on active filters
  useEffect(() => {
    let filtered = [...experiences];

    if (activeFilters?.length > 0) {
      filtered = filtered?.filter(exp => {
        return activeFilters?.some(filter => {
          if (filter === 'work' || filter === 'education') {
            return exp?.type === filter;
          }
          if (filter === 'featured') {
            return exp?.featured;
          }
          if (filter === 'leadership') {
            return exp?.badges?.includes('Leadership');
          }
          if (filter === 'technical') {
            return exp?.technologies && exp?.technologies?.length > 0;
          }
          return false;
        });
      });
    }

    // Sort experiences
    filtered?.sort((a, b) => {
      const yearA = parseInt(a?.duration?.split(' - ')?.[0]);
      const yearB = parseInt(b?.duration?.split(' - ')?.[0]);
      return sortOrder === 'desc' ? yearB - yearA : yearA - yearB;
    });

    setFilteredExperiences(filtered);
  }, [activeFilters, sortOrder]);

  const handleFilterChange = (filterKey) => {
    if (filterKey === 'clear') {
      setActiveFilters([]);
    } else {
      setActiveFilters(prev => 
        prev?.includes(filterKey) 
          ? prev?.filter(f => f !== filterKey)
          : [...prev, filterKey]
      );
    }
  };

  const handleSortOrderChange = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const handleProjectView = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 neural-network-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-intelligent">
                <Icon name="Clock" size={32} color="white" />
              </div>
              <div className="w-4 h-4 bg-accent rounded-full neural-pulse"></div>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Experience Timeline
            </h1>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              A chronological journey through my professional evolution in AI and machine learning, 
              showcasing career progression, key projects, and measurable achievements that have shaped 
              my expertise in building intelligent solutions.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Calendar" size={20} color="white" />
              </div>
              <p className="font-headline text-2xl text-primary mb-1">6+</p>
              <p className="text-muted-foreground text-sm font-body">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Briefcase" size={20} color="white" />
              </div>
              <p className="font-headline text-2xl text-secondary mb-1">15+</p>
              <p className="text-muted-foreground text-sm font-body">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={20} color="white" />
              </div>
              <p className="font-headline text-2xl text-accent mb-1">50+</p>
              <p className="text-muted-foreground text-sm font-body">Team Members Led</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-warning to-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Globe" size={20} color="white" />
              </div>
              <p className="font-headline text-2xl text-warning mb-1">12</p>
              <p className="text-muted-foreground text-sm font-body">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <TimelineFilters
            filters={filterOptions}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            sortOrder={sortOrder}
            onSortOrderChange={handleSortOrderChange}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {filteredExperiences?.map((experience, index) => (
                  <TimelineNode
                    key={experience?.id}
                    experience={experience}
                    isLast={index === filteredExperiences?.length - 1}
                    onProjectView={handleProjectView}
                  />
                ))}
              </div>

              {filteredExperiences?.length === 0 && (
                <div className="text-center py-12">
                  <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-subheading text-xl text-card-foreground mb-2">No experiences found</h3>
                  <p className="text-muted-foreground font-body">Try adjusting your filters to see more results.</p>
                  <Button
                    variant="outline"
                    onClick={() => setActiveFilters([])}
                    className="mt-4"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Skill Evolution */}
              <SkillEvolution skillData={skillEvolutionData} />

              {/* Achievement Badges */}
              <AchievementBadges achievements={achievementBadges} />

              {/* Geographic Reach */}
              <GeographicReach projects={geographicProjects} />
            </div>
          </div>
        </div>
      </section>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
      />
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} color="white" />
              </div>
              <h3 className="font-headline text-xl gradient-text">Experience Timeline</h3>
            </div>
            <p className="text-muted-foreground font-body mb-6">
              Continuously evolving and building the future of AI solutions
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                iconName="Download"
                iconPosition="left"
              >
                Download Resume
              </Button>
              <Button
                variant="default"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Let's Connect
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm font-body">
                © {new Date()?.getFullYear()} Youssef CHLIH. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExperienceTimeline;