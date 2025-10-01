import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Plateforme E-Commerce Moderne",
      description:
        "Application e-commerce complète avec panier, paiement sécurisé, gestion des stocks et tableau de bord administrateur. Développée avec React, Node.js et PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Application de Gestion de Projet",
      description:
        "Outil collaboratif de gestion de projet avec tableaux Kanban, suivi du temps, et reporting avancé. Interface intuitive et responsive.",
      tags: ["Next.js", "TypeScript", "Prisma", "AWS", "CI/CD"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Dashboard Analytics & Monitoring",
      description:
        "Tableau de bord temps réel pour visualisation de données avec graphiques interactifs, alertes automatiques et exports personnalisables.",
      tags: ["React", "D3.js", "Python", "Redis", "Kubernetes"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Design System & Component Library",
      description:
        "Bibliothèque de composants réutilisables avec documentation complète, thème personnalisable et accessibilité WCAG 2.1 AA.",
      tags: ["React", "Storybook", "Figma", "TypeScript", "CSS"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Application Mobile Hybride",
      description:
        "Application mobile cross-platform avec fonctionnalités offline, notifications push et synchronisation cloud. Design moderne et performant.",
      tags: ["React Native", "Firebase", "Redux", "Jest", "CI/CD"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Site Web d'Entreprise",
      description:
        "Site vitrine moderne avec CMS personnalisé, blog intégré, optimisation SEO avancée et analytics. Temps de chargement optimisé.",
      tags: ["Next.js", "Headless CMS", "SEO", "Google Analytics", "Vercel"],
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
              className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-smooth group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth" />
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
                      className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
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
