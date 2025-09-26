import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Atersan Yapı Çözümleri",
    location: "Izmir, Turkey",
    period: "09/2024 – 12/2024",
    description: [
      "Contributed to strengthening the company's software infrastructure by enhancing database performance and ensuring reliable system operations",
      "Designed secure and functional APIs based on user requirements, reducing integration issues during testing by 15%",
      "Developed backend modules with Spring Boot & PostgreSQL, improving data management and integration efficiency by ~20%",
    ],
  },
  {
    title: "Software Intern",
    company: "Simge Bilgi İletişim Çözümevi Ltd. Şti.",
    location: "Izmir, Turkey",
    period: "06/2024 – 08/2024",
    description: [
      "Delivered 3 new ERP features using Java & Spring Boot within internship period",
      "Optimized PostgreSQL queries, improving reporting performance by 20%",
      "Assisted debugging & testing, reducing pre-release bugs",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 pl-20"
            >
              {/* Timeline dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background"
              />

              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card hover:border-primary/50 transition-all"
              >
                <div className="flex flex-wrap gap-4 mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground flex items-start"
                    >
                      <span className="text-primary mr-2 mt-1.5">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
