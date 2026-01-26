import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Eye, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';
import { useRef } from 'react';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: '📊' },
  { label: 'Tools Mastered', value: '12+', icon: '🛠️' },
  { label: 'Dashboards Built', value: '15+', icon: '📈' },
];

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
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </motion.div>

      <div className="absolute inset-0 dot-pattern opacity-30" />

      <motion.div className="container-custom relative z-10 py-24 pt-28 md:py-32 md:pt-36" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-xs sm:text-sm font-semibold mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Data Analyst | Business Intelligence | MIS
            </span>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-hero-text mb-4 md:mb-6">
              Hi, I'm <span className="text-accent">Atul Kumar</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-hero-text-muted mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
              An entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
              Passionate about transforming raw data into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mb-6 md:mb-10 px-2 sm:px-0">
              <Button
                size="default"
                onClick={() => scrollToSection('#projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 min-h-[44px] text-sm md:text-base"
              >
                <Eye className="w-4 h-4 md:w-5 md:h-5" />
                View Projects
              </Button>

              {/* DOWNLOAD RESUME FIXED */}
              <a href="/Resume.pdf" download>
                <Button
                  size="default"
                  variant="outline"
                  className="border-hero-text/30 bg-hero-text/10 text-hero-text gap-2 min-h-[44px] text-sm md:text-base"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  Download Resume
                </Button>
              </a>

              <Button
                size="default"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-hero-text/30 bg-hero-text/10 text-hero-text gap-2 min-h-[44px] text-sm md:text-base"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social */}
            <div className="flex justify-center lg:justify-start gap-3">
              <a 
                href="https://github.com/atulkumar7810" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-hero-text/10 hover:bg-hero-text/20 transition-colors"
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-hero-text" />
              </a>
              <a 
                href="https://www.linkedin.com/in/atulkumar-s/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-hero-text/10 hover:bg-hero-text/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-hero-text" />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-accent/30"
            >
              <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <button 
            onClick={() => scrollToSection('#about')} 
            className="text-hero-text-muted p-2 hover:text-hero-text transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
