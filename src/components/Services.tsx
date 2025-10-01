import { Code, Palette, TrendingUp, Rocket, Headphones, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Développement Web Fullstack",
      description:
        "Création d'applications web complètes et performantes, du frontend au backend, avec les technologies les plus récentes.",
      features: [
        "Applications React & Next.js",
        "APIs RESTful & GraphQL",
        "Architecture microservices",
        "Optimisation des performances",
      ],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "Conception d'interfaces utilisateur intuitives et esthétiques qui offrent une expérience utilisateur exceptionnelle.",
      features: [
        "Wireframing & Prototypage",
        "Design Systems",
        "Tests utilisateurs",
        "Design responsive",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing Digital",
      description:
        "Stratégies digitales complètes pour améliorer votre visibilité en ligne et atteindre vos objectifs commerciaux.",
      features: [
        "SEO & Optimisation",
        "Gestion des réseaux sociaux",
        "Campagnes publicitaires",
        "Analytics & Reporting",
      ],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "DevOps & Déploiement",
      description:
        "Configuration et automatisation de l'infrastructure pour des déploiements rapides, sécurisés et scalables.",
      features: [
        "CI/CD Pipelines",
        "Containerisation Docker",
        "Cloud Infrastructure",
        "Monitoring & Logging",
      ],
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Consulting & Formation",
      description:
        "Accompagnement personnalisé et formation pour vos équipes sur les meilleures pratiques du développement web.",
      features: [
        "Audit technique",
        "Code review",
        "Formation équipes",
        "Best practices",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Maintenance & Support",
      description:
        "Support technique continu et maintenance évolutive pour garantir le bon fonctionnement de vos applications.",
      features: [
        "Mises à jour régulières",
        "Correction de bugs",
        "Optimisation continue",
        "Support technique",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Services
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-4" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Des solutions digitales sur mesure pour concrétiser vos projets
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card hover:shadow-elegant transition-smooth group animate-scale-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
            >
              <div className="w-16 h-16 gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <div className="text-primary-foreground">{service.icon}</div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:animate-bounce-subtle" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
