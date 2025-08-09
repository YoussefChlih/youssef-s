import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      {/* Modal */}
      <div className="relative bg-card border border-border rounded-lg shadow-intelligent-hover max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Folder" size={20} color="white" />
            </div>
            <div>
              <h2 className="font-headline text-xl text-card-foreground">{project?.name}</h2>
              <p className="text-muted-foreground text-sm font-body">{project?.company} • {project?.year}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="hover:bg-destructive/10 hover:text-destructive"
          />
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="p-6 space-y-6">
            {/* Project Image */}
            {project?.image && (
              <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                <Image 
                  src={project?.image} 
                  alt={project?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="font-subheading text-card-foreground mb-3">Project Overview</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{project?.fullDescription}</p>
            </div>

            {/* Technical Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technologies */}
              <div>
                <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Code" size={18} className="text-secondary" />
                  <span>Technologies Used</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm font-cta rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div>
                <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                  <Icon name="BarChart3" size={18} className="text-success" />
                  <span>Key Metrics</span>
                </h4>
                <div className="space-y-2">
                  {project?.metrics?.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-muted-foreground text-sm font-body">{metric?.label}</span>
                      <span className="text-success font-cta text-sm">{metric?.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            {project?.challenges && (
              <div>
                <h3 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={18} className="text-accent" />
                  <span>Challenges & Solutions</span>
                </h3>
                <div className="space-y-4">
                  {project?.challenges?.map((item, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-4">
                      <h5 className="font-cta text-card-foreground mb-2 flex items-center space-x-2">
                        <Icon name="AlertCircle" size={16} className="text-warning" />
                        <span>Challenge</span>
                      </h5>
                      <p className="text-muted-foreground text-sm font-body mb-3">{item?.challenge}</p>
                      <h5 className="font-cta text-card-foreground mb-2 flex items-center space-x-2">
                        <Icon name="CheckCircle" size={16} className="text-success" />
                        <span>Solution</span>
                      </h5>
                      <p className="text-muted-foreground text-sm font-body">{item?.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team & Role */}
            {project?.team && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                    <Icon name="Users" size={18} className="text-primary" />
                    <span>Team Size</span>
                  </h4>
                  <p className="text-muted-foreground font-body">{project?.team?.size} members</p>
                </div>
                <div>
                  <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
                    <Icon name="User" size={18} className="text-primary" />
                    <span>My Role</span>
                  </h4>
                  <p className="text-muted-foreground font-body">{project?.team?.role}</p>
                </div>
              </div>
            )}

            {/* Links */}
            {(project?.links?.demo || project?.links?.code || project?.links?.documentation) && (
              <div>
                <h3 className="font-subheading text-card-foreground mb-3">Project Links</h3>
                <div className="flex flex-wrap gap-3">
                  {project?.links?.demo && (
                    <Button
                      variant="default"
                      iconName="ExternalLink"
                      iconPosition="left"
                      onClick={() => window.open(project?.links?.demo, '_blank')}
                    >
                      Live Demo
                    </Button>
                  )}
                  {project?.links?.code && (
                    <Button
                      variant="outline"
                      iconName="Github"
                      iconPosition="left"
                      onClick={() => window.open(project?.links?.code, '_blank')}
                    >
                      Source Code
                    </Button>
                  )}
                  {project?.links?.documentation && (
                    <Button
                      variant="secondary"
                      iconName="FileText"
                      iconPosition="left"
                      onClick={() => window.open(project?.links?.documentation, '_blank')}
                    >
                      Documentation
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;