import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ achievements }) => {
  const getBadgeColor = (type) => {
    switch (type) {
      case 'milestone': return 'from-primary to-secondary';
      case 'recognition': return 'from-accent to-warning';
      case 'technical': return 'from-secondary to-primary';
      case 'leadership': return 'from-warning to-accent';
      default: return 'from-primary to-secondary';
    }
  };

  const getBadgeIcon = (type) => {
    switch (type) {
      case 'milestone': return 'Target';
      case 'recognition': return 'Award';
      case 'technical': return 'Code';
      case 'leadership': return 'Users';
      default: return 'Star';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
          <Icon name="Award" size={20} color="white" />
        </div>
        <div>
          <h3 className="font-headline text-lg text-card-foreground">Achievement Badges</h3>
          <p className="text-muted-foreground text-sm font-body">Career milestones and recognitions</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements?.map((achievement, index) => (
          <div 
            key={index}
            className="group relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 border border-border hover:shadow-intelligent-hover transition-intelligent cursor-pointer"
          >
            {/* Badge Icon */}
            <div className={`w-12 h-12 bg-gradient-to-br ${getBadgeColor(achievement?.type)} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-intelligent`}>
              <Icon name={getBadgeIcon(achievement?.type)} size={20} color="white" />
            </div>

            {/* Achievement Details */}
            <div>
              <h4 className="font-cta text-card-foreground mb-1">{achievement?.title}</h4>
              <p className="text-muted-foreground text-sm font-body mb-2">{achievement?.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-cta">{achievement?.date}</span>
                {achievement?.verified && (
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-xs text-success font-cta">Verified</span>
                  </div>
                )}
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-intelligent"></div>
          </div>
        ))}
      </div>
      {/* Achievement Statistics */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Icon name="Target" size={16} className="text-primary" />
              <span className="font-headline text-lg text-primary">8</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">Milestones</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Icon name="Award" size={16} className="text-accent" />
              <span className="font-headline text-lg text-accent">5</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">Awards</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Icon name="Code" size={16} className="text-secondary" />
              <span className="font-headline text-lg text-secondary">12</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">Technical</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <Icon name="Users" size={16} className="text-warning" />
              <span className="font-headline text-lg text-warning">6</span>
            </div>
            <p className="text-xs text-muted-foreground font-body">Leadership</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementBadges;