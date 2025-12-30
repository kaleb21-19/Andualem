import { Calendar, MapPin, Briefcase } from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      role: "Health Field Officer",
      organization: "International Committee of the Red Cross (ICRC)",
      duration: "Aug 2023 – Present",
      location: "Bahir Dar, Ethiopia",
      type: "Humanitarian Health",
      highlights: [
        "Implemented, managed, and monitored health programmes in conflict-affected areas",
        "Led rapid and in-depth health needs assessments and field evaluations",
        "Coordinated with national and regional health authorities, UN agencies, NGOs, and ERCS",
        "Strengthened DHIS2 data quality, reporting, and utilization",
        "Represented ICRC in coordination meetings with governmental and non-governmental stakeholders",
      ],
    },
    {
      role: "Immunization & Vaccines AEFI Monitoring Expert",
      organization: "EFDA / Amhara Bureau of Health / UNICEF",
      duration: "Aug 2022 – Aug 2023",
      location: "Amhara Region, Ethiopia",
      type: "Immunization & Surveillance",
      highlights: [
        "Provided technical leadership on AEFI monitoring and vaccine safety surveillance",
        "Supported measles, polio, and COVID-19 immunization campaigns",
        "Strengthened epidemiological surveillance and emergency preparedness systems",
        "Improved immunization data quality and reporting mechanisms",
      ],
    },
    {
      role: "Case Management Officer",
      organization: "World Health Organization (WHO)",
      duration: "Oct 2020 – Dec 2021",
      location: "Addis Ababa, Ethiopia",
      type: "Public Health Emergency",
      highlights: [
        "Led COVID-19 case management preparedness and response",
        "Conducted facility readiness assessments and accreditation for COVID-19 treatment",
        "Provided technical support on IPC and clinical case management",
        "Supported coordination and monitoring of national COVAX vaccination campaigns",
      ],
    },
    {
      role: "Public Health Emergency Surveillance Officer",
      organization: "World Health Organization (WHO)",
      duration: "Dec 2017 – Dec 2019",
      location: "Oromia Region, Ethiopia",
      type: "Emergency Surveillance",
      highlights: [
        "Coordinated early detection, surveillance, and response to public health emergencies",
        "Strengthened public health surveillance systems at regional and facility levels",
        "Conducted data analysis and supported emergency preparedness activities",
        "Collaborated with government and partner organizations on outbreak response",
      ],
    },
    {
      role: "STOP Field Epidemiology Consultant",
      organization: "World Health Organization (WHO)",
      duration: "Feb 2016 – Jun 2017",
      location: "Islamabad, Pakistan",
      type: "Global Health & Epidemiology",
      highlights: [
        "Provided technical support on routine immunization and AFP surveillance",
        "Supported national and sub-national staff capacity building",
        "Contributed to planning and supervision of polio SIAs and LQAS activities",
        "Focused on hard-to-reach populations including migrants and border communities",
      ],
    },
    {
      role: "Emergency Primary Health Care Doctor",
      organization: "International Medical Corps",
      duration: "Oct 2014 – Aug 2015",
      location: "Upper Nile State, South Sudan",
      type: "Clinical & Humanitarian",
      highlights: [
        "Led the overall management of a primary health care center in a refugee setting",
        "Provided preventive and curative PHC services during complex humanitarian emergencies",
        "Supervised clinical staff and ensured quality health service delivery",
        "Responded to infectious disease outbreaks and emergency medical needs",
      ],
    },
    {
      role: "Clinical Physician Mentor",
      organization: "Abt Associates",
      duration: "Jul 2011 – Jun 2014",
      location: "Addis Ababa, Ethiopia",
      type: "Clinical Mentorship",
      highlights: [
        "Provided on-the-job clinical mentorship and capacity building to PHC providers",
        "Supported HIV/AIDS, maternal, and child health service delivery",
        "Conducted clinical consultations and continuous professional development sessions",
        "Improved quality of care in private ART facilities",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Humanitarian Health":
        return "bg-teal/10 text-teal";
      case "Public Health Emergency":
        return "bg-gold/10 text-gold";
      case "Immunization & Surveillance":
        return "bg-primary/10 text-primary";
      case "Emergency Surveillance":
        return "bg-secondary/10 text-secondary-foreground";
      case "Global Health & Epidemiology":
        return "bg-indigo-500/10 text-indigo-500";
      case "Clinical & Humanitarian":
        return "bg-rose-500/10 text-rose-500";
      case "Clinical Mentorship":
        return "bg-emerald-500/10 text-emerald-500";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="publications" className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Career Journey
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Over a decade of leadership in clinical care, humanitarian response,
            public health surveillance, and global health system strengthening.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border/50 shadow-elegant hover:shadow-elegant-lg transition-all"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                  {exp.type}
                </span>

                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {exp.duration}
                </span>
              </div>

              <h3 className="text-xl font-display mb-1">{exp.role}</h3>

              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.organization}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </span>
              </div>

              <ul className="list-disc ml-5 space-y-2 text-sm text-muted-foreground">
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;
