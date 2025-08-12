import { Separator } from "./ui/separator";
import { Linkedin, Mail, MapPin, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import iconImage from "../assets/icon.png";

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
        {/* Privacy Section */}
        <div className="mb-12 pb-8 border-b">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground">{t('privacy.title')}</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>{t('privacy.description')}</p>
                <p>
                  {t('privacy.fullVersionBefore')}
                  <a href="#" className="text-primary hover:underline">
                    {t('privacy.fullVersionLink')}
                  </a>
                  {t('privacy.fullVersionAfter')}
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                <Shield className="h-20 w-20 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <img src={iconImage} alt="Powerwise" className="text-primary-foreground" />
              </div>
              <span className="text-xl font-medium">Powerwise</span>
            </div>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
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
                {t('footer.features')}
              </button>
              <button
                onClick={() => handleNavClick('municipalities')}
                className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors"
              >
                {t('navigation.municipalities')}
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
              <a href="#" className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors">{t('footer.terms')}</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@dedigitaleenergiecoach.nl</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Dream Street 12, 2133LK Hoofddorp</span>
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
