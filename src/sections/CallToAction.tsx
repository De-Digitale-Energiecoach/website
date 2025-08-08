import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { Smartphone, ArrowRight } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-medium mb-4">
                Ready to Save Energy and Reduce Your CO₂ Footprint?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Join thousands of users building a smarter, greener lifestyle with PowerWise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="secondary" size="lg" className="h-14 px-8">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download the App
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 border-primary-foreground/20 hover:bg-primary-foreground/10">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Learn More
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
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=600&fit=crop&crop=center"
                alt="PowerWise habit checklist and AI chat interface"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />

              {/* Semi-transparent white overlay for better text visibility */}
              <div className="absolute inset-0 rounded-3xl bg-white/70 p-0 pointer-events-none"></div>

              {/* Mobile screen overlay showing habit checklist */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="absolute inset-6 bg-background/95 rounded-2xl flex flex-col p-4"
              >
                <div className="text-foreground text-base font-medium mb-4">Today's Energy Goals</div>
                <div className="space-y-3">
                  {[
                    "Turn down thermostat by 2°F",
                    "Unplug unused devices",
                    "Use LED bulbs in living room"
                  ].map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.8 + index * 0.1
                      }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${index < 2 ? 'bg-primary border-primary' : 'bg-border border-border'
                        }`}>
                        {index < 2 && <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>}
                      </div>
                      <span className={`text-base ${index < 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {task}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* AI chat bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2
                  }}
                  className="mt-4 bg-primary/10 rounded-lg p-3"
                >
                  <div className="text-sm text-primary font-medium mb-1">💡 AI Coach</div>
                  <div className="text-sm text-foreground">"Great job! You're on track to save 12% this week."</div>
                </motion.div>
              </motion.div>

              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-foreground/20 to-transparent rounded-3xl blur-xl opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
