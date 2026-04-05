import type { Metadata } from "next";
import ExperienceContent from "@/components/pages/ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Roy",
  description: "Working experience and professional background.",
};

export default function Page() {
  return <ExperienceContent />;
}
