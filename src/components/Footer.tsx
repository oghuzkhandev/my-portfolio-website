"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            Designed & Built by Oguzhan Dogan
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8"
        >
          {[
            {
              href: "https://github.com/oghuzkhandev",
              icon: Github,
              label: "GitHub",
              hover: "hover:text-white hover:bg-gray-900",
            },
            {
              href: "https://linkedin.com/in/oguzhandogandev",
              icon: Linkedin,
              label: "LinkedIn",
              hover: "hover:text-white hover:bg-blue-600",
            },
            {
              href: "mailto:oguzhandogandev@hotmail.com",
              icon: Mail,
              label: "Email",
              hover: "hover:text-white hover:bg-red-500",
            },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                social.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                y: -5,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 group ${social.hover}`}
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          <p className="text-sm text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} All rights reserved. Built with modern
            web technologies.
          </p>
        </motion.div>
      </div>

      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </footer>
  );
}
