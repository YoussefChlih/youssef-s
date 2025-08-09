import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineNode = ({ experience, isLast, onProjectView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-secondary opacity-30"></div>
      )}
      {/* Timeline Node */}
      <div className="relative flex items-start space-x-6">
        {/* Node Icon */}
        <div className="relative flex-shrink-0">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-intelligent transition-intelligent ${
            experience?.type === 'education' ?'bg-gradient-to-br from-accent to-warning' :'bg-gradient-to-br from-primary to-secondary'
          }`}>
            <Icon 
              name={experience?.type === 'education' ? 'GraduationCap' : 'Briefcase'} 
              size={20} 
              color="white" 
            />
          </div>
          {experience?.featured && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full neural-pulse"></div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="bg-card border border-border rounded-lg shadow-intelligent hover:shadow-intelligent-hover transition-intelligent">
            {/* Header */}
            <div className="p-6 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-headline text-lg text-card-foreground">
                      {experience?.title}
                    </h3>
                    {experience?.badges?.map((badge, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs font-cta rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-2">
                      <Icon name="Building" size={16} />
                      <span className="font-body-semibold">{experience?.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>{experience?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>{experience?.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {experience?.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right"
                  onClick={toggleExpanded}
                  className="ml-4"
                >
                  {isExpanded ? 'Less' : 'More'}
                </Button>
              </div>
            </div>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="p-6 space-y-6">
                {/* Key Responsibilities */}
                {experience?.responsibilities && (
                  <div>
                    <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                      <Icon name="CheckCircle" size={18} className="text-success" />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {experience?.responsibilities?.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="ArrowRight" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground font-body">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements */}
                {experience?.achievements && (
                  <div>
                    <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                      <Icon name="Trophy" size={18} className="text-accent" />
                      <span>Key Achievements</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {experience?.achievements?.map((achievement, index) => (
                        <div key={index} className="bg-muted/50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon name="TrendingUp" size={16} className="text-success" />
                            <span className="font-cta text-sm text-card-foreground">{achievement?.metric}</span>
                          </div>
                          <p className="text-muted-foreground text-sm font-body">{achievement?.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                {experience?.technologies && (
                  <div>
                    <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                      <Icon name="Code" size={18} className="text-secondary" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience?.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-cta rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Projects */}
                {experience?.projects && (
                  <div>
                    <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                      <Icon name="Folder" size={18} className="text-primary" />
                      <span>Notable Projects</span>
                    </h4>
                    <div className="space-y-3">
                      {experience?.projects?.map((project, index) => (
                        <div key={index} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-intelligent">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h5 className="font-cta text-card-foreground mb-1">{project?.name}</h5>
                              <p className="text-muted-foreground text-sm font-body mb-2">{project?.description}</p>
                              {project?.impact && (
                                <div className="flex items-center space-x-2 text-sm">
                                  <Icon name="BarChart3" size={14} className="text-success" />
                                  <span className="text-success font-cta">{project?.impact}</span>
                                </div>
                              )}
                            </div>
                            {project?.viewable && (
                              <Button
                                variant="outline"
                                size="sm"
                                iconName="ExternalLink"
                                iconPosition="right"
                                onClick={() => onProjectView(project)}
                                className="ml-4"
                              >
                                View
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonial */}
                {experience?.testimonial && (
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border-l-4 border-primary">
                    <div className="flex items-start space-x-3">
                      <Icon name="Quote" size={20} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-card-foreground font-body italic mb-2">"{experience?.testimonial?.quote}"</p>
                        <div className="flex items-center space-x-3">
                          <Image 
                            src={experience?.testimonial?.avatar} 
                            alt={experience?.testimonial?.author}
                            className="w-8 h-8 rounded-full"
                          />
                          <div>
                            <p className="font-cta text-sm text-card-foreground">{experience?.testimonial?.author}</p>
                            <p className="text-xs text-muted-foreground">{experience?.testimonial?.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineNode;