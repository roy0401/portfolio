"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import portfolio from "@/data/portfolio.json";

export default function About() {
  const { personal } = portfolio;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // As the user scrolls, the opacity swaps smoothly with a slight scale effect.
  const image1Opacity = useTransform(scrollYProgress, [0.35, 0.55], [1, 0]);
  const image2Opacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0.35, 0.65], [1, 1.08]);

  return (
    <div className="pt-5 min-h-[100vh] pb-15" ref={containerRef}>
      <Section>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Sticky Image with Transition */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:sticky lg:top-32 relative h-64 w-64 md:h-80 md:w-80 lg:h-80 lg:w-80 lg:mt-4 lg:ml-auto mx-auto rounded-full overflow-hidden border-2 border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm group">
             {/* Original Image */}
             <motion.div 
               style={{ opacity: image1Opacity, scale: imageScale }} 
               className="absolute inset-0 z-20 w-full h-full"
             >
                {personal.profileImage && (
                    <Image 
                        src={personal.profileImage}
                        alt="Profile"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                )}
             </motion.div>
             
             {/* Target Image to transition into */}
             <motion.div 
               style={{ opacity: image2Opacity, scale: imageScale }} 
               className="absolute inset-0 z-10 w-full h-full"
             >
                <Image 
                    src="/assets/images/profileImage.JPG"
                    alt="Another Profile Angle"
                    fill
                    className="object-cover object-center"
                    priority
                />
             </motion.div>

             {/* Inner border / glow */}
             <div className="absolute inset-0 z-30 pointer-events-none rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.3)]" />
          </div>

          {/* Right Column: Text Content */}
          <div className="order-1 lg:order-2 lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                More than just code. <br />
                <span className="text-muted-foreground">A partner in your success.</span>
              </h1>
              
              <div className="prose prose-lg prose-invert text-white/70 font-light leading-relaxed">
                <p className="mb-6">
                  Hi, I’m {personal.fullName} — a Software Engineer who enjoys figuring out how things work and building systems that actually make sense.
                </p>
                <p className="mb-6">
                  My background started in academia, where I picked up a very structured way of thinking. I’m the type who likes to break things down, understand the logic behind them, and get the details right. That mindset naturally carried over into how I work today.
                </p>
                <p className="mb-6">
                  I’m quite calm and methodical. I don’t rush into things — I prefer to take a step back, think it through, and build something properly. Sometimes that means spending extra time refining small details, but I’d rather do it right than just make it work.
                </p>
                <p className="mb-6">
                  I’m not very loud, but I pay attention. I tend to notice patterns, think ahead about potential issues, and constantly look for ways to improve what I’m doing. I also try to keep communication simple and clear — no unnecessary jargon, just practical thinking.
                </p>
                <p className="mb-10">
                  At the end of the day, I’m someone who enjoys learning, improving, and building things step by step, with a focus on doing it well.
                </p>
              </div>

              <div className="mt-16">
                <Link href="/contact">
                   <Button className="rounded-full px-8 py-6 text-lg bg-white text-black hover:bg-white/90 transition-all duration-300 font-semibold shadow-xl">
                     Let's Discuss Your Project
                   </Button>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </Section>
    </div>
  );
}
