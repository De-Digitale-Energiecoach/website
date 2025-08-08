import { Hero } from "../sections/Hero";
import { HowItWorks } from "../sections/HowItWorks";
import { Features } from "../sections/Features";
import { WhyItMatters } from "../sections/WhyItMatters";
import { AboutUs } from "../sections/AboutUs";
import { FAQ } from "../sections/FAQ";
import { CallToAction } from "../sections/CallToAction";

export function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="why-it-matters">
        <WhyItMatters />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="download">
        <CallToAction />
      </section>
    </>
  );
} 