import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Smartphone, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aiCoachImageEn from "../assets/ai-coach-en.png";
import aiCoachImageNl from "../assets/ai-coach-nl.png";


export function CallToAction() {
  const { t, i18n } = useTranslation();

  // Get the appropriate image based on current language
  const getLocalizedImage = () => {
    return i18n.language === 'nl' ? aiCoachImageNl : aiCoachImageEn;
  };

  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-medium mb-4">
                {t('callToAction.title')}
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {t('callToAction.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="h-14 px-8">
                  <Smartphone className="mr-2 h-5 w-5" />
                  {t('callToAction.downloadNow')}
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 border-primary-foreground/20 hover:bg-primary-foreground/10">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {t('callToAction.municipalityGetInTouch')}
                </Button>
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[600px]">
              <ImageWithFallback
                src={getLocalizedImage()}
                alt={t('callToAction.imageAlt')}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />

              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-foreground/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
