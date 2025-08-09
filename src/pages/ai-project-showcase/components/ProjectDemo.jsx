import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProjectDemo = ({ project, onClose }) => {
  const [demoStep, setDemoStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [demoResult, setDemoResult] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleDemoAction = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults = {
        'Smart Healthcare Diagnostics': {
          prediction: 'Benign',
          confidence: '94.7%',
          details: 'Based on the uploaded medical image, the AI model predicts a benign condition with high confidence.'
        },
        'Financial Fraud Detection': {
          prediction: 'Low Risk',
          confidence: '87.3%',
          details: 'Transaction pattern analysis indicates low fraud probability based on historical data.'
        },
        'E-commerce Recommendation Engine': {
          prediction: 'Recommended Products',
          confidence: '91.2%',
          details: 'Based on user behavior and preferences, here are the top product recommendations.'
        }
      };
      
      setDemoResult(mockResults?.[project?.title] || {
        prediction: 'Analysis Complete',
        confidence: '89.5%',
        details: 'AI model has successfully processed the input and generated results.'
      });
      setIsLoading(false);
    }, 2000);
  };

  const resetDemo = () => {
    setDemoStep(0);
    setDemoResult(null);
    setUserInput('');
  };

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-intelligent-hover">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Play" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="font-headline text-xl text-foreground">{project?.title}</h2>
              <p className="font-body text-sm text-muted-foreground">Interactive Demo</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            iconName="X"
            onClick={onClose}
          />
        </div>

        {/* Demo Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demo Interface */}
            <div className="space-y-6">
              <div>
                <h3 className="font-subheading text-lg text-foreground mb-4">Try It Yourself</h3>
                
                {project?.category === 'Computer Vision' && (
                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="font-body text-sm text-muted-foreground mb-4">
                        Upload an image to analyze
                      </p>
                      <Button variant="outline" iconName="Image" iconPosition="left">
                        Choose Image
                      </Button>
                    </div>
                  </div>
                )}

                {project?.category === 'Natural Language Processing' && (
                  <div className="space-y-4">
                    <textarea
                      value={userInput}
                      onChange={(e) => setUserInput(e?.target?.value)}
                      placeholder="Enter text to analyze..."
                      className="w-full h-32 px-4 py-3 bg-background border border-border rounded-lg font-body text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
                    />
                  </div>
                )}

                {project?.category === 'Machine Learning' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        placeholder="Feature 1"
                        className="px-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
                      />
                      <input
                        type="number"
                        placeholder="Feature 2"
                        className="px-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="number"
                        placeholder="Feature 3"
                        className="px-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
                      />
                      <input
                        type="number"
                        placeholder="Feature 4"
                        className="px-4 py-3 bg-background border border-border rounded-lg font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-intelligent"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-4">
                  <Button
                    variant="default"
                    iconName="Zap"
                    iconPosition="left"
                    onClick={handleDemoAction}
                    loading={isLoading}
                    className="bg-accent hover:bg-accent/90"
                  >
                    Run Analysis
                  </Button>
                  <Button
                    variant="outline"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={resetDemo}
                  >
                    Reset
                  </Button>
                </div>
              </div>

              {/* Results */}
              {demoResult && (
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-subheading text-lg text-foreground mb-4">Results</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">Prediction:</span>
                      <span className="font-cta text-sm text-foreground">{demoResult?.prediction}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-muted-foreground">Confidence:</span>
                      <span className="font-cta text-sm text-success">{demoResult?.confidence}</span>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="font-body text-sm text-muted-foreground">
                        {demoResult?.details}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-subheading text-lg text-foreground mb-4">About This Project</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {project?.description}
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-cta text-sm text-foreground mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project?.features?.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-cta text-sm text-foreground mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.techStack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-cta"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-cta text-sm text-foreground mb-2">Performance Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-headline text-lg text-primary">{project?.metrics?.accuracy}</div>
                        <div className="font-body text-xs text-muted-foreground">Accuracy</div>
                      </div>
                      <div className="text-center p-3 bg-muted/50 rounded-lg">
                        <div className="font-headline text-lg text-secondary">{project?.metrics?.performance}</div>
                        <div className="font-body text-xs text-muted-foreground">Speed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  iconName="Github"
                  iconPosition="left"
                  className="flex-1"
                >
                  View Code
                </Button>
                <Button
                  variant="outline"
                  iconName="ExternalLink"
                  iconPosition="left"
                  className="flex-1"
                >
                  Live Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDemo;