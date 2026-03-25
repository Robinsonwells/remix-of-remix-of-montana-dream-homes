import { useState } from "react";
import { Mountain, TreePine, Sunrise, ChevronDown } from "lucide-react";
import lifestyle1 from "@/assets/montana-lifestyle-1.jpg";
import lifestyle2 from "@/assets/montana-lifestyle-2.jpg";
import lifestyle3 from "@/assets/montana-lifestyle-3.jpg";
import montanaExplore from "@/assets/montana-explore.jpg";

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

const MontanaLifestyle = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full cursor-pointer group"
        >
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img
              src={montanaExplore}
              alt="Montana landscape"
              loading="lazy"
              width={1280}
              height={512}
              className="w-full aspect-[5/2] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-2xl md:text-5xl font-display mb-2 md:mb-3 px-4">
                About Billings Montana
              </h2>
              <p className="text-sm md:text-lg font-body opacity-90">
                Click to expand
              </p>
              <ChevronDown
                className={`mt-3 w-6 h-6 transition-transform duration-300 ${
                  expanded ? "rotate-180" : "animate-bounce"
                }`}
              />
            </div>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            expanded ? "max-h-[3000px] opacity-100 mt-16" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <p className="text-center max-w-2xl mx-auto text-muted-foreground font-body text-lg leading-relaxed mb-20">
            Wide open spaces, tight-knit communities, and unmatched natural
            beauty make it one of the most desirable places to call home in the
            country.
          </p>
          <div className="space-y-24">
            {sections.map((section, i) => (
              <div
                key={i}
                className="grid md:grid-cols-5 gap-10 md:gap-12 items-center"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MontanaLifestyle;
