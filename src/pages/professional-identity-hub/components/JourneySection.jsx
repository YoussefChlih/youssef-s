import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const JourneySection = () => {
  const [activeSection, setActiveSection] = useState('journey');

  const sections = [
    {
      id: 'journey',
      title: 'The Journey',
      icon: 'MapPin',
      content: `My path into artificial intelligence began in the bustling streets of Casablanca, where I first encountered the power of technology to bridge cultural and linguistic barriers. Growing up in Morocco, I witnessed firsthand how technology could connect diverse communities and solve real-world problems.\n\nThis early exposure to multicultural environments shaped my approach to AI development - always considering the human element behind every algorithm. My journey took me from local tech meetups in Rabat to international conferences in Silicon Valley, each step reinforcing my belief that the best AI solutions come from diverse perspectives and inclusive thinking.\n\nToday, I bring this unique worldview to every project, ensuring that AI solutions are not just technically sound but culturally aware and globally applicable.`
    },
    {
      id: 'philosophy',
      title: 'Technical Philosophy',
      icon: 'Lightbulb',
      content: `My technical philosophy centers on "Ethical AI with Global Impact" - the belief that artificial intelligence should enhance human capabilities while respecting cultural diversity and individual privacy. I advocate for transparent algorithms, explainable AI decisions, and inclusive dataset practices.\n\nI believe in the power of practical implementation over theoretical perfection. Every AI model I develop undergoes rigorous testing not just for accuracy, but for fairness, bias detection, and real-world applicability. My approach combines cutting-edge research with pragmatic business solutions.\n\nSustainability is also core to my philosophy. I design AI systems that are computationally efficient, environmentally conscious, and built for long-term scalability. Technology should serve humanity, not the other way around.`
    },
    {
      id: 'cultural',
      title: 'Cultural Bridge',
      icon: 'Bridge',
      content: `Being Moroccan in the global tech industry has given me a unique perspective on how cultural context influences technology adoption and user behavior. I've learned to design AI systems that work across different cultural frameworks, languages, and social contexts.\n\nMy multilingual abilities (Arabic, French, English) have proven invaluable in international projects, allowing me to understand nuanced requirements and communicate complex technical concepts across cultural boundaries. This has led to more inclusive AI solutions that serve diverse global audiences.\n\nI actively promote diversity in AI development teams, knowing that varied perspectives lead to more robust and fair algorithms. My Moroccan heritage brings a different lens to problem-solving, often revealing blind spots that homogeneous teams might miss.`
    },
    {
      id: 'vision',title: 'Vision Forward',icon: 'Telescope',
      content: `I envision a future where AI serves as a universal translator - not just of languages, but of cultures, ideas, and human experiences. My goal is to develop AI systems that can understand and respect cultural nuances while solving global challenges like climate change, healthcare accessibility, and educational equity.\n\nThe next decade will see AI become more democratized and accessible. I'm working towards making advanced AI tools available to smaller businesses and developing nations, ensuring that the benefits of artificial intelligence reach every corner of the globe.\n\nMy ultimate vision is to establish Morocco and North Africa as a significant hub for AI innovation, creating opportunities for local talent while contributing to the global AI ecosystem. Technology should lift all boats, not just those in traditional tech centers.`
    }
  ];

  const activeContent = sections?.find(section => section?.id === activeSection);

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-foreground mb-4">
            My Professional <span className="gradient-text">Story</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            Discover the experiences, philosophies, and cultural influences that shape my approach to AI development
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {sections?.map((section) => (
                <button
                  key={section?.id}
                  onClick={() => setActiveSection(section?.id)}
                  className={`w-full flex items-center space-x-3 p-4 rounded-lg text-left transition-intelligent interactive-lift ${
                    activeSection === section?.id
                      ? 'bg-primary text-primary-foreground shadow-intelligent'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={section?.icon} size={20} />
                  <span className="font-cta">{section?.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl p-8 shadow-intelligent">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name={activeContent?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-headline text-foreground">
                  {activeContent?.title}
                </h3>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {activeContent?.content?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground font-body leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;