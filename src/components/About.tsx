import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Orange Digital Center",
      description: "Actuellement en formation et développement de projets innovants",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Formation Continue",
      description: "Apprentissage constant des dernières technologies web et DevOps",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expertise Polyvalente",
      description: "Développement Fullstack, Design UI/UX et Marketing Digital",
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            À Propos
          </h2>
          <div className="w-20 h-1 gradient-primary mx-auto mb-12" />

          <div className="space-y-8">
            <p className="text-lg text-muted-foreground text-center leading-relaxed animate-fade-up">
              Passionné par la technologie et l'innovation, je suis un développeur fullstack 
              et designer UI/UX basé à Dakar, au Sénégal. Actuellement à l'Orange Digital Center, 
              je combine mes compétences en développement web, design d'interfaces et marketing 
              digital pour créer des solutions numériques complètes et impactantes.
            </p>

            <p className="text-lg text-muted-foreground text-center leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Mon approche unique me permet de comprendre tous les aspects d'un projet digital, 
              du concept initial au déploiement final, en passant par l'expérience utilisateur 
              et la stratégie de communication.
            </p>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth group animate-scale-up hover:-translate-y-2"
                  style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                    <div className="text-primary-foreground">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
