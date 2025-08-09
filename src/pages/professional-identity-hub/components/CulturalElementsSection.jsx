import React from 'react';
import Icon from '../../../components/AppIcon';

const CulturalElementsSection = () => {
  const culturalValues = [
    {
      title: "التنوع في التفكير",
      titleEn: "Diversity in Thinking",
      description: "My Moroccan heritage brings a unique perspective to problem-solving, combining traditional wisdom with modern innovation.",
      icon: "Lightbulb",
      color: "from-accent to-primary"
    },
    {
      title: "الجسر الثقافي",
      titleEn: "Cultural Bridge",
      description: "Bridging Eastern and Western approaches to technology, creating solutions that work across cultural boundaries.",
      icon: "Bridge",
      color: "from-primary to-secondary"
    },
    {
      title: "الأخلاق في التكنولوجيا",
      titleEn: "Ethics in Technology",
      description: "Rooted in Islamic principles of justice and fairness, ensuring AI serves humanity with integrity and respect.",
      icon: "Shield",
      color: "from-secondary to-accent"
    }
  ];

  const languages = [
    {
      language: "العربية",
      languageEn: "Arabic",
      level: "Native",
      description: "Mother tongue - Deep cultural understanding",
      flag: "🇲🇦"
    },
    {
      language: "Français",
      languageEn: "French",
      level: "Fluent",
      description: "Professional proficiency - Business communication",
      flag: "🇫🇷"
    },
    {
      language: "English",
      languageEn: "English",
      level: "Fluent",
      description: "Technical expertise - International collaboration",
      flag: "🇺🇸"
    }
  ];

  const culturalInsights = [
    {
      title: "Global Perspective, Local Understanding",
      content: "Growing up in Morocco's multicultural environment taught me to appreciate diverse viewpoints while maintaining strong cultural roots. This perspective is invaluable when developing AI solutions for global markets."
    },
    {
      title: "Technology with Purpose",
      content: "In Moroccan culture, technology is seen as a tool to serve the community. This philosophy guides my approach to AI development - always asking how it can benefit society as a whole."
    },
    {
      title: "Collaborative Innovation",
      content: "The Moroccan tradition of collective problem-solving influences my collaborative approach to AI projects, bringing teams together across cultural and technical boundaries."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background moroccan-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            Cultural <span className="gradient-text">Heritage</span> in Tech
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            How my Moroccan roots and multicultural perspective shape my approach to AI development
          </p>
        </div>

        {/* Cultural Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {culturalValues?.map((value, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-intelligent hover:shadow-intelligent-hover transition-intelligent">
              <div className={`w-16 h-16 bg-gradient-to-br ${value?.color} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                <Icon name={value?.icon} size={28} className="text-white" />
              </div>
              
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-headline text-foreground mb-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {value?.title}
                  </h3>
                  <h4 className="text-lg font-cta text-primary">
                    {value?.titleEn}
                  </h4>
                </div>
                
                <p className="text-muted-foreground font-body leading-relaxed">
                  {value?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Language Proficiency */}
        <div className="bg-card rounded-2xl p-8 shadow-intelligent mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-headline text-foreground mb-2">
              Multilingual Communication
            </h3>
            <p className="text-muted-foreground font-body">
              Breaking down language barriers in global AI collaboration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {languages?.map((lang, index) => (
              <div key={index} className="text-center p-6 border border-border rounded-lg hover:bg-muted/50 transition-intelligent">
                <div className="text-4xl mb-4">{lang?.flag}</div>
                <div className="space-y-2">
                  <h4 className="text-lg font-headline text-foreground" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {lang?.language}
                  </h4>
                  <h5 className="font-cta text-primary">{lang?.languageEn}</h5>
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-cta">
                    {lang?.level}
                  </div>
                  <p className="text-sm text-muted-foreground font-body">
                    {lang?.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Insights */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-headline text-foreground mb-2">
              Cultural Insights in AI Development
            </h3>
            <p className="text-muted-foreground font-body">
              How cultural perspective enhances technical innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {culturalInsights?.map((insight, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-intelligent">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Compass" size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-headline text-foreground mb-3">
                      {insight?.title}
                    </h4>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {insight?.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Moroccan Design Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-xl shadow-intelligent">
            <div className="w-16 h-16 bg-gradient-to-br from-accent via-primary to-secondary rounded-lg flex items-center justify-center">
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-headline text-foreground">
                المغرب - Morocco
              </h4>
              <p className="text-muted-foreground font-body">
                Where tradition meets innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalElementsSection;