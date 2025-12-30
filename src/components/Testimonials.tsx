import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Dr. Andualem's expertise and compassionate care transformed my health journey. His thorough approach to diagnosis and treatment gave me confidence in my recovery.",
      author: "M.T.",
      role: "Patient",
      rating: 5,
      location: "Addis Ababa"
    },
    {
      quote: "An exceptional physician who combines deep medical knowledge with genuine empathy. Dr. Assefa takes the time to explain everything clearly and ensure you understand your treatment plan.",
      author: "S.K.",
      role: "Patient",
      rating: 5,
      location: "Addis Ababa"
    },
    {
      quote: "Working alongside Dr. Andualem has been an incredible learning experience. His dedication to patient care and medical research sets the standard for excellence in our field.",
      author: "Dr. Hiwot M.",
      role: "Colleague",
      rating: 5,
      location: "Black Lion Hospital"
    },
    {
      quote: "Dr. Assefa's contributions to cardiovascular research have significantly impacted healthcare practices in Ethiopia. His work is both innovative and practical.",
      author: "Prof. Daniel A.",
      role: "Research Collaborator",
      rating: 5,
      location: "Addis Ababa University"
    },
    {
      quote: "After years of struggling with chronic conditions, Dr. Andualem developed a comprehensive treatment plan that finally worked. I am grateful for his persistence and care.",
      author: "A.B.",
      role: "Patient",
      rating: 5,
      location: "Addis Ababa"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/20 text-teal-light text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-primary-foreground mb-4">
            What People <span className="text-gradient-gold">Say</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Feedback from patients and colleagues who have experienced the care and expertise 
            that defines my medical practice.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center z-10">
              <Quote className="w-8 h-8 text-gold" />
            </div>

            {/* Testimonial card */}
            <div className="bg-card/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8 font-display italic">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-primary-foreground font-semibold text-lg">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-primary-foreground/60 text-sm">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-card/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-card/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "w-8 bg-gold" 
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
