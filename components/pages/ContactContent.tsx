"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="pt-10 min-h-[70vh] flex flex-col justify-center">
      <Section className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
        >
           <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8">Let's discuss your project.</h1>
           <p className="text-xl text-muted mb-12 max-w-2xl mx-auto">
             Whether you have a clear vision or just a rough idea, I'm here to help you build a solution that works.
           </p>

           <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="https://wa.me/1234567890" target="_blank">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg w-full md:w-auto">
                  <Phone className="mr-3" size={20} />
                  Chat on WhatsApp
                </Button>
              </Link>
              
              <Link href="mailto:hello@roy.dev">
                <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg w-full md:w-auto">
                   <Mail className="mr-3" size={20} />
                   hello@roy.dev
                </Button>
              </Link>
           </div>

           <div className="mt-20 p-8 border border-white/5 rounded-2xl bg-card/30 inline-block text-left max-w-lg">
             <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">What happens next?</h3>
             <ul className="space-y-4 text-muted text-sm md:text-base">
               <li className="flex items-start">
                 <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">1</span>
                 We have a brief chat to understand your needs.
               </li>
               <li className="flex items-start">
                 <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">2</span>
                 I provide a clear proposal and timeline.
               </li>
               <li className="flex items-start">
                 <span className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">3</span>
                 We start building your new digital presence.
               </li>
             </ul>
           </div>
        </motion.div>
      </Section>
    </div>
  );
}
