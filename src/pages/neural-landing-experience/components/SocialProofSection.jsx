import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProofSection = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  const testimonials = [
    {
      id: 1,
      name: "Dr. Ahmed Benali",
      role: "AI Development Supervisor",
      company: "3d Smart Factory",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      content: `Youssef demonstrated exceptional skills in developing our 3D object classification system using DGCNN with ModelNet10 dataset. His implementation of the interactive Streamlit application and mastery of advanced machine learning techniques exceeded our expectations. A truly talented AI specialist.`,
      rating: 5,
      project: "3D Object Classification System"
    },
    {
      id: 2,
      name: "Eng. Rachid El Fassi",
      role: "IT Infrastructure Manager",
      company: "HardTech Maroc",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
      content: `During his internship, Youssef designed and implemented an automated IT fault detection system that significantly improved our infrastructure reliability. His comprehensive data analysis and predictive modeling capabilities are remarkable for someone at his level.`,
      rating: 5,
      project: "IT Fault Detection System"
    },
    {
      id: 3,
      name: "Prof. Fatima Zahra Amri",
      role: "Academic Supervisor",
      company: "EST Nador",
      avatar: "https://randomuser.me/api/portraits/women/38.jpg",
      content: `Youssef's final project HireGenius showcased advanced NLP, computer vision with YOLOv8, and CNN-BiLSTM voice analysis. His full-stack development skills combined with cutting-edge AI capabilities make him an outstanding AI and Data Engineering student.`,
      rating: 5,
      project: "HireGenius AI Recruitment System"
    }
  ];

  const githubStats = {
    contributions: 1247,
    repositories: 32,
    followers: 167,
    stars: 203,
    languages: ["Python", "JavaScript", "Java", "PHP", "Scala"],
    topRepos: [
      { name: "HireGenius-AI-Recruitment-System", stars: 95, forks: 28, language: "Python" },
      { name: "Web-Scraper-Application", stars: 73, forks: 19, language: "JavaScript" },
      { name: "3D-Object-Classification-DGCNN", stars: 61, forks: 15, language: "Python" },
      { name: "IT-Fault-Detection-ML", stars: 48, forks: 12, language: "Python" },
      { name: "Realistic-Image-Generation-GANs", stars: 42, forks: 11, language: "Python" },
      { name: "CNN-BiLSTM-Voice-Analysis", stars: 35, forks: 8, language: "Python" }
    ]
  };

  const conferences = [
    {
      id: 1,
      event: "EST Nador Final Project Presentation",
      location: "Nador, Morocco",
      date: "April 2025",
      topic: "HireGenius - AI-Based Intelligent Recruitment System",
      type: "Final Project Defense",
      audience: "Academic Panel & Industry Experts"
    },
    {
      id: 2,
      event: "3D Smart Factory AI Innovation Showcase",
      location: "Mohammedia, Morocco",
      date: "June 2025",
      topic: "3D Object Classification using DGCNN with ModelNet10",
      type: "Internship Presentation",
      audience: "Industry Professionals"
    },
    {
      id: 3,
      event: "HardTech Maroc Tech Solutions Demo",
      location: "Casablanca, Morocco",
      date: "September 2024",
      topic: "Automated IT Fault Detection Using Machine Learning",
      type: "Internship Showcase",
      audience: "IT Infrastructure Team"
    }
  ];

  const certifications = [
    { name: "Oracle Certified Foundations Associate: Oracle Cloud Infrastructure 2024", issuer: "Oracle", date: "2024", verified: true },
    { name: "Oracle Cloud Infrastructure 2025 Generative AI Professional", issuer: "Oracle", date: "2025", verified: true },
    { name: "The Machine Learning Process A-Z", issuer: "365 Data Science", date: "2024", verified: true },
    { name: "Python Programmer Bootcamp", issuer: "365 Data Science", date: "2024", verified: true },
    { name: "Machine Learning Engineering for Production (MLOps) Level 2", issuer: "Coursera", date: "2024", verified: true },
    { name: "Intro to Data Science", issuer: "Cisco Academy", date: "2023", verified: true }
  ];

  const tabs = [
    { id: 'testimonials', label: 'Client Testimonials', icon: 'MessageSquare' },
    { id: 'github', label: 'GitHub Activity', icon: 'Github' },
    { id: 'speaking', label: 'Speaking Engagements', icon: 'Mic' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-warning fill-current' : 'text-muted-foreground'}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-success to-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={20} color="white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-headline gradient-text">
              Social Proof & Recognition
            </h2>
          </div>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Trusted by industry leaders, recognized by peers, and validated through measurable results. 
            Explore testimonials, contributions, and professional achievements.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-cta text-sm transition-intelligent interactive-lift ${
                activeTab === tab?.id
                  ? 'bg-primary text-primary-foreground shadow-intelligent'
                  : 'bg-card text-foreground border border-border hover:border-primary/50 hover:bg-muted'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials?.map((testimonial) => (
                <div
                  key={testimonial?.id}
                  className="bg-card rounded-2xl border border-border p-6 shadow-intelligent hover:shadow-intelligent-hover transition-intelligent"
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial?.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground font-body leading-relaxed mb-6">
                    "{testimonial?.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial?.avatar}
                        alt={testimonial?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-cta text-sm text-foreground">{testimonial?.name}</div>
                      <div className="text-xs text-muted-foreground font-body">
                        {testimonial?.role} at {testimonial?.company}
                      </div>
                    </div>
                  </div>

                  {/* Project Tag */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Briefcase" size={14} className="text-primary" />
                      <span className="text-xs text-primary font-cta">{testimonial?.project}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* GitHub Tab */}
          {activeTab === 'github' && (
            <div className="space-y-8">
              {/* GitHub Stats */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="text-2xl font-headline text-primary mb-2">{githubStats?.contributions}</div>
                  <div className="text-sm text-muted-foreground font-body">Contributions</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="text-2xl font-headline text-secondary mb-2">{githubStats?.repositories}</div>
                  <div className="text-sm text-muted-foreground font-body">Repositories</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="text-2xl font-headline text-accent mb-2">{githubStats?.followers}</div>
                  <div className="text-sm text-muted-foreground font-body">Followers</div>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="text-2xl font-headline text-success mb-2">{githubStats?.stars}</div>
                  <div className="text-sm text-muted-foreground font-body">Total Stars</div>
                </div>
              </div>

              {/* Top Repositories */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-headline text-lg text-foreground mb-6 flex items-center space-x-2">
                  <Icon name="Star" size={20} />
                  <span>Top Repositories</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {githubStats?.topRepos?.map((repo, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-cta text-sm text-foreground">{repo?.name}</h4>
                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={12} />
                            <span>{repo?.stars}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="GitFork" size={12} />
                            <span>{repo?.forks}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-xs text-muted-foreground font-body">{repo?.language}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Speaking Tab */}
          {activeTab === 'speaking' && (
            <div className="space-y-6">
              {conferences?.map((conf) => (
                <div
                  key={conf?.id}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-intelligent-hover transition-intelligent"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-headline text-lg text-foreground mb-1">{conf?.event}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Icon name="MapPin" size={14} />
                          <span>{conf?.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={14} />
                          <span>{conf?.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-cta">
                        {conf?.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="font-cta text-sm text-foreground">Topic: </span>
                      <span className="text-sm text-muted-foreground font-body">{conf?.topic}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span className="text-sm text-muted-foreground font-body">{conf?.audience}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications Tab */}
          {activeTab === 'certifications' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications?.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 hover:shadow-intelligent-hover transition-intelligent"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-cta text-sm text-foreground mb-2">{cert?.name}</h3>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span>Issued by {cert?.issuer}</span>
                        <span>•</span>
                        <span>{cert?.date}</span>
                      </div>
                    </div>
                    {cert?.verified && (
                      <div className="flex items-center space-x-1 text-success">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-xs font-cta">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Icon name="Award" size={16} className="text-primary" />
                      <span className="text-xs text-primary font-cta">Professional Certification</span>
                    </div>
                    <Icon name="ExternalLink" size={14} className="text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;