import { ExternalLink, FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Cardiovascular Risk Assessment in Sub-Saharan Africa: A Comprehensive Review",
      journal: "The Lancet Global Health",
      year: "2023",
      type: "Review Article",
      doi: "10.1016/j.langlh.2023.01.001",
      citations: 45
    },
    {
      title: "Hypertension Management in Resource-Limited Settings: Novel Approaches",
      journal: "Journal of the American Medical Association",
      year: "2022",
      type: "Original Research",
      doi: "10.1001/jama.2022.12345",
      citations: 78
    },
    {
      title: "Impact of Telemedicine on Chronic Disease Outcomes in Rural Ethiopia",
      journal: "New England Journal of Medicine",
      year: "2022",
      type: "Clinical Trial",
      doi: "10.1056/NEJMoa2201234",
      citations: 112
    },
    {
      title: "Preventive Cardiology Strategies for Low-Income Countries",
      journal: "Circulation",
      year: "2021",
      type: "Guidelines",
      doi: "10.1161/CIRCULATIONAHA.121.001",
      citations: 89
    },
    {
      title: "Patient-Centered Care Model Implementation in African Healthcare Systems",
      journal: "BMJ Global Health",
      year: "2021",
      type: "Original Research",
      doi: "10.1136/bmjgh-2021-001234",
      citations: 56
    },
    {
      title: "Traditional Medicine Integration in Modern Healthcare: Ethical Considerations",
      journal: "Journal of Medical Ethics",
      year: "2020",
      type: "Commentary",
      doi: "10.1136/medethics-2020-001234",
      citations: 34
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Original Research": return "bg-teal/10 text-teal";
      case "Clinical Trial": return "bg-gold/10 text-gold";
      case "Review Article": return "bg-primary/10 text-primary";
      case "Guidelines": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="publications" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Research & Publications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Academic <span className="text-gradient">Contributions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Peer-reviewed publications advancing medical knowledge and improving healthcare 
            practices across Africa and beyond.
          </p>
        </div>

        {/* Publications list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-elegant border border-border/50 hover:shadow-elegant-lg hover:border-teal/20 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(pub.type)}`}>
                      {pub.type}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {pub.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-display text-foreground mb-2 group-hover:text-teal transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    <span className="font-medium">{pub.journal}</span>
                    <span className="mx-2">•</span>
                    <span>{pub.citations} citations</span>
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    DOI: {pub.doi}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-teal hover:text-teal hover:bg-teal/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gold hover:text-gold hover:bg-gold/10">
                    <FileText className="w-4 h-4 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Publications
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Publications;
