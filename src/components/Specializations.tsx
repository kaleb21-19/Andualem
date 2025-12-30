import { 
  Heart, 
  Activity, 
  Stethoscope, 
  Brain, 
  Users, 
  Microscope,
  Pill,
  ClipboardCheck
} from "lucide-react";

const Specializations = () => {
  const specializations = [
    {
      icon: Heart,
      title: "Cardiovascular Medicine",
      description: "Comprehensive diagnosis and treatment of heart conditions, including preventive cardiology and heart failure management.",
      color: "teal"
    },
    {
      icon: Activity,
      title: "Internal Medicine",
      description: "Primary care for adults with focus on prevention, diagnosis, and treatment of complex medical conditions.",
      color: "gold"
    },
    {
      icon: Brain,
      title: "Chronic Disease Management",
      description: "Long-term care strategies for diabetes, hypertension, and other chronic conditions with personalized treatment plans.",
      color: "teal"
    },
    {
      icon: Stethoscope,
      title: "Preventive Healthcare",
      description: "Proactive health screenings, lifestyle counseling, and early intervention strategies to prevent illness.",
      color: "gold"
    },
    {
      icon: Users,
      title: "Geriatric Medicine",
      description: "Specialized care for elderly patients addressing age-related health challenges with compassion and expertise.",
      color: "teal"
    },
    {
      icon: Microscope,
      title: "Clinical Research",
      description: "Active participation in clinical trials and research studies to advance medical knowledge and treatment options.",
      color: "gold"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Expert oversight of complex medication regimens to optimize therapeutic outcomes and minimize interactions.",
      color: "teal"
    },
    {
      icon: ClipboardCheck,
      title: "Health Consultations",
      description: "Second opinion services and comprehensive health assessments for complex medical cases.",
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
            Comprehensive medical expertise across multiple disciplines, focused on delivering 
            exceptional patient outcomes through evidence-based practice.
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
