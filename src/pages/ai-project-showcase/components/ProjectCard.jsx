import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDemo, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTechStackColor = (tech) => {
    const colors = {
      'TensorFlow': 'bg-orange-100 text-orange-800',
      'PyTorch': 'bg-red-100 text-red-800',
      'Scikit-learn': 'bg-blue-100 text-blue-800',
      'OpenCV': 'bg-green-100 text-green-800',
      'Transformers': 'bg-purple-100 text-purple-800',
      'FastAPI': 'bg-teal-100 text-teal-800',
      'Docker': 'bg-cyan-100 text-cyan-800',
      'AWS': 'bg-yellow-100 text-yellow-800',
      'React': 'bg-indigo-100 text-indigo-800',
      'Python': 'bg-emerald-100 text-emerald-800'
    };
    return colors?.[tech] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Machine Learning': 'Brain',
      'Natural Language Processing': 'MessageSquare',
      'Computer Vision': 'Eye',
      'MLOps': 'Settings'
    };
    return icons?.[category] || 'Code';
  };

  return (
    <div 
      className={`bg-card border border-border rounded-xl overflow-hidden shadow-intelligent transition-intelligent interactive-lift ${
        isHovered ? 'shadow-intelligent-hover' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover transition-intelligent"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Icon name={getCategoryIcon(project?.category)} size={14} className="text-primary" />
            <span className="text-xs font-cta text-foreground">{project?.category}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-3 py-1.5 rounded-full text-xs font-cta ${
            project?.status === 'Live' ?'bg-success text-success-foreground' 
              : project?.status === 'Demo' ?'bg-warning text-warning-foreground' :'bg-muted text-muted-foreground'
          }`}>
            {project?.status}
          </div>
        </div>

        {/* Live Demo Overlay */}
        {project?.hasLiveDemo && (
          <div className="absolute bottom-4 right-4">
            <Button
              variant="default"
              size="sm"
              iconName="Play"
              iconPosition="left"
              onClick={() => onViewDemo(project)}
              className="bg-accent hover:bg-accent/90"
            >
              Live Demo
            </Button>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4">
          <h3 className="font-headline text-lg text-foreground mb-2 line-clamp-2">
            {project?.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground line-clamp-3">
            {project?.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.techStack?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 rounded-md text-xs font-cta ${getTechStackColor(tech)}`}
              >
                {tech}
              </span>
            ))}
            {project?.techStack?.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs font-cta bg-muted text-muted-foreground">
                +{project?.techStack?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="font-headline text-lg text-primary">{project?.metrics?.accuracy}</div>
            <div className="font-body text-xs text-muted-foreground">Accuracy</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-lg text-secondary">{project?.metrics?.performance}</div>
            <div className="font-body text-xs text-muted-foreground">Performance</div>
          </div>
          <div className="text-center">
            <div className="font-headline text-lg text-accent">{project?.metrics?.impact}</div>
            <div className="font-body text-xs text-muted-foreground">Impact</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} />
              <span>{project?.github?.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="GitFork" size={14} />
              <span>{project?.github?.forks}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>{project?.lastUpdated}</span>
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            iconName="ExternalLink"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
          >
            Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;