import { Mail, Phone, MapPin, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl text-primary-foreground mb-4">
              Dr. Andualem Assefa
            </h3>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Dedicated physician committed to excellence in patient care, medical research, 
              and advancing healthcare in Ethiopia and beyond.
            </p>
            <a
              href="mailto:dr.andualem@example.com"
              className="inline-flex items-center gap-2 text-teal-light hover:text-teal transition-colors"
            >
              <Mail className="w-5 h-5" />
              dr.andualem@example.com
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#specializations", label: "Expertise" },
                { href: "#publications", label: "Research" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#gallery", label: "Gallery" },
                { href: "#cv", label: "CV" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">dr.andualem@example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">+251 911 123 456</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70">Addis Ababa, Ethiopia</span>
              </li>
            </ul>

            {/* Social */}
            <div className="mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary-foreground/10 text-primary-foreground hover:bg-teal/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {currentYear} Dr. Andualem Assefa. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs text-center md:text-right">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-teal/30 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
