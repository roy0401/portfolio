import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Me | Roy",
  description: "Get in touch to discuss your next web project.",
};

export default function Page() {
  return <ContactContent />;
}
