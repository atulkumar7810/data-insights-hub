import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="font-display text-2xl font-bold mb-4 inline-block"
            >
              ATUL<span className="text-accent">.</span>
            </a>
            <p className="text-background/70 text-sm">
              Data Analyst | Business Intelligence | MIS Professional
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(`#${link.toLowerCase()}`)}
                className="text-sm text-background/70 hover:text-accent transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/atulkumar7810"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/atulkumar-s78/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:atulkumarsingh7810@gmail.com"
              className="p-2 bg-background/10 hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Atul Kumar. All rights reserved.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-accent" /> in Hyderabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
