import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import maPhoto from "../assets/papa.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-up">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse" />
            <img
              src={maPhoto}
              alt="EL HADJI AMADOU TALL"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-elegant relative z-10 border-4 border-background hover:scale-110 transition-smooth animate-float"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              EL HADJI AMADOU TALL
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Développeur Fullstack • UI/UX Designer • Marketer Digital
            </p>
                
            <p className="text-lg md:text-xl gradient-primary bg-clip-text text-transparent font-semibold">
              Créer, innover et développer des solutions digitales impactantes
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              📍 Dakar, Sénégal • Orange Digital Center
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("#projets")}
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Me contacter
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-card"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-card"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-smooth shadow-card"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#apropos")}
            className="mt-8 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
