import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </motion.div>

      <div className="absolute inset-0 dot-pattern opacity-20" />

      <motion.div className="container-custom relative z-10 py-20 pt-24 md:py-28 md:pt-32" style={{ opacity }}>
        <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center justify-center">
          
          {/* Modern Profile Card - Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full max-w-md"
          >
            <Card className="relative p-6 md:p-8 bg-card/30 backdrop-blur-2xl border-border/30 overflow-hidden group">
              {/* Gradient border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/50 via-primary/30 to-accent/50 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="absolute inset-0 bg-card/80 backdrop-blur-xl rounded-xl" />
              
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    className="relative w-28 h-28 md:w-32 md:h-32"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-full blur opacity-60" />
                    <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-background/50">
                      <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
                    </div>
                    {/* Status indicator */}
                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-accent rounded-full border-2 border-background" />
                  </motion.div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-hero-text mb-2">
                    Atul Kumar
                  </h1>
                  <div className="flex items-center justify-center gap-2 text-accent font-medium">
                    <Briefcase className="w-4 h-4" />
                    <span>Data Analyst</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center gap-1.5 text-hero-text-muted text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>

                {/* Tagline with accent line */}
                <div className="relative text-center mb-6">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                  <p className="text-hero-text-muted text-sm md:text-base italic">
                    "Turning data into business insights."
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mb-6">
                  <motion.a 
                    href="https://github.com/atulkumar7810" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-hero-text/10 hover:bg-accent/20 border border-hero-text/20 hover:border-accent/40 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5 text-hero-text" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/atulkumar-s/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-hero-text/10 hover:bg-accent/20 border border-hero-text/20 hover:border-accent/40 transition-all duration-300"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="w-5 h-5 text-hero-text" />
                  </motion.a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => scrollToSection('#projects')}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Projects
                  </Button>
                  <a href="/Resume.pdf" download className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-hero-text/30 bg-hero-text/10 text-hero-text hover:bg-hero-text/20 gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Resume
                    </Button>
                  </a>
                </div>
              </motion.div>
            </Card>
          </motion.div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-right max-w-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs sm:text-sm font-semibold mb-4">
                Data Analyst | Business Intelligence | MIS
              </span>
            </motion.div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-hero-text mb-4 leading-tight">
              Transforming <span className="text-accent">Raw Data</span> Into Strategic Insights
            </h2>

            <p className="text-sm sm:text-base text-hero-text-muted mb-6 leading-relaxed">
              Entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
              I turn raw data into actionable insights through clean analysis, smart dashboards, 
              and business-focused storytelling.
            </p>

            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-hero-text/30 bg-hero-text/10 text-hero-text hover:bg-hero-text/20 gap-2"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={() => scrollToSection('#about')} 
            className="text-hero-text-muted p-2 hover:text-hero-text transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;