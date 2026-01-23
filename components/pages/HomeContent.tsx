"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex flex-col justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl"
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium tracking-wide border-l-2 border-primary pl-4 mb-6">
            Software Developer / Freelance Web Developer
          </motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-serif leading-tight mb-6 text-foreground">
            I design and build clean, <span className="text-muted-foreground">reliable websites</span> for real businesses.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Helping professionals and businesses establish a premium digital presence with focused, maintainable, and effective web solutions.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* What I Do Section */}
      <Section className="bg-card/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Websites",
                description: "Professional, high-converting websites for companies that need to build trust instantly.",
              },
              {
                title: "Restaurant Websites",
                description: "Elegant, appetizing digital menus and reservation systems that reflect your dining experience.",
              },
              {
                title: "Portfolio & Landing Pages",
                description: "Personal branding sites that highlight your expertise and convert visitors into clients.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Featured Work Section */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="flex justify-between items-end mb-12">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold">
              Featured Work
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Link href="/projects" className="hidden md:flex items-center text-primary font-medium hover:text-white transition-colors">
                View all projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "DEN Culinary",
                category: "Website Redesign",
                description: "A premium digital experience for a high-end culinary brand.",
                bg: "bg-[#1a1a1a]",
              },
              {
                title: "Arch Studio",
                category: "Portfolio",
                description: "Minimalist portfolio for an architecture firm showcasing their best work.",
                bg: "bg-[#202020]",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className={`aspect-video rounded-2xl ${project.bg} mb-6 overflow-hidden relative border border-white/5`}>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted/20 group-hover:scale-105 transition-transform duration-700">
                    <span className="text-4xl font-serif opacity-20">{project.title}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-primary mb-2 uppercase tracking-wider font-medium">{project.category}</p>
                <p className="text-muted">{project.description}</p>
              </motion.div>
            ))}
          </div>
          
           <motion.div variants={fadeInUp} className="mt-10 md:hidden">
              <Link href="/projects" className="flex items-center text-primary font-medium hover:text-white transition-colors">
                View all projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
        </motion.div>
      </Section>

      {/* Why Work With Me */}
      <Section className="bg-card/30">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Why Work With Me?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted mb-8 leading-relaxed">
              I don't just write code; I provide reliable technical partnership. 
              My focus is on delivering practical, high-quality solutions that serve your business goals not just today, but for the long term.
            </motion.p>
            <ul className="space-y-4">
              {[
                "Clear, jargon-free communication",
                "Practical, business-first solutions",
                "Uncompromising attention to detail",
                "Focus on long-term maintainability"
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start">
                  <CheckCircle2 className="text-primary mr-3 mt-1 shrink-0" size={20} />
                  <span className="text-foreground/90">{item}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={fadeInUp} className="mt-10">
               <Link href="/about">
                <Button variant="outline" className="rounded-full">More About Me</Button>
              </Link>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="bg-gradient-to-br from-card to-background rounded-2xl p-1 border border-white/5 aspect-square relative md:max-w-md mx-auto">
             {/* Abstract visual or placeholder for profile picture */}
             <div className="absolute inset-4 border border-primary/20 rounded-xl flex items-center justify-center">
                 <span className="font-serif text-6xl text-primary/20">Roy.</span>
             </div>
          </motion.div>
        </motion.div>
      </Section>
    </div>
  );
}
