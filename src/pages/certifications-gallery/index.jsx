import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CertificationsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [animationDelay, setAnimationDelay] = useState(0);

  const certifications = [
    {
      id: 1,
      title: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
      provider: 'Oracle',
      category: 'cloud',
      year: '2024',
      image: '/assets/images/certificates/Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate.png',
      description: 'Comprehensive certification in Oracle Cloud Infrastructure AI services and foundations',
      skills: ['Oracle Cloud', 'AI Services', 'Machine Learning', 'Cloud Computing'],
      credentialId: 'OCI-AI-2024',
      featured: true
    },
    {
      id: 2,
      title: 'Fundamentals of Azure AI Document Intelligence',
      provider: 'Microsoft Azure',
      category: 'cloud',
      year: '2024',
      image: '/assets/images/certificates/Fundamentals  of Azure AI Document Intelligence.png',
      description: 'Expertise in Azure AI Document Intelligence services for automated document processing',
      skills: ['Azure AI', 'Document Intelligence', 'Form Recognizer', 'Cognitive Services'],
      credentialId: 'AZ-AI-DOC-2024'
    },
    {
      id: 3,
      title: 'Get Started with Azure Stream Analytics',
      provider: 'Microsoft Azure',
      category: 'cloud',
      year: '2024',
      image: '/assets/images/certificates/Get started with Azure Stream Analytics.png',
      description: 'Real-time data processing and analytics using Azure Stream Analytics',
      skills: ['Azure Stream Analytics', 'Real-time Processing', 'Event Hubs', 'IoT'],
      credentialId: 'AZ-STREAM-2024'
    },
    {
      id: 4,
      title: 'Python Programmer Bootcamp',
      provider: 'Programming Institute',
      category: 'programming',
      year: '2024',
      image: '/assets/images/certificates/Python programmer Bootcamp.png',
      description: 'Comprehensive Python programming bootcamp covering advanced concepts',
      skills: ['Python', 'Advanced Programming', 'Object-Oriented Programming', 'Data Structures'],
      credentialId: 'PY-BOOTCAMP-2024',
      featured: true
    },
    {
      id: 5,
      title: 'Introduction to Python',
      provider: 'Programming Institute',
      category: 'programming',
      year: '2023',
      image: '/assets/images/certificates/Introduction to Python.png',
      description: 'Foundation course in Python programming fundamentals',
      skills: ['Python Basics', 'Programming Fundamentals', 'Syntax', 'Variables'],
      credentialId: 'PY-INTRO-2023'
    },
    {
      id: 6,
      title: 'Intermediate Python Programming',
      provider: 'Programming Institute',
      category: 'programming',
      year: '2024',
      image: '/assets/images/certificates/Interemediate Python Programming.png',
      description: 'Intermediate Python concepts including advanced data structures and algorithms',
      skills: ['Advanced Python', 'Data Structures', 'Algorithms', 'File Handling'],
      credentialId: 'PY-INTER-2024'
    },
    {
      id: 7,
      title: 'Introduction to Data Science',
      provider: 'Data Science Institute',
      category: 'datascience',
      year: '2023',
      image: '/assets/images/certificates/Introduction to Data Science.png',
      description: 'Comprehensive introduction to data science methodologies and practices',
      skills: ['Data Analysis', 'Statistics', 'Data Visualization', 'Research Methods'],
      credentialId: 'DS-INTRO-2023',
      featured: true
    },
    {
      id: 8,
      title: 'Python Project for Data Science',
      provider: 'Data Science Institute',
      category: 'datascience',
      year: '2024',
      image: '/assets/images/certificates/Python project for Data science.png',
      description: 'Practical Python applications for data science projects and analysis',
      skills: ['Python for Data Science', 'Pandas', 'NumPy', 'Project Implementation'],
      credentialId: 'DS-PY-2024'
    },
    {
      id: 9,
      title: 'Machine Learning in Production',
      provider: 'ML Institute',
      category: 'ai',
      year: '2024',
      image: '/assets/images/certificates/Machine learning in Production.png',
      description: 'Best practices for deploying and maintaining machine learning models in production',
      skills: ['MLOps', 'Model Deployment', 'Production Systems', 'Monitoring'],
      credentialId: 'ML-PROD-2024',
      featured: true
    },
    {
      id: 10,
      title: 'The Machine Learning Process A-Z',
      provider: 'ML Institute',
      category: 'ai',
      year: '2024',
      image: '/assets/images/certificates/The Machine Learning Process A-Z.png',
      description: 'End-to-end machine learning process from data collection to model deployment',
      skills: ['Machine Learning Pipeline', 'Model Training', 'Feature Engineering', 'Evaluation'],
      credentialId: 'ML-AZ-2024'
    },
    {
      id: 11,
      title: 'Intro to NLP for AI',
      provider: 'AI Institute',
      category: 'ai',
      year: '2024',
      image: '/assets/images/certificates/Intro to NLP for AI.png',
      description: 'Natural Language Processing fundamentals for artificial intelligence applications',
      skills: ['Natural Language Processing', 'Text Analysis', 'Sentiment Analysis', 'Language Models'],
      credentialId: 'NLP-AI-2024'
    },
    {
      id: 12,
      title: 'Mathematics for Machine Learning',
      provider: 'Math Institute',
      category: 'mathematics',
      year: '2023',
      image: '/assets/images/certificates/Mathematics.png',
      description: 'Mathematical foundations essential for machine learning and AI',
      skills: ['Linear Algebra', 'Calculus', 'Statistics', 'Probability'],
      credentialId: 'MATH-ML-2023'
    },
    {
      id: 13,
      title: 'Delivering Quality Work With Agility',
      provider: 'Agile Institute',
      category: 'management',
      year: '2024',
      image: '/assets/images/certificates/Delivering Quality Work With Agility.png',
      description: 'Agile methodologies and practices for delivering high-quality software projects',
      skills: ['Agile Methodology', 'Scrum', 'Project Management', 'Quality Assurance'],
      credentialId: 'AGILE-2024'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Certifications', icon: 'Award', count: certifications.length },
    { key: 'cloud', label: 'Cloud & Azure', icon: 'Cloud', count: certifications.filter(c => c.category === 'cloud').length },
    { key: 'ai', label: 'AI & ML', icon: 'Brain', count: certifications.filter(c => c.category === 'ai').length },
    { key: 'datascience', label: 'Data Science', icon: 'Database', count: certifications.filter(c => c.category === 'datascience').length },
    { key: 'programming', label: 'Programming', icon: 'Code', count: certifications.filter(c => c.category === 'programming').length },
    { key: 'mathematics', label: 'Mathematics', icon: 'Calculator', count: certifications.filter(c => c.category === 'mathematics').length },
    { key: 'management', label: 'Management', icon: 'Users', count: certifications.filter(c => c.category === 'management').length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const featuredCertifications = certifications.filter(cert => cert.featured);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationDelay(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Award" size={24} color="white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-headline gradient-text">
                Professional Certifications
              </h1>
            </div>
            <p className="text-xl text-muted-foreground font-body max-w-4xl mx-auto mb-8">
              A comprehensive collection of industry-recognized certifications demonstrating expertise 
              in AI, Machine Learning, Cloud Technologies, Data Science, and Professional Development.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-headline text-primary">{certifications.length}</div>
                <div className="text-sm text-muted-foreground font-body">Total Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-secondary">{featuredCertifications.length}</div>
                <div className="text-sm text-muted-foreground font-body">Featured</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-accent">5</div>
                <div className="text-sm text-muted-foreground font-body">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-headline text-success">2024</div>
                <div className="text-sm text-muted-foreground font-body">Latest Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-cta text-sm transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-primary text-primary-foreground shadow-intelligent'
                    : 'bg-card text-muted-foreground hover:bg-muted border border-border'
                }`}
              >
                <Icon name={category.icon} size={16} />
                <span>{category.label}</span>
                <span className="bg-muted/50 text-xs px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCertifications.map((cert, index) => (
              <div
                key={cert.id}
                className="group bg-card rounded-xl border border-border shadow-intelligent hover:shadow-intelligent-hover transition-all duration-300 interactive-lift overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Certificate Image */}
                <div className="relative aspect-video overflow-hidden cursor-pointer" onClick={() => openLightbox(cert.image)}>
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {cert.featured && (
                    <div className="absolute top-3 right-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-cta">
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Icon name="ZoomIn" size={24} color="white" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-cta text-lg text-foreground line-clamp-2 mb-1">{cert.title}</h3>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{cert.provider}</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground font-body mb-4 line-clamp-2">
                    {cert.description}
                  </p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="text-xs text-muted-foreground px-2 py-1">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Credential ID */}
                  <div className="text-xs text-muted-foreground font-mono">
                    ID: {cert.credentialId}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage} 
              alt="Certificate"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-background/80 text-foreground p-2 rounded-full hover:bg-background transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-headline text-foreground mb-4">
            Continuous Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-8">
            These certifications represent my commitment to staying current with the latest 
            technologies and best practices in AI, data science, and software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/skills-matrix-visualization">
              <Button
                variant="default"
                iconName="Target"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                View Skills Matrix
              </Button>
            </Link>
            
            <Link to="/ai-project-showcase">
              <Button
                variant="outline"
                iconName="Briefcase"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                See Projects
              </Button>
            </Link>

            <Link to="/professional-identity-hub">
              <Button
                variant="outline"
                iconName="User"
                iconPosition="left"
                className="font-cta interactive-lift"
              >
                About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsGallery;
