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

      <motion.div className="container-custom relative z-10 py-20 md:py-32" style={{ opacity }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/20 border border-accent/30 text-accent rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Data Analyst | Business Intelligence | MIS
            </span>

            <h1 className="font-display text-5xl font-bold text-hero-text mb-6">
              Hi, I'm <span className="text-accent">Atul Kumar</span>
            </h1>

            <p className="text-lg text-hero-text-muted mb-10 max-w-xl mx-auto lg:mx-0">
              An entry-level Data Analyst skilled in SQL, Advanced Excel, Power BI, and Python. 
              Passionate about transforming raw data into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <Eye className="w-5 h-5" />
                View Projects
              </Button>

              {/* DOWNLOAD RESUME FIXED */}
              <a href="/Resume.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-hero-text/30 bg-hero-text/10 text-hero-text gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-hero-text/30 bg-hero-text/10 text-hero-text gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </div>

            {/* Social */}
            <div className="flex justify-center lg:justify-start gap-3">
              <a href="https://github.com/atulkumar7810" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-hero-text" />
              </a>
              <a href="https://www.linkedin.com/in/atulkumar-s/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-hero-text" />
              </a>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button onClick={() => scrollToSection('#about')} className="text-hero-text-muted">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
