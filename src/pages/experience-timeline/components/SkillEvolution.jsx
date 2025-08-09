import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillEvolution = ({ skillData }) => {
  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
          <Icon name="TrendingUp" size={20} color="white" />
        </div>
        <div>
          <h3 className="font-headline text-lg text-card-foreground">Skill Evolution</h3>
          <p className="text-muted-foreground text-sm font-body">Technical growth over time</p>
        </div>
      </div>
      <div className="space-y-6">
        {skillData?.map((category, index) => (
          <div key={index}>
            <h4 className="font-subheading text-card-foreground mb-3 flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-primary" />
              <span>{category?.name}</span>
            </h4>
            
            <div className="space-y-3">
              {category?.skills?.map((skill, skillIndex) => (
                <div key={skillIndex} className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cta text-sm text-card-foreground">{skill?.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">{skill?.startYear}</span>
                      <Icon name="ArrowRight" size={12} className="text-muted-foreground" />
                      <span className="text-xs text-primary font-cta">{skill?.currentLevel}%</span>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill?.currentLevel}%` }}
                    ></div>
                  </div>
                  
                  {/* Milestones */}
                  <div className="flex justify-between mt-1">
                    {skill?.milestones?.map((milestone, milestoneIndex) => (
                      <div 
                        key={milestoneIndex}
                        className="relative"
                        style={{ left: `${milestone?.year}%` }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full -mt-1"></div>
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                          <span className="text-xs text-muted-foreground">{milestone?.event}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillEvolution;