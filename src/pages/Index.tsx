import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CVSection from "@/components/CVSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfessionalExperience from "@/components/Publications";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Specializations />
      <ProfessionalExperience />
      <Testimonials />
      <Gallery />
      <CVSection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
