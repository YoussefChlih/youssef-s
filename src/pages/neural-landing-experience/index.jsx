import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveProjectShowcase from './components/LiveProjectShowcase';
import SkillsMatrixVisualization from './components/SkillsMatrixVisualization';
import ExperienceTimeline from './components/ExperienceTimeline';
import AIAssistantChat from './components/AIAssistantChat';
import SocialProofSection from './components/SocialProofSection';
import Footer from './components/Footer';

const NeuralLandingExperience = () => {
  useEffect(() => {
    // Smooth scroll behavior for the page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup on unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Youssef CHLIH - AI Solutions Architect | Neural Landing Experience</title>
        <meta name="description" content="Transforming data into intelligent solutions. Youssef CHLIH is an AI Solutions Architect from Morocco specializing in machine learning, deep learning, and intelligent system architecture." />
        <meta name="keywords" content="AI, Machine Learning, Deep Learning, MLOps, Data Science, Morocco, TensorFlow, PyTorch, Python" />
        <meta property="og:title" content="Youssef CHLIH - AI Solutions Architect" />
        <meta property="og:description" content="Building tomorrow's AI systems with cutting-edge technology and practical business solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://youssefchlih.com/neural-landing-experience" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Youssef CHLIH - AI Solutions Architect" />
        <meta name="twitter:description" content="Transforming data into intelligent solutions with 5+ years of AI/ML expertise." />
        <link rel="canonical" href="https://youssefchlih.com/neural-landing-experience" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Section */}
          <HeroSection />

          {/* Live Project Showcase */}
          <LiveProjectShowcase />

          {/* Skills Matrix Visualization */}
          <SkillsMatrixVisualization />

          {/* Experience Timeline */}
          <ExperienceTimeline />

          {/* Social Proof Section */}
          <SocialProofSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* AI Assistant Chat */}
        <AIAssistantChat />
      </div>
    </>
  );
};

export default NeuralLandingExperience;