import { Card, CardContent } from "../components/ui/card";
import { Users, BarChart3, Lightbulb, BookOpen } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Municipalities() {
  const { t } = useTranslation();

  const impacts = [
    {
      icon: Users,
      title: t('municipalities.environmentalImpact.title'),
      description: t('municipalities.environmentalImpact.description')
    },
    {
      icon: BarChart3,
      title: t('municipalities.energySavings.title'),
      description: t('municipalities.energySavings.description')
    },
    {
      icon: Lightbulb,
      title: t('municipalities.smartHome.title'),
      description: t('municipalities.smartHome.description')
    },
    {
      icon: BookOpen,
      title: t('municipalities.tracking.title'),
      description: t('municipalities.tracking.description')
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
              {t('municipalities.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              {t('municipalities.description1')}
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('municipalities.description2')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
            >
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      className="text-3xl"
                    >
                      <impact.icon />
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-foreground mb-2">{impact.title}</h3>
                      <p className="text-muted-foreground">{impact.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
