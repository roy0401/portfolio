import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "Roy | Freelance Web Developer",
  description: "I design and build clean, reliable websites for real businesses.",
};

export default function Page() {
  return <HomeContent />;
}
