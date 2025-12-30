import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 30 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const lightboxVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const images = [
    {
      url: "/assets/2025-12-30 17.22.55.jpg",
      title: "Professional Portrait",
      description: "Dr. Andualem in professional setting"
    },
    {
      url: "/assets/2025-12-30 17.23.09.jpg", 
      title: "Conference Presentation",
      description: "Presenting research at international conference"
    },
    {
      url: "/assets/2025-12-30 17.34.08.jpg",
      title: "Research Collaboration",
      description: "Working with international health partners"
    },
    {
      url: "/assets/2025-12-30 17.34.12.jpg",
      title: "Community Health Initiative",
      description: "Engaging with local communities for health programs"
    },
    {
      url: "/assets/2025-12-30 17.23.31.jpg",
      title: "Health Education Workshop",
      description: "Conducting health education sessions with local residents"
    },
    {
      url: "/assets/2025-12-30 17.22.55.jpg",
      title: "Research Laboratory",
      description: "Working in the state-of-the-art research facility"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4">
            Professional <span className="text-gradient">Moments</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Highlights from conferences, research activities, and community engagement initiatives.
          </p>
        </motion.div>

        {/* Gallery grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-elegant cursor-pointer"
              variants={imageVariants}
              onClick={() => setSelectedImage(index)}
              whileHover={{ 
                y: -8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              <div className="overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-primary-foreground font-display text-lg mb-1">{image.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-5 h-5 text-foreground" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-navy-dark/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            variants={lightboxVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card/20 flex items-center justify-center text-primary-foreground hover:bg-card/30 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div 
              className="max-w-5xl w-full" 
              onClick={(e) => e.stopPropagation()}
              variants={lightboxVariants}
            >
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-auto rounded-2xl shadow-elegant-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-primary-foreground font-display text-xl">{images[selectedImage].title}</h3>
                <p className="text-primary-foreground/70">{images[selectedImage].description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
