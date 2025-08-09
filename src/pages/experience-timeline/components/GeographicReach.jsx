import React from 'react';
import Icon from '../../../components/AppIcon';

const GeographicReach = ({ projects }) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
          <Icon name="Globe" size={20} color="white" />
        </div>
        <div>
          <h3 className="font-headline text-lg text-card-foreground">Global Project Reach</h3>
          <p className="text-muted-foreground text-sm font-body">International impact across continents</p>
        </div>
      </div>
      {/* Map Container */}
      <div className="relative h-64 bg-muted rounded-lg overflow-hidden mb-6">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Global Project Locations"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=33.9716,-6.8498&z=2&output=embed"
          className="border-0"
        />
        
        {/* Overlay with project markers */}
        <div className="absolute inset-0 pointer-events-none">
          {projects?.map((project, index) => (
            <div 
              key={index}
              className="absolute w-3 h-3 bg-accent rounded-full neural-pulse"
              style={{ 
                left: `${project?.mapPosition?.x}%`, 
                top: `${project?.mapPosition?.y}%` 
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* Project List */}
      <div className="space-y-3">
        {projects?.map((project, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <Icon name="MapPin" size={14} color="white" />
              </div>
              <div>
                <p className="font-cta text-sm text-card-foreground">{project?.location}</p>
                <p className="text-xs text-muted-foreground">{project?.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-cta text-sm text-primary">{project?.projectCount} projects</p>
              <p className="text-xs text-muted-foreground">{project?.timeframe}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Statistics */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <p className="font-headline text-2xl text-primary">12</p>
          <p className="text-xs text-muted-foreground font-body">Countries</p>
        </div>
        <div className="text-center">
          <p className="font-headline text-2xl text-secondary">28</p>
          <p className="text-xs text-muted-foreground font-body">Cities</p>
        </div>
        <div className="text-center">
          <p className="font-headline text-2xl text-accent">45</p>
          <p className="text-xs text-muted-foreground font-body">Projects</p>
        </div>
      </div>
    </div>
  );
};

export default GeographicReach;