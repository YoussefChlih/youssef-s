import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsCompetencySection = () => {
  const [activeCategory, setActiveCategory] = useState('ai-ml');

  const skillCategories = {
    'ai-ml': {
      title: 'AI & Machine Learning',
      icon: 'Brain',
      skills: [
        { name: 'Deep Learning', level: 95, experience: '5+ years' },
        { name: 'Computer Vision', level: 90, experience: '4+ years' },
        { name: 'Natural Language Processing', level: 88, experience: '4+ years' },
        { name: 'Reinforcement Learning', level: 82, experience: '3+ years' },
        { name: 'MLOps', level: 85, experience: '3+ years' },
        { name: 'Neural Networks', level: 92, experience: '5+ years' }
      ]
    },
    'programming': {
      title: 'Programming Languages',
      icon: 'Code',
      skills: [
        { name: 'Python', level: 95, experience: '6+ years' },
        { name: 'JavaScript/TypeScript', level: 88, experience: '4+ years' },
        { name: 'R', level: 80, experience: '3+ years' },
        { name: 'SQL', level: 85, experience: '5+ years' },
        { name: 'Java', level: 75, experience: '3+ years' },
        { name: 'C++', level: 70, experience: '2+ years' }
      ]
    },
    'frameworks': {
      title: 'Frameworks & Tools',
      icon: 'Wrench',
      skills: [
        { name: 'TensorFlow', level: 92, experience: '4+ years' },
        { name: 'PyTorch', level: 90, experience: '4+ years' },
        { name: 'Scikit-learn', level: 88, experience: '5+ years' },
        { name: 'Docker', level: 85, experience: '3+ years' },
        { name: 'Kubernetes', level: 78, experience: '2+ years' },
        { name: 'Apache Spark', level: 80, experience: '3+ years' }
      ]
    },
    'cloud': {
      title: 'Cloud & Infrastructure',
      icon: 'Cloud',
      skills: [
        { name: 'AWS', level: 88, experience: '4+ years' },
        { name: 'Google Cloud Platform', level: 82, experience: '3+ years' },
        { name: 'Azure', level: 75, experience: '2+ years' },
        { name: 'Terraform', level: 70, experience: '2+ years' },
        { name: 'CI/CD Pipelines', level: 85, experience: '3+ years' },
        { name: 'Monitoring & Logging', level: 80, experience: '3+ years' }
      ]
    }
  };

  const certifications = [
    {
      name: 'AWS Certified Machine Learning - Specialty',
      issuer: 'Amazon Web Services',
      date: '2024',
      status: 'Active',
      verificationId: 'AWS-MLS-2024-001'
    },
    {
      name: 'Google Cloud Professional ML Engineer',
      issuer: 'Google Cloud',
      date: '2023',
      status: 'Active',
      verificationId: 'GCP-MLE-2023-002'
    },
    {
      name: 'TensorFlow Developer Certificate',
      issuer: 'TensorFlow',
      date: '2023',
      status: 'Active',
      verificationId: 'TF-DEV-2023-003'
    },
    {
      name: 'Deep Learning Specialization',
      issuer: 'Coursera (Andrew Ng)',
      date: '2022',
      status: 'Completed',
      verificationId: 'DL-SPEC-2022-004'
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-success';
    if (level >= 80) return 'bg-primary';
    if (level >= 70) return 'bg-secondary';
    return 'bg-accent';
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            Technical <span className="gradient-text">Competencies</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and areas of expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {Object.entries(skillCategories)?.map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-lg text-left transition-intelligent interactive-lift ${
                    activeCategory === key
                      ? 'bg-primary text-primary-foreground shadow-intelligent'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={category?.icon} size={20} />
                  <span className="font-cta">{category?.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl p-8 shadow-intelligent">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name={skillCategories?.[activeCategory]?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline text-foreground">
                  {skillCategories?.[activeCategory]?.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories?.[activeCategory]?.skills?.map((skill, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-cta text-foreground">{skill?.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-muted-foreground font-body">
                          {skill?.experience}
                        </span>
                        <span className="text-sm font-cta text-primary">
                          {skill?.level}%
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill?.level)}`}
                        style={{ width: `${skill?.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-card rounded-xl p-8 shadow-intelligent">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
              <Icon name="Award" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-headline text-foreground">
              Professional Certifications
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:shadow-intelligent transition-intelligent">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-cta text-foreground mb-1">{cert?.name}</h4>
                    <p className="text-sm text-muted-foreground font-body">{cert?.issuer}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded font-cta ${
                    cert?.status === 'Active' ?'bg-success/10 text-success' :'bg-muted text-muted-foreground'
                  }`}>
                    {cert?.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground font-body">Issued: {cert?.date}</span>
                  <button className="flex items-center space-x-1 text-primary hover:text-primary/80 transition-intelligent">
                    <Icon name="ExternalLink" size={14} />
                    <span className="font-cta">Verify</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCompetencySection;