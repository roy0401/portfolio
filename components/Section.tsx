import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-20 md:py-32 px-6 max-w-7xl mx-auto", className)}>
      {children}
    </section>
  );
};

export default Section;
