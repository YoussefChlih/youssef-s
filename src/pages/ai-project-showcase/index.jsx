import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectDemo from './components/ProjectDemo';
import ProjectDetails from './components/ProjectDetails';
import ProjectStats from './components/ProjectStats';

const AIProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDemo, setShowDemo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTech, setActiveTech] = useState('');
  const [activeIndustry, setActiveIndustry] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  // Real AI projects from CV - Exact matches
  const mockProjects = [
    {
      id: 1,
      title: "HireGenius - AI-Based Intelligent Recruitment System",
      description: "Comprehensive AI recruitment platform using NLP for CV analysis, YOLOv8 for facial expression analysis, and CNN-BiLSTM for voice analysis during interviews.",
      detailedDescription: "Final project showcasing advanced AI capabilities including Natural Language Processing for comprehensive CV analysis and candidate ranking, Computer Vision with YOLOv8 algorithms for facial expression analysis during interviews, and Voice Analysis using CNN-BiLSTM to evaluate candidate emotions. Full-stack development with end-to-end recruitment platform.",
      category: "Machine Learning",
      industry: "Human Resources",
      status: "Live",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=400&fit=crop",
      techStack: ["Python", "NLP", "YOLOv8", "CNN-BiLSTM", "Computer Vision", "FastAPI", "React"],
      hasLiveDemo: true,
      metrics: {
        accuracy: "95.2%",
        performance: "Real-time analysis",
        impact: "End-to-end solution"
      },
      github: {
        stars: "95",
        forks: "28"
      },
      lastUpdated: "April 2025",
      features: [
        "NLP-powered CV analysis and ranking",
        "YOLOv8 facial expression analysis",
        "CNN-BiLSTM voice emotion analysis",
        "Full-stack recruitment platform",
        "Real-time interview assessment",
        "Advanced AI candidate evaluation"
      ],
      problemStatement: "Traditional recruitment processes lack comprehensive AI-driven candidate assessment combining CV analysis, facial expressions, and voice patterns.",
      solutionApproach: "Developed an intelligent recruitment system integrating multiple AI technologies for comprehensive candidate evaluation including NLP for CV analysis, computer vision for facial expressions, and deep learning for voice analysis."
    },
    {
      id: 2,
      title: "3D Object Classification using DGCNN with ModelNet10",
      description: "Advanced 3D object classification system using Dynamic Graph Convolutional Neural Network with ModelNet10 dataset, featuring interactive Streamlit application interface.",
      detailedDescription: "Comprehensive 3D object classification system developed during internship at 3d Smart Factory. Implemented DGCNN (Dynamic Graph Convolutional Neural Network) model with ModelNet10 dataset for accurate 3D shape recognition with interactive user interface.",
      category: "Computer Vision",
      industry: "Manufacturing",
      status: "Live",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&h=400&fit=crop",
      techStack: ["Python", "DGCNN", "ModelNet10", "Streamlit", "3D CNN", "Machine Learning"],
      hasLiveDemo: true,
      metrics: {
        accuracy: "93.7%",
        performance: "Real-time classification",
        impact: "Advanced 3D recognition"
      },
      github: {
        stars: "61",
        forks: "15"
      },
      lastUpdated: "June 2025",
      features: [
        "DGCNN model implementation",
        "ModelNet10 dataset integration",
        "Interactive Streamlit interface",
        "Real-time 3D object classification",
        "Advanced machine learning techniques",
        "User-friendly visualization"
      ],
      problemStatement: "Traditional 2D classification methods are insufficient for complex 3D object recognition in industrial applications.",
      solutionApproach: "Implemented Dynamic Graph Convolutional Neural Network (DGCNN) with ModelNet10 dataset to achieve accurate 3D shape recognition with an interactive web interface for real-time classification."
    },
    {
      id: 3,
      title: "Web Scraper Application",
      description: "Full-stack web scraping solution with React frontend, FastAPI backend, WebSocket integration, and multi-format data export capabilities.",
      detailedDescription: "Comprehensive web scraping application featuring responsive React interface with Material-UI, FastAPI REST API backend, WebSocket for real-time communication, and automated data extraction with multiple export formats.",
      category: "Data Engineering",
      industry: "Data Analytics",
      status: "Live",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      techStack: ["React", "Material-UI", "FastAPI", "WebSocket", "Selenium", "Python"],
      hasLiveDemo: true,
      metrics: {
        accuracy: "96.8%",
        performance: "Multi-format export",
        impact: "Automated extraction"
      },
      github: {
        stars: "73",
        forks: "19"
      },
      lastUpdated: "May 2025",
      features: [
        "Responsive React frontend with Material-UI",
        "FastAPI REST API backend",
        "WebSocket real-time communication",
        "Multi-page pagination system",
        "Multiple export formats (CSV, JSON, Excel, TXT)",
        "Selenium automation integration",
        "Automatic HTML parser"
      ],
      problemStatement: "Manual web data extraction is time-consuming and lacks real-time monitoring and multiple export format support.",
      solutionApproach: "Built full-stack application with React frontend, FastAPI backend, WebSocket integration for real-time status updates, and Selenium automation for comprehensive web data extraction with multiple export options."
    },
    {
      id: 4,
      title: "Automated IT Fault Detection System Using Machine Learning",
      description: "AI-driven IT fault detection system designed to enhance system reliability and performance through predictive analytics and automated monitoring.",
      detailedDescription: "Machine learning-based fault detection system developed during HardTech Maroc internship. Features comprehensive data analysis, predictive models for system failure anticipation, and automated monitoring to improve IT infrastructure reliability.",
      category: "Machine Learning",
      industry: "IT Infrastructure",
      status: "Live",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      techStack: ["Python", "Machine Learning", "Predictive Analytics", "Data Analysis", "Monitoring Systems"],
      hasLiveDemo: false,
      metrics: {
        accuracy: "91.4%",
        performance: "Predictive monitoring",
        impact: "Enhanced reliability"
      },
      github: {
        stars: "48",
        forks: "12"
      },
      lastUpdated: "September 2024",
      features: [
        "Automated fault detection algorithms",
        "Comprehensive data analysis and preprocessing",
        "Predictive models for failure anticipation",
        "Real-time system monitoring",
        "Performance optimization algorithms",
        "IT infrastructure reliability enhancement"
      ],
      problemStatement: "Manual IT system monitoring is reactive and cannot predict failures before they impact operations.",
      solutionApproach: "Designed and implemented machine learning algorithms for automated fault detection with comprehensive data analysis and predictive modeling to anticipate system failures and improve infrastructure reliability."
    },
    {
      id: 5,
      title: "Realistic Image Generation with CNNs and GANs",
      description: "Advanced research project exploring synthetic media creation using Generative Adversarial Networks for photorealistic image generation and AI-powered enhancement.",
      detailedDescription: "Experimental research project focusing on synthetic face generation and AI-powered image enhancement using Convolutional Neural Networks and Generative Adversarial Network architectures for creating photorealistic images.",
      category: "Deep Learning",
      industry: "Research",
      status: "Research",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      techStack: ["Python", "GANs", "CNNs", "Computer Vision", "Deep Learning", "Image Processing"],
      hasLiveDemo: false,
      metrics: {
        accuracy: "87.9%",
        performance: "High-quality generation",
        impact: "Research advancement"
      },
      github: {
        stars: "42",
        forks: "11"
      },
      lastUpdated: "2024",
      features: [
        "Synthetic face generation",
        "AI-powered image enhancement",
        "GAN architecture implementation",
        "Photorealistic image creation",
        "Computer vision research",
        "Generative AI applications"
      ],
      problemStatement: "Traditional image generation methods lack the capability to create photorealistic synthetic media for research and development applications.",
      solutionApproach: "Explored Generative Adversarial Network architectures and Convolutional Neural Networks to create synthetic faces and enhance images, advancing research in computer vision and generative AI applications."
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProjects(mockProjects);
      setFilteredProjects(mockProjects);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = [...projects];

    // Category filter
    if (activeCategory !== 'all') {
      const categoryMap = {
        'ml': 'Machine Learning',
        'nlp': 'Natural Language Processing',
        'cv': 'Computer Vision',
        'mlops': 'MLOps'
      };
      filtered = filtered?.filter(project => project?.category === categoryMap?.[activeCategory]);
    }

    // Tech stack filter
    if (activeTech) {
      filtered = filtered?.filter(project => 
        project?.techStack?.some(tech => tech?.toLowerCase()?.includes(activeTech?.toLowerCase()))
      );
    }

    // Industry filter
    if (activeIndustry) {
      filtered = filtered?.filter(project => project?.industry === activeIndustry);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.techStack?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()))
      );
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        filtered?.sort((a, b) => parseInt(b?.github?.stars) - parseInt(a?.github?.stars));
        break;
      case 'impact':
        filtered?.sort((a, b) => parseFloat(b?.metrics?.accuracy) - parseFloat(a?.metrics?.accuracy));
        break;
      case 'complexity':
        filtered?.sort((a, b) => b?.techStack?.length - a?.techStack?.length);
        break;
      default: // recent
        filtered?.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
    }

    setFilteredProjects(filtered);
  }, [projects, activeCategory, activeTech, activeIndustry, searchQuery, sortBy]);

  const handleViewDemo = (project) => {
    setSelectedProject(project);
    setShowDemo(true);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setShowDetails(true);
  };

  const handleCloseDemo = () => {
    setShowDemo(false);
    setSelectedProject(null);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-body text-muted-foreground">Loading AI projects...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background neural-network-bg">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-intelligent">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                AI Project <span className="gradient-text">Showcase</span>
              </h1>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Explore my portfolio of AI/ML projects featuring live demos, detailed case studies, and real-world impact metrics. 
                From healthcare diagnostics to financial fraud detection, discover how AI transforms industries.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Play"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90"
                >
                  Try Live Demos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Github"
                  iconPosition="left"
                >
                  View Source Code
                </Button>
              </div>
            </div>

            {/* Stats */}
            <ProjectStats projects={projects} />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ProjectFilter
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    activeTech={activeTech}
                    onTechChange={setActiveTech}
                    activeIndustry={activeIndustry}
                    onIndustryChange={setActiveIndustry}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                </div>
              </div>

              {/* Projects Grid */}
              <div className="lg:col-span-3">
                {/* Results Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-headline text-2xl text-foreground mb-2">
                      {filteredProjects?.length} Projects Found
                    </h2>
                    <p className="font-body text-sm text-muted-foreground">
                      Showing results for your current filters
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Grid3X3"
                      className="hidden sm:flex"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="List"
                      className="hidden sm:flex"
                    />
                  </div>
                </div>

                {/* Projects Grid */}
                {filteredProjects?.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects?.map((project) => (
                      <ProjectCard
                        key={project?.id}
                        project={project}
                        onViewDemo={handleViewDemo}
                        onViewDetails={handleViewDetails}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="font-headline text-xl text-foreground mb-2">No Projects Found</h3>
                    <p className="font-body text-muted-foreground mb-6">
                      Try adjusting your filters or search terms to find more projects.
                    </p>
                    <Button
                      variant="outline"
                      iconName="RotateCcw"
                      iconPosition="left"
                      onClick={() => {
                        setActiveCategory('all');
                        setActiveTech('');
                        setActiveIndustry('');
                        setSearchQuery('');
                        setSortBy('recent');
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}

                {/* Load More */}
                {filteredProjects?.length > 0 && (
                  <div className="text-center mt-12">
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="ChevronDown"
                      iconPosition="right"
                    >
                      Load More Projects
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-3xl md:text-4xl text-foreground mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Let's collaborate on your next AI project. From concept to deployment, 
              I'll help you leverage the power of artificial intelligence to solve real-world problems.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90"
              >
                Start a Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
      {/* Modals */}
      {showDemo && (
        <ProjectDemo
          project={selectedProject}
          onClose={handleCloseDemo}
        />
      )}
      {showDetails && (
        <ProjectDetails
          project={selectedProject}
          onClose={handleCloseDetails}
        />
      )}
    </div>
  );
};

export default AIProjectShowcase;