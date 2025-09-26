import { motion } from "framer-motion";
import React from "react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "React Native",
      "Zustand",
      "GSAP",
      "ShadcnUI",
    ],
    color: "from-blue-700 to-indigo-500",
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Spring Boot",
      "REST API",
      "GraphQL",
      "Microservices",
    ],
    color: "from-violet-700 to-pink-600",
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "Supabase",
      "Drizzle ORM",
      "Neon",
    ],
    color: "from-emerald-600 to-cyan-500",
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Redis",
      "Apache Kafka",
      "CI/CD",
      "Git",
      "Sentry",
    ],
    color: "from-slate-500 to-sky-400",
  },
  {
    title: "AI & Integrations",
    skills: [
      "OpenAI API",
      "Fal.ai",
      "ReplicateAI",
      "Clerk",
      "Strapi",
      "JWT",
      "OneSignal",
    ],
    color: "from-yellow-600 to-orange-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-transparent to-purple-950 opacity-70" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-primary via-accent to-accent-cyan bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-2">
            Modern tech stack for building scalable applications
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                className="relative p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card transition-all h-full overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color}`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent flex items-center gap-2`}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="inline-block"
                    >
                      ✦
                    </motion.span>
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [-5, 5, -5, 0],
                          transition: { duration: 0.3 },
                        }}
                        className="relative px-3 py-1.5 text-sm rounded-full bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 transition-all cursor-default overflow-hidden group/skill"
                      >
                        <span className="relative z-10">{skill}</span>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover/skill:opacity-20 transition-opacity`}
                        />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Frontend Development",
                level: 95,
                color: "from-blue-700 to-indigo-500",
              },
              {
                name: "Backend Development",
                level: 90,
                color: "from-violet-700 to-pink-600",
              },
              {
                name: "Cloud Architecture",
                level: 84,
                color: "from-emerald-600 to-cyan-500",
              },
              {
                name: "DevOps & CI/CD",
                level: 87,
                color: "from-slate-500 to-sky-400",
              },
              {
                name: "AI Integration",
                level: 82,
                color: "from-yellow-600 to-orange-500",
              },
              {
                name: "System Design",
                level: 85,
                color: "from-indigo-600 to-violet-500",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-md max-w-4xl mx-auto shadow-xl transition-all duration-500 hover:shadow-primary/20 relative overflow-hidden">
            <h3 className="text-2xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400">
              Other Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                "SEO Optimization",
                "Performance Tuning",
                "Agile/Scrum",
                "System Architecture",
                "API Design",
                "Microservices",
                "Test-Driven Development",
                "Code Review",
                "Technical Documentation",
                "Problem Solving",
                "Client Communication",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    y: -2,
                    boxShadow: "0 4px 15px rgba(var(--color-primary), 0.3)",
                  }}
                  className="px-4 py-2 text-sm font-medium whitespace-nowrap 
                             bg-primary/10 text-primary rounded-full border border-primary/30 
                             hover:bg-primary hover:text-white transition-all cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
