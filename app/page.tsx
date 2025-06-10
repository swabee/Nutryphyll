/** @format */

import HeroSection from "@/components/hero-section";
import { AboutUsSection } from "@/components/ui/AboutUsSection";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { Footer } from "@/components/ui/Footer";
import { PricingPlanSection } from "@/components/ui/PricingPlanSection";
import { WhyUsSection } from "@/components/ui/WhyUSSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <WhyUsSection />
      <PricingPlanSection/>
      <Footer/>
    </>
  );
}
