import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'FileText' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'performance', label: 'Performance', icon: 'BarChart3' },
    { id: 'impact', label: 'Impact', icon: 'TrendingUp' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-subheading text-lg text-foreground mb-4">Project Overview</h3>
              <p className="font-body text-muted-foreground mb-6">
                {project?.detailedDescription || project?.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-cta text-sm text-foreground mb-3">Problem Statement</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {project?.problemStatement || `This project addresses critical challenges in ${project?.industry} by leveraging advanced AI/ML techniques to deliver measurable business impact.`}
                  </p>
                </div>
                <div>
                  <h4 className="font-cta text-sm text-foreground mb-3">Solution Approach</h4>
                  <p className="font-body text-sm text-muted-foreground">
                    {project?.solutionApproach || `Implemented a comprehensive solution using ${project?.techStack?.slice(0, 3)?.join(', ')} to achieve optimal performance and scalability.`}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-cta text-sm text-foreground mb-3">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(project?.features || [
                  'Real-time processing capabilities',
                  'Scalable cloud infrastructure',
                  'Advanced machine learning algorithms',
                  'Comprehensive monitoring and logging',
                  'User-friendly interface design',
                  'Robust error handling and validation'
                ])?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                    <span className="font-body text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-cta text-sm text-foreground mb-3">Technology Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project?.techStack?.map((tech, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-muted/50 px-3 py-2 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-cta text-sm text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-subheading text-lg text-foreground mb-4">System Architecture</h3>
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <div className="text-center">
                  <Icon name="Network" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <p className="font-body text-sm text-muted-foreground">
                    Architecture diagram would be displayed here
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-cta text-sm text-foreground mb-3">Data Pipeline</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Database" size={16} className="text-primary" />
                    <span className="font-body text-sm text-foreground">Data Ingestion</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Filter" size={16} className="text-secondary" />
                    <span className="font-body text-sm text-foreground">Data Processing</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Brain" size={16} className="text-accent" />
                    <span className="font-body text-sm text-foreground">Model Training</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <Icon name="Zap" size={16} className="text-success" />
                    <span className="font-body text-sm text-foreground">Inference</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-cta text-sm text-foreground mb-3">Infrastructure</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Cloud" size={16} className="text-primary" />
                      <span className="font-body text-sm text-foreground">Cloud Platform</span>
                    </div>
                    <span className="font-cta text-xs text-muted-foreground">AWS/GCP</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Container" size={16} className="text-secondary" />
                      <span className="font-body text-sm text-foreground">Containerization</span>
                    </div>
                    <span className="font-cta text-xs text-muted-foreground">Docker</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Activity" size={16} className="text-accent" />
                      <span className="font-body text-sm text-foreground">Monitoring</span>
                    </div>
                    <span className="font-cta text-xs text-muted-foreground">Custom</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'performance':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-subheading text-lg text-foreground mb-4">Performance Metrics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="font-headline text-3xl text-primary mb-2">{project?.metrics?.accuracy}</div>
                  <div className="font-cta text-sm text-muted-foreground">Model Accuracy</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="font-headline text-3xl text-secondary mb-2">{project?.metrics?.performance}</div>
                  <div className="font-cta text-sm text-muted-foreground">Processing Speed</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="font-headline text-3xl text-accent mb-2">{project?.metrics?.impact}</div>
                  <div className="font-cta text-sm text-muted-foreground">Business Impact</div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-cta text-sm text-foreground mb-4">Performance Benchmarks</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-foreground">Training Accuracy</span>
                      <span className="font-cta text-sm text-primary">96.8%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '96.8%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-foreground">Validation Accuracy</span>
                      <span className="font-cta text-sm text-secondary">94.2%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: '94.2%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-body text-sm text-foreground">Inference Speed</span>
                      <span className="font-cta text-sm text-accent">15ms</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'impact':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="font-subheading text-lg text-foreground mb-4">Business Impact</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <h4 className="font-cta text-sm text-foreground">Quantitative Results</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <span className="font-body text-sm text-foreground">Cost Reduction</span>
                      <span className="font-cta text-sm text-success">35%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                      <span className="font-body text-sm text-foreground">Processing Speed</span>
                      <span className="font-cta text-sm text-primary">10x faster</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-accent/10 rounded-lg">
                      <span className="font-body text-sm text-foreground">User Satisfaction</span>
                      <span className="font-cta text-sm text-accent">92%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-cta text-sm text-foreground">Qualitative Benefits</h4>
                  <div className="space-y-3">
                    {[
                      'Improved decision-making accuracy',
                      'Enhanced user experience',
                      'Reduced manual intervention',
                      'Scalable solution architecture',
                      'Real-time insights generation'
                    ]?.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Icon name="TrendingUp" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="font-body text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6">
                <h4 className="font-cta text-sm text-foreground mb-4">Lessons Learned</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <p className="font-body text-sm text-muted-foreground">
                      Data quality and preprocessing significantly impact model performance more than complex algorithms.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <p className="font-body text-sm text-muted-foreground">
                      Early stakeholder involvement and clear communication are crucial for successful AI project deployment.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Lightbulb" size={16} className="text-accent mt-1 flex-shrink-0" />
                    <p className="font-body text-sm text-muted-foreground">
                      Continuous monitoring and model retraining ensure sustained performance in production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-intelligent-hover">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-headline text-xl text-foreground">{project?.title}</h2>
              <p className="font-body text-sm text-muted-foreground">Detailed Case Study</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Tabs */}
        <div className="border-b border-border">
          <div className="flex space-x-1 p-6">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-cta text-sm transition-intelligent ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {renderTabContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>Updated {project?.lastUpdated}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>{project?.github?.stars} stars</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="GitFork" size={14} />
              <span>{project?.github?.forks} forks</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              iconName="Github"
              iconPosition="left"
            >
              View Code
            </Button>
            <Button
              variant="default"
              iconName="ExternalLink"
              iconPosition="left"
              className="bg-accent hover:bg-accent/90"
            >
              Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;