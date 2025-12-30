import { Download, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CVSection = () => {
  const timeline = [
    {
      year: "2023 - Present",
      title: "Health Field Officer",
      organization: "International Committee of the Red Cross (ICRC)",
      type: "experience"
    },
    {
      year: "2022 - 2023",
      title: "Immunization & Vaccines AEFI Monitoring Expert",
      organization: "EFDA / ABH Partners / UNICEF",
      type: "experience"
    },
    {
      year: "2020 - 2021",
      title: "Case Management Officer",
      organization: "World Health Organization (WHO), Ethiopia",
      type: "experience"
    },
    {
      year: "2017 - 2019",
      title: "Public Health Emergency Surveillance Officer",
      organization: "World Health Organization (WHO), Oromia Region",
      type: "experience"
    },
    {
      year: "2016 - 2017",
      title: "STOP Field Epidemiology Consultant",
      organization: "World Health Organization (WHO), Pakistan",
      type: "experience"
    },
    {
      year: "2014 - 2015",
      title: "Emergency Primary Health Care Doctor",
      organization: "International Medical Corps, South Sudan",
      type: "experience"
    },
    {
      year: "2011 - 2014",
      title: "Clinical Physician Mentor",
      organization: "Abt Associates, Ethiopia",
      type: "experience"
    },
    {
      year: "2005",
      title: "Doctor of Medicine (MD)",
      organization: "Addis Ababa University, Medical Faculty",
      type: "education"
    }
  ];

  return (
    <section id="cv" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A visual overview of my academic journey and professional experience in global health and humanitarian medicine.
          </p>
        </div>

        {/* Download CV button */}
        <div className="text-center mb-12">
          <Button variant="gold" size="lg" asChild>
            <a href="/public/Profile.pdf" download target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Full CV (PDF)
            </a>
          </Button>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const isEducation = item.type === "education";
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className={`relative md:flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                    {/* Dot on timeline */}
                    <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2">
                      <div className={`w-4 h-4 rounded-full ${isEducation ? 'bg-teal' : 'bg-gold'} border-4 border-background`} />
                    </div>

                    {/* Card */}
                    <div className={`md:w-[calc(50%-2rem)] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover:shadow-elegant-lg transition-shadow duration-300">
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${isEducation ? 'bg-teal/10' : 'bg-gold/10'}`}>
                            {isEducation ? (
                              <GraduationCap className="w-6 h-6 text-teal" />
                            ) : (
                              <Briefcase className="w-6 h-6 text-gold" />
                            )}
                          </div>
                          <div>
                            <span className={`text-sm font-medium ${isEducation ? 'text-teal' : 'text-gold'}`}>
                              {item.year}
                            </span>
                            <h3 className="font-display text-lg text-foreground mt-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{item.organization}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-teal" />
            <span className="text-sm text-muted-foreground">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gold" />
            <span className="text-sm text-muted-foreground">Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
