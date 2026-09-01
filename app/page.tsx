import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Hero from "@/components/sections/Hero";
import PricingSection from "@/components/sections/PricingSection";
import ProblemSection from "@/components/sections/ProblemSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TrainerSection from "@/components/sections/TrainerSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <FeaturesSection />
      <TrainerSection />
      <PricingSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
