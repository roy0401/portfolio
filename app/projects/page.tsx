import type { Metadata } from "next";
import ProjectsContent from "@/components/pages/ProjectsContent";

export const metadata: Metadata = {
  title: "Selected Work | Roy",
  description: "A selection of my best work in web design and development.",
};

export default function Page() {
  return <ProjectsContent />;
}
