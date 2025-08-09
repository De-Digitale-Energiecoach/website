import { Separator } from "./ui/separator";
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-medium">PowerWise</span>
            </div>
            <p className="text-muted-foreground">
              Empowering smart energy decisions for a sustainable future. Save money while saving the planet.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Product</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.howItWorks')}
              </button>
              <button
                onClick={() => handleNavClick('features')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.features')}
              </button>
              <button
                onClick={() => handleNavClick('why-it-matters')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.whyItMatters')}
              </button>
              <button
                onClick={() => handleNavClick('download')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('common.download')}
              </button>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Company</h3>
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick('about')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.about')}
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.faq')}
              </button>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">{t('footer.terms')}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@powerwise.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Amsterdam, Netherlands</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
