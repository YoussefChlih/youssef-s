import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SecurityMonitoring = () => {
  const securityMetrics = [
    {
      title: "Login Attempts",
      value: "247",
      change: "+12%",
      changeType: "neutral",
      icon: "LogIn",
      color: "primary"
    },
    {
      title: "Blocked Threats",
      value: "18",
      change: "-23%",
      changeType: "positive",
      icon: "Shield",
      color: "success"
    },
    {
      title: "Form Submissions",
      value: "89",
      change: "+8%",
      changeType: "positive",
      icon: "FileText",
      color: "secondary"
    },
    {
      title: "Security Score",
      value: "98%",
      change: "+2%",
      changeType: "positive",
      icon: "Award",
      color: "success"
    }
  ];

  const securityEvents = [
    {
      id: 1,
      type: "warning",
      title: "Multiple failed login attempts",
      description: "IP: 192.168.1.100 attempted login 5 times",
      timestamp: new Date(Date.now() - 1800000),
      action: "Blocked",
      severity: "medium"
    },
    {
      id: 2,
      type: "info",
      title: "Security scan completed",
      description: "Automated security scan found no vulnerabilities",
      timestamp: new Date(Date.now() - 3600000),
      action: "Completed",
      severity: "low"
    },
    {
      id: 3,
      type: "success",
      title: "SSL certificate renewed",
      description: "SSL certificate automatically renewed for 1 year",
      timestamp: new Date(Date.now() - 7200000),
      action: "Renewed",
      severity: "low"
    },
    {
      id: 4,
      type: "warning",
      title: "Suspicious form submission",
      description: "Contact form submitted with potential spam content",
      timestamp: new Date(Date.now() - 10800000),
      action: "Quarantined",
      severity: "medium"
    }
  ];

  const securitySettings = [
    {
      name: "Two-Factor Authentication",
      status: "enabled",
      description: "Additional security layer for admin access"
    },
    {
      name: "Rate Limiting",
      status: "enabled",
      description: "Prevents brute force attacks"
    },
    {
      name: "IP Whitelist",
      status: "disabled",
      description: "Restrict access to specific IP addresses"
    },
    {
      name: "Auto Backup",
      status: "enabled",
      description: "Daily automated backups"
    }
  ];

  const getEventIcon = (type) => {
    switch (type) {
      case 'warning':
        return 'AlertTriangle';
      case 'success':
        return 'CheckCircle';
      case 'error':
        return 'XCircle';
      default:
        return 'Info';
    }
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'warning':
        return 'text-warning';
      case 'success':
        return 'text-success';
      case 'error':
        return 'text-error';
      default:
        return 'text-primary';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'bg-error/10 text-error border-error/20';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'low':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getMetricColor = (color) => {
    switch (color) {
      case 'success':
        return 'bg-success/10 text-success border-success/20';
      case 'warning':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'error':
        return 'bg-error/10 text-error border-error/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const formatTime = (date) => {
    return date?.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {securityMetrics?.map((metric, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-4 shadow-intelligent">
            <div className="flex items-center justify-between mb-3">
              <div className={`p-2 rounded-lg ${getMetricColor(metric?.color)}`}>
                <Icon name={metric?.icon} size={20} />
              </div>
              <div className={`flex items-center space-x-1 ${
                metric?.changeType === 'positive' ? 'text-success' : 
                metric?.changeType === 'negative' ? 'text-error' : 'text-muted-foreground'
              }`}>
                <Icon 
                  name={metric?.changeType === 'positive' ? 'TrendingUp' : 
                        metric?.changeType === 'negative' ? 'TrendingDown' : 'Minus'} 
                  size={14} 
                />
                <span className="text-xs font-cta">{metric?.change}</span>
              </div>
            </div>
            <h3 className="text-xl font-headline text-foreground mb-1">{metric?.value}</h3>
            <p className="text-sm text-muted-foreground font-body">{metric?.title}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security Events */}
        <div className="bg-card border border-border rounded-lg shadow-intelligent">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-subheading text-foreground">Security Events</h3>
              <Button variant="outline" size="sm" iconName="RefreshCw">
                Refresh
              </Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {securityEvents?.map((event) => (
                <div key={event.id} className="flex items-start space-x-3 p-3 hover:bg-muted/50 rounded-lg transition-intelligent">
                  <div className={`p-1.5 rounded-lg ${getEventColor(event.type)}`}>
                    <Icon name={getEventIcon(event.type)} size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-body-semibold text-foreground text-sm">{event.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-cta border ${getSeverityColor(event.severity)}`}>
                        {event.severity}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatTime(event.timestamp)}</span>
                      <span className="font-cta">Action: {event.action}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-card border border-border rounded-lg shadow-intelligent">
          <div className="p-6 border-b border-border">
            <h3 className="text-lg font-subheading text-foreground">Security Settings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {securitySettings?.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-body-semibold text-foreground mb-1">{setting?.name}</h4>
                    <p className="text-sm text-muted-foreground">{setting?.description}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-cta border ${
                      setting?.status === 'enabled' ?'bg-success/10 text-success border-success/20' :'bg-muted text-muted-foreground border-border'
                    }`}>
                      {setting?.status}
                    </span>
                    <Button variant="ghost" size="sm" iconName="Settings">
                      Configure
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center space-x-3">
                <Button variant="default" iconName="Shield" iconPosition="left">
                  Run Security Scan
                </Button>
                <Button variant="outline" iconName="Download" iconPosition="left">
                  Export Logs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityMonitoring;