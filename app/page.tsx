import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChaletsSection from "@/components/ChaletsSection";
import WhySection from "@/components/WhySection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import ShareSection from "@/components/ShareSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ChaletsSection />
      <WhySection />
      <PricingSection />
      <HowItWorks />
      <ReviewsSection />
      <LocationSection />
      <ShareSection />
      <CTASection />
      <Footer />
    </main>
  );
}
