import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const RealTimeMonitoring = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const systemMetrics = [
    {
      name: "Server Uptime",
      value: "99.9%",
      status: "healthy",
      icon: "Server",
      details: "24 days, 14 hours"
    },
    {
      name: "Response Time",
      value: "127ms",
      status: "healthy",
      icon: "Zap",
      details: "Average last 24h"
    },
    {
      name: "Core Web Vitals",
      value: "Good",
      status: "healthy",
      icon: "Gauge",
      details: "LCP: 1.2s, FID: 45ms"
    },
    {
      name: "Database Load",
      value: "23%",
      status: "warning",
      icon: "Database",
      details: "CPU usage normal"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "visitor",
      message: "New visitor from United States",
      timestamp: new Date(Date.now() - 120000),
      icon: "Users"
    },
    {
      id: 2,
      type: "contact",
      message: "Contact form submission received",
      timestamp: new Date(Date.now() - 300000),
      icon: "Mail"
    },
    {
      id: 3,
      type: "project",
      message: "AI Project Showcase page viewed",
      timestamp: new Date(Date.now() - 480000),
      icon: "Eye"
    },
    {
      id: 4,
      type: "security",
      message: "Security scan completed successfully",
      timestamp: new Date(Date.now() - 720000),
      icon: "Shield"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'error':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return 'CheckCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'error':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', { 
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getRelativeTime = (timestamp) => {
    const diff = Date.now() - timestamp?.getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-subheading text-foreground">Real-time Monitoring</h3>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="font-mono">{formatTime(currentTime)}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {systemMetrics?.map((metric, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
              <div className="p-2 bg-background rounded-lg">
                <Icon name={metric?.icon} size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-body-semibold text-foreground">{metric?.name}</h4>
                  <Icon 
                    name={getStatusIcon(metric?.status)} 
                    size={16} 
                    className={getStatusColor(metric?.status)} 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-headline text-foreground">{metric?.value}</span>
                  <span className="text-xs text-muted-foreground">{metric?.details}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-subheading text-foreground mb-4">Recent Activity</h4>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {recentActivity?.map((activity) => (
              <div key={activity?.id} className="flex items-start space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-intelligent">
                <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                  <Icon name={activity?.icon} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-body text-foreground">{activity?.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {getRelativeTime(activity?.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;