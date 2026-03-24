import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  date: string;
  type: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: "Erika Anne", date: "Nov 2022", type: "Sold a Condo", location: "West End, Billings, MT", text: "Victoria was beyond professional. Our experience was positive and I would recommend her as a realtor without hesitation. Her attention to detail was impressive.", rating: 5 },
  { name: "Michael Blend", date: "Nov 2022", type: "Sold a Mobile Home", location: "Roundup, MT", text: "We were selling mobile homes on rented lots and I live across the state so needed an agent nearby who was willing to advertise, show and sell. Victoria exceeded expectations.", rating: 5 },
  { name: "Happy Buyer", date: "Jun 2022", type: "Bought a Single Family Home", location: "West Alkali Creek, Billings, MT", text: "If you need a realtor, you must contact Victoria! My family was in CO while we were trying to buy a home in MT. Buying a home is a huge deal, but doing so out of state felt seamless with her.", rating: 5 },
  { name: "Felicia Wilkins", date: "May 2022", type: "Showed Home", location: "Roundup, MT", text: "Just a delight to do business with. We were looking for a first time home for my new family and she was quick to respond after I left the first nervous voice-mail.", rating: 5 },
  { name: "Heather Miller", date: "Apr 2022", type: "Showed Home", location: "MT 59101", text: "I really enjoyed Victoria as my realtor. She went above and beyond to meet my needs and wants for the property I wanted. Very professional with lots of knowledge.", rating: 5 },
  { name: "Gina Lee", date: "Apr 2022", type: "Showed Home", location: "MT 59101", text: "Very professional, excellent service. I would personally recommend Victoria. She really focused on what we were looking for and explained every detail along the way.", rating: 5 },
  { name: "J. Peters", date: "Dec 2021", type: "Bought a Single Family Home", location: "Laurel, MT", text: "Mrs. Victoria is an amazing real-estate agent that genuinely cares for not only her clients but the people and what is best for THEIR family.", rating: 5 },
  { name: "M. Ehandall", date: "Dec 2021", type: "Showed Home", location: "Billings, MT", text: "Victoria quickly attended to us, seeing the urgency of viewing a property because we were flying out of town. She was helpful in every manner.", rating: 5 },
  { name: "Loni Frantzich", date: "Dec 2021", type: "Bought a Single Family Home", location: "Southwest Corridor, Billings, MT", text: "I am a first time home buyer and Victoria was crucial in helping me buy my first home. She was well versed in the market and did well finding properties within my budget.", rating: 5 },
  { name: "Jenny Jennings", date: "Nov 2021", type: "Showed Home", location: "MT 59106", text: "Victoria is a go getter. Great communication skills! I would highly recommend her to help you find the right home. Very responsive to calls and makes the process smooth.", rating: 5 },
  { name: "Shayna Connell", date: "Nov 2021", type: "Bought & Sold", location: "Heights, Billings, MT", text: "Victoria helped me buy my very first home and made me feel so comfortable and as if I were her only client. Fast forward 7 years later and she worked her magic again.", rating: 5 },
  { name: "Zachary Brown", date: "Nov 2021", type: "Sold Multiple Occupancy", location: "Central-Terry, Billings, MT", text: "I have bought and sold a few properties with Victoria and both experiences were great. She is one of the most hard working people I have ever met.", rating: 5 },
  { name: "Camille Lockhart", date: "Nov 2021", type: "Bought a Mobile Home", location: "Lockwood, Billings, MT", text: "You were super great and super helpful with all of this. I'm new at buying and she was so nice through it all. I also very much appreciate the gifts you dropped off.", rating: 5 },
  { name: "Ranger", date: "Nov 2021", type: "Bought a Single Family Home", location: "North Central, Billings, MT", text: "30 star rating across the board. She goes above and beyond to make the home buying experience stress free or as close to it as possible.", rating: 5 },
];

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const isMobile = useIsMobile();
  const perPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display text-foreground">
            What Clients Say
          </h2>
          <div className="w-20 h-0.5 bg-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {visible.map((t, i) => (
            <div
              key={`${page}-${i}`}
              className="bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-500 relative group animate-fade-in"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.type} · {t.location}</p>
                <p className="text-xs text-accent mt-1">{t.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === page ? "bg-accent w-8" : "bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-full bg-card border border-border hover:bg-secondary transition-colors disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
