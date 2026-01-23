import type { Metadata } from "next";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services | Roy",
  description: "Web development, design, and SEO services for your business.",
};

export default function Page() {
  return <ServicesContent />;
}
