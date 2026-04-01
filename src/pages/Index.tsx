import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import FeaturedListings from "@/components/FeaturedListings";
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
          <h1 className="text-3xl md:text-7xl font-display text-white mb-12 animate-fade-in">Welcome to</h1>
          <p className="text-4xl md:text-8xl text-white font-lobster animate-fade-in">Real Estate with Victoria</p>
          <p className="text-xl md:text-4xl text-white/90 mt-8 font-display tracking-wide animate-fade-in">Your next home or land</p>
        </div>
      </section>

      <div id="testimonials">
        <Testimonials />
      </div>
      <FeaturedListings />
      <MontanaLifestyle />
      <AboutSection />
      <ContactForm />
    </div>
  );
};

export default Index;
