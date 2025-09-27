"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Lightbulb,
  Briefcase,
  Trophy,
  Star,
} from "lucide-react";
import { useRef } from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Badge } from "@/components/ui/badge";
import { Button } from "../components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering high-end, refined solutions with precision & care",
    color: "from-amber-400 via-orange-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Thriving in synergy, bringing ideas to life together",
    color: "from-sky-400 via-cyan-400 to-teal-500",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Focused on creating measurable business impact",
    color: "from-emerald-400 via-green-500 to-lime-400",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring and mastering cutting-edge technologies",
    color: "from-violet-500 via-fuchsia-500 to-rose-500",
  },
];

const achievements = [
  { id: 1, name: "Innovation", designation: "Built AI-powered solutions" },
  {
    id: 2,
    name: "Performance",
    designation: "Optimized apps for speed & scalability",
  },
  {
    id: 3,
    name: "Creativity",
    designation: "Crafted elegant UI/UX experiences",
  },
  { id: 4, name: "Growth", designation: "Constantly learning & adapting" },
];

const stats = [
  {
    number: "3+",
    label: "Years Experience",
    icon: Briefcase,
    color: "from-sky-400 to-cyan-400",
  },
  {
    number: "20+",
    label: "Projects Completed",
    icon: Trophy,
    color: "from-amber-400 to-pink-500",
  },
  {
    number: "10+",
    label: "Technologies Mastered",
    icon: Star,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "100%",
    label: "Problem Solving Focus",
    icon: Award,
    color: "from-emerald-400 to-green-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 -z-10">
        <SparklesCore
          id="aboutSparkles"
          background="transparent"
          minSize={0.8}
          maxSize={2}
          particleDensity={45}
          className="w-full h-full"
          particleColor="#38bdf8"
        />
      </div>

      <motion.div
        className="absolute top-20 -left-20 w-80 h-80 md:w-96 md:h-96 bg-fuchsia-500/20 rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-96 h-96 md:w-[500px] md:h-[500px] bg-cyan-500/20 rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 mx-auto mb-16 md:mb-20 rounded-full shadow-lg" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-fuchsia-500 to-sky-400 bg-clip-text text-transparent text-center md:text-left">
              Turning Complex Problems into Scalable Digital Solutions
            </h3>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                I am a{" "}
                <Badge variant="glow" className="mx-1 text-sm px-2.5 py-0.5">
                  Full-Stack Developer
                </Badge>{" "}
                with over
                <span className="text-primary font-bold mx-1">
                  3 years of experience
                </span>
                building and delivering
                <span className="text-primary font-bold mx-1">
                  production-ready software
                </span>
                that drives measurable business results.
              </p>
              <p>
                My expertise includes both{" "}
                <Badge
                  variant="gradient"
                  className="mx-1 text-sm px-2.5 py-0.5"
                >
                  modern front-end development
                </Badge>{" "}
                and{" "}
                <Badge
                  variant="gradient"
                  className="mx-1 text-sm px-2.5 py-0.5"
                >
                  scalable backend architecture
                </Badge>
                , enabling me to own projects end-to-end with a focus on
                performance, maintainability, and user impact.
              </p>
              <p>
                I bring strong foundations in{" "}
                <Badge variant="glow" className="mx-1 text-sm px-2.5 py-0.5">
                  DevOps & Automation
                </Badge>{" "}
                and a curiosity about{" "}
                <Badge variant="glow" className="mx-1 text-sm px-2.5 py-0.5">
                  new technologies
                </Badge>
                , ensuring the solutions I deliver are reliable today and
                adaptable for tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-fuchsia-400/50 shadow-md transition-all duration-500">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-md`}
                      >
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div
                          className={`text-xl md:text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex justify-center lg:justify-start">
              <AnimatedTooltip
                items={achievements}
                className="flex-wrap justify-center"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-30 rounded-xl blur-xl transition-opacity duration-500`}
                  />
                  <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-fuchsia-400/50 shadow-md transition-all duration-500">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-xl bg-gradient-to-r ${value.color} shadow-md flex-shrink-0`}
                      >
                        <value.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-lg md:text-xl mb-1 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}
                        >
                          {value.title}
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center pt-12"
            >
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                It’s time to build something extraordinary.
              </p>
              <Button
                className="relative px-6 md:px-8 py-3 rounded-lg font-bold text-white text-sm md:text-[15px]
             bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 
             shadow-lg transition-all duration-300 
             hover:scale-105 hover:shadow-md hover:animate-pulse-glow
             hover:brightness-105 active:scale-95"
              >
                Let's Work Together
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
