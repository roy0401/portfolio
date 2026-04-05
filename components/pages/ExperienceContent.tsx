"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Code, Database, Server, Cpu, Users } from "lucide-react";
import Image from "next/image";

export default function ExperienceContent() {
  return (
    <div className="">
      <Section>
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto mb-20"
         >
           <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Working Experience</h1>
           <p className="text-xl text-muted text-white/60">
             My professional journey and the impact I've made in past roles.
           </p>
         </motion.div>

         <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Bitlab Experience */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="group md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-card p-10 rounded-3xl border border-white/5 transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(255,159,252,0.15)] hover:-translate-y-1"
            >
               <div className="flex flex-col md:flex-row justify-start items-start md:items-center mb-6">
                 {/* Logo with black container */}
                 <div className="mt-6 mr-6 md:mt-0 relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-black flex-shrink-0 shadow-lg shadow-black/50">
                    <Image src="/assets/images/bitlab_digital_logo.jpg" alt="Bitlab Digital Logo" fill className="object-cover cursor-pointer" onClick={() => window.open("https://www.thebitlab.co/", "_blank")}/>
                 </div>
                 <div>
                   <h2 className="text-3xl font-serif font-bold mb-2 transition-colors duration-500 group-hover:text-secondary">Backend Developer Intern</h2>
                   <div className="flex items-center text-primary text-lg mt-2 ">
                     <span className="font-medium text-white/90">Bitlab Digital, Mont Kiara</span>
                   </div>
                 </div>

               </div>
               <p className="text-muted text-lg mb-8 max-w-3xl text-white/60 leading-relaxed">
                 Assigned to 3 different projects. <br /> 
                 Building backend solutions, database management, and implementing advanced features.
               </p>

               <div className="grid md:grid-cols-2 gap-6 mb-8">
                 {[
                   { icon: Code, title: "RESTful APIs", desc: "Built RESTful APIs to power the system." },
                   { icon: Database, title: "Database Migration", desc: "Migrated the database from a legacy system to a new system." },
                   { icon: Server, title: "Deployment", desc: "Handled the seamless deployment of the system." },
                   { icon: Cpu, title: "AI Integration", desc: "Enhanced the AI features implemented within the system." }
                 ].map((feature, i) => (
                   <div key={i} className="flex items-start">
                     <div className="bg-card p-3 rounded-xl border border-white/5 mr-4 text-primary transition-colors duration-500 group-hover:text-secondary">
                       <feature.icon size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                       <p className="text-sm text-muted text-white/60">{feature.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="pt-6 border-t border-white/10">
                 <h3 className="font-semibold text-lg mb-4 text-white/90">Tech Stack</h3>
                 <div className="flex flex-wrap gap-3">
                   {["ASP .NET Framework", "Umbraco CMS", "Microsoft SQL", "MVC Architecture", "Azure Document Intelligence"].map((tech, i) => (
                     <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
            </motion.div>            
            
            {/* Freelance Experience */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="group md:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-card p-10 rounded-3xl border border-white/5 transition-all duration-500 hover:border-secondary/50 hover:shadow-[0_0_30px_rgba(255,159,252,0.15)] hover:-translate-y-1"
            >
               <div className="flex flex-col md:flex-row justify-start items-start md:items-center mb-6">
                 {/* Logo with black container */}
                 <div className="mt-6 mr-6 md:mt-0 relative w-24 h-24 rounded-2xl overflow-hidden border border-white/10 bg-black flex-shrink-0 shadow-lg shadow-black/50">
                    <Image src="/assets/images/tech/Flutter.png" alt="Flutter" fill className="object-cover" onClick={() => window.open("https://cat-bounce.com/", "_blank")}/>
                 </div>
                 <div>
                   <h2 className="text-3xl font-serif font-bold mb-2 transition-colors duration-500 group-hover:text-secondary">Freelance Flutter Developer</h2>
                   <div className="flex items-center text-primary text-lg mt-2 ">
                     <span className="font-medium text-white/90">Freelance</span>
                   </div>
                 </div>

               </div>
               <p className="text-muted text-lg mb-8 max-w-3xl text-white/60 leading-relaxed">
                 Responsible for multiple project enhancement. <br /> 
                 Implementing and enhancing features by integrating existing APIs and third-party services.
               </p>

               <div className="grid md:grid-cols-2 gap-6 mb-8">
                 {[
                   { icon: Code, title: "Implement APIs", desc: "Implement existing APIs to enhance system feature." },
                   { icon: Users, title: "Integrate Third-Party Services", desc: "Integrate third-party services to enhance system feature." },
                   { icon: Server, title: "Export APKs", desc: "Export APKs for Android devices." },
                   { icon: Cpu, title: "UI/UX Design", desc: "Design and implement user interface and user experience." }
                 ].map((feature, i) => (
                   <div key={i} className="flex items-start">
                     <div className="bg-card p-3 rounded-xl border border-white/5 mr-4 text-primary transition-colors duration-500 group-hover:text-secondary">
                       <feature.icon size={24} />
                     </div>
                     <div>
                       <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                       <p className="text-sm text-muted text-white/60">{feature.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="pt-6 border-t border-white/10">
                 <h3 className="font-semibold text-lg mb-4 text-white/90">Tech Stack</h3>
                 <div className="flex flex-wrap gap-3">
                   {["Flutter", "Firebase"].map((tech, i) => (
                     <span key={i} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm">
                       {tech}
                     </span>
                   ))}
                 </div>
               </div>
            </motion.div>
         </div>
      </Section>
    </div>
  );
}
