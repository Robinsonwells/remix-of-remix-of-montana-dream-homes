import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import hero1 from "@/assets/montana-hero-1.jpg";
import hero2 from "@/assets/montana-hero-2.jpg";
import hero3 from "@/assets/montana-hero-3.jpg";
import hero1Mobile from "@/assets/montana-hero-1-mobile.jpg";
import hero2Mobile from "@/assets/montana-hero-2-mobile.jpg";
import hero3Mobile from "@/assets/montana-hero-3-mobile.jpg";

const desktopSlides = [hero1, hero2, hero3];
const mobileSlides = [hero1Mobile, hero2Mobile, hero3Mobile];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();
  const slides = isMobile ? mobileSlides : desktopSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-background transition-opacity duration-[2000ms]"
          style={{ opacity: current === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt={`Montana real estate ${i + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectFit: "cover",
              objectPosition: isMobile ? "center center" : "50% 40%",
              transform: isMobile ? "scale(1.08)" : undefined,
              transformOrigin: "center center",
              animation: current === i && !isMobile ? "kenBurns 8s ease-out forwards" : "none",
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
    </div>
  );
};

export default HeroSlideshow;
