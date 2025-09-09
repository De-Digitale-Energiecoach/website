import { Button } from "../components/ui/button";
import { Smartphone, ArrowRight, Apple } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useTranslation } from "react-i18next";


export function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <AnimatedSection>
            <div className="text-center max-w-4xl">
              <h2 className="text-3xl lg:text-4xl font-medium mb-4">
                {t('callToAction.title')}
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {t('callToAction.description')}
              </p>

              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="secondary" size="lg" className="h-14 px-8">
                    <Apple className="mr-2 h-5 w-5" />
                    {t('callToAction.downloadAppStore')}
                  </Button>
                  <Button variant="secondary" size="lg" className="h-14 px-8">
                    <Smartphone className="mr-2 h-5 w-5" />
                    {t('callToAction.downloadGooglePlay')}
                  </Button>
                </div>
                <Button variant="link" className="text-white min-w-[200px]">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {t('callToAction.municipalityGetInTouch')}
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
