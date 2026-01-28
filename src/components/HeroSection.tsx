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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          
          {/* LEFT SIDE - Content (stacked vertically) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <Card className="relative p-6 md:p-8 bg-card/30 backdrop-blur-2xl border-border/30 overflow-hidden group">
              {/* Gradient border glow */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/50 via-primary/30 to-accent/50 rounded-xl opacity-60 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
              <div className="absolute inset-0 bg-card/80 backdrop-blur-xl rounded-xl" />
              
              <div className="relative z-10">
                {/* Name */}
                <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-hero-text mb-3">
                  Atul Kumar
                </h1>

                {/* Role */}
                <div className="flex items-center gap-2 text-accent font-medium mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span>Data Analyst</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-hero-text-muted text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>India</span>
                </div>

                {/* Tagline / Description */}
                <div className="relative mb-6">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent mb-3" />
                  <p className="text-hero-text-muted text-sm md:text-base leading-relaxed">
                    Entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
                    I turn raw data into actionable insights through clean analysis, smart dashboards, 
                    and business-focused storytelling.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mb-6">
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
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Projects
                  </Button>
                  <a href="/Resume.pdf" download>
                    <Button
                      variant="outline"
                      className="w-full border-hero-text/30 bg-hero-text/10 text-hero-text hover:bg-hero-text/20 gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Resume
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="relative w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Outer glow ring - profile glow gradient */}
                <div className="absolute -inset-3 bg-gradient-to-r from-profile-glow via-profile-glow-alt to-profile-glow rounded-full blur-lg opacity-60 animate-pulse" />
                <div className="absolute -inset-1.5 bg-gradient-to-r from-profile-glow via-profile-glow-alt to-profile-glow rounded-full opacity-80" />
                {/* Inner image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-profile-glow/60 shadow-2xl shadow-profile-glow/30">
                  <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-3 right-3 w-6 h-6 bg-accent rounded-full border-3 border-background shadow-lg" />
              </motion.div>
            </motion.div>
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