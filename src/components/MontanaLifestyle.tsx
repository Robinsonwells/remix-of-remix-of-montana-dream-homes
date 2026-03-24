import { useEffect, useRef, useState } from "react";
import { Mountain, TreePine, Sunrise } from "lucide-react";
import lifestyle1 from "@/assets/montana-lifestyle-1.jpg";
import lifestyle2 from "@/assets/montana-lifestyle-2.jpg";
import lifestyle3 from "@/assets/montana-lifestyle-3.jpg";

const sections = [
  {
    icon: Mountain,
    title: "Big Sky Country",
    image: lifestyle1,
    description:
      "Dramatic mountain ranges and endless skies define everyday life here. It's the kind of beauty that never gets old — and the reason so many call Montana home.",
    imageAlt: "Sweeping Montana mountain landscape under big open skies",
    reverse: false,
  },
  {
    icon: TreePine,
    title: "Wilderness at Your Door",
    image: lifestyle2,
    description:
      "National forests, pristine rivers, and world-class trails are never far away. In Montana, the outdoors isn't a weekend trip — it's your backyard.",
    imageAlt: "Montana wilderness with dense forests and a winding river",
    reverse: true,
  },
  {
    icon: Sunrise,
    title: "Four Seasons of Beauty",
    image: lifestyle3,
    description:
      "Golden summers, snow-covered winters, fall foliage, and spring wildflowers — every season here is a masterpiece worth experiencing.",
    imageAlt: "Montana landscape showing seasonal beauty with warm light",
    reverse: false,
  },
];

const SectionBlock = ({
  section,
  index,
}: {
  section: (typeof sections)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-5 gap-10 md:gap-12 items-center transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className={`md:col-span-3 ${section.reverse ? "md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg shadow-xl group">
          <img
            src={section.image}
            alt={section.imageAlt}
            className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
        </div>
      </div>

      <div className={`md:col-span-2 ${section.reverse ? "md:order-1" : ""}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <section.icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-2xl md:text-3xl text-foreground">
            {section.title}
          </h3>
        </div>
        <p className="text-muted-foreground font-body text-lg leading-relaxed">
          {section.description}
        </p>
      </div>
    </div>
  );
};

const MontanaLifestyle = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.15 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">
            Life in Montana
          </p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            Where Adventure Meets Home
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground font-body text-lg leading-relaxed">
            Montana isn't just a place to live — it's a way of life. Wide open
            spaces, tight-knit communities, and unmatched natural beauty make it
            one of the most desirable places to call home in the country.
          </p>
        </div>

        <div className="space-y-24">
          {sections.map((section, i) => (
            <SectionBlock key={i} section={section} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MontanaLifestyle;
