import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Roy.</h2>
            <p className="text-muted max-w-sm mb-8">
              Building reliable, well-designed digital solutions for real businesses.
              Focused on long-term maintainability and clear communication.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="mailto:hello@roy.dev" className="text-muted hover:text-primary transition-colors">
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div className="md:text-right">
            <h3 className="text-xl font-serif font-semibold mb-6">Let's work together</h3>
            <div className="flex flex-col md:items-end space-y-4">
              <Link 
                href="https://wa.me/1234567890" 
                className="inline-flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+1 (234) 567-8900</span>
              </Link>
              <Link 
                href="mailto:hello@roy.dev" 
                className="inline-flex items-center space-x-2 text-muted hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>hello@roy.dev</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Roy. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built by Roy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
