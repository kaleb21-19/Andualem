import { Mail, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-doctor.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-6">
                Global Health & Humanitarian Medicine
              </span>
            </div>
            
            <h1 className="opacity-0 animate-fade-in-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-display text-primary-foreground leading-tight mb-6">
              Dr. Andualem <br />
              <span className="text-gradient-gold">Assefa, MD</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in-up animation-delay-200 text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Public health physician with extensive experience in immunization, emergency response, 
              and health systems strengthening. Partnered with WHO, UNICEF, and ICRC to deliver 
              life-saving healthcare in Ethiopia, Pakistan, and South Sudan.
            </p>

            <div className="opacity-0 animate-fade-in-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:kalebtegegn12@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact via Email
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a 
                  href="https://www.linkedin.com/in/andualem-assefa-assefa-501b01239" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="opacity-0 animate-fade-in-up animation-delay-400 grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/10">
              <div>
                <div className="text-3xl md:text-4xl font-display text-gold">15+</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Years in Global Health</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-gold">100+</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Campaigns & Field Missions</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display text-gold">3</div>
                <div className="text-sm text-primary-foreground/60 mt-1">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="opacity-0 animate-scale-in animation-delay-200 relative">
              <div className="absolute inset-0 bg-accent-gradient rounded-3xl rotate-6 opacity-20" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-3xl overflow-hidden shadow-glow">
                <img
                  src="/assets/2025-12-30 17.22.55.jpg"
                  alt="Dr. Andualem Assefa - Professional Portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl shadow-elegant-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center">
                    <span className="text-accent-foreground font-display text-lg">MD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Medical Doctor</div>
                    <div className="text-muted-foreground text-xs">Addis Ababa University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
