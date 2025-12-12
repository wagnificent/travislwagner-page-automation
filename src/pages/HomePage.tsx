import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AutomationShowcase } from "@/components/landing/AutomationShowcase";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { Toaster } from "@/components/ui/sonner";
export function HomePage() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AutomationShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}