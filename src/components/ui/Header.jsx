import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useI18n } from '../../utils/i18n.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t, lang, setLang } = useI18n();
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/neural-landing-experience', label: t('nav.home'), icon: 'Home' },
    { path: '/professional-identity-hub', label: t('nav.about'), icon: 'User' },
    { path: '/ai-project-showcase', label: t('nav.projects'), icon: 'Briefcase' },
    { path: '/skills-matrix-visualization', label: t('nav.skills'), icon: 'Code' },
    { path: '/certifications-gallery', label: t('nav.certs'), icon: 'Award' },
    { path: '/experience-timeline', label: t('nav.exp'), icon: 'Clock' },
  ];

  const moreItems = [
    { path: '/admin-command-center', label: t('nav.admin'), icon: 'Settings' },
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const isActivePath = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-intelligent ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-intelligent border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="neural-network-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link 
              to="/neural-landing-experience" 
              className="flex items-center space-x-3 group transition-intelligent"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-intelligent group-hover:shadow-intelligent-hover transition-intelligent">
                  <svg 
                    className="w-6 h-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full neural-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-headline text-lg gradient-text">
                  Youssef CHLIH
                </h1>
                <p className="text-xs text-muted-foreground font-body">
                  AI Solutions Architect
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-cta text-sm transition-intelligent interactive-lift hover-glow ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-intelligent'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span className="hover-underline">{item?.label}</span>
                </Link>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg font-cta text-sm text-foreground hover:bg-muted hover:text-primary transition-intelligent interactive-lift hover-glow">
                  <Icon name="MoreHorizontal" size={16} />
                  <span>More</span>
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-intelligent-hover opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-intelligent">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-body transition-intelligent hover:bg-muted first:rounded-t-lg last:rounded-b-lg ${
                        isActivePath(item?.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'text-popover-foreground'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Language + Theme + CTAs */}
            <div className="hidden md:flex items-center space-x-2">
              <div className="flex items-center bg-muted rounded-md overflow-hidden">
                <button onClick={() => setLang('en')} className={`px-2 py-1 text-xs ${lang==='en'?'bg-background text-foreground':'text-muted-foreground'}`}>EN</button>
                <button onClick={() => setLang('fr')} className={`px-2 py-1 text-xs ${lang==='fr'?'bg-background text-foreground':'text-muted-foreground'}`}>FR</button>
                <button onClick={() => setLang('ar')} className={`px-2 py-1 text-xs ${lang==='ar'?'bg-background text-foreground':'text-muted-foreground'}`}>AR</button>
              </div>
              <Button variant="outline" size="sm" iconName={theme==='dark'?'Sun':'Moon'} onClick={toggleTheme} />
              <Button 
                variant="outline" 
                size="sm"
                iconName="Calendar"
                iconPosition="left"
                className="font-cta"
              >
                {t('cta.schedule')}
              </Button>
              <Button 
                variant="default" 
                size="sm"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-accent hover:bg-accent/90 font-cta"
              >
                {t('cta.getStarted')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-intelligent"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-cta text-sm transition-intelligent ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-intelligent'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              {moreItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-cta text-sm transition-intelligent ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-intelligent'
                      : 'text-foreground hover:bg-muted hover:text-primary'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.label}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-muted rounded-md overflow-hidden">
                    <button onClick={() => setLang('en')} className={`px-2 py-1 text-xs ${lang==='en'?'bg-background text-foreground':'text-muted-foreground'}`}>EN</button>
                    <button onClick={() => setLang('fr')} className={`px-2 py-1 text-xs ${lang==='fr'?'bg-background text-foreground':'text-muted-foreground'}`}>FR</button>
                    <button onClick={() => setLang('ar')} className={`px-2 py-1 text-xs ${lang==='ar'?'bg-background text-foreground':'text-muted-foreground'}`}>AR</button>
                  </div>
                  <Button variant="outline" size="sm" iconName={theme==='dark'?'Sun':'Moon'} onClick={toggleTheme} />
                </div>
                <Button 
                  variant="outline" 
                  fullWidth
                  iconName="Calendar"
                  iconPosition="left"
                  className="font-cta justify-center"
                >
                  {t('cta.schedule')}
                </Button>
                <Button 
                  variant="default" 
                  fullWidth
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="bg-accent hover:bg-accent/90 font-cta justify-center"
                >
                  {t('cta.getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;