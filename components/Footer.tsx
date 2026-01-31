import Link from "next/link";
import { Github, Linkedin, Mail, Phone, Globe } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-white">{portfolio.personal.fullName}</h2>
            <p className="text-white/60 max-w-sm mb-8 font-light leading-relaxed">
              Building reliable, well-designed digital solutions for real businesses.
              Focused on long-term maintainability and clear communication.
            </p>
            <div className="flex space-x-6">
              {portfolio.socials.github && (
                <Link href={portfolio.socials.github} target="_blank" className="text-white/40 hover:text-primary transition-colors hover:scale-110 duration-300">
                  <Github size={22} />
                </Link>
              )}
              {portfolio.socials.linkedin && (
                <Link href={portfolio.socials.linkedin} target="_blank" className="text-white/40 hover:text-secondary transition-colors hover:scale-110 duration-300">
                  <Linkedin size={22} />
                </Link>
              )}
              <Link href={`mailto:${portfolio.personal.email}`} className="text-white/40 hover:text-accent transition-colors hover:scale-110 duration-300">
                <Mail size={22} />
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl font-serif font-semibold mb-6 text-white">Let's work together</h3>
            <div className="flex flex-col md:items-end space-y-4">
              <Link 
                href={`tel:${portfolio.personal.phone}`} 
                className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
              >
                <Phone size={18} />
                <span>{portfolio.personal.phone}</span>
              </Link>
              <Link 
                href={`mailto:${portfolio.personal.email}`} 
                className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
              >
                <Mail size={18} />
                <span>{portfolio.personal.email}</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/30">
          <p>{portfolio.footer.copyright}</p>
          <p className="mt-2 md:mt-0">Built with {portfolio.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
