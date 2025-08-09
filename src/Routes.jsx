import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import NeuralLandingExperience from './pages/neural-landing-experience';
import AdminCommandCenter from './pages/admin-command-center';
import ProfessionalIdentityHub from './pages/professional-identity-hub';
import ExperienceTimeline from './pages/experience-timeline';
import AIProjectShowcase from './pages/ai-project-showcase';
import SkillsMatrixVisualization from './pages/skills-matrix-visualization';
import CertificationsGallery from './pages/certifications-gallery';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<NeuralLandingExperience />} />
        <Route path="/neural-landing-experience" element={<NeuralLandingExperience />} />
        <Route path="/admin-command-center" element={<AdminCommandCenter />} />
        <Route path="/professional-identity-hub" element={<ProfessionalIdentityHub />} />
        <Route path="/experience-timeline" element={<ExperienceTimeline />} />
        <Route path="/ai-project-showcase" element={<AIProjectShowcase />} />
        <Route path="/skills-matrix-visualization" element={<SkillsMatrixVisualization />} />
        <Route path="/skill-matrix-visualization" element={<SkillsMatrixVisualization />} />
        <Route path="/certifications-gallery" element={<CertificationsGallery />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
