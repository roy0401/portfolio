"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Check, Smartphone, Zap, Search, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <div className="pt-10">
      <Section>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-20"
         >
           <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Services</h1>
           <p className="text-xl text-muted">
             Straightforward web development solutions tailored for your business needs. No hidden fees, no complexity.
           </p>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Main Service Card */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-card p-10 rounded-3xl border border-white/5"
            >
               <h2 className="text-3xl font-serif font-bold mb-4">Website Design & Development</h2>
               <p className="text-muted text-lg mb-8 max-w-3xl">
                 I build websites from scratch or redesign existing ones to meet modern standards. My focus is on creating a site that not only looks good but works flawlessly for your customers.
               </p>

               <div className="grid md:grid-cols-2 gap-6">
                 {[
                   { icon: Smartphone, title: "Mobile-Friendly", desc: "Looks perfect on all devices, from phones to desktops." },
                   { icon: Zap, title: "Fast Loading", desc: "Optimized for speed to keep visitors engaged." },
                   { icon: Search, title: "SEO-Ready", desc: "Built with best practices to help you rank on Google." },
                   { icon: MessageCircle, title: "WhatsApp Integration", desc: "Direct click-to-chat features to convert visitors." }
                 ].map((feature, i) => (
                   <div key={i} className="flex items-start">
                     <div className="bg-card p-3 rounded-xl border border-white/5 mr-4 text-primary">
                       <feature.icon size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                       <p className="text-sm text-muted">{feature.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Additional Info Cards (Optional, keeping it simple as per request) */}
         </div>

         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-20"
         >
            <p className="text-2xl font-serif text-foreground mb-8">Ready to upgrade your online presence?</p>
            <Link href="/contact">
               <Button size="lg" className="rounded-full px-10">Start a Project</Button>
            </Link>
         </motion.div>
      </Section>
    </div>
  );
}
