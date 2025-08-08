import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is PowerWise free?",
    answer: "Yes! You can start using PowerWise for free. We may introduce premium features in the future."
  },
  {
    question: "Do I need smart home devices?",
    answer: "Not at all. PowerWise works without any connected devices — just your phone and motivation."
  },
  {
    question: "How does the AI coach personalize the experience?",
    answer: "The AI learns from your home details, your goals, and your past activity to recommend the best next steps."
  },
  {
    question: "How much can I expect to save on my energy bills?",
    answer: "Most users see savings of 15-40% on their energy bills within the first few months, depending on their home and how consistently they follow the recommendations."
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use industry-standard encryption to protect your data and never sell or share your personal information with third parties."
  }
];

export function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
              >
                <AccordionItem value={`item-${index}`} className="border-0 bg-card rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-medium text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
