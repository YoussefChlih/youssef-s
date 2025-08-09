import React from 'react';
import Icon from '../../../components/AppIcon';

const ProjectStats = ({ projects }) => {
  const stats = {
    totalProjects: projects?.length,
    liveProjects: projects?.filter(p => p?.status === 'Live')?.length,
    totalStars: projects?.reduce((sum, p) => sum + parseInt(p?.github?.stars), 0),
    totalForks: projects?.reduce((sum, p) => sum + parseInt(p?.github?.forks), 0),
    categories: [...new Set(projects.map(p => p.category))]?.length,
    avgAccuracy: (projects?.reduce((sum, p) => sum + parseFloat(p?.metrics?.accuracy), 0) / projects?.length)?.toFixed(1)
  };

  const statItems = [
    {
      label: 'Total Projects',
      value: stats?.totalProjects,
      icon: 'Folder',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Live Projects',
      value: stats?.liveProjects,
      icon: 'Zap',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      label: 'GitHub Stars',
      value: stats?.totalStars,
      icon: 'Star',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Forks',
      value: stats?.totalForks,
      icon: 'GitFork',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      label: 'Categories',
      value: stats?.categories,
      icon: 'Grid3X3',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      label: 'Avg Accuracy',
      value: `${stats?.avgAccuracy}%`,
      icon: 'Target',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-intelligent">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline text-xl text-foreground">Portfolio Statistics</h2>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span>Real-time metrics</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statItems?.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-lg transition-intelligent hover:shadow-intelligent interactive-lift"
          >
            <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>
            <div className="font-headline text-2xl text-foreground mb-1">
              {stat?.value}
            </div>
            <div className="font-body text-xs text-muted-foreground">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
      {/* Additional Insights */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="font-headline text-lg text-primary mb-1">
              {Math.round((stats?.liveProjects / stats?.totalProjects) * 100)}%
            </div>
            <div className="font-body text-xs text-muted-foreground">
              Projects in Production
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline text-lg text-secondary mb-1">
              {(stats?.totalStars / stats?.totalProjects)?.toFixed(1)}
            </div>
            <div className="font-body text-xs text-muted-foreground">
              Avg Stars per Project
            </div>
          </div>
          <div className="text-center">
            <div className="font-headline text-lg text-accent mb-1">
              {new Date()?.getFullYear() - 2020}+
            </div>
            <div className="font-body text-xs text-muted-foreground">
              Years of Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;