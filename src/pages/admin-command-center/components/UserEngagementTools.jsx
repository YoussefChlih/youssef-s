import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UserEngagementTools = () => {
  const [activeSection, setActiveSection] = useState('comments');

  const engagementSections = [
    { id: 'comments', label: 'Comments', icon: 'MessageSquare', count: 23 },
    { id: 'newsletter', label: 'Newsletter', icon: 'Mail', count: 1247 },
    { id: 'social', label: 'Social Media', icon: 'Share2', count: 8 },
    { id: 'chatbot', label: 'AI Chatbot', icon: 'Bot', count: 156 }
  ];

  const mockData = {
    comments: [
      {
        id: 1,
        author: "Sarah Johnson",
        email: "sarah.j@techcorp.com",
        content: "Excellent insights on AI implementation in Morocco. Would love to discuss potential collaboration opportunities.",
        post: "The Future of AI in Morocco\'s Tech Ecosystem",
        timestamp: new Date(Date.now() - 3600000),
        status: "pending"
      },
      {
        id: 2,
        author: "Ahmed El Mansouri",
        email: "ahmed.m@startup.ma",
        content: "Your approach to neural network optimization is fascinating. Could you share more details about the performance improvements?",
        post: "Neural Network Optimization Tool",
        timestamp: new Date(Date.now() - 7200000),
        status: "approved"
      }
    ],
    newsletter: [
      {
        id: 1,
        email: "tech.enthusiast@gmail.com",
        name: "Tech Enthusiast",
        subscribed: new Date(Date.now() - 86400000),
        status: "active",
        source: "Blog Post"
      },
      {
        id: 2,
        email: "developer@company.com",
        name: "John Developer",
        subscribed: new Date(Date.now() - 172800000),
        status: "active",
        source: "Project Showcase"
      }
    ],
    social: [
      {
        id: 1,
        platform: "LinkedIn",
        metric: "Profile Views",
        value: "2,341",
        change: "+12%",
        changeType: "positive"
      },
      {
        id: 2,
        platform: "GitHub",
        metric: "Repository Stars",
        value: "847",
        change: "+8%",
        changeType: "positive"
      },
      {
        id: 3,
        platform: "Twitter",
        metric: "Followers",
        value: "1,523",
        change: "+5%",
        changeType: "positive"
      }
    ],
    chatbot: [
      {
        id: 1,
        query: "What are your rates for AI consulting?",
        response: "Generated response about consulting services",
        timestamp: new Date(Date.now() - 1800000),
        satisfaction: "positive"
      },
      {
        id: 2,
        query: "Can you help with machine learning implementation?",
        response: "Detailed response about ML services",
        timestamp: new Date(Date.now() - 3600000),
        satisfaction: "positive"
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': case'active': case'positive':
        return 'bg-success/10 text-success border-success/20';
      case 'pending':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'rejected': case'inactive': case'negative':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'comments':
        return (
          <div className="space-y-4">
            {mockData?.comments?.map((comment) => (
              <div key={comment?.id} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h5 className="font-body-semibold text-foreground">{comment?.author}</h5>
                    <p className="text-sm text-muted-foreground">{comment?.email}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-cta border ${getStatusColor(comment?.status)}`}>
                    {comment?.status}
                  </span>
                </div>
                <p className="text-sm font-body text-foreground mb-3">{comment?.content}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>On: {comment?.post}</span>
                  <span>{formatDate(comment?.timestamp)}</span>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <Button variant="outline" size="sm" iconName="Check">Approve</Button>
                  <Button variant="outline" size="sm" iconName="X">Reject</Button>
                  <Button variant="ghost" size="sm" iconName="MessageCircle">Reply</Button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'newsletter':
        return (
          <div className="space-y-4">
            {mockData?.newsletter?.map((subscriber) => (
              <div key={subscriber?.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div>
                  <h5 className="font-body-semibold text-foreground">{subscriber?.name}</h5>
                  <p className="text-sm text-muted-foreground">{subscriber?.email}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Subscribed: {formatDate(subscriber?.subscribed)} • Source: {subscriber?.source}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-cta border ${getStatusColor(subscriber?.status)}`}>
                    {subscriber?.status}
                  </span>
                  <Button variant="ghost" size="sm" iconName="Mail">Send</Button>
                </div>
              </div>
            ))}
          </div>
        );

      case 'social':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockData?.social?.map((metric) => (
              <div key={metric?.id} className="p-4 bg-muted/50 rounded-lg text-center">
                <h5 className="font-body-semibold text-foreground mb-1">{metric?.platform}</h5>
                <p className="text-sm text-muted-foreground mb-3">{metric?.metric}</p>
                <p className="text-2xl font-headline text-foreground mb-2">{metric?.value}</p>
                <div className={`flex items-center justify-center space-x-1 ${
                  metric?.changeType === 'positive' ? 'text-success' : 'text-error'
                }`}>
                  <Icon name={metric?.changeType === 'positive' ? 'TrendingUp' : 'TrendingDown'} size={16} />
                  <span className="text-sm font-cta">{metric?.change}</span>
                </div>
              </div>
            ))}
          </div>
        );

      case 'chatbot':
        return (
          <div className="space-y-4">
            {mockData?.chatbot?.map((interaction) => (
              <div key={interaction?.id} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h5 className="font-body-semibold text-foreground mb-2">User Query:</h5>
                    <p className="text-sm font-body text-foreground mb-3 bg-background p-3 rounded-lg">
                      {interaction?.query}
                    </p>
                    <h5 className="font-body-semibold text-foreground mb-2">AI Response:</h5>
                    <p className="text-sm font-body text-muted-foreground bg-primary/5 p-3 rounded-lg">
                      {interaction?.response}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-cta border ${getStatusColor(interaction?.satisfaction)}`}>
                    {interaction?.satisfaction}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{formatDate(interaction?.timestamp)}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" iconName="Edit">Improve</Button>
                    <Button variant="ghost" size="sm" iconName="BarChart3">Analytics</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-intelligent">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-subheading text-foreground mb-4">User Engagement Tools</h3>
        <div className="flex space-x-1 bg-muted p-1 rounded-lg">
          {engagementSections?.map((section) => (
            <button
              key={section?.id}
              onClick={() => setActiveSection(section?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-cta text-sm transition-intelligent ${
                activeSection === section?.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={section?.icon} size={16} />
              <span>{section?.label}</span>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">
                {section?.count}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserEngagementTools;