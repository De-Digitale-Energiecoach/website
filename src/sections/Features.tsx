import { Card, CardContent } from "../components/ui/card";
import { User, Zap, RefreshCw, TrendingUp, MapPin } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: User,
      title: t('features.digitalEnergyCoach.title'),
      description: t('features.digitalEnergyCoach.description')
    },
    {
      icon: Zap,
      title: t('features.actions.title'),
      description: t('features.actions.description')
    },
    {
      icon: RefreshCw,
      title: t('features.sustainableHabits.title'),
      description: t('features.sustainableHabits.description')
    },
    {
      icon: TrendingUp,
      title: t('features.progressMotivation.title'),
      description: t('features.progressMotivation.description')
    },
    {
      icon: MapPin,
      title: t('features.localExpertise.title'),
      description: t('features.localExpertise.description')
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              {t('features.title')}
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <h3 className="font-medium text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
