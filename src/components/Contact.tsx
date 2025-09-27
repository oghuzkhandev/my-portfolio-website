"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  Calendar,
  Download,
  Phone,
  Loader2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mzzjdagg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast({
          title: "✅ Message sent successfully!",
          description:
            "Thank you for contacting with me. I will respond within 24 hours.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const error = await res.json();
        toast({
          title: "❌ Failed to send",
          description: error.error || "Something went wrong.",
        });
      }
    } catch (err) {
      toast({
        title: "⚠️ Network error",
        description: "Could not reach Internet.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oguzhandogandev@hotmail.com",
      href: "mailto:oguzhandogandev@hotmail.com",
      color: "from-green-600 to-green-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+90 533 430 01 77",
      href: "tel:+31612345678",
      color: "from-indigo-700 to-indigo-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "oguzhandogandev",
      href: "https://linkedin.com/in/oguzhandogandev/",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "oghuzkhandev",
      href: "https://github.com/oghuzkhandev",
      color: "from-gray-700 to-gray-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rotterdam, The Netherlands",
      href: null,
      color: "from-red-700 to-red-400",
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-12 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-accent-cyan bg-clip-text text-transparent">
              Let’s Work
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wider">
            I am currently looking for a full-time software engineering role in
            the Netherlands or across Europe where I can contribute, grow, and
            help build impactful solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex"
          >
            <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50 w-full">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {item.href ? (
                      <motion.a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/10 transition-all duration-300 group"
                      >
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </motion.a>
                    ) : (
                      <div className="flex items-center gap-4 p-4 rounded-xl">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                        >
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex"
          >
            <div className="h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50 w-full">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-br from-green-600 to-yellow-600 bg-clip-text text-transparent">
                Send Me a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                Interested in discussing a job role or project? I would be happy
                to connect.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      placeholder="Thomas Bakker"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="thomas_bakker@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    placeholder="Job Opportunity & Freelance Project"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }}>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about the role, your team and how I could contribute..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full h-14 text-lg font-semibold rounded-xl
                               bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 bg-card/80">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 text-white shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6" />
              <h4 className="text-2xl font-bold bg-gradient-to-br bg-clip-text from-yellow-600 to-yellow-400 text-transparent">
                Availability
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <Badge className="bg-gradient-to-r from-green-600 to-green-400 rounded-md text-gray-900 text-sm font-semibold">
                Available to start immediately
              </Badge>
            </div>
            <p className="mt-4 opacity-90">
              I am open to full-time positions in the Netherlands or across
              Europe. Let’s connect and explore how I can add value to your
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                size="lg"
                variant="neon"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-xl"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/oguzhan-dogan-cv.pdf";
                  link.download = "Oguzhan_Dogan_CV.pdf";
                  link.click();

                  toast({
                    title: "Download started 🚀",
                    description:
                      "Your CV is downloaded. Thanks for checking it out!",
                  });
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100 rounded-xl"
                variant="neon"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
