import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="container max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`font-display text-base md:text-xl transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Victoria Brauer-Konitz
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={`font-body text-sm tracking-wide transition-colors hover:text-accent ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              {l.label}
            </a>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-4 font-body text-foreground hover:text-accent transition-colors border-b border-border/50">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
