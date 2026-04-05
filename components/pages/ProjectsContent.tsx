"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

import portfolio from "@/data/portfolio.json";
import Image from "next/image";

export default function Projects() {
  const projectColors = [
    "from-stone-900 to-stone-800",
    "from-slate-900 to-slate-800",
    "from-neutral-900 to-neutral-800"
  ];

  return (
    <div className="pt-10">
      <Section>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Selected Work</h1>
          <p className="text-xl text-muted max-w-2xl mb-20 text-white/60">
            A collection of projects demonstrating my commitment to clean code and user-centric design.
          </p>

          <div className="space-y-32">
            {portfolio.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Project Visual */}
                <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${projectColors[index % projectColors.length]} border border-white/5 relative shadow-2xl flex items-center justify-center p-8 overflow-hidden`}>
                   {project.image ? (
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className={`object-cover ${
                              project.imagePosition === 'left' ? 'object-left' : 
                              project.imagePosition === 'right' ? 'object-right' : 'object-center'
                            }`} 
                        />
                   ) : (
                       <h3 className="text-4xl font-serif font-bold text-white/10">{project.title}</h3>
                   )}
                </div>

                {/* Project Details */}
                <div>
                   <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">{project.techStack[0]}</span>
                   <h2 className="text-3xl font-serif font-bold mb-6 text-secondary">{project.title}</h2>
                   
                   <div className="space-y-6 mb-8 text-muted">
                      <div>
                        <h4 className="text-foreground font-semibold mb-2 ">Description</h4>
                        <p className="text-white/60">{project.description}</p>
                      </div>
                      
                      {project.features && (
                          <div>
                            <h4 className="text-foreground font-semibold mb-2">Key Features</h4>
                            <ul className="list-disc pl-5 space-y-1 text-white/60">
                                {project.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                          </div>
                      )}
                   </div>

                   <div className="flex flex-wrap gap-2 mb-8">
                     {project.techStack.map(t => (
                        <span key={t} className="px-3 py-1 bg-card rounded-md text-xs text-muted-foreground border border-primary text-secondary/60">{t}</span>
                     ))}
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
