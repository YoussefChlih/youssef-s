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

  // Real experiences based on Youssef's CV
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: '3D Smart Factory - AI Developer Intern',
      company: '3D Smart Factory',
      location: 'Mohammedia, Morocco',
      duration: 'Feb 2025 – Jun 2025',
      description: `Developed a comprehensive 3D object classification system using advanced machine learning techniques. Implemented DGCNN (Dynamic Graph Convolutional Neural Network) model with ModelNet10 dataset for accurate 3D shape recognition.`,
      featured: true,
      badges: ['Current', 'AI Development'],
      responsibilities: [
        'Developed comprehensive 3D object classification system using advanced machine learning techniques',
        'Implemented DGCNN (Dynamic Graph Convolutional Neural Network) model with ModelNet10 dataset',
        'Created interactive Streamlit application interface for real-time 3D object classification',
        'Designed user-friendly visualization for 3D shape recognition results',
        'Optimized model performance for accurate 3D classification tasks'
      ],
      achievements: [
        {
          metric: 'DGCNN Implementation',
          description: 'Successfully implemented Dynamic Graph Convolutional Neural Network for 3D object classification'
        },
        {
          metric: 'ModelNet10 Integration',
          description: 'Integrated ModelNet10 dataset achieving high accuracy in 3D shape recognition'
        },
        {
          metric: 'Streamlit Interface',
          description: 'Created interactive web application for real-time 3D object classification'
        },
        {
          metric: 'Real-time Processing',
          description: 'Achieved real-time 3D object classification with user-friendly visualization'
        }
      ],
      technologies: ['Python', 'DGCNN', 'ModelNet10', 'Streamlit', 'TensorFlow', 'Computer Vision', '3D CNN'],
      projects: [
        {
          name: '3D Object Classification System',
          description: 'Advanced 3D object classification using DGCNN and ModelNet10 dataset',
          impact: 'Real-time 3D shape recognition with interactive visualization',
          viewable: true,
          fullDescription: `Developed a state-of-the-art 3D object classification system using Dynamic Graph Convolutional Neural Networks (DGCNN) trained on the ModelNet10 dataset. The system provides accurate 3D shape recognition with an intuitive Streamlit interface for real-time classification and visualization.`,
          image: '/3D-SMART-FACTORY1.jpg',
          technologies: ['Python', 'DGCNN', 'ModelNet10', 'Streamlit', 'TensorFlow', '3D CNN'],
          metrics: [
            { label: 'Model Type', value: 'DGCNN' },
            { label: 'Dataset', value: 'ModelNet10' },
            { label: 'Interface', value: 'Streamlit' }
          ],
          challenges: [
            {
              challenge: 'Implementing complex 3D CNN architecture for accurate shape recognition',
              solution: 'Utilized DGCNN (Dynamic Graph Convolutional Neural Network) architecture optimized for 3D point cloud data'
            }
          ],
          team: { size: 1, role: 'AI Developer Intern' }
        }
      ],
      testimonial: {
        quote: 'Youssef demonstrated exceptional technical skills in 3D machine learning and delivered an innovative solution that exceeded our expectations for the internship program.',
        author: 'Internship Supervisor',
        role: 'Technical Lead',
        title: '3D Smart Factory'
      }
    },
    {
      id: 2,
      type: 'work',
      title: 'HardTech Maroc - AI Development Intern',
      company: 'HardTech Maroc',
      location: 'Casablanca, Morocco',
      duration: 'Aug 2024 – Sep 2024',
      description: `Designed and implemented an automated IT fault detection system utilizing Machine Learning algorithms. Conducted comprehensive data analysis and preprocessing to optimize model performance and accuracy.`,
      featured: true,
      badges: ['Completed', 'IT Systems'],
      responsibilities: [
        'Designed automated IT fault detection system using Machine Learning algorithms',
        'Conducted comprehensive data analysis and preprocessing for model optimization',
        'Developed predictive models to anticipate system failures',
        'Improved overall IT infrastructure reliability through AI-driven solutions',
        'Enhanced system performance through advanced fault detection techniques'
      ],
      achievements: [
        {
          metric: 'System Reliability',
          description: 'Enhanced IT system reliability through AI-driven fault detection techniques'
        },
        {
          metric: 'Predictive Analytics',
          description: 'Implemented predictive models to anticipate system failures and reduce downtime'
        },
        {
          metric: 'Performance Optimization',
          description: 'Developed algorithms to improve overall system maintenance and monitoring'
        }
      ],
      technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Models', 'IT Infrastructure'],
      projects: [
        {
          name: 'Automated IT Fault Detection System',
          description: 'ML-based system for automated IT fault detection and prediction',
          impact: 'Improved IT infrastructure reliability and reduced system downtime',
          viewable: true,
          fullDescription: `Designed and implemented an automated IT fault detection system using advanced Machine Learning algorithms. The system analyzes IT infrastructure data to predict potential failures and optimize system maintenance procedures.`,
          technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Predictive Analytics'],
          metrics: [
            { label: 'System Type', value: 'Fault Detection' },
            { label: 'Approach', value: 'Machine Learning' },
            { label: 'Impact', value: 'Reduced Downtime' }
          ]
        }
      ],
      testimonial: {
        quote: 'Youssef brought innovative AI solutions to our IT infrastructure challenges and demonstrated strong analytical skills throughout the internship.',
        author: 'Technical Manager',
        role: 'IT Department Head',
        title: 'HardTech Maroc'
      }
    },
    {
      id: 3,
      type: 'project',
      title: 'HireGenius - AI-Based Intelligent Recruitment System',
      company: 'Final Project',
      location: 'EST Nador',
      duration: 'April 2025',
      description: `Comprehensive AI-powered recruitment platform combining NLP for CV analysis, Computer Vision for facial expression analysis, and Voice Analysis using CNN-BiLSTM for emotion evaluation during interviews.`,
      featured: true,
      badges: ['Final Project', 'Full-Stack AI'],
      responsibilities: [
        'NLP Implementation: Developed comprehensive CV analysis system using Natural Language Processing',
        'Computer Vision: Implemented YOLOv8 algorithms for facial expression analysis during interviews',
        'Voice Analysis: Designed CNN-BiLSTM voice analysis system for candidate emotion evaluation',
        'Full-Stack Development: Created end-to-end recruitment platform with advanced AI capabilities',
        'System Integration: Integrated multiple AI technologies into cohesive recruitment solution'
      ],
      achievements: [
        {
          metric: 'Multi-Modal AI System',
          description: 'Successfully integrated NLP, Computer Vision, and Voice Analysis in single platform'
        },
        {
          metric: 'CV Ranking Algorithm',
          description: 'Developed intelligent CV ranking system based on relevance and qualifications'
        },
        {
          metric: 'Emotion Detection',
          description: 'Implemented real-time facial expression and voice emotion analysis'
        },
        {
          metric: 'End-to-End Platform',
          description: 'Created complete recruitment workflow from CV screening to interview analysis'
        }
      ],
      technologies: ['Python', 'NLP', 'YOLOv8', 'CNN-BiLSTM', 'Computer Vision', 'Voice Analysis', 'Full-Stack'],
      projects: [
        {
          name: 'HireGenius AI Recruitment Platform',
          description: 'Complete AI-powered recruitment system with multi-modal analysis',
          impact: 'Automated candidate evaluation with comprehensive AI analysis',
          viewable: true,
          fullDescription: `HireGenius is a comprehensive AI-based intelligent recruitment system that revolutionizes the hiring process through advanced AI technologies. The platform combines Natural Language Processing for CV analysis and candidate ranking, Computer Vision using YOLOv8 for facial expression analysis during interviews, and Voice Analysis using CNN-BiLSTM architecture for emotion evaluation.`,
          technologies: ['Python', 'NLP', 'YOLOv8', 'CNN-BiLSTM', 'TensorFlow', 'OpenCV'],
          metrics: [
            { label: 'AI Technologies', value: '3 integrated' },
            { label: 'Analysis Types', value: 'CV + Face + Voice' },
            { label: 'Project Type', value: 'Full-Stack AI' }
          ],
          challenges: [
            {
              challenge: 'Integrating multiple AI technologies (NLP, Computer Vision, Voice Analysis) into unified platform',
              solution: 'Designed modular architecture allowing seamless integration of NLP for CV analysis, YOLOv8 for facial recognition, and CNN-BiLSTM for voice emotion detection'
            }
          ],
          team: { size: 1, role: 'Full-Stack AI Developer' }
        }
      ]
    },
    {
      id: 4,
      type: 'project',
      title: 'Web Scraper Application',
      company: 'Personal Project',
      location: 'Remote',
      duration: 'May 2025',
      description: `Full-stack web scraping application with React frontend, FastAPI backend, and real-time WebSocket communication. Features responsive interface with multi-format data export capabilities.`,
      badges: ['Personal Project', 'Full-Stack'],
      responsibilities: [
        'Frontend Development: Created responsive web interface using React and Material-UI',
        'Backend Development: Built REST API using FastAPI with WebSocket integration',
        'Automation: Integrated Selenium for client-side JavaScript execution',
        'Data Processing: Implemented automatic HTML parser for web data extraction',
        'Export Features: Added multi-format data export (CSV, JSON, Excel, TXT)'
      ],
      achievements: [
        {
          metric: 'Multi-Format Export',
          description: 'Implemented data export in CSV, JSON, Excel, and TXT formats'
        },
        {
          metric: 'Real-time Communication',
          description: 'Integrated WebSocket for real-time status updates during scraping'
        },
        {
          metric: 'Responsive Design',
          description: 'Created fully responsive interface with multi-page pagination'
        }
      ],
      technologies: ['React', 'Material-UI', 'FastAPI', 'WebSocket', 'Selenium', 'Python'],
      projects: [
        {
          name: 'Full-Stack Web Scraper',
          description: 'Complete web scraping solution with modern UI and real-time updates',
          impact: 'Automated web data extraction with user-friendly interface',
          viewable: true,
          fullDescription: `Developed a comprehensive web scraping application featuring a React frontend with Material-UI components, FastAPI backend with WebSocket integration, and Selenium automation for JavaScript-heavy sites. The application provides multi-format data export and real-time status communication.`,
          technologies: ['React', 'Material-UI', 'FastAPI', 'WebSocket', 'Selenium', 'Python'],
          metrics: [
            { label: 'Frontend', value: 'React + Material-UI' },
            { label: 'Backend', value: 'FastAPI + WebSocket' },
            { label: 'Export Formats', value: '4 supported' }
          ]
        }
      ]
    },
    {
      id: 5,
      type: 'project',
      title: 'Realistic Image Generation with CNNs and GANs',
      company: 'Research Project',
      location: 'EST Nador',
      duration: '2024',
      description: `Explored creation of synthetic faces and AI-powered image enhancement techniques using Generative Adversarial Network architectures to generate photorealistic images.`,
      badges: ['Research', 'Computer Vision'],
      responsibilities: [
        'Synthetic Media: Explored creation of synthetic faces using GAN architectures',
        'GAN Architecture: Utilized Generative Adversarial Network for photorealistic image generation',
        'Research & Development: Conducted experimental research in computer vision and generative AI',
        'Image Enhancement: Developed AI-powered image enhancement techniques',
        'Model Training: Trained GAN models for high-quality synthetic image generation'
      ],
      achievements: [
        {
          metric: 'GAN Implementation',
          description: 'Successfully implemented Generative Adversarial Networks for image generation'
        },
        {
          metric: 'Photorealistic Results',
          description: 'Achieved high-quality photorealistic synthetic image generation'
        },
        {
          metric: 'Research Contribution',
          description: 'Contributed to understanding of generative AI applications in computer vision'
        }
      ],
      technologies: ['Python', 'GANs', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
      projects: [
        {
          name: 'GAN-based Image Generation System',
          description: 'Advanced image generation using Generative Adversarial Networks',
          impact: 'High-quality synthetic image generation for research applications',
          viewable: true,
          fullDescription: `Developed a sophisticated image generation system using Generative Adversarial Networks (GANs) to create photorealistic synthetic faces and enhance existing images. The project explores cutting-edge techniques in generative AI and computer vision.`,
          technologies: ['Python', 'GANs', 'TensorFlow', 'Computer Vision', 'Deep Learning'],
          metrics: [
            { label: 'Model Type', value: 'GAN Architecture' },
            { label: 'Output Quality', value: 'Photorealistic' },
            { label: 'Application', value: 'Research & Development' }
          ]
        }
      ]
    },
    {
      id: 6,
      type: 'education',
      title: 'Diploma of University Technology (DUT) in Artificial Intelligence and Data Engineering',
      company: 'EST Nador (École Supérieure de Technologie)',
      location: 'Nador, Morocco',
      duration: '2023 – 2025',
      description: `Comprehensive program in Artificial Intelligence and Data Engineering with hands-on experience in Machine Learning, Deep Learning, Computer Vision, and Natural Language Processing. Specialized training completed through 4-month internship program.`,
      featured: true,
      badges: ['Graduate', 'AI & Data Engineering'],
      responsibilities: [
        'Advanced coursework in Machine Learning and Deep Learning algorithms',
        'Hands-on projects in Computer Vision (OpenCV, YOLOv8) and NLP',
        'Data Engineering and database management (SQL, NoSQL)',
        'Web development and API creation (React, FastAPI)',
        'DevOps and cloud infrastructure (Docker, Kubernetes, CI/CD)'
      ],
      achievements: [
        {
          metric: 'Comprehensive Training',
          description: 'Completed 4-month internship program with specialized AI and Data Engineering focus'
        },
        {
          metric: 'Technical Expertise',
          description: 'Expert proficiency in Python, Java, Machine Learning, and Computer Vision'
        },
        {
          metric: 'Trilingual Skills',
          description: 'Professional proficiency in Arabic, French, and English languages'
        }
      ],
      technologies: ['Python', 'Java', 'JavaScript', 'PHP', 'Scala', 'Machine Learning', 'Deep Learning', 'OpenCV', 'YOLOv8'],
      projects: [],
      testimonial: {
        quote: 'Youssef consistently demonstrated exceptional technical abilities and collaborative teamwork skills throughout the program.',
        author: 'Academic Supervisor',
        role: 'Program Director',
        title: 'EST Nador'
      }
    },
    {
      id: 7,
      type: 'education',
      title: 'Baccalaureate in Science-Mathematics A (BIOF)',
      company: 'Lycée Moulay Rachid',
      location: 'Morocco',
      duration: '2022 – 2023',
      description: `Scientific baccalaureate with specialization in Mathematics, providing strong foundation in analytical thinking and problem-solving skills essential for AI and engineering studies.`,
      badges: ['Mathematics', 'Science'],
      achievements: [
        {
          metric: 'Strong Foundation',
          description: 'Established solid mathematical and scientific foundation for advanced AI studies'
        }
      ],
      technologies: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science Fundamentals']
    }
  ];

  useEffect(() => {
    let filtered = experiences;

    if (activeFilters.length > 0) {
      filtered = experiences.filter(exp => 
        activeFilters.some(filter => 
          exp.type === filter || 
          exp.badges?.some(badge => badge.toLowerCase().includes(filter.toLowerCase())) ||
          exp.technologies?.some(tech => tech.toLowerCase().includes(filter.toLowerCase()))
        )
      );
    }

    if (sortOrder === 'asc') {
      filtered = [...filtered].reverse();
    }

    setFilteredExperiences(filtered);
  }, [activeFilters, sortOrder]);

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
  };

  const handleSortChange = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  const handleViewModeChange = (newViewMode) => {
    setViewMode(newViewMode);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  const filterOptions = [
    { key: 'work', label: 'Work Experience', icon: 'Briefcase' },
    { key: 'project', label: 'Projects', icon: 'Code' },
    { key: 'education', label: 'Education', icon: 'GraduationCap' },
    { key: 'ai', label: 'AI & ML', icon: 'Brain' },
    { key: 'fullstack', label: 'Full-Stack', icon: 'Layers' },
    { key: 'research', label: 'Research', icon: 'Search' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} color="white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-headline gradient-text">
                Professional Journey
              </h1>
            </div>
            <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
              From academic excellence to professional internships and innovative projects - 
              trace my evolution as an AI Specialist Technician and Data Engineering Expert.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-headline text-primary">2</div>
                <div className="text-sm text-muted-foreground font-body">Internships</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-secondary">4+</div>
                <div className="text-sm text-muted-foreground font-body">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-accent">2025</div>
                <div className="text-sm text-muted-foreground font-body">Graduate Year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-success">3</div>
                <div className="text-sm text-muted-foreground font-body">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <TimelineFilters
        filterOptions={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={handleFilterChange}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
      />

      {/* Timeline */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === 'timeline' ? (
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {filteredExperiences.map((experience, index) => (
                  <TimelineNode
                    key={experience.id}
                    experience={experience}
                    index={index}
                    isLeft={index % 2 === 0}
                    onProjectClick={openProjectModal}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-8">
              {filteredExperiences.map((experience) => (
                <div key={experience.id} className="bg-card rounded-xl border border-border p-6 shadow-intelligent">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-headline text-foreground mb-2">{experience.title}</h3>
                      <p className="text-muted-foreground font-body">{experience.company} • {experience.location}</p>
                      <p className="text-sm text-muted-foreground font-body">{experience.duration}</p>
                    </div>
                    <div className="flex space-x-2">
                      {experience.badges?.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-cta rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground font-body mb-4">{experience.description}</p>
                  {experience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.slice(0, 8).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 8 && (
                        <span className="px-2 py-1 text-muted-foreground text-xs">
                          +{experience.technologies.length - 8} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Components */}
      <SkillEvolution experiences={filteredExperiences} />
      <GeographicReach experiences={filteredExperiences} />
      <AchievementBadges experiences={filteredExperiences} />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  );
};

export default ExperienceTimeline;
