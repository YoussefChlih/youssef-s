import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useI18n } from '../utils/i18n.jsx';

// Maps pathnames to i18n keys
const titleMap = {
  '/': 'pages.home.title',
  '/neural-landing-experience': 'pages.home.title',
  '/professional-identity-hub': 'pages.pih.title',
  '/ai-project-showcase': 'pages.ai.title',
  '/skills-matrix-visualization': 'pages.skills.title',
  '/certifications-gallery': 'pages.certs.title',
  '/experience-timeline': 'pages.exp.title',
  '/admin-command-center': 'pages.admin.title',
};

export default function TitleManager() {
  const { pathname } = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    const key = titleMap[pathname] || 'pages.home.title';
    const title = t(key);
    if (title) {
      document.title = `${title} - Youssef CHLIH`;
    }
  }, [pathname, t]);

  return null;
}
