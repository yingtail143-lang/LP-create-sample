import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import StickyMobileCta from "@/components/layout/StickyMobileCta";
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
    <>
      <Header />
      {/* スマホでは下部固定CTAバーと重ならないよう余白を確保 */}
      <main className="pb-20 sm:pb-0">
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <TrainerSection />
        <PricingSection />
        <TestimonialSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
