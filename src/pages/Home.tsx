import { Hero } from "../sections/Hero";
import { HowItWorks } from "../sections/HowItWorks";
import { Features } from "../sections/Features";
import { Municipalities } from "../sections/Municipalities";
import { AboutUs } from "../sections/AboutUs";
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
      <section id="municipalities">
        <Municipalities />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="download">
        <CallToAction />
      </section>
    </>
  );
} 
