import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      title: "Medical Conference 2023",
      description: "Presenting research findings at the African Medical Conference"
    },
    {
      url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop",
      title: "Patient Consultation",
      description: "Providing comprehensive care to patients"
    },
    {
      url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&h=400&fit=crop",
      title: "Award Ceremony",
      description: "Receiving the Excellence in Healthcare Award"
    },
    {
      url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=600&h=400&fit=crop",
      title: "Research Laboratory",
      description: "Conducting clinical research for improved treatments"
    },
    {
      url: "https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?w=600&h=400&fit=crop",
      title: "Medical Team",
      description: "Collaborating with healthcare professionals"
    },
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
      title: "Community Outreach",
      description: "Health awareness program in rural communities"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Professional <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Highlights from conferences, research activities, and community engagement initiatives.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-elegant cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-primary-foreground font-display text-lg mb-1">{image.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].url.replace('w=600&h=400', 'w=1200&h=800')}
              alt={images[selectedImage].title}
              className="w-full h-auto rounded-2xl shadow-elegant-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-primary-foreground font-display text-xl">{images[selectedImage].title}</h3>
              <p className="text-primary-foreground/70">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
