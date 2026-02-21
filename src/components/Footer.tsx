import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.footer
      ref={ref}
      className="bg-card border-t border-border py-6"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Atul Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/atulkumar7810', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/atulkumar-s/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:atulkumarsingh7810@gmail.com', icon: Mail, label: 'Email' },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.label}
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
