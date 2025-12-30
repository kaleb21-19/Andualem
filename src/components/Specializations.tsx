import { 
  ShieldCheck, 
  Syringe, 
  Activity, 
  AlertTriangle, 
  Users, 
  BarChart3,
  BookOpen,
  Globe
} from "lucide-react";

const Specializations = () => {
  const specializations = [
    {
      icon: ShieldCheck,
      title: "Health Systems Strengthening",
      description: "Designing and implementing strategies to improve healthcare delivery and resilience at regional and national levels.",
      color: "teal"
    },
    {
      icon: Syringe,
      title: "Immunization & Vaccines",
      description: "Expertise in polio eradication, COVID-19 campaigns, and monitoring vaccine safety and effectiveness.",
      color: "gold"
    },
    {
      icon: Activity,
      title: "Public Health Surveillance",
      description: "Early detection, monitoring, and response to outbreaks and health emergencies across diverse regions.",
      color: "teal"
    },
    {
      icon: AlertTriangle,
      title: "Emergency & Humanitarian Medicine",
      description: "Delivering essential healthcare in conflict zones and refugee settings under complex humanitarian emergencies.",
      color: "gold"
    },
    {
      icon: Users,
      title: "Capacity Building & Mentorship",
      description: "Training and mentoring healthcare providers to strengthen clinical skills and public health practices.",
      color: "teal"
    },
    {
      icon: BarChart3,
      title: "Data Quality & Health Information Systems",
      description: "Improving DHIS2 data collection, analysis, and reporting for evidence-based decision making.",
      color: "gold"
    },
    {
      icon: BookOpen,
      title: "Case Management & Preparedness",
      description: "Guiding facility readiness, infection prevention, and case management during pandemics and emergencies.",
      color: "teal"
    },
    {
      icon: Globe,
      title: "Stakeholder Coordination",
      description: "Building networks with governments, NGOs, and UN agencies to ensure effective health program implementation.",
      color: "gold"
    }
  ];

  return (
    <section id="specializations" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal/5 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Areas of <span className="text-gradient">Specialization</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Public health expertise across immunization, emergency response, and health systems strengthening, 
            focused on delivering impactful outcomes in humanitarian and global health contexts.
          </p>
        </div>

        {/* Specializations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            const isGold = spec.color === "gold";
            
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover:shadow-elegant-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${isGold ? 'bg-gold/10' : 'bg-teal/10'} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-7 h-7 ${isGold ? 'text-gold' : 'text-teal'}`} />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{spec.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{spec.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
