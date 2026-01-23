"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-10">
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">
            More than just code. <br />
            <span className="text-muted-foreground">A partner in your success.</span>
          </h1>
          
          <div className="prose prose-lg prose-invert text-muted">
            <p className="mb-6">
              Hello, I'm Roy. I am a software developer transitioning into freelance work with a singular mission: to bring professional, reliable, and high-quality web solutions to real businesses.
            </p>
            <p className="mb-6">
              My journey started in academia, where I honed my analytical skills and learned the importance of structure, logic, and precision. Transitioning from a graduate environment to the professional world, I carried these values with me.
            </p>
            <p className="mb-6">
              I believe that a website is more than just a digital brochure; it's a tool that should solve problems. Whether it's streamlining a reservation system for a restaurant or establishing a credible digital footprint for a consultant, every line of code I write is purposeful.
            </p>
            <p className="mb-10">
              My approach is calm, methodical, and transparent. I don't hide behind technical jargon. Instead, I focus on clear communication and practical solutions that add tangible value to your business.
            </p>
          </div>

          <Link href="/contact">
             <Button className="rounded-full">Let's Discuss Your Project</Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
