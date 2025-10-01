import {
  Code2,
  Database,
  Palette,
  BarChart3,
  Server,
  Cloud,
  Container,
  GitBranch,
  Shield,
  Workflow,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "React.js & Next.js",
        "TypeScript & JavaScript",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Redux & State Management",
        "Responsive Design",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Node.js & Express",
        "Python & Django",
        "RESTful APIs",
        "GraphQL",
        "Authentication & Security",
        "Microservices",
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Supabase",
        "Firebase",
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "AWS & Azure",
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Nginx & Apache",
        "Linux Administration",
      ],
    },
    {
      title: "Container & Orchestration",
      icon: <Container className="w-6 h-6" />,
      skills: [
        "Docker Compose",
        "Kubernetes",
        "Container Registry",
        "Helm Charts",
        "Service Mesh",
        "Load Balancing",
      ],
    },
    {
      title: "Version Control & Collaboration",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        "Git & GitHub",
        "GitLab",
        "Bitbucket",
        "Code Review",
        "Branching Strategies",
        "Project Management",
      ],
    },
    {
      title: "Security & Monitoring",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "SSL/TLS Configuration",
        "Security Best Practices",
        "Prometheus",
        "Grafana",
        "Log Management",
        "Performance Monitoring",
      ],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "Figma & Adobe XD",
        "Wireframing & Prototyping",
        "Design Systems",
        "User Research",
        "Interaction Design",
        "Visual Design",
      ],
    },
    {
      title: "Digital Marketing",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Google Analytics",
        "Email Marketing",
        "Campaign Management",
      ],
    },
    {
      title: "Automation & CI/CD",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        "Jenkins",
        "GitLab CI/CD",
        "GitHub Actions",
        "Terraform",
        "Ansible",
        "Infrastructure as Code",
      ],
    },
  ];

  return (
    <section id="competences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Compétences Techniques
        </h2>
        <div className="w-20 h-1 gradient-primary mx-auto mb-4" />
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Une expertise complète couvrant le développement web fullstack, DevOps, 
          design UI/UX et marketing digital
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-smooth group animate-scale-up hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                  <div className="text-primary-foreground">{category.icon}</div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:animate-bounce-subtle" />
                    {skill}
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

export default Skills;
