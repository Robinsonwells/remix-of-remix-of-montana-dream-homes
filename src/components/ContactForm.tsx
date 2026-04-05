import { useState, useRef, useEffect } from "react";
import { Send, Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[\d\s()+-]{7,20}$/.test(form.phone.trim())) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!form.message.trim()) { /* message is optional */ }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    const formData = new URLSearchParams({
      "form-name": "contact",
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then(() => {
        toast.success("Thank you! Victoria will be in touch soon.");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setErrors({});
      })
      .catch(() => toast.error("Something went wrong. Please try again."))
      .finally(() => setSubmitting(false));
  };

  const inputClass =
    "w-full px-4 md:px-5 py-3 md:py-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors font-body text-sm md:text-base";

  return (
    <section ref={ref} id="contact" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className={`container max-w-6xl mx-auto px-4 md:px-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-accent font-body text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-display text-primary-foreground mb-4 md:mb-6">Find Your Next Home or Property</h2>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-10">
              Ready to start your Montana real estate journey? Reach out today and let's make your next move the right one.
            </p>

              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5" noValidate>
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-first-name" className="sr-only">First Name</label>
                  <input
                    id="contact-first-name"
                    name="firstName"
                    placeholder="First Name"
                    maxLength={50}
                    value={form.firstName}
                    onChange={(e) => { setForm({ ...form, firstName: e.target.value }); setErrors({ ...errors, firstName: "" }); }}
                    className={`${inputClass} ${errors.firstName ? "border-red-400" : ""}`}
                  />
                  {errors.firstName && <p className="text-red-300 text-sm mt-1 font-body">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="sr-only">Last Name</label>
                  <input
                    id="contact-last-name"
                    name="lastName"
                    placeholder="Last Name"
                    maxLength={50}
                    value={form.lastName}
                    onChange={(e) => { setForm({ ...form, lastName: e.target.value }); setErrors({ ...errors, lastName: "" }); }}
                    className={`${inputClass} ${errors.lastName ? "border-red-400" : ""}`}
                  />
                  {errors.lastName && <p className="text-red-300 text-sm mt-1 font-body">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Your Email</label>
                <input
                  id="contact-email"
                  name="email"
                  placeholder="Your Email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: "" }); }}
                  className={`${inputClass} ${errors.email ? "border-red-400" : ""}`}
                />
                {errors.email && <p className="text-red-300 text-sm mt-1 font-body">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Your Phone Number</label>
                <input
                  id="contact-phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => { setForm({ ...form, phone: e.target.value }); setErrors({ ...errors, phone: "" }); }}
                  className={`${inputClass} ${errors.phone ? "border-red-400" : ""}`}
                />
                {errors.phone && <p className="text-red-300 text-sm mt-1 font-body">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-lg bg-accent text-accent-foreground font-body font-bold tracking-wide hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-display text-2xl text-primary-foreground mb-6">Contact</h3>
              <div className="space-y-4">
                <a href="tel:4068552856" className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="font-body">(406) 855-2856</span>
                </a>
                <a href="mailto:vbk125@gmail.com" className="flex items-center gap-4 text-primary-foreground/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="font-body">vbk125@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-primary-foreground mb-4">Brokerage</h3>
              <div className="flex items-start gap-4 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div className="font-body">
                  <p className="font-bold">Real Estate Hub Billings</p>
                  <p>Billings, Montana</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-primary-foreground/20">
              <p className="font-display text-lg text-primary-foreground">Victoria Brauer-Konitz</p>
              <p className="text-primary-foreground/60 font-body mt-1">
                Real Estate Professional specializing in residential properties in Billings and surrounding areas.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="https://www.linkedin.com/in/victoria-brauer-gri-a58a12b/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary-foreground" />
                </a>
                <a href="https://www.instagram.com/victoriabk_mtrealtor/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <a href="https://www.facebook.com/VbkInMT" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent/20 transition-colors">
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
