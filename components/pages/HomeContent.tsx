"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Server, Database, Cpu } from "lucide-react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import LiquidEther from "@/components/ui/LiquidBackground";
import TechFloatingIcons from "@/components/ui/TechFloatingIcons";
import portfolio from "@/data/portfolio.json";

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
  const projectColors = [
    "bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]",
    "bg-gradient-to-br from-[#202020] to-[#101010]",
    "bg-gradient-to-br from-[#151515] to-[#050505]" 
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden isolate">
      <LiquidEther className="!fixed inset-0 -z-10 transition-opacity duration-1000 ease-in-out"
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={25}
        cursorSize={90}
        isViscous
        viscous={20}
        iterationsViscous={4}
        iterationsPoisson={4}
        resolution={0.2}
        dt={0.02}
        isBounce={false}
        autoDemo
        autoSpeed={0.3}
        autoIntensity={1.5}
        takeoverDuration={0.3}
        autoResumeDelay={500}
        autoRampDuration={0.8}
      />
      {/* Hero Section */}
      <Section className="min-h-[85vh] flex flex-col justify-start pt-14 md:pt-20 relative">
        <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-primary rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
             <span className="text-sm font-medium tracking-wide text-white/80">{portfolio.personal.role}</span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif leading-[1.1] mb-4 text-foreground tracking-tight">
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x pb-1"> software</span> that solves.
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed font-light">
             Developer focused on solid backends and smooth apps. Turning complex problems into simple, reliable code.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-white/90 transition-all duration-300 font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View My Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-primary hover:bg-white/10 backdrop-blur-sm transition-all duration-300 text-white/90">
                Contact Me
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* What I Do Section */}
      <Section className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2">
            Technical Focus
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Backend Architecture",
                description: "Designing and building robust, fast, and scalable server-side systems and RESTful APIs.",
                icon: <Server size={32} className="text-primary transition-colors duration-300 group-hover:text-secondary" />
              },
              {
                title: "System Integration",
                description: "Seamlessly connecting third-party services, legacy databases, and modern tools.",
                icon: <Database size={32} className="text-primary transition-colors duration-300 group-hover:text-secondary" />
              },
              {
                title: "AI & Modernization",
                description: "Enhancing existing infrastructure with intelligent capabilities and modernizing codebases.",
                icon: <Cpu size={32} className="text-primary transition-colors duration-300 group-hover:text-secondary" />
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-3xl bg-white/[0.03] backdrop-blur-lg border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                  <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500 ">{service.icon}</div>
                <h3 className="text-2xl font-serif font-semibold mb-4 text-white group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-white/70 leading-relaxed font-light">{service.description}</p>
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
          <div className="flex justify-between items-end mb-16">
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-2">
              Past Projects
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Link href="/projects" className="hidden md:flex items-center text-white/80 text-lg hover:text-primary transition-colors">
                View all projects <ArrowRight size={20} className="ml-2" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {portfolio.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className={`aspect-video rounded-3xl ${projectColors[index % projectColors.length]} mb-8 overflow-hidden relative border border-white/10 shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    {project.image ? (
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill 
                            className={`object-cover group-hover:scale-105 transition-transform duration-1000 ease-out ${
                              project.imagePosition === 'left' ? 'object-left' : 
                              project.imagePosition === 'right' ? 'object-right' : 'object-center'
                            }`} 
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-white/10 group-hover:scale-105 transition-transform duration-1000 ease-out">
                            <span className="text-5xl font-serif font-bold tracking-tighter opacity-30 group-hover:opacity-50 transition-opacity">
                                {project.title.split(' ')[0]}
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-3xl font-serif font-bold mb-2 text-white group-hover:text-secondary transition-colors duration-300">{project.title}</h3>
                        <p className="text-sm text-primary mb-3 uppercase tracking-widest font-semibold">{project.techStack[0]}</p>
                    </div>
                 </div>
                 <p className="text-muted-foreground font-light text-lg">{project.description}</p>

              </motion.div>
            ))}
          </div>
          
           <motion.div variants={fadeInUp} className="mt-12 md:hidden">
              <Link href="/projects" className="flex items-center text-white/80 font-medium hover:text-primary transition-colors">
                View all projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
        </motion.div>
      </Section>

      {/* Why Work With Me */}
      <Section className="mb-20">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="relative rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/5 p-8 md:p-16 overflow-hidden"
        >
             <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[80px] rounded-full pointer-events-none" />
             <div className="absolute bottom-0 left-0 p-32 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-serif font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-2">
                  Why Hire Me?
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-10 leading-relaxed font-light">
                  I don't just write code. I <span className="text-white font-medium">engineer reliable systems</span>. <br />
                  Delivering scalable, high-quality, and straightforward software that solves complex problems.
                </motion.p>
                <ul className="space-y-6">
                  {[
                    "Adaptable to new technologies quickly",
                    "Strong problem-solving mindset",
                    "Uncompromising code quality",
                    "Focus on scalable architecture"
                  ].map((item, index) => (
                    <motion.li key={index} variants={fadeInUp} className="flex items-start">
                        <div className="bg-primary/20 p-1 rounded-full mr-4 mt-1">
                             <CheckCircle2 className="text-primary" size={18} />
                        </div>
                      <span className="text-white/90 text-lg font-light">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div variants={fadeInUp} className="mt-12">
                   <Link href="/about">
                    <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-primary text-white/90 hover:bg-white/10 hover:border-white/40 hover:text-white">More About Me</Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div variants={fadeInUp} className="relative h-[500px] w-full hidden md:block">
                 <TechFloatingIcons />
              </motion.div>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
