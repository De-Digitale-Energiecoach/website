import { Card, CardContent } from "../components/ui/card";
import { CheckSquare, Target, Brain } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CheckSquare,
    title: "Pick Habits or Actions",
    description: "Choose from personalized energy-saving tasks that fit your home."
  },
  {
    icon: Target,
    title: "Track & Stay Consistent",
    description: "Use reminders and weekly check-ins to stay on track."
  },
  {
    icon: Brain,
    title: "AI-Powered Coaching",
    description: "Your coach adapts suggestions as you make progress."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              How PowerWise Helps You Save
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow text-center h-full">
                  <CardContent className="p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </motion.div>
                    <div className="text-4xl font-medium text-primary mb-4">{index + 1}</div>
                    <h3 className="font-medium text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="flex justify-center">
            <div className="flex items-center space-x-4">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  {index < steps.length - 1 && (
                    <div className="w-12 h-px bg-primary/30 mx-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
