import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import SignatureAnimation from "@/components/SignatureAnimation";
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
          <h1 className="text-3xl md:text-7xl font-display text-white mb-4 animate-fade-in">Welcome to</h1>
          <div className="w-full max-w-4xl px-4">
            <SignatureAnimation />
          </div>
          <p className="text-lg md:text-2xl text-white/90 mt-4 font-display tracking-wide animate-fade-in">Your next move starts here</p>
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
