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
import { localBusinessJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      {/* 構造化データ(JSON-LD)。値は全てプレースホルダー(lib/seo.ts参照) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
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
