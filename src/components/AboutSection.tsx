import { useEffect, useRef, useState } from "react";
import { Phone, Mail } from "lucide-react";
import profileImg from "@/assets/victoria-profile.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="relative w-2/3 sm:w-1/2 mx-auto md:mx-0">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src={profileImg}
                alt="Victoria Brauer-Konitz"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6 md:mb-8">Victoria Brauer-Konitz</h2>
            
            <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
              <p>
                Victoria has enjoyed helping families accomplish their dreams of owning a home and assisting in their real estate needs for 20 years. Working closely with buyers and sellers, she specializes in residential properties in Billings and surrounding areas. A highlight of her business is developing relationships that ultimately lead to lasting friendships. Her depth of experience, integrity, and knowledge in the real estate industry, intertwined with innovative technology, displays her commitment and dedication to her clients.
              </p>
              <p>
                Victoria was raised in Western Montana and appreciates what this beautiful state has to offer to those locally and for those who are planning to make it their home. She attended the University of Montana and Montana State University – Billings, earning her Bachelor of Science in Business Administration degree with an emphasis in marketing. During the summer months, you would likely see her on the golf course contributing to a fun group tournament or competing in state-level championships. She also enjoys hiking and skiing. Above all, Victoria loves spending time with her family.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-border">
              <a href="tel:4068552856" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <span className="font-body">(406) 855-2856</span>
              </a>
              <a href="mailto:vbk125@gmail.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <span className="font-body">vbk125@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
