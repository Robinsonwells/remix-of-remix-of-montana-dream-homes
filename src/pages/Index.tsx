import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import Testimonials from "@/components/Testimonials";
import FeaturedListings from "@/components/FeaturedListings";
import MontanaLifestyle from "@/components/MontanaLifestyle";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import logoSvg from "@/assets/real-estate-with-victoria-logo.svg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroSlideshow />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-0 md:px-6">
          <h1 className="text-3xl md:text-7xl font-display text-white mb-1 animate-fade-in">Welcome to</h1>
          <img src={logoSvg} alt="Real Estate with Victoria" className="relative left-1/2 w-[170vw] max-w-none h-auto -translate-x-1/2 animate-fade-in md:w-screen" />
          
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
