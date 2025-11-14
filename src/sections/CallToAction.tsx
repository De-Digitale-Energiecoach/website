import { Button } from "../components/ui/button";
import { Smartphone, Apple, ArrowRight } from "lucide-react";
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
              <span className="inline-flex items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground/80 mb-4">
                {t("callToAction.comingSoonBadge")}
              </span>
              <h2 className="text-3xl lg:text-4xl font-medium mb-4">
                {t("callToAction.title")}
              </h2>

              <p className="text-base text-primary-foreground/70 mb-8">
                {t("callToAction.comingSoonNote")}
              </p>

              <div className="flex flex-col gap-4 items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="h-14 px-8 opacity-70 cursor-not-allowed"
                    disabled
                    aria-disabled="true"
                  >
                    <Apple className="mr-2 h-5 w-5" />
                    {t("callToAction.downloadAppStore")}
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="h-14 px-8 opacity-70 cursor-not-allowed"
                    disabled
                    aria-disabled="true"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    {t("callToAction.downloadGooglePlay")}
                  </Button>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-white min-w-[200px]"
                >
                  <a href="mailto:info@dedigitaleenergiecoach.nl" aria-label={t('callToAction.municipalityGetInTouch')}>
                    <ArrowRight className="mr-2 h-5 w-5" />
                    {t('callToAction.municipalityGetInTouch')}
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
