import { useState } from "react";
import { Bath, BedDouble, Ruler, LandPlot, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import exterior from "@/assets/listing-exterior.webp";
import kitchenDining from "@/assets/listing-kitchen-dining.webp";
import kitchen2 from "@/assets/listing-kitchen2.webp";
import bedroom1 from "@/assets/listing-bedroom1.webp";
import bedroom2 from "@/assets/listing-bedroom2.webp";
import room from "@/assets/listing-room.webp";
import backyard from "@/assets/listing-backyard.webp";
import yard2 from "@/assets/listing-yard2.webp";
import basement from "@/assets/listing-basement.webp";
import laundry from "@/assets/listing-laundry.webp";
import bathroom from "@/assets/listing-bathroom.webp";
import livingroom from "@/assets/listing-livingroom.webp";
import bedroom3 from "@/assets/listing-bedroom3.webp";
import bathroom2 from "@/assets/listing-bathroom2.webp";
import bathroom3 from "@/assets/listing-bathroom3.webp";
import storage from "@/assets/listing-storage.webp";
import garage from "@/assets/listing-garage.webp";
import rear from "@/assets/listing-rear.webp";
import deckview from "@/assets/listing-deckview.webp";
import yard3 from "@/assets/listing-yard3.webp";
import deck from "@/assets/listing-deck.webp";
import deckwide from "@/assets/listing-deckwide.webp";
import utility from "@/assets/listing-utility.webp";
import openplan from "@/assets/listing-openplan.webp";
import kitchen3 from "@/assets/listing-kitchen3.webp";
import kitchen4 from "@/assets/listing-kitchen4.webp";
import bathroom4 from "@/assets/listing-bathroom4.webp";
import garage2 from "@/assets/listing-garage2.webp";
import bathroom5 from "@/assets/listing-bathroom5.webp";
import livingroom2 from "@/assets/listing-livingroom2.webp";
import rear2 from "@/assets/listing-rear2.webp";
import room2 from "@/assets/listing-room2.webp";
import bedroom4 from "@/assets/listing-bedroom4.webp";

const listings = [
  {
    price: "$479,900",
    beds: 3,
    baths: 3.5,
    sqft: "2,872",
    lotSize: "14,400",
    lotUnit: "sq ft",
    address: "204 Tam Oshanter Rd, Billings, MT 59105",
    images: [exterior, livingroom, livingroom2, openplan, kitchenDining, kitchen2, kitchen3, kitchen4, bedroom1, bedroom2, bedroom3, bedroom4, bathroom, bathroom2, bathroom3, bathroom4, bathroom5, room, room2, backyard, yard2, yard3, deck, deckwide, deckview, rear, rear2, basement, garage, garage2, storage, utility, laundry],
  },
];

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative aspect-[16/10] bg-muted group">
      <img
        src={images[current]}
        alt={`${alt} - photo ${current + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-foreground hover:bg-background"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-foreground/60 text-white px-3 py-1 rounded-full text-sm font-body">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

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

        <div className="max-w-2xl mx-auto">
          {listings.map((listing, i) => (
            <Card key={i} className="overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <ImageCarousel images={listing.images} alt={listing.address} />
              <CardContent className="p-6">
                <p className="text-2xl font-display text-foreground mb-3">{listing.price}</p>
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
                    <span>{listing.lotSize} {listing.lotUnit} lot</span>
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
