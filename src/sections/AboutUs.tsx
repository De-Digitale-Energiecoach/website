import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

export function AboutUs() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div>
              <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
                About PowerWise
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  PowerWise is a company dedicated to helping the environment by making energy-saving easy, accessible, and impactful for everyone.
                </p>
                <p>
                  We believe that small changes at home can lead to massive global impact — and our app is built to guide you every step of the way.
                </p>
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
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center"
              alt="Team working on sustainable energy solutions"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}