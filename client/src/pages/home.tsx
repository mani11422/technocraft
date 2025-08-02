import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { SEO } from "@/lib/seo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
