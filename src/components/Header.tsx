import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "./LanguageSwitcher";
import iconImage from "../assets/icon.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    // Only observe sections if we're on the home page
    if (!isHomePage) {
      setActiveSection('');
      return;
    }

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
    const sections = ['home', 'how-it-works', 'features', 'municipalities', 'about', 'download'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  useEffect(() => {
    // Only handle scroll for download button if we're on the home page
    if (!isHomePage) {
      setShowDownloadButton(false);
      return;
    }

    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        // Only show button when user has scrolled past 80% of the hero section
        setShowDownloadButton(scrollPosition > heroBottom * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on other pages, navigate to home page and then scroll to section
      navigate('/', { state: { scrollTo: sectionId } });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      // If on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages, navigate to home page
      navigate('/');
    }
  };

  const getNavItemClasses = (sectionId: string) => {
    if (!isHomePage) {
      return 'transition-colors text-foreground hover:text-primary';
    }
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
                onClick={handleLogoClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-16 rounded-lg flex items-center justify-center">
                  <img src={iconImage} alt="Powerwise Icon" className="text-primary-foreground" />
                </div>
                <h1 className="text-2xl font-medium text-foreground">Powerwise</h1>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => handleNavClick('about')}
                className={getNavItemClasses('about')}
              >
                {t('navigation.about')}
              </button>
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
                onClick={() => handleNavClick('municipalities')}
                className={getNavItemClasses('municipalities')}
              >
                {t('navigation.municipalities')}
              </button>

            </div>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            {showDownloadButton && (
              <Button onClick={() => handleNavClick('download')}>
                {t('common.download')}
              </Button>
            )}
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
                onClick={() => handleNavClick('about')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('about')}`}
              >
                {t('navigation.about')}
              </button>
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
                onClick={() => handleNavClick('municipalities')}
                className={`block w-full text-left px-3 py-2 ${getNavItemClasses('municipalities')}`}
              >
                {t('navigation.municipalities')}
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
