"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    title: "DEN Culinary",
    category: "Website Redesign",
    problem: "The client needed a digital presence that matched the high-end, sensory experience of their culinary services. The old site was cluttered and outdated.",
    solution: "I designed a minimalist, dark-themed website that puts high-quality imagery at the forefront. The navigation was streamlined to focus on the menu and reservation funnel.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: { demo: "#", code: "#" },
    color: "from-stone-900 to-stone-800"
  },
  {
    title: "Academic Analytics Dashboard",
    category: "Web Application",
    problem: "Researchers needed a way to visualize complex datasets without navigating through dense spreadsheets.",
    solution: "Built a responsive dashboard that turns raw data into interactive charts. Focused on performance and clarity, ensuring data is accessible and actionable.",
    tech: ["React", "D3.js", "Node.js"],
    links: { demo: "#", code: "#" },
    color: "from-slate-900 to-slate-800"
  },
  {
    title: "Arch Studio Portfolio",
    category: "Portfolio Site",
    problem: "An architecture firm required a portfolio that didn't distract from their work but rather framed it perfectly.",
    solution: "Adopted a 'quiet' design philosophy with a strict grid system and subtle typography, allowing the architectural photography to speak for itself.",
    tech: ["Next.js", "Vercel", "CSS Modules"],
    links: { demo: "#", code: "#" },
    color: "from-neutral-900 to-neutral-800"
  }
];

export default function Projects() {
  return (
    <div className="pt-10">
      <Section>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted max-w-2xl mb-20">
            A collection of projects demonstrating my commitment to clean code and user-centric design.
          </p>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Project Visual (Placeholder) */}
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} border border-white/5 relative shadow-2xl flex items-center justify-center p-8`}>
                   <h3 className="text-4xl font-serif font-bold text-white/10">{project.title}</h3>
                </div>

                {/* Project Details */}
                <div>
                   <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">{project.category}</span>
                   <h2 className="text-3xl font-serif font-bold mb-6">{project.title}</h2>
                   
                   <div className="space-y-6 mb-8 text-muted">
                      <div>
                        <h4 className="text-foreground font-semibold mb-2">The Challenge</h4>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-foreground font-semibold mb-2">The Solution</h4>
                        <p>{project.solution}</p>
                      </div>
                   </div>

                   <div className="flex flex-wrap gap-2 mb-8">
                     {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-card rounded-md text-xs text-muted-foreground border border-white/5">{t}</span>
                     ))}
                   </div>

                   <div className="flex gap-4">
                      <Button variant="outline" className="rounded-full gap-2">
                        <ExternalLink size={16} /> Live Demo
                      </Button>
                      <Button variant="ghost" className="rounded-full gap-2 text-muted hover:text-foreground">
                        <Github size={16} /> Code
                      </Button>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
