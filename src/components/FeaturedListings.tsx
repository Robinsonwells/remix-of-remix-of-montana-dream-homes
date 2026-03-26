import { Bath, BedDouble, Ruler, LandPlot } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const listings = [
  {
    price: "$479,900",
    beds: 3,
    baths: 3.5,
    sqft: "2,872",
    lotSize: "14,400",
    address: "204 Tam Oshanter Rd, Billings, MT 59105",
    image: "", // placeholder until user provides images
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-display text-center text-foreground mb-4">
          Featured Listings
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Hand-picked properties just for you
        </p>

        <div className="grid md:grid-cols-1 max-w-2xl mx-auto gap-8">
          {listings.map((listing, i) => (
            <Card key={i} className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] bg-muted">
                {listing.image ? (
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body">
                    Photo coming soon
                  </div>
                )}
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground text-lg px-4 py-1 font-display">
                  {listing.price}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-foreground font-body">
                    <BedDouble className="w-5 h-5 text-accent" />
                    <span>{listing.beds} bed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground font-body">
                    <Bath className="w-5 h-5 text-accent" />
                    <span>{listing.baths} bath</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground font-body">
                    <Ruler className="w-5 h-5 text-accent" />
                    <span>{listing.sqft} sqft</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground font-body">
                    <LandPlot className="w-5 h-5 text-accent" />
                    <span>{listing.lotSize} acre lot</span>
                  </div>
                </div>
                <p className="text-muted-foreground font-body text-base">
                  {listing.address}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
