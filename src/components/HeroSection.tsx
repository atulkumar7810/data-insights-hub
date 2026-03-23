import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Eye, Github, Linkedin, MapPin, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';
import { useRef, useState, useEffect, useCallback } from 'react';

// Cycling roles for typing effect
const roles = [
  "Data Analyst",
  "Power BI Developer",
  "SQL Enthusiast",
  "BI Analyst",
];

const useRoleCycler = (items: string[], typingSpeed = 60, pauseDuration = 2000, deleteSpeed = 35) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const currentRole = items[currentIndex];
    let timeout: NodeJS.Timeout;

    if (phase === 'typing') {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pauseDuration);
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 100);
    } else if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, currentIndex, items, typingSpeed, pauseDuration, deleteSpeed]);

  return { displayedText, phase };
};

// Floating particle component
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-accent/20"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.2, 0.5, 0.2],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 5 + Math.random() * 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut",
    }}
  />
);

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { displayedText, phase } = useRoleCycler(roles, 70, 2200, 40);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-[92vh] flex items-center bg-background overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Floating particles */}
        <FloatingParticle delay={0} x="15%" y="20%" size={6} />
        <FloatingParticle delay={1.5} x="75%" y="30%" size={4} />
        <FloatingParticle delay={3} x="60%" y="70%" size={5} />
        <FloatingParticle delay={2} x="30%" y="80%" size={3} />
        <FloatingParticle delay={4} x="85%" y="60%" size={4} />
      </div>

      <div className="container-custom relative z-10 py-24 pt-28 md:py-32 md:pt-36">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
          
          {/* LEFT SIDE - Content (staggered entrance) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="relative z-10">
              {/* Name — larger, tighter tracking */}
              <motion.h1
                variants={staggerItem}
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 tracking-tight leading-[1.1]"
              >
                Atul Kumar
              </motion.h1>

              {/* Cycling Role */}
              <motion.div variants={staggerItem} className="flex items-center gap-2 text-accent font-semibold text-lg md:text-xl mb-3">
                <Briefcase className="w-5 h-5" />
                <span className="min-w-[220px]">
                  {displayedText}
                  <motion.span
                    className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-middle"
                    animate={{ opacity: phase === 'pausing' ? [1, 0] : 1 }}
                    transition={{ duration: 0.5, repeat: phase === 'pausing' ? Infinity : 0, repeatType: 'reverse' }}
                  />
                </span>
              </motion.div>

              {/* Location */}
              <motion.div variants={staggerItem} className="flex items-center gap-1.5 text-muted-foreground text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </motion.div>

              {/* Tagline */}
              <motion.div variants={staggerItem} className="relative mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-5" />
                <p className="text-accent text-xl md:text-2xl font-semibold mb-4 tracking-tight">
                  "Turning data into business insights."
                </p>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg">
                  Data Analyst with hands-on expertise in SQL, Power BI, Excel, and Python — backed by 
                  multiple real-world analytics projects across FMCG, Retail, Real Estate, and Transportation. 
                  I deliver actionable insights through clean analysis, interactive dashboards, and data-driven storytelling.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={staggerItem} className="flex gap-3 mb-8">
                <motion.a 
                  href="https://github.com/atulkumar7810" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent/40 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.08, boxShadow: '0 0 20px hsl(175 70% 50% / 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 text-foreground" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/atulkumar-s/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent/40 transition-all duration-300"
                  whileHover={{ y: -3, scale: 1.08, boxShadow: '0 0 20px hsl(175 70% 50% / 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </motion.a>
              </motion.div>

              {/* CTA Buttons — gradient primary + outline secondary */}
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <Button
                    onClick={() => scrollToSection('#projects')}
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-accent to-primary text-accent-foreground gap-2 rounded-2xl shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:shadow-xl transition-all duration-500 px-8"
                  >
                    <Eye className="w-4 h-4" />
                    View Projects
                  </Button>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                  <a href="/Resume.pdf" download className="block">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-accent/30 bg-transparent text-foreground hover:bg-accent/10 hover:border-accent/50 gap-2 rounded-2xl transition-all duration-500 px-8"
                    >
                      <Download className="w-4 h-4" />
                      Resume
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="relative w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated gradient border ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-profile-glow via-accent to-profile-glow-alt opacity-75 blur-sm animate-spin" style={{ animationDuration: '6s' }} />
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-profile-glow via-profile-glow-alt to-accent opacity-90" style={{ animation: 'spin 4s linear infinite reverse' }} />
                
                {/* Outer glow effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-profile-glow/30 via-accent/20 to-profile-glow-alt/30 rounded-full blur-xl"
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Inner image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-background shadow-lg">
                  <img src={profilePhoto} alt="Atul Kumar" className="w-full h-full object-cover" />
                </div>
                
                {/* Status indicator */}
                <motion.div
                  className="absolute bottom-3 right-3 w-5 h-5 bg-accent rounded-full border-2 border-background shadow-md"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button 
            onClick={() => scrollToSection('#about')} 
            className="text-muted-foreground p-2 hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
