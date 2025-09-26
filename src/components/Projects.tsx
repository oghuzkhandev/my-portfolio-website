import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Sparkles,
  Play,
  Eye,
  Code,
  Layers,
  Server,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "AI-Powered SaaS Platform",
    description:
      "Enterprise-grade AI solution serving 10K+ daily active users with real-time processing capabilities",
    longDescription:
      "Built a comprehensive AI platform integrating OpenAI GPT-4, DALL-E 3, and custom ML models. Features include intelligent document processing, automated content generation, and predictive analytics dashboard.",
    tech: [
      "React",
      "Next.js 14",
      "OpenAI API",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
    ],
    highlights: [
      "99.9% uptime with auto-scaling infrastructure",
      "Real-time collaborative AI workspace",
      "Custom prompt engineering system",
      "Multi-tenant architecture with RBAC",
    ],
    metrics: {
      users: "10K+ Active Users",
      requests: "1M+ API Calls/Month",
      performance: "< 200ms Response Time",
    },
    demoVideo: "/demo-ai-platform.mp4",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    liveUrl: "https://ai-platform-demo.com",
    githubUrl: "https://github.com/oghuzkhandev/ai-platform",
    featured: true,
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    title: "E-Commerce Marketplace",
    description:
      "Full-stack marketplace platform processing $2M+ in monthly transactions with advanced analytics",
    longDescription:
      "Developed a scalable e-commerce solution with microservices architecture. Integrated Stripe for payments, Redis for caching, and Elasticsearch for product search. Built admin dashboard with real-time analytics.",
    tech: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "React",
      "AWS",
      "Stripe",
      "Redis",
      "Docker",
    ],
    highlights: [
      "Stripe payment integration with SCA",
      "Real-time inventory management",
      "AI-powered recommendation engine",
      "Multi-vendor support with commission system",
    ],
    metrics: {
      gmv: "$2M+ Monthly GMV",
      products: "50K+ Products",
      vendors: "500+ Active Vendors",
    },
    demoVideo: "/demo-ecommerce.mp4",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    liveUrl: "https://marketplace-demo.com",
    githubUrl: "https://github.com/oghuzkhandev/marketplace",
    featured: true,
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Mobile Banking App",
    description:
      "Cross-platform fintech application with biometric authentication and real-time transactions",
    longDescription:
      "Created a secure mobile banking solution with React Native. Implemented biometric authentication, QR code payments, and real-time transaction notifications using WebSockets.",
    tech: [
      "React Native",
      "Firebase",
      "OneSignal",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
    ],
    highlights: [
      "Biometric authentication (Face ID/Touch ID)",
      "Real-time push notifications",
      "Offline transaction queue",
      "End-to-end encryption",
    ],
    metrics: {
      downloads: "100K+ Downloads",
      rating: "4.8★ App Store",
      transactions: "10K+ Daily Transactions",
    },
    demoVideo: "/demo-mobile.mp4",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
    liveUrl: "https://mobile-banking-demo.com",
    githubUrl: "https://github.com/oghuzkhandev/mobile-banking",
    featured: true,
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Cloud DevOps Platform",
    description:
      "Kubernetes-based CI/CD platform automating deployments for 50+ microservices",
    longDescription:
      "Architected a comprehensive DevOps platform using Kubernetes, Jenkins, and GitLab CI. Implemented auto-scaling, monitoring with Prometheus/Grafana, and automated rollback mechanisms.",
    tech: [
      "Kubernetes",
      "Docker",
      "Jenkins",
      "GitLab CI",
      "Terraform",
      "AWS",
      "Prometheus",
    ],
    highlights: [
      "Zero-downtime deployments",
      "Automated rollback on failure",
      "Multi-cloud support (AWS/GCP/Azure)",
      "Infrastructure as Code with Terraform",
    ],
    metrics: {
      deployments: "500+ Daily Deployments",
      uptime: "99.99% Uptime",
      recovery: "< 5min MTTR",
    },
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/oghuzkhandev/devops-platform",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Business intelligence platform processing 100M+ events daily with ML-powered insights",
    longDescription:
      "Built a real-time analytics platform using Apache Kafka, ClickHouse, and React. Implemented complex data pipelines and machine learning models for predictive analytics.",
    tech: [
      "React",
      "D3.js",
      "Apache Kafka",
      "ClickHouse",
      "Python",
      "TensorFlow",
    ],
    highlights: [
      "Real-time data streaming",
      "Custom visualization library",
      "Predictive analytics with ML",
      "White-label solution",
    ],
    metrics: {
      events: "100M+ Events/Day",
      latency: "< 100ms Query Time",
      accuracy: "95% Prediction Accuracy",
    },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/oghuzkhandev/analytics-platform",
    icon: <Code className="w-6 h-6" />,
  },
  {
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant telemedicine platform serving 1000+ healthcare providers",
    longDescription:
      "Developed a comprehensive healthcare platform with video consultations, electronic health records, and appointment scheduling. Ensured HIPAA compliance with end-to-end encryption.",
    tech: ["Next.js", "WebRTC", "PostgreSQL", "Redis", "AWS", "Socket.io"],
    highlights: [
      "HIPAA-compliant infrastructure",
      "HD video consultations",
      "AI-powered diagnosis assistance",
      "Electronic prescription system",
    ],
    metrics: {
      providers: "1000+ Providers",
      consultations: "50K+ Monthly Consultations",
      satisfaction: "4.9/5 Patient Satisfaction",
    },
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
    githubUrl: "https://github.com/oghuzkhandev/healthcare-platform",
    icon: <Server className="w-6 h-6" />,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-accent-cyan bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-2">
            Showcasing my best work with real-world impact
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-12" />
        </motion.div>

        {/* Featured Projects with Bento Grid */}
        <div className="mb-16">
          <BentoGrid className="max-w-7xl mx-auto">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={index === 0 ? "md:col-span-2" : ""}
              >
                <BentoGridItem
                  title={
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <span>{project.title}</span>
                    </div>
                  }
                  description={project.description}
                  header={
                    <div className="relative group h-48 overflow-hidden rounded-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              onClick={() =>
                                window.open(project.liveUrl, "_blank")
                              }
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              Live Demo
                            </Button>
                          )}
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              window.open(project.githubUrl, "_blank")
                            }
                          >
                            <Github className="w-4 h-4 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                      {project.demoVideo && (
                        <button
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-background/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-primary/50"
                          onClick={() => setSelectedProject(index)}
                        >
                          <Play className="w-6 h-6 text-primary ml-1" />
                        </button>
                      )}
                    </div>
                  }
                  className={index === 0 ? "md:row-span-2" : ""}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(3).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <motion.div
                      whileHover={{ y: -10 }}
                      className="h-full p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all group relative overflow-hidden cursor-pointer"
                    >
                      {/* Project Image */}
                      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                        <div className="absolute top-4 right-4">
                          {project.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {Object.entries(project.metrics)
                            .slice(0, 2)
                            .map(([key, value]) => (
                              <Badge
                                key={key}
                                variant="secondary"
                                className="text-xs"
                              >
                                {value}
                              </Badge>
                            ))}
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-md bg-secondary/50 border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="px-2 py-1 text-xs rounded-md bg-secondary/50 border border-border">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{project.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {project.longDescription}
                      </p>
                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            window.open(project.githubUrl, "_blank")
                          }
                        >
                          <Github className="w-3 h-3 mr-1" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in seeing more? Check out my GitHub for all projects and
            contributions
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() =>
                window.open("https://github.com/oghuzkhandev", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90"
              onClick={() =>
                window.open("https://oguzhandogandev.com", "_blank")
              }
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Portfolio
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative w-full max-w-4xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedProject(null)}
            >
              <span className="text-2xl">✕</span>
            </button>
            <div className="aspect-video bg-card rounded-lg overflow-hidden border border-border">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={projects[selectedProject].demoVideo}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
