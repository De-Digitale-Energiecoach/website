import { ImageWithFallback } from "../components/ui/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { useState } from "react";
import geert from "../assets/team/geert.jpeg";
import gerard from "../assets/team/gerard.jpeg";
import team from "../assets/team/team.jpeg";
import { t } from "i18next";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  story: string;
}

const teamMembers: TeamMember[] = [
  {
    name: t('about.team.geert.name'),
    role: t('about.team.geert.role'),
    image: geert,
    story: t('about.team.geert.story')
  },
  {
    name: t('about.team.gerard.name'),
    role: t('about.team.gerard.role'),
    image: gerard,
    story: t('about.team.gerard.story')
  }
];

export function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Powerwise Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="relative order-2 lg:order-1"
          >
            <ImageWithFallback
              src={team}
              alt="Team working on sustainable energy solutions"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
          </motion.div>

          <AnimatedSection className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
              {t('about.powerwise.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.powerwise.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* Team Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl lg:text-4xl font-medium text-foreground mb-6">
              {t('about.team.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('about.team.description')}
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className="relative h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
          }`}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full bg-background/50 backdrop-blur-sm">
            <CardContent className="p-6 h-full flex flex-col items-center justify-center">
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
                className="relative inline-block mb-4"
              >
                <ImageWithFallback
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
              </motion.div>

              <h4 className="text-xl font-medium text-foreground mb-2 text-center">
                {member.name}
              </h4>
              <p className="text-primary font-medium text-center mb-4">
                {member.role}
              </p>

              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-5 w-5 text-primary" />
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow h-full bg-primary/5 backdrop-blur-sm">
            <CardContent className="p-6 h-full flex flex-col justify-center">
              <div className="text-center mb-4">
                <h4 className="text-xl font-medium text-foreground mb-2">
                  {member.name}
                </h4>
                <p className="text-primary font-medium">
                  {member.role}
                </p>
              </div>

              <div className="text-muted-foreground leading-relaxed text-center flex-1 flex items-center mb-4">
                <p className="italic text-lg leading-relaxed">"{member.story}"</p>
              </div>

              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-5 w-5 text-primary" />
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
