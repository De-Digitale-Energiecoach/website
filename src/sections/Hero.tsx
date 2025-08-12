import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Apple, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import ecoHouseImage from "../assets/hero.png";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/50">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-40 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-4"
            >
              {t('hero.intro')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground mb-6"
            >
              {t('hero.title')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground mb-6"
            >
              {t('hero.subtitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              {t('hero.description1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
            >
              {t('hero.description2')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="h-14 px-8">
                <Apple className="mr-2 h-5 w-5" />
                {t('hero.downloadAppStore')}
              </Button>
              <Button size="lg" className="h-14 px-8">
                <Smartphone className="mr-2 h-5 w-5" />
                {t('hero.downloadGooglePlay')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
              <ImageWithFallback
                src={ecoHouseImage}
                alt="Powerwise eco house illustration"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>

              {/* Floating UI elements */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-primary/20"
              >
                <div className="text-base text-muted-foreground mb-1">{t('hero.aiCoach')}</div>
                <div className="text-base font-medium text-foreground">{t('hero.aiCoachMessage')}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-primary/20"
              >
                <div className="text-base text-muted-foreground mb-1">{t('hero.thisWeek')}</div>
                <div className="text-xl font-medium text-primary">{t('hero.co2Reduction')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
