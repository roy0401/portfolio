import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Me | Roy",
  description: "Learn about my journey from academia to freelance web development.",
};

export default function Page() {
  return <AboutContent />;
}
