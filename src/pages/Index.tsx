import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import MontanaLifestyle from "@/components/MontanaLifestyle";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 md:px-6">
          <div className="w-full max-w-2xl px-4">
            <SignatureAnimation />
          </div>
          <p className="mt-4 md:mt-8 text-base md:text-2xl font-display italic text-primary-foreground/90 text-center max-w-xl animate-fade-in">
            Your next move starts with the right strategy
          </p>
        </div>
      </section>

      <div id="testimonials">
        <Testimonials />
      </div>
      <MontanaLifestyle />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default Index;
