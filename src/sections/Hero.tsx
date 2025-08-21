import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import teamImage from "../assets/team/team.jpeg";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/50">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
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
              className="flex justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="h-14 px-8"
                onClick={() => {
                  const element = document.getElementById('download');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                {t('hero.downloadNow')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <ImageWithFallback
              src={teamImage}
              alt="Team working on sustainable energy solutions"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
