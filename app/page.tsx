/** @format */

import HeroSection from "@/components/hero-section";
import { AboutUsSection } from "@/components/ui/AboutUsSection";
import BestSellingProducts from "@/components/ui/BestSellingProducts";
import { FeaturesSection } from "@/components/ui/FeaturesSection";
import { Footer } from "@/components/ui/Footer";
import SubscriptionPlanSection from "@/components/ui/SubscriptionPlanSection";
import { WhyUsSection } from "@/components/ui/WhyUSSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BestSellingProducts/>
      <FeaturesSection />
      <AboutUsSection />
      <WhyUsSection />
      <SubscriptionPlanSection/>
      <Footer/>
    </>
  );
}
