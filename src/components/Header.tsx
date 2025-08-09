import { Button } from "./ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    // Observe all sections
    const sections = ['home', 'how-it-works', 'features', 'why-it-matters', 'about', 'faq', 'download'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const getNavItemClasses = (sectionId: string) => {
    return `transition-colors ${activeSection === sectionId
      ? 'text-primary font-medium'
      : 'text-foreground hover:text-primary'
      }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-medium text-foreground">PowerWise</h1>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavClick('how-it-works')}
                className={getNavItemClasses('how-it-works')}
              >
                {t('navigation.howItWorks')}
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className={getNavItemClasses('features')}
              >
                {t('navigation.features')}
              </button>
              <button
                onClick={() => handleNavClick('why-it-matters')}
                className={getNavItemClasses('why-it-matters')}
              >
                {t('navigation.whyItMatters')}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={getNavItemClasses('about')}
              >
                {t('navigation.about')}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={getNavItemClasses('faq')}
              >
                {t('navigation.faq')}
              </button>
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button onClick={() => handleNavClick('download')}>
              {t('common.download')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <button
                onClick={() => handleNavClick('how-it-works')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('how-it-works')}`}
              >
                {t('navigation.howItWorks')}
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('features')}`}
              >
                {t('navigation.features')}
              </button>
              <button
                onClick={() => handleNavClick('why-it-matters')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('why-it-matters')}`}
              >
                {t('navigation.whyItMatters')}
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('about')}`}
              >
                {t('navigation.about')}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('faq')}`}
              >
                {t('navigation.faq')}
              </button>
              <div className="px-3 py-2 flex gap-2">
                <LanguageSwitcher />
                <Button
                  className="flex-1"
                  onClick={() => handleNavClick('download')}
                >
                  {t('common.download')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
