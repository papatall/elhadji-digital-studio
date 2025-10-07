import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "gestion de cargaison",
      description:
        "Application e-commerce complète avec panier, paiement sécurisé, gestion des stocks et tableau de bord administrateur. Développée avec React, Node.js et PostgreSQL.",
      tags: ["TYPESCRIPT", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      code: "https://github.com/amadoutall023/projetCargai",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Application CLONE WHATSAPP",
      description:
        "Outil collaboratif de gestion de projet avec tableaux Kanban, suivi du temps, et reporting avancé. Interface intuitive et responsive.",
      tags: ["Next.js", "TypeScript", "Prisma", "AWS", "CI/CD"],
      code: "https://github.com/amadoutall023/projet-whatsapp",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "CLONE MAXIT",
      description:
        "Tableau de bord temps réel pour visualisation de données avec graphiques interactifs, alertes automatiques et exports personnalisables.",
      tags: ["React", "D3.js", "Python", "Redis", "Kubernetes"],
      code: "https://github.com/amadoutall023/maxita",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "GESTION DE PERSONNEL A ORANGE DIGITAL CENTER",
      description:
        "Bibliothèque de composants réutilisables avec documentation complète, thème personnalisable et accessibilité WCAG 2.1 AA.",
      tags: ["React", "Storybook", "Figma", "TypeScript", "CSS"],
      code: "https://github.com/amadoutall023/ges-app-odc",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "application de gestion de salariés",
      description:
        "Application mobile cross-platform avec fonctionnalités offline, notifications push et synchronisation cloud. Design moderne et performant.",
      tags: ["React Native", "Firebase", "Redux", "Jest", "CI/CD"],
      code: "https://github.com/amadoutall023/projetEntrepriseFrontend-2/tree/main/projetEntrepriseFrontend",
      demo: "https://ecommerce-demo.vercel.app",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Site Web E commerce",
      description:
        "Site vitrine moderne avec CMS personnalisé, blog intégré, optimisation SEO avancée et analytics. Temps de chargement optimisé.",
      tags: ["Next.js", "Headless CMS", "SEO", "Google Analytics", "Vercel"],
      code: "https://github.com/ton-projet-ecommerce",
      demo: "https://tatrend.shop",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="projets" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Projets Réalisés
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-4" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Une sélection de projets web et applications que j'ai développés
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-smooth group animate-fade-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              {/* Project Header with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
                  {project.code && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 hover:scale-105 transition-transform"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
