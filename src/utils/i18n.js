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
      pih: {
        title: 'Professional Identity Hub',
        meta: "Discover Youssef CHLIH's journey as an AI professional bridging Moroccan heritage with global innovation."
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
      pih: {
        title: 'Hub d’Identité Professionnelle',
        meta: "Découvrez le parcours de Youssef CHLIH, professionnel de l'IA, reliant l'héritage marocain à l'innovation mondiale."
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
      pih: {
        title: 'بوابة الهوية المهنية',
        meta: 'اكتشف مسيرة يوسف شليه في الذكاء الاصطناعي، يجمع بين التراث المغربي والابتكار العالمي.'
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
