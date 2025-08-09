import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.questions.free.question'),
      answer: t('faq.questions.free.answer')
    },
    {
      question: t('faq.questions.smartDevices.question'),
      answer: t('faq.questions.smartDevices.answer')
    },
    {
      question: t('faq.questions.aiPersonalization.question'),
      answer: t('faq.questions.aiPersonalization.answer')
    },
    {
      question: t('faq.questions.savings.question'),
      answer: t('faq.questions.savings.answer')
    },
    {
      question: t('faq.questions.privacy.question'),
      answer: t('faq.questions.privacy.answer')
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-4">
              {t('faq.title')}
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
