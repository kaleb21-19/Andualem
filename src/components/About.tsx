import { GraduationCap, Award, Heart, BookOpen } from "lucide-react";

const About = () => {
  const education = [
    {
      year: "2005",
      degree: "Doctor of Medicine (MD)",
      institution: "Addis Ababa University, Medical Faculty",
      description: "Completed medical training with focus on public health and clinical practice"
    }
  ];

  const certifications = [
    { name: "Quality Control Expertise", issuer: "Professional Experience" },
    { name: "Health Systems Strengthening", issuer: "WHO & ICRC Programs" },
    { name: "Polio Surveillance & Immunization", issuer: "WHO STOP Program" }
  ];

  const awards = [
    "Recognized for leadership in COVID-19 case management, WHO Ethiopia (2021)",
    "Commendation for immunization campaign coordination, UNICEF/EFDA (2023)",
    "Acknowledged for rapid health assessments in conflict zones, ICRC (2024)",
    "Certificate of appreciation for polio eradication support, WHO Pakistan (2017)"
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Dedicated to <span className="text-gradient">Global Health</span> & Humanitarian Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A physician and public health professional committed to strengthening health systems, 
            leading emergency responses, and advancing immunization programs across Ethiopia and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Biography */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-2xl font-display text-foreground">My Philosophy</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Healthcare is more than treatment—it is about resilience, equity, and compassion. 
                My career has been dedicated to serving vulnerable communities in humanitarian 
                and emergency contexts, ensuring access to essential health services even in 
                the most challenging environments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From leading immunization campaigns to conducting rapid health assessments in 
                conflict zones, I strive to combine evidence-based medicine with empathy, 
                collaboration, and system-strengthening for lasting impact.
              </p>
            </div>

            {/* Awards highlight */}
            <div className="bg-hero-gradient rounded-2xl p-8 shadow-elegant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-display text-primary-foreground">Awards & Recognition</h3>
              </div>
              <ul className="space-y-4">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold mt-2" />
                    <span className="text-primary-foreground/80">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-teal" />
                </div>
                <h3 className="text-2xl font-display text-foreground">Education</h3>
              </div>
              <div className="relative">
                <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />
                <div className="space-y-6">
                  {education.map((item, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-teal border-4 border-background" />
                      <div className="bg-card rounded-xl p-5 shadow-elegant border border-border/50 hover:shadow-elegant-lg transition-shadow duration-300">
                        <span className="text-sm text-teal font-medium">{item.year}</span>
                        <h4 className="font-display text-foreground font-semibold mt-1">{item.degree}</h4>
                        <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                        <p className="text-muted-foreground/70 text-sm mt-2">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-2xl font-display text-foreground">Core Expertise</h3>
              </div>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-4 shadow-elegant border border-border/50 hover:border-teal/30 transition-all duration-300"
                  >
                    <h4 className="font-medium text-foreground">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
