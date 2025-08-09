import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      certs: 'Certifications',
      exp: 'Experience',
      admin: 'Admin'
    },
    cta: {
      schedule: 'Schedule Call',
      getStarted: 'Get Started'
    },
    pages: {
      home: { title: 'Home' },
      pih: {
        title: 'Professional Identity Hub',
        meta: "Discover Youssef CHLIH's journey as an AI professional bridging Moroccan heritage with global innovation."
      },
      ai: { title: 'AI Project Showcase' },
      skills: { title: 'Skills Matrix' },
      certs: { title: 'Certifications Gallery' },
      exp: { title: 'Experience Timeline' },
      admin: { title: 'Admin Command Center' }
    },
    skillsPage: {
      title: 'Skills Matrix Visualization',
      subtitle: 'Comprehensive technical competency mapping with real-time proficiency tracking, certification status, and project metrics.',
      allCategories: 'All Categories',
      quickStats: {
        totalSkills: 'Total Skills',
        certifications: 'Certifications',
        avgProficiency: 'Avg Proficiency',
        lastUpdated: 'Last Updated'
      },
      certsTitle: 'Professional Certifications',
      certsSubtitle: 'Industry-recognized certifications demonstrating expertise across AI, Data Science, Cloud Technologies, and Development methodologies.',
      learningTitle: 'Continuous Learning Journey',
      learningSubtitle: 'My skills are continuously evolving through hands-on projects, certifications, and real-world applications.',
      buttons: {
        viewProjects: 'View Projects',
        viewCerts: 'View Certifications',
        experienceTimeline: 'Experience Timeline',
        aboutMe: 'About Me'
      }
  }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      skills: 'Compétences',
      certs: 'Certifications',
      exp: 'Expérience',
      admin: 'Admin'
    },
    cta: {
      schedule: 'Planifier un appel',
      getStarted: 'Commencer'
    },
    pages: {
      home: { title: 'Accueil' },
      pih: {
        title: 'Hub d’Identité Professionnelle',
        meta: "Découvrez le parcours de Youssef CHLIH, professionnel de l'IA, reliant l'héritage marocain à l'innovation mondiale."
      },
      ai: { title: 'Vitrine des Projets IA' },
      skills: { title: 'Matrice de Compétences' },
      certs: { title: 'Galerie des Certifications' },
      exp: { title: 'Parcours d’Expérience' },
      admin: { title: 'Centre de Commande Admin' }
    },
    skillsPage: {
      title: 'Visualisation de la Matrice de Compétences',
      subtitle: 'Cartographie des compétences techniques avec suivi en temps réel, certifications et métriques de projets.',
      allCategories: 'Toutes les catégories',
      quickStats: {
        totalSkills: 'Compétences totales',
        certifications: 'Certifications',
        avgProficiency: 'Moy. de maîtrise',
        lastUpdated: 'Dernière mise à jour'
      },
      certsTitle: 'Certifications Professionnelles',
      certsSubtitle: "Certifications reconnues démontrant l'expertise en IA, Data Science, Cloud et Développement.",
      learningTitle: 'Parcours d’Apprentissage Continu',
      learningSubtitle: 'Mes compétences évoluent grâce aux projets pratiques, certifications et applications réelles.',
      buttons: {
        viewProjects: 'Voir les Projets',
        viewCerts: 'Voir les Certifications',
        experienceTimeline: 'Parcours d’Expérience',
        aboutMe: 'À propos de moi'
      }
  }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'حول',
      projects: 'المشاريع',
      skills: 'المهارات',
      certs: 'الشهادات',
      exp: 'الخبرات',
      admin: 'الإدارة'
    },
    cta: {
      schedule: 'حجز مكالمة',
      getStarted: 'ابدأ الآن'
    },
    pages: {
      home: { title: 'الرئيسية' },
      pih: {
        title: 'بوابة الهوية المهنية',
        meta: 'اكتشف مسيرة يوسف شليه في الذكاء الاصطناعي، يجمع بين التراث المغربي والابتكار العالمي.'
      },
      ai: { title: 'عرض مشروعات الذكاء الاصطناعي' },
      skills: { title: 'مصفوفة المهارات' },
      certs: { title: 'معرض الشهادات' },
      exp: { title: 'الخبرات الزمنية' },
      admin: { title: 'مركز التحكم الإداري' }
    },
    skillsPage: {
      title: 'تصور مصفوفة المهارات',
      subtitle: 'خرائط الكفاءات التقنية مع تتبع فوري لمستوى الإتقان، حالة الشهادات، ومؤشرات المشاريع.',
      allCategories: 'كل الفئات',
      quickStats: {
        totalSkills: 'إجمالي المهارات',
        certifications: 'الشهادات',
        avgProficiency: 'متوسط الإتقان',
        lastUpdated: 'آخر تحديث'
      },
      certsTitle: 'الشهادات المهنية',
      certsSubtitle: 'شهادات معترف بها تثبت الخبرة في الذكاء الاصطناعي وعلوم البيانات وتقنيات السحابة والتطوير.',
      learningTitle: 'رحلة تعلم مستمرة',
      learningSubtitle: 'مهاراتي تتطور باستمرار عبر المشاريع العملية والشهادات والتطبيقات الواقعية.',
      buttons: {
        viewProjects: 'عرض المشاريع',
        viewCerts: 'عرض الشهادات',
        experienceTimeline: 'الخبرات الزمنية',
        aboutMe: 'من أنا'
      }
  }
  }
};

const I18nContext = createContext({ lang: 'en', t: (k) => k, setLang: () => {} });

export const I18nProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en');

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = useMemo(() => {
    const dict = messages[lang] || messages.en;
    return (path) => {
      if (!path) return '';
      return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), dict) || path;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
